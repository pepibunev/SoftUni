function binaryDigitCount(number, binaryDigit){
    let counter = 0;
    while (number > 0){
        let leftOver = number % 2;
        if (leftOver === binaryDigit){
            counter++;
        }
        number = Math.floor(number / 2);
    }
    console.log(counter);
}
binaryDigitCount(20, 0)