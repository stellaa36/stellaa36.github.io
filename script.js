document.addEventListener('DOMContentLoaded', function() {
    // Giriş formu gönderme işlevi
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan gönderimini engelle

        // Kullanıcı adı ve şifre kontrolü
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '357159') {
            showAlert('success', 'Giriş Başarılı!');
            // Giriş başarılıysa yönlendirme
            setTimeout(function() {
                const redirectMessage = document.getElementById('redirectMessage');
                redirectMessage.style.display = 'block';
                setTimeout(function() {
                    window.location.href = 'https://stellaa36.github.io/home/';
                }, 3000); // 3 saniye bekleme
            }, 3000); // 3 saniye bekleme
        } else {
            showAlert('error', 'Giriş Başarısız!');
            // Hatalı şifre mesajını göster
            const errorMessage = document.getElementById('errorMessage');
            if (errorMessage) {
                errorMessage.style.display = 'block';
                setTimeout(function() {
                    errorMessage.style.display = 'none';
                }, 6000); // 6 saniye sonra kaybolur
            }
        }
    });

    // Profil resmi tıklama işlevi
    document.getElementById('profileLink').addEventListener('click', function(event) {
        event.preventDefault(); // Yönlendirmeyi engelle, önce şifre isteme ekranını gösterelim

        // Şifre isteme ekranını göster
        const passwordPrompt = document.getElementById('passwordPrompt');
        passwordPrompt.style.display = 'block';

        // Admin login panelini gizle
        document.querySelector('.login-container').style.display = 'none';
    });

    // Yeni profil fotoğrafına tıklama işlevi
    document.getElementById('newProfileLink').addEventListener('click', function(event) {
        window.location.href = 'https://www.turkhackteam.org/uye/aimpluqqed.913912/';
    });

    // Şifre doğrulama işlevi
    document.getElementById('submitPassword').addEventListener('click', function() {
        const correctPassword = '357159'; // Doğru şifre burada belirtiliyor
        const enteredPassword = document.getElementById('secretPassword').value;

        if (enteredPassword === '') {
            alert('Lütfen şu alanı doldurun');
        } else if (enteredPassword === correctPassword) {
            // Şifre doğruysa yönlendirme mesajını göster
            document.getElementById('passwordPrompt').style.display = 'none';
            const redirectMessage = document.getElementById('redirectMessage');
            redirectMessage.style.display = 'block';

            // Yönlendirme için 4 saniyelik bekleme süresi
            setTimeout(function() {
                window.location.href = 'https://guns.lol/stellaaa';
            }, 4000); // 4 saniye bekleme

            // Hatalı şifre mesajını gizle
            const errorMessage = document.getElementById('errorMessage');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
        } else {
            // Şifre yanlışsa hata mesajını göster
            const errorMessage = document.getElementById('errorMessage');
            if (errorMessage) {
                errorMessage.style.display = 'block';
                setTimeout(function() {
                    errorMessage.style.display = 'none';
                }, 6000); // 6 saniye sonra kaybolur
            }
        }
    });

    // Şifre isteme ekranını kapatma işlevi
    document.getElementById('closePasswordPrompt').addEventListener('click', function() {
        document.getElementById('passwordPrompt').style.display = 'none';
        document.querySelector('.login-container').style.display = 'flex'; // Admin login panelini geri göster
    });

    // Alert Box işlevi
    function showAlert(type, message) {
        const alertBox = document.getElementById('alertBox');
        const alertContent = document.getElementById('alertContent');
        const alertIcon = document.getElementById('alertIcon');
        const alertMessage = document.getElementById('alertMessage');

        if (type === 'success') {
            alertBox.classList.add('success');
            alertIcon.innerHTML = '✔'; // Başarı ikonu
        } else if (type === 'error') {
            alertBox.classList.add('error');
            alertIcon.innerHTML = '✘'; // Başarısızlık ikonu
        }

        alertMessage.textContent = message;
        alertBox.style.display = 'block';

        // 3 saniye sonra alertBox'u gizle
        setTimeout(function() {
            alertBox.style.display = 'none';
            alertBox.classList.remove('success', 'error');
        }, 3000);
    }

    // F12 ve Ctrl+Shift+I engelleme
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            alert('Bu site açık kaynak kodlarına kapalıdır');
        }
    });
});
