console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

function moveImage () {
    var interval = setInterval(moveRight, 100);
}

img.onclick = moveImage();