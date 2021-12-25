const navBtn = document.getElementById("nav-btn");

navBtn.onclick = function () {
    const nav = document.getElementById("nav-list");
    const navClassList = nav.classList;
    let hidden = false;

    for (const item of navClassList) {
        if (item === "hidden-block") hidden = true;
    }
    

    if (hidden) {
        nav.classList.remove("hidden-block");
        navBtn.classList.add("btnList-active");
    } else {
        nav.classList.add("hidden-block");
        navBtn.classList.remove("btnList-active");
    }
}

