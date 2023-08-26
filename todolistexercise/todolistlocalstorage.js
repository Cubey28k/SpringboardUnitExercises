document.addEventListener("DOMContentLoaded", function(){
    let TodoForm = document.getElementById("newToDoForm");
    let todoList = document.getElementById("todoList");

    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove To-Do Item"

        let newToDo = document.createElement("li");
        newToDo.innerHTML = document.getElementById("Task").value;

        todoList.appendChild(newToDo);
        newToDo.appendChild(removeButton);

        todoForm.reset();
    });

    todoList.addEventListener("click", function(event) {
        const targetTagToLowerCase = event.target.tagName.toLowerCase();
        if (targetTagToLowerCase === "li") {
            event.target.style.textDecoration = "line-through";
        } else if (targetTagToLowerCase === "button") {
            event.target.parentNode.remove();
        }
    });
})