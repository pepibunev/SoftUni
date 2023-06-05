function formatGrade(grade){
    let gradeAnotation = '';
    if (grade < 3){
        gradeAnotation = 'Fail';
    }else if ( grade < 3.5){
        gradeAnotation = 'Poor';
    }else if (grade < 4.5){
        gradeAnotation = 'Good';
    }else if (grade < 5.5){
        gradeAnotation = 'Very good';
    }else {
        gradeAnotation = 'Excellent';
    }
    
    if ( gradeAnotation == 'Fail'){
        console.log(`Fail (2)`)
    }else{
    console.log(`${gradeAnotation} (${grade.toFixed(2)})`);
    }
}

function mathPower(number, power){
    //console.log(Math.pow(number, power));
    console.log(number ** power);
}

function powerOf(a, b){
    let result = a ** b;
    
    return result;  
}
let returnedValue = powerOf(2, 5);

console.log('after function call')
console.log(`Returned value = ` + returnedValue);

//return boolean
function pass(grade){
    return grade >= 3;
}
if (pass (2.9)){
    console.log('Student passed the exam')
} else {
    console.log('Student didn\'t pass the exam')
}

function repeatString(text, count){
    let result = '';

    for (let i = 0; i < count; i++){
        result += text;
    }

    return result;
    
}
let repeateString = repeatString(['abc', 3]);
console.log(repeateString);

function orders(product, quantity){
    let sum = 0;
    let priceOfProduct = 0;

    switch(product){
        case 'coffee':
        priceOfProduct = 1.50;
        sum = priceOfProduct * quantity;  
        break;

        case 'water':
        priceOfProduct = 1.00;
        sum = priceOfProduct * quantity;  
        break;

        case 'coke':
        priceOfProduct = 1.40;
        sum = priceOfProduct * quantity;  
        break;

        case 'snacks':
        priceOfProduct = 2.00
        sum = priceOfProduct * quantity;  
        break;
    
    }
    console.log(sum.toFixed(2))
}
orders('water', 5);

//function expression 
// let double = function (a) {
//  return a * 2;
//}

//arrow function with body
// let double = (a) => {
// return a * 2;
// }

//arrow function with body
//let double = a => a * 2;

function calculation(num1, num2, operation){
    let add = (a,b) => a + b;
    let subtract = (a,b) => a - b;
    let multiply = (a,b) => a * b;
    let divide = (a,b) => a / b;

    let objOperation = {
        add , 
        subtract, 
        multiply, 
        divide
    };

    console.log(objOperation[operation](num1,num2))
}
calculation(5,5,`multiply`)

function signCheck (num1, num2, num3){
    let result = "";

    if (num1 * num2 * num3 >= 0) {
        result = "Positive";
    } else {
        result = "Negative";
    }

    console.log(result);

}
signCheck(-5, -12, 15);

