//function for event being fired when selected
const dragStart = event => {
    event.currentTarget.classList.add('dragging')
}

//function for event being fired when dropped
const dragEnd = event => {
    event.currentTarget.classList.remove('dragging')
}

// selecting all cards and each one having a event listener
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
})

