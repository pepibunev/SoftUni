function workout(input){
    let n = Number(input[0]);
    let m = Number(input[1]);
    let K;
    let j = 2;
    let sum = m;

    for (i = 0; i < n; i++){
        K = Number(input[j]);
        m = m + (m * (K / 100));
        sum += m;
        j++;
    }
    if (sum >= 1000){
        console.log(`You've done a great job running ${Math.ceil(sum - 1000)} morekilometers!`)

    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - sum)} more kilometers`)
    }

    
}
workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"])
workout(["4",
"100",
"30",
"50",
"60",
"80"])




