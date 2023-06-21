import { validate } from "schema-utils";

function readLocalstorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let title = localStorage.key(i);
        let dataObj = JSON.parse(localStorage.getItem(title));
        createTaskelemenet(dataObj);
    }
}

function createTaskelemenet(obj) {
    // display data as blocks as content
    const taskloc = document.getElementById("tasks");

    const taskItem = document.createElement("div");
    taskItem.classList.add("add-task-btn");
    taskItem.classList.add("taskItem");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("item-title");
    taskTitle.textContent = obj.title;

    const taskContent = document.createElement("div");
    taskTitle.classList.add("content-title");
    taskContent.textContent = obj.content;

    const taskDate = document.createElement("div");
    taskTitle.classList.add("date-title");
    taskDate.textContent = obj.date;

    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskDate);

    taskloc.appendChild(taskItem);
}

export default readLocalstorage;