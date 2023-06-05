function deckOfCardS(input){
    let month = 30;
    let biscuits =  Number(input[0]);
    let workersCount = Number(input[1]);
    let buiscuitsNumber = Number(input[2]);
    let discountedSum = 0;
    let allBuiscuitsFromWorkers = biscuits * workersCount;
    

    for (i = 0 ; i < month; i++){
        if (i % 3 === 0){
            discountedSum += Math.trunc(allBuiscuitsFromWorkers * 0.75);
        } else {
            discountedSum += allBuiscuitsFromWorkers;
        }
        
    }
    
    let diffPercent = (discountedSum / buiscuitsNumber) * 100;
    let diff = Math.abs(diffPercent - 100).toFixed(2);

    console.log(`You have produced ${discountedSum} biscuits for the past month.`);

    if (discountedSum > buiscuitsNumber){
        console.log(`You produce ${diff} percent more biscuits.`);
    } else {
        console.log(`You produce ${diff} percent less biscuits.`);
    }

}
deckOfCardS(['65', '12', '26000'])


function taxCalculator(arr){
    let string = arr[0];
    console.log(string); 
    let splitString = string.split('>>');
    

    console.log(splitString);

}
taxCalculator(['family 3 7210>>van 4 2345>>Duty 9 31000>>sports 4 7410']) 