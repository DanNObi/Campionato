// VARIABILI
let loginPage, presidentPage, managerPage, refereePage, figcPage; 

// tasti login
let usernameBox, passwordBox, submitBtn;
let username, userType, userClub;
let headerCrest;
/**@type {Team}*/let currentClub, GroupA = groupA;
let freeAgentList = free, displayedFreeAgents;
let exitBtn;

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

// Tasti ALLENATORE
let manTeamScreen, manFormationScreen;
let manTeamBtn, manFormationBtn;
// Formazione
let freePlayers, startersContainer, benchContainer;

// Eventi
function load() {
    // Pagine
    loginPage = document.querySelector('#loginPage');
    presidentPage = document.querySelector('#presidentPage');
    managerPage = document.querySelector('#managerPage');
    figcPage = document.querySelector('#figcPage');
    refereePage = document.querySelector('#refereePage');

    // Login
    usernameBox = loginPage.querySelector('#username');
    passwordBox = loginPage.querySelector('#password');
    submitBtn = loginPage.querySelector('#signInButton');
    exitBtn = document.querySelectorAll('.uscita');
    exitBtn.forEach(x => x.addEventListener('click', logout));

    submitBtn.addEventListener('click', checkLogin);
}

// FUNZIONI
// Login
function checkLogin() {
    let accountsTable = accounts.filter(x => x.username === usernameBox.value);
    if (accountsTable.length === 0) {
        usernameBox.style.border = "1px red";
        return false;
    }

    accountsTable.filter(x => x.password === passwordBox.value);
    if (accountsTable.length === 0) {
        passwordBox.style.border = "1px red";
        return false;
    }

    username = accountsTable[0].username; 
    userType = accountsTable[0].type; 
    userClub = accountsTable[0].team;
    currentClub = teamList.filter(x => x.name === userClub)[0];
    switch (userType) {
        case "Presidente":
            loadPresident();
            break;
        case "Allenatore":
            loadManager();
            break;
        case "FIGC":
            loadFIGC();
            break;
        case "Arbitro":
            loadReferee();
            break;
    }

    loginPage.classList.toggle('none');
    return true;
}

function logout() {
    if ([...loginPage.classList].includes('none')) loginPage.classList.toggle('none');
    if (![...presidentPage.classList].includes('none')) presidentPage.classList.toggle('none');
    if (![...managerPage.classList].includes('none')) managerPage.classList.toggle('none');
    if (![...refereePage.classList].includes('none')) refereePage.classList.toggle('none');
    if (![...figcPage.classList].includes('none')) figcPage.classList.toggle('none');
}

// Presidente
function loadPresident() {
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
    presidentPage.classList.toggle('none');

    //presidentViewTeam();
    //loadPlayerView();
    loadManagerPage();
}

    //  > Pagina Squadra
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

    //  > Calciomercato
    function loadPlayerView() {
        if ([...presPlayerScreen.classList].includes('none')) presPlayerScreen.classList.toggle('none');
        if (![...presManagerScreen.classList].includes('none')) presManagerScreen.classList.toggle('none');
        if (![...presTeamScreen.classList].includes('none')) presTeamScreen.classList.toggle('none');
        presPlayerCardContainer.innerHTML = "";
        currentClub.players.map(x => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `  <img src=${x._image}>
                                <p>${x._lastName} #${x.getNumber}</p>
                                <button class="sellBtn">Vendi</button`;
            dbPlayers.push({player: x, card: card});
            presPlayerCardContainer.appendChild(card);
        });
        presPlayerCardContainer.addEventListener('click', sellPlayer);
        playerSearchBar.addEventListener('change', displayFreeAgents);
        playerSearchBarResults.addEventListener('click', buyPlayer);
        if ([...presidentPage.classList].includes('none')) presidentPage.classList.toggle('none');
        if (![...playerSearchBarResults.classList].includes('none')) playerSearchBarResults.classList.toggle('none');
    }

    function sellPlayer(event) {
        event.preventDefault();
        if ([...event.target.classList].includes('sellBtn')) {
            let playerAndCard = dbPlayers.filter(x => x.card === event.target.parentElement)[0];
            freeAgentList.push(playerAndCard.player);
            currentClub.sellPlayer(playerAndCard.player);
            loadPlayerView();
        }
    }

    function displayFreeAgents() {
        playerSearchBarResults.innerHTML = "";
        if ([...playerSearchBarResults.classList].includes('none')) playerSearchBarResults.classList.toggle('none');
        if (playerSearchBar.value.length >= 2) {
            let displayedFreeAgents = freeAgentList.filter(x => [...x._lastName.toLowerCase()].slice(0, playerSearchBar.value.length).join('') === playerSearchBar.value.toLowerCase());
            displayedFreeAgents.map(x => {
                let freeAgent = document.createElement('p');
                freeAgent.className = "freeAgent";
                freeAgent.innerText = `${x._lastName} #${x.getNumber} (${x.getRole})`;
                dbFreeAgents.push({player: x, element: freeAgent});
                playerSearchBarResults.appendChild(freeAgent);
            });
        }
    }

    function buyPlayer(event) {
        if ([...event.target.classList].includes('freeAgent')) {
            let playerAndCard = dbFreeAgents.filter(x => x.element === event.target)[0]; //.filter(x => x.element === event.target.parentElement)[0];
            console.log(playerAndCard);
            freeAgentList = freeAgentList.filter(x => x != playerAndCard.player);
            currentClub.signPlayer(playerAndCard.player);
            loadPlayerView();
        }
    }

    // > Allenatore
    function loadManagerPage() {
        if (![...presPlayerScreen.classList].includes('none')) presPlayerScreen.classList.toggle('none');
        if ([...presManagerScreen.classList].includes('none')) presManagerScreen.classList.toggle('none');
        if (![...presTeamScreen.classList].includes('none')) presTeamScreen.classList.toggle('none');
        presCurrentManagerContainer = presManagerScreen.querySelector('.card');
        presManagerContainer = presManagerScreen.querySelector('.allenatori');
        presManagerContainer.innerHTML = "";
        dbManagers = [];
        if (currentClub.manager === "Vacant" || typeof(currentClub.manager) !== "object") {
            presCurrentManagerContainer.querySelector('img').src = 'https://img.freepik.com/premium-vector/vacant-position_162329-184.jpg';
            presCurrentManagerContainer.querySelector('p').text = 'Posizione Libera';
            presCurrentManagerContainer.querySelector('button').disabled = true;
            freeManagers.map(x => {
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `  <img src=${x._image}>
                                    <p>${x._firstName} ${x._lastName}</p>
                                    <button class="hireBtn">Assumi</button`;
                dbManagers.push({manager: x, card: card});
                presManagerContainer.appendChild(card);
            });
        } else {
            presCurrentManagerContainer.querySelector('img').src = currentClub.manager.image;
            presCurrentManagerContainer.querySelector('p').text = `${currentClub.manager._firstName} ${currentClub.manager._lastName}`;
            presCurrentManagerContainer.querySelector('button').disabled = false;
            presCurrentManagerContainer.querySelector('button').addEventListener('click', fireManager);
            freeManagers.map(x => {
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `  <img src=${x._image}>
                                    <p>${x.firstName} ${x.lastName}</p>
                                    <button class="hireBtn" disabled>Assumi</button`;
                dbManagers.push({manager: x, card: card});
                presManagerContainer.appendChild(card);
            });
        }
        presCurrentManagerContainer.querySelector('img').alt = 'Foto Allenatore';
        presManagerContainer.addEventListener('click', hireManager);
        
    }

    function hireManager(event) {
        let targetClasses = [...event.target.classList];
        if (targetClasses.includes('hireBtn')) {
            let manager = dbManagers.filter(x => x.card === event.target.parentElement)[0].manager;
            currentClub.manager = manager;
            freeManagers = freeManagers.filter(x => x !== manager);
            loadManagerPage()
        }    
    }

    function fireManager() {
        freeManagers.push(currentClub.manager);
        currentClub.sackManager();
        loadManagerPage();
    }

// Allenatore
function loadManager() {
    if (![...presidentPage.classList].includes('none')) presidentPage.classList.toggle('none');
    if ([...managerPage.classList].includes('none')) managerPage.classList.toggle('none');

    headerCrest = managerPage.querySelector('.logoUser');
    headerCrest.src = currentClub.crest;

    dbPlayers = [];

    manTeamScreen = managerPage.querySelector('.main');
    manFormationScreen = managerPage.querySelector('.decidiFormazione');
    freePlayers = manFormationScreen.querySelector('.liberi');
    startersContainer = manFormationScreen.querySelector('.titolari');
    benchContainer = manFormationScreen.querySelector('.panchina');

    manTeamBtn = managerPage.querySelector('#club');
    manFormationBtn = managerPage.querySelector('#formation');
    manTeamBtn.addEventListener('click', managerViewTeam);
    manFormationBtn.addEventListener('click', managerViewFormation);

    managerViewTeam();
}

    // > Squadra
    function managerViewTeam() {
        if ([...manTeamScreen.classList].includes('none')) manTeamScreen.classList.toggle('none');
        if (![...manFormationScreen.classList].includes('none')) manFormationScreen.classList.toggle('none');

        let statCards = [...manTeamScreen.querySelectorAll('.card')];
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

            manTeamScreen.querySelector('img').src = nextGameCrest;
            manTeamScreen.querySelector('.nextGames').querySelector('h3').innerText = `${partite[0].date.getDate()}/${partite[0].date.getMonth() + 1}`;
        }
    }

    // > Formazione
    function managerViewFormation() {
        dbPlayers = [];
        freePlayers.innerHTML = "";
        startersContainer.innerHTML = "";
        benchContainer.innerHTML = "";
        if (![...manTeamScreen.classList].includes('none')) manTeamScreen.classList.toggle('none');
        if ([...manFormationScreen.classList].includes('none')) manFormationScreen.classList.toggle('none');
        let playerMap = currentClub.players.filter(x => !currentClub.formation.players.includes(x));
        playerMap.map(x => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `  <img src=${x._image}>
                                <p>${x._lastName} #${x.getNumber}</p>
                                <section>
                                    <button class="ToTitolare">Titolare</button>
                                    <button class="ToPanchina">Panchina</button>
                                </section>`;
            dbPlayers.push({player: x, card: card});
            freePlayers.appendChild(card);
        });
        let starterMap = currentClub.formation.starters;
        starterMap.map(x => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `  <img src=${x._image}>
                                <p>${x._lastName} #${x.getNumber}</p>
                                <section>
                                    <button class="ToLibero">Libero</button>
                                    <button class="ToPanchina">Panchina</button>
                                </section>`;
            dbPlayers.push({player: x, card: card});
            startersContainer.appendChild(card);
        });
        let benchMap = currentClub.formation.bench;
        benchMap.map(x => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `  <img src=${x._image}>
                                <p>${x._lastName} #${x.getNumber}</p>
                                <section>
                                    <button class="ToLibero">Libero</button>
                                    <button class="ToPanchina">Panchina</button>
                                </section>`;
            dbPlayers.push({player: x, card: card});
            benchContainer.appendChild(card);
        });
        freePlayers.addEventListener('click', freePlayersChange);
        startersContainer.addEventListener('click', startersChange);
        benchContainer.addEventListener('click', benchChange);
    }

    function freePlayersChange(event) {
        let targetClasses = [...event.target.classList];
        if (targetClasses.includes('ToTitolare')) {
            let desiredPlayer = dbPlayers.filter(x => x.card === event.target.parentElement.parentElement)[0].player;
            currentClub.formation.starters.push(desiredPlayer);
        } else if (targetClasses.includes('ToPanchina')) {
            let desiredPlayer = dbPlayers.filter(x => x.card === event.target.parentElement.parentElement)[0].player;
            currentClub.formation.bench.push(desiredPlayer);
        }
        managerViewFormation();
    }

    function startersChange(event) {
        let targetClasses = [...event.target.classList];
        if (targetClasses.includes('ToPanchina')) {
            let desiredPlayer = dbPlayers.filter(x => x.card === event.target.parentElement.parentElement)[0].player;
            currentClub.formation.bench.push(desiredPlayer);
            currentClub.formation.starters = currentClub.formation.starters.filter(x => x !== desiredPlayer);
        } else if (targetClasses.includes('ToLibero')) {
            let desiredPlayer = dbPlayers.filter(x => x.card === event.target.parentElement.parentElement)[0].player;
            currentClub.formation.starters = currentClub.formation.starters.filter(x => x !== desiredPlayer);
        }
        managerViewFormation();
    }

    function benchChange(event) {
        let targetClasses = [...event.target.classList];
        if (targetClasses.includes('ToTitolari')) {
            let desiredPlayer = dbPlayers.filter(x => x.card === event.target.parentElement.parentElement)[0].player;
            currentClub.formation.starters.push(desiredPlayer);
            currentClub.formation.bench = currentClub.formation.bench.filter(x => x !== desiredPlayer);
        } else if (targetClasses.includes('ToLibero')) {
            let desiredPlayer = dbPlayers.filter(x => x.card === event.target.parentElement.parentElement)[0].player;
            currentClub.formation.bench = currentClub.formation.bench.filter(x => x !== desiredPlayer);
        }
        managerViewFormation();
    }


// Federazione Italiana del Giuoco del Calcio
function loadFIGC() {

}

// Arbitro
function loadReferee() {
    if (![...presidentPage.classList].includes('none')) presidentPage.classList.toggle('none');
    if (![...managerPage.classList].includes('none')) managerPage.classList.toggle('none');
    if ([...refereePage.classList].includes('none')) refereePage.classList.toggle('none');

}

    // > Vedi Partite
    function loadMatchScreen() {

    }

    // > Modifica Partita
    function loadGameScreen() {
    
    }

// LOAD
document.addEventListener('DOMContentLoaded', load);
