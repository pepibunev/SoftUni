function birthday(input){
    rent = Number(input[0]);
    let cake = rent * 0.2;
    let drinks = cake * 0.55;
    let animator = rent / 3;

    let sum = cake + drinks + rent + animator;
    console.log(sum);

    
}
birthday(`2250`)

function catWalk(input){
    let minutesWalk = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let totalMPerDay = walksPerDay + minutesWalk;
    let totalBunred = totalMPerDay * 5;
    let halfOfTakenCalories = caloriesPerDay / 2;

    if (totalBunred >= halfOfTakenCalories){
        console.log(`${totalBunred}`)
    }   else    {
        console.log(`${totalBunred}`)
    }
}
catWalk(["30", "3", "600"])

function energyBooster(input){
    let fruit = input[0];
    let setSize = input[1];
    let orderedSet = Number(input[2]);

    let total = 0;

    switch(fruit){
        case "Wtermelon":
            if (setSize == "big"){
                total = 5 * 28.70;
            } else {
                total = 2 *56;
            }
            break;
        case "Mango":
            if (setSize == "big"){
                total = 5 * 19.60;
            } else {
                total = 2 * 36.66;
            }
            break;
        case "pineapple":
            if (setSize == "big"){
                total = 5 * 24.80;
            } else {
                total = 2 * 42.1;
            }
            break ;
        case "Rasbearry":
            if (setSize == "big"){
                total = 5 * 15.2;
            } else {
                total = 2 * 20;
            }
            break;
    }
    total *= orderedSet

    let discount = 0;
    if (total >= 400 && total <= 1000){
        discount = total * 0.15; 
    } else if (total > 1000){
        discount = total * 0.5;
    }

    total -= discount;
    console.log(total.toFixed(2) + `lv.`);
}
energyBooster(["Watermelon", "big", "4"]);

function food(input){
    let days = Number(input[0]);
    let totalPrice = Number(input[1]);

    let index = 2;
    let dog = Number(input[index]);
    index++
    let cat = Number(input[index]);
    index++


    let eatenFood = 0;
    let biscuits = 0;
    let eatenByDog = 0;
    let eatenByCat = 0;
    for (let i = 1; i <= days; i++) {
        eatenFood += dog + cat;
        eatenByCat += cat;
        eatenByDog += dog; 

        if (i % 3 == 0){
            biscuits += 0.1 * eatenFood;
        }
    }
    console.log(`${Math.round(biscuits)}`);
    console.log(`${(eatenFood /totalF)}`)
}