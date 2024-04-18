// Функция для проверки видимости элемента на странице
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Функция для обработки события прокрутки страницы
  function handleScrollAnimation() {
    var elements = document.querySelectorAll('.divhero, .herodev, .delivery');
    
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    });
  }
  
  // Обработка события прокрутки страницы для анимации появления блоков
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Инициализация проверки видимости блоков при загрузке страницы
  handleScrollAnimation();


  function handleScrollAnimation() {
    var elements = document.querySelectorAll('.assortiment');
    
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Добавление обработчика события прокрутки страницы для анимации появления блока
window.addEventListener('scroll', handleScrollAnimation);

// Инициализация проверки видимости блока при загрузке страницы
handleScrollAnimation();