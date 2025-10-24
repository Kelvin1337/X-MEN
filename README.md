# PRINCIPAIS PERSONAGENS DOS X-MENS! 

> Status do projeto: Finalizado! :heavy_check_mark:
> # Projeto X-Men: Seleção de Personagens

![Capa do Projeto - Uma imagem representativa da tela de seleção de personagens]([Screenshot 2023-07-26 at 14-21-02 Projeto X-Men - Semana do Zero Ao Programador Contratado](https://github.com/chelo-1/X-MEN/assets/131183713/b8a3a475-9378-473c-ba42-27410ca6482d)

Um projeto simples de **Seleção de Personagens** baseado nos **X-Men**, desenvolvido para praticar conceitos de HTML, CSS (incluindo responsividade) e JavaScript. O objetivo é criar uma interface interativa onde o usuário pode selecionar um personagem e visualizar seus detalhes.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **HTML5:** Estrutura e marcação do conteúdo.
* **CSS3:** Estilização, layout responsivo e animações.
* **JavaScript (Puro):** Para a lógica de interação (seleção e troca de informações dos personagens).
* **Google Fonts:** Utilização da fonte *Oxanium*.

## ✨ Funcionalidades

* **Seleção Interativa:** Ao clicar ou navegar (usando o teclado) nos cards dos personagens, o personagem selecionado é destacado.
* **Exibição de Detalhes:** O nome e a descrição do personagem selecionado são atualizados no painel lateral.
* **Troca de Imagem:** A imagem em destaque do personagem é trocada de forma suave (efeito `fade-in`/`fade-out`).
* **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela (desktop, tablet e mobile) conforme as media queries definidas.
* **Estilo Neon/Dark:** Utiliza variáveis CSS para gerenciar cores e transições, dando um aspecto moderno e temático.

## 🛠️ Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```
3.  **Abra o arquivo `index.html`** no seu navegador de preferência.

*Como alternativa, você pode usar a extensão "Live Server" no VS Code ou ferramenta similar para facilitar a visualização das alterações.*

## 🎨 Estrutura de Arquivos (Sugestão)

O projeto segue a seguinte estrutura de diretórios:
. ├── src/ │ ├── css/ │ │ ├── estilos.css # Arquivo principal de estilos │ │ └── reset.css # Arquivo para resetar estilos padrão do navegador │ ├── imagens/ │ │ ├── bg-desktop.jpg # Imagem de fundo │ │ ├── card-.jpg # Miniaturas dos personagens │ │ ├── card-.png # Imagens grandes dos personagens │ │ └── logo.svg # Logo do projeto │ └── js/ │ └── index.js # Lógica JavaScript (a ser implementada) └── index.html # Arquivo principal HTML └── README.md # Esta documentação

## 📐 Layout Responsivo

O design foi ajustado para os seguintes pontos de quebra (breakpoints):

| Largura Máxima | Ajustes Principais |
| :--- | :--- |
| **`@media (max-width: 1120px)`** | `flex-direction: column-reverse;` na seção principal, redimensionamento de imagens (miniaturas e destaque), e ajustes de margem/padding para mobile. |
| **`@media (max-width: 450px)`** | Redução do tamanho da imagem em destaque e ajustes finos no padding do cabeçalho. |

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou correções, sinta-se à vontade para:

1.  Fazer um **Fork** do projeto.
2.  Criar uma **Branch** para sua feature (`git checkout -b feature/minha-melhoria`).
3.  Comitar suas mudanças (`git commit -m 'feat: Adiciona nova melhoria'`).
4.  Fazer **Push** para a Branch (`git push origin feature/minha-melhoria`).
5.  Abrir um **Pull Request**.
