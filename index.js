// Code your solution in this file!
let blocks = 0
let feet = 0
let fare = 0

function distanceFromHqInBlocks(x){
    blocks = x - 42;
    return Math.abs(blocks);
}

function distanceFromHqInFeet(x) {
    distanceFromHqInBlocks(x);
    feet = Math.abs(blocks) * 264;
    return feet
}

function distanceTravelledInFeet(start, destination) {
    feet = Math.abs(start - destination)*264;
    return feet;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        fare = 0;
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        fare = (feet - 400) * .02
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        fare = 25
    }
    else {
        fare = "cannot travel that far";
    }
    return fare;
}