function worldSwimmRec(input) {
 
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);
 
    let distancedNeeded = distanceInMeters * timeInSeconds;
    let every15Km = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = distancedNeeded + every15Km;
 
    if (recordInSeconds <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}
worldSwimmRec(["10464","1500","20"]);

// Иван трябва да преплува 1500 м.:  1500 * 20 = 30000 сек.
// На всеки 15 м. към времето му се добавят 12.5 сек.: 
// 1500 / 15 = 100 * 12.5 = 1250 сек.
// Общо време: 30000 + 1250 = 31250 сек.
// 10464 < 31250
// Времето, което не му е стигнало за да подобри рекорда: 
// 31250 – 10464 = 20786 сек.

