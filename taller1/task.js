function createTask(){
    var task = document.createElement('task');
    task.setAttribute('class', 'content_tarea');

    task.innerHTML = `
    <p class="contenido" contenteditable="true">asdasd</p>
    <input type="checkbox" ${checked ? 'checked' : ''} class="checkBox">
    <button class="eliminarBtn">x</button>
    `;

    return task;
}