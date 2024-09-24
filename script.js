const languageSelector = document.querySelector('.language-selector');
const languageOptions = document.getElementById('language-options');

// Dil seçeneklerini gösterme ve gizleme
languageSelector.addEventListener('click', () => {
    languageOptions.classList.toggle('show');
});

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    if (lang === 'tr') {
        // Türkçe dilinde içerik güncellemeleri
        document.querySelector('.header h1').innerText = "Stella'nın Sitesine Hoşgeldiniz";
        document.querySelector('.homepage-container h2').innerText = "Merhabalar 👋";
        document.querySelector('.homepage-container p').innerText = "Siteme hoşgeldin, giriş yapmak için alttaki 'Giriş Yap ✔️' butonuna tıkla!";
        document.querySelector('.login-btn').innerText = "Giriş Yap ✔️";
        document.querySelector('.about-section h2').innerText = "Hakkımızda ❓";
        document.querySelector('.about-section p').innerText = "Kendi halimde site geliştiriyorum.";
        document.querySelector('.tht-section h2').innerText = "İletişim 📱";
        document.querySelector('.tht-section a').innerText = "TürkHackTeam 👨‍💻";
        document.querySelector('.ataturk-section a').innetText = "Gazi Mustafa Kemal ATATÜRK 💥";
    } else if (lang === 'en') {
        // İngilizce dilinde içerik güncellemeleri
        document.querySelector('.header h1').innerText = "Welcome to Stella's Site";
        document.querySelector('.homepage-container h2').innerText = "Hello 👋";
        document.querySelector('.homepage-container p').innerText = "Welcome to my site, click the 'Login ✔️' button below to log in!";
        document.querySelector('.login-btn').innerText = "Login ✔️";
        document.querySelector('.about-section h2').innerText = "About Us ❓";
        document.querySelector('.about-section p').innerText = "I am developing the site on my own.";
        document.querySelector('.tht-section h2').innerText = "Contact 📱";
        document.querySelector('.tht-section a').innerText = "TurkHackTeam 👨‍💻";
        document.querySelector('.ataturk-section a').innetText = "Gazi Mustafa Kemal ATATÜRK 💥";
    } else if (lang === 'es') {
        // İspanyolca dilinde içerik güncellemeleri
        document.querySelector('.header h1').innerText = "Bienvenido al sitio de Stella";
        document.querySelector('.homepage-container h2').innerText = "Hola 👋";
        document.querySelector('.homepage-container p').innerText = "¡Bienvenido a mi sitio, haz clic en el botón 'Iniciar sesión ✔️' a continuación para iniciar sesión!";
        document.querySelector('.login-btn').innerText = "Iniciar sesión ✔️";
        document.querySelector('.about-section h2').innerText = "Sobre nosotros ❓";
        document.querySelector('.about-section p').innerText = "Estoy desarrollando el sitio por mi cuenta.";
        document.querySelector('.tht-section h2').innerText = "Contacto 📱";
        document.querySelector('.tht-section a').innerText = "TurkHackTeam 👨‍💻";
        document.querySelector('.ataturk-section a').innetText = "Gazi Mustafa Kemal ATATÜRK 💥";
    } else if (lang === 'fr') {
        // Fransızca dilinde içerik güncellemeleri
        document.querySelector('.header h1').innerText = "Bienvenue sur le site de Stella";
        document.querySelector('.homepage-container h2').innerText = "Bonjour 👋";
        document.querySelector('.homepage-container p').innerText = "Bienvenue sur mon site, cliquez sur le bouton 'Se connecter ✔️' ci-dessous pour vous connecter !";
        document.querySelector('.login-btn').innerText = "Se connecter ✔️";
        document.querySelector('.about-section h2').innerText = "À propos de nous ❓";
        document.querySelector('.about-section p').innerText = "Je développe le site moi-même.";
        document.querySelector('.tht-section h2').innerText = "Contact 📱";
        document.querySelector('.tht-section a').innerText = "TurkHackTeam 👨‍💻";
        document.querySelector('.ataturk-section a').innetText = "Gazi Mustafa Kemal ATATÜRK 💥";
    }

    languageOptions.classList.remove('show');
}

// Sağ tık ve F12 tuşunu engelle
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    showAlert();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'F12') {
        event.preventDefault();
        showAlert();
    }
});

function showAlert() {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerText = "Bu site açık kaynak kodlarına kapalıdır!";
    
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.remove();
    }, 3000); // 3 saniye sonra kaybolur
}
