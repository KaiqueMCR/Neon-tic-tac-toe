document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.addEventListener('click', handleClick)
  })
})

function handleClick(event) {
  const square = event.target
  const position = square.id

  if (handleMove(position)) {
    let squares = document.querySelectorAll('.square')
    squares.forEach(square => {
      square.innerHTML = `<div class='${symbols[playerTime]}'></div>`
    })
  }

  updateSquare(position)
}

function updateSquare(position) {
  let square = document.getElementById(position.toString())
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div>`
}

function reset() {
  let squares = document.querySelectorAll('.square')

  squares.forEach(square => {
    square.innerHTML = ''
  })

  board = ['', '', '', '', '', '', '', '', '']
  playerTime = 0
  gameOver = false
}
