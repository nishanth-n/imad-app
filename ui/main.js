console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight () {
    if (marginRight < 50){
        marginLeft = marginLeft + 1;
        img.style.marginLeft = marginLeft + 'px';
    }
    else if (marginLeft < 50) {
        marginLeft = marginLeft - 1;
        img.style.marginLeft = marginLeft + 'px';

    }
}

img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};