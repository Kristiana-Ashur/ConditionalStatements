function fruitShop(input) {
    let fruit = (input[0])
    let day = (input[1]);
    let quantity = Number(input[2]);
 
    let price = 0;
 
    switch (day) {
        case "Monday": case "Tuesday": case "Wednesday": case "Thursday": case "Friday":
            switch (fruit) {
                case "banana": price = quantity * 2.50; break;
                case "apple": price = quantity * 1.20; break;
                case "orange": price = quantity * 0.85; break;
                case "grapefruit": price = quantity * 1.45; break;
                case "kiwi": price = quantity * 2.70; break;
                case "pineapple": price = quantity * 5.50; break;
                case "grapes": price = quantity * 3.85; break;
                default: console.log("error"); return;
            } break;
        case "Saturday": case "Sunday":
            switch (fruit) {
                case "banana": price = quantity * 2.70; break;
                case "apple": price = quantity * 1.25; break;
                case "orange": price = quantity * 0.90; break;
                case "grapefruit": price = quantity * 1.60; break;
                case "kiwi": price = quantity * 3; break;
                case "pineapple": price = quantity * 5.60; break;
                case "grapes": price = quantity * 4.20; break;
                default: console.log("error"); return;
            } break;
        default: console.log("error"); return;
    }
    console.log(price.toFixed(2));
}
fruitShop(["kiwi","Sunday","7"])


// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
// Събота и неделя магазинът работи на по-високи цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
// Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
// ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и 
// количество (число) и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен 
// с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 
