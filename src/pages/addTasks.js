import { add } from "date-fns";

function showForm(bool) {
    // always display add task form when clicked
    const displayTaskList = document.querySelector(".task-list");
    const addTaskBtn = document.querySelector(".add-task-btn");

    if (bool) {
        displayTaskList.style.display = "block";
        addTaskBtn.style.display = "none";
    }
    else {
        displayTaskList.style.display = "none";
        addTaskBtn.style.display = "block";
    }
}


function storeData(obj) {
    // local storage can only store data as a string
    let dataObjstr = JSON.stringify(obj);
    localStorage.setItem(obj.title, dataObjstr);
}

function readFormdata() {
    const titleInput = document.getElementById("title-input");
    const titleData = titleInput.value;

    const contentInput = document.getElementById("content-input");
    const contentData = contentInput.value;

    const dateInput = document.getElementById("date-input");
    const dateData = dateInput.value;

    const dataObj = {
        "title": titleData,
        "content": contentData,
        "date": dateData
    };

    storeData(dataObj);
}

function addTask() {
    showForm(true);

    const taskListloc = document.getElementById("formContainer");

    // can only add one task at a time.
    if (!taskListloc.hasChildNodes()) {
        // build task bar

        // Create form to add task
        const taskForm = document.createElement("form");
        taskForm.setAttribute("id", "taskForm");

        // Title to add task
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title: ";

        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("id", "title-input");


        // Content to add task
        const contentLabel = document.createElement("label");
        contentLabel.textContent = "Content: ";

        const contentInput = document.createElement("input");
        contentInput.setAttribute("type", "text");
        contentInput.setAttribute("name", "content");
        contentInput.setAttribute("id", "content-input");

        // Date Selection
        const dateLabel = document.createElement("label");
        dateLabel.textContent = "Date: ";

        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("name", "date");
        dateInput.setAttribute("id", "date-input");

        // Button Container
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");

        // Add Button
        const addBtn = document.createElement("button");
        addBtn.setAttribute("type", "submit");
        addBtn.setAttribute("id", "submitBtn");
        addBtn.textContent = "Add";

        // Cancel Button
        const cancelBtn = document.createElement("button");
        cancelBtn.setAttribute("type", "button");
        cancelBtn.setAttribute("id", "cancelBtn");
        cancelBtn.textContent = "Cancel";


        // hide add task bar when cancel is clicked
        cancelBtn.addEventListener("click", (e) => {
            showForm(false);
        });

        // append elements to form
        taskForm.appendChild(titleLabel);
        taskForm.appendChild(titleInput);

        taskForm.appendChild(contentLabel);
        taskForm.appendChild(contentInput);

        taskForm.appendChild(dateLabel);
        taskForm.appendChild(dateInput);

        btnContainer.appendChild(addBtn);
        btnContainer.appendChild(cancelBtn);

        taskForm.appendChild(btnContainer);

        taskListloc.appendChild(taskForm);
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

    });

}

function addTaskList() {
    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", addTask);
}

export default addTaskList;