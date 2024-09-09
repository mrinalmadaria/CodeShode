// Array of words
const words = ["java", "javascript", "python", "perl", "kotlin", "swift", "ruby", "rust"];

// Getting random index
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);

// To store already guessed letters
let guessedList = [];

// For initial display
let displayWord = "";
for(let i = 0; i < selectedWord.length; i++){
    displayWord += "_ ";
}

document.getElementById("displayWord").textContent = displayWord;

function guessLetter(){
    let inputElement = document.getElementById("letter-input");

    // empty case
    if(!inputElement.value){
        alert("Empty box. Please enter a letter");
        return;
    }

    let letter = inputElement.value.toLowerCase();

    // Clear the input field
    inputElement.value = "";

    // Check if already guessed
    if(guessedList.includes(letter)){
        alert(`You have already guessed the letter "${letter}"`);
        return;
    }

    guessedList.push(letter);

    let updatedDisplay = "";
    let allLettersGuessed = true;

    for(let i = 0; i < selectedWord.length; i++){
        if(guessedList.includes(selectedWord[i])){
            updatedDisplay += selectedWord[i] + " ";
        }else{
            updatedDisplay += "_ ";
            allLettersGuessed = false;
        }
    }

    document.getElementById("displayWord").textContent = updatedDisplay;

    // Check if all letters have been guessed
    if(allLettersGuessed){
        alert("Congratulations! You've guessed the word");
    }
}