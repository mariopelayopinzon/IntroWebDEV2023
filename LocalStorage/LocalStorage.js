const form = document.querySelector("form")
const todoList = document.querySelector ("#todoList")

const tareasporhacer = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e)
    const data = new FormData(form);
    const { additem } =Object.fromEntries(data);
    console.log( additem );
    // Object => values, keys, entries; 
    const { newItem } = Object.fromEntries(data);
    const li = document.createElement("li")
    li.innerText = newItem; 
    todoList.appendChild(li)

    tareasporhacer.push( newItem );
    localStorage.setItem("tareas", JSON.stringify(tareasporhacer) );
    
})

document.addEventListener("DOMContentLoaded", () => {})
const tareasString = localStorage.getItem("tareas")
const tareas = JSON.parse(tareasString); 
console.log (tareas, typeof tareas); 
