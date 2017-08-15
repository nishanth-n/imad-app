console.log('Loaded!');

var img = document.getElementById('madi');

var marginLeft = 0;
var hitRight = 0;
var hitLeft = 1;

function moveRight () {
//    console.log('Moving the Image...');
//    console.log(img.style.padding);
//    var margin = parseInt(img.style.padding);
//    console.log(margin);
    if (marginLeft < 800 && hitRight === 0 && hitLeft == 1){
//        console.log('Moving the Image to right...');
        marginLeft = marginLeft + 1;
        img.style.marginLeft = marginLeft + 'px';
    }
    else{
        hitRight = 1;
        hitLeft = 0;
    }
    if (marginLeft > -1000 && hitRight == 1 && hitLeft === 0) {
        console.log('Moving the Image to Left...');
        marginLeft = marginLeft - 1;
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

var submit = document.getElementById('submit_button');

submit.onclick = function () {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i = 0; i < names.length; i++) {
                    list += "<li>" + names[i] + "</li>";
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://nishanthnitw14.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};