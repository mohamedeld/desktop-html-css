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
const helpMessage = document.querySelector(".to-help");
const redIcon = document?.querySelector("#redicon");

if (redIcon) {
  redIcon.addEventListener('mouseenter', function() {
    if (helpMessage) {
      helpMessage.classList.add("show-red-message");
    }

    // Add the full-screen background
    const overlay = document.createElement('div');
    overlay.classList.add('hover-overlay');
    document.body.appendChild(overlay);
  });

  redIcon.addEventListener('mouseleave', function() {
    if (helpMessage) {
      helpMessage.classList.remove("show-red-message");
    }

    // Remove the full-screen background
    const overlay = document.querySelector('.hover-overlay');
    if (overlay) {
      overlay.remove();
    }
  });
}