let board = []


function play(clickedId) {
    let boardFull = true
    const playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    checkWinner()
    for (i = 0; i < 9; i++) {
        if (board[i] === undefined) {
            boardFull = false
        } 
    }
    if (boardFull === true) {
        alert('Cat!')
    }
    console.log(board)
}

let topLeft = document.getElementById('0')
let topMid = document.getElementById('1')
let topRight = document.getElementById('2')
let middleLeft = document.getElementById('3')
let middleMid = document.getElementById('4')
let middleRight = document.getElementById('5')
let botLeft = document.getElementById('6')
let botMid = document.getElementById('7')
let botRight = document.getElementById('8')

function checkWinner() {
    if (topLeft.innerText === topMid.innerText && topMid.innerText === topRight.innerText && topLeft.innerText !== undefined) {
        if (topLeft.innerText === 'X') {
            alert('Player X wins!')
        } else if (topLeft.innerText === 'O'){
            alert('Player O wins!')
        }
    } 
    if (middleLeft.innerText === middleMid.innerText && middleMid.innerText === middleRight.innerText && middleLeft.innerText !== undefined) {
        if (middleLeft.innerText === 'X') {
            alert('Player X wins!')
        } else if (middleLeft.innerText === 'O') {
            alert('Player O wins!')
        }
    }
    if (botLeft.innerText === botMid.innerText && botMid.innerText === botRight.innerText && botLeft.innerText !== undefined) {
        if (botLeft.innerText === 'X') {
            alert('Player X wins!')
        } else if (botLeft.innerText === 'O'){
            alert('Player O wins!')
        }
    }
    if (topLeft.innerText === middleLeft.innerText && middleLeft.innerText === botLeft.innerText && topLeft.innerText !== undefined) {
        if (topLeft.innerText === 'X') {
            alert('Player X wins!')
        } else if (topLeft.innerText === 'O') {
            alert('Player O wins!')
        }
    } 
    if (topMid.innerText === middleMid.innerText && middleMid.innerText === botMid.innerText && topMid.innerText !== undefined) {
        if (topMid.innerText === 'X') {
            alert ('Player X wins!')
        } else if (topMid.innerText === 'O') {
            alert('Player O wins!')
        }
    }
    if (topRight.innerText === middleRight.innerText && middleRight.innerText === botRight.innerText && topRight.innerText !== undefined) {
        if (topRight.innerText === 'X') {
            alert ('Player X wins!')
        } else if (topRight.innerText === 'O') {
            alert('Player O wins!')
        }
    }
    if (topLeft.innerText === middleMid.innerText && middleMid.innerText === botRight.innerText && topLeft !== undefined){
        if (topLeft.innerText === 'X'){
            alert ('Player X wins!')
        } else if (topLeft.innerText === 'O') {
            alert('Player O wins!')
        }
    }
    if (topRight.innerText === middleMid.innerText && middleMid.innerText === botLeft.innerText && topRight.innerText !== undefined){
        if (topRight.innerText === 'X'){
            alert ('Player X wins!')
        } else if (topRight.innerText === 'O') {
            alert('Player O wins!')
        }
    } 
}
