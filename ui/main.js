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

var login_submit = document.getElementById('login_button');

login_submit.onclick = function () {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                alert('Logged in successfully.');
                var username_label = document.getElementById('username');
                username_label.style.visibility = 'hidden';
                var password_label = document.getElementById('password');
                password_label.style.visibility = 'hidden';
                var login_label = document.getElementById('login_button');
                login_label.style.visibility = 'hidden';
                var register_label = document.getElementById('register_button');
                register_label.style.visibility = 'hidden';

                var login_message_label = document.getElementById('login_message');
                login_message_label.style.visibility = 'visible';

                var articles = request.responseText;
                articles = JSON.parse(articles);
                var list = '';
                for (var article in articles) {
                    list += "<li>" + articles[article].title + " " + articles[article].date.toDateString() + "</li>";
                }
                var ul = document.getElementById('article-list');
                ul.innerHTML = list;
            } else if (request.status === 403) {
                alert('Username incorrect.');
            } else if (request.status === 500) {
                alert('Something went wrong.');
            } else if (request.status === 999) {
                alert('Password is incorrect.');
            }
        }
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://nishanthnitw14.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};

var register_submit = document.getElementById('register_button');

register_submit.onclick = function () {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                alert('User Registered Successfully.');
                var username_label = document.getElementById('username');
                username_label.style.visibility = 'hidden';
                var password_label = document.getElementById('password');
                password_label.style.visibility = 'hidden';
                var login_label = document.getElementById('login_button');
                login_label.style.visibility = 'hidden';
                var register_label = document.getElementById('register_button');
                register_label.style.visibility = 'hidden';

                var register_message_label = document.getElementById('register_message');
                register_message_label.style.visibility = 'visible';
            } else if (request.status === 403) {
                alert('Username/Password is empty.');
            } else if (request.status === 500) {
                alert('Something went wrong from the server.');
            }
        }
    };
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log(username);
    console.log(password);

    request.open('POST', 'http://nishanthnitw14.imad.hasura-app.io/register', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};
