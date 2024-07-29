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

// show notifications

const notificationEl = document.querySelector(".notification-container");
const notificationItem = document.querySelector(".notification");
notificationEl.onclick = function(){
  this.classList.toggle("icon-not");
  notificationItem.classList.toggle("show-notification")
}

//  upload image
const addImageText = document.getElementById('add-image-text');
const profileImage = document.getElementById('profile-image');
const fileInput = document.getElementById('file-input');

addImageText.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    profileImage.src = imageUrl;
    addImageText.style.display = 'none';
  }
});

const menuEl = document.querySelector(".menu");
const asideEl = document.querySelector(".aside")
if (menuEl !== null || menuEl !== undefined) {
    menuEl.onclick = function() {
        asideEl.classList.toggle("show-aside")
    }
}