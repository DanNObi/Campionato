let accounts = [{
  "username": "Floriano Noto",
  "password": "cccc",
  "type": "Presidente",
  "team": "U.S. Catanzaro"
},
{
  "username": "Vincenzo Vivarini",
  "password": "cccc",
  "type": "Allenatore",
  "team": "U.S. Catanzaro"
},
{
  "username": "Gianni Vrenna",
  "password": "crot",
  "type": "Presidente",
  "team": "F.C. Crotone"
},
{
  "username": "Aimo Dana",
  "password": "eeee",
  "type": "Allenatore",
  "team": "Cesena F.C."
},
{
  "username": "Maurizio Ciampi",
  "password": "rrrr",
  "type": "Arbitro",
  "team": "FIGC"
},
{
  "username": "Maria Marotta",
  "password": "rrrr",
  "type": "Arbitro",
  "team": "FIGC"
},
{
  "username": "Daniele Perenzoni",
  "password": "rrrr",
  "type": "Arbitro",
  "team": "FIGC"
},
{
  "username": "Gabriele Gravina",
  "password": "figc",
  "type": "FIGC",
  "team": "FIGC"
},
{
  "username": "Antonio Conte",
  "password": "pelato",
  "type": "Allenatore",
  "team": "Disoccupato"
},
{
  "username": "Graham Potter",
  "password": "gggg",
  "type": "Allenatore",
  "team": "Disoccupato"
}];

/**
 * @param {Participant} managerName 
 * @param {Team} newTeam 
 */
function changeManagerTeam(manager, newTeam) {
  let man = accounts.filter(x => x.username === manager.fullName)[0];
  man.team = newTeam.name;
}

/**
 *  @param {Participant} manager 
 */
function releaseManager(manager) {
  let man = accounts.filter(x => x.username === manager.fullName)[0];
  man.team = "Disoccupato";
}