function projectsArchitect(input){
    let name = input[0];
    let numberProjects = Number(input[1]);
    let hours = numberProjects * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${numberProjects} project/s.`);
}
projectsArchitect(["George", "9"])

function petShop(input){
    let dogFood = 2.50;
    let catFood = 4;
    let sum = (dogFood * Number(input[0])) + (catFood * Number(input[1]));
    console.log(`${sum} lv.`);
}
petShop(["13", "9"])

function yardPrice(input){
    let kvmyard = Number(input[0]);
    let onekvcm = 7.61;
    let discount = 0.18;
    let priceAllYard = kvmyard * onekvcm;
    let finalPriceDiscount = discount * priceAllYard;
    let priceSum = priceAllYard - finalPriceDiscount; 
    console.log(`The final price is: ${priceSum} lv.`);
    console.log(`The discount is: ${finalPriceDiscount} lv.`);
}
yardPrice(["550"]);

function convertor(input){
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);                 
  }

function radionsToDegrees(input){
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees);
}
radionsToDegrees(["3.1416"])

function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let termDeeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let yearInterestRate = depositAmount + (termDeeposit * ((depositAmount * (annualInterestRate/100))/12));
    console.log(yearInterestRate);
}
depositCalculator(["200", "3", "5.7"])

function mandatoryLiterature(input){
    let numberOfPajes = Number(input[0]);
    let pajesforHour = Number(input[1]);
    let days = Number(input[2]);
    let sumHoursReading = numberOfPajes / pajesforHour;
    let hoursForReading = sumHoursReading / days
    console.log(hoursForReading); 
}
mandatoryLiterature(["212", "20", "2"])

function suppliesForSchool(input){
    let pencils = 5.80;
    let markers = 7.20
    let cleaner = 1.20

    let pencilStack = Number(input[0]);
    let markerStack = Number(input[1]);
    let cleanerLiters = Number(input[2]);
    let discount = Number(input[3])/100;
    
    let pricePencilStack = pencilStack * pencils;
    let priceMarkerStack = markerStack * markers;
    let priceCleaner = cleanerLiters * cleaner;
    let sumSupplies = pricePencilStack + priceMarkerStack +priceCleaner;
    let totallPriceDiscount = sumSupplies - (sumSupplies * discount);

    console.log(totallPriceDiscount);
}
suppliesForSchool(["2", "3", "4", "25"])

function repainting(input){
    let protectiveSheet = 1.5;
    let paint = 14.5;
    let paintThinner = 5.0;
    let bags = 0.4;

    let neededSheets = Number(input[0]);
    let neededPaint = Number(input[1]);
    let quantityThinner = Number(input[2]);
    let hours = Number(input[3]);

    let sumSheet = (neededSheets + 2)  * protectiveSheet;
    let sumPaint = (neededPaint + (neededPaint / 10)) * paint;
    let sumThinner = quantityThinner * paintThinner;
    let sumMaterials = sumSheet + sumPaint + sumThinner + bags;
    let sumWorkers = (sumMaterials * 30/100) * hours;
    let finalPrice = sumMaterials + sumWorkers;

    console.log(sumSheet);
    console.log(sumPaint);
    console.log(sumThinner);
    console.log(sumMaterials);
    console.log(sumWorkers);
    console.log(finalPrice);
}
repainting(["5", "10", "10", "1"])

function foodDelivery(input){
    let chiken = 10.35;
    let fish = 12.40;
    let vegan = 8.15;
    let delivery = 2.5;

    let chikenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);

    let priceChickenMenu = chikenMenus * chiken;
    let priceFishMenu = fishMenus * fish;
    let priceVeganMenu = veganMenus * vegan;
    let priceSum = priceChickenMenu + priceFishMenu + priceVeganMenu;
    let priceDesurt = 20/100 * priceSum;
    let priceDelivery = priceSum + priceDesurt + delivery;

    console.log(priceDelivery);
}
foodDelivery(["2", "4", "3"])

function basketballEquipment(input){
    let yearly = Number(input[0]);

    let shoes = (60/100) * yearly;
    let kit = shoes * (80/100);
    let ball = kit / 4;
    let accecorie = ball / 5 
    let sum = shoes + kit + ball + accecorie;
    

    console.log(sum);
}
basketballEquipment(["365"])

function fishTank(input){
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percentage = Number(input[3]);
    
    let fishTankVolume = l * w * h;
    let fishTankVolumeInLiters = fishTankVolume / 1000;
    let total = fishTankVolumeInLiters - (fishTankVolumeInLiters * (percentage/100));

    console.log(total);
}