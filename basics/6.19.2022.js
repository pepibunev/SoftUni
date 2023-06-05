function newHouse(input){
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;
    switch(type){
        case "Roses": 
            sum = count * 5;
            if (count > 80){
                sum = sum * 0.90;
            }
            break;
        case "Dahlias":
            sum = count *3.80;
            if (count > 90){
                sum = sum * 0.85;
            }
            break;
        case "Tulips": 
            sum = count * 2.80;
            if (count > 80){
                sum = sum *0.85
            }
            break;
        case "Narcissus": 
            sum = count * 3;
            if (count < 120){
                sum = sum * 1.15;
            }
            break;
        case "Gladiolus:": 
            sum = sum * 2.50;
            if (count <80){
                sum = sum * 1.20;
            }
            break;
    }

    let diff = Math.abs(budget - sum);
    if (sum > budget){
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }   else{
        console.log(`Hey, you have a great garden with ${count} ${type} and ${sum.toFixed(2)} leva left.`);
        
    }

    console.log(sum)
}
newHouse(["Roses", "55", "250"])


function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let countFisherman = Number(input[2]);
    
    let boatPrice = 0;

    switch(season){
        case "Spring":
            boatPrice = 3000;
            break;
        case "Summer": 
        case "Autumn": 
            boatPrice = 4200;
            break;
        case "Winter": 
            boatPrice = 2600;
            break;
    }

    if (countFisherman <= 6){
        boatPrice = boatPrice * 0.90;
    }   else if (countFisherman >= 7 && countFisherman <= 11){
        boatPrice = boatPrice * 0.85;
    }   else{
        boatPrice = boatPrice * 0.75;
    }

    if (countFisherman % 2 === 0 && season !== "Autumn"){
        boatPrice = boatPrice * 0.95;
    }

    let diff = Math.abs(budget - boatPrice);
    if (budget >= boatPrice){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }   else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}


function operationsBetweenNumbers(input){
    let n1 = Number(input[0]); 
    let n2 = Number(input[1]);
    let op = input[2]

    switch(op){
       case "-": 
            let res = n1 + n2;
            if (res % 2 == 0 ) {
                console.log(`${n1} ${op} ${n2} = ${res} - even `);
            } else {
                console.log(`${n1} ${op} ${n2} = ${res} - odd `);
            }
            break;
       case "+": 
                res = n1 - n2;
            if (res % 2 == 0 ) {
                console.log(`${n1} ${op} ${n2} = ${res} - even `);
            } else {
                console.log(`${n1} ${op} ${n2} = ${res} - odd `);
            }
            break;
       case "/": 
                res = n1 / n2;
            if ( 2 == 0 ) {
                console.log(`Cannot divide ${n1} by 0`);
            } else {
                res = n1 / n2
                console.log(`${n1} ${op} ${n2} = ${res}`);
            }
            break;
       case "%": 
                res = n1 % n2;
            if (res % 2 == 0 ) {
                console.log(`${n1} ${op} ${n2} = ${res} - even `);
            } else {
                console.log(`${n1} ${op} ${n2} = ${res} - odd `);
            }
            break; 
    }

    
}

