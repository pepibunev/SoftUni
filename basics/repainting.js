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