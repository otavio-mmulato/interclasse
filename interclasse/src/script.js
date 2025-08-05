document.addEventListener('DOMContentLoaded', () => {
    const descricoes = {
        futsal: `
            <div class="bg-creme text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-azul mb-3">Futsal</h3>
                <p class="leading-relaxed text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo eget nunc interdum imperdiet. Suspendisse vulputate est eget est commodo, non imperdiet velit laoreet. Donec elementum gravida ipsum, quis rhoncus sem dictum a. Nulla auctor massa purus, non pharetra erat suscipit non. Duis vitae erat eget nibh tempor luctus quis sed ligula. Integer suscipit, mi eget blandit sodales, diam lacus elementum lorem, sit amet finibus tellus odio a metus. Mauris quis lectus metus. Donec ut arcu eget mauris interdum lobortis. Pellentesque eget vehicula orci, quis bibendum est. Vestibulum viverra tortor a nisi ullamcorper tristique. Aenean odio mauris, auctor quis suscipit ut, egestas eu augue.</p>
            </div>
        `,
        volei: `<div class="bg-creme text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-azul mb-3">Vôlei</h3>
                <p class="leading-relaxed text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo eget nunc interdum imperdiet. Suspendisse vulputate est eget est commodo, non imperdiet velit laoreet. Donec elementum gravida ipsum, quis rhoncus sem dictum a. Nulla auctor massa purus, non pharetra erat suscipit non. Duis vitae erat eget nibh tempor luctus quis sed ligula. Integer suscipit, mi eget blandit sodales, diam lacus elementum lorem, sit amet finibus tellus odio a metus. Mauris quis lectus metus. Donec ut arcu eget mauris interdum lobortis. Pellentesque eget vehicula orci, quis bibendum est. Vestibulum viverra tortor a nisi ullamcorper tristique. Aenean odio mauris, auctor quis suscipit ut, egestas eu augue.</p>
            </div>`,
        'tenis-de-mesa': `<div class="bg-creme text-gray-800 p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-bold text-azul mb-3">Tênis de mesa</h3>
                <p class="leading-relaxed text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo eget nunc interdum imperdiet. Suspendisse vulputate est eget est commodo, non imperdiet velit laoreet. Donec elementum gravida ipsum, quis rhoncus sem dictum a. Nulla auctor massa purus, non pharetra erat suscipit non. Duis vitae erat eget nibh tempor luctus quis sed ligula. Integer suscipit, mi eget blandit sodales, diam lacus elementum lorem, sit amet finibus tellus odio a metus. Mauris quis lectus metus. Donec ut arcu eget mauris interdum lobortis. Pellentesque eget vehicula orci, quis bibendum est. Vestibulum viverra tortor a nisi ullamcorper tristique. Aenean odio mauris, auctor quis suscipit ut, egestas eu augue.</p>
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
/*Scrollspy */
const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('header nav a.nav-link');

    const observerOptions = {
        root: null, 
        rootMargin: '-25% 0px -75% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                
                navLinks.forEach(link => {
                    link.classList.remove('text-laranja', 'underline');
                });
                
                const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('text-laranja', 'underline');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });