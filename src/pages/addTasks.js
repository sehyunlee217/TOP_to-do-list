import { add } from "date-fns";
import displayTasks, { displayTaskbygroup } from "./localStorage";

function storeData(obj) {
    // local storage can only store data as a string
    if (obj.title != "") {
        let dataObjstr = JSON.stringify(obj);
        localStorage.setItem(obj.title, dataObjstr);
    }
}

function showForm(bool) {
    // always display add task form when clicked
    const displayForm = document.getElementById("formContainer");
    const addTaskBtn = document.querySelector(".add-task-btn");

    if (bool) {
        displayForm.style.display = "block";
        addTaskBtn.style.display = "none";
    }
    else {
        displayForm.style.display = "none";
        addTaskBtn.style.display = "block";
    }
}

function readFormdata() {
    const titleInput = document.getElementById("title-input");
    const titleData = titleInput.value;

    const contentInput = document.getElementById("content-input");
    const contentData = contentInput.value;

    const dateInput = document.getElementById("date-input");
    const dateData = dateInput.value;

    const groupData = document.getElementById("task-content").textContent;

    const dataObj = {
        "group": groupData,
        "title": titleData,
        "content": contentData,
        "date": dateData
    };

    storeData(dataObj);
}

function addForm() {
    // when add task is clicked, display form
    showForm(true);

    // if form is not initialized, build form
    const formLoc = document.getElementById("formContainer");

    if (!formLoc.hasChildNodes()) {
        // Create form to add task
        const taskForm = document.createElement("form");
        taskForm.setAttribute("id", "taskForm");

        // container for task & details

        // // Title to add task
        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("id", "title-input");
        titleInput.setAttribute("placeholder", "Title");
        // ------------------------------------

        // // Content to add task
        const contentInput = document.createElement("input");
        contentInput.setAttribute("type", "text");
        contentInput.setAttribute("name", "content");
        contentInput.setAttribute("id", "content-input");
        contentInput.setAttribute("placeholder", "Details");

        // ------------------------------------

        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("name", "date");
        dateInput.setAttribute("id", "date-input");
        // ------------------------------------

        // Button Container
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");
        // ------------------------------------

        // Add Button
        const addBtn = document.createElement("button");
        addBtn.setAttribute("type", "submit");
        addBtn.setAttribute("id", "submitBtn");
        addBtn.textContent = "Add";
        // ------------------------------------

        // Cancel Button 
        const cancelBtn = document.createElement("button");
        cancelBtn.setAttribute("type", "button");
        cancelBtn.setAttribute("id", "cancelBtn");
        cancelBtn.textContent = "Cancel";
        // hide add task bar when cancel is clicked;
        cancelBtn.addEventListener("click", (e) => {
            showForm(false);
        });
        // ------------------------------------

        // append elements to form
        taskForm.appendChild(titleInput);

        taskForm.appendChild(contentInput);

        taskForm.appendChild(dateInput);

        btnContainer.appendChild(addBtn);
        btnContainer.appendChild(cancelBtn);

        taskForm.appendChild(btnContainer);

        // append form to formContainer
        formLoc.appendChild(taskForm);
        // ------------------------------------
    }

    // Actions when form is submitted
    const form = document.getElementById("taskForm");

    form.addEventListener("submit", (e) => {
        // prevent form from submitting and reseting page
        e.preventDefault();
        // read data and store it in local storage api
        readFormdata();
        // reset form once data is submitted 
        form.reset();
        // hide form
        showForm(false);
        // show feed
        displayTasks();

        const groupData = document.getElementById("task-content").textContent;
        displayTaskbygroup(groupData);
    });
}

function addTask() {
    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", addForm);
}

export default addTask;