// Получаем элементы для работы
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const ctaButton = document.querySelector(".cta-button");
const signUpButton = document.querySelector(".sign-up-button");
const costButton = document.querySelector(".cost-button");

// Функция для открытия формы
function openModal() {
  modal.style.display = "flex";
}

// Функция для закрытия формы
function closeModalFunction() {
  modal.style.display = "none";
}

// Открытие формы по клику на кнопки
ctaButton.addEventListener("click", openModal);
signUpButton.addEventListener("click", openModal);
costButton.addEventListener("click", openModal);

// Закрытие формы по клику на крестик
closeModal.addEventListener("click", closeModalFunction);

// Закрытие формы по клику вне формы
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModalFunction();
  }
});
