// Tabletennis UI


// SET VARIABLES
const DEFAULT_SCORE = "0";
const DEFAULT_SERVICE = ["team1", "team2"];
const DEFAULT_MODE = ["singles", "doubles"];
const DEFAULT_GAMES = ['11', '21'];
const DEFAULT_SETS = ['3', '5', '7'];
const DEFAULT_SERVER_CHANGE = ['2', '5'];

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




// DOM SELECTORS




// DOM INTERACTIONS





// OPTIONS MENU




// GAME SCORING




// SET CHANGE




// SINGLES / DOUBLES



// 




// SHOW/HIDE OPTIONS MENU
function ttOptions() {
    var x = document.getElementById("ttMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 