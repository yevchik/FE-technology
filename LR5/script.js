
const form = document.getElementById("user-form");

const patterns = {
    fullName: /^[А-ЯІЇЄҐа-яіїєґ'’ -]+$/u,
    birthDate: /^\d{2}\.\d{2}\.\d{4}$/,
    address: /^м\.\s*[А-ЯІЇЄҐа-яіїєґ'’ -]+$/u,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
    telegram: /^@[A-Za-z][A-Za-z0-9_]{4,31}$/
};

const errorTexts = {
    fullName: "Введіть ПІБ українськими літерами.",
    birthDate: "Формат дати: ДД.ММ.РРРР.",
    address: "Формат адреси: м. Київ.",
    email: "Введіть E-mail у форматі example@gmail.com.",
    telegram: "Telegram має починатися з @ і містити від 5 символів."
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const values = {};

    for (const fieldId in patterns) {
        const input = document.getElementById(fieldId);
        const value = input.value.trim();
        const errorMessage =
            input.parentElement.querySelector(".error-message");

        values[fieldId] = value;

        if (!patterns[fieldId].test(value)) {
            input.classList.add("invalid");
            errorMessage.textContent = errorTexts[fieldId];
            isValid = false;
        } else {
            input.classList.remove("invalid");
            errorMessage.textContent = "";
        }
    }

    if (isValid) {
        const result = `
ПІБ: ${values.fullName}
Дата народження: ${values.birthDate}
Адреса: ${values.address}
E-mail: ${values.email}
Telegram: ${values.telegram}
        `;

        alert(result);
    }
});

// Завдання 2. Інтерактивна таблиця 6x6

const table = document.getElementById("interactive-table");
const colorPicker = document.getElementById("color-picker");

// Номер клітинки для варіанта 1
const targetNumber = 1;

// Генерація таблиці
for (let row = 0; row < 6; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 6; col++) {
        const td = document.createElement("td");
        const number = row * 6 + col + 1;

        td.textContent = number;

        if (number === targetNumber) {
            td.classList.add("target-cell");

            // Наведення: випадковий колір
            td.addEventListener("mouseover", function () {
                const randomColor =
                    "#" + Math.floor(Math.random() * 16777216)
                        .toString(16)
                        .padStart(6, "0");

                td.style.backgroundColor = randomColor;
            });

            // Одинарний клік: колір із палітри
            td.addEventListener("click", function () {
                td.style.backgroundColor = colorPicker.value;
            });

            // Подвійний клік: зміна кольору рядка
            td.addEventListener("dblclick", function () {
                const cells = tr.querySelectorAll("td");

                cells.forEach(function (cell) {
                    cell.style.backgroundColor = colorPicker.value;
                });
            });
        }

        tr.appendChild(td);
    }

    table.appendChild(tr);
}
