// Ждём загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  // Получаем элементы формы и контейнеры
  const publishBtn = document.getElementById("publishBtn");
  const result = document.getElementById("result");
  const postText = document.getElementById("postText");
  const postTitleInput = document.getElementById("postTitle");
  const fileBtn = document.getElementById("fileBtn");
  const fileInput = document.getElementById("fileInput");
  const postCount = document.getElementById("postCount");
  const postsContainer = document.getElementById("postsContainer");
  let postCounter = 0; // Счётчик опубликованных постов

  // Обработка клика на кнопку публикации
  publishBtn.addEventListener("click", function () {
    const title = postTitleInput.value.trim();
    const content = postText.value.trim();

    // Проверка на заполненность полей
    if (!title || !content) {
      result.textContent = "Пожалуйста, заполните заголовок и текст поста.";
      return;
    }

    // Успешная публикация
    result.textContent = "Пост опубликован!";
    postCounter++;
    postCount.textContent = postCounter;

    // Создаём таблицу для поста
    const table = document.createElement("table");
    table.style.margin = "20px auto";
    table.style.border = "1px solid #ff3b3b";
    table.style.borderCollapse = "collapse";
    table.style.backgroundColor = "#1a1a1a";
    table.style.color = "#e0e0e0";
    table.style.width = "70%";
    table.style.wordBreak = "break-word";
    table.style.tableLayout = "fixed";

    // Заголовок поста
    const titleRow = document.createElement("tr");
    const titleCell = document.createElement("td");
    titleCell.textContent = title;
    titleCell.colSpan = 1;
    titleCell.style.border = "1px solid #ff3b3b";
    titleCell.style.padding = "10px";
    titleCell.style.fontWeight = "bold";
    titleCell.style.textAlign = "center";
    titleRow.appendChild(titleCell);
    table.appendChild(titleRow);

    // Текст поста
    const contentRow = document.createElement("tr");
    const contentCell = document.createElement("td");
    contentCell.textContent = content;
    contentCell.style.border = "1px solid #ff3b3b";
    contentCell.style.padding = "10px";
    contentCell.style.whiteSpace = "pre-wrap"; // Сохраняет форматирование
    contentRow.appendChild(contentCell);
    table.appendChild(contentRow);

    // Добавляем пост на страницу
    postsContainer.appendChild(table);

    // Очищаем поля формы
    postTitleInput.value = "";
    postText.value = "";

    // Убираем сообщение через 3 секунды
    setTimeout(() => {
      result.textContent = "";
    }, 3000);
  });

  // Обработка кнопок для вставки BB-кодов
  document.querySelectorAll("button[data-tag]").forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-tag");
      insertBBCode(postText, tag);
    });
  });

  // Вставка BB-тегов в текст
  function insertBBCode(textarea, tag) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const before = textarea.value.substring(0, start);
    const after = textarea.value.substring(end);
    const bbStart = `[${tag}]`;
    const bbEnd = `[/${tag}]`;

    // Если выделен текст — обернуть его в теги
    let newText;
    if (selectedText) {
      newText = before + bbStart + selectedText + bbEnd + after;
    } else {
      // Если нет — просто вставить пустой тег
      newText = before + bbStart + bbEnd + after;
    }

    textarea.value = newText;
    textarea.focus();

    // Устанавливаем курсор после вставки
    const cursorPos = selectedText
      ? start + bbStart.length + selectedText.length + bbEnd.length
      : start + bbStart.length;
    textarea.setSelectionRange(cursorPos, cursorPos);
  }

  // Открытие окна выбора файла
  fileBtn.addEventListener("click", function () {
    fileInput.click();
  });
});