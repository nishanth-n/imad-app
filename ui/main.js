console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;
var hitRight = False;
var hitLeft = True;

function moveRight () {
    if (img.style.marginLeft < 800 & hitRight == False & hitLeft == True){
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    else{
        hitRight = True;
        hitLeft = False;
    }
    if (img.style.marginLeft > 50 & hitRight == True & hitLeft == False) {
        marginLeft = marginLeft - 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    else{
        hitRight = False;
        hitLeft = True;
    }
}

img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};