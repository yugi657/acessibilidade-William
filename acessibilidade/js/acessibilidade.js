    "use strict";

    /*
    |--------------------------------------------------------------------------
    | PAINEL DE ACESSIBILIDADE
    |--------------------------------------------------------------------------
    */

    const abrirAcessibilidade = document.querySelector(
        "#abrirAcessibilidade"
    );

    const fecharAcessibilidade = document.querySelector(
        "#fecharAcessibilidade"
    );

    const painelAcessibilidade = document.querySelector(
        "#painelAcessibilidade"
    );

    const botoesAcessibilidade = document.querySelectorAll(
        "[data-recurso]"
    );

    const recursos = {
        textoMaior: "texto-maior",
        alturaLinha: "altura-linha",
        alinharTexto: "alinhar-texto",
        fonteLegivel: "fonte-legivel",
        altoContraste: "alto-contraste",
        cinza: "cinza",
        ocultarImagens: "ocultar-imagens",
        pausarAnimacoes: "pausar-animacoes",
        destacarLinks: "destacar-links",
        contornoFoco: "contorno-foco",
        mascaraLeitura: "mascara-leitura",
        estruturaPagina: "estrutura-pagina"
    };

    function abrirPainelAcessibilidade() {
        if (!painelAcessibilidade) {
            return;
        }

        painelAcessibilidade.hidden = false;

        if (fecharAcessibilidade) {
            fecharAcessibilidade.focus();
        }
    }

    function fecharPainelAcessibilidade() {
        if (!painelAcessibilidade) {
            return;
        }

        painelAcessibilidade.hidden = true;

        if (abrirAcessibilidade) {
            abrirAcessibilidade.focus();
        }
    }

    if (abrirAcessibilidade) {
        abrirAcessibilidade.addEventListener(
            "click",
            abrirPainelAcessibilidade
        );
    }

    if (fecharAcessibilidade) {
        fecharAcessibilidade.addEventListener(
            "click",
            fecharPainelAcessibilidade
        );
    }

    function salvarPreferencias() {
        const recursosAtivos = [...botoesAcessibilidade]
            .filter((botao) => botao.classList.contains("ativo"))
            .map((botao) => botao.dataset.recurso);

        localStorage.setItem(
            "acessibilidade",
            JSON.stringify(recursosAtivos)
        );
    }

    function ativarRecurso(botao, salvar = true) {
        if (!botao) {
            return;
        }

        const nomeRecurso = botao.dataset.recurso;
        const classeRecurso = recursos[nomeRecurso];

        if (!classeRecurso) {
            console.warn(
                `Recurso de acessibilidade não configurado: ${nomeRecurso}`
            );
            return;
        }

        const recursoAtivo = document.body.classList.toggle(
            classeRecurso
        );

        botao.classList.toggle("ativo", recursoAtivo);
        botao.setAttribute(
            "aria-pressed",
            String(recursoAtivo)
        );

        if (salvar) {
            salvarPreferencias();
        }
    }

    botoesAcessibilidade.forEach((botao) => {
        botao.setAttribute("aria-pressed", "false");

        botao.addEventListener("click", () => {
            ativarRecurso(botao);
        });
    });

    function carregarPreferencias() {
        let preferenciasSalvas = [];

        try {
            preferenciasSalvas = JSON.parse(
                localStorage.getItem("acessibilidade") || "[]"
            );
        } catch (erro) {
            console.warn(
                "Não foi possível carregar as preferências de acessibilidade."
            );
        }

        if (!Array.isArray(preferenciasSalvas)) {
            return;
        }

        preferenciasSalvas.forEach((nomeRecurso) => {
            const botao = document.querySelector(
                `[data-recurso="${nomeRecurso}"]`
            );

            if (botao) {
                ativarRecurso(botao, false);
            }
        });
    }


    /*
    |--------------------------------------------------------------------------
    | SLIDES DA APRESENTAÇÃO
    |--------------------------------------------------------------------------
    */

    const slides = [
        {
            title: "Vamos Programar e Criar! 🚀",
            subtitle: "Uma Aventura com o Scratch",
            content: "Bem-vindos à nossa aula de programação!"
        },

        {
            title: "Olá, Pequenos Programadores! 👋",
            content: [
                "Hoje vamos aprender algo muito legal",
                "O que é programação?",
                "O que é um algoritmo?",
                "O que são variáveis?",
                "O que são loops?",
                "Vamos criar nossos próprios jogos e histórias",
                "E o melhor: vai ser super divertido!"
            ]
        },

        {
            title: "O que é Programação? 🤔",
            content: [
                "É como dar instruções para um robô",
                "Igual quando você ensina seu pet novos truques",
                "O computador segue nossas instruções passo a passo"
            ]
        },

        {
            title: "Vamos Brincar de Robô? 🤖",
            subtitle: "Atividade Interativa:",
            content: [
                "Levante a mão direita",
                "Dê dois passos para frente",
                "Gire uma vez",
                "Pule três vezes",
                "Vejam só! Vocês acabaram de criar um algoritmo!"
            ]
        },

        {
            title: "O que é um Algoritmo? 📝",
            subtitle: "É como uma receita de bolo!",
            content: [
                "Um algoritmo é uma sequência de passos para fazer algo",
                "É como quando você segue uma receita de bolo",
                "Ou quando você se prepara para ir à escola",
                "Tudo que fazemos tem uma ordem, um passo a passo!"
            ]
        },

        {
            title: "Vamos Criar um Algoritmo? 🍰",
            subtitle: "Receita do Sanduíche Mágico",
            content: [
                "1. Pegue duas fatias de pão",
                "2. Passe manteiga em uma fatia",
                "3. Coloque uma fatia de queijo",
                "4. Coloque uma fatia de presunto",
                "5. Feche com a outra fatia de pão",
                "Pronto! Este é um algoritmo de fazer sanduíche!"
            ]
        },

        {
            title: "Hora de Praticar! 🎨",
            subtitle: "Crie seu próprio algoritmo",
            content: [
                "Pense em algo que você faz todos os dias",
                "Por exemplo: escovar os dentes",
                "Escreva todos os passos",
                "Não esqueça nenhum detalhe",
                "Agora você já sabe criar algoritmos!"
            ]
        },

        {
            title: "Hora de Criar! 🎨",
            subtitle: "Escovando os dentes",
            content: [
                "1. Pegar a escova de dentes",
                "2. Abrir a torneira",
                "3. Molhar a escova de dentes",
                "4. Fechar a torneira",
                "5. Colocar a pasta de dente na escova",
                "6. Abrir a boca"
            ]
        },

        {
            title: "Estruturas Condicionais 🤔",
            content: [
                "Vamos aprender como usar condicionais, que são como perguntas que fazemos ao computador para decidir o que fazer.",
                "Imagine que você quer atravessar a rua. Você precisa verificar se é seguro antes de atravessar. Vamos criar um algoritmo com condições!"
            ]
        },

        {
            title: "Estruturas Condicionais 🤔",
            subtitle: "**Algoritmo para atravessar a rua:**",
            content: [
                "1. Olhe para o semáforo.",
                "2. **Se** o semáforo estiver verde para os pedestres:",
                "   - Atravesse a rua.",
                "3. **Se não**:",
                "   - Espere o semáforo ficar verde.",
                "As condicionais são como perguntas que ajudam a tomar decisões, assim como fazemos na vida real!"
            ]
        },

        {
            title: "Hora de Praticar! 🎨",
            subtitle: "Continuando",
            content: [
                "7. Escovar os dentes de cima por 20 segundos",
                "8. Escovar os dentes de baixo por 20 segundos",
                "9. Escovar a língua levemente por 10 segundos",
                "10. Abrir a torneira",
                "11. Enxaguar a boca com água",
                "12. Enxaguar a escova de dentes",
                "13. Fechar a torneira",
                "14. Guardar a escova de dentes",
                "Dar um sorriso no espelho para conferir se está tudo limpo!"
            ]
        },

        {
            title: "O que são Variáveis? 📦",
            subtitle: "São como caixinhas mágicas!",
            content: [
                "<img src='Estante.png' alt='Estante de brinquedos' width='90'>"
            ]
        },

        {
            title: "O que são Variáveis? 📦",
            subtitle: "São como caixinhas mágicas!",
            content: [
                "Variáveis são como caixas onde guardamos coisas",
                "Imagine que as variáveis são como uma estante de brinquedos.",
                "Cada gaveta pode guardar um brinquedo diferente.",
                "Podemos colocar bolas, bonecas, carrinhos e até doces!",
                "Podemos guardar números, palavras, cores...",
                "Quando precisamos de um brinquedo, abrimos a gaveta certa."
            ]
        },

        {
            title: "O que são Variáveis? 📦",
            subtitle: "São como caixinhas mágicas!",
            content: [
                "E podemos mudar o que está dentro da caixa quando quisermos!",
                "É como uma caixa de brinquedos que pode guardar diferentes coisas",
                "As variáveis fazem a mesma coisa com números e palavras no computador!"
            ]
        },

        {
            title: "Brincando com Variáveis 📦",
            subtitle: "Vamos criar algumas variáveis?",
            content: [
                "nome = 'João'",
                "idade = 8",
                "cor_favorita = 'azul'",
                "altura = 1.30",
                "Cada caixinha guarda uma informação diferente!"
            ]
        },

        {
            title: "Jogo das Variáveis 🎲",
            subtitle: "Vamos brincar!",
            content: [
                "pontos = 0. Começamos com zero pontos.",
                "Se acertar uma estrela ao pular: pontos = pontos + 1",
                "Se pegar uma moeda: pontos = pontos + 5",
                "Se perder uma vida: pontos = pontos - 5",
                "As variáveis mudam conforme jogamos!"
            ]
        },

        {
            title: "Loops Mágicos! ✨",
            subtitle: "Repetindo Coisas com Facilidade",
            content: [
                "Imagine que você está brincando de Lego e quer construir uma torre alta!",
                "Você pode usar o mesmo bloco várias vezes, certo?",
                "É como se você estivesse usando um loop!",
                "Em programação, um loop é como um comando mágico que diz ao computador para fazer algo várias vezes.",
                "É como um atalho para não ter que escrever a mesma coisa várias vezes."
            ]
        },

        {
            title: "Exemplos de Loops",
            content: [
                "**Construir uma Torre de Lego:** Imagine que você precisa colocar 10 blocos vermelhos na torre. Você pode usar um loop que diz: Coloque um bloco vermelho. Repita isso 10 vezes!",
                "**Desenhar Flores:** Se você quiser desenhar 5 flores amarelas, pode usar um loop que diz: Desenhe uma flor amarela. Repita isso 5 vezes!",
                "Os loops são como mágicos que fazem as coisas repetirem para nós!"
            ]
        },

        {
            title: "Tipos de Loops",
            content: [
                "Existem diferentes tipos de loops, mas a ideia principal é a mesma: fazer algo várias vezes!",
                "<a href='https://scratch.mit.edu/projects/1094479094/editor' target='_blank' rel='noopener noreferrer'>Um exemplo de loop no Scratch</a>",
                "**Loop para, também chamado de for loop:** Esse loop é ótimo quando você sabe quantas vezes quer que algo aconteça.",
                "**Loop enquanto, também chamado de while loop:** Esse loop é ótimo quando você quer que algo aconteça até que uma condição seja satisfeita.",
                "Podemos usar o loop que for mais adequado para o que queremos fazer!"
            ]
        },

        {
            title: "Loops: Super Poderosos!",
            content: [
                "Loops são muito importantes para programação!",
                "Eles facilitam a vida dos programadores e permitem que eles criem programas mais complexos e eficientes."
            ]
        },

        {
            title: "Vamos Praticar com o Scratch! 😺",
            content: [
                "No Scratch, também usamos variáveis",
                "Podemos criar pontuação para jogos",
                "Guardar o nome do jogador",
                "Contar vidas",
                "E muito mais!"
            ]
        },

        {
            title: "Como o Scratch Funciona 🎮",
            content: [
                "Usamos blocos coloridos",
                "Cada cor tem uma função especial:",
                "<span style='color: blue;'>Azuis: Movimento</span>",
                "<span style='color: purple;'>Roxos: Aparência</span>",
                "<span style='color: rgb(255, 200, 50);'>Amarelos: Eventos</span>",
                "<span style='color: green;'>Verdes: Som</span>",
                "<span style='color: orange;'>Laranja: Controle</span>"
            ]
        },

        {
            title: "Criando um Jogo Simples 🌟",
            subtitle: "Vamos usar algoritmos e variáveis!",
            content: [
                "1. Criar uma variável pontos",
                "2. Fazer o Jaime se mover para lá e para cá",
                "3. Quando pegar uma estrela, ganha pontos",
                "4. Mostrar os pontos na tela",
                "5. Parar os carros quando chegar a 5 pontos!"
            ]
        },

        {
            title: "Hora de Criar! 🎨",
            subtitle: "Atividade Prática:",
            content: [
                "Crie seu próprio personagem",
                "Faça ele se mover usando algoritmos",
                "Use variáveis para contar pontos",
                "Adicione sons e efeitos especiais"
            ]
        },

        {
            title: "Dicas para Ser um Ótimo Programador 🌈",
            content: [
                "Não tenha medo de errar",
                "Use sua imaginação",
                "Peça ajuda quando precisar",
                "Divirta-se aprendendo!"
            ]
        },

        {
            title: "Desafio Final! 🏆",
            subtitle: "Use tudo que aprendeu",
            content: [
                "Crie um jogo usando:",
                "Pelo menos um algoritmo",
                "Duas ou mais variáveis",
                "Movimento e sons",
                "Mostre para seus amigos e família!"
            ]
        },

        {
            title: "Parabéns! 🎉",
            content: [
                "Vocês entraram no mundo da programação agora!",
                "Aprenderam sobre algoritmos, variáveis e loops",
                "Criaram seus próprios jogos",
                "Na próxima aula vamos aprender mais coisas legais!"
            ]
        },

        {
            title: "Obrigado pela atenção!",
            content: []
        }
    ];


    /*
    |--------------------------------------------------------------------------
    | ESTADO E ELEMENTOS DA APRESENTAÇÃO
    |--------------------------------------------------------------------------
    */

    let slideAtual = 0;
    const totalDeSlides = slides.length;

    const tituloSlide = document.querySelector("#slide-title");
    const subtituloSlide = document.querySelector("#slide-subtitle");
    const conteudoSlide = document.querySelector("#slide-content");
    const botaoAnterior = document.querySelector("#prev-btn");
    const botaoProximo = document.querySelector("#next-btn");
    const slideAtualElemento = document.querySelector("#current-slide");
    const totalSlidesElemento = document.querySelector("#total-slides");
    const seletorSlides = document.querySelector("#slide-selector");

    let botaoLerSlide = document.querySelector("#read-slide-btn");

    if (!botaoLerSlide) {
        botaoLerSlide = document.createElement("button");
        botaoLerSlide.id = "read-slide-btn";
        botaoLerSlide.type = "button";
        botaoLerSlide.className = "read-button";
        botaoLerSlide.textContent = "🔊 Ler slide atual";
        botaoLerSlide.setAttribute(
            "aria-label",
            "Ler o slide atual em voz alta"
        );

        const areaNavegacao = document.querySelector(".navigation");

        if (areaNavegacao) {
            areaNavegacao.appendChild(botaoLerSlide);
        }
    }


    /*
    |--------------------------------------------------------------------------
    | LEITURA DO SLIDE
    |--------------------------------------------------------------------------
    */

    function removerMarkdown(texto) {
        return texto
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .replace(/__(.*?)__/g, "$1")
            .replace(/`(.*?)`/g, "$1");
    }

    function transformarConteudoEmTexto(texto) {
        if (!texto) {
            return "";
        }

        const elementoTemporario = document.createElement("div");

        elementoTemporario.innerHTML = texto;

        elementoTemporario
            .querySelectorAll("script, style")
            .forEach((elemento) => {
                elemento.remove();
            });

        elementoTemporario
            .querySelectorAll("img")
            .forEach((imagem) => {
                const textoAlternativo =
                    imagem.getAttribute("alt") || "Imagem";

                imagem.replaceWith(
                    document.createTextNode(textoAlternativo)
                );
            });

        return removerMarkdown(
            elementoTemporario.textContent || ""
        )
            .replace(/\s+/g, " ")
            .trim();
    }

    function obterTextoDoSlide(slide) {
        const partes = [];

        if (slide.title) {
            partes.push(slide.title);
        }

        if (slide.subtitle) {
            partes.push(slide.subtitle);
        }

        if (Array.isArray(slide.content)) {
            partes.push(...slide.content);
        } else if (slide.content) {
            partes.push(slide.content);
        }

        return partes
            .map(transformarConteudoEmTexto)
            .filter((texto) => texto.length > 0)
            .join(". ");
    }

    function pararLeituraAtual() {
        if (
            window.responsiveVoice &&
            typeof window.responsiveVoice.cancel === "function"
        ) {
            window.responsiveVoice.cancel();
        }

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
    }

    function falarTexto(texto) {
        if (!texto) {
            return;
        }

        pararLeituraAtual();

        /*
        * ResponsiveVoice é utilizado primeiro porque
        * foi incluído no HTML da aplicação.
        */
        if (
            window.responsiveVoice &&
            typeof window.responsiveVoice.speak === "function"
        ) {
            window.responsiveVoice.speak(
                texto,
                "Brazilian Portuguese Male",
                {
                    rate: 1,
                    volume: 1,
                    onstart: () => {
                        if (botaoLerSlide) {
                            botaoLerSlide.textContent =
                                "🔊 Ler slide atual";
                        }
                    },
                    onended: () => {
                        if (botaoLerSlide) {
                            botaoLerSlide.textContent =
                                "⏸️ Leitura em andamento";
                        }
                    }
                    /*onend: () => {
                    *    if(botaoLerSlide){
                    *        botaoLerSlide.textContent =
                    *     " 🔇 Leitura Finalizada"
                    *   }
                    }*/
                }
            );

            return;
        }

        /*
        * Alternativa nativa do navegador.
        */
        if ("speechSynthesis" in window) {
            const fala = new SpeechSynthesisUtterance(texto);

            fala.lang = "pt-BR";
            fala.rate = 1;
            fala.pitch = 1;
            fala.volume = 1;

            fala.onstart = () => {
                if (botaoLerSlide) {
                    botaoLerSlide.textContent =
                        "⏸️ Leitura em andamento";
                }
            };

            fala.onend = () => {
                if (botaoLerSlide) {
                    botaoLerSlide.textContent =
                        "🔊 Ler slide atual";
                }
            };

            window.speechSynthesis.speak(fala);

            return;
        }

        console.warn(
            "Este navegador não oferece suporte à leitura em voz alta."
        );
    }

    function falarSlideAtual() {
        const slide = slides[slideAtual];

        if (!slide) {
            return;
        }

        const textoDoSlide = obterTextoDoSlide(slide);

        falarTexto(textoDoSlide);
    }

    /*
    |--------------------------------------------------------------------------
    | RENDERIZAÇÃO DOS SLIDES
    |--------------------------------------------------------------------------
    */

    function escaparTexto(texto) {
        const elemento = document.createElement("div");
        elemento.textContent = texto;
        return elemento.innerHTML;
    }

    function formatarTexto(texto) {
        const textoSeguro = escaparTexto(texto);

        return textoSeguro.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );
    }

    function renderizarItemDoSlide(item) {
        if (!item) {
            return "";
        }

        const itemLimpo = item.trim();

        /*
        * Os conteúdos HTML existentes nos slides são mantidos.
        * Eles são conteúdos fixos definidos pelo próprio desenvolvedor.
        */
        if (
            itemLimpo.startsWith("<img") ||
            itemLimpo.startsWith("<a") ||
            itemLimpo.startsWith("<span")
        ) {
            return itemLimpo;
        }

        return `<p>${formatarTexto(itemLimpo)}</p>`;
    }

    function renderizarConteudoDoSlide(slide) {
        if (!conteudoSlide) {
            return;
        }

        if (Array.isArray(slide.content)) {
            conteudoSlide.innerHTML = slide.content
                .map(renderizarItemDoSlide)
                .join("");
        } else {
            conteudoSlide.innerHTML = slide.content
                ? renderizarItemDoSlide(slide.content)
                : "";
        }
    }

    function atualizarSlide() {
        const slide = slides[slideAtual];

        if (!slide) {
            return;
        }

        if (tituloSlide) {
            tituloSlide.textContent = slide.title || "";
        }

        if (subtituloSlide) {
            subtituloSlide.textContent = slide.subtitle
                ? transformarConteudoEmTexto(slide.subtitle)
                : "";
        }

        renderizarConteudoDoSlide(slide);

        conteudoSlide.classList.toggle(
            "slide-centralizado",
            slideAtual === 0
        );

        if (slideAtualElemento) {
            slideAtualElemento.textContent = slideAtual + 1;
        }

        if (totalSlidesElemento) {
            totalSlidesElemento.textContent = totalDeSlides;
        }

        if (seletorSlides) {
            seletorSlides.value = String(slideAtual);
        }

        if (botaoAnterior) {
            botaoAnterior.disabled = slideAtual === 0;
        }

        if (botaoProximo) {
            botaoProximo.disabled =
                slideAtual === totalDeSlides - 1;
        }

        /*
        * Esta chamada faz a voz ler todos os slides
        * sempre que o conteúdo for atualizado.
        */
        falarSlideAtual();
    }


    /*
    |--------------------------------------------------------------------------
    | SELETOR DE SLIDES
    |--------------------------------------------------------------------------
    */

    function inicializarSeletorDeSlides() {
        if (!seletorSlides) {
            return;
        }

        seletorSlides.innerHTML = "";

        for (let indice = 0; indice < totalDeSlides; indice++) {
            const opcao = document.createElement("option");

            opcao.value = String(indice);
            opcao.textContent =
                `Slide ${indice + 1} de ${totalDeSlides}`;

            seletorSlides.appendChild(opcao);
        }
    }


    /*
    |--------------------------------------------------------------------------
    | NAVEGAÇÃO
    |--------------------------------------------------------------------------
    */

    function proximoSlide() {
        if (slideAtual >= totalDeSlides - 1) {
            return;
        }

        slideAtual++;
        atualizarSlide();
    }

    function slideAnterior() {
        if (slideAtual <= 0) {
            return;
        }

        slideAtual--;
        atualizarSlide();
    }

    function irParaSlide(indice) {
        const novoIndice = Number(indice);

        if (
            Number.isNaN(novoIndice) ||
            novoIndice < 0 ||
            novoIndice >= totalDeSlides
        ) {
            return;
        }

        slideAtual = novoIndice;
        atualizarSlide();
    }

    if (botaoAnterior) {
        botaoAnterior.addEventListener(
            "click",
            slideAnterior
        );
    }

    if (botaoProximo) {
        botaoProximo.addEventListener(
            "click",
            proximoSlide
        );
    }

    if (seletorSlides) {
        seletorSlides.addEventListener("change", (evento) => {
            irParaSlide(evento.target.value);
        });
    }

    if (botaoLerSlide) {
        botaoLerSlide.addEventListener(
            "click",
            falarSlideAtual
        );
    }


    /*
    |--------------------------------------------------------------------------
    | NAVEGAÇÃO PELO TECLADO
    |--------------------------------------------------------------------------
    */

    function elementoEstáSendoEditado(elemento) {
        if (!elemento) {
            return false;
        }

        const nomeDaTag = elemento.tagName
            ? elemento.tagName.toUpperCase()
            : "";

        return (
            nomeDaTag === "input" ||
            nomeDaTag === "textarea" ||
            nomeDaTag === "select" ||
            elemento.isContentEditable
        );
    }

    document.addEventListener("keydown", (evento) => {
        if (elementoEstáSendoEditado(evento.target)) {
            return;
        }

        if (evento.key === "ArrowRight") {
            evento.preventDefault();
            proximoSlide();
        }

        if (evento.key === "ArrowLeft") {
            evento.preventDefault();
            slideAnterior();
        }

        if (evento.key === "PageDown") {
            evento.preventDefault();
            proximoSlide();
        }

        if (evento.key === "PageUp") {
            evento.preventDefault();
            slideAnterior();
        }

        if (evento.key === "Escape") {
            fecharPainelAcessibilidade();
            pararLeituraAtual();
        }
    });


    /*
    |--------------------------------------------------------------------------
    | INICIALIZAÇÃO
    |--------------------------------------------------------------------------
    */

    inicializarSeletorDeSlides();
    atualizarSlide();
    carregarPreferencias();