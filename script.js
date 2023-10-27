
//add element and making checkbox
function addList() {
    const input= document.getElementById("input");
    if(input.value !=="")
    {
        const todoList= document.getElementById("todos");
        const listElements= document.createElement("li");
        const checkbox= document.createElement("input");
        checkbox.type="checkbox";
        listElements.appendChild(checkbox);
        listElements.appendChild(document.createTextNode(input.value));
        todoList.appendChild(listElements);
        input.value= "";

        //edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            editElement(listElements);
        };
        listElements.appendChild(editButton);


    }

}

//Remove element by clicking on it

const listItem= document.querySelector(".todos");
listItem.addEventListener("click", function (e) {
    let listItemElement= e.target;
    listItemElement.remove();
});

//edit element function
function editElement(listItem) {
    const textNode = listItem.childNodes[1]; // Get the text node
    const editText = prompt("Edit your todo:", textNode.textContent);
    if (editText !== null) {
        textNode.textContent = editText;
    }
}