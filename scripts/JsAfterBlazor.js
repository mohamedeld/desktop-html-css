document?.addEventListener('DOMContentLoaded', function() {
  const professorBtn = document.getElementById('professor-btn');
  const studentBtn = document.getElementById('student-btn');
  const ambassadorBtn = document.getElementById('ambassador-btn');

  const professorQuestions = document.getElementById('question-large');
  const studentQuestions = document.getElementById('student-questions');
  const ambassadorQuestions = document.getElementById('ambassador-questions');

  function toggleActiveButton(button) {
      professorBtn.classList.remove('active');
      studentBtn.classList.remove('active');
      ambassadorBtn.classList.remove('active');
      button.classList.add('active');
  }

  function showQuestions(questionsDiv) {
      professorQuestions.style.display = 'none';
      studentQuestions.style.display = 'none';
      ambassadorQuestions.style.display = 'none';
      questionsDiv.style.display = 'block';
  }

  professorBtn?.addEventListener('click', function() {
      toggleActiveButton(this);
      showQuestions(professorQuestions);
  });

  studentBtn?.addEventListener('click', function() {
      toggleActiveButton(this);
      showQuestions(studentQuestions);
  });

  ambassadorBtn?.addEventListener('click', function() {
      toggleActiveButton(this);
      showQuestions(ambassadorQuestions);
  });
});

    const tabs = document.querySelectorAll('.control-number-item p');
    const contentContainers = document.querySelectorAll('.content-container');
    //console.log(tabs)
    tabs?.forEach((tab, index) => {
        tab?.addEventListener('click', (event) => {
            //console.log("click")

            event.preventDefault();
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');

            contentContainers.forEach(container => container.style.display = 'none');
            contentContainers[index].style.display = 'block';
        });
    });

    const menuEl = document.querySelector(".menu");
    const asideEl = document.querySelector(".aside")
    if (menuEl !== null || menuEl !== undefined) {
        //console.log("menuEl")
        //console.log(menuEl)
        menuEl?.addEventListener('click', (event) => {
            asideEl.classList.toggle("show-aside")
        })
    }

    
// Function to generate a unique ID
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Initialize dragDrops array
let dragDrops = [];

// Function to initialize drag and drop functionality
function initDragAndDrop() {
  // Find all .drag-drop elements and assign unique IDs
  document.querySelectorAll(".drag-drop").forEach((item, index) => {
    item.id = `drag-drop-${index}`;
    item.setAttribute("draggable", true);
    dragDrops.push(item);
  });

  // Add event listeners to all .drag-drop elements
  dragDrops.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });

  const dropArea = document.getElementById("dropArea");
  dropArea?.addEventListener("dragover", dragOver);
  dropArea?.addEventListener("drop", drop);
}

// Call initDragAndDrop function after DOM content has loaded
document.addEventListener("DOMContentLoaded", initDragAndDrop);

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragEnd() {}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  const id = e.dataTransfer.getData("text/plain");
  const movedElement = document.getElementById(id);

  if (movedElement) {
    const dropArea = document.getElementById("dropArea");

    // Find the position where the element was dropped
    let dropPosition;
    const targetElement = e.target.closest(".drag-drop");
    if (targetElement) {
      dropPosition = Array.from(dropArea.children).indexOf(targetElement);
    } else {
      // If dropped outside of any element, append to the end
      dropPosition = dropArea.children.length;
    }

    // Remove the moved element from its current position
    movedElement.remove();

    // Insert the moved element at the new position
    dropArea.insertBefore(movedElement, dropArea.children[dropPosition]);

    // Update dragDrops array
    dragDrops = Array.from(document.querySelectorAll(".drag-drop"));
  }
}

    // show notifications

    const notificationEl = document.querySelector(".notification-container");
    const notificationItem = document.querySelector(".notification");
    console.log("notificationEl")
    console.log(notificationEl)
    console.log(notificationItem)
    notificationEl?.addEventListener('click', (event) => {
        notificationEl.classList.toggle("icon-not");
        notificationItem.classList.toggle("show-notification")
    })
    //  upload image
    const addImageText = document.getElementById('add-image-text');
    const profileImage = document.getElementById('profile-image');
    const fileInput = document.getElementById('file-input');
    //console.log("addImageText")
    //console.log(addImageText)
    addImageText?.addEventListener('click', () => {
        console.log("addImageText clic")
        fileInput.click();
    });
    fileInput?.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            profileImage.src = imageUrl;
            //addImageText.style.display = 'none';
        }
    });

    const tabsArb = document.querySelectorAll(".paypal-header li");
    const contentContainersArb = document.querySelectorAll('.content-container');
    //console.log("tabsArb")
    //console.log(tabsArb)
    // Ensure the first tab is active and its content is shown on initial load
    tabsArb[0]?.classList?.add('active'); // Make sure the first tab is active
    contentContainersArb.forEach((container, index) => {
        container.style.display = index === 0 ? 'block' : 'none'; // Show first content container, hide others
    });

    tabsArb?.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            tabsArb.forEach(tab => tab.classList.remove('active')); // Remove active class from all tabs
            tab.classList.add('active'); // Add active class to clicked tab

            contentContainersArb?.forEach(container => container.style.display = 'none'); // Hide all content containers
            contentContainersArb[index].style.display = 'block'; // Show clicked tab's corresponding content container
        });
    });

    //--------------------------------------------------------------------------------------------------------

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
      newDiv.draggable = true;
      newDiv.id = `new-drag-drop-${generateUniqueId()}`;
    
      newDiv.innerHTML = `
          <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
          <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
          <div class="trash-icon"><button onclick="deleteItem(this)"><img src="./images/icons/trash.svg" alt="trash icon" /></button></div>
      `;
    
      newDiv.addEventListener("dragstart", dragStart);
      newDiv.addEventListener("dragend", dragEnd);
    
      element.closest(".drag-drop").before(newDiv);
    
      // Update dragDrops array
      dragDrops.push(newDiv);
    }
    function addVariableItem2(element) {
      var newDiv = document.createElement("div");
      newDiv.className = "area-form-item drag-drop";
      // newDiv.draggable = true;
      // newDiv.id = `new-drag-drop-${generateUniqueId()}`;
  
      newDiv.innerHTML = `
          <input type="text" class="form-control general-control second" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
          <div class="trash-icon"><button onclick="deleteItem(this)"><img src="./images/icons/trash.svg" alt="trash icon" /></button></div>
      `;
      newDiv.style.marginTop='10px'
      // Insert the new div before the current "add-variable" element
      const areaFormItem = element?.closest(".form-item-outer-area");
      areaFormItem?.insertBefore(newDiv, areaFormItem.firstChild);

  }
  

    function deleteItem(element) {
        element.closest(".drag-drop").remove();
    }

    function addNewSection() {
      // Create a new div element
      const newSection = document.createElement("div");
      newSection.classList.add("data-section");
      newSection.id = `new-question-section-${generateUniqueId()}`;
    
      // Add the necessary HTML content to the new section
      newSection.innerHTML = `
        <form class="form" id="dropArea">
          <div class="drag-drop" draggable="true">
            <img src="./images/icons/dragdrop.svg" alt="drag drop icon" />
            <input type="text" class="form-control general-control" placeholder="العبارة ( مثال : ما سنك؟ )">
          </div>
          <div class="drag-drop" draggable="true">
            <img src="./images/icons/dragdrop.svg" alt="drag drop icon" />
            <input type="text" class="form-control general-control second" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
            <div class="add-variable" onclick="addVariableItem(this)">
              
              <p style="padding:'20px'"> </p>
            </div>
          </div>
          <div class="drag-drop" draggable="true">
            <img src="./images/icons/dragdrop.svg" alt="drag drop icon" />
            <input type="text" class="form-control general-control" placeholder="المتغير الثاني ( مثال : من 20 ل25 سنة )">
            <div class="add-variable">
              <img src="./images/icons/plus.svg" alt="plus icon" />
              <p onclick="addVariableItem(this)">أضف متغير</p>
            </div>
          </div>
        </form>
      `;
      newSection.style.marginTop = "20px";
    
      // Append the new section to the sections container
      const sectionsContainer = document.querySelector(".sections-container");
      sectionsContainer.appendChild(newSection);
    
      // Initialize drag and drop for the new section
      initDragAndDrop1(newSection);
    }
    
    function initDragAndDrop1(container) {
      // Find all .drag-drop elements within the container and assign unique IDs
      const dragDrops = container?.querySelectorAll(".drag-drop");
    
      dragDrops?.forEach((item, index) => {
        item.id = `drag-drop-${index}-${generateUniqueId()}`; // Ensure unique IDs
        item.setAttribute("draggable", true);
    
        // Clear any existing event listeners to avoid duplicates
        item.removeEventListener("dragstart", dragStart);
        item.removeEventListener("dragend", dragEnd);
    
        // Add new event listeners
        item.addEventListener("dragstart", dragStart);
        item.addEventListener("dragend", dragEnd);
      });
    
      const dropArea = container?.querySelector("#dropArea");
      if (dropArea) {
        dropArea?.addEventListener("dragover", dragOver);
        dropArea?.addEventListener("drop", drop1);
      }
    }
    
    function drop1(e) {
      e.preventDefault();
    
      const id = e.dataTransfer.getData("text/plain");
      const movedElement = document.getElementById(id);
      const dropArea = e.target.closest("#dropArea"); // Get the closest drop area
    
      if (movedElement && dropArea) {
        // Find the position where the element was dropped
        let dropPosition;
        const targetElement = e.target.closest(".drag-drop");
        if (targetElement) {
          dropPosition = Array.from(dropArea.children).indexOf(targetElement);
        } else {
          // If dropped outside of any element, append to the end
          dropPosition = dropArea.children.length;
        }
    
        // Remove the moved element from its current position
        movedElement.remove();
    
        // Insert the moved element at the new position
        dropArea.insertBefore(movedElement, dropArea.children[dropPosition]);
      }
    }
    
    // Call initDragAndDrop function after DOM content has loaded
    document.addEventListener("DOMContentLoaded", () => {
      initDragAndDrop(); // Initialize for existing content
    });
    let sectionCount = 0;
    
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    const randomNums = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس", "السابع", "الثامن", "التاسع", "العاشر", "الحادي عشر", "الثاني عشر", "الثالث عشر", "الرابع عشر", "الخامس عشر", "السادس عشر", "السابع عشر", "الثامن عشر", "التاسع عشر", "العشرون", "الحادي والعشرون", "الثاني والعشرون", "الثالث والعشرون", "الرابع والعشرون", "الخامس والعشرون", "السادس والعشرون", "السابع والعشرون", "الثامن والعشرون", "التاسع والعشرون", "الثلاثون", "الحادي والثلاثون", "الثاني والثلاثون", "الثالث والثلاثون", "الرابع والثلاثون", "الخامس والثلاثون", "السادس والثلاثون", "السابع والثلاثون", "الثامن والثلاثون", "التاسع والثلاثون", "الأربعون", "الحادي والأربعون", "الثاني والأربعون", "الثالث والأربعون", "الرابع والأربعون", "الخامس والأربعون", "السادس والأربعون", "السابع والأربعون", "الثامن والأربعون", "التاسع والأربعون", "الخمسون"];
    
    
function addNewSectionSecondContainer() {
  // Create a new div element
  const newSection = document.createElement("div");
  newSection.classList.add("main-data-content");
  newSection.id = `new-question-section-${generateUniqueId()}`;

  sectionCount++;
  const randomColor = getRandomColor();
  const getRandomNum = randomNums[sectionCount]
  const sectionTitle = `المحور ${getRandomNum}`;

  // Add the necessary HTML content to the new section
  newSection.innerHTML = `
    <div class="inner-main-content">
                      <div class="first-part" style="background-color: ${randomColor};">
                        <p style="color:white">${sectionTitle}</p>
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
                          <div class="concepts-container-item" id="dropArea">
                            <div class="drag-drop" draggable="true">
                              <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
                              <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
                              <div class="trash-icon"><button onclick="deleteItem(this)"><img src="./images/icons/trash.svg" alt="trash icon" /></button></div>
                            </div>
                            <div class="drag-drop" draggable="true">
                              <img src="./images/icons/dragdrop.svg" alt="drag drop icon"/>
                              <input type="text" class="form-control general-control second" id="exampleInputName" aria-describedby="textHelp" placeholder="المتغير الأول ( مثال : من 20 ل25 سنة )">
                              <div class="add-variable">
                                <img src="./images/icons/plus.svg" alt="plus icon"/>
                                <p onclick="addVariableItem(this)" id="add-variable-small">أضف متغير</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inner-main-drag"></div>
  `;
  newSection.style.marginTop = "20px";
  newSection.style.border = `1px solid ${randomColor}`;

  // Insert the new section after the first one
  const firstSection = document.querySelector(".section-second-container");
  firstSection.appendChild(newSection);
  initDragAndDrop1(newSection);
}

document.addEventListener("DOMContentLoaded", () => {
  const secondContainer = document.querySelector(".section-second-container");
  initDragAndDrop1(secondContainer);
});

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


    // cancel button
    const returnedDelete = document.querySelector(".return-outline-delete");
    const cancelBtn = document.getElementById('cancel-btn');
    const mainModal = document.querySelector('.main-modal');
    const mainModalDelete = document.querySelector('.main-modal-delete');
    const mainModalEdit = document.querySelector('.main-modal-edit');
    const modalContainer = document.querySelector('.modal-container');
    const questionButton = document.querySelector(".add-question-desc");
    const deleteQuestionBtn = document.querySelector(".delete-question-btn");
    const editQuestionBtn = document.querySelector(".edit-question-btn");
    cancelBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        mainModal.style.display = 'flex';
        modalContainer.classList.add('show');
    });
    questionButton?.addEventListener('click', (e) => {
        e.preventDefault();
        mainModal.style.display = 'flex';
        mainModal.classList.add('show');
    });
    deleteQuestionBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        mainModalDelete.style.display = 'flex';
        modalContainer.classList.add('show');
    });
    editQuestionBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        mainModalEdit.style.display = 'flex';
        modalContainer.classList.add('show');
    });
    cancelBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        mainModal.style.display = 'flex';
        modalContainer.classList.add('show');
    });

    // Add event listeners to the buttons in the modal
    //const orderSolidBtn = document.querySelector('.order-solid');
    //orderSolidBtn?.addEventListener('click', (e) => {
    //    e.preventDefault();
    //    // Add your logic for canceling the order here
    //    mainModal.style.display = 'none';
    //    modalContainer.classList.remove('show');
    //});

    // edit.js



    const returnOutlineBtn = document.querySelector('.return-outline');
    const returnOutlineEditBtn = document.querySelector('.return-outline-edit');

    returnOutlineEditBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your logic for canceling the order here
        mainModalEdit.style.display = 'none';
        modalContainer.classList.remove('show');
    });

    returnOutlineBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your logic for returning to the previous page here
        mainModal.style.display = 'none';
        modalContainer.classList.remove('show');
    });
    returnedDelete?.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your logic for returning to the previous page here
        mainModalDelete.style.display = 'none';
        modalContainer.classList.remove('show');
    });

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
            lit += `<li class="day">${i}</li>`;
        }
        if (currdate) {
            currdate.innerText = `${months[month]} ${year}`;
        }
        if (day) {
            day.innerHTML = lit;
        }
        const days = document.querySelectorAll('.day');
        days.forEach(day => {
            day.addEventListener('click', function () {
                // Remove 'selected-day' class from all days
                days.forEach(d => d.classList.remove('selected-day'));
                // Add 'selected-day' class to the clicked day
                this.classList.add('selected-day');
            });
        });
        const currentDay = days[date?.getDate() - 1];
        currentDay?.classList?.add('selected-day');
    }

    manipulate();

    // Navigation functionality
    document.getElementById('arrowRight')?.addEventListener('click', () => {
        month++;
        if (month > 11) {
            year++;
            month = 0;
        }
        manipulate();
    });

    document.getElementById('arrowLeft')?.addEventListener('click', () => {
        month--;
        if (month < 0) {
            year--;
            month = 11;
        }
        manipulate();
    });




    // Get the required elements
    const profileImageAdmin = document.getElementById('profile-image');
    const deleteImageButton = document.getElementById('delete-image');
    const addImageButton = document.getElementById('add-image');

    // Add click event listener to the delete image button
    deleteImageButton?.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove the image
        profileImageAdmin.src = '../images/icons/profileImage.svg';
        profileImageAdmin.alt = 'default image';
        deleteImageButton.style.display = 'none';
        addImageButton.style.display = 'inline-block';
    });

    // Add click event listener to the add image button
    addImageButton?.addEventListener('click', (e) => {
        e.preventDefault();
        // Create a file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none'
        // Add an event listener to the file input
        fileInput.addEventListener('change', (e) => {
            e.preventDefault();
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);

            // Update the image source and alt text
            profileImageAdmin.src = imageUrl;
            profileImageAdmin.alt = file.name;
            deleteImageButton.style.display = 'inline-block';
            addImageButton.style.display = 'none';
        });

        // Append the file input to the document
        profileImageAdmin.parentNode.insertBefore(fileInput, profileImageAdmin.nextSibling);

        // Click the file input to open the file dialog
        fileInput.click();
    });

    const showModalButtons = document.querySelectorAll('.show-modal');
    const modal = document.querySelector('.modal-detail-container');
    const closeButton = document.querySelector('.error-icon-detail');

    showModalButtons?.forEach(button => {
        button?.addEventListener('click', (e) => {
            e.preventDefault()
            modal.style.display = 'block';
        });
    });

    closeButton?.addEventListener('click', (e) => {
        e.preventDefault()
        modal.style.display = 'none';
    });

    window?.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    const deleteAccountButton = document.getElementById('delete-account');
    const returnButton = document.querySelector('.return-outline');
    //const orderButton = document.querySelector('.order-solid');

    //orderButton?.addEventListener('click', (e) => {
    //    e?.preventDefault();
    //    // Add your order cancellation logic here
    //    mainModal.style.display = 'none';
    //});
    deleteAccountButton?.addEventListener('click', (e) => {
        e?.preventDefault();
        mainModal.style.display = 'flex';
    });

    returnButton?.addEventListener('click', (e) => {
        e?.preventDefault();
        mainModal.style.display = 'none';
    });



    const confirmEmail = document.querySelector(".confirm-item-email");
    const paidAccount = document.querySelector(".paid-account");
    const paidPaypalAccount = document.querySelector(".paypal-paid-account");

    paidAccount?.addEventListener('click', (e) => {
        e.preventDefault();
        confirmEmail.classList.toggle("confirm-paid-email");
        paidPaypalAccount.classList.remove("active");

    })
    paidPaypalAccount?.addEventListener('click', (e) => {
        e.preventDefault();
        confirmEmail.classList.add("confirm-paid-email");
        this.classList.add("active");
        confirmEmail.classList.remove("active");

    })

    const mainRate = document.querySelector(".main-outer-rate");
    const mainRateBtn = document.querySelector(".solid-button-rate");
    const closeRateBtn = document.querySelector(".close-rate-modal");

    mainRateBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        mainRate.style.display = "block"
    })
    closeRateBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        mainRate.style.display = "none"
    })



