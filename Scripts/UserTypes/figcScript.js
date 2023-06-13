// Schermate FIGC
let fMainScreen, fModificaScreen, fPersonaScreen;
// Tasti FIGC
let fCalendarBtn, fAddPersonBtn, fAddTeamBtn;
let fAddBtn, fAnnullaBtn;
// Variabili
let squadreCasa, dataPartita;
// Partita da modificare
let partitaDaModificare, idPartitaDaModificare, squadreTrasferta, arbitro;
let isDataLoaded = false;
const INDEX_NEW_GAME = -1;

function loadFIGC() {
    figcPage.classList.remove('none');
    fMainScreen = figcPage.querySelector('.main');
    fModificaScreen = figcPage.querySelector('.modificaPartita');
    fPersonaScreen = figcPage.querySelector('.aggiungiPersona');
    fAnnullaBtn = fModificaScreen.querySelector('.annulla');
    fAnnullaBtn.addEventListener('click', (event) => {
        event.preventDefault();
        fMainScreen.classList.toggle('none');
        fModificaScreen.classList.toggle('none');
    });
    fMainScreen.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        let partita =   `<div class="partita">
                            <img src="${groupAdays[0].matches[i].homeFormation.team.crest}" class="squadra">
                            <p class="versus">VS</p>
                            <img src="${groupAdays[0].matches[i].awayFormation.team.crest}" class="squadra">
                            <p class="data">${groupAdays[0].matches[i].date.toString().substring(4, 15)}</p>
                            <button class="modifica" id="bottone${i}"> &#128394; </button>
                        </div>`;
        fMainScreen.innerHTML += partita;
    }
    fMainScreen.innerHTML+="<button class='aggiungi'> &#43 Nuova Partita &#43 </button>";
    fAddBtn = figcPage.querySelector('.aggiungi');
    fAddBtn.addEventListener('click', aggiungiPartita);
    
    let partite = Array.from(fMainScreen.querySelectorAll('.partita'));

    partite.map((e) => e.querySelector('.modifica').addEventListener('click', modificaPartita));
}

/**
 * @param {Number} index
 */
function generaSchermataModifica(index) {
    fMainScreen.classList.toggle('none');
    fModificaScreen.classList.remove('none');
    dataPartita = fModificaScreen.querySelector('#newData');
    squadreCasa = fModificaScreen.querySelector('#squadraCasa');
    squadreTrasferta = fModificaScreen.querySelector('#squadraTrasferta');
    arbitro = fModificaScreen.querySelector('#arbitro');
    
    let currentMatch;
    // Se index === -1, allora stiamo creando una nuova partita
    if (index === -1) { currentMatch = groupAdays[0].matches[0]; } else { currentMatch = groupAdays[0].matches[index]; }
    // Inserimento opzioni
    if (!isDataLoaded) {
        teamList.map((e) => {
            let option = `<option>${e.name}</option>`;
            squadreCasa.innerHTML += option;
        });
        teamList.map((e) => {
            let option = `<option>${e.name}</option>`;
            squadreTrasferta.innerHTML += option;
        });
        let ref;
        referees.map((e) => {
            ref = e.referee;
            let option = `<option>${ref.firstName + ' ' + ref.lastName}</option>`;
    
            arbitro.innerHTML += option;
        });
        isDataLoaded = true;
    }

    // Se la partita esisto già, inserisco i dati pre-esistenti
    if (index !== -1) {
        dataPartita.valueAsDate = currentMatch.date;
        [...squadreCasa.options].map((option, i) => {
            if (option.innerText === currentMatch.homeTeamName) { squadreCasa.selectedIndex = i; } 
            else if (option.innerText === currentMatch.awayTeamName) { squadreTrasferta.selectedIndex = i; }
        });
        [...arbitro.options].map((option, i) => {
            if (option.innerText === currentMatch.referee.fullName) arbitro.selectedIndex = i;
        });
        fModificaScreen.querySelector('#modificaPartitaBtn').addEventListener('click', confermaModifica);
    } else {
        fModificaScreen.querySelector('#modificaPartitaBtn').addEventListener('click', confermaAggiunta);
    }
} 

function modificaPartita(e) {
    idPartitaDaModificare = + e.target.id.substring(7);
    generaSchermataModifica(idPartitaDaModificare);
}

function confermaModifica() {
    let squadraCasa = fModificaScreen.querySelector('#squadraCasa');
    let squadraTrasferta = fModificaScreen.querySelector('#squadraTrasferta');
    let game = groupAdays[0].matches[idPartitaDaModificare];
    game.date = new Date(fModificaScreen.querySelector('#newData').value);
    game.homeTeam = teamList.filter(e => e.name === squadraCasa.value)[0];
    game.awayTeam = teamList.filter(e => e.name === squadraTrasferta.value)[0];

    fModificaScreen.classList.toggle('none');
    fMainScreen.classList.toggle('none');
    loadFIGC();
}

function aggiungiPartita() {
    generaSchermataModifica(INDEX_NEW_GAME);
}

function confermaAggiunta() {
    groupAdays[0].matches.push(new Match(dataPartita.valueAsDate, teamList.filter(x => x.name === squadreCasa.value)[0], teamList.filter(x => x.name === squadreTrasferta.value)[0], referees.filter(x => x.fullName === arbitro.value)[0]));
}