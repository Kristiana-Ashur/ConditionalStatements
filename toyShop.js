function toyShop(input) {
    
    let puzzle = 2.6;
    let doll = 3;
    let teddyBear = 4.10;
    let minion = 8.20;
    let truck = 2;
 
    let holiday = Number(input[0]);
    let numberPuzzle = Number(input[1]);
    let numberDoll = Number(input[2]);
    let numberTeddyBear = Number(input[3]);
    let numberMinion = Number(input[4]);
    let numberTruck = Number(input[5]);
 
    let totalNumber = numberDoll + numberMinion + numberPuzzle + numberTeddyBear + numberTruck;
 
    let puzzlesCost = numberPuzzle * puzzle;
    let dollsCost = numberDoll * doll;
    let teddyBearsCost = numberTeddyBear * teddyBear;
    let minionsCost = numberMinion * minion;
    let trucksCost = numberTruck * truck;
 
    let totalCost = puzzlesCost + dollsCost + teddyBearsCost + minionsCost + trucksCost;
 
    if (totalNumber >= 50) {
        totalCost *= 0.75;
        // totalCost -= totalCost * 0.25;
    }
 
    totalCost *= 0.9;
    let difference = Math.abs(totalCost - holiday)
    // totalCost -= totalCost * 0.1;
    // const difference = totalCost - holiday;
 
 
    if (totalCost >= holiday) {
    // if (difference >= 0) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
        // console.log(`Not enough money! ${-difference.toFixed(2)} lv needed.`);
    }
 
}

toyShop(["40.8","20","25","30","50","10"])
