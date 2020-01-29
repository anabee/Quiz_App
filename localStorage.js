var winList = document.querySelector("#win-winslist");
var userName = document.querySelector("#name-win");
var saveInitials = document.querySelector(".addingScoreBtn");



var allTimePlayers = [];
var allTimeScore = [];
var completeList = [];



init();

function renderAllPlayers() {
    // winList.innerHTML = "";

    for (i = 0; i < allTimePlayers.length; i++) {
        completeList.push({
            allTimePlayers: allTimePlayers[i],
            allTimeScore: allTimeScore[i]
        })
            console.log(completeList)
            var li = document.createElement("li");
        
        li.textContent = completeList[i].allTimePlayers + completeList[i].allTimeScore;
        li.setAttribute("data-index", i);
    
        winList.append(li);
        }
    };

function init() {
    var storedPlayers = JSON.parse(localStorage.getItem("completeList"));

    if (storedPlayers !== null) {
        // completeList = storedPlayers;
    }

    renderAllPlayers();
}

function allStoredPlayersLIst() {
    localStorage.setItem("completeList", JSON.stringify(completeList));

}

saveInitials.addEventListener("click", function (event) {
    event.preventDefault();

    allTimePlayers.push(userName.value.trim());
    allTimeScore.push(saveTimeEnd);


    allStoredPlayersLIst();
    renderAllPlayers();

    userResults.classList.add('hide');
    highScoresPage.classList.remove('hide');
    scoreBoard();
});