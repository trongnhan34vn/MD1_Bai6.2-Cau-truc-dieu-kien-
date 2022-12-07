let imgObj = null;
imgObj = document.getElementById('myImage');

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.rotate = '0deg';
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 50 + 'px';
    imgObj.style.rotate = parseInt(imgObj.style.rotate) + 25 + 'deg';

}

window.onload = init;