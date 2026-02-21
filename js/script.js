// script.js (versão limpa)

// Animações ao rolar (fade-in)
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.hero, section, .projeto');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => observer.observe(el));

    // Removido o alert do formulário (agora Formspree cuida disso)
    console.log('Portfólio carregado! 🚀');
});