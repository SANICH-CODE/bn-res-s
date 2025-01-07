document.getElementById('authLink').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке

    const code = prompt('Введите код доступа', 'код');
    const messageDiv = document.getElementById('message');

    if (code === null) {
        messageDiv.textContent = 'Действие отменено';
    } else if (code === '1111') {
        window.location.href = './user_000666/'; // Переадресация
    } else {
        messageDiv.textContent = 'Неверный код';
    }
});
