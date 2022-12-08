function lunchBreak(input){
let nameOfSerial= String(input[0]);
let oneEpisode=Number(input[1]);
let timeBreak= Number(input[2]);
let timeForLunch= (1/8)*timeBreak;
let timeForRest= (1/4)*timeBreak;
let timeForWatch=timeBreak-timeForLunch-timeForRest;
if(timeForWatch>=timeBreak) {
let timeAfter=timeForWatch-oneEpisode;
console.log(`You have enough time to watch ${nameOfSerial} and left with ${Math.ceil(timeAfter)} minutes free time.`)
} else {
let needTime= oneEpisode-timeForWatch;
console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${Math.ceil(needTime)} more minutes.`)
}
}

lunchBreak(["Game of Thrones","60","96"])
