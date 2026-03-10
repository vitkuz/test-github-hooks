document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Glitch effect on h1
    const title = document.querySelector('h1');
    const originalText = title.innerText;
    const glitchChars = '!@#$%^&*()_+{}[]|;:,.<>?';

    const glitch = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            title.innerText = originalText.split('').map((char, index) => {
                if (index < iterations) return originalText[index];
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }).join('');

            if (iterations >= originalText.length) clearInterval(interval);
            iterations += 1/3;
        }, 30);
    };

    title.addEventListener('mouseover', glitch);
    glitch(); // Initial glitch

    // Mouse parallax for grid
    const grid = document.querySelector('.cyber-grid');
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        grid.style.transform = `translate(-50%, -50%) perspective(500px) rotateX(60deg) translate(${x}px, ${y}px)`;
    });
});
