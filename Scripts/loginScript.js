// VARIABILI
let loginPage, presidentPage, managerPage, refereePage, figcPage, joblessPage; 
// tasti login
let usernameBox, passwordBox, submitBtn;
let username, userType, userClub;
let headerCrest;
/**@type {Team}*/let currentClub, GroupA = groupA;
let freeAgentList = free, displayedFreeAgents;
let exitBtn;

// Eventi
function load() {
    let video = document.querySelector('.siteBackground');
    video.style.width = `${screen.width}px`;
    video.style.height = `${screen.height}px`;

    // Pagine
    loginPage = document.querySelector('#loginPage');
    presidentPage = document.querySelector('#presidentPage');
    managerPage = document.querySelector('#managerPage');
    figcPage = document.querySelector('#figcPage');
    refereePage = document.querySelector('#refereePage');
    joblessPage = document.querySelector('#joblessPage');

    // Login
    usernameBox = loginPage.querySelector('#username');
    passwordBox = loginPage.querySelector('#password');
    submitBtn = loginPage.querySelector('#signInButton');
    exitBtn = document.querySelectorAll('.uscita');
    exitBtn.forEach(x => x.addEventListener('click', logout));

    submitBtn.addEventListener('click', checkLogin);

    
    usernameBox.value = "Gabriele Gravina";
    passwordBox.value = "figc";
    checkLogin(); 
}

// FUNZIONI
function checkLogin() {
    let accountsTable = accounts.filter(x => x.username === usernameBox.value && x.password === passwordBox.value);
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
            if (userClub === "Disoccupato") { loadJobless(); } else { loadManager(); }
            break;
        case "FIGC":
            loadFIGC();
            break;
        case "Arbitro":
            currentRef = referees.filter(x => x.account === accountsTable[0])[0];
            loadReferee();
            break;
        default:
            loadJobless();
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
    if (![...joblessPage.classList].includes('none')) joblessPage.classList.toggle('none');
}

// LOAD
document.addEventListener('DOMContentLoaded', load);