document.addEventListener('DOMContentLoaded', function() {
    initBurgerMenu();
    initAnchorLinks();
});

function initAnchorLinks() {
    const internalAnchors = document.querySelectorAll('a[href^="#"]');

    internalAnchors.forEach(function(link) {
        link.addEventListener('click', function() {
            const targetId = link.getAttribute('href');

            if (!targetId || targetId === '#') {
                return;
            }

            const target = document.querySelector(targetId);
            if (target) {
                target.setAttribute('tabindex', '-1');
            }
        });
    });
}

function initBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!burgerBtn || !mobileMenu) return;

    function setMenuState(isOpen) {
        burgerBtn.classList.toggle('active', isOpen);
        mobileMenu.classList.toggle('active', isOpen);
        burgerBtn.setAttribute('aria-expanded', String(isOpen));
        burgerBtn.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    }

    burgerBtn.addEventListener('click', function() {
        const isOpen = !burgerBtn.classList.contains('active');
        setMenuState(isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            setMenuState(false);
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('header') && burgerBtn.classList.contains('active')) {
            setMenuState(false);
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && burgerBtn.classList.contains('active')) {
            setMenuState(false);
            burgerBtn.focus();
        }
    });
}
