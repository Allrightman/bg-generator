let h3 = document.querySelector('h3');
let inputLeft = document.querySelector('.color1');
let inputRight = document.querySelector('.color2');
let body = document.querySelector('body');
let button = document.getElementById('btn');

function getRandomColor() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = 6 - x.length;
    var z = '000000';
    var z1 = z.substring(0, y);
    var color = '#' + z1 + x;
    return color;
}

function setBg() {
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();
    body.style.background =
        'linear-gradient(to right, ' + randomColor1 + ', ' + randomColor2 + ')';
    inputLeft.value = randomColor1;
    inputRight.value = randomColor2;
    h3.textContent = body.style.background;
}

function gradient() {
    body.style.background =
        'linear-gradient(to right, ' +
        inputLeft.value +
        ', ' +
        inputRight.value +
        ')';
    h3.textContent = body.style.background;
}

button.addEventListener('click', setBg);
inputLeft.addEventListener('input', gradient);
inputRight.addEventListener('input', gradient);
