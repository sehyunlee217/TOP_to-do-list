import { differenceInDays, format, parseISO } from "date-fns";
import { createTaskelement } from "./createTasklist";

export function sortLocalstorage() {
    console.log(localStorage);
}

export function displayLocalstorage() {
    // clear displayed items, 
    const taskListloc = document.querySelector(".task-list");
    taskListloc.replaceChildren();

    // then run through items in localstorage
    for (let i = 0; i < localStorage.length; i++) {
        let title = localStorage.key(i);
        if (title != "") {
            let dataObj = JSON.parse(localStorage.getItem(title));
            // get difference in days compared to today
            // today
            const curDate = new Date();
            // date on task
            const itemDate = new Date(dataObj.date);
            // date is defined
            if (dataObj.date != "") {
                const dateDifference = differenceInDays(itemDate, curDate);
                // create item
                createTaskelement(dataObj, dateDifference + 1);
            }
            // date is not defined
            else {
                createTaskelement(dataObj, false);
            }


        }
    }
}

export default displayLocalstorage;