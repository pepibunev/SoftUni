function basketballEquipment(input){
    let yearly = Number(input[0]);

    let shoes = (60/100) * yearly;
    let kit = shoes * (80/100);
    let ball = kit / 4;
    let accecorie = ball / 5 
    let sum = yearly + shoes + kit + ball + accecorie;
    
    console.log(shoes);
    console.log(kit);
    console.log(ball);
    console.log(accecorie);
    console.log(sum);
}
basketballEquipment(["365"])