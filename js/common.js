function playerList(className){
    const players = document.getElementsByClassName(className);
    let count = 1;
    for (const player of players) {
        player.addEventListener("click", function (event) {
            const selected = event.target.parentNode;
            const selectedPlayerName = selected.querySelector("h3").innerText;
            const content = document.getElementById("content-container");
            const contentList = document.createElement("tr");
            contentList.innerHTML = `
        <th>${count++}</th>
        <td>${selectedPlayerName}</td>
        `
            content.appendChild(contentList);
            
        })

    }
}


function inputValue(idName){
    const perPlayer = document.getElementById(idName);
    const perPlayerString = perPlayer.value;
    const player = parseInt(perPlayerString);
    return player;
}