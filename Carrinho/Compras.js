



$('#Lista').submit(function(event) {
    event.preventDefault();
 
    const { id, geral, state } = this.elements;
    
    if(geral && !id.value) { 
        const geralSaved = save(geral.value);
        render(geralSaved.id, geralSaved.text, geralSaved.state);
    } else {
        update(id.value, geral.value, state.checked);
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
    if(geral) return geral;
}

function save(text, state = false) {
    const geral = {
        id: 1,
        text, state
    };

    const list = getAllTodos();
    if(list.length) geral.id = list[list.length - 1].id + 1;

    list.push(geral);
    localStorage.setItem('itens', JSON.stringify(list));
    return geral;
}

function deleteItem(id) {
    let list = getAllTodos();
    list = list.filter(geral => geral.id != id);
    localStorage.setItem('itens', JSON.stringify(list));
}

function Decrement(id) {
    const index = list.findIndex((geral) => geral.id == id) ;
    list[index].amount--;
    if(list[index].amount) deleteItem(id);
}

function Increment(id) {
    const index = list.findIndex((geral) => geral.id == id) ;
    list[index].amount++;
    if(list[index].amount) save(id);
}

function Search(text){
   return list.filter(geral => geral.text.includes("text"));  
} 

function Deletar(event) {
    deleteItem(event.target.value);
    loadItems();
}

function todoChecked(event) {
    event.target.checked;
}

function render(id, text, state = false) {
    $('.list-group').append(`
        <li class="list-group-item" data-id="${id}">
            <input type="checkbox" ${state ? 'checked':  ''} />
            ${text}
            <button value="${id}" class="botao5" type="submit" name="deleta">DELETAR</button>
            <button value="${id}" class="botao4" type="submit" name="incrementa">+</button>
            <button value="${id}" class="botao4" type="submit" name="decrementa">-</button>
        </li>
    `);
}

function loadItems() {
    $('.list-group').empty();

    getAllTodos().forEach((geral) => {
        render(geral.id, geral.text, geral.state);

        $('.botao5').click(Deletar);
        $('.botao4').click(Incrementar);
    });
} 

window.onload = loadItems;
