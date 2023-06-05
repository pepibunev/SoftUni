function printCertificate(grade, names){
    //get full name
    let fullName = getFullName(names);

    //get formatted grade
    let formatedGrade = formatGrade(grade);

    //print result
    printHeader();
    console.log(fullName);
    console.log(formatedGrade);
}

function printHeader(){
    console.log(`~~~-  {@} -~~~`);
    console.log(`~- Certificate -~`);
    console.log(`~~~-  ~---~ -~~~`);
}

function getFullName(names){
    return `${names[0]} ${names[1]}`;
}

function formatGrade(grade){
    let gradeAnotation = '';
    if (grade < 3){
        gradeAnotation = 'Fail';
    }else if ( grade < 3.5){
        gradeAnotation = 'Poor';
    }else if (grade < 4.5){
        gradeAnotation = 'Good';
    }else if (grade < 5.5){
        gradeAnotation = 'Very good';
    }else {
        gradeAnotation = 'Excellent';
    }
    
    if ( gradeAnotation == 'Fail'){
        return `${gradeAnotation} (2)`;
    }else{
        return `${gradeAnotation} (${grade.toFixed(2)})`;
    }
}

printCertificate(5.25, ['Peter', 'Carter'])