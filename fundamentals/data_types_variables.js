function echoType(word){

    console.log(typeof word);
    
    if (typeof word == 'string' || typeof word == 'number'){
        console.log(word);
    }else {
        console.log('Parameter is not suitable for printing')
    }
}
echoType('Hello, JavaScript!');

function concatenateNames(name, surname, del){
    console.log(`${name}${del}${surname}`)
}
concatenateNames('John', 'Smith', '->')

function rightyPlace(str, char, result){
    let res = str.replace('_',char);
    let output = res === result? 'Matched': 'Not Matched';
    console.log(output);

    // if (res === result){
    //     console.log('Matched')
    // }else{
    //     console.log('Not Matched')
    // }
}
rightyPlace('Str_ng', 'I', 'Strong');

function integerAndFloat(num1, num2, num3){

    sum = num1 + num2 + num3;
    
    sum % 1 === 0 ? sum += ' - Integer': sum += ' - Float';
    console.log(sum);
}
integerAndFloat(9, 100, 1.1);

 function amazingNumbers(number){
    number = number.toString();
    let sum = 0;

    for (let i = 0; i < number.length; i++){
        sum += Number(number[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${number} Amazing? True`: `${number} Amazing? False`);
 }
 amazingNumbers(1233);

 function gramophone(band, album, song){
    time = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(time/2.5);
    console.log(`The plate was rotated ${rotations} times.`);
 }
 gramophone('Black Sabbath', 'Paranoid', 'War Pigs')

 function requiredReading(pagesNumber, readPages, deadline){
    totaltime = pagesNumber / readPages;
    requiredTime = totaltime / deadline;

    console.log(requiredTime)

 }
 requiredReading(212, 20, 2);

 function centuriesToMinutes(centuries){
    years = centuries * 100;
    days = Math.trunc(years * 365.2422);
    hours = 24 * days;
    minutes = 60 * hours;

    console.log(`${centuries} centuries = ${years} `+`years = ${days} `+`days = ${hours} `+`hours = ${minutes} minutes` );
 }
 centuriesToMinutes(1);

 function specialNumbers(num){
    let sum = 0;
    let result ;
    let digits ;
    for (let i = 1; i <= num; i++) {
        digits = i.toString();
        for (let j = 0; j < digits.length; j++) {
            sum += Number(digits[j]);
        }
        result =
            sum === 5 ||
            sum === 7 ||
            sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
 }
 specialNumbers();

 function triplesofLatinLetters(number){
    
        for(let i = 0; i < number; i++){
            let firstLetter = String.fromCharCode(i + 97);
            for(let j = 0; j < number; j++){
                let secondLetter = String.fromCharCode(j + 97);
                for(let k = 0; k < number; k++){
                    let thirdLetter = String.fromCharCode(k + 97);
                    console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
                }
            }
        }
}
 triplesofLatinLetters(3);