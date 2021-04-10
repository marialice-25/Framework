$('#Lista').submit(function(event) {
    event.preventDefault();
 
    const { id, todo, state } = this.elements;
    
    if(todo && !id.value) { 
        const todoSaved = save(todo.value);
        render(todoSaved.id, todoSaved.text, todoSaved.state);
    } else {
        update(id.value, todo.value, state.checked);
        loadItems();
    }

    event.target.reset();
})

function getAllTodos() {
    let todos = [];
    const todosStr = localStorage.getItem('itens');
    if(todosStr) todos = JSON.parse(todosStr);
    return todos;
}

function getById(id) {
    const list = getAllTodos();
    const todo = list.find((item) => item.id == id);
    if(todo) return todo;
}

function save(text, state = false) {
    const todo = {
        id: 1,
        text, state
    };

    const list = getAllTodos();
    if(list.length) todo.id = list[list.length - 1].id + 1;

    list.push(todo);
    localStorage.setItem('itens', JSON.stringify(list));
    return todo;
}

function deleteItem(id) {
    let list = getAllTodos();
    list = list.filter(todo => todo.id != id);
    localStorage.setItem('itens', JSON.stringify(list));
}

function update(id, text, state) {
    const list = getAllTodos();
    const index = list.findIndex((todo) => todo.id == id);

    if(index != -1) {
        list[index] = {id, text, state};
    }

    localStorage.setItem('itens', JSON.stringify(list));
} 

function btnDeleteAction(event) {
    deleteItem(event.target.value);
    loadItems();
}

function btnEditAction(event) {
    const todo = getById(event.target.value);

    const formTodo = document.getElementById('Lista');
    const elements = formTodo.getElementsByTagName('input');

    elements.id.value = todo.id;
    elements.todo.value = todo.text;
}

function todoChecked(event) {
    event.target.checked;
}

function render(id, text, state = false) {
    $('.list-group').append(`
        <li class="list-group-item" data-id="${id}">
            <input type="checkbox" ${state ? 'checked':  ''} />
            ${text}
            <button value="${id}" class="botao2" type="submit" name="deleta">🗑</button>
            <button value="${id}" class="botao4" type="submit" name="edita">✏</button>
        </li>
    `);
}

function loadItems() {
    $('.list-group').empty();

    getAllTodos().forEach((todo) => {
        render(todo.id, todo.text, todo.state);

        $('.botao2').click(btnDeleteAction);
        $('.botao4').click(btnEditAction);
    });
} 

window.onload = loadItems;