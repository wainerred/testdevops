// RootLab - JavaScript
// Основной файл скриптов

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация компонентов
    initNavigation();
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
