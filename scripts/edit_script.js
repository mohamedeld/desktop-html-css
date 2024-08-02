const menuEl = document.querySelector(".menu");
const asideEl = document.querySelector(".aside")
if (menuEl !== null || menuEl !== undefined) {
    menuEl.onclick = function() {
        asideEl.classList.toggle("show-aside")
    }
}
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

addImageText?.addEventListener('click', () => {
  fileInput.click();
});

fileInput?.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    profileImage.src = imageUrl;
    addImageText.style.display = 'none';
  }
});
const helpMessages = document.querySelectorAll(".to-help");
const icons = document.querySelectorAll("#redicon");

icons.forEach((icon, index) => {
  icon.addEventListener('mouseenter', () => {
    if (helpMessages[index]) {
      helpMessages[index].classList.add("show-red-message");
    }

    // Add the full-screen background
    const overlay = document.createElement('div');
    overlay.classList.add('hover-overlay');
    document.body.appendChild(overlay);
  });

  icon.addEventListener('mouseleave', () => {
    if (helpMessages[index]) {
      helpMessages[index].classList.remove("show-red-message");
    }

    // Remove the full-screen background
    const overlay = document.querySelector('.hover-overlay');
    if (overlay) {
      overlay.remove();
    }
  });
});