// Code your solution in this file!
const headquarters = 42; // # = the street that headquarters is located in
const blockToFeet = 264;
const pricePerFoot = .02;
const flatFareRate = 25;

function distanceFromHqInBlocks(currentLocation) {
    return currentLocation >= headquarters ? currentLocation % headquarters : headquarters % currentLocation;
}

function distanceFromHqInFeet(currentLocation) {
    return distanceFromHqInBlocks(currentLocation) * blockToFeet;
}

function distanceTravelledInFeet(startingLocation, destination) {
    return destination >= startingLocation ? destination % startingLocation * blockToFeet : startingLocation % destination * blockToFeet;
}

function calculatesFarePrice(startingLocation, destination) {
    const distanceInFeet = distanceTravelledInFeet(startingLocation, destination);
    if (distanceInFeet <= 400) {
        return 0;
    }
    else if (distanceInFeet <= 2000) {
        return pricePerFoot * (distanceInFeet - 400);
    }
    else if (distanceInFeet <= 2500) {
        return flatFareRate;
    }
    else {
        return `cannot travel that far`;
    }
}