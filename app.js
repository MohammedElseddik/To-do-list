const addForm = document.querySelector('.add__task');
const list = document.querySelector('.tasks__body');
const todoTask = document.getElementById('add-task');

// Add Tasks section

const addTask = (task) => {
    const todiListItems = document.createElement('li');
    todiListItems.innerHTML = `
    <span>${task}</span>
    <i class="fa-solid fa-trash-can trash-icon"></i>`;
    list.appendChild(todiListItems);
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (todoTask.value.trim().length) {
        addTask(todoTask.value.trim());
        addForm.reset();
    }
});

//Delete Tasks section

list.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.classList.contains('trash-icon')) {
        e.target.parentElement.remove();
    }
});