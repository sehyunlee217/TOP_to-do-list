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
    // important
    const impTasks = document.createElement("div");
    impTasks.textContent = "Important";
    homePages.appendChild(impTasks);

    // ------------ groups ---------------
    const sidebarGroups = document.createElement("div");
    sidebarContainer.appendChild(sidebarGroups);

    // groups text
    const groupsTxt = document.createElement("div");
    groupsTxt.textContent = "Groups";
    groupsTxt.classList.add("title-m");
    sidebarGroups.appendChild(groupsTxt);

    // new groups
    const newGroups = document.createElement("div");
    newGroups.textContent = "+ Add new group";
    newGroups.classList.add("add-newgroup");
    sidebarGroups.appendChild(newGroups);

    // Add a new group 
    const addGroup = document.createElement("div");
    sidebarGroups.appendChild(addGroup);
    addGroup.classList.add("list-items");

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
    // add event listener for when menu button is clicked
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", generateMenu);
}

export default toggleMenu;