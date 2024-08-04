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

function addVariable() {
  var newDiv = document.createElement("div");
  newDiv.className = "drag-drop";
  newDiv.innerHTML = `
    <img src="./images/icons/dragdrop.svg" alt="drag drop icon" id="add_var" />
    <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
    <div class="add-variable" id="add_var" onclick="addVariable()">
      <img src="./images/icons/plus.svg" alt="plus icon" />
      <p>أضف متغير</p>
    </div>
  `;
  document.querySelector(".drag-drop").after(newDiv);
}

function addVariableItem(element) {
  var newDiv = document.createElement("div");
  newDiv.className = "drag-drop";
  newDiv.innerHTML = `
    <img src="./images/icons/dragdrop.svg" alt="drag drop icon" />
    <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
    <div class="trash-icon"><button onclick="deleteItem(this)"><img src="./images/icons/trash.svg" alt="trash icon" /></button></div>
  `;
  // newDiv.id = "add_var";
  element.closest(".drag-drop").before(newDiv);
}

function deleteItem(element) {
  element.closest(".drag-drop").remove();
}

function addNewSection() {
  // Create a new div element
  const newSection = document.createElement('div');
  newSection.classList.add('data-section');
  newSection.id = 'new-question-section';

  // Add the necessary HTML content to the new section
  newSection.innerHTML = `
    <form class="form">
      <div class="drag-drop">
        <img src="./images/icons/dragdrop.svg" alt="drog drop  icon" id="add_var"/>
        <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
      </div>
      <div class="drag-drop">
        <img src="./images/icons/dragdrop.svg" alt="drag drop icon" id="add_var"/>
        <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
        <div class="add-variable" id="add_var">
          <img src="./images/icons/plus.svg" alt="plus icon"/>
          <p>أضف متغير</p>
        </div>
      </div>
      <div class="drag-drop">
        <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
        <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الثاني ( مثال : من 20 ل25 سنة )">
        <div class="add-variable">
          <img src="./images/icons/plus.svg" alt="plus icon"/>
          <p onclick="addVariable()">أضف متغير</p>
        </div>
      </div>
    </form>
  `;
  newSection.style.marginTop = '20px';

  // Insert the new section after the first one
  const firstSection = document.getElementById('first-question-section');
  firstSection.parentNode.insertBefore(newSection, firstSection.nextSibling);
}
function addNewSectionSecondContainer() {
  // Create a new div element
  const newSection = document.createElement('div');
  newSection.classList.add('main-data-content');
  newSection.id = 'new-question-section';

  // Add the necessary HTML content to the new section
  newSection.innerHTML = `
    <div class="inner-main-content">
                      <div class="first-part">
                        <p>المحور الأول:</p>
                      </div>
                      <form class="form">
                        <div class="form-item main-item">
                          <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
                          
                        </div>
                        <div class="form-item main-item">
                          <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
                          
                        </div>
                        <div class="form-item">
                          <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
                          
                        </div>
                    </div>
                    <div class="first-part-container">
                      <header>
                        <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
                        <p>البعد الاول</p>
                      </header>
                      <div class="form">
                        <div class="form-item">
                          <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
                          
                        </div>
                        <div class="concepts-container">
                          <p class="concepts">العبارات</p>
                          <div class="concepts-container-item">
                            <div class="drag-drop">
                              <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
                              <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
                              <div class="trash-icon"><button onclick="deleteItem(this)"><img src="./images/icons/trash.svg" alt="trash icon" /></button></div>
                            </div>
                            <div class="drag-drop">
                              <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
                              <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
                              <div class="add-variable">
                                <img src="./images/icons/plus.svg" alt="plus icon"/>
                                <p onclick="addVariableItem(this)">أضف متغير</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inner-main-drag"></div>
  `;
  newSection.style.marginTop = '20px';

  // Insert the new section after the first one
  const firstSection = document.getElementById('second-question-section');
  firstSection.parentNode.insertBefore(newSection, firstSection.nextSibling);
}
function addNewSectionThirdContainer() {
  // Create a new div element
  const newSection = document.createElement('div');
  newSection.classList.add('main-data');
  newSection.id = 'new-question-section';

  // Add the necessary HTML content to the new section
  newSection.innerHTML = `
    <div class="main-data-content section-two">
                    <div class="inner-main-content">
                      <div class="first-part section-part">
                        <p>المحور الأول:</p>
                      </div>
                      <form class="form">
                        <div class="form-item main-item">
                          <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
                          
                        </div>
                        <div class="form-item main-item">
                          <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
                          
                        </div>
                        <div class="form-item">
                          <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
                          
                        </div>
                    </div>
                    <div class="first-part-container">
                      <header>
                        <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
                        <p>البعد الاول</p>
                      </header>
                      <div class="form">
                        <div class="form-item">
                          <input type="text" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="العبارة ( مثال : ما سنك؟ )">
                          
                        </div>
                        <div class="concepts-container">
                          <p class="concepts">العبارات</p>
                          <div class="concepts-container-item">
                            <div class="drag-drop">
                              <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
                              <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
                              <div class="trash-icon"><button onclick="deleteItem(this)"><img src="./images/icons/trash.svg" alt="trash icon" /></button></div>
                            </div>
                            <div class="drag-drop">
                              <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
                              <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
                              <div class="add-variable">
                                <img src="./images/icons/plus.svg" alt="plus icon" onclick="deleteItem(this)"/>
                                <p onclick="addVariableItem(this)">أضف متغير</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inner-main-drag"></div>
                  </div>
  `;
  newSection.style.marginTop = '20px';

  // Insert the new section after the first one
  const firstSection = document.getElementById('third-question-section');
  firstSection.parentNode.insertBefore(newSection, firstSection.nextSibling);
}

function addNewFormItem() {
  const newFormItem = document.createElement('div');
  newFormItem.classList.add('add-new-sectionn');

  newFormItem.innerHTML = `
    <div class="form-item1">
                          
                            <input type="email" class="form-control general-control" id="exampleInputName" aria-describedby="textHelp" placeholder="اكتب فرضيات البحث (مثال: تأثير وسائل التواصل الاجتماعي على الصحة العقلية) ">
                          </div>
                          <div class="add-section" id="add_var" onclick="addNewFormItem()">
                            <img src="./images/icons/plus.svg" alt="add plus icon"/>
                            <p>أضف فقرة</p>
                          </div>
  `;
  const addNewSectionElement = document.querySelector('.add-new-sectionn');
  addNewSectionElement.parentNode.insertBefore(newFormItem, addNewSectionElement);

}
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.getElementById("calendar-dates");
const currdate = document.getElementById("current-month-year");

// Array of month names in Arabic
const months = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];

// Function to generate the calendar
const manipulate = () => {
    let lastdate = new Date(year, month + 1, 0).getDate(); // Get the last date of the current month

    let lit = "";

    // Add dates of the current month
    for (let i = 1; i <= lastdate; i++) {
        lit += `<span class="day">${i}</span>`;
    }

    currdate.innerText = `${months[month]} ${year}`;
    day.innerHTML = lit;
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
      day.addEventListener('click', function() {
          // Remove 'selected-day' class from all days
          days.forEach(d => d.classList.remove('selected-day'));
          // Add 'selected-day' class to the clicked day
          this.classList.add('selected-day');
      });
  });
  const currentDay = days[date.getDate() - 1];
            currentDay.classList.add('selected-day');
}

manipulate();

// Navigation functionality
document.getElementById('arrowRight').addEventListener('click', () => {
    month++;
    if (month > 11) {
        year++;
        month = 0;
    }
    manipulate();
});

document.getElementById('arrowLeft').addEventListener('click', () => {
    month--;
    if (month < 0) {
        year--;
        month = 11;
    }
    manipulate();
});