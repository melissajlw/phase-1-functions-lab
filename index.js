// Code your solution in this file!

// Function distanceFromHqInBlocks() returns a distance in blocks
function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

// Function distanceFromHqInFeet() returns a distance in feet
function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
}

// Function distanceTravelledInFeet() returns the distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return 264 * (start - destination);
    } else {
        return 264 * (destination - start);
    }
}

// Function calculatesFarePrice(start, destination) gives customers a free sample
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if ((distance > 400) && (distance < 2000)) {
        return ((distance - 400) * 0.02);
    } else if (distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

