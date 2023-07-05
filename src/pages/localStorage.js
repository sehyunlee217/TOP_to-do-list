import { addDays, differenceInDays, format, parseISO } from "date-fns";
import { createTaskelement } from "./createTasklist";
import { generateGroup } from "./toggleMenu";

function storeGroupstr(str) {
    localStorage.setItem(str, JSON.stringify(str));
}


export function storeGroup(groupName) {
    storeGroupstr(groupName);
    const taskContentloc = document.getElementById("task-content");
    taskContentloc.textContent = groupName;
}

export function sortLocalstorage() {
    // console.log(localStorage);
    // group contents with group names
    // convert local storage to array
    // declare empty array to store objects to sort later
    let dataArray = [];

    // read and parse local storage
    const localStorageData = Object.values(localStorage);
    localStorageData.forEach(item => {
        // if item in local storage is a task,
        if (typeof JSON.parse(item) === "object") {
            dataArray.push(JSON.parse(item));
        }
    });

    // function to sort array by date
    dataArray.sort(function (a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA == "Invalid Date") {
            return dateB - dateA;
            console.log("run");
        }
        else if (dateB == "Invalid Date") {
            return dateA - dateB;
        }
        else {
            return dateA - dateB;
        }
    });

    displayTasks(dataArray);
    displayGroups();
}

export function displayGroups() {
    // generate menu functionality

    // read group data from local storage
    const groupArray = [];
    const localStorageData = Object.values(localStorage);
    localStorageData.forEach(item => {
        // if item in local storage is a group,
        if (typeof JSON.parse(item) === "string") {
            groupArray.push(JSON.parse(item));
        }
    });

    // display group by clearing and adding elements
    const groupListloc = document.getElementById("group-list");
    groupListloc.replaceChildren();

    for (let groupName of groupArray) {
        const newGroup = document.createElement("div");
        newGroup.textContent = groupName;
        newGroup.classList.add("add-newgroup");
        groupListloc.appendChild(newGroup);

        // for each group element when clicked,
        newGroup.addEventListener("click", (e) => {
            // i) should group name should be displayed in content
            const taskContentloc = document.getElementById("task-content");
            taskContentloc.textContent = groupName;

            // ii) should display all tasks with that group name

        });
    }
}

export function displayTasks(array) {
    // clear displayed items, 
    const taskListloc = document.querySelector(".task-list");
    const nodueLoc = document.getElementById("no-due-date");
    taskListloc.replaceChildren();
    nodueLoc.replaceChildren();

    for (let data of array) {
        // get difference in days compared to today
        // today
        const curDate = new Date();
        // date on task
        let itemDate = new Date(data.date);
        // fix timezone rounding date by 1 day
        itemDate = addDays(itemDate, 1);
        // date is defined
        if (data.date != "") {
            const dateDifference = differenceInDays(itemDate.setHours(0, 0, 0, 0), curDate.setHours(0, 0, 0, 0));
            // create item
            createTaskelement(data, dateDifference);
        }
        // date is not defined
        else {
            createTaskelement(data, "NaN");
        }
    }

}


export default sortLocalstorage;