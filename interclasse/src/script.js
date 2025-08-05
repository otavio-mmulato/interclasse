document.addEventListener('DOMContentLoaded', () => {
    const descricoes = {
        futsal: `
            <div class="bg-creme text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-azul mb-3">Futsal</h3>
                <p class="leading-relaxed text-justify">O futsal é uma modalidade de esporte derivada do futebol, mas que é praticada em uma quadra de cimento ou de madeira, com cinco jogadores em cada time e em dois tempos de 20 minutos, as equipes têm o objetivo de marcar gols na baliza dos oponentes.</p>
            </div>
        `,
        volei: `<div class="bg-creme text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-azul mb-3">Vôlei</h3>
                <p class="leading-relaxed text-justify">O voleibol é um esporte dinâmico e estratégico, jogado entre duas equipes, com uma bola e com as mãos, em uma quadra dividida por uma rede. O objetivo principal é lançar a bola por cima da rede e fazê-la tocar no chão do adversário, enquanto a equipe oposta tenta impedir esse movimento.</p>
            </div>`,
        'tenis-de-mesa': `<div class="bg-creme text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-azul mb-3">Tênis de mesa</h3>
                <p class="leading-relaxed text-justify">O tênis de mesa, também conhecido como pingue-pongue, é o jogo em que duas pessoas ou duplas usam raquetes de madeira para passar uma bolinha de um lado a outro de uma rede instalada em uma mesa. O nome pingue-pongue deve-se ao barulho que a bola faz ao bater na raquete e na mesa.</p>
            </div>`
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
const form = document.getElementById('inscricao-form');
const timeSimRadio = document.getElementById('time-sim');
const timeNaoRadio = document.getElementById('time-nao');
const teamNameContainer = document.getElementById('team-name-container');

const socioSimRadio = document.getElementById('socio-sim');
const socioNaoRadio = document.getElementById('socio-nao');
const priceContainer = document.getElementById('price-container');

if (timeSimRadio && timeNaoRadio && teamNameContainer) {
    timeSimRadio.addEventListener('change', () => {
        if (timeSimRadio.checked) {
            teamNameContainer.classList.remove('hidden');
        }
    });

    timeNaoRadio.addEventListener('change', () => {
        if (timeNaoRadio.checked) {
            teamNameContainer.classList.add('hidden');
            alert('Você será alocado em um time aleatoriamente.');
        }
    });
}

if (socioSimRadio && socioNaoRadio && priceContainer) {
    socioSimRadio.addEventListener('change', () => {
        if (socioSimRadio.checked) {
            priceContainer.classList.add('hidden');
        }
    });
    
    socioNaoRadio.addEventListener('change', () => {
        if (socioNaoRadio.checked) {
            priceContainer.classList.remove('hidden');
        }
    });
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        alert('Inscrição concluída com sucesso campeão! Preparado para vencer?');
        
        form.reset();

        teamNameContainer.classList.add('hidden');
        priceContainer.classList.add('hidden');
    });
}
/* Scrollspy */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('header nav a.nav-link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach((link) => {
          link.classList.remove('text-amarelopan');
        });

        const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('text-amarelopan');
        }
      }
    });
  },
  {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Detecta quando a seção está no centro da tela
    threshold: 0,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});