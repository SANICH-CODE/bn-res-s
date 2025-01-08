const referrer = document.referrer;
if (!referrer || !referrer.startsWith('https://disk.bn-team.xyz/')) {
    // Если не соответствует, перенаправляем на главную страницу
    window.location.href = '/';
}