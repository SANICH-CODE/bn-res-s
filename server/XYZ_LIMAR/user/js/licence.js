document.getElementById('authLink').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке

    const code = prompt('Содержимое защищено, введите код доступа!');
    const messageDiv = document.getElementById('message');

    if (code === null) {
        messageDiv.textContent = 'Действие отменено';
    } else if (code === 'sn2009sn') {
        window.location.href = './user_000666/'; // Переадресация для первого пользователя
    } else if (code === 'aboba228') { // Замените 'anotherCode' на код для второго пользователя
        window.location.href = './user_012579/'; // Переадресация для второго пользователя
    } else {
        messageDiv.textContent = 'Неверный код';
    }
});
const code = prompt('Введите ваш код');
const messageDiv = document.getElementById('message');

if (code === null) {
    messageDiv.textContent = 'Действие отменено';
} else if (code === 'sn2009sn') {
    window.location.href = './user_000666/'; // Переадресация для первого пользователя
} else if (code === 'aboba228') { // Замените 'anotherCode' на код для второго пользователя
    window.location.href = './user_012579/'; // Переадресация для второго пользователя
} else {
    messageDiv.textContent = 'Неверный код';
}
