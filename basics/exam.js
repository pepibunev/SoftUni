function roomPainting(input){
    let paintBoxes = Number(input[0])
    let tapeti = Number(input[1])
    let priceGloves = Number(input[2])
    let priceChetka = Number(input[3])

    let pricePaint = 21.50 * paintBoxes;
    let priceTapeti = 5.20 * tapeti;
    let numberGloves = Math.ceil((35/100) * tapeti);
    let numberChetka = Math.floor((48/100) * paintBoxes);
    let allPriceGloves = numberGloves * priceGloves;
    let allPriceChetka = numberChetka * priceChetka;
    let sumPrice = pricePaint + priceTapeti + allPriceGloves + allPriceChetka;
    let priceDeliver = (1/15) * sumPrice;

    console.log(`This delivery will cost ${priceDeliver.toFixed(2)} lv.`)
}
roomPainting(["10", "8", "2.2", "5"])

function andProccesors(input) {
    let cpuCount = Number(input[0]);
    let workersCount = Number(input[1]);
    let days = Number(input[2]);

    let workhours = workersCount * days * 8;
    let timeProcesors = Math.floor(workhours / 3);

    if (timeProcesors < cpuCount){
        let proc = cpuCount - timeProcesors;
        console.log(`Losses: -> ${(proc * 110.10).toFixed(2)} BGN`)
    } else {
        let proc = timeProcesors - cpuCount;
        console.log(`Profit: -> ${(proc * 110.10).toFixed(2)} BGN`)
    }
}
andProccesors(["500",
"8",
"20"])
andProccesors(["150",
"7",
"18"])

function catLife(breed, gender){
    let catYears = 0;
    let check = false;

    switch (breed){
    case "British Shorthair":
                    if(gender == 'm')
                    {
                        catYears = 13;
                    }
                    else if(gender == 'f')
                    {
                        catYears = 14;
                    }
                    break;
    case "Siamese":
                    if (gender == 'm')
                    {
                        catYears = 15;
                    }
                    else if (gender == 'f')
                    {
                        catYears = 16;
                    }
                    break;
    case "Persian":
                    if (gender == 'm')
                    {
                        catYears = 14;
                    }
                    else if (gender == 'f')
                    {
                        catYears = 15;
                    }
                    break;
    case "Ragdoll":
                    if (gender == 'm')
                    {
                        catYears = 16;
                    }
                    else if (gender == 'f')
                    {
                        catYears = 17;
                    }
                    break;
     case "American Shorthair":
                    if (gender == 'm')
                    {
                        catYears = 12;
                    }
                    else if (gender == 'f')
                    {
                        catYears = 13;
                    }
                    break;
    case "Siberian":
                    if (gender == 'm')
                    {
                        catYears = 11;
                    }
                    else if (gender == 'f')
                    {
                        catYears = 12;  
                    }
                    break;
    default:
        console.log(`${breed} is invalid cat!`)
            check = true;
            break;
        }

    if (check == false)
    {
        let catMonths = (catYears * 12) / 6;
        console.log(`${catMonths} cat months`)
    }
}
catLife(["Persian",
"m"])
catLife(["Siamese",
"f"])
catLife(["Siberian",
"m"])

function catFood(params) {
    let index = 0;
    let cats = Number(params[index++]);

    let small = 0;
    let big = 0;
    let giant = 0;
    let price = 0;
    for (let i = 0; i < cats; i++) {
        let cats = Number(params[index]);
        if (cats >= 100 && cats < 200) {
            small++;
            price += cats;
        } else if (cats >= 200 && cats < 300) {
            big++;
            price += cats;
        } else if (cats >= 300 && cats < 400) {
            giant++;
            price += cats;
        }
        index++;
    }
    console.log(`Group 1: ${small} cats.`);
    console.log(`Group 2: ${big} cats.`);
    console.log(`Group 3: ${giant} cats.`);
    console.log(`Price for food per day: ${((price / 1000) * 12.45).toFixed(2)} lv.`);
}
catFood(["6",
"102",
"236",
"123",
"399",
"342",
"222"])

function christmasGifts(input) {
    let age = input.shift();
    let kids = 0;
    let adults = 0;

    while (age != "Christmas") {
        age = Number(age);

        if (age <= 16) {
            kids++;
        } else {
            adults++;
        }

        age = input.shift();
    }

    let moneyForToys = kids * 5;
    let moneyForSweaters = adults * 15;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}
christmasGifts(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])

function goldMine(params) {
    let index = 0;
    let locations = Number(params[index]);
    index++;
    for (let i = 0; i < locations; i++) {
        let sumExtraction = Number(params[index++]);
        let days = Number(params[index++]);
        let total = 0;
        for (let j = 0; j < days; j++) {
            let extraction = Number(params[index]);
            total += extraction;
            index++;
        }
        let average = total / days;

        if (average >= sumExtraction) {
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        } else {
            console.log(`You need ${(sumExtraction - average).toFixed(2)} gold.`);
        }
    }
}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])