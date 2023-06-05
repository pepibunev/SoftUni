function printCharacters(string){
    for(let characters of string){
        console.log(characters);
    }
}
printCharacters('Ashbringer')

function substring(string, firstnum, secondnum){
    let substring = string.substr(firstnum, secondnum);
    console.log(substring);

}
substring('Ashbringer', 4, 11)

function censoredWords(text, word){
    let censored;

    while (censored !== text) {
        censored = text;
        text = censored.replace(word, '*'.repeat(word.length))
    } 
    console.log(censored);

}
censoredWords('A small sectence with some words', 'small')

function countStringOccurrences(text, searchedWord){
    const splitText = text.split(' ');
    let counter = 0;
    for (const words of splitText) {
        if (words === searchedWord){
            counter++
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')