const players = document.getElementsByClassName("players");
// loop every class element
for (const player of players) {
    player.addEventListener("click", function (event) {
        // find specific text
        const selected = event.target.parentNode.children[1].innerText;
        // get list div element
        const content = document.getElementById("content-container");
        // create li element
        const li = document.createElement("li");
        li.innerText = selected
        const pinFailureMessage = document.getElementById("pin-failure");
        const playerList = content.children.length + 1;
        if (playerList <= 5) {
            content.appendChild(li);
            event.target.setAttribute("disabled", true)
            event.target.style.backgroundColor = 'gray'
            displayText(playerList, "total-players");
        } else {
            pinFailureMessage.style.display = 'block';
        }
        
        document.getElementById("calculate").addEventListener("click", function () {
            calculate("player-value");
        })
        document.getElementById("total-calculate").addEventListener("click", function () {
            const element = inputInnerText("player-total");
            const total = totalCalculate("manager-field", "coach-field", element);
            const totalPlayer = calculate();
            const amount = total + totalPlayer;
            return amount;
        })
    });
}

