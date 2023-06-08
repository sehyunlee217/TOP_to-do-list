function buildContent() {
    const contentLoc = document.getElementById("content");


    const contentContainer = document.createElement("div");
    contentContainer.classList.add("flex");
    contentContainer.textContent = "content";


    contentLoc.appendChild(contentContainer);

    contentLoc;
}

export default buildContent;