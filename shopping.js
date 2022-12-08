function shopping(input){
let Onevideocard= 250;
let buget= Number(input[0]);
let numberOfVideoCards= Number(input[1]);
let numberOfProcesors= Number(input[2]);
let numberOfRam= Number(input[3]);
let priceForVideoCard= numberOfVideoCards*Onevideocard;
let priceForOneProcesor= 0.35*priceForVideoCard;
let priceForAllProcesors= numberOfProcesors*priceForOneProcesor;
let priceForOneRam= 0.1*priceForVideoCard;
let priceForAllRam= numberOfRam*priceForOneRam;
let totalPrice= priceForVideoCard+priceForAllProcesors+priceForAllRam;

if(numberOfVideoCards>numberOfProcesors){
    totalPrice= totalPrice-totalPrice*0.15;
}
let diffrence= Math.abs(buget-totalPrice);

if(buget>=totalPrice){
    console.log(`You have ${diffrence.toFixed(2)} leva left!`);
} else if(buget<totalPrice){
    console.log(`Not enough money! You need ${diffrence.toFixed(2)} leva more!`);
}
}

shopping(["920.45","3","1","1"])



