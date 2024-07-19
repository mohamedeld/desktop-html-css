const selectEL = document.querySelector(".selector");
const options = document.querySelectorAll(".options");
const selectImg = document.querySelector(".select-saudi")
const list = document.querySelector(".list");
selectEL.onclick = function() {
    console.log("click")
    list.classList.toggle("toggle-visible")
}

for (option of options) {
    option.onclick = function() {
        selectImg.innerHTML = this.innerHTML;
        list.classList.toggle("toggle-visible")

    }
}

// show menu and hide itdocument.