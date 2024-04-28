const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAlltask = document.getElementById("clearAllTasks")

let tasks = [];

function addTask(){
    const taskTest = taskInput.value.trim();
    if(taskTest !== ""){
      tasks.push({text: taskTest});
      taskInput.value = "";
      displayTasks();
    }
};
console.log(tasks);

function displayTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task, index) =>{
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "Checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
};

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAlltasks(){
   tasks = [];
   displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAlltask.addEventListener("click", clearAlltasks);


displayTasks();