// Tabletennis UI


// SETUP DEFAULT VARIABLES
const DEFAULT_SCORE = 0;
const DEFAULT_TEAMS = ["Team1", "Team2"];
const DEFAULT_MODE = ["singles", "doubles"];
const DEFAULT_GAMES = ['11', '21'];
const DEFAULT_SETS = ['3', '5', '7'];
const DEFAULT_SERVER_CHANGE = ['2', '5'];
const DEFAULT_SWAP = ['YES', 'NO'];

let currentGameScore = [DEFAULT_SCORE, DEFAULT_SCORE];
let currentSetPoints = [DEFAULT_SCORE, DEFAULT_SCORE];

let i = DEFAULT_SCORE;  // Current Team Index
let currentTeam = DEFAULT_TEAMS[i];
let currentSet = DEFAULT_SCORE;
let currentGame = DEFAULT_SCORE;
let currentService = DEFAULT_TEAMS[i];

let setWon = false;
let matchWon = false;
let lateGame = false;

let optionMode = DEFAULT_MODE[0];
let optionTotalGames = DEFAULT_GAMES[0];
let optionTotalSets = DEFAULT_SETS[0];
let optionServerChange = DEFAULT_SERVER_CHANGE[0];
let optionSwap = DEFAULT_SWAP[0];



// SET VARIABLES

const setCurrentGameScore = () => currentGameScore[i] ++;
const setCurrentSetPoints = () => currentSetPoints[i] ++;

const setCurrentSet = () => currentSet ++;
const setCurrentGame = () => currentGame ++;
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
const team1Sets = document.getElementById('ttTeam1Sets').getElementsByTagName('span')[0];
const team2Sets = document.getElementById('ttTeam2Sets').getElementsByTagName('span')[0];
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
    i = 0;
    currentTeam = DEFAULT_TEAMS[i];
    gamePlay();
} 

team2Score.onclick = () => {
    i = 1;
    currentTeam = DEFAULT_TEAMS[i];
    gamePlay();
} 

const updateGameScreen = () => {
    team1Score.textContent = currentGameScore[0];
    team2Score.textContent = currentGameScore[1];

    team1Sets.textContent = currentSetPoints[0];
    team2Sets.textContent = currentSetPoints[1];

}


// GAME PLAY CONTROL

const gamePlay = () => {
    setCurrentGame();
    setCurrentGameScore();
    console.log("Current Game: " + currentGame);
    console.log("Current Score: " + currentGameScore[0] + " v " + currentGameScore[1]);
    updateGameScreen();
    if (currentGameScore[i] >= parseInt(optionTotalGames)-1) {
        gameWinner(currentGameScore[i]);
    }
}

const gameWinner = (currentScore) => {
    isSetWon(currentScore);
    if (setWon) {
        setCurrentSet();
        setCurrentSetPoints();
        updateGameScreen();
        resetGame();
        console.log("Game winner is " + currentTeam);
    }
}

const isSetWon = (currentScore) => {
    if (isDeuce() && !isLeadBy2()) {
        console.log("checking if set is won... it's not");
        return;
    } else if (currentScore >= parseInt(optionTotalGames) && isLeadBy2()) {
        console.log("checking if set is won... winner");
        setWon = true;
        return;
    }
}

const isDeuce = () => {
    if (currentGameScore[0] == currentGameScore[1]) {
        console.log("Deuce")
        return true;
    } else return false;
}

const isLeadBy2 = () => {
    if (Math.abs(currentGameScore[0] - currentGameScore[1]) >= 2) {
        console.log("Leading by 2")
        return true;
    } else return false;
}

const isLateGame = () => { //### incomplete logic, not implemented
    if (currentGameScore[0] >= parseInt(optionTotalGames)-1 && currentGameScore[1] >= parseInt(optionTotalGames)-1) {
        lateGame = true;
        return true;
    }
}



// SET CHANGE




// SINGLES / DOUBLES



// GAME RESETS

const resetGameNum = () => currentGame = DEFAULT_SCORE;
const resetTeamScores = () => currentGameScore = [DEFAULT_SCORE, DEFAULT_SCORE];

const resetGame = () => {
    resetGameNum();
    resetTeamScores();
    // updateGameScreen();
    setWon = false;
}

const resetMatch = () => {
    resetGame();
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



// SHOW/HIDE OPTIONS MENU
btnOptions.onclick = () => {
    if (btnMenu.style.display === "block") {
        btnMenu.style.display = "none";
    } else {
        btnMenu.style.display = "block";
    }
} 