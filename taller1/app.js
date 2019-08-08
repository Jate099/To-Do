function renderApp(){
    var app = document.querySelector('.app');

    app.innerHTML = `
    <input class="inputppal" type="text"/>
    <div class="tareas_cont"></div>
    <div class="filt_cont">
        <button class="todo">Todo</button>
        <button class="geiActivo">Activo</button>
        <button class="completado">Completau</button>
        <button class="eliminarCompletBtn">Eliminar Completado</button>
    </div>
    `;

    return app;
}