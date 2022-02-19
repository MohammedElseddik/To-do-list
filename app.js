const addForm = document.querySelector('.add__task');
const list = document.querySelector('.tasks__body');

const addTask = (task) => {
    const todiListItems = document.createElement('li');
    todiListItems.innerHTML =`
    <span>${task}</span>
    <i class="fa-solid fa-trash-can delete"></i>`;
    list.appendChild(todiListItems);
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoTask = document.getElementById('add-task').value.trim();
    if (todoTask.length) {
        addTask(todoTask);
        addForm.reset();
    }
});