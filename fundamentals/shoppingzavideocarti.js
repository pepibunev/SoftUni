function shopping(input){
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]) * 250;
    let cpuPrice = Number(input[2]) * videoCardCount * 0.35;
    let ramPrice = Number(input[3]) * videoCardCount * 0.1;
    
    
    let allSum = videoCardCount + cpuPrice + ramPrice;

    if (videoCardCount > cpuPrice){
        let discount = allSum * 0.15;
        allSum = allSum - discount;   
    } 
    if (budget >= allSum){
        let moneyLeft = budget - allSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else {
        moneyLeft = allSum - budget;
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`)
    }

}
shopping(["900","2","1","3"])
shopping(["920.45","3","1","1"])