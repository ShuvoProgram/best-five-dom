function calculate(value){
    const perPlayer = inputValue(value);
    const alu = document.getElementById("total-players").innerText;
    const totalPlayerBudget = parseFloat(parseFloat(alu) * perPlayer);
    displayText(totalPlayerBudget, "player-total");
}

function totalCalculate(input1, input2, dim){
    const managerBudget = inputValue(input1);
    const coachBudget = inputValue(input2);
    const nextCalculate = managerBudget + coachBudget + dim;
    displayText(nextCalculate, "total-amount");
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

