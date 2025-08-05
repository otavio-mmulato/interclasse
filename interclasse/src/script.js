document.addEventListener('DOMContentLoaded', () => {
    const descricoes = {
        futsal: `
            <div class="bg-creme text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-azul mb-3">Futsal</h3>
                <p class="leading-relaxed text-justify">O futsal é uma das modalidades mais disputadas do Interclasses...</p>
            </div>
        `,
        volei: `...`,
        'tenis-de-mesa': `...`
    };
    const cards = document.querySelectorAll('.modalidade-card');
    const displayDescricao = document.getElementById('modalidade-descricao');
    if (cards.length > 0 && displayDescricao) {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('ring-4', 'ring-laranja'));
                card.classList.add('ring-4', 'ring-laranja');
                const modalidadeSelecionada = card.dataset.modalidade;
                displayDescricao.innerHTML = descricoes[modalidadeSelecionada];
                displayDescricao.classList.remove('hidden');
            });
        });
    }

    const swiper = new Swiper('.aapm-carousel', {
        effect: 'fade',
        loop: true,
        autoHeight: true, 
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
});