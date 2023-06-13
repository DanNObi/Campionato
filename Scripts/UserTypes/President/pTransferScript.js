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
                            <img class="sellBtn" src='./Media/money.png'>`;
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