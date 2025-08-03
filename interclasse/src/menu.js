document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Função para abrir o menu
    // Remove a classe que esconde o menu
    const openMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('translate-x-full');
        }
    };

    // Função para fechar o menu
    // Adiciona de volta a classe que esconde o menu
    const closeMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('translate-x-full');
        }
    };

    // Adiciona os eventos de clique
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }
});