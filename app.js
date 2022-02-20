const addForm = document.querySelector('.add__task');
const list = document.querySelector('.tasks__body');
const todoTask = document.getElementById('add-task');
const searchInput = document.querySelector('.form-control');

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


// Search and Filering the tasks

const filterTasks = (filterTerm) => {
    Array.from(list.children).filter((task) => {
        return task.textContent.includes(filterTerm);
    }).forEach((task) => {
        task.classList.remove('filteredTasks')
    });

    Array.from(list.children).filter((task) => {
        return !task.textContent.includes(filterTerm);
    }).forEach((task) => {
        task.classList.add('filteredTasks')
    });
};

searchInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    const filterTerm = searchInput.value.trim();
    console.log(filterTerm);
    filterTasks(filterTerm);
});