function ages(age){
    
    if (age < 0){
        console.log('out of bounds')
    }else if (age <= 2){
        console.log('baby');
    }else if ( age <= 13) {
        console.log('child');
    }else if (age <= 19){
        console.log('teenager');
    }else if (age <= 65){
        console.log('adult');
    }else if (age >= 66){
        console.log('elder');
    }
}
ages(-1);

function round(num, precision){

    if(precision > 15){
        precision = 15;
    }
    finalNumber = num.toFixed(precision);
    console.log(parseFloat(finalNumber));
}
round(3.1415926535897932384626433832795,2);1

function division(num){
    
    let outputNumber = 0;

    if (num % 10 === 0 ){
        outputNumber = 10;
    }else if (num % 7 === 0 ){
        outputNumber = 7;
    }else if (num % 6 === 0 ){
         outputNumber = 6;
    }else if (num % 3 === 0 ){
        outputNumber = 3;
    }else if (num % 2 === 0 ){
        outputNumber = 2;
    }else {
        console.log('Not divisible');
    }
    console.log(`The number is divisible by ${outputNumber}`);
}
division(4646)

function leapYear(year){

    let isLeapYear = (year % 4 === 0 && year % 100 !==0) || year % 400 === 0;
    if (isLeapYear) {
        console.log('yes');
    }else {
        console.log('no');
    }
}
leapYear(1984);

function triangleOfNumbers(number){

    for(let i = 1 ; i <= number; i++){
        let row = '';

        for (let j = 1; j <= i; j++){
            row += `${i} `;
        }
        console.log(row);
    }
}
triangleOfNumbers(15);

function multiplication(number){
    
    for(let i = 1; i <= 10; i++){
        console.log(`${number} X ${i} = ${number * i}`);
    }
}
multiplication(5)

function vacation(people, type, day){

    totalPrice = 0;
    switch(type){
        case 'Students':
            if (people >= 30){
                totalPrice = totalPrice * 0.85;
            }

            if(day === 'Friday'){
                totalPrice = people * 8.45;
            }else if(day === 'Saturday'){
                totalPrice = people * 9.8;
            }else if(day === 'Sunday'){
                totalPrice = people * 10.46;
            }
            break;
        case 'Business':
            if (people >= 100){
                people -= 10;
            }

            if(day === 'Friday'){
                totalPrice = people * 10.9;
            }else if(day === 'Saturday'){
                totalPrice = people * 15.6;
            }else if(day === 'Sunday'){
                totalPrice = people * 16;
            }
            break;
        case 'Regular':
            if (people >= 10 && people <= 20){
                totalPrice = totalPrice* 0.95;
            }
            if(day === 'Friday'){
                totalPrice = people * 15;
            }else if(day === 'Saturday'){
                totalPrice = people * 20;
            }else if(day === 'Sunday'){
                totalPrice = people * 22.5;
            }
            break;
    }
    console.log (`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");