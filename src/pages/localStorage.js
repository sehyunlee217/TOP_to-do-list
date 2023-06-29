import { addDays, differenceInDays, format, parseISO } from "date-fns";
import { createTaskelement } from "./createTasklist";


export function storeGroup(groupName) {
    console.log(groupName);
    const taskContentloc = document.getElementById("task-content");
    taskContentloc.textContent = groupName;
}

export function sortLocalstorage() {
    // console.log(localStorage);
    // group contents with group names

    // convert local storage to array

    // declare empty array to store objects to sort later
    let dataArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        let title = localStorage.key(i);
        let obj = JSON.parse(localStorage.getItem(title));
        dataArray.push(obj);
    }
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

}

export function displayTasks(array) {
    // clear displayed items, 
    const taskListloc = document.querySelector(".task-list");
    const nodueLoc = document.getElementById("no-due-date");
    taskListloc.replaceChildren();
    nodueLoc.replaceChildren();
    // console.log(array);

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

// function displayLocalstorage() {
//     // clear displayed items, 
//     const taskListloc = document.querySelector(".task-list");
//     taskListloc.replaceChildren();

//     // run through items in localstorage
//     for (let i = 0; i < localStorage.length; i++) {
//         let title = localStorage.key(i);
//         if (title != "") {
//             let dataObj = JSON.parse(localStorage.getItem(title));

//             // get difference in days compared to today
//             // today
//             const curDate = new Date();
//             // date on task
//             let itemDate = new Date(dataObj.date);
//             // fix timezone rounding date by 1 day
//             itemDate = addDays(itemDate, 1);
//             // date is defined
//             if (dataObj.date != "") {
//                 const dateDifference = differenceInDays(itemDate.setHours(0, 0, 0, 0), curDate.setHours(0, 0, 0, 0));
//                 // create item
//                 createTaskelement(dataObj, dateDifference);
//             }
//             // date is not defined
//             else {
//                 createTaskelement(dataObj, "NaN");
//             }
//         }
//     }
// }

export default sortLocalstorage;