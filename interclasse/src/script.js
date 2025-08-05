document.addEventListener('DOMContentLoaded', () => {

    const descricoes = {
        futsal: `
            <h3 class="text-2xl font-bold text-azul mb-3">Futsal</h3>
            <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo eget nunc interdum imperdiet. Suspendisse vulputate est eget est commodo, non imperdiet velit laoreet. Donec elementum gravida ipsum, quis rhoncus sem dictum a. Nulla auctor massa purus, non pharetra erat suscipit non. Duis vitae erat eget nibh tempor luctus quis sed ligula. Integer suscipit, mi eget blandit sodales, diam lacus elementum lorem, sit amet finibus tellus odio a metus. Mauris quis lectus metus. Donec ut arcu eget mauris interdum lobortis. Pellentesque eget vehicula orci, quis bibendum est. Vestibulum viverra tortor a nisi ullamcorper tristique. Aenean odio mauris, auctor quis suscipit ut, egestas eu augue.</p>
        `,
        volei: `
            <h3 class="text-2xl font-bold text-azul mb-3">Vôlei</h3>
            <p class="leading-relaxed">Curabitur suscipit, tortor eu faucibus pharetra, justo augue consequat diam, non finibus odio erat porttitor lacus. Nullam volutpat eleifend velit eget condimentum. Phasellus in bibendum nisl. Vestibulum rutrum tristique felis, eu luctus ante efficitur iaculis. Vivamus mollis leo magna, vel sodales est rutrum sollicitudin. Suspendisse semper eros tortor, a sagittis ex gravida porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse lectus libero, fringilla vel tincidunt tincidunt, porttitor in nibh. Proin luctus massa non diam viverra, a tincidunt odio bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut arcu sollicitudin, vulputate ipsum sed, bibendum erat.</p>
        `,
        'tenis-de-mesa': `
            <h3 class="text-2xl font-bold text-azul mb-3">Tênis de Mesa</h3>
            <p class="leading-relaxed">Curabitur lobortis elit a ante aliquet, quis egestas justo efficitur. Cras commodo nulla massa, sit amet ultrices dolor vulputate nec. Nullam quis dapibus metus, vitae lobortis mauris. Vivamus velit massa, ornare vel risus quis, pellentesque cursus lectus. Nam libero lorem, dignissim vel tristique quis, luctus sit amet libero. Curabitur blandit consectetur ante. Curabitur sed risus diam. Mauris ac purus ligula. Nulla sit amet tortor ex. Nam in commodo nisl. Praesent cursus erat non mauris vulputate, sed bibendum nibh placerat. Nullam porttitor dignissim purus, at interdum dui tincidunt elementum. Aliquam a fermentum turpis. Duis tincidunt rutrum posuere. Nulla vel tincidunt ligula, et malesuada dolor. Vivamus gravida lorem et imperdiet eleifend.</p>
        `
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
});