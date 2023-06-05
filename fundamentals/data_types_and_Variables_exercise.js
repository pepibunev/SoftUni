function sumDigits(num){
   num = num.toString();
   sum= 0;

   for (let i = 0; i < num.length; i++) {
   sum += Number(num[i]);
    
   }
   console.log(sum);
}
sumDigits(245678)

function charToString(char1, char2, char3){
    console.log(`${char1}${char2}${char3}`)
}
charToString('a', 'b', 'c');

function townInfo(town, population, bigness){
    console.log(`Town ${town} has population of ${population} and area ${bigness} square km.`)
}
townInfo('Sofia', 1286383, 492)

function metersToKilometres(number){
    console.log((number / 1000).toFixed(2));
}
metersToKilometres(1852);

function poundsToDollars(number){
    console.log((number * 1.31).toFixed(3))
}
poundsToDollars(80)

function reversedChar(a, b, c){
    console.log(`${c} ${b} ${a}`)
}
reversedChar('A','B','C')

function lowerOrUpper(char){
    scanLetter = char === char.toUpperCase() ? 'upper-case' : 'lower-case';
    console.log(scanLetter);
}
lowerOrUpper(`L`);

function calculator(num1, operator, num2){
    calculation = eval(num1 + operator + num2);
    console.log(calculation.toFixed(2));
}
calculator(5,'+',10)

function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    totalExpenses = 0;

    for (let i = 1; i <= lostFights; i++){
        if (i % 2 ===0){
            totalExpenses += helmetPrice;
        }
        if (i % 3 === 0){
            totalExpenses += swordPrice;
        }
        if (i % 6 === 0){
            totalExpenses += shieldPrice;
        }
        if (i % 12 === 0){
            totalExpenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}
gladiatorExpenses(7,2,3,4,5)

function spiceMustFlow(startingYield){
    totalAmount = 0;
    yieldDrop = 10;
    consumedByWorkers = 26;
    day = 0;

    while (startingYield >= 100){
        totalAmount += startingYield - consumedByWorkers;
        startingYield -= yieldDrop;
        day++;
    }

    if (totalAmount >= 26){
        totalAmount -= 26;
    }

    console.log(day);
    console.log(totalAmount);
}
spiceMustFlow(111)
