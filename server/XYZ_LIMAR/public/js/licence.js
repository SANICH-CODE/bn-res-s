const referrer = document.referrer;

// Проверяем, что реферер начинается с нужного адреса
if (!referrer || !referrer.startsWith('https://backup.bn-team.xyz/server/')) {
    // Если не соответствует, перенаправляем на главную страницу
    window.location.href = '/';
}
document.getElementById('pudliclink_1').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
     window.location.href = 'https://public.bn-team.xyz/spec/0K8g0LXQtSDQvdC1INC70Y7QsdC70Y4KQk4gU2VydmVyIC0gU1BFQzAx'; // Переадресация
    });
document.getElementById('pudliclink_2').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
     window.location.href = 'https://public.bn-team.xyz/spec/Qk4gTWVkaWEgClNlcmdlaSBOaWtpdGtvIFNQRUMwMgo='; // Переадресация
    });
document.getElementById('pudliclink_3').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
     window.location.href = 'https://public.bn-team.xyz/spec/0KHQsNC50YIg0YjQu9GO0YXQuCDQtdCx0LDQvdC+0LkKQk4gU2VydmVyIC0gU1BFQzAz'; // Переадресация
    });
document.getElementById('pudliclink_4').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
     window.location.href = 'https://public.bn-team.xyz/spec/Qk4gU2VydmVyIC0gU1BFQzA0'; // Переадресация
    });
