// var energy = 0;
// var damage = 1;
// var damage_cost = 10;
// var damage_add = 1;
// var energy_cost = 30;
// var energy_add = 2;
// var energy_plus = 2;
//var number = 0;
var all_hp = 10;
var hp = 10;

var energy = localStorage.getItem('energy') || 0;
var damage = localStorage.getItem('damage') || 1;
var damage_cost = localStorage.getItem('damage_cost') || 10;
var damage_add = localStorage.getItem('damage_add') || 1;
var energy_cost = localStorage.getItem('energy_cost') || 30;
var energy_add = localStorage.getItem('energy_add') || 2;
var energy_plus = localStorage.getItem('energy_plus') || 2;
var number = localStorage.getItem('number') || 0;

// var levels = new Array('vasa', 'chair');
// // images = new Map()
// // images.set("vasa", "img/clicker/vasa.jpg")
// // images.set("chair", "img/clicker/chair.jpg")
// var images = new Map([['vasa', 'img/clicker/vasa.jpg'], ['chair', 'img/clicker/chair.jpg']]);
// var levels_prop = new Map([['vasa', '10'], ['chair', '30']]);
// var level_name = levels[number];
let props = [
    {
        image: "img/clicker/vasa.jpg",
        hp: 10,
    },
    {
        image: "img/clicker/chair.jpg",
        hp: 30,
    },
    {
        image: "img/clicker/cupboard.png",
        hp: 200,
    },
    {
        image: "img/clicker/table.jpg",
        hp: 500,
    },
    {
        image: "img/clicker/computer.jpg",
        hp: 1000,
    },
    {
        image: "img/clicker/tree.jpg",
        hp: 1500,
    },
    {
        image: "img/clicker/car.png",
        hp: 2000,
    },
    {
        image: "img/clicker/tank.jpg",
        hp: 5000,
    },
    {
        image: "img/clicker/fighter.jpg",
        hp: 10000,
    },
    {
        image: "img/clicker/house.jpg",
        hp: 12000,
    },
    {
        image: "img/clicker/rocket.png",
        hp: 20000,
    },
    {
        image: "img/clicker/ufo.jpg",
        hp: 35000,
    },
    {
        image: "img/clicker/earth.jpg",
        hp: 100000,
    },
    {
        image: "img/clicker/sun.jpg",
        hp: 500000,
    },
    {
        image: "img/clicker/galaxy.jpg",
        hp: 1000000,
    },
    {
        image: "img/clicker/win.jpg",
        hp: 0,
    }
]
function init() {
    document.getElementById("foto").src = props[number].image;
    if (props[number].image == 'img/clicker/win.jpg') {
        damage = 0;
        energy_plus = 0;
        document.getElementById("hp").innerHTML = "Вы прошли игру!";
    } else {
        all_hp = props[number].hp;
        hp = all_hp;
        document.getElementById("hp").innerHTML = hp+"/"+all_hp;
        document.getElementById("energy").innerHTML = energy;
        document.getElementById("damage_count").innerHTML = damage;
        document.getElementById("energy_count").innerHTML = energy_plus;   
    }
}

function func_click() {
    if (props[number].image !== 'img/clicker/win.jpg') {
        energy++;
        hp -= damage;
        document.getElementById("energy").innerHTML = energy;
        document.getElementById("hp").innerHTML = hp+"/"+all_hp;
        if (hp <= 0) {
            number++;
            init()
        //document.getElementById("hp").innerHTML = hp+"000/"+all_hp;
        }
    }
}

function upgrade_damage() {
    if (energy >= damage_cost) { 
        damage++;
        energy -= damage_cost;
        damage_cost += 5;
        if (damage_cost >= 500) damage_add = 3;
        document.getElementById("damage_count").innerHTML = damage;
        document.getElementById("energy").innerHTML = energy;
        document.getElementById("damage_count_button").value = "Upgrade damage +" + damage_add + " ("+damage_cost+" energy)";
    }
}

function upgrade_energy() {
    if (energy >= energy_cost) {
        energy_plus++;
        energy -= energy_cost;
        energy_cost += 10;
        if (energy_cost >= 500) energy_add = 4;
        document.getElementById("energy").innerHTML = energy;
        document.getElementById("energy_count").innerHTML = energy_plus;
        document.getElementById("energy_count_button").value = "Upgrade energy +" + energy_add + " ("+energy_cost+" energy)";
    }
}

// function secret() {
//     pass = prompt("Password: ");
//     if (pass == '1209')
//         energy = prompt("What energy you need?");
//         damage = prompt("What damage you need?");
// }

function saveProgress() {
    localStorage.setItem('energy', energy);
    localStorage.setItem('damage', damage);
    localStorage.setItem('damage_cost', damage_cost);
    localStorage.setItem('damage_add', damage_add);
    localStorage.setItem('energy_cost', energy_cost);
    localStorage.setItem('energy_add', energy_add);
    localStorage.setItem('energy_plus', energy_plus);
    localStorage.setItem('number', number);
}

function resetProgress() {
    localStorage.clear();
}
