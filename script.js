//visual effect when picking up card elements 
const dragStart = event => {
    event.currentTarget.classList.add('dragging')
}

const dragEnd = event => {
    event.currentTarget.classList.remove('dragging')
}

// selecting all cards and each one having a event listener
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
})

// setting up data to be used when item is dropped
// outerHTML - adds HTML to new column when dropped || dataset.id - removes original element from column
const drag = event => {
    event.dataTransfer.setData('text/html', event.currentTarget.outerHTML)
    event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id)
}


//visual effect when dragging elements to new column
const dragEnter = event => {
    event.currentTarget.classList.add('drop')
}

const dragLeave = event => {
    event.currentTarget.classList.remove('drop')
}
//draggable element has entered and left drop area
document.querySelectorAll('.column').forEach(column=> {
    column.addEventListener('dragenter', dragEnter)
    column.addEventListener('dragleave', dragLeave)
})

// removing classlist drop and dataid specifically when grabbed and adding data id to new column
const drop = event => {
    document.querySelectorAll('.column').forEach(column => column.classList.remove('drop'))
    document.querySelector(`[data-id='${event.dataTransfer.getData('text/plain')}']`).remove()

    event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html')
}

// allows item to be dropped onto the column
const allowDrop = event => {
    event.preventDefault()
}






