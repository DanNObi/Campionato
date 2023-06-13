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
        presCurrentManagerContainer.querySelector('p').innerText = 'Posizione Libera';
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
        presCurrentManagerContainer.querySelector('.managerName').innerText = `${currentClub.manager.firstName} ${currentClub.manager.lastName}`;
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
        changeManagerTeam(manager, currentClub);
        loadManagerPage()
    }    
}

function fireManager() {
    freeManagers.push(currentClub.manager);
    releaseManager(currentClub.manager);
    currentClub.sackManager();
    loadManagerPage();
}