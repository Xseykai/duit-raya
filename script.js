// Animasi Preloader
window.onload = function() {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
        document.getElementById("qr-container").style.display = "block";
    }, 2000); // Tunggu 2 saat sebelum QR Code muncul
};
function copyLink() {
    let paymentLink = "https://cdn.tngdigital.com.my/s/oauth2/index.html#/moneypacket?p=d8951e93c70b467d91adc2c1086398e4f143e771fdd903f7def0d9c3a16f9fa40337ef822d0db4aea88b0ae0d118541ff57da4ceee037d7949e6077cce60d5807e062bb5bd28f62728d2a8131ef535aa";

    navigator.clipboard.writeText(paymentLink).then(function() {
        document.getElementById("status").innerText = "✅ Link Duit Raya disalin!";
    }).catch(function(err) {
        document.getElementById("status").innerText = "❌ Gagal salin link.";
    });
}

// Tukar Mode Gelap & Cerah
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function launchConfetti() {
    let end = Date.now() + 3 * 1000; // Confetti 3 saat
    let colors = ['#ffcc00', '#ff66b2', '#66ff66', '#3399ff'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Aktifkan confetti bila QR muncul
window.onload = function() {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
        document.getElementById("qr-container").style.display = "block";
        launchConfetti(); // Mula confetti
    }, 2000);
};