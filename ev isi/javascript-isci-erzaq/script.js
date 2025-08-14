var h = Number(prompt('enter how many hours did you work'));
var salary = h * 3;
const productOne = ['bread', 'water', 'oil']; //10
const productTwo = ['onion', 'milk', 'egg']; //20
const productThree = ['meat', 'cola', 'fruits', 'fish']; //40
const productFour = [productOne + productTwo + productThree]; //70
const productFive = productTwo + productThree //120

console.log(`${salary} $ is your salary`)

// if(salary>10 && salary<20){
//     console.log(`You can buy: ${productOne}`)
// }else if(salary>=20 && salary<40){
//     console.log(`You can buy: ${productTwo}`)
// }else if(salary>=40 && salary<70){
//     console.log(`You can buy: ${productThree}`)
// }else if(salary>=70 && salary<120){
//     console.log(`You can buy: ${productFour}`)
// }else if(salary>=120){
//     console.log(`You can buy: ${productFive}`)
// }else{
//     console.log("not enough money")
// }


switch (true) {
    case (salary > 10 && salary < 20):
        console.log(`You can buy: ${productOne}`);
        break;
    case (salary >= 20 && salary < 40):
        console.log(`You can buy: ${productTwo}`);
        break;
    case (salary >= 40 && salary < 70):
        console.log(`You can buy: ${productThree}`);
        break;
    case (salary >= 70 && salary < 120):
        console.log(`You can buy: ${productFour}`)
        break;
    case (salary >= 120):
        console.log(`You can buy: ${productFive}`);
        break;
    default:
        console.log("not enough money");
}