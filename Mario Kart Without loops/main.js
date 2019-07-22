// Mario Kart Editor
'use strict';

// Gloabl Variables
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;
let numRedShell = 0;
let numSpinyShell = 0;
let numBobOmb = 0;

// Event Listeners
document.getElementById('1Time').addEventListener('click', SpinOne)
document.getElementById('10Times').addEventListener('click', SpinTen)
document.getElementById('100Times').addEventListener('click', SpinOneHundred)

// Event Functions
function SpinOne() {
    let SpinValue = Math.random();

    if (SpinValue < 0.25) {
        console.log('Banana');
        numBanana ++;
        document.getElementById('Banana').innerHTML = numBanana;
        document.getElementById('outputHere').innerHTML += '<img src="images/Banana.png">';
    } else if (SpinValue < 0.4) {
        console.log('Green Shell');
        numGreenShell ++;
        document.getElementById('GreenShell').innerHTML = numGreenShell;
        document.getElementById('outputHere').innerHTML += '<img src="images/Green_Shell.png">';
    } else if (SpinValue < 0.5) {
        console.log('Star')
        numStar ++;
        document.getElementById('Star').innerHTML = numStar;
        document.getElementById('outputHere').innerHTML += '<img src="images/star.png">';
    } else if (SpinValue < 0.55) {
        console.log('Golden Mushroom')
        numGoldenMushroom ++;
        document.getElementById('GoldenMushroom').innerHTML = numGoldenMushroom;
        document.getElementById('outputHere').innerHTML += '<img src="images/Golden_Mushroom.png">';
    } else if (SpinValue < 0.65) {
        console.log('Red Shell')
        numRedShell ++;
        document.getElementById('RedShell').innerHTML = numRedShell;
        document.getElementById('outputHere').innerHTML += '<img src="images/Red_Shell.png">';
    } else if (SpinValue < 0.8) {
        console.log('Spiny Shell')
        numSpinyShell ++;
        document.getElementById('SpinyShell').innerHTML = numSpinyShell;
        document.getElementById('outputHere').innerHTML += '<img src="images/Spiny_Shell.png">';
    } else if (SpinValue < 0.95) {
        console.log('BobOmb')
        numBobOmb ++;
        document.getElementById('BobOmb').innerHTML = numBobOmb;
        document.getElementById('outputHere').innerHTML += '<img src="images/Bob_Bomb.png">';
    } else {
        console.log('Bullet Bill')
        numBulletBill ++;
        document.getElementById('BulletBill').innerHTML = numBulletBill;
        document.getElementById('outputHere').innerHTML += '<img src="images/Bullet_Bill.png">';
    }
}

function SpinTen() {
    // Adding Loop
    for (let num = 1; num <= 10; num++) {
        let SpinValue = Math.random();

        if (SpinValue < 0.25) {
            console.log('Banana');
            numBanana ++;
            document.getElementById('Banana').innerHTML = numBanana;
            document.getElementById('outputHere').innerHTML += '<img src="images/Banana.png">';
        } else if (SpinValue < 0.4) {
            console.log('Green Shell');
            numGreenShell ++;
            document.getElementById('GreenShell').innerHTML = numGreenShell;
            document.getElementById('outputHere').innerHTML += '<img src="images/Green_Shell.png">';
        } else if (SpinValue < 0.5) {
            console.log('Star')
            numStar ++;
            document.getElementById('Star').innerHTML = numStar;
            document.getElementById('outputHere').innerHTML += '<img src="images/star.png">';
        } else if (SpinValue < 0.55) {
            console.log('Golden Mushroom')
            numGoldenMushroom ++;
            document.getElementById('GoldenMushroom').innerHTML = numGoldenMushroom;
            document.getElementById('outputHere').innerHTML += '<img src="images/Golden_Mushroom.png">';
        } else if (SpinValue < 0.65) {
            console.log('Red Shell')
            numRedShell ++;
            document.getElementById('RedShell').innerHTML = numRedShell;
            document.getElementById('outputHere').innerHTML += '<img src="images/Red_Shell.png">';
        } else if (SpinValue < 0.8) {
            console.log('Spiny Shell')
            numSpinyShell ++;
            document.getElementById('SpinyShell').innerHTML = numSpinyShell;
            document.getElementById('outputHere').innerHTML += '<img src="images/Spiny_Shell.png">';
        } else if (SpinValue < 0.95) {
            console.log('BobOmb')
            numBobOmb ++;
            document.getElementById('BobOmb').innerHTML = numBobOmb;
            document.getElementById('outputHere').innerHTML += '<img src="images/Bob_Bomb.png">';
        } else {
            console.log('Bullet Bill')
            numBulletBill ++;
            document.getElementById('BulletBill').innerHTML = numBulletBill;
            document.getElementById('outputHere').innerHTML += '<img src="images/Bullet_Bill.png">';
        }
    }
}

function SpinOneHundred() {
    // Adding Loop
    for (let num = 1; num <= 100; num++) {
        let SpinValue = Math.random();

        if (SpinValue < 0.25) {
            console.log('Banana');
            numBanana ++;
            document.getElementById('Banana').innerHTML = numBanana;
            document.getElementById('outputHere').innerHTML += '<img src="images/Banana.png">';
        } else if (SpinValue < 0.4) {
            console.log('Green Shell');
            numGreenShell ++;
            document.getElementById('GreenShell').innerHTML = numGreenShell;
            document.getElementById('outputHere').innerHTML += '<img src="images/Green_Shell.png">';
        } else if (SpinValue < 0.5) {
            console.log('Star')
            numStar ++;
            document.getElementById('Star').innerHTML = numStar;
            document.getElementById('outputHere').innerHTML += '<img src="images/star.png">';
        } else if (SpinValue < 0.55) {
            console.log('Golden Mushroom')
            numGoldenMushroom ++;
            document.getElementById('GoldenMushroom').innerHTML = numGoldenMushroom;
            document.getElementById('outputHere').innerHTML += '<img src="images/Golden_Mushroom.png">';
        } else if (SpinValue < 0.65) {
            console.log('Red Shell')
            numRedShell ++;
            document.getElementById('RedShell').innerHTML = numRedShell;
            document.getElementById('outputHere').innerHTML += '<img src="images/Red_Shell.png">';
        } else if (SpinValue < 0.8) {
            console.log('Spiny Shell')
            numSpinyShell ++;
            document.getElementById('SpinyShell').innerHTML = numSpinyShell;
            document.getElementById('outputHere').innerHTML += '<img src="images/Spiny_Shell.png">';
        } else if (SpinValue < 0.95) {
            console.log('BobOmb')
            numBobOmb ++;
            document.getElementById('BobOmb').innerHTML = numBobOmb;
            document.getElementById('outputHere').innerHTML += '<img src="images/Bob-bomb.png">';
        } else {
            console.log('Bullet Bill')
            numBulletBill ++;
            document.getElementById('BulletBill').innerHTML = numBulletBill;
            document.getElementById('outputHere').innerHTML += '<img src="images/Bullet_Bill.png">';
        }
    }
}