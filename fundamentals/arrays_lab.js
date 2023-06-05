function sumFirstAndLastArray(arr){
    first = arr[0];
    last = arr[arr.length - 1];
    console.log(first + last);

}
sumFirstAndLastArray([20, 30, 40]);

function dayOfWeek(day){
    weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if (day >= 1 && day <= 7){
        console.log(weekDays[day-1]);
    }else{
        console.log('Invalid day!');
    }
}
dayOfWeek(3);

function reverseArray(num, inputArr){
    outputArr = [ ];
    output = '';
    for (let i = 0; i < num; i++){
        outputArr.push(inputArr[i]);
    }
    for (let i = outputArr.length -1; i >= 0; i--){
        output += `${outputArr[i]} `;
    }
    console.log(output);
}
reverseArray(3, [10, 20, 30, 40, 50]);

function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let leftIndex = arr[i];
        let rightIndex = arr.length - 1 - i;
        
        arr[i] = arr[rightIndex];
        arr[rightIndex] = leftIndex;
    }

    console.log(arr.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);

function sumEvenNumbers(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    for (let num of arr){
        if(num % 2 == 0){
            sum+=num
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6']);

function evenAndOddSubtraction(arr){
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    for (let num of arr){
        if (num % 2 == 0){
            evenSum += num;
        }else{
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);

}
evenAndOddSubtraction([1,2,3,4,5,6]);

function EqualArrays(arr1, arr2){
    let areEqual  = true;
    let sum = 0;
    let index ;
    let biggerLength ;

    if (arr1.length < arr2.length){
        biggerLength = arr2.length;
    }else {
        biggerLength = arr1.length;
    }

    for (let i = 0; i < biggerLength; i++){
        if (arr1[i] == arr2[i]){
            sum += Number(arr1[i]);
        }else if (arr1[i] !== arr2[i]){
            index = i;
            areEqual = false;
            break;
        }
    }

    if (areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }else{
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }    
}
EqualArrays(['10','20','30'], ['10','20','30'])

function condenseArrayNumber(nums){
    let condensed = [];

    for (i = 0; i < nums.lenght - 2; i++){
        condensed[i] = nums[i] + nums[i+1];
        
        if (i === nums.length - 2){
            nums = condensed;
            condensed = [];
            i = -1;
        }
    }
    console.log(nums[0]);
}
condenseArrayNumber([2,10,3]);

