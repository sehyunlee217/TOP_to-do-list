import { validate } from "schema-utils";
import { data } from "browserslist";
import displayLocalstorage from "./localStorage";

function markComplete() {
    const taskCheckicon = document.querySelectorAll(".task-check");

    taskCheckicon.forEach((icon) => {
        // Add animations before clicking on check sign
        icon.addEventListener("mouseover", () => {
            icon.classList.remove("fa-circle");
            icon.classList.add("fa-circle-check");
        });
        icon.addEventListener("mouseout", () => {
            icon.classList.remove("fa-circle-check");
            icon.classList.add("fa-circle");
        });

        // when icon is clicked, 
        icon.addEventListener("click", () => {
            // get title of this clicked task
            const itemTitle = icon.parentElement.querySelector(".item-title").textContent;
            // access data and remove from localStorage
            localStorage.removeItem(itemTitle);
            // refresh task list
            displayLocalstorage();
        });
    });
}

export function createTaskelement(obj, dateDifference) {
    // display data as blocks as content
    const taskloc = document.querySelector(".task-list");

    const taskItem = document.createElement("div");
    // taskItem.classList.add("add-task-btn");
    taskItem.classList.add("taskItem");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("item-title");
    taskTitle.textContent = obj.title;

    const taskContent = document.createElement("div");
    taskContent.classList.add("content-title");
    taskContent.textContent = obj.content;

    const taskDate = document.createElement("div");
    taskDate.classList.add("date-title");
    taskDate.textContent = obj.date;

    const taskCheck = document.createElement("div");
    taskCheck.classList.add("task-check", "fa-regular", "fa-circle", "fa-2xl");

    const taskDuedate = document.createElement("div");
    taskDuedate.classList.add("due-date");

    // if due date is valid,
    if (dateDifference != "NaN") {
        if (dateDifference > 1) {
            taskDuedate.textContent = `In ${ dateDifference } days`;
        }
        else if (dateDifference == 1) {
            taskDuedate.textContent = "Tommorow";
        }
        else if (dateDifference == 0) {
            taskDuedate.textContent = "Due today";
        }
        else if (dateDifference == -1) {
            taskDuedate.textContent = "Yesterday";
        }
        else {
            taskDuedate.textContent = `${ -1 * dateDifference } days ago`;
        }
    }
    else {
        taskDuedate.textContent = "No due date";
    }



    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskDate);
    taskItem.appendChild(taskDuedate);
    taskItem.appendChild(taskCheck);
    taskloc.appendChild(taskItem);

    markComplete();
}

// i) move task items to task list. 
// tasks (done)
// task-content (done)
// tasklist > task items
// formContainer
// add task button

// flex-wrap task list