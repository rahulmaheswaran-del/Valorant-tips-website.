// notes.js - saving notes, the note boxes on each site and the My Notes page
// (needs data.js and pages.js to load first)

var NOTES_KEY = "valorant-entry-notes";
var notes = {};          // all the saved notes go in here
var noteRenderers = {};  // so the notes page can update the cards

function loadNotes() {
  try {
    notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || {};
  } catch (e) {
    notes = {};   // if it breaks just start with no notes
  }
}

function saveNotes() {
  try {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    return true;
  } catch (e) {
    return false;
  }
}

// "A-site" -> "a-site" so it can be used in the key
function makeSlug(text) {
  return text.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// ---------- note box on each site card ----------

function addNoteBox(card) {
  var agent = card.closest(".view").getAttribute("data-view");
  var mapName = card.closest(".map-row").querySelector(".map-name").textContent.trim();
  var siteLetter = card.querySelector(".site-letter").textContent.trim();
  var key = "note:" + makeSlug(agent) + ":" + makeSlug(mapName) + ":" + makeSlug(siteLetter);

  var box = document.createElement("div");
  box.className = "note-ui";
  box.innerHTML =
    '<div class="note-display" style="display:none;"><span class="note-label">YOUR NOTE</span><span class="note-text"></span></div>' +
    '<div class="note-btn-row"><button type="button" class="note-edit-btn">+ add ur note</button>' +
    '<button type="button" class="note-delete-btn" style="display:none;">delete</button></div>' +
    '<div class="note-form" style="display:none;"><textarea class="note-input"></textarea>' +
    '<div class="note-form-actions"><button type="button" class="note-save-btn">save</button>' +
    '<button type="button" class="note-cancel-btn">cancel</button></div></div><p class="note-status"></p>';
  card.appendChild(box);

  var displayBox = box.querySelector(".note-display");
  var noteText = box.querySelector(".note-text");
  var editBtn = box.querySelector(".note-edit-btn");
  var deleteBtn = box.querySelector(".note-delete-btn");
  var noteForm = box.querySelector(".note-form");
  var noteInput = box.querySelector(".note-input");
  var status = box.querySelector(".note-status");
  noteInput.placeholder = "ur own tip for " + capitalise(agent) + " on " + mapName + " " + siteLetter + "...";

  // shows or hides the note depending if theres one saved
  function showNote() {
    var hasNote = notes[key] && notes[key].text;
    noteText.textContent = hasNote ? notes[key].text : "";
    displayBox.style.display = hasNote ? "block" : "none";
    editBtn.textContent = hasNote ? "edit note" : "+ add ur note";
    deleteBtn.style.display = hasNote ? "inline-block" : "none";
  }

  // saves, and puts the old note back if saving fails
  function saveOrUndo(oldNote, okMessage) {
    if (saveNotes()) {
      status.textContent = okMessage;
      setTimeout(function () { status.textContent = ""; }, 1500);
    } else {
      if (oldNote) { notes[key] = oldNote; } else { delete notes[key]; }
      status.textContent = "couldnt save, try again";
    }
    noteForm.style.display = "none";
    showNote();
    showNotesPage();
  }

  editBtn.addEventListener("click", function () {
    noteInput.value = (notes[key] && notes[key].text) || "";
    noteForm.style.display = "block";
    noteInput.focus();
  });

  box.querySelector(".note-cancel-btn").addEventListener("click", function () {
    noteForm.style.display = "none";
    status.textContent = "";
  });

  box.querySelector(".note-save-btn").addEventListener("click", function () {
    var value = noteInput.value.trim();
    if (value === "") {
      status.textContent = "write something first lol";
      return;
    }
    var oldNote = notes[key];
    notes[key] = { text: value, agent: agent, mapName: mapName, siteLetter: siteLetter, savedAt: new Date().toISOString() };
    saveOrUndo(oldNote, "saved!");
  });

  deleteBtn.addEventListener("click", function () {
    var oldNote = notes[key];
    delete notes[key];
    saveOrUndo(oldNote, "deleted");
  });

  noteRenderers[key] = showNote;
  showNote();
}

// ---------- the My Notes page ----------

function showNotesPage() {
  var list = document.getElementById("notes-list");
  var count = document.getElementById("notes-count");

  // put the notes in an array so they can be sorted newest first
  var entries = [];
  for (var key in notes) {
    if (notes[key] && notes[key].text) {
      entries.push({ key: key, data: notes[key] });
    }
  }
  entries.sort(function (a, b) {
    return (b.data.savedAt || "").localeCompare(a.data.savedAt || "");
  });

  if (entries.length === 0) {
    count.textContent = "";
    list.innerHTML = '<p class="notes-empty">no notes yet. open an agent, open a map and hit "+ add ur note" on any site.</p>';
    return;
  }

  count.textContent = entries.length + " saved";
  var html = "";
  for (var i = 0; i < entries.length; i++) {
    var d = entries[i].data;
    html += '<div class="saved-note-card" data-key="' + entries[i].key + '"><div class="saved-note-top">';
    html += '<span class="saved-note-meta">' + capitalise(d.agent) + ' - ' + d.mapName + ' - ' + d.siteLetter + '</span>';
    html += '<button type="button" class="note-delete-btn notes-page-delete">delete</button></div><p class="saved-note-text"></p></div>';
  }
  list.innerHTML = html;

  // textContent so weird characters dont break the page
  var cards = list.querySelectorAll(".saved-note-card");
  for (var j = 0; j < cards.length; j++) {
    cards[j].querySelector(".saved-note-text").textContent = notes[cards[j].getAttribute("data-key")].text;
    cards[j].querySelector(".notes-page-delete").addEventListener("click", function () {
      var thisKey = this.closest(".saved-note-card").getAttribute("data-key");
      var oldNote = notes[thisKey];
      delete notes[thisKey];
      if (!saveNotes()) { notes[thisKey] = oldNote; }
      if (noteRenderers[thisKey]) { noteRenderers[thisKey](); }
      showNotesPage();
    });
  }
}

// ---------- start everything ----------

loadNotes();
var siteCards = document.querySelectorAll(".site-card");
for (var k = 0; k < siteCards.length; k++) {
  addNoteBox(siteCards[k]);
}
showNotesPage();
showView("home");
