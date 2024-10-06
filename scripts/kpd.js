const images = [
  "/KPD100Lending1/img/mainImg/1.webp",
  "/KPD100Lending1/img/mainImg/2.webp",
  "/KPD100Lending1/img/mainImg/3.webp",
  "/KPD100Lending1/img/mainImg/4.webp",
  "/KPD100Lending1/img/mainImg/5.webp",
  "/KPD100Lending1/img/mainImg/6.webp",
];

let currentIndex = 0;
const container = document.querySelector(".container");

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  container.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Меняем изображение каждые 3 секунды
setInterval(changeBackground, 3000);
