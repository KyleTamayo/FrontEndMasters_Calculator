let total = 0;
let temp = 0;
let lastSignPressed = '';

function add() {
    if (lastSignPressed === 'eq' || lastSignPressed === 'cs')
        total = Number(document.querySelector('.screen').innerHTML);
    else
        total += temp;
    temp = 0;
    lastSignPressed = 'add';
    updateScreen(temp);
}

function backspace() {
    total = Math.trunc(total / 10);
    if (total > 0)
        updateScreen(total);
    else
        clearScreen();
}

function clearScreen() {
    total = 0;
    temp = 0;
    lastSignPressed = 'cs';
    updateScreen(0);
}

function div() {
    if (lastSignPressed === 'eq' || lastSignPressed === 'cs')
        total = Number(document.querySelector('.screen').innerHTML);
    else
        total /= temp;
    temp = 0;
    lastSignPressed = 'div';
    updateScreen(temp);
}

function equal() {
    switch (lastSignPressed) {
        case 'add':
            total += temp;
            break;
        case 'div':
            total /= temp;
            break;
        case 'mul':
            total *= temp;
            break;
        case 'sub':
            total -= temp;
            break;
        default:
            break;
    }
    temp = 0;
    updateScreen(total);
    lastSignPressed = 'eq';
}

function mul() {
    if (lastSignPressed === 'eq' || lastSignPressed === 'cs')
        total = Number(document.querySelector('.screen').innerHTML);
    else
        total *= temp;
    temp = 0;
    lastSignPressed = 'mul';
    updateScreen(temp);
}

function numberPressed(num) {
    temp = (temp * 10) + num;
    updateScreen(temp);
}

function sub() {
    if (lastSignPressed === 'eq' || lastSignPressed === 'cs')
        total = Number(document.querySelector('.screen').innerHTML);
    else
        total -= temp;
    temp = 0;
    lastSignPressed = 'sub';
    updateScreen(temp);
}


function updateScreen(num) {
    document.querySelector(".screen").innerHTML = String(num);
}

clearScreen()