function buildSidebar() {
    const containerLoc = document.getElementById("container");

    // basic structure
    const sidebarContainer = document.createElement("div");
    sidebarContainer.setAttribute("id", "sidebar");
    sidebarContainer.classList.add("w-full", "flex", "flex-wrap", "flex-col", "p-2", "px-6", "justify-center", "items-start");
    containerLoc.appendChild(sidebarContainer);
    // ------------ home ---------------
    const sidebarHome = document.createElement("div");
    sidebarHome.classList.add("w-full", "flex", "flex-col", "text-xl", "font-semibold", "text-gray-600");
    sidebarContainer.appendChild(sidebarHome);

    const homeTxt = document.createElement("div");
    homeTxt.textContent = "Home";
    homeTxt.classList.add("p-1");
    sidebarHome.appendChild(homeTxt);

    // -------- home pages ---------
    const homePages = document.createElement("div");
    sidebarHome.appendChild(homePages);
    homePages.classList.add("flex", "flex-col", "p-2", "gap-2", "text-sm", "font-light", "border-t-2", "border-sky-700");

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
    sidebarGroups.classList.add("w-full", "flex", "flex-col", "text-xl", "font-semibold", "text-gray-600");
    sidebarContainer.appendChild(sidebarGroups);

    // groups text
    const groupsTxt = document.createElement("div");
    groupsTxt.textContent = "Groups";
    groupsTxt.classList.add("p-1");
    sidebarGroups.appendChild(groupsTxt);

    // new groups
    const newGroups = document.createElement("div");
    sidebarGroups.appendChild(newGroups);
    newGroups.classList.add("flex", "flex-col", "p-2", "gap-2", "text-sm", "font-light", "border-t-2", "border-sky-700");

}

function displaySidebar() {
    const containerLoc = document.getElementById("container");

    // if there is not sidebar, create sidebar
    if (containerLoc.childElementCount == 0) {
        buildSidebar();
    }
    else {
        const sidebarLoc = document.getElementById("sidebar");
        if (sidebarLoc.style.display == "none") {
            sidebarLoc.style.display = "flex";
        }
        else {
            sidebarLoc.style.display = "none";
        }
    }
}

export default displaySidebar;
