// RootLab - JavaScript
// Основной файл скриптов

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация компонентов
    initNavigation();
    initBurgerMenu();
});

function initNavigation() {
    // Обработчик клика на кнопку "Обсудить проект"
    const discussBtn = document.querySelector('.btn-discuss');
    if (discussBtn) {
        discussBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Здесь может быть логика модального окна или редиректа
            console.log('Клик на Обсудить проект');
        });
    }
}

function initBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!burgerBtn || !mobileMenu) return;
    
    // Открытие/закрытие меню при клике на бургер
    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Закрытие меню при клике на ссылку
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!event.target.closest('header')) {
            if (burgerBtn.classList.contains('active')) {
                burgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
}
