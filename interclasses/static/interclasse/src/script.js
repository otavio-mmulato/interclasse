document.addEventListener('DOMContentLoaded', () => {

    // URL da sua API para o cadastro de alunos.
    // O endpoint foi ajustado para 'api/alunos/' conforme o console do seu navegador.
    const apiUrl = 'http://localhost:8000/api/alunos/';

    // Referências aos elementos do formulário e UI
    const inscricaoForm = document.getElementById('inscricao-form');
    const possuiTimeRadios = document.querySelectorAll('input[name="possui-time"]');
    const teamNameContainer = document.getElementById('team-name-container');
    const teamNameInput = document.getElementById('team-name');
    const socioAapmRadios = document.querySelectorAll('input[name="socio-aapm"]');
    const priceContainer = document.getElementById('price-container');

    // Mapeamento dos IDs de modalidades fornecidos por você na imagem da lista de modalidades
    const modalidadesMap = {
        'futsal': 1,
        'volei': 2,
        'tenis-de-mesa': 3
    };

    // Função para lidar com o envio do formulário para a API
    async function handleFormSubmit(event) {
        event.preventDefault();

        // 1. Coletar os dados do formulário
        const nome = document.getElementById('nome').value;
        const turma = document.getElementById('turma').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const modalidadeValue = document.getElementById('modalidade').value;
        const possuiTime = document.querySelector('input[name="possui-time"]:checked').value === 'sim';
        const nomeDoTime = possuiTime ? teamNameInput.value : null;
        const socioAapm = document.querySelector('input[name="socio-aapm"]:checked').value === 'sim';
        
        // Validação básica para o nome do time
        if (possuiTime && !nomeDoTime) {
            alert('Por favor, insira o nome do seu time.');
            return;
        }

        // 2. Preparar os dados para a API no formato JSON
        const inscricaoData = {
            nome: nome,
            turma: turma,
            telefone: telefone,
            email: email,
            modalidade_id: modalidadesMap[modalidadeValue],
            faz_parte_do_time: possuiTime,
            nome_do_time: nomeDoTime,
            socio: socioAapm,
        };

        // 3. Enviar os dados para a API usando fetch
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inscricaoData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Erro na API:', errorData);
                throw new Error(JSON.stringify(errorData));
            }

            console.log('Inscrição criada com sucesso!');
            alert('Inscrição concluída com sucesso campeão! Preparado para vencer?');
            
            inscricaoForm.reset();
            teamNameContainer.classList.add('hidden');
            priceContainer.classList.add('hidden');
        } catch (error) {
            console.error('Erro ao enviar inscrição:', error);
            try {
                const errorMessage = JSON.parse(error.message);
                let alertMessage = 'Erro ao enviar inscrição:\n';
                for (const key in errorMessage) {
                    alertMessage += `\n- ${key}: ${errorMessage[key].join(', ')}`;
                }
                alert(alertMessage);
            } catch {
                alert('Ocorreu um erro ao enviar a inscrição. Verifique o console para mais detalhes.');
            }
        }
    }
    
    // --- LÓGICA DE UI ---

    // Descrições para os cards de modalidade
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

    // Swiper Carousel
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

    // Lógica para mostrar/esconder o campo de nome do time
    possuiTimeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'sim') {
                teamNameContainer.classList.remove('hidden');
            } else {
                teamNameContainer.classList.add('hidden');
                alert('Você será alocado em um time aleatoriamente.');
            }
        });
    });

    // Lógica para mostrar/esconder a taxa de inscrição
    socioAapmRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'nao') {
                priceContainer.classList.remove('hidden');
            } else {
                priceContainer.classList.add('hidden');
            }
        });
    });

    // --- SCROLLSPY ---
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('header nav a.nav-link');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach((link) => {
                        link.classList.remove('scroll-active');
                    });
                    const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('scroll-active');
                    }
                }
            });
        }, {
            root: null,
            rootMargin: '-25% 0px -70% 0px',
            threshold: 0,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // --- EVENT LISTENER PRINCIPAL ---
    // Atribui o event listener de envio do formulário à nossa função que envia para a API
    inscricaoForm.addEventListener('submit', handleFormSubmit);

});