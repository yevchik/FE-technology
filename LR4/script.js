
const birthInfo = document.getElementById("birth-info");

const educationInfo = document.querySelector(".education-info");

birthInfo.addEventListener("click", function () {
    birthInfo.classList.toggle("birth-active");
});
educationInfo.addEventListener("click", function () {
    educationInfo.classList.toggle("education-active");
});

// Завдання 2

const imageContainer = document.getElementById("new-image-container");
const addBtn = document.getElementById("add-btn");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const deleteBtn = document.getElementById("delete-btn");

const initialWidth = 400;
const step = 50;
const minWidth = 100;
const maxWidth = 800;

addBtn.addEventListener("click", function () {
    if (document.getElementById("new-image")) {
        return;
    }

    const img = document.createElement("img");

    img.id = "new-image";
    img.src = "images/1.jpg";
    img.alt = "Додаткове зображення Києва";
    img.width = initialWidth;

    imageContainer.appendChild(img);
});
increaseBtn.addEventListener("click", function () {
    const img = document.getElementById("new-image");

    if (img) {
        img.width = Math.min(img.width + step, maxWidth);
    }
});
decreaseBtn.addEventListener("click", function () {
    const img = document.getElementById("new-image");

    if (img) {
        img.width = Math.max(img.width - step, minWidth);
    }
});
deleteBtn.addEventListener("click", function () {
    const img = document.getElementById("new-image");

    if (img) {
        img.remove();
    }
});

