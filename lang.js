(function () {
    function setupLangSwitcher() {
        const rightButtons = document.querySelector('.right-buttons');
        if (!rightButtons || document.getElementById('lang-toggle-container')) return;

        const path = window.location.pathname;
        const isRu = path.includes('/ru/');
        const isEn = path.includes('/en/');

        const container = document.createElement('div');
        container.id = 'lang-toggle-container';
        container.className = 'lang-toggle-container';

        const ruBtn = document.createElement('a');
        ruBtn.href = '#';
        ruBtn.className = 'lang-choice' + (isRu ? ' active' : '');
        ruBtn.textContent = 'RU';
        ruBtn.title = 'Переключить на русский';

        const sep = document.createElement('span');
        sep.className = 'lang-choice-sep';
        sep.textContent = '/';

        const enBtn = document.createElement('a');
        enBtn.href = '#';
        enBtn.className = 'lang-choice' + (isEn ? ' active' : '');
        enBtn.textContent = 'EN';
        enBtn.title = 'Switch to English';

        ruBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (isRu) return;
            let target;
            if (isEn) {
                target = path.replace('/en/', '/ru/');
            } else {
                target = path.replace(/\/?(index\.html)?$/, '') + '/ru/index.html';
            }
            window.location.pathname = target;
        });

        enBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (isEn) return;
            let target;
            if (isRu) {
                target = path.replace('/ru/', '/en/');
            } else {
                target = path.replace(/\/?(index\.html)?$/, '') + '/en/index.html';
            }
            window.location.pathname = target;
        });

        container.appendChild(ruBtn);
        container.appendChild(sep);
        container.appendChild(enBtn);

        rightButtons.insertBefore(container, rightButtons.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupLangSwitcher);
    } else {
        setupLangSwitcher();
    }
})();
