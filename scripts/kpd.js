const images = [
  "/KPD100Lending1/img/дом.png",
  "/KPD100Lending1/img/fon-dom.png",
  "/KPD100Lending1/img/fon-dom.png",
];

let currentIndex = 0;
const container = document.querySelector(".container");

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  container.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Меняем изображение каждые 3 секунды
setInterval(changeBackground, 3000);
