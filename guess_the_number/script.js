let randomNumber
let userGuesses = []
let remainingGuesses = 10

function startGame(){

    randomNumber = Math.floor(Math.random() * 100) + 1
    userGuesses = []
    remainingGuesses = 5

    document.getElementById('result').textContent = ''
    document.getElementById('guesses').textContent = ''
    document.getElementById('remainingGuesses').style.display = 'none'
    document.getElementById('feedback').textContent = ''
    document.getElementById('submit').disabled = true
    document.getElementById('playAgain').style.display = 'none'
}

document.getElementById('userGuess').addEventListener('input', () => {
    const userGuess = document.getElementById('userGuess').value

    if(userGuess !== ''){
        document.getElementById('submit').disabled = false
    } else {
        document.getElementById('submit').disabled = true
    }
})

document.getElementById('submit').addEventListener('click', () => {

    const userGuess = parseInt(document.getElementById('userGuess').value)

    if(isNaN(userGuess || userGuess < 1 || userGuess > 100)){
        alert('please enter a number between 1 and 100')
        return;
    }

    document.getElementById('userGuess').value = ''

    userGuesses.push(userGuess);
    remainingGuesses--;

    document.getElementById('guesses').textContent = `Your guesses: ${userGuesses.join(', ')}`
    document.getElementById('remainingGuesses').textContent = `Remaining guesses: ${remainingGuesses}`
    document.getElementById('remainingGuesses').style.display = 'block'

    if (userGuess === randomNumber) {

        document.getElementById('result').textContent = "🎉 Congrats, you win!"
        document.getElementById('result').classList.remove('congrats-animation');
        document.getElementById('submit').disabled = true
        document.getElementById('feedback').textContent = ''
        document.getElementById('playAgain').style.display = 'block'
        document.getElementById('remainingGuesses').textContent = ''
        document.getElementById('guesses').textContent = ''
        document.querySelector('h1').textContent = ''
        document.querySelector('p').textContent = ''
        document.getElementById('userGuess').style.display = 'none'
        document.getElementById('submit').style.display = 'none'

    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = "Number is high"
    } else {
        document.getElementById('feedback').textContent = "Number is low"
    }

    if (remainingGuesses === 0 && userGuess !== randomNumber){
        document.getElementById('result').textContent = "😞 Oops, you lose"
        document.getElementById('submit').disabled = true
        document.getElementById('playAgain').style.display = "block"
        document.getElementById('remainingGuesses').textContent = ''
        document.getElementById('guesses').textContent = ''
        document.getElementById('feedback').textContent = ""
        document.querySelector('h1').textContent = ''
        document.querySelector('p').textContent = ''
        document.getElementById('userGuess').style.display = 'none'
        document.getElementById('submit').style.display = 'none'
    }
})

document.getElementById('playAgain').addEventListener('click', () => {
    startGame()
    document.getElementById('playAgain').style.display = 'none'
})

startGame()