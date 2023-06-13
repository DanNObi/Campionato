// Tasti ALLENATORE
let manTeamScreen, manFormationScreen;
let manTeamBtn, manFormationBtn;
// Formazione
let freePlayers, startersContainer, benchContainer;

function loadManager() {
    if (![...presidentPage.classList].includes('none')) presidentPage.classList.toggle('none');
    if ([...managerPage.classList].includes('none')) managerPage.classList.toggle('none');
    if (![...figcPage.classList].includes('none')) figcPage.classList.toggle('none');
    if (![...refereePage.classList].includes('none')) refereePage.classList.toggle('none');

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
        
        if (currentClub.formation.starters.length === 11) {
            let playerMap = currentClub.players.filter(x => !currentClub.formation.players.includes(x));
            playerMap.map(x => {
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `  <img src=${x._image}>
                                    <p>${x._lastName} #${x.getNumber}</p>
                                    <section>
                                        <img src='./Media/panchina.png' class="ToPanchina">
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
                                        <img src='./Media/libero.png' class="ToLibero">
                                        <img src='./Media/panchina.png' class="ToPanchina">
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
                                        <img src='./Media/libero.png' class="ToLibero">
                                    </section>`;
                dbPlayers.push({player: x, card: card});
                benchContainer.appendChild(card);
            });
            freePlayers.addEventListener('click', freePlayersChange);
            startersContainer.addEventListener('click', startersChange);
            benchContainer.addEventListener('click', benchChange);
        } else {
            generateFormationCards();
        }
        
    }

    function generateFormationCards() {
        let playerMap = currentClub.players.filter(x => !currentClub.formation.players.includes(x));
        playerMap.map(x => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `  <img src=${x._image}>
                                <p>${x._lastName} #${x.getNumber}</p>
                                <section>
                                    <img src='./Media/titolare.png' class="ToTitolare">
                                    <img src='./Media/panchina.png' class="ToPanchina">
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
                                    <img src='./Media/panchina.png' class="ToPanchina">
                                    <img src='./Media/libero.png' class="ToLibero">
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
                                    <img src='./Media/titolare.png' class="ToTitolare">
                                    <img src='./Media/libero.png' class="ToLibero">
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
        if (targetClasses.includes('ToTitolare')) {
            let desiredPlayer = dbPlayers.filter(x => x.card === event.target.parentElement.parentElement)[0].player;
            currentClub.formation.starters.push(desiredPlayer);
            currentClub.formation.bench = currentClub.formation.bench.filter(x => x !== desiredPlayer);
        } else if (targetClasses.includes('ToLibero')) {
            let desiredPlayer = dbPlayers.filter(x => x.card === event.target.parentElement.parentElement)[0].player;
            currentClub.formation.bench = currentClub.formation.bench.filter(x => x !== desiredPlayer);
        }
        managerViewFormation();
    }