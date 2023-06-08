function popSidebar() {
    // if display:sidebar is false
    // buildSidebar() 
}

function buildNavbar() {
    console.log("navbar");

    const bodyLoc = document.getElementById("header");
    console.log(bodyLoc);

    // create navbar
    const navbar = document.createElement("div");
    navbar.classList.add("navbar_container");

    // button to toggle sidebar on the left
    const sidebarBtn = document.createElement("button");
    sidebarBtn.classList.add("sidebar_btn", "px-1.5", "rounded-sm", "hover:bg-sky-700");

    // add icon to sidebar btn
    const sidebarIcon = document.createElement("i");
    sidebarIcon.classList.add("fa-solid", "fa-bars");
    sidebarBtn.appendChild(sidebarIcon);

    // add event listener to toggle sidebar btn
    sidebarBtn.addEventListener("click", popSidebar);

    // Add sidebar to the nav bar
    navbar.appendChild(sidebarBtn);

    // To-Do list Title on the right
    const navbarTxt = document.createElement("span");
    navbarTxt.textContent = "To-Do List";
    navbar.appendChild(navbarTxt);

    bodyLoc.appendChild(navbar);

    // ----- navbar tailwind css --------
    navbar.classList.add("text-white", "text-xl", "font-bold", "flex", "justify-between", "align-center", "px-6", "py-3");
    bodyLoc.classList.add("bg-blue-300");
}

export default buildNavbar;