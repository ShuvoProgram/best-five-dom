playerList("players")

document.getElementById("calculate").addEventListener("click", function(){
    const perPlayer = inputValue("player-value");

    const players = playerList("players");
    console.log(players)
    const totalPlayerBudget = parseFloat(players * perPlayer);
    const playersTotal = document.getElementById("player-total");
    playersTotal.innerText = totalPlayerBudget;
})

document.getElementById("total-calculate").addEventListener("click", function(){
    const managerBudget = inputValue("manager-field");
    const coachBudget = inputValue("coach-field");
    const nextCalculate = managerBudget + coachBudget;
    const totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = nextCalculate;
})