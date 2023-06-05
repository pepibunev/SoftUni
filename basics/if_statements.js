function evenOrOdd(input){
    let num = Number(input[0]);
    if (num % 2 == 0){
        console.log("even");
    } else {
        console.log("odd");
    }
}
evenOrOdd(["2"])

function passwordGuesser(input){
    let password = input[0];
    if (password === `s3cr3t!P@ssw0rd`){
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
passwordGuesser(["gei"])

function number(input){
    let num = Number(input[0]);
    if (num < 100){
        console.log(`Less than 100`);
    } else if (num <= 200){
        console.log(`Between 100 and 200`);
    }
    else {
        console.log("Greater than 200");
    }
    
}
number(["210"])

function speedInfo(input){
    let num = Number(input[0]);
    if (num <= 10){
        console.log("slow");
    } else if (num <= 50){
        console.log("avarage");
    } else if (num <= 150){
        console.log("fast");
    } else if (num <= 1000){
        console.log("ultra fast");
    } else {
        console.log("etremely fast");
    }
}
speedInfo(["1111"])

function areaInfo(input){
    let figure = input[0];
    let str1 = Number(input[1]);
    let str2 = Number(input[2]);
    if (figure === "square"){
        console.log((str1 * str1).toFixed(3))
    } else if (figure === "rectangle") {
        console.log((str1 * str2).toFixed(3))
    } else if (figure === "circle") {
        console.log((Math.PI * (str1 * str1)).toFixed(3))
    } else if (figure === "triangle") {
        console.log(((str1 * str2)/2).toFixed(3))
    }
}

// Excercize

function sumSeconds(input){
    let timeFirst = Number(input[0]);
    let timeSeconds = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSeconds + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35", "45", "44"])

function bonusPoints(input){
    let points = Number(input[0]);
    let bonus = 0.0;

    if (points <= 100){
        bonus = 5
    } else if (points > 1000){
        bonus = points * 10/100;
    } else {
        bonus = points * 20/100;
    }
    if (points % 2 == 0){
        bonus += 1;
    } else if (points % 10 == 5){
        bonus += 2;
    }

    console.log(bonus);
    console.log(points + bonus);
}
bonusPoints(["175"])

function time(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMin = hours * 60 + minutes;
        timeInMin = timeInMin + 15;

    let h = Math.floor(timeInMin / 60);
    let m = timeInMin % 60;

    if (h === 24){
        h = 0;
    }
    if (m < 10){
        console.log(`${h}:0${m}`);
    }   else    {
        console.log(`${h}:${m}`);
    }
}
time(["1","46"])

function toyShop(input){
    let price  = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let money = puzzleCount * 2.60 + talkingDollCount * 3 + teddyBearCount * 4.10 + minionCount * 8.20 + truckCount * 2;
    let toyCount = puzzleCount + talkingDollCount + teddyBearCount + minionCount +truckCount;

    if (toyCount >= 50){
        money = (money * 0.75);
    }
    money = money * 0.90;

    let diff = Math.abs(price - money);
     
    if (money >= price){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    }   else    {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
    
}
toyShop(["40.8","20","25","30","50","10"])
toyShop(["320", "8", "2", "5", "5", "1"])

function GodzillaVsKong(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decorSum = budget * 0.1;
    let clothingSum = 0.0;

    if (statists > 150){
        clothingSum = (statists * clothingPrice) * 0.9;
    } else {
        clothingSum = statists * clothingPrice;
    }

    let movieSum = decorSum + clothingSum;
    let moneyLeft = Math.abs(movieSum - budget);
    if (movieSum > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`)
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
}
GodzillaVsKong(["20000","120","55.5"])
GodzillaVsKong(["15437.62","186","57.99"])

function worldSwimmingRecord(input){
    let currentRecord = Number(input[0]);
    let distanceInM = Number(input[1]);
    let swimmingTimeForOneM = Number(input[2]);

    let time = distanceInM * swimmingTimeForOneM;
    let slowTime = Math.floor(distanceInM / 15);
    time = time + (slowTime * 12.5);

    if( time < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    }
    else {
        let diff = time - currentRecord;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}
worldSwimmingRecord( ["10464", "1500", "20"])

function shopping(input){
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]) * 250;
    let cpuCount = (35/100 * videoCardCount) * Number(input[2]);
    let ramCount = (10/100 * videoCardCount) * Number(input[3]);

    let allSum = videoCardCount + cpuCount + ramCount;

    if (videoCardCount > cpuCount){
        allSum = allSum * (85/100);
        
    } else if (budget >= allSum){
        let moneyLeft = Math.abs(allSum - budget);
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`)
    }

}
shopping(["900","2","1","3"])
shopping(["920.45","3","1","1"])

function lunchBreak([show, showDuration, lunchBreakDuration]){
    const lunchBreakTime = lunchBreakDuration * 1/8;
    const chillTime = lunchBreakDuration * 1/4;
    const timeLeft = lunchBreakDuration - lunchBreakTime - chillTime;
    const freeTime = Math.ceil(Math.abs(timeLeft - showDuration));

    if (showDuration <= timeLeft){
        console.log(`You have enough time to watch ${show} and left with ${freeTime} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${show}, you need ${freeTime} more minutes.`)
    }
}
lunchBreak(["Game of Thrones","0","57"])
lunchBreak(["Teen Wolf","48","60"])