var state = false;
var menu = document.getElementById('cust_menu');
var body = document.getElementsByTagName('body');

function custMenu() {
    if (state == false) {
        document.getElementById('cust_menu').style.display = 'block';
        document.getElementById('cust_menu').style.visibility = 'hidden';
        document.getElementById('cust_menu').classList.add("slideDown");
    } else {
        document.getElementById('cust_menu').style.display = 'none';
    }
    state = !(state);
}

function changeBG(bg) {
    var id = bg.id[0];
    document.getElementById('body').style.background = `url(img/background_${id}.jpg) no-repeat center top #114471`  // url(/img/background_${id}.jpg) no-repeat center top #114471 - если не github pages
    localStorage.setItem('bg', id)
}

function bgSet() {
    var id = localStorage.getItem('bg') || 5;
    document.getElementById('body').style.background = `url(img/background_${id}.jpg) no-repeat center top #114471`  // url(/img/background_${id}.jpg) no-repeat center top #114471 - если не github pages
}

function burger() {
    var burgerMenu = document.querySelector('.burgerMenu');
    var body = document.querySelector('body');
    // var btn = document.querySelector('.burgerMenuBtn');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('scrollLock');
    // btn.classList.toggle('fixedLT')
}

document.documentElement.addEventListener('click', function (e) {
    if(!e.target.closest('.burgerMenu') && !e.target.closest('.burgerMenuBtn')) {
        document.querySelector('.burgerMenu').classList.remove('active');
    }
});

// function alternative() {
//     let video = document.querySelector('');
//     let videoAlternative = document.querySelector('');
// }