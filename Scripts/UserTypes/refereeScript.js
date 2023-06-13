// Tasti ARBITRO
let gamesContainer, matchEditor;
let currentRef, dbMatches;
let refGamesBtn;
// Visualizza Partite
let refGamesScreen, refMatchList;
// Editor Partite
let desiredMatch;
let refMatchEditor, refMatchDisplay;
let refEditorEventList;
let refEditorHomeCrest, refEditorAwayCrest, refEditorHomeGoals, refEditorAwayGoals;
let refEditorPlayerSelect, dbMatchPlayers, dbMatchEvents;
let refEditorEventType, refEditorMinuteSelect;
let refAddEventBtn;

function loadReferee() {
    if (![...presidentPage.classList].includes('none')) presidentPage.classList.toggle('none');
    if (![...managerPage.classList].includes('none')) managerPage.classList.toggle('none');
    if (![...figcPage.classList].includes('none')) figcPage.classList.toggle('none');
    if ([...refereePage.classList].includes('none')) refereePage.classList.toggle('none');

    dbMatches = [], dbMatchPlayers = []; dbMatchEvents = [];
    refGamesBtn = refereePage.querySelector('.refGamesBtn');
    refGamesScreen = refereePage.querySelector('.refGamesScreen');
    refMatchList = refGamesScreen.querySelector('.refMatchList');

    refMatchEditor = refereePage.querySelector('.matchEditor');
    refMatchDisplay = refereePage.querySelector('.matchDisplay');
    refEditorPlayerSelect = refMatchEditor.querySelector('.playerSelect');
    refEditorHomeCrest = refMatchEditor.querySelector('.homeTeamCrest');
    refEditorAwayCrest = refMatchEditor.querySelector('.awayTeamCrest');
    refEditorHomeGoals = refMatchEditor.querySelector('.homeTeamGoals');
    refEditorAwayGoals = refMatchEditor.querySelector('.awayTeamGoals');
    refEditorEventType = refMatchEditor.querySelector('.eventTypes');
    refEditorPlayerSelect = refMatchEditor.querySelector('.playerSelect');
    refEditorMinuteSelect = refMatchEditor.querySelector('.minuteSelect');
    refAddEventBtn = refMatchEditor.querySelector('.addEventBtn');
    refEditorEventList = refMatchDisplay.querySelector('.matchEventList');

    refGamesBtn.addEventListener('click', loadRefMatchScreen);
    refEditorMinuteSelect.addEventListener('change', correctMinute);
    refAddEventBtn.addEventListener('click', matchEditAddEvent);
    refEditorEventList.addEventListener('click', matchEditRemoveEvent);

    loadRefMatchScreen();
}

    // > Vedi Partite
    function loadRefMatchScreen() {
        if (![...refMatchEditor.classList].includes('none')) refMatchEditor.classList.toggle('none');
        if ([...refGamesScreen.classList].includes('none')) refGamesScreen.classList.toggle('none');
        
        refMatchList.innerHTML = "";
        currentRef.referee.matches.map(x => {
            let card = document.createElement('div');
            card.classList.add('gameCard');
            card.innerHTML = `  <img src="${x.homeFormation.team.crest}" alt="${x.homeFormation.teamName}" class="homeTeam">
                                <img src="${x.awayFormation.team.crest}" alt="${x.awayFormation.teamName}" class="awayTeam">
                                <h5>${x.date.getDay()}/${x.date.getMonth() + 1}/${x.date.getFullYear()}</h5>
                                <img src="./Media/edit.png" class="editBtn">`;
            dbMatches.push({element: card, match: x});
            refMatchList.appendChild(card);
        });

        refMatchList.addEventListener('click', loadGameScreen);
    }

    // > Modifica Partita
    function loadGameScreen(event) {
        if (![...refGamesScreen.classList].includes('none')) refGamesScreen.classList.toggle('none');
        if ([...refMatchEditor.classList].includes('none')) refMatchEditor.classList.toggle('none'); 
        
        if (typeof(event) !== "undefined") {
            desiredMatch = dbMatches.filter(x => x.element === event.target.parentElement)[0].match;
        } 
        refEditorHomeCrest.src = desiredMatch.homeFormation.team.crest;
        refEditorAwayCrest.src = desiredMatch.awayFormation.team.crest;
        refEditorHomeGoals.innerText = desiredMatch.homeTeamGoals;
        refEditorAwayGoals.innerText = desiredMatch.awayTeamGoals
        desiredMatch.allOnFieldPlayers.map(x => {
            let option = document.createElement('option');
            option.innerText = `${x._firstName} ${x._lastName}`;
            dbMatchPlayers.push({option: option, player: x});
            refEditorPlayerSelect.appendChild(option);
        });
        refEditorEventList.innerHTML = "";
        desiredMatch.matchEvents.map(x => {
            let eventElement = document.createElement('div');
            let message = document.createElement('p');
            let deleteImg = document.createElement('img');
            deleteImg.classList.add('deleteEvent');
            deleteImg.src = './Media/libero.png';
            eventElement.classList.add('gameAction');
            if (desiredMatch.goals.includes(x)) {
                message.innerText = `GOL! - ${x.player.lastName} ${x.minute}'`;
            } else if (desiredMatch.yellowCards.includes(x)) {
                message.innerText = `GIALLO! - ${x.player.lastName} ${x.minute}'`;
            } else {
                message.innerText = `ROSSO! - ${x.player.lastName} ${x.minute}'`;
            }
            eventElement.appendChild(message);
            eventElement.appendChild(deleteImg);
            dbMatchEvents.push({event: x, element: eventElement});
            refEditorEventList.appendChild(eventElement);
        });
        refEditorMinuteSelect.value = 0;
    }

        function correctMinute() {
            if (refEditorMinuteSelect.value < 0) {
                refEditorMinuteSelect.value = 0;
            } else if (refEditorMinuteSelect.value > 90) {
                refEditorMinuteSelect.value = 90;
            }
        }

        function matchEditAddEvent() {
            let player = dbMatchPlayers.filter(x => x.option === [...refEditorPlayerSelect.childNodes].filter(x => x.selected)[0])[0].player;
            switch (refEditorEventType.value) {
                case "Goal":
                    desiredMatch.addGoal(player, refEditorMinuteSelect.value);
                    loadGameScreen();
                    break;

                case "YellowCard":
                    desiredMatch.addYellowCard(player, refEditorMinuteSelect.value);
                    loadGameScreen();
                    break;
                
                case "RedCard":
                    desiredMatch.addRedCard(player, refEditorMinuteSelect.value);
                    loadGameScreen();
                    break;
            }
        }

        function matchEditRemoveEvent(event) {
            if (![...event.target.classList].includes('deleteEvent')) return false;
            let eventToBeDeleted = dbMatchEvents.filter(x => x.element === event.target.parentElement)[0].event;
            desiredMatch.removeEvent(eventToBeDeleted);
            loadGameScreen();
        }