'use strict'

const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
        addTask(input.value);
        input.value = '';
    } else {
        alert('Введите описание задачи');
    }
});

function addTask(taskText) {
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `<div class="task__title">${taskText}</div>`;

    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.className = 'task__remove';
    taskRemove.innerHTML = '&times;';
    taskRemove.addEventListener('click', () => task.remove());
    task.appendChild(taskRemove);
    tasksList.appendChild(task);
}