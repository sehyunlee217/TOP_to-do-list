import { addDays, differenceInDays, format, parseISO } from "date-fns";
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
            let itemDate = new Date(dataObj.date);
            // fix timezone rounding date by 1 day
            itemDate = addDays(itemDate, 1);
            // date is defined
            if (dataObj.date != "") {
                const dateDifference = differenceInDays(itemDate.setHours(0, 0, 0, 0), curDate.setHours(0, 0, 0, 0));
                console.log(dateDifference);
                // create item
                createTaskelement(dataObj, dateDifference);
            }
            // date is not defined
            else {
                createTaskelement(dataObj, "NaN");
            }


        }
    }
}

export default displayLocalstorage;