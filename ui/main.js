console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;
var hitRight = 0;
var hitLeft = 1;

function moveRight () {
    if (img.style.marginLeft < 800 && hitRight === 0 && hitLeft == 1){
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    else{
        hitRight = 1;
        hitLeft = 0;
    }
    if (img.style.marginLeft > 50 && hitRight == 1 && hitLeft === 0) {
        marginLeft = marginLeft - 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    else{
        hitRight = 0;
        hitLeft = 1;
    }
}

img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};