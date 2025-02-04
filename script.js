const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

function addTask() {
    if(inputBox.value === '') {
        alert('Você deve digitar uma Tarefa!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
    }
    inputBox.value = ''
}