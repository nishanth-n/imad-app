console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + '.px';
}

img.onClick() = function () {
        var interval = setInterval(moveRight,100);
}