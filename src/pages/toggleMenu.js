import { format } from "date-fns";
import { storeGroup } from "./localStorage";

function isDisplay() {
    // checks if sidebar is displaying or not
    const contentLoc = document.getElementById("content");
    const sidebarLoc = document.getElementById("sidebar");

    if (contentLoc.contains(sidebarLoc) == false) {
        // if nothing is displayed, display:none
        return false;
    }
    else {
        // if true, display:true
        return true;
    }
}

function showDate() {
    let curDate = new Date();
    let formatCurdate = format(curDate, "yyyy-MM-dd");

    const headerDate = document.getElementById("header-date");
    headerDate.textContent = `${ formatCurdate }`;
}

function displayAll() {

}
function displayToday() {

}
function displayNext7() {

}

function addGroup() {
    const newGroupbtn = document.querySelector(".add-newgroup");
    newGroupbtn.addEventListener("click", () => {
        console.log("hi");
    });
}

function buildSidebar() {

    const contentLoc = document.getElementById("content");

    // basic structure
    const sidebarContainer = document.createElement("div");
    sidebarContainer.setAttribute("id", "sidebar");
    contentLoc.appendChild(sidebarContainer);
    // ------------ home ---------------
    const sidebarHome = document.createElement("div");
    sidebarContainer.appendChild(sidebarHome);

    const homeTxt = document.createElement("div");
    homeTxt.textContent = "Home";
    homeTxt.classList.add("title-m");
    sidebarHome.appendChild(homeTxt);

    // -------- home pages ---------
    const homePages = document.createElement("div");
    sidebarHome.appendChild(homePages);
    homePages.classList.add("list-items");

    // all tasks
    const allTasks = document.createElement("div");
    allTasks.textContent = "All Tasks";
    homePages.appendChild(allTasks);
    // today
    const todayTasks = document.createElement("div");
    todayTasks.textContent = "Today";
    homePages.appendChild(todayTasks);
    // next 7 days
    const next7Tasks = document.createElement("div");
    next7Tasks.textContent = "Next 7 Days";
    homePages.appendChild(next7Tasks);

    // ------------ groups ---------------
    const sidebarGroups = document.createElement("div");
    sidebarGroups.setAttribute("id", "groups");
    sidebarContainer.appendChild(sidebarGroups);

    // groups text
    const groupsTxt = document.createElement("div");
    groupsTxt.textContent = "Groups";
    groupsTxt.classList.add("title-m");
    sidebarGroups.appendChild(groupsTxt);

    // new groups container
    const newGroupContainer = document.createElement("div");
    newGroupContainer.setAttribute("id", "newgroup-container");
    sidebarGroups.appendChild(newGroupContainer);

    // Add a new group 
    const addGroup = document.createElement("div");
    sidebarGroups.appendChild(addGroup);
    addGroup.classList.add("group-list");

    // new groups
    const newGroups = document.createElement("div");
    newGroups.textContent = "+ New group";
    newGroups.classList.add("add-newgroup");

    function showForm(bool) {
        const addNewgroupbtn = document.querySelector(".add-newgroup");
        const newGroupform = document.getElementById("group-form");

        // if both variables are declared,
        if (addNewgroupbtn && newGroupform) {
            // if true, display form
            if (bool) {
                addNewgroupbtn.style.display = "none";
                newGroupform.style.display = "flex";
            }
            // if false, hide form
            else {
                addNewgroupbtn.style.display = "flex";
                newGroupform.style.display = "none";
            }
        }
        else if (addNewgroupbtn && !newGroupform) {
            console.log("one ");
        }
    }

    // event listener -> add new group when clicked
    newGroups.addEventListener("click", () => {
        // if form was never created,
        // create small form to add new group
        if (newGroupContainer.childElementCount < 2) {
            newGroups.style.display = "none";

            const newGroupForm = document.createElement("form");
            newGroupForm.setAttribute("id", "group-form");
            const nameInput = document.createElement("input");
            nameInput.setAttribute("type", "text");
            nameInput.setAttribute("name", "title");
            nameInput.setAttribute("id", "groupname-input");
            nameInput.setAttribute("placeholder", "Insert Group Name");

            newGroupForm.appendChild(nameInput);
            newGroupContainer.appendChild(newGroupForm);

            const addBtn = document.createElement("button");
            addBtn.setAttribute("type", "button");
            addBtn.setAttribute("id", "submitBtn");
            addBtn.textContent = "Add";

            addBtn.addEventListener("click", (e) => {
                // prevent form from submitting and reseting page
                const groupNameinput = document.getElementById("groupname-input");
                const groupNamedata = groupNameinput.value;
                // store group name data
                storeGroup(groupNamedata);
                // clear input when submitting
                groupNameinput.value = "";

                // add group to grouplist
                const newGroup = document.createElement("div");
                newGroup.textContent = groupNamedata;
                newGroup.classList.add("add-newgroup");
                addGroup.appendChild(newGroup);

                newGroup.addEventListener("click", (e) => {
                    const taskContentloc = document.getElementById("task-content");
                    taskContentloc.textContent = groupNamedata;
                });

                showForm(false);
            });
            newGroupForm.appendChild(addBtn);
        }
        else {
            showForm(true);
        }
    });
    newGroupContainer.appendChild(newGroups);
}

function generateMenu() {
    // check if sidebar is not generated, build sidebar
    if (isDisplay() == false) {
        buildSidebar();
    }
    // if sidebar is generated, 
    else {
        const sidebarLoc = document.getElementById("sidebar");
        // if display is shown, change to none
        if (sidebarLoc.style.display != "none") {
            sidebarLoc.style.display = "none";
        }
        // if display is not shown, change to flex/block
        else {
            sidebarLoc.style.display = "flex";
        }
    }
}

// when menu is clicked, show and hide menu page
function toggleMenu() {
    showDate();
    // add event listener for when menu button is clicked
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", generateMenu);
}

export default toggleMenu;