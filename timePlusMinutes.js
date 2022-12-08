function timePlusMinutes(input){
let hours= Number(input[0]);
let minutes=Number(input[1]);
let totalTime= hours*60 + minutes+ 15;
let hours1=Math.floor(totalTime/60);
let minutes1= totalTime % 60;
if (hours1 >= 24) {
    hours1-= 24;
}

if (minutes1 < 10) {
    console.log(`${hours1}:0${minutes1}`);
} else {
    console.log(`${hours1}:${minutes1}`);
}
    
}

timePlusMinutes(["1", "46"])
// //Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. 
// Резултатът да се отпечата във формат часове:минути. 
// Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. 
// Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. 