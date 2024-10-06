// Мобильный слайдер
const slidesMobile = document.querySelector(".slides-mobile");
const reviewsMobile = document.querySelectorAll(".review-mobile");
const sliderWrapperMobile = document.querySelector(".slider-wrapper-mobile");
let currentIndexMobile = 0;

// Функция для переключения отзывов на мобилке
function slideMobile(direction) {
  if (direction === "next") {
    currentIndexMobile++;
    if (currentIndexMobile >= reviewsMobile.length) {
      currentIndexMobile = 0; // Возвращаемся к первому отзыву
    }
  } else if (direction === "prev") {
    currentIndexMobile--;
    if (currentIndexMobile < 0) {
      currentIndexMobile = reviewsMobile.length - 1; // Переходим к последнему отзыву
    }
  }

  const offsetMobile = -currentIndexMobile * 100; // Смещение на 100% для каждого отзыва
  slidesMobile.style.transform = `translateX(${offsetMobile}%)`;

  // Динамическая высота для блока отзывов на мобилке
  const currentReviewHeight = reviewsMobile[currentIndexMobile].offsetHeight;
  sliderWrapperMobile.style.height = `${currentReviewHeight}px`;
}

// Инициализация высоты мобильного слайдера
window.addEventListener("resize", () => {
  const currentReviewHeight = reviewsMobile[currentIndexMobile].offsetHeight;
  sliderWrapperMobile.style.height = `${currentReviewHeight}px`;
});
window.dispatchEvent(new Event("resize")); // Устанавливаем высоту при загрузке

// Автоматическое переключение каждые 5 секунд на мобилке
let mobileInterval = setInterval(() => slideMobile("next"), 5000);

// Останавливаем автоматическое переключение при взаимодействии с пользователем
function resetMobileInterval() {
  clearInterval(mobileInterval);
  mobileInterval = setInterval(() => slideMobile("next"), 5000);
}

// Обработка кликов по стрелкам на мобилке
document.querySelector(".arrow-left-mobile").addEventListener("click", () => {
  slideMobile("prev");
  resetMobileInterval();
});

document.querySelector(".arrow-right-mobile").addEventListener("click", () => {
  slideMobile("next");
  resetMobileInterval();
});

// Десктопный слайдер
const slidesNew = document.querySelector(".slides-new");
const reviewBlocks = document.querySelectorAll(".review-block"); // Учитываем все блоки на десктопе
let currentIndexDesktop = 0;

// Функция для переключения блоков на десктопе
function slideDesktop(direction) {
  if (direction === "next") {
    currentIndexDesktop++;
    if (currentIndexDesktop >= reviewBlocks.length) {
      currentIndexDesktop = 0; // Возвращаемся к первому блоку
    }
  } else if (direction === "prev") {
    currentIndexDesktop--;
    if (currentIndexDesktop < 0) {
      currentIndexDesktop = reviewBlocks.length - 1; // Переходим к последнему блоку
    }
  }

  const offsetDesktop = -currentIndexDesktop * 100; // Смещение на 100% для каждого блока
  slidesNew.style.transform = `translateX(${offsetDesktop}%)`;
}

// Автоматическое переключение каждые 3 секунды на десктопе
let desktopInterval = setInterval(() => slideDesktop("next"), 3000);

// Останавливаем автоматическое переключение при взаимодействии с пользователем
function resetDesktopInterval() {
  clearInterval(desktopInterval);
  desktopInterval = setInterval(() => slideDesktop("next"), 3000);
}

// Обработка кликов по стрелкам на десктопе
document.querySelector(".arrow-left").addEventListener("click", () => {
  slideDesktop("prev");
  resetDesktopInterval();
});

document.querySelector(".arrow-right").addEventListener("click", () => {
  slideDesktop("next");
  resetDesktopInterval();
});
