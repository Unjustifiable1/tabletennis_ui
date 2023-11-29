// Tabletennis UI


// SETUP DEFAULT VARIABLES
const DEFAULT_SCORE = 0;
const DEFAULT_TEAMS = ["team1", "team2"];
const DEFAULT_MODE = ["singles", "doubles"];
const DEFAULT_GAMES = ['11', '21'];
const DEFAULT_SETS = ['2', '3', '4', '5', '6', '7'];
const DEFAULT_SERVER_CHANGE = ['2', '5'];
const DEFAULT_SWAP = ['YES', 'NO'];

let currentGameScore = [DEFAULT_SCORE, DEFAULT_SCORE];
let currentSetPoints = [DEFAULT_SCORE, DEFAULT_SCORE];

let i = DEFAULT_SCORE;  // Current Team Index
let currentTeam = DEFAULT_TEAMS[i];
let currentGame = DEFAULT_SCORE;
let currentSet = DEFAULT_SCORE + 1;
let currentService = DEFAULT_TEAMS[0];
let serviceToss = DEFAULT_TEAMS[0];

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
const setServiceToss = (newServer) => serviceToss = newServer;

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
    let team = DEFAULT_TEAMS[0];
    newGamePlay(team);
    printInfo();
} 

team2Score.onclick = () => {
    let team = DEFAULT_TEAMS[1];
    newGamePlay(team);
    printInfo();
} 

const printInfo = () => {
    console.log(`\nNext point... awarded to ${gameStats.pointWinner}`)
    console.log(arrGameHistory[arrGameHistory.length - 1]);
    console.log(`${gameStats.team1.teamScore} v ${gameStats.team2.teamScore}`);
    console.log(gameHistory[gameHistory.length - 1]);
}

// team1Score.onclick = () => {
//     i = 0;
//     currentTeam = DEFAULT_TEAMS[i];
//     gamePlay();
// } 

// team2Score.onclick = () => {
//     i = 1;
//     currentTeam = DEFAULT_TEAMS[i];
//     gamePlay();
// } 

const updateGameScreen = () => {
    team1Score.textContent = gameStats.team1.teamScore;
    team2Score.textContent = gameStats.team2.teamScore;

    team1Sets.textContent = gameStats.team1.teamSetPoints;
    team2Sets.textContent = gameStats.team2.teamSetPoints;


    // team1Score.textContent = currentGameScore[0];
    // team2Score.textContent = currentGameScore[1];

    // team1Sets.textContent = currentSetPoints[0];
    // team2Sets.textContent = currentSetPoints[1];
}


// NEW GAME PLAY CONTROL

const newGamePlay = (team) => {
    gameStats.pointWinner = team;
    gameStats.gameNumber ++;
    gameStats[team].teamScore ++;
    updateGameHistory();
    updateGameScreen();
}


const updateGameHistory = () => {
    let thisGame = `Set: ${gameStats.setNumber} | Game: ${gameStats.gameNumber}`;
    arrGameHistory.push(thisGame);

    let constructor = {};
    constructor[thisGame] = gameStats;

    gameHistory.push(constructor);
}


// GAME PLAY CONTROL

const gamePlay = () => {
    setCurrentGame();
    setCurrentGameScore();
    console.log("Current Game: " + currentGame);
    console.log("Current Score: " + currentGameScore[0] + " v " + currentGameScore[1]);
    updateGameScreen();
    if (currentGame === 2 || currentGame % 2 === 0) {
        toggleService();
    }
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
        serviceChangeAfterSet();
    }
    isMatchWon();
    if (matchWon) {
        updateGameScreen();
    }
    if (setWon || matchWon) { resetGame() };
}

const isSetWon = (currentScore) => {
    console.log("Checking if set is won...");
    if (isDeuce() && !isLeadBy2()) {
        console.log("Checking set... it's not won");
        return;
    } else if (currentScore >= parseInt(optionTotalGames) && isLeadBy2()) {
        console.log("Set winner!");
        setWon = true;
        return;
    }
}

const isDeuce = () => {
    if (currentGameScore[0] == currentGameScore[1]) {
        lateGame = true;
        console.log("Deuce!! Late game active => Switch service after every point");
        return true;
    }
}

const isLeadBy2 = () => {
    if (Math.abs(currentGameScore[0] - currentGameScore[1]) >= 2) {
        console.log("Leading by 2")
        return true;
    }
}

const isMatchWon = () => {
    console.log("Checking if match is won...");
    if (currentSetPoints[i] == optionTotalSets) {
        console.log("Match won!!");
        matchWon = true
        return true;
    }
}



// SERVICE SELECTION AND CHANGE


team1Service.onclick = () => {
    let team = DEFAULT_TEAMS[0];
    if (gameStats.setNumber === 0) {
        team2Service.style.display = "none";
        initiateService(team, DEFAULT_TEAMS[1]);
        printInfo();
    }
}

team2Service.onclick = () => {
    let team = DEFAULT_TEAMS[1];
    if (gameStats.setNumber === 0) {
        team1Service.style.display = "none";
        initiateService(team, DEFAULT_TEAMS[0]);
        printInfo();
    }
}

const initiateService = (team, teamX) => {
    if (gameStats.setNumber === 0) { gameStats.serviceToss = team; gameStats.setWon = true; }
    gameStats.setNumber % 2 === 0 ? gameStats.currentService = team : gameStats.currentService = teamX;
    if (gameStats.setWon) { gameStats.setNumber ++; gameStats.setWon = false; };
}

const newToggleService = () => {

}


// team1Service.onclick = () => {
//     i = 0;
//     team2Service.style.display = "none";
//     setServiceToss(DEFAULT_TEAMS[i]);
//     setCurrentService(serviceToss);
//     console.log("set# " + currentSet + " currentService " + currentService + " serviceToss " + serviceToss);
// } 

// team2Service.onclick = () => {
//     i = 1;
//     team1Service.style.display = "none";
//     setServiceToss(DEFAULT_TEAMS[i]);
//     setCurrentService(serviceToss);
//     console.log("set# " + currentSet + " currentService " + currentService + " serviceToss " + serviceToss);
// } 

const toggleService = () => {
    if (currentService == DEFAULT_TEAMS[0]) {
        currentService = DEFAULT_TEAMS[1];
        team1Service.style.display = "none";
        team2Service.style.display = "block";
    } else {
        currentService = DEFAULT_TEAMS[0];
        team1Service.style.display = "block";
        team2Service.style.display = "none";
    }
    console.log("set# " + currentSet + " currentService " + currentService + " serviceToss " + serviceToss);
}




// SET CHANGE

const serviceChangeAfterSet = () => {
    if (serviceToss == currentService) {
        toggleService();
    }
}




// SINGLES / DOUBLES



// GAME RESETS

const resetGameNum = () => currentGame = DEFAULT_SCORE;
const resetGameScores = () => currentGameScore = [DEFAULT_SCORE, DEFAULT_SCORE];
const resetSetNum = () => currentSet = DEFAULT_SCORE;
const resetSetScores = () => currentSetPoints = [DEFAULT_SCORE, DEFAULT_SCORE];

const resetGame = () => {
    resetGameNum();
    resetGameScores();
    if (setWon) { alert("Game winner is " + currentTeam) };
    setWon = false;
    lateGame = false;
    if (matchWon) { alert("Match WON by " + currentTeam + "!!") };
    matchWon = false;
}

const resetMatch = () => {
    resetGame();
    resetSetNum();
    resetSetScores();
    updateGameScreen();
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
    resetMatch();
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

btnReset.onclick = () => { resetMatch() };



// SHOW/HIDE OPTIONS MENU
btnOptions.onclick = () => {
    if (btnMenu.style.display === "block") {
        btnMenu.style.display = "none";
    } else {
        btnMenu.style.display = "block";
    }
} 


// GAME INFO CURRENT

const gameStats = {
    team1: {
        teamNames: ['Player1', 'Player3'],
        teamScore: DEFAULT_SCORE,
        teamSetPoints: DEFAULT_SCORE,
    },

    team2: {
        teamNames: ['Player2', 'Player4'],
        teamScore: DEFAULT_SCORE,
        teamSetPoints: DEFAULT_SCORE,
    },
    
    pointWinner: "",
    currentService: "",
    
    setNumber: DEFAULT_SCORE,
    gameNumber: DEFAULT_SCORE,
    serviceToss: "",

    setWon: false,
    matchWon: false,
    lateGame: false,
};



// GAME INFO HISTORY

let arrGameHistory = ["Set: 0 | Game: 0",];


const gameHistory = [
    {"Set: 0 | Game: 0": {
        team1: {
            teamNames: ['Player1', 'Player3'],
            teamScore: DEFAULT_SCORE,
            teamSetPoints: DEFAULT_SCORE,
        },
    
        team2: {
            teamNames: ['Player2', 'Player4'],
            teamScore: DEFAULT_SCORE,
            teamSetPoints: DEFAULT_SCORE,
        },
        
        pointWinner: "",
        currentService: "",
    
        setNumber: DEFAULT_SCORE,
        gameNumber: DEFAULT_SCORE,
        serviceToss: "",
    
        setWon: false,
        matchWon: false,
        lateGame: false,
    }},
];