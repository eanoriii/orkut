document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');  // Seleciona os botões de aba

    // Função chamada quando uma aba é clicada
    const tabClicked = (tab) => {
        // Remover a classe 'active' de todas as abas
        tabs.forEach(tab => tab.classList.remove('active'));

        // Adicionar a classe 'active' à aba clicada
        tab.classList.add('active');

        // Ocultar todos os conteúdos de publicação
        const contents = document.querySelectorAll('.publicacao');
        contents.forEach(publicacao => {
            // Remover a classe 'show' de todas as publicações
            publicacao.classList.remove('show');
            // Ocultar todas as publicações
            publicacao.style.display = 'none';
        });

        // Obter o ID do conteúdo relacionado à aba clicada
        const contentId = tab.getAttribute('content-id');
        const publicaçao = document.getElementById(contentId);

        // Exibir o conteúdo relacionado à aba
        publicaçao.classList.add('show');
        publicaçao.style.display = 'block';  // Mostra o conteúdo
    };

    // Adicionar o evento de clique em todas as abas
    tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

    // Inicializar a aba ativa quando a página carrega
    const currentActiveTab = document.querySelector('.tab-btn.active');
    tabClicked(currentActiveTab);
});
