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