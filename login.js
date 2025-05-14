// Ждём полной загрузки DOM, прежде чем выполнять скрипт
document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы формы и её поля по ID
    const form = document.getElementById('registrationForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');

    // === Проверка и очистка ошибок при вводе ===

    // При вводе пароля, если он достигает 10 символов, удаляем сообщение об ошибке
    passwordInput.addEventListener('input', function () {
        if (passwordInput.value.length >= 10) {
            passwordInput.setCustomValidity(''); // Сброс кастомной ошибки
        }
    });

    // При вводе email, если он соответствует шаблону, удаляем сообщение об ошибке
    emailInput.addEventListener('input', function () {
        if (/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailInput.setCustomValidity(''); // Сброс кастомной ошибки
        }
    });

    // === Обработка отправки формы ===
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Отменяем стандартную отправку формы

        // Сначала сбрасываем все предыдущие ошибки
        emailInput.setCustomValidity('');
        passwordInput.setCustomValidity('');

        // Проверка email с помощью регулярного выражения
        if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailInput.setCustomValidity('Введите корректный email.'); // Устанавливаем сообщение об ошибке
        }

        // Проверка длины пароля
        if (passwordInput.value.length < 10) {
            passwordInput.setCustomValidity('Пароль должен содержать хотя бы 10 символов.');
        }

        // Проверка всей формы на валидность
        if (!form.checkValidity()) {
            form.reportValidity(); // Показываем пользователю ошибки
            return; // Останавливаем выполнение, если есть ошибки
        }

        // === Если валидация успешна ===

        // Скрываем кнопку отправки, чтобы предотвратить повторную отправку
        submitButton.style.display = 'none';

        // Создаём и отображаем сообщение об успешной регистрации
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message'; // Класс для возможного стилизации
        successMessage.textContent = 'Вы прошли регистрацию!';
        form.appendChild(successMessage); // Добавляем сообщение в конец формы
    });
});