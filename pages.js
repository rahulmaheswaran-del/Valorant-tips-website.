// pages.js - builds the pages, nav and search box (AGENTS comes from data.js)

var agentNames = Object.keys(AGENTS);   // jett, raze, phoenix
var footerHTML = '<footer>made by a legend &bull; <b>not</b> affiliated with Riot &bull; tips change after patches so scrim em first or ur team will flame u</footer>';

function makeNav() {
  var html = '<nav class="topnav"><a href="#" class="brand nav-link" data-target="home">Field Notes.</a><div class="links">';
  for (var i = 0; i < agentNames.length; i++) {
    html += '<a href="#" class="nav-link" data-target="' + agentNames[i] + '">' + AGENTS[agentNames[i]].name + '</a>';
  }
  return html + '<a href="#" class="nav-link" data-target="notes">My Notes</a></div></nav>';
}

function makeHomePage() {
  var html = '<section class="view" data-view="home">' + makeNav();
  html += '<div class="hero"><p class="kicker">DUELIST ENTRY GUIDES</p><h1>Type an agent,<br><span>get the playbook.</span></h1>';
  html += '<p>Every entry duelists abilities and site by site tips. One search away. No more dying first</p></div>';
  html += '<div class="search-wrap"><form class="search-box" id="agent-form">';
  html += '<input type="text" id="agent-input" placeholder="type an agent... jett, raze, phoenix" autocomplete="off">';
  html += '<button type="submit">GO</button></form><p class="search-hint" id="agent-hint"></p></div>';

  // one card for each agent
  html += '<div class="agent-grid">';
  for (var i = 0; i < agentNames.length; i++) {
    var id = agentNames[i];
    html += '<a class="agent-card nav-link" href="#" data-target="' + id + '"><div class="avatar-circle">' + AGENTS[id].letter + '</div>';
    html += '<p class="agent-role">Duelist</p><h3>' + AGENTS[id].name + '</h3><p>' + AGENTS[id].blurb + '</p></a>';
  }
  return html + '</div>' + footerHTML + '</section>';
}

function makeAgentPage(id) {
  var agent = AGENTS[id];
  var html = '<section class="view" data-view="' + id + '">' + makeNav();
  html += '<div class="hero"><div class="hero-avatar">' + agent.letter + '</div>';
  html += '<p class="kicker">' + agent.name.toUpperCase() + ' - ENTRY NOTES</p>';
  html += '<h1>' + agent.h1[0] + '<br><span>' + agent.h1[1] + '</span></h1>';
  html += '<p>Every site on the map pool. Click a map to see how ' + agent.name + ' opens each entry.</p></div>';

  // the 3 abilities
  html += '<div class="abilities">';
  for (var i = 0; i < agent.abilities.length; i++) {
    html += '<div class="ability-card"><h3>' + agent.abilities[i][0] + '</h3><p>' + agent.abilities[i][1] + '</p></div>';
  }
  html += '</div><div class="maps-section"><div class="section-head"><h2>Maps</h2><span>tap a map to open its sites</span></div>';

  // all the maps and their sites
  for (var m = 0; m < agent.maps.length; m++) {
    var sites = agent.maps[m][1];
    html += '<details class="map-row"><summary><div><span class="map-name">' + agent.maps[m][0] + '</span>';
    html += '<span class="site-count">' + sites.length + ' sites</span></div><span class="arrow">&#9660;</span></summary><div class="map-body">';
    for (var s = 0; s < sites.length; s++) {
      html += '<div class="site-card"><div class="site-card-top"><span class="site-letter">' + sites[s][0] + '</span>';
      html += '<span class="tag">' + sites[s][1] + '</span></div><p>' + sites[s][2] + '</p></div>';
    }
    html += '</div></details>';
  }
  return html + '</div>' + footerHTML + '</section>';
}

function makeNotesPage() {
  var html = '<section class="view" data-view="notes">' + makeNav();
  html += '<div class="hero"><p class="kicker">YOUR SAVED STUFF</p><h1>Notes u<br><span>wrote urself.</span></h1>';
  html += '<p>Every tip u save on any map page shows up here too. Its saved in ur browser so it stays next time u open it.</p></div>';
  html += '<div class="notes-page"><div class="section-head"><h2>Saved notes</h2><span id="notes-count"></span></div><div id="notes-list"></div></div>';
  return html + footerHTML + '</section>';
}

// put all the pages on the screen
var allPages = makeHomePage();
for (var i = 0; i < agentNames.length; i++) {
  allPages += makeAgentPage(agentNames[i]);
}
document.getElementById("app").innerHTML = allPages + makeNotesPage();

// changing pages
function showView(name) {
  var views = document.querySelectorAll(".view");
  for (var i = 0; i < views.length; i++) {
    views[i].classList.toggle("active", views[i].getAttribute("data-view") === name);
  }
  window.scrollTo(0, 0);
}

var navLinks = document.querySelectorAll(".nav-link");
for (var j = 0; j < navLinks.length; j++) {
  navLinks[j].addEventListener("click", function (e) {
    e.preventDefault();
    showView(this.getAttribute("data-target"));
  });
}

// the search box
var form = document.getElementById("agent-form");
var input = document.getElementById("agent-input");
var hint = document.getElementById("agent-hint");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var typed = input.value.trim();
  var key = typed.toLowerCase();
  if (key === "") {
    hint.textContent = "type an agent name first lol";
    hint.classList.add("error");
  } else if (AGENTS[key]) {
    showView(key);
  } else {
    hint.textContent = 'no guide for "' + typed + '" yet. try Jett, Raze or Phoenix';
    hint.classList.add("error");
  }
});

// clear the error when they start typing again
input.addEventListener("input", function () {
  hint.textContent = "";
  hint.classList.remove("error");
});
