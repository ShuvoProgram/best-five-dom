function calculate(value){
    const perPlayer = inputValue(value);
    if (typeof perPlayer === 'number' && perPlayer > 0) {
        const totalPlayers = document.getElementById("total-players").innerText;
        const totalPlayerBudget = parseFloat(parseFloat(totalPlayers) * perPlayer);
        displayText(totalPlayerBudget, "player-total");
    } else {
        alert("Show");
    }
    
}

function totalCalculate(input1, input2, input3){
    const managerBudget = inputValue(input1);
    const coachBudget = inputValue(input2);
    if(typeof managerBudget === "number" && typeof coachBudget === "number" && managerBudget > 0 && coachBudget > 0){
        const nextCalculate = managerBudget + coachBudget + input3;
        displayText(nextCalculate, "total-amount");
    } else {
        alert("Show")
    }
    
}

function removeValue(){
    
}

function displayText(display, id){
    const totalAmount = document.getElementById(id);
    totalAmount.innerText = display;
}
function inputValue(idName) {
  const perPlayer = document.getElementById(idName);
  const perPlayerString = perPlayer.value;
  const player = parseInt(perPlayerString);
  return player;
}

function inputInnerText(id){
    const elementId = document.getElementById(id);
    const innerText = parseInt(elementId.innerText);
    return innerText;
}

