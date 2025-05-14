// Открывает модальное окно с изображением и подписью
function openModal(src, caption) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "block";      // Показываем модальное окно
    modalImg.src = src;                 // Устанавливаем изображение
    modalCaption.innerText = caption;  // Устанавливаем подпись
}

// Закрывает модальное окно
function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}
