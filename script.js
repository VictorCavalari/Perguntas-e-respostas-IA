const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você é um jogador calmo ou estressado? ",
        alternativas: [
            {
                texto: "CALMO",
                afirmacao: "Você é uma pessoa que procura aqueles jogos que não possuem um risco alto de te estressar, ou apenas mantém a calma em momentos estressantes. "
            },
            {
                texto: "ESTRESSADO",
                afirmacao: "Você é aquele tipo de pessoa  que se estressa fácil e não tenta esconder isso, descontando no objeto mais próximo de você."
            }
        ]
    },
    {
        enunciado: "você é um jogador competitivo ou casual? ",
        alternativas: [
            {
                texto: "COMPETITIVO",
                afirmacao: "Você é uma pessoa que se esforça para  sempre melhorar, tenta entender os metas e procura sempre estar um passo a frente de seu adversário."
            },
            {
                texto: "CASUAL",
                afirmacao: "Você é uma pessoa que gosta de se divertir ao máximo, seja sozinho ou com amigos, sempre tenta extrair o máximo de diversão  independente do objetivo proposto do jogo."
            }
        ]
    },
    {
        enunciado: "você é um jogador de FPS ou geral? ",
        alternativas: [
            {
                texto: "FPS",
                afirmacao: "Você prefere os jogos com mais ação e tiro buscando sempre a ambição ser o melhor e chegar no topo."
            },
            {
                texto: "Geral",
                afirmacao: "Você é um jogador que gosta de aproveitar jogos com bastante histórias, sempre se divertindo e aproveitando o máximo."
            }
        ]
    },
    
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
