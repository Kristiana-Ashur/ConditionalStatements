function invalidNumber(input){
let a = Number(input[0]);
if ((a>=100)&&(a<=200)){
    console.log();
} else if(a=0){
    console.log();
} else{
    console.log("invalid");
}

}

invalidNumber(["0"])


// Дадено число е валидно, ако е в диапазона [100…200] или е 0.
//  Да се напише функция
// , която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно. 