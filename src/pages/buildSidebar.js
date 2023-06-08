function buildSidebar() {
    const containerLoc = document.getElementById("container");
    console.log(containerLoc);

    // basic structure
    const sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("flex", "w-1/5", "flex-col", "p-2", "px-6", "justify-center", "items-start");
    containerLoc.appendChild(sidebarContainer);
    // ------------ home ---------------
    const sidebarHome = document.createElement("div");
    sidebarHome.classList.add("flex", "flex-col", "text-xl", "font-semibold", "text-gray-600");
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
    sidebarGroups.classList.add("flex", "text-xl", "font-semibold", "text-gray-600");
    sidebarGroups.textContent = "Groups";
    sidebarContainer.appendChild(sidebarGroups);
    // + Add group
}

export default buildSidebar;