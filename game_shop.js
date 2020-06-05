let balance = 0;
let cost = 0;
let read = false;
let promo1 = localStorage.getItem('promo1') || true;
let promo2 = localStorage.getItem('promo2') || true;
let promo3 = localStorage.getItem('promo3') || true;
let promo4 = localStorage.getItem('promo4') || true;
let item;
let count = localStorage.getItem('count') || 0;

function tea() {
    myAlertOn(text='Чай', text2=10, btnText='купить')
}

function  juice(type) {
    myAlertOn(text=type, text2=15, btnText='купить')
}

function updateBalance() {
    let balanceInf = document.querySelector('.balanceInfo_text');
    balanceInf.innerText = balance + ' rub';
}

function loadBalance() {
    balance = +localStorage.getItem('balance') || 0;
}

function saveBalance() {
    localStorage.setItem('balance', balance);
}

function balancePlus() {
    tmp = prompt('Промокод:')
    if(tmp == 'lr320' && promo1) {
        balance += 320;
        promo1 = false;
        localStorage.setItem('promo1', promo1);
    } else if(tmp == 'tuip700' && promo2) {
        balance += 701;
        promo2 = false;
        localStorage.setItem('promo2', promo2);
    } else if(tmp == 'GGRTYYFS' && promo3) {
        balance += 999;
        promo3 = false;
        localStorage.setItem('promo3', promo3);
    } else if(tmp == 'HGGD327TIHF378G4FH') {
        tmp2 = prompt(':://|:://..::||: ');
        balance += +tmp2;
    } else if(tmp == 'start') {
        balance += 200;
        promo3 = false;
        localStorage.setItem('promo4', promo4);
    } else {
        alert('Неверный промокод или он не действителен')
    }
    updateBalance();
    saveBalance();
}

function inventoryAdd(item) {
    inv = document.createElement('div');
    inv.innerHTML = `<p>${item}</p>`;
    inv.classList.add('inventoryElement')
    document.querySelector('.inventory').append(inv);
    localStorage.setItem(`item${count}`, item)
    count++;
    localStorage.setItem(`count`, count)
}

function loadInventory() {
    for (let i = 0; i < count; i++) {
        let item = localStorage.getItem(`item${i}`)
        inv = document.createElement('div');
        inv.innerHTML = `<p>${item}</p>`;
        inv.classList.add('inventoryElement')
        document.querySelector('.inventory').append(inv);
        localStorage.setItem(`item${count}`, item)
    }
}

// MY ALERT JS \\
function myAlertOn(text='', text2=0, btnText='') {
    cost = text2;
    item = text;
    read = false;
    let myAlertWrap = document.querySelector('.myAlertWrap');
    let myAlert = document.querySelector('.myAlert');
    let title = document.querySelector('.myAlerText-title');
    let subtitle = document.querySelector('.myAlerText-subtitle');
    let button = document.querySelector('.myAlertButton-button');
    title.innerText = text;
    subtitle.innerText = text2 + " руб";
    button.value = btnText;
    myAlertWrap.style.visibility = 'visible';
    myAlertWrap.style.opacity = '1';
    myAlert.style.visibility = 'visible';
    myAlert.style.opacity = '1';
}

function myAlertOff() {
    let myAlertWrap = document.querySelector('.myAlertWrap');
    let myAlert = document.querySelector('.myAlert');
    myAlertWrap.style.opacity = '0';
    myAlertWrap.style.visibility = 'hidden';
    myAlert.style.opacity = '0';
    myAlert.style.visibility = 'hidden';
    if(balance >= cost) {
        balance -= cost;
        inventoryAdd(item);
    } else if(!read){
        tmp = cost - balance;
        myAlertOn(text='У Вас не хватает денег!!!', text2=tmp, btnText='ok')
        read = true;
    } 
    updateBalance();
    saveBalance();
}

function myAlertClose() {
    let myAlertWrap = document.querySelector('.myAlertWrap');
    let myAlert = document.querySelector('.myAlert');
    myAlertWrap.style.opacity = '0';
    myAlertWrap.style.visibility = 'hidden';
    myAlert.style.opacity = '0';
    myAlert.style.visibility = 'hidden';
}

function clearLS() {
    localStorage.clear();
    location.reload();
}

// MY ALERT JS \\


loadBalance();
updateBalance();
