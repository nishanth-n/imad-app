console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;
var hitRight = 0;
var hitLeft = 1;

function moveRight () {
    console.log('Moving the Image...');
    console.log(img.style.padding);
    var margin = parseInt(img.style.padding);
    console.log(margin);
    if (parseInt(img.style.marginLeft) < 800 && hitRight === 0 && hitLeft == 1){
        console.log('Moving the Image to right...');
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    else{
        hitRight = 1;
        hitLeft = 0;
    }
    if (parseInt(img.style.marginLeft) > 50 && hitRight == 1 && hitLeft === 0) {
        console.log('Moving the Image to Left...');
        marginLeft = marginLeft - 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    else{
        hitRight = 0;
        hitLeft = 1;
    }
}

img.onclick = function () {
    console.log('Moving the Image');
    var interval = setInterval(moveRight, 50);
};