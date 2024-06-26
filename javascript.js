const aufgabenListe = document.getElementById("itemlist");
const textFeld = document.getElementById("add");

// Add Button
const addButton = document.getElementById("add-btn");

function addItem() {
  if (textFeld.value === "") {
    alert("Mensch, schreib doch was...");
  } else {
    let li = document.createElement("li");
    li.innerHTML = textFeld.value;
    li.className = "list-group-item";
    aufgabenListe.appendChild(li);
    let cross = document.createElement("cross");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);
  }
  textFeld.value = "";
  Local()
}

addButton.addEventListener("click", addItem);

// Clear Button
const clearButton = document.getElementById("clear_button");

function clearList() {
  if (aufgabenListe.innerHTML === "") {
    alert("Ist doch leer Mensch...");
  } else {
    aufgabenListe.innerHTML = "";
   
  }
  Local()
}

clearButton.addEventListener("click", clearList);

//delete
const Deletebutton = document.getElementById("itemlist");
Deletebutton.addEventListener(
  "click",
  function (Deletethis) {
    if (Deletethis.target.matches("cross")) {
      Deletethis.target.parentElement.remove();
     
    }
    Local()
  },
  false
);


// Edit button

const editButton = document.getElementById("Edit_button");

function editTask() {
  const selectedTask = document.querySelector(".list-group-item.selected");
  if (selectedTask) {
    const newText = prompt("Edit task:", selectedTask.textContent);
    if (newText !== null) {
      selectedTask.textContent = newText;
      let x = document.createElement("cross");
      x.innerHTML = "\u00d7";
      selectedTask.appendChild(x);
    }
  } else {
    alert("Please select a task to edit.");
  }
  Local()
}

editButton.addEventListener("click", editTask);

aufgabenListe.addEventListener("click", function (event) {
  const selectedTask = event.target.closest("li");
  if (selectedTask) {
    const isActive = selectedTask.classList.contains("selected"); // contains() returns a boolean value — true (given token,) otherwise false
   
    if (isActive) {
      selectedTask.classList.remove("selected");
    } else {
      
      const tasks = aufgabenListe.querySelectorAll("li");
      tasks.forEach((task) => task.classList.remove("selected"));
    
      selectedTask.classList.add("selected");
    }
  }
});
//check
const listContainer = document.getElementById("itemlist");
listContainer.addEventListener("click", (event) => {
  if (event.target.matches("li") === true) {
    event.target.classList.toggle("checked");
  }
  Local()
});


// LocalStorage
function Local(){
  localStorage.setItem("data",itemlist.innerHTML);
}

function ssh(){
  itemlist.innerHTML = localStorage.getItem("data");
}
ssh();



    