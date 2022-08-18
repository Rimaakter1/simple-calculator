function getNumberByID(btn) {
    const btnNumber = document.getElementById(btn);
    const btnString = btnNumber.innerText;
    const btnValue = parseFloat(btnString);
    return btnValue;
}

function getInputFieldByID(inputFieldId, newValue) {
    const inputField = document.getElementById(inputFieldId);
    const value = inputField.value;
    inputField.value += newValue;
}
function getSymbolByID(btn) {
    const btnSymbol = document.getElementById(btn);
    const symbol = btnSymbol.innerText;
    return symbol;
}

function solve(inputField) {
    let x = document.getElementById(inputField).value;
    let y = eval(x);
    document.getElementById(inputField).value = y;
}
// const one = document.getElementById('one');
// const oneString = one.innerText;
// const oneValue = parseFloat(oneString);
// console.log(oneValue);

document.getElementById('one').addEventListener(`click`, function () {
    const oneValue = getNumberByID('one');
    // const inputField = document.getElementById('input-field');
    // inputField.value = oneValue;
    const inputFieldValue = getInputFieldByID('input-field', oneValue);
})
document.getElementById('two').addEventListener(`click`, function () {
    const twoValue = getNumberByID('two');
    // const inputField = document.getElementById('input-field');
    // inputField.value = twoValue;
    const inputFieldValue = getInputFieldByID('input-field', twoValue);
})
document.getElementById('three').addEventListener(`click`, function () {
    const threeValue = getNumberByID('three');
    const inputFieldValue = getInputFieldByID('input-field', threeValue);
})
document.getElementById('four').addEventListener(`click`, function () {
    const fourValue = getNumberByID('four');
    const inputFieldValue = getInputFieldByID('input-field', fourValue);
})
document.getElementById('five').addEventListener(`click`, function () {
    const fiveValue = getNumberByID('five');
    const inputFieldValue = getInputFieldByID('input-field', fiveValue);
})
document.getElementById('six').addEventListener(`click`, function () {
    const sixValue = getNumberByID('six');
    const inputFieldValue = getInputFieldByID('input-field', sixValue);
})

document.getElementById('seven').addEventListener(`click`, function () {
    const sevenValue = getNumberByID('seven');
    const inputFieldValue = getInputFieldByID('input-field', sevenValue);
})

document.getElementById('eight').addEventListener(`click`, function () {
    const eightValue = getNumberByID('eight');
    const inputFieldValue = getInputFieldByID('input-field', eightValue);
})

document.getElementById('nine').addEventListener(`click`, function () {
    const nineValue = getNumberByID('nine');
    const inputFieldValue = getInputFieldByID('input-field', nineValue);
})
document.getElementById('zero').addEventListener(`click`, function () {
    const zeroValue = getNumberByID('zero');
    const inputFieldValue = getInputFieldByID('input-field', zeroValue);
})
document.getElementById('plus').addEventListener(`click`, function () {
    const plusValue = getSymbolByID('plus');
    const inputFieldValue = getInputFieldByID('input-field', plusValue);
})
document.getElementById('minus').addEventListener(`click`, function () {
    const minusValue = getSymbolByID('minus');
    const inputFieldValue = getInputFieldByID('input-field', minusValue);
})
document.getElementById('multiple').addEventListener(`click`, function () {
    const multipleValue = getSymbolByID('multiple');
    const inputFieldValue = getInputFieldByID('input-field', multipleValue);
})
document.getElementById('divide').addEventListener(`click`, function () {
    const divideValue = getSymbolByID('divide');
    const inputFieldValue = getInputFieldByID('input-field', divideValue);
})
document.getElementById('decimal').addEventListener(`click`, function () {
    const decimalValue = getSymbolByID('decimal');
    const inputFieldValue = getInputFieldByID('input-field', decimalValue);
})
document.getElementById('equal').addEventListener(`click`, function () {
    solve('input-field');

})
document.getElementById('clear all').addEventListener(`click`, function () {
    // const inputFieldValue = getInputFieldByID('input-field', equalValue);
    const inputField = document.getElementById('input-field');
    inputField.value = '';
})




