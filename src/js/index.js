const personagens = document.querySelectorAll('.personagem');
const imagemPersonagemGrande = document.querySelector('.personagem-grande');
const nomePersonagem = document.getElementById('nome-personagem');
const descricaoPersonagem = document.getElementById('descricao-personagem');

const idsPersonagens = ['ciclope', 'jean-grey', 'lince-negra', 'tempestade', 'vampira', 'wolverine', 'noturno', 'magneto'];

function preCarregarImagens() {
    idsPersonagens.forEach(id => {
        const img = new Image();
        img.src = `./src/imagens/card-${id}.png`;
    });
}

preCarregarImagens();


personagens.forEach((personagem) => {
    
    personagem.addEventListener('mouseenter', () => {
        handleSelecao(personagem);
    });

    personagem.addEventListener('click', () => {
        handleSelecao(personagem);
    });

    personagem.addEventListener('focus', () => {
        handleSelecao(personagem);
    });
});

/**
 * Função principal que lida com a seleção de um personagem.
 * @param {HTMLElement} novoPersonagem - O elemento LI do personagem selecionado.
 */
function handleSelecao(novoPersonagem) {
    if(window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    if (novoPersonagem.classList.contains('selecionado')) {
        return;
    }

    removerSelecaoDoPersonagem();
    
    selecionarNovoPersonagem(novoPersonagem);

    atualizarPersonagemSelecionadoComTransicao(novoPersonagem);
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

function selecionarNovoPersonagem(personagem) {
    personagem.classList.add('selecionado');
}

/**
 * @param {HTMLElement} personagem - O elemento LI do personagem selecionado.
 */
function atualizarPersonagemSelecionadoComTransicao(personagem) {
    const idPersonagem = personagem.id; 
    const nome = personagem.dataset.name; 
    const descricao = personagem.dataset.description; 

    imagemPersonagemGrande.classList.add('fade-out');
    imagemPersonagemGrande.classList.remove('fade-in'); 

    const listener = () => {
        
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        nomePersonagem.innerText = nome;
        descricaoPersonagem.innerText = descricao;

        imagemPersonagemGrande.classList.remove('fade-out');
        imagemPersonagemGrande.classList.add('fade-in');

        imagemPersonagemGrande.removeEventListener('transitionend', listener);
    };

    imagemPersonagemGrande.addEventListener('transitionend', listener, { once: true });
}