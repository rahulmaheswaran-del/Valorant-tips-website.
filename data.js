// data.js - all the agent info lives here
// each map is: [mapName, [ [site, abilityTag, tip], ... ]]

var AGENTS = {

  jett: {
    name: "Jett",
    letter: "J",
    blurb: "Fast wind girl. Hit and run entries.",
    h1: ["Get in first,", "get out clean."],
    abilities: [
      ["Cloudburst", "Quick smoke. Blocks angles or covers ur push. Cheap so spam it, good for peeking without getting traded."],
      ["Updraft", "Launches u straight up with no fall damage. Gets u on ledges and boxes most agents cant reach."],
      ["Tailwind", "Fast dash in the direction ur moving. Use it to close the gap on entry or escape a duel ur losing."]
    ],
    maps: [
      ["Ascent", [["A-site", "Updraft", "Updraft onto market and peek A main + the catwalk door before ur team goes underneath. Free info ngl."], ["B-site", "Tailwind", "Smoke first, then dash thru B main into site. Its a tight corridor so the smoke buys u like half a second."]]],
      ["Split", [["A-site", "Updraft", "Updraft to rafters. High ground over site and screen that nobody on the ground can contest."], ["B-site", "Cloudburst", "Smoke heaven before u push B main. The heaven sightline kills literally every entry here."]]],
      ["Haven", [["A-site", "Tailwind", "Dash from A long into site so u land past the choke and not in the middle of it. Defenders get less time to react."], ["B-site", "Cloudburst", "B is small and open from 3 angles. One smoke on the choke is usually enough for a clean look."], ["C-site", "Updraft", "Updraft onto the C long boxes for an early peek down long before ur team shows up."]]],
      ["Bind", [["A-site", "Cloudburst", "Smoke short before u push. No mid on Bind so both entries are narrow and blind peeks work."], ["B-site", "Tailwind", "Dash out of hookah into site. Beat the rotating defender to the corner before they reset."]]],
      ["Lotus", [["A-site", "Cloudburst", "Doors open and suddenly theres an angle. Smoke right BEFORE the door opens, not after."], ["B-site", "Updraft", "Updraft onto the mid platform to look over B before u use the rest of ur util."], ["C-site", "Tailwind", "Dash thru C main as the rotating door closes so the defender cant just re-peek u."]]],
      ["Corrode", [["A-site", "Updraft", "Updraft to the high ground and scout site before ur team fully commits."], ["B-site", "Cloudburst", "Smoke the main choke on entry. Defenders hold from above on Corrode so block that first."]]],
      ["Pearl", [["A-site", "Tailwind", "Dash thru A link. Its a long open hallway so speed matters more than util."], ["B-site", "Cloudburst", "Smoke the tower sightline before pushing B main so ur team can trade on the choke."]]],
      ["Sunset", [["A-site", "Cloudburst", "Smoke the long sightline into A before u enter. Being patient actually works here."], ["B-site", "Tailwind", "Dash into site off market to cut the angle defenders hold from the back corner."]]],
      ["Abyss", [["A-site", "Updraft", "No floor at the edges so be careful. Sick early peek but u WILL fall to ur death if u time it wrong."], ["B-site", "Cloudburst", "Smoke main choke first. Blind dashing on Abyss = walking off the map lol."]]],
      ["Fracture", [["A-site", "Tailwind", "Dash in from arrow. They dont expect the angle. Fracture is a flank map so use it."], ["B-site", "Updraft", "Updraft to the dish. Its one of the only spots that sees both entries."]]],
      ["Summit", [["A-site", "Cloudburst", "Smoke the long angle into A early. Sightlines on Summit are way longer than most maps."], ["B-site", "Tailwind", "Dash thru B main right on the edge of the smoke so u enter before it clears, not after."]]],
      ["Icebox", [["A-site", "Updraft", "Updraft onto the tube or crates. Icebox is all verticality so whoever has the tallest spot wins."], ["B-site", "Cloudburst", "Smoke the yellow container sightline before ur team pushes. That one angle ends most B entries."]]],
      ["Breeze", [["A-site", "Tailwind", "Dash across the open field into A. Sightlines are huge so speed saves u more than cover."], ["B-site", "Cloudburst", "Smoke main hall entry before u push. Open sites punish anyone going in with no cover."]]]
    ]
  },

  raze: {
    name: "Raze",
    letter: "R",
    blurb: "Explosives everywhere. Loud and aggressive.",
    h1: ["Blow the door open,", "walk right in."],
    abilities: [
      ["Boom Bot", "Rolling bot that finds the first enemy it sees and hits them. Send it ahead to clear a corner before u commit."],
      ["Blast Pack", "Satchel that launches u when it goes off. Core of most entries. Boost round corners or onto ledges fast."],
      ["Paint Shells", "Cluster grenade that covers a big area. Throw it in a tight space and force defenders out before ur team walks in."]
    ],
    maps: [
      ["Ascent", [["A-site", "Paint Shells", "Clear the boxes on A with Paint Shells before ur team steps out of market. Most common holding spot."], ["B-site", "Blast Pack", "Satchel boost off the wall into B site. Get there before defenders can rotate from mid."]]],
      ["Split", [["A-site", "Blast Pack", "Satchel jump onto rafters for a high peek. Faster than Jetts updraft but costs more util."], ["B-site", "Boom Bot", "Send the bot down B main first. Corridor is narrow so it finds whoever is holding close."]]],
      ["Haven", [["A-site", "Boom Bot", "Roll the bot down A long ahead of u to check for anyone in the far corner."], ["B-site", "Paint Shells", "B is small so one good Paint Shells throw can clear both common spots at once."], ["C-site", "Blast Pack", "Satchel onto the C long boxes. Same early look Jett gets, just louder."]]],
      ["Bind", [["A-site", "Paint Shells", "Throw Paint Shells into short before pushing. Tightest angle on the map so clearing blind is fine."], ["B-site", "Blast Pack", "Boost out of hookah into site and close the gap before a rotating defender resets."]]],
      ["Lotus", [["A-site", "Boom Bot", "Send the bot thru the door first. Doors hide angles that pop open so let the bot eat the first look."], ["B-site", "Blast Pack", "Satchel onto the mid platform for a high look over B before ur team uses util."], ["C-site", "Paint Shells", "Clear the corner past C main with Paint Shells right before the rotating door closes behind u."]]],
      ["Corrode", [["A-site", "Blast Pack", "Satchel up to the high ground over A and scout before ur team fully commits."], ["B-site", "Paint Shells", "Defenders hold from above on Corrode. Paint Shells the elevated spot before u enter."]]],
      ["Pearl", [["A-site", "Boom Bot", "Send the bot down A link ahead of u. Long open hallway so the bot takes the first look for u."], ["B-site", "Paint Shells", "Clear the tower sightline with Paint Shells before pushing B main so ur team can walk in."]]],
      ["Sunset", [["A-site", "Paint Shells", "Clear the long sightline into A with a Paint Shells throw. Super common long hold."], ["B-site", "Blast Pack", "Boost into site off market and beat the angle defenders hold from the back corner."]]],
      ["Abyss", [["A-site", "Blast Pack", "Be careful boosting near the edges. A bad satchel can send u straight off the map. Ask me how i know."], ["B-site", "Boom Bot", "Send the bot thru the main choke first. Drop-offs on Abyss punish blind pushes."]]],
      ["Fracture", [["A-site", "Blast Pack", "Satchel in from arrow so u come from an angle they dont expect. Fits Fracture's flank layout."], ["B-site", "Boom Bot", "Send the bot up toward the dish first. One of the only spots that sees both entries into B."]]],
      ["Summit", [["A-site", "Paint Shells", "Clear the long angle into A with Paint Shells before pushing. Summit sightlines are long."], ["B-site", "Blast Pack", "Boost thru B main right as ur teams smoke lands so u enter before it clears."]]],
      ["Icebox", [["A-site", "Blast Pack", "Satchel onto the tube or crates for high ground. Icebox rewards whoever has the tallest spot."], ["B-site", "Paint Shells", "Clear the yellow container sightline with Paint Shells before ur team pushes B."]]],
      ["Breeze", [["A-site", "Blast Pack", "Boost across the open field into A. Long sightlines punish anyone moving slow."], ["B-site", "Paint Shells", "Clear main hall entry with Paint Shells before pushing. Open sites punish uncovered entries."]]]
    ]
  },

  phoenix: {
    name: "Phoenix",
    letter: "P",
    blurb: "Fire and flashes. Takes care of himself.",
    h1: ["Light the way in,", "come back for more."],
    abilities: [
      ["Curveball", "Flash that curves left or right before it pops. Great for blinding a corner u cant see directly."],
      ["Hot Hands", "Fire orb that hurts enemies and heals Phoenix while hes standing in it. Good for denying a choke or covering a push."],
      ["Blaze", "Wall of fire that blocks sightlines and burns anyone who walks thru. Main tool for controlling an entry."]
    ],
    maps: [
      ["Ascent", [["A-site", "Curveball", "Curve a flash round the market wall to blind anyone on the box angle before u step out."], ["B-site", "Blaze", "Wall off B main as u enter. It blocks the back corner sightline on the way in."]]],
      ["Split", [["A-site", "Hot Hands", "Drop Hot Hands on the rafters approach so nobody can hold that high ground while u push."], ["B-site", "Curveball", "Curve a flash thru the heaven gap before pushing B main. Thats the sightline that kills blind entries."]]],
      ["Haven", [["A-site", "Blaze", "Wall off A long as u enter so a defender in the far corner loses their sightline mid push."], ["B-site", "Curveball", "B is small and exposed so one good curved flash thru the choke can blind every angle at once."], ["C-site", "Hot Hands", "Drop Hot Hands on the C long boxes to deny the early high ground before ur team arrives."]]],
      ["Bind", [["A-site", "Curveball", "Curve a flash into short before pushing. Choke is tight so a good flash blinds the whole entry."], ["B-site", "Blaze", "Wall off the hookah exit as u push B to block a rotating defenders reset angle."]]],
      ["Lotus", [["A-site", "Blaze", "Wall the doorway right before it opens. Lotus doors hide sightlines that appear outta nowhere."], ["B-site", "Hot Hands", "Drop Hot Hands on the mid platform to deny the high spot before ur team commits to B."], ["C-site", "Curveball", "Curve a flash thru C main as the rotating door closes. Catches anyone re-peeking from the other side."]]],
      ["Corrode", [["A-site", "Hot Hands", "Drop Hot Hands on the elevated spot over A to deny it before ur team is fully committed."], ["B-site", "Blaze", "Wall off the main choke on entry. Defenders hold from above on Corrode."]]],
      ["Pearl", [["A-site", "Curveball", "Curve a flash down A link before entering. Long open hallway with nowhere to hide from the light."], ["B-site", "Blaze", "Wall the tower sightline as u push B main so ur team can walk in without getting picked."]]],
      ["Sunset", [["A-site", "Curveball", "Curve a flash round the long sightline into A. Common long hold that gets punished by a good blind."], ["B-site", "Hot Hands", "Drop Hot Hands near market to deny the back corner hold defenders usually take on B."]]],
      ["Abyss", [["A-site", "Blaze", "Wall carefully near the edges. Abyss has no floor past certain points so watch ur footing."], ["B-site", "Curveball", "Curve a flash thru the main choke first. Blind pushing is safer than walking in with no cover."]]],
      ["Fracture", [["A-site", "Curveball", "Curve a flash in from arrow and blind an angle they dont expect. Fits the flanking layout."], ["B-site", "Hot Hands", "Drop Hot Hands near the dish to deny the one spot that sees both entries into B."]]],
      ["Summit", [["A-site", "Curveball", "Curve a flash round the long angle into A. Summit sightlines are way longer than most maps."], ["B-site", "Blaze", "Wall off B main as u enter so u cross the smokes edge with no clean sightline on u."]]],
      ["Icebox", [["A-site", "Hot Hands", "Drop Hot Hands on the tube or crates to deny the high ground Icebox is all about."], ["B-site", "Curveball", "Curve a flash round the yellow container sightline before ur team pushes B."]]],
      ["Breeze", [["A-site", "Curveball", "Curve a flash across the open field into A. Long sightlines punish anyone stuck in the light."], ["B-site", "Blaze", "Wall the main hall entry as u push. Open sites punish anyone entering with no cover."]]]
    ]
  }

};
