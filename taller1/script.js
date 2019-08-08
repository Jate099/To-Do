function cargarPag(){
    var input = document.querySelector('.inputppal');
    var tareasLista = document.querySelector('.tareas_cont');
    var activoBtn = document.querySelector('.geiActivo');
    var completBtn = document.querySelector('.completado');
    var todoBtn = document.querySelector('.todo');
    var tareasCount = document.querySelector('.tareasCount');
    var eliminarCompletBtn = document.querySelector('.eliminarCompletBtn');
    var checkAllBtn = document.querySelector('.checkAll');
    var itemsCont = document.querySelector('.items_cont');
    //var cont = 0;

function crearTarea(event){
    if(event.keyCode === 13){
        var tarea = document.createElement('div');
        var contenido = document.createElement('p');
        var eleiminarBtn = document.createElement('button');
        //var eliminarCompletBtn = document.createElement('button');
        var check = document.createElement('input');

        check.type = 'checkbox';

        tarea.className = 'tarea';
        contenido.className = 'contenido';
        eleiminarBtn.className = 'eliminarBtn';
        //eliminarCompletBtn.className = 'eliminarCompletBtn';
        check.className = 'checkBox';

        tareasLista.appendChild(tarea);
        tarea.appendChild(contenido);
        tarea.appendChild(check);
        tarea.appendChild(eleiminarBtn);
        //itemsCont.appendChild(eliminarCompletBtn);
        
        contenido.innerHTML = input.value;
        contenido.setAttribute('contenteditable', true);

        eleiminarBtn.innerHTML = 'x';

        //eliminarCompletBtn.innerHTML = 'Eliminar Completados';

        input.value = '';

        tareasCount.innerHTML ++;

        /*function actualizarCont(){
            cont = tareasLista.childElementCount;
        }*/

        //cont++;

        console.log(input.value);

        function eliminarTarea(){
            tareasLista.removeChild(tarea);
            tareasCount.innerHTML --;
        }
        eleiminarBtn.addEventListener('click', eliminarTarea);

        //tareasCount.innerHTML = cont+'items left';
    
        function hecho(){
            if(check.checked === true){
                contenido.style.textDecoration= "line-through";
                contenido.style.color= "gray"
                eliminarCompletBtn.style.display= "block";
                tareasCount.innerHTML --;
            }else{
                contenido.style.textDecoration= "none";
                contenido.style.color= "black"
                eliminarCompletBtn.style.display= "none";
                tareasCount.innerHTML ++;
            }    
        }
        check.addEventListener('click', hecho);

        function filtroActivo(){
            if(check.checked === true){
                tarea.style.display= "none";
            }else{
                tarea.style.display= "block";
            }    
        }
        activoBtn.addEventListener('click', filtroActivo);

        function filtroComplet(){
            if(check.checked === true){
                tarea.style.display= "block";
            }else{
                tarea.style.display= "none";
            }    
        }
        completBtn.addEventListener('click', filtroComplet);

        function filtroTodos(){
            tarea.style.display= "block";
        }
        todoBtn.addEventListener('click', filtroTodos);

        function eliminarComplet(){
            if(check.checked === true){
                tarea.remove();
                eliminarCompletBtn.style.display= "none";
            }    
        }
        eliminarCompletBtn.addEventListener('click', eliminarComplet);

        function check_all(){
            check.checked = true;
            eliminarCompletBtn.style.display= "block";
        }
        checkAllBtn.addEventListener('click', check_all);

        }
    
    }
input.addEventListener('keydown', crearTarea);

}
window.addEventListener('load', cargarPag);
