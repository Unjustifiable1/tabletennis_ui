// Tabletennis UI


// SETUP DEFAULT VARIABLES
const DEFAULT_SCORE = 0;
const DEFAULT_SERVICE = ["team1", "team2"];
const DEFAULT_MODE = ["singles", "doubles"];
const DEFAULT_GAMES = ['11', '21'];
const DEFAULT_SETS = ['3', '5', '7'];
const DEFAULT_SERVER_CHANGE = ['2', '5'];
const DEFAULT_SWAP = ['YES', 'NO'];

let currentScoreTeam1 = DEFAULT_SCORE;
let currentScoreTeam2 = DEFAULT_SCORE;
let currentSetPointTeam1 = DEFAULT_SCORE;
let currentSetPointTeam2 = DEFAULT_SCORE;

let currentSet = DEFAULT_SCORE;
let currentGame = DEFAULT_SCORE;
let currentService = DEFAULT_SERVICE[0];

let optionMode = DEFAULT_MODE[0];
let optionTotalGames = DEFAULT_GAMES[0];
let optionTotalSets = DEFAULT_SETS[0];
let optionServerChange = DEFAULT_SERVER_CHANGE[0];
let optionSwap = DEFAULT_SWAP[0];



// SET VARIABLES

const setCurrentScoreTeam1 = () => currentScoreTeam1 += 1;
const setCurrentScoreTeam2 = () => currentScoreTeam2 += 1;
const setCurrentSetPointTeam1 = () => currentSetPointTeam1 += 1;
const setCurrentSetPointTeam2 = () => currentSetPointTeam2 += 1;

const setCurrentSet = () => currentSet += 1;
const setCurrentGame = () => currentGame += 1;
const setCurrentService = (newServer) => currentService = newServer;

const setOptionMode = (newMode) => optionMode = newMode;
const setOptionTotalGames = (newGames) => optionTotalGames = newGames;
const setOptionTotalSets = (newSets) => optionTotalSets = newSets;
const setOptionServerChange = (newService) => optionServerChange = newService;
const setOptionSwap = (newSwap) => optionSwap = newSwap;



// DOM SELECTORS

const team1 = document.getElementById('ttTeamOne');
const team2 = document.getElementById('ttTeamTwo');
const team1Score = document.getElementById('ttTeam1Score');
const team2Score = document.getElementById('ttTeam2Score');
const team1Sets = document.getElementById('ttTeam1Sets');
const team2Sets = document.getElementById('ttTeam2Sets');
const team1Service = document.getElementById('ttTeam1Service');
const team2Service = document.getElementById('ttTeam2Service');
const btnUndo = document.getElementById('ttUndo');
const btnReset = document.getElementById('ttReset');
const btnMenu = document.getElementById('ttMenu');
const btnOptions = document.getElementById('ttOptions');
const menuMode = document.getElementById('ttMenuMode');
const menuGames = document.getElementById('ttMenuGames');
const menuGamesNum = menuGames.getElementsByTagName('span')[0];
const menuSets = document.getElementById('ttMenuSets');
const menuSetsNum = menuSets.getElementsByTagName('span')[0];
const menuSwap = document.getElementById('ttMenuSwap');
const menuSwapOpt = menuSwap.getElementsByTagName('span')[0];
const menuService = document.getElementById('ttMenuService').getElementsByTagName('span')[0];



// DOM INTERACTIONS - GAME SCORES

team1Score.onclick = () => {
    setCurrentScoreTeam1();
    team1Score.textContent = currentScoreTeam1;
} 

team2Score.onclick = () => {
    setCurrentScoreTeam2();
    team2Score.textContent = currentScoreTeam2;
} 






// DOM INTERACTIONS - OPTIONS MENU

menuGames.onclick = () => {
    if (DEFAULT_GAMES.length - 1 == DEFAULT_GAMES.indexOf(optionTotalGames)) {
        setOptionTotalGames(DEFAULT_GAMES[0]);
        menuGamesNum.textContent = optionTotalGames;
        setOptionServerChange(DEFAULT_SERVER_CHANGE[0]);
        menuService.textContent = optionServerChange;
    } else {
        setOptionTotalGames(DEFAULT_GAMES[DEFAULT_GAMES.indexOf(optionTotalGames) + 1]);
        menuGamesNum.textContent = optionTotalGames;
        setOptionServerChange(DEFAULT_SERVER_CHANGE[1]);
        menuService.textContent = optionServerChange;
    }
}

menuSets.onclick = () => {
    if (DEFAULT_SETS.length - 1 == DEFAULT_SETS.indexOf(optionTotalSets)) {
        setOptionTotalSets(DEFAULT_SETS[0]);
        menuSetsNum.textContent = optionTotalSets;
    } else {
        setOptionTotalSets(DEFAULT_SETS[DEFAULT_SETS.indexOf(optionTotalSets) + 1]);
        menuSetsNum.textContent = optionTotalSets;
    }
}

menuSwap.onclick = () => {
    if (optionSwap == DEFAULT_SWAP[0]) {
        setOptionSwap(DEFAULT_SWAP[1]);
        menuSwapOpt.textContent = optionSwap;
    } else {
        setOptionSwap(DEFAULT_SWAP[0]);
        menuSwapOpt.textContent = optionSwap;
    }
}




// GAME SCORING




// SET CHANGE




// SINGLES / DOUBLES



// 




// SHOW/HIDE OPTIONS MENU
btnOptions.onclick = () => {
    if (btnMenu.style.display === "block") {
        btnMenu.style.display = "none";
    } else {
        btnMenu.style.display = "block";
    }
} 