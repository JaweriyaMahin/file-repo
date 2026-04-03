function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    // Remove task on click
    li.onclick = function () {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}