function godzillaVsKong(input){
let buget= Number(input[0]);
let numberOfExtras= Number(input[1]);
let priceForOneCloth= Number(input[2]);
let decor= (10/100)*buget;
let priceForClothes= numberOfExtras*priceForOneCloth;


if(numberOfExtras>150){
   priceForClothes= priceForClothes-priceForClothes*0.10;

}

let totalPrice= priceForClothes+decor;
let leftover=Math.abs(totalPrice-buget);

if(totalPrice>buget){
   console.log(`Not enough money!`);
   console.log(`Wingard needs ${leftover.toFixed(2)} leva more.`);
}

else if(totalPrice<=buget){
    console.log(`Action!`)
    console.log(`Wingard starts filming with ${leftover.toFixed(2)} leva left.`)
}
}

godzillaVsKong(["15437.62","186","57.99"])


// Снимките за дългоочаквания филм "Годзила срещу Конг" започват. 
// Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, дали предвидените средства са достатъчни за снимането на филма.
//  За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
// Известно е, че:
// •	Декорът за филма е на стойност 10% от бюджета. 
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

// Изход
// На конзолата трябва да се отпечатат два реда:
// •	Ако  парите за декора и дрехите са повече от бюджета:
// o	"Not enough money!"
// o	"Wingard needs {парите недостигащи за филма} leva more."
// •	Ако парите за декора и дрехите са по малко или равни на бюджета:
// o	"Action!" 
// o	"Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.
