const images = [
  "/img/mainImg/1.webp",
  "/img/mainImg/2.webp",
  "/img/mainImg/3.webp",
  "/img/mainImg/4.webp",
  "/img/mainImg/5.webp",
  "/img/mainImg/6.webp",
];

let currentIndex = 0;
let sliderInterval; // Переменная для хранения интервала
const container = document.querySelector(".container");

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  container.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Функция для запуска или остановки слайдера
function startSlider() {
  // Если ширина экрана >= 768px, запускаем слайдер
  if (window.innerWidth >= 768) {
    // Проверяем, запущен ли уже слайдер
    if (!sliderInterval) {
      sliderInterval = setInterval(changeBackground, 10000);
    }
  } else {
    // Останавливаем слайдер на мобильных устройствах и устанавливаем изображение для мобилок
    clearInterval(sliderInterval);
    sliderInterval = null; // Сбрасываем переменную
    container.style.backgroundImage = `url(/KPD100Lending1/img/fon-mobile.png)`; // Устанавливаем мобильное изображение
  }
}

// Запускаем слайдер при первой загрузке страницы
startSlider();

// Обновляем слайдер при изменении размера экрана
window.addEventListener("resize", () => {
  startSlider();
});
