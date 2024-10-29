// Pilih elemen kartu (card)
const card = document.querySelector('.card-photo');

// Tambahkan event listener untuk pergerakan mouse di atas elemen kartu
card.addEventListener('mousemove', (e) => {
    // Dapatkan dimensi elemen kartu
    const cardRect = card.getBoundingClientRect();
    
    // Hitung posisi mouse relatif terhadap pusat kartu
    const xAxis = (e.clientX - (cardRect.left + cardRect.width / 2)) / 10;
    const yAxis = ((cardRect.top + cardRect.height / 2) - e.clientY) / 10;

    // Rotasi elemen kartu berdasarkan posisi mouse
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`; // Gabungkan dengan efek zoom (scale)
});

// Tambahkan event listener untuk mereset transformasi ketika mouse keluar dari elemen kartu
card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0) scale(1)'; // Kembalikan ke ukuran normal
});