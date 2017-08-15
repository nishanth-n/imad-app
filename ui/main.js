console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

function moveImage () {
//    var interval = setInterval(moveRight, 100);
    img.style.marginLeft = '200px';
}

img.onclick = moveImage();