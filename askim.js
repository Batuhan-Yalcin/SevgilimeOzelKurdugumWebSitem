// Anılar dizisi - Buraya fotoğraflarınızı ve açıklamalarını ekleyebilirsiniz
const memories = [
    {
        image: 'fotograf1.jpg',
        description: 'Seninle Sahilde Geçirdiğimiz o  gün, kalbim hala o günkü gibi çarpıyor. O Yaşadığımızın an Hala o Günki gibi Aklımda Güzel kızım.'
    },
    {
        image: 'fotograf2.jpg',
        description: 'İlk tatilimiz... Keşke O günlerde hep kalabilseydik, Seninle hep baş başa hep huzurlu bir şekilde o günde zaman dursaydı..'
    },
    {
        image: 'fotograf3.jpg',
        description: 'Bu fotoğrafı çektiğimiz gün, gözlerindeki o ışıltı beni büyülemişti. Her baktığımda aynı duyguyu yaşıyorum.'
    },
    {
        image: 'fotograf4.jpg',
        description: 'Birlikte Çıktığımız İlk Kış tatilimiz.. Ne kadar keyifli ve mutluyduk, Adalarda Güle Oynaya Dünya bizim gibi gezdiğimiz o an..'
    },
    {
        image: 'fotograf5.jpg',
        description: 'Sana Sarılmak, Sana dokunmak, O kadar güzel ve özeldi ki Keşke hiç bitmese dediğim anlardan biri daha..'
    },
    {
        image: 'fotograf6.jpg',
        description: 'Hoş Hiçbir anımız hiç bir zaman bitmesin istiyorum ama Bir zaman gelecek işte o zaman Hep yan yana olacağız güzel kızım..'
    }
    // Daha fazla anı ekleyebilirsiniz
];

// Sayfa yüklendiğinde anıları göster
document.addEventListener('DOMContentLoaded', () => {
    const memoryContainer = document.querySelector('.memory-container');
    
    memories.forEach((memory, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        
        card.innerHTML = `
            <img src="${memory.image}" alt="Anı ${index + 1}">
            <p class="memory-description">${memory.description}</p>
        `;
        
        memoryContainer.appendChild(card);
    });
});

// Kalp yağmuru efekti
function createHearts() {
    const colors = ['#e91e63', '#ff4081', '#ec407a', '#ad1457', '#d81b60'];
    const sizes = ['15px', '20px', '25px', '30px'];
    const symbols = ['❤', '💖', '💗', '💓'];
    
    // Sol ve sağ taraf için ayrı kalpler oluştur
    for(let side of ['left', 'right']) {
        const container = document.body;
        const heart = document.createElement('div');
        
        // Rastgele özellikler seç
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        heart.innerHTML = symbol;
        heart.className = `heart heart-${side}`;
        heart.style.color = color;
        heart.style.fontSize = size;
        // Çok daha yavaş düşme animasyonu
        heart.style.animationDuration = Math.random() * 10 + 15 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 25000);
    }
}

// Her 1.5 saniyede bir kalp oluştur
setInterval(createHearts, 1500);

// Tanışma tarihinizi buraya girin (tam 1 yıl)
const startDate = new Date('2023-03-15'); // Tam bir yıl öncesi (15 Mart 2023)

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    
    // Tam yıl, ay ve gün hesaplama
    const years = 1; // Sabit 1 yıl
    const months = 0; // Sabit 0 ay
    const days = 0; // Sabit 0 gün
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}

// Her saniye güncelle
setInterval(updateCounter, 1000);

const loveMessages = [
    "Sevgilim sen benim bakmaya doyamadığımsın",
    "Sen benim baktıkça Aşık olduğum",
    "Bakmayınca da Yanlız kaldığımsın"
];

let currentMessageIndex = 0;

function updateLoveMessage() {
    const messageElement = document.querySelector('.love-message');
    messageElement.style.opacity = 0;
    
    setTimeout(() => {
        messageElement.textContent = loveMessages[currentMessageIndex];
        messageElement.style.opacity = 1;
        
        // Sıradaki mesaja geç
        currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
    }, 500);
}

// İlk mesajı hemen göster
document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.querySelector('.love-message');
    messageElement.textContent = loveMessages[0];
});

// Mesajları sırayla değiştir (7 saniyede bir)
setInterval(updateLoveMessage, 7000);

// Fotoğrafa tıklandığında büyük görüntüleme
function initializeGallery() {
    const images = document.querySelectorAll('.memory-card img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-container';
            
            const largeImg = document.createElement('img');
            largeImg.src = img.src;
            
            imgContainer.appendChild(largeImg);
            overlay.appendChild(imgContainer);
            document.body.appendChild(overlay);
            
            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeGallery);

// Müzik çalar kontrolü
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musicPlayer');
    const playBtn = document.getElementById('playBtn');
    const progressBar = document.querySelector('.progress');
    const timeDisplay = document.querySelector('.time');
    
    // Oynat/Duraklat butonu
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '⏸';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
        }
    });
    
    // İlerleme çubuğu güncelleme
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
        
        // Zaman gösterimi
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });
    
    // İlerleme çubuğuna tıklama
    const progressContainer = document.querySelector('.progress-bar');
    progressContainer.addEventListener('click', (e) => {
        const clickPosition = e.offsetX / progressContainer.offsetWidth;
        audio.currentTime = clickPosition * audio.duration;
    });
    
    // Müzik bittiğinde
    audio.addEventListener('ended', () => {
        playBtn.textContent = '▶';
        progressBar.style.width = '0%';
        timeDisplay.textContent = '0:00';
    });
    
    // Sayfa yüklendiğinde otomatik başlat
    audio.play().catch(() => {
        // Tarayıcı otomatik oynatmaya izin vermezse butonu göster
        playBtn.textContent = '▶';
    });
});

// Fotoğraf galerisi için klavye kontrolü
document.addEventListener('keydown', (e) => {
    const overlay = document.querySelector('.gallery-overlay');
    if (overlay && e.key === 'Escape') {
        overlay.remove();
    }
});

// Anı kartları için hover efekti
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0)';
        });
    });
});

// Başlık animasyonu için ek efekt
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.header h1');
    title.innerHTML = title.textContent.split('').map(letter => 
        `<span class="animated-letter">${letter}</span>`
    ).join('');
});

// Uçan balon ve mesajlar
function createFloatingMessage() {
    const messages = [
        '💝 Her anımız özel',
        '💕 Seninle güzel hayat',
        '💖 İyi ki varsın',
        '💗 Seni seviyorum',
        '💓 Kalbimin sahibi'
    ];
    
    const balloon = document.createElement('div');
    balloon.className = 'floating-balloon';
    balloon.innerHTML = `
        <div class="balloon">🎈</div>
        <div class="balloon-message">${messages[Math.floor(Math.random() * messages.length)]}</div>
    `;
    
    balloon.style.left = Math.random() * 80 + 10 + '%';
    document.body.appendChild(balloon);
    
    setTimeout(() => balloon.remove(), 10000);
}

setInterval(createFloatingMessage, 3000);

// Müzik vizualizasyonu
function setupMusicVisualization() {
    const audio = document.getElementById('musicPlayer');
    const visualizer = document.createElement('div');
    visualizer.className = 'music-visualizer';
    
    for(let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.className = 'visualizer-bar';
        visualizer.appendChild(bar);
    }
    
    document.querySelector('.custom-player').appendChild(visualizer);
    
    setInterval(() => {
        const bars = document.querySelectorAll('.visualizer-bar');
        bars.forEach(bar => {
            const height = Math.random() * 50 + (audio.paused ? 5 : 20);
            bar.style.height = `${height}px`;
        });
    }, 100);
}

function createHeartTrail(heart) {
    const trail = document.createElement('div');
    trail.className = 'heart-trail';
    trail.style.left = heart.style.left;
    trail.style.top = heart.style.top;
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 1000);
}

const quotes = [
    "Seninle tanıştığım gün hayatımın en güzel günüydü",
    "Her sabah ilk düşüncem, her gece son düşüncem sensin",
    "Senin yanında olduğum her an kalbim daha hızlı atıyor",
    "Gözlerinin içine baktığımda tüm dünyam duruyor",
    "Seninle olan her anım bir masaldan çıkmış gibi",
    "Sen benim en güzel şansımsın",
    "Seninle geçen bir yıl göz açıp kapayıncaya kadar geçti",
    "Her geçen gün sana daha çok aşık oluyorum",
    "Sen benim en güzel yarınlarımsın",
    "Seninle her yer cennet, sensiz her yer cehennem"
];

document.querySelector('.generate-quote').addEventListener('click', () => {
    const quoteBox = document.querySelector('.quote-box');
    const allQuotes = quotes.map(quote => `
        <div class="quote-item">
            <p class="quote-text">❤ ${quote} ❤</p>
        </div>
    `).join('');
    
    quoteBox.innerHTML = `
        <div class="all-quotes">
            ${allQuotes}
        </div>
        <button class="generate-quote">
            <span class="button-text">❤ Buraya Tıkla Prensesim ❤</span>
            <span class="button-effect"></span>
        </button>
    `;
});

// Mobil cihazlar için aşk mektubu kontrolü
document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    
    // Dokunma olayını dinle
    envelope.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Varsayılan dokunma davranışını engelle
        this.classList.toggle('touched');
    });

    // Normal tıklama olayını da dinle
    envelope.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('touched');
    });
});
