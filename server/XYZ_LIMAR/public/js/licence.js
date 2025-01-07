const referrer = document.referrer;

// Проверяем, что реферер начинается с нужного адреса
if (!referrer || !referrer.startsWith('https://backup.bn-team.xyz/server/')) {
    // Если не соответствует, перенаправляем на главную страницу
    window.location.href = '/';
}