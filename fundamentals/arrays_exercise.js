function addAndSubtract(arr){
    let newArr = [];
    let secondSum = 0;
    let firstSum = 0;

    for (let i = 0; i < arr.length; i++){
        firstSum += Number(arr[i]);

        if (arr[i] % 2 === 0){
            newArr[i] = arr[i] + i;
        }else {
            newArr[i] = arr[i] - i;
        }
        
        secondSum += Number(newArr[i]);
    }

    console.log(newArr);
    console.log(firstSum);
    console.log(secondSum);
}
addAndSubtract([5, 15, 23, 56, 35]);

function commonElements(arr1, arr2){
    let output = '';

       for (let i = 0; i < arr1.length; i++){
            for (let j = 0; j < arr2.length; j++){
                if (arr1[i] === arr2[j]){
                    output += `${arr1[i]}\n`
                }
            }
       }
       console.log(output);
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);

function mergeArrays(arr1, arr2){
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++){
        if (i % 2 ===0){
            arr3[i] = Number(arr1[i]) + Number(arr2[i])
        }else{
            arr3[i] = arr1[i]+arr2[i];
        }
    }
    console.log(arr3.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);

function arrayRotation(arr, rotation){
    for (let i = 0; i < rotation; i++){
        let num = arr.shift();
        arr.push(num);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);

function maxNumber(arr){
    let newArr = [];
    let maxInt = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]){
                maxInt = true;
            }else{
                maxInt = false;
                break;
            }
            
        }
        
        if (i === arr.length - 1){
            newArr.push(arr[i]);
        }else if (maxInt == true){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '))
}
maxNumber([1,4,3,2])

function equalSums(arr){
    let foundIndex = 'no';
    let arrLength = arr.length;

    for (let i = 0; i< arrLength; i++){
         let leftSum = 0;
         let rigthSum = 0;

         // calc left sum
         for (let l = 0; l < i; l++){
            leftSum += arr[l];
         }
         //calc left sum
         for (let r = i+1; r < arrLength; r++ ){
            rigthSum += arr[r];
         }

         if (leftSum === rigthSum){
            foundIndex = i;
         }
    }
    console.log(foundIndex);

}
equalSums([1,2,3,3])