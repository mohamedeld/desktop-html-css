const menuEl = document.querySelector(".menu");
const asideEl = document.querySelector(".aside")
if (menuEl !== null || menuEl !== undefined) {
    menuEl.onclick = function() {
        asideEl.classList.toggle("show-aside")
    }
}