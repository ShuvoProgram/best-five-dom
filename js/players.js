const players = document.getElementsByClassName("players");
for (const player of players) {
    player.addEventListener("click", function (event) {
        const selected = event.target.parentNode.children[1].innerText;
        const content = document.getElementById("content-container");
        const li = document.createElement("li");
        li.innerText = selected
        const pinFailureMessage = document.getElementById("pin-failure");
        const playerList = content.children.length + 1;
        event.target.setAttribute("disabled", true)
        if (playerList <= 5) {
            content.appendChild(li);
            displayText(playerList, "total-players");
        } else {
            pinFailureMessage.style.display = 'block';
        }
        
        document.getElementById("calculate").addEventListener("click", function () {
            calculate("player-value", playerList);
        })
        document.getElementById("total-calculate").addEventListener("click", function () {
            const ele = inputInnerText("player-total");
            const total = totalCalculate("manager-field", "coach-field", ele);
            const totalPlayer = calculate();
            const amount = total + totalPlayer;
            return amount;
        })
    });
}

