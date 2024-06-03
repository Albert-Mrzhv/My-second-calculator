const input1 = document.getElementById('inp1');
const input2 = document.getElementById('inp2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplayBtn = document.getElementById('multiplay');
const shareBtn = document.getElementById('share');
const clearBtn = document.getElementById('button');
const result = document.getElementById('result');
let vision;

plusBtn.addEventListener('click', () => {
    vision = '+'
});

minusBtn.addEventListener('click', () => {
    vision = '-'
});

multiplayBtn.addEventListener('click', () => {
    vision = '*'
});

shareBtn.addEventListener('click', () => {
    vision = '/'
});

function Colors(col) {
    if (col < 0) {
        result.style.color = 'red';
    } else {
        result.style.color = 'black';
    }
    result.textContent = col;
}

function General(inp1, inp2, vis) {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    if (vis === '+') {
        return num1 + num2;
    } else if (vis === '-') {
        return num1 - num2;
    } else if (vis === '*') {
        return num1 * num2;
    } else if (vis === '/') {
        return num1 / num2;
    }
}

clearBtn.addEventListener('click', () => {
    const sum = General(input1, input2, vision);
    Colors(sum)
})