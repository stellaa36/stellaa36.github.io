document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const warningMessage = document.getElementById('warning-message');

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

    // F12 tuşuna basıldığında uyarı mesajını göster
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12') {
            e.preventDefault();
            warningMessage.classList.add('show');
            setTimeout(() => {
                warningMessage.classList.remove('show');
            }, 3000);
        }
    });

    // Sağ tıklama ile bağlam menüsünü engelleme
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        warningMessage.classList.add('show');
        setTimeout(() => {
            warningMessage.classList.remove('show');
        }, 3000);
    });

    // F12 tuşuna basarak açılacak olan geliştirici araçların engellenmesi
    document.addEventListener('keydown', function(e) {
        if (e.key === 'I' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            warningMessage.classList.add('show');
            setTimeout(() => {
                warningMessage.classList.remove('show');
            }, 3000);
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'U' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            warningMessage.classList.add('show');
            setTimeout(() => {
                warningMessage.classList.remove('show');
            }, 3000);
        }
    });
});
