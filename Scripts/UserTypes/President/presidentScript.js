// Tasti PRESIDENTE
let presTeamScreen, presPlayerScreen, presManagerScreen;
// Acquista Giocatore
let presPlayerBtn;
let presPlayerCardContainer;
let playerSearchBar, playerSearchBarResults;
let dbPlayers, dbFreeAgents;
// Guarda Squadra
let presTeamViewBtn;
// Allenatori
let presManagerBtn;
let dbManagers;
let presManagerContainer, presCurrentManagerContainer;

function loadPresident() {
    if ([...presidentPage.classList].includes('none')) presidentPage.classList.toggle('none');
    if (![...managerPage.classList].includes('none')) managerPage.classList.toggle('none');
    if (![...refereePage.classList].includes('none')) refereePage.classList.toggle('none');
    if (![...figcPage.classList].includes('none')) figcPage.classList.toggle('none');

    headerCrest = presidentPage.querySelector('.logoUser');
    headerCrest.src = currentClub.crest;
    presidentPage.querySelector('header').querySelector('h1').innerText = `Benvenuto ${username}`;
    presTeamViewBtn = presidentPage.querySelector('#teamView');
    presPlayerBtn = presidentPage.querySelector('#market');
    presManagerBtn = presidentPage.querySelector('#manager');

    presTeamScreen = presidentPage.querySelector('.guardaSquadra');
    presManagerScreen = presidentPage.querySelector('.assumiAllenatore');
    presPlayerScreen = presidentPage.querySelector('.acquistaGiocatore');
    presPlayerCardContainer = presPlayerScreen.querySelector('.result');
    playerSearchBar = presPlayerScreen.querySelector('.searchContainer').querySelector('input');
    playerSearchBarResults = presPlayerScreen.querySelector('.searchResult');
    dbPlayers = [];
    dbFreeAgents = [];

    presTeamViewBtn.addEventListener('click', presidentViewTeam);
    presPlayerBtn.addEventListener('click', loadPlayerView);
    presManagerBtn.addEventListener('click', loadManagerPage);

    presidentViewTeam();
}

function presidentViewTeam() {
    if ([...presTeamScreen.classList].includes('none')) presTeamScreen.classList.toggle('none');
    if (![...presPlayerScreen.classList].includes('none')) presPlayerScreen.classList.toggle('none');
    if (![...presManagerScreen.classList].includes('none')) presManagerScreen.classList.toggle('none');

    let statCards = [...presTeamScreen.querySelectorAll('.card')];
    statCards[0].innerHTML = `<h5>Numero di Trofei</h5><h3>${currentClub.nTrophies}</h3>`;
    statCards[1].innerHTML = `<h5>Punti</h5><h3>${currentClub.getPoints()}</h3>`;
    statCards[2].innerHTML = `<h5>Posizione</h5><h3>${GroupA.ranking.indexOf(currentClub) + 1}</h3>`;

    let partite = currentClub.matches.filter(x => x.date < Date.now());
    if (partite.length > 0) {
        let nextGameCrest;
        if (partite[0].isHomeTeam(currentClub)) {
            nextGameCrest = partite[0].awayFormation.team.crest;
        } else {
            nextGameCrest = partite[0].homeFormation.team.crest;
        }

        presTeamScreen.querySelector('img').src = nextGameCrest;
        presTeamScreen.querySelector('.nextGames').querySelector('h3').innerText = `${partite[0].date.getDate()}/${partite[0].date.getMonth() + 1}`;
    }
}