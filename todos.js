var listElement = document.querySelector('#container ul');
var inputElement = document.querySelector('input[name=task]');
var btnElement = document.querySelector('button[name=btn_add]');


let tasks = JSON.parse(localStorage.getItem('tasks'));


function deleteTask(posicao) {
    tasks.splice(posicao, 1);
    saveToLocalSotorage();
    loadTasks();
}

function loadTasks() {

    listElement.innerHTML = '';

    for (task of tasks) {
        var taskLi = document.createElement('li');
        var taskText = document.createTextNode(task);
        taskLi.appendChild(taskText);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var textLink = document.createTextNode('Excluir');
        linkElement.setAttribute('onclick', 'deleteTask(' + posicao + ')')
        linkElement.appendChild(textLink);
        taskLi.appendChild(linkElement);

        var posicao = tasks.indexOf(task);

        listElement.appendChild(taskLi);
    }

    messageIfNotTasks();


}

loadTasks();

function messageIfNotTasks() {
    if (tasks.length === 0) {
        var vazioElement = document.createElement('p');
        var textVazio = document.createTextNode('Sem tarefas :(');
        vazioElement.appendChild(textVazio);
        listElement.appendChild(vazioElement);
    }
}


btnElement.onclick = function () {
    var task = inputElement.value;
    inputElement.value = '';
    tasks.push(task);
    saveToLocalSotorage();
    loadTasks();
}

function saveToLocalSotorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

