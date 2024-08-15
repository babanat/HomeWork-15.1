document.addEventListener('DOMContentLoaded', function() {
const addMessage = document.querySelector(".add-message");
const addButton = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

let todoArray = [];

function setTodo(newTodo) {
  const itemJson = JSON.stringify(newTodo);
  localStorage.setItem("todo-test", itemJson)
}
function getTodo() {
  const value = localStorage.getItem("todo-test") || "[]";
  return JSON.parse(value)
}
function addNewMessages(){
 
}
addButton.addEventListener('click', function(){
  let newTodo = {
    todo: addMessage.value,
    checked: false
  };
  todoArray.push(newTodo);
  addNewMessages()
});
 
})
