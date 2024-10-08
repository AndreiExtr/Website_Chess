const gridContainer = document.querySelector('.grid-container');
const gridItems = gridContainer.querySelectorAll('.slider-item'); // Только элементы с классом 'slider-item'
const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
const indicators = document.querySelectorAll('.indicator');

let currentIndexV = 0;
const totalItems = gridItems.length; // Количество элементов слайдера

// Функция для перемещения слайдера
function scrollSliderV(direction) {
  currentIndexV = (currentIndexV + direction + totalItems) % totalItems; // Новая позиция
  const offset = -currentIndexV * (gridItems[0].offsetWidth + 40); // Смещение с учетом отступа
  gridContainer.style.transform = `translateX(${offset}px)`; // Применяем трансформацию

  // Обновляем индикаторы
  setActiveIndicator(currentIndexV);

  // Обновляем кнопки
  updateArrows();
}

// Функция для обновления индикаторов
function setActiveIndicator(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

// Функция для обновления состояния стрелок
function updateArrows() {
  leftArrow.classList.toggle('inactive', currentIndexV === 0);
  leftArrow.classList.toggle('active', currentIndexV !== 0);
  rightArrow.classList.toggle('inactive', currentIndexV === totalItems - 1);
  rightArrow.classList.toggle('active', currentIndexV !== totalItems - 1);
}

// Делаем первый индикатор активным по умолчанию
setActiveIndicator(0);

// Обновляем состояние стрелок по умолчанию
updateArrows();

// Привязываем обработчики событий к стрелкам
leftArrow.addEventListener('click', () => scrollSliderV(-1)); // Перемещаем влево
rightArrow.addEventListener('click', () => scrollSliderV(1)); // Перемещаем вправо


//------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider-users'); // Контейнер слайдера
  const gridItems = document.querySelectorAll('.user'); // Элементы слайдера
  const leftArrowTop = document.querySelector('.slider-controls-top .slider-left'); // Левая стрелка
  const rightArrowTop = document.querySelector('.slider-controls-top .slider-right'); // Правая стрелка
  const sliderCounter = document.getElementById('slider-counter'); // Счетчик
  const itemsPerSlide = 3; // Количество видимых блоков в одном слайде

  let currentIndex = 0; // Текущий индекс слайда (начинаем с первого)
  const totalItems = gridItems.length; // Общее количество пользователей
  const totalSlides = Math.ceil(totalItems / itemsPerSlide); // Общее количество слайдов

  // Функция для перемещения слайдера
  function scrollSlider(direction) {
      currentIndex = Math.min(Math.max(currentIndex + direction, 0), totalSlides - 1); // Обновляем текущий индекс
      const offset = -currentIndex * (gridItems[0].offsetWidth * 3 + 40); // Смещение с учетом отступа
      sliderContainer.style.transform = `translateX(${offset}px)`; // Применяем трансформацию

      // Обновляем текст счетчика
      updateCounter(); // Обновляем счетчик

      // Обновляем состояние стрелок
      updateArrows();
  }

  // Функция для обновления текста счетчика
  function updateCounter() {
      const currentVisible = Math.min((currentIndex + 1) * itemsPerSlide, totalItems); // Считаем, сколько блоков отображается
      sliderCounter.textContent = `${currentVisible} / ${totalItems}`; // Пример: "3 / 6"
  }

  // Функция для обновления состояния стрелок
  function updateArrows() {
      leftArrowTop.classList.toggle('inactive', currentIndex === 0); // Отключаем левую стрелку на первом слайде
      leftArrowTop.classList.toggle('active', currentIndex !== 0);
      rightArrowTop.classList.toggle('inactive', currentIndex === totalSlides - 1); // Отключаем правую стрелку на последнем
      rightArrowTop.classList.toggle('active', currentIndex !== totalItems - 1);
  }

  // Инициализация по умолчанию
  updateCounter(); // Обновляем счетчик при старте (например, "3 / 6")
  updateArrows(); // Обновляем состояние стрелок при старте

  // Привязываем обработчики событий к стрелкам
  leftArrowTop.addEventListener('click', () => scrollSlider(-1)); // Перемещаем влево
  rightArrowTop.addEventListener('click', () => scrollSlider(1)); // Перемещаем вправо
});

//------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider-users'); // Контейнер слайдера
  const gridItems = document.querySelectorAll('.user'); // Элементы слайдера
  const leftArrowBottom = document.querySelector('.slider-controls-bottom .slider-left'); // Левая стрелка
  const rightArrowBottom = document.querySelector('.slider-controls-bottom .slider-right'); // Правая стрелка
  const sliderCounter = document.getElementById('slider-counters'); // Счетчик
  const itemsPerSlide = 1; // Количество видимых блоков в одном слайде

  let currentIndex = 0; // Текущий индекс слайда (начинаем с первого)
  const totalItems = gridItems.length; // Общее количество пользователей
  const totalSlides = totalItems; // Общее количество слайдов (по 1 блоку в каждом)

  // Функция для перемещения слайдера
  function scrollSlider(direction) {
      currentIndex = Math.min(Math.max(currentIndex + direction, 0), totalSlides - 1); // Обновляем текущий индекс
      const offset = -currentIndex * (gridItems[0].offsetWidth + 40); // Смещение с учетом отступа
      sliderContainer.style.transform = `translateX(${offset}px)`; // Применяем трансформацию

      // Обновляем текст счетчика
      updateCounter(); // Обновляем счетчик

      // Обновляем состояние стрелок
      updateArrows();
  }

  // Функция для обновления текста счетчика
  function updateCounter() {
      sliderCounter.textContent = `${currentIndex + 1} / ${totalItems}`; // Пример: "1 / 6"
  }

  // Функция для обновления состояния стрелок
  function updateArrows() {
      leftArrowBottom.classList.toggle('inactive', currentIndex === 0); // Отключаем левую стрелку на первом слайде
      leftArrowBottom.classList.toggle('active', currentIndex !== 0);
      rightArrowBottom.classList.toggle('inactive', currentIndex === totalSlides - 1); // Отключаем правую стрелку на последнем слайде
      rightArrowBottom.classList.toggle('active', currentIndex !== totalSlides - 1);
  }

  // Инициализация по умолчанию
  updateCounter(); // Обновляем счетчик при старте
  updateArrows(); // Обновляем состояние стрелок при старте

  // Привязываем обработчики событий к стрелкам
  leftArrowBottom.addEventListener('click', () => scrollSlider(-1)); // Перемещаем влево
  rightArrowBottom.addEventListener('click', () => scrollSlider(1)); // Перемещаем вправо
});







