var winList = document.querySelector("#win-winslist");
var userName = document.querySelector("#name-win");
var saveInitials = document.querySelector(".addingScoreBtn");

userNameSpan.textContent = localStorage.getItem('completeList');

var allTimePlayers = [];
var allTimeScore = [];
var completeList;



// init();

function renderAllPlayers() {
    // winList.innerHTML = "";

    for (i = 0; i < allTimePlayers.length; i++) {
        completeList.push({
            allTimePlayers: allTimePlayers[i],
            allTimeScore: allTimeScore[i]
        })
        console.log(completeList)
        //     console.log(completeList)
        //     var li = document.createElement("div");
        
        // li.textContent = completeList[i].allTimePlayers + completeList[i].allTimeScore;
        // li.setAttribute("data-index", i);
    
        winList.textContent = completeList[i].allTimePlayers + completeList[i].allTimeScore
        }
    };

function init() {
    var storedPlayers = JSON.parse(localStorage.getItem("completeList"));

    if (storedPlayers !== null) {
        completeList = storedPlayers;
    }

    // renderAllPlayers();
}

function allStoredPlayersLIst() {
    completeList = [];
    for (i = 0; i < allTimePlayers.length; i++) {
        completeList.push({
            allTimePlayers: allTimePlayers[i],
            allTimeScore: allTimeScore[i]
        })
        console.log(completeList)
            console.log(completeList)
            var li = document.createElement("div");
        
        li.textContent = completeList[i].allTimePlayers + completeList[i].allTimeScore;
        li.setAttribute("data-index", i);
    
        winList.textContent = completeList[i].allTimePlayers + completeList[i].allTimeScore
        }

    localStorage.setItem("completeList", JSON.stringify(completeList));
console.log(completeList)
}

saveInitials.addEventListener("click", function (event) {
    event.preventDefault();

    allTimePlayers.push(userName.value.trim());
    allTimeScore.push(saveTimeEnd);

    
    
    
    init();
    allStoredPlayersLIst();
    renderAllPlayers();

    userResults.classList.add('hide');
    highScoresPage.classList.remove('hide');
    scoreBoard();
});