document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const notification = document.getElementById('notification');

    // Basic validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }

    // Simulate login
    if (username === 'admin' && password === '12345') {
        errorMessage.textContent = '';
        notification.textContent = 'Başarılı olarak giriş yaptınız. Yönlendiriliyorsunuz!';
        notification.className = 'notification success';
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
            // Redirect to admin panel or dashboard
            // window.location.href = '/admin-panel';
        }, 3000); // Hide notification after 3 seconds
    } else {
        errorMessage.textContent = 'Şifre yanlış! Eğer doğru girdiğini düşünüyorsan Admin ile iletişime geç.';
        notification.textContent = '';
        notification.className = 'notification error';
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000); // Hide notification after 5 seconds
    }
});
