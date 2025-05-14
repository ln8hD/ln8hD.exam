// Функция для переключения отображения формы поиска
function toggleSearch() {
    const container = document.getElementById('search-form-container');
    const toggle = document.getElementById('search-toggle');
    if (container.style.display === 'none') {
        container.style.display = 'block';
        toggle.textContent = 'Скрыть поиск';
    } else {
        container.style.display = 'none';
        toggle.textContent = 'Поиск';
    }
}

// Функция для обработки поискового запроса
function handleSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (query === "") {
        alert("Введите текст для поиска.");
    } else {
        alert(`Результаты поиска по: "${query}"`);
        console.log("Поиск:", query);
    }
}