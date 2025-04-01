document.addEventListener('DOMContentLoaded', function() {
    function createRandomBlocks() {
        const container = document.getElementById('mainContainer');
        const colors = ['var(--primary-red)', 'var(--primary-blue)',
                      'var(--primary-yellow)', 'var(--black)'];

        for(let i = 0; i < 12; i++) {
            const block = document.createElement('div');
            block.className = 'deco-block';

            block.style.width = Math.random() * 150 + 50 + 'px';
            block.style.height = Math.random() * 150 + 50 + 'px';
            block.style.left = Math.random() * 90 + '%';
            block.style.top = Math.random() * 90 + '%';
            block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            block.style.transform = `
                rotate(${Math.random() * 360}deg)
                scale(${Math.random() * 0.5 + 0.5})
            `;

            container.appendChild(block);
        }
    }

    let hue = 0;
    function updateBackground() {
        hue = (hue + 0.3) % 360;
        const color1 = `hsl(${hue}, 80%, 60%)`;
        const color2 = `hsl(${(hue + 120) % 360}, 80%, 60%)`;
        document.body.style.background =
            `linear-gradient(45deg, ${color1}, ${color2})`;
        requestAnimationFrame(updateBackground);
    }

    const startDate = new Date('2022-05-02T00:00:00');
    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    function init() {
        createRandomBlocks();
        setInterval(updateTimer, 1000);
        updateTimer();
        updateBackground();

        document.addEventListener('mousemove', (e) => {
            const blocks = document.querySelectorAll('.deco-block');
            blocks.forEach(block => {
                const rect = block.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                block.style.transform = `
                    rotate3d(${y/100}, ${x/100}, 0, 45deg)
                    scale(${Math.random() * 0.3 + 0.7})
                `;
            });
        });
    }

    init();
});