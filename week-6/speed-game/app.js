const circleOne = document.querySelector('.circle1')
const circleTwo = document.querySelector('.circle2')
const circleThree = document.querySelector('.circle3')
const circleFour = document.querySelector('.circle4')

const startButton = document.querySelector('button')
const score = document.querySelector('#score')

let scoreNumber = 0
let randomHighlight

function startGame () {
  randomHighlight = Math.floor(Math.random() * 4)

  if (randomHighlight === 0) {
    circleOne.style.backgroundColor = 'green'
    setTimeout(() => {
      circleOne.style.backgroundColor = ''
    }, 1000)
  } else if (randomHighlight === 1) {
    circleTwo.style.backgroundColor = 'green'
    setTimeout(() => {
      circleTwo.style.backgroundColor = ''
    }, 1000)
  } else if (randomHighlight === 2) {
    circleThree.style.backgroundColor = 'green'
    setTimeout(() => {
      circleThree.style.backgroundColor = ''
    }, 1000)
  } else {
    circleFour.style.backgroundColor = 'green'
    setTimeout(() => {
      circleFour.style.backgroundColor = ''
    }, 1000)
  }

  console.log('game starts')
}

function loopGame () {
  setInterval(startGame, 1000)
}

function firstCircle () {
  if (randomHighlight === 0) {
    scoreNumber = scoreNumber + 1
    score.textContent = scoreNumber
  }
  console.log('first circle click')
}

function secondCircle () {
  if (randomHighlight === 1) {
    scoreNumber = scoreNumber + 1
    score.textContent = scoreNumber
  }
  console.log('second circle click')
}

function thirdCircle () {
  if (randomHighlight === 2) {
    scoreNumber = scoreNumber + 1
    score.textContent = scoreNumber
  }
  console.log('third circle click')
}

function fourthCircle () {
  if (randomHighlight === 3) {
    scoreNumber = scoreNumber + 1
    score.textContent = scoreNumber
  }
  console.log('fourth circle click')
}

circleOne.addEventListener('click', firstCircle)
circleTwo.addEventListener('click', secondCircle)
circleThree.addEventListener('click', thirdCircle)
circleFour.addEventListener('click', fourthCircle)

startButton.addEventListener('click', loopGame)
