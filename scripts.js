document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin' && password === '12345') {
            // Başarılı girişte yeşil mesajı göster
            successMessage.classList.add('show');
            setTimeout(() => {
                successMessage.classList.remove('show');
                // Yönlendirme için bir süre bekleyip yönlendiriyoruz
                window.location.href = 'https://stellaa36.github.io/home/';
            }, 3000);
        } else {
            // Hatalı girişte kırmızı mesajı göster
            errorMessage.classList.add('show');
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 3000);
        }
    });
});
