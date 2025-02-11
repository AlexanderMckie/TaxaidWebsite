// Hamburger menu Function

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Add event listener to each menu item
const menuItems = offScreenMenu.querySelectorAll("a");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
    });
});

// Make nav-desktop-container sticky
const navDesktopContainer = document.querySelector(".nav-bar-desktop");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.1) {
        navDesktopContainer.style.position = "relative";
        navDesktopContainer.style.position = "sticky";
        navDesktopContainer.style.background = "linear-gradient(180deg, #fdfcfc, #fdfcfc00)";

    } else {
        navDesktopContainer.style.position = "";
        navDesktopContainer.classList.remove("sticky");
    }
});