function createToolBar(itemsLeft){
    var tools = document.createElement('div');
    tools.setAttribute('class', 'cont_tools');

    tools.innerHTML = `
        <p class="tareasCount"></p>
        <p>items left</p>
    `;

}