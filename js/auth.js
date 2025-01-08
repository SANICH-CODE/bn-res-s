document.getElementById('authLink').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке

    const user = prompt('Содержимое защищено\nВведите ID:');
    const messageDiv = document.getElementById('message');

    if (user === null) {
        messageDiv.textContent = 'Действие отменено';
    } else if (user === '000666') {
        const code = prompt('ID: 000666\nПользователь: Sergei Nikitko\nВведите пароль:');
        if (code === null) {
            messageDiv.textContent = 'Неверный пароль';
        } else if (code === 'sn2009sn') {
            window.location.href = '/server/'; // Переадресация для первого пользователя
        } else {
            messageDiv.textContent = 'Неверный код';
        }
        
    } else if (user === '012579') { // Замените 'anotherCode' на код для второго пользователя
        const code = prompt('ID: 012579\nПользователь: Arseniy Degtyarev\nВведите пароль:');
        if (code === null) {
            messageDiv.textContent = 'Неверный пароль';
        } else if (code === 'aboba228') {
            window.location.href = '/server/'; // Переадресация для первого пользователя
        } else {
            messageDiv.textContent = 'Неверный код';
        }
    } else if (user === 'test') { // Замените 'anotherCode' на код для второго пользователя
        window.location.href = './user_test/'; // Переадресация для второго пользователя
    } else {
        messageDiv.textContent = '/server/';
    }
});