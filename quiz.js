
const EMBARALHAR_PERGUNTAS = true; 
const QUANTIDADE_PERGUNTAS = 0;   


const perguntas = [
  {
    pergunta: "Em que ano a Ado nasceu?",
    imagem: "",
    opcoes: ["2000", "2001", "2002", "2003"],
    correta: 2,
    explicacao: "Ado nasceu em 24 de outubro de 2002.",
  },
  {
    pergunta: "Qual é a data de aniversário da Ado?",
    imagem: "",
    opcoes: ["24 de outubro", "23 de outubro", "10 de janeiro", "26 de janeiro"],
    correta: 0,
    explicacao: "O aniversário dela é em 24 de outubro.",
  },
  {
    pergunta: "Em qual cidade a Ado nasceu?",
    imagem: "",
    opcoes: ["Osaka", "Tóquio", "Quioto", "Yokohama"],
    correta: 1,
    explicacao: "Ela nasceu em Tóquio, no Japão.",
  },
  {
    pergunta: "Qual foi o single de estreia da Ado em uma gravadora grande?",
    imagem: "",
    opcoes: ["New Genesis", "Readymade", "Gira Gira", "Usseewa"],
    correta: 3,
    explicacao: "Usseewa foi lançada em 23 de outubro de 2020 e chegou ao 1º lugar da Billboard Japan Hot 100.",
  },
  {
    pergunta: "Em que ano a Ado estreou com Usseewa?",
    imagem: "",
    opcoes: ["2018", "2019", "2020", "2021"],
    correta: 2,
    explicacao: "A estreia foi em outubro de 2020.",
  },
  {
    pergunta: "Que idade a Ado tinha quando lançou Usseewa?",
    imagem: "",
    opcoes: ["17 anos", "15 anos", "19 anos", "21 anos"],
    correta: 0,
    explicacao: "Ela lançou a música um dia antes de completar 18 anos.",
  },
  {
    pergunta: "Quem escreveu e produziu Usseewa?",
    imagem: "",
    opcoes: ["Teniwoha", "Surii", "Vaundy", "Syudou"],
    correta: 3,
    explicacao: "Usseewa foi escrita pelo produtor de Vocaloid Syudou.",
  },
  {
    pergunta: "Em qual plataforma a Ado começou como cantora de covers (utaite), em 2017?",
    imagem: "",
    opcoes: ["Niconico", "TikTok", "Twitch", "Spotify"],
    correta: 0,
    explicacao: "Ela começou postando covers no Niconico, site de vídeos japonês.",
  },
  {
    pergunta: "Qual foi a primeira cover que a Ado postou no Niconico?",
    imagem: "",
    opcoes: ["Kimi no Taion", "Usseewa", "Odo", "Readymade"],
    correta: 0,
    explicacao: "Em 10 de janeiro de 2017 ela postou sua versão de Kimi no Taion.",
  },
  {
    pergunta: "De onde vem o nome artístico Ado?",
    imagem: "",
    opcoes: [
      "Do Kyogen, teatro cômico tradicional japonês",
      "De uma palavra francesa",
      "Das iniciais do nome verdadeiro dela",
      "De um personagem de anime",
    ],
    correta: 0,
    explicacao: "No Kyogen existe o papel de coadjuvante chamado Ado. Ela gostou do som e do significado.",
  },
  {
    pergunta: "Qual é o primeiro nome da Ado?",
    imagem: "",
    opcoes: [
      "Miku",
      "Ado",
      "Sawaki",
      "Ao",
    ],
    correta: 3,
    explicacao: "De acordo com entrevistas e a autobiografia fictícia Vivarium,Ao é confirmado como seu primeiro nome real.",
  },
  {
    pergunta: "Sobre a aparência da Ado?",
    imagem: "",
    opcoes: [
      "Ela mostra parte do rosto em uma de suas músicas",
      "Ela usa sempre uma máscara branca",
      "Ela só mostra o rosto em fotos antigas",
      "Até onde se sabe, ela nunca mostrou o rosto ao público",
    ],
    correta: 0,
    explicacao: " No videoclipe de “Vivarium” (lançado em 28 de fevereiro de 2026), Ado apareceu pela primeira vez em cena real, mostrando perfil completo do rosto e do corpo, além de vislumbres de olhos (com lentes de contato coloridas) e nariz, mas sem mostrar o rosto de frente",
  },
  {
    pergunta: "Onde a Ado gravava as primeiras músicas?",
    imagem: "",
    opcoes: [
      "Em um estúdio profissional",
      "No armário do quarto, com material de isolamento sonoro",
      "Na sala de música da escola",
      "No porão de um amigo",
    ],
    correta: 1,
    explicacao: "Sem espaço em casa, ela montou um isolamento acústico dentro do armário e gravou ali.",
  },
  {
    pergunta: "Quando foi lançado o primeiro álbum de estúdio da Ado?",
    imagem: "",
    opcoes: ["Outubro de 2020", "Agosto de 2022", "Julho de 2024", "Janeiro de 2022"],
    correta: 3,
    explicacao: "O álbum foi lançado em 26 de janeiro de 2022.",
  },
  {
    pergunta: "Qual é o nome do primeiro álbum de estúdio da Ado?",
    imagem: "",
    opcoes: ["Kyōgen", "Zanmu", "Hibana", "Wish"],
    correta: 0,
    explicacao: "Kyōgen estreou em 1º lugar nas paradas japonesas.",
  },
  {
    pergunta: "Qual personagem de One Piece Film Red tem a voz cantada da Ado?",
    imagem: "",
    opcoes: ["Nami", "Yamato", "Uta", "Robin"],
    correta: 2,
    explicacao: "Ado é a voz cantada da Uta no filme de 2022.",
  },
  {
    pergunta: "Qual foi o segundo single da Ado, lançado em dezembro de 2020?",
    imagem: "",
    opcoes: ["Gira Gira", "Readymade", "Odo", "Asura-chan"],
    correta: 1,
    explicacao: "Readymade foi escrita pelo produtor Surii. Gira Gira veio depois, em fevereiro de 2021.",
  },
  {
    pergunta: "Quantas músicas a Ado cantou como Uta em One Piece Film Red?",
    imagem: "",
    opcoes: ["3", "5", "7", "10"],
    correta: 2,
    explicacao: "Foram sete músicas, cada uma composta por um artista diferente.",
  },
  {
    pergunta: "Quem compôs New Genesis, o tema do filme One Piece Film Red?",
    imagem: "",
    opcoes: ["Yasutaka Nakata", "Hiroyuki Sawano", "Vaundy", "Syudou"],
    correta: 0,
    explicacao: "New Genesis (Shinjidai) foi composta por Yasutaka Nakata.",
  },
  {
    pergunta: "Quem compôs Tot Musica, outra música da Uta no filme?",
    imagem: "",
    opcoes: ["Yasutaka Nakata", "Vaundy", "Yuta Orisaka", "Hiroyuki Sawano"],
    correta: 3,
    explicacao: "Tot Musica é de Hiroyuki Sawano, que queria aproveitar a energia e os vocais fortes da Ado.",
  },
  {
    pergunta: "Qual marca New Genesis alcançou na Apple Music em 2022?",
    imagem: "",
    opcoes: [
      "Foi a primeira música japonesa a chegar ao 1º lugar do Top 100 Global",
      "Foi removida do catálogo no Japão",
      "Ficou apenas na 100ª posição",
      "Nunca entrou em nenhum ranking",
    ],
    correta: 0,
    explicacao: "Foi a primeira música japonesa a liderar o Top 100 Global da Apple Music.",
  },
  {
    pergunta: "Em 2022, a Ado ocupou as 3 primeiras posições da Billboard Japan Hot 100 com New Genesis, I'm Invincible e qual outra música?",
    imagem: "",
    opcoes: ["Usseewa", "Odo", "Backlight", "Readymade"],
    correta: 2,
    explicacao: "New Genesis, I'm Invincible e Backlight ocuparam o top 3 ao mesmo tempo.",
  },
  {
    pergunta: "Com qual gravadora americana a Ado assinou em 2022 para lançar músicas nos EUA?",
    imagem: "",
    opcoes: ["Sony Music", "Geffen Records", "Warner Records", "Atlantic Records"],
    correta: 1,
    explicacao: "O contrato com a Geffen Records foi anunciado depois do aniversário de 20 anos dela.",
  },
  {
    pergunta: "Qual foi o nome da primeira turnê mundial da Ado, em 2024?",
    imagem: "",
    opcoes: ["Hibana", "Mirage", "Wish", "Shinzou"],
    correta: 2,
    explicacao: "A primeira turnê mundial, Wish, começou em fevereiro de 2024.",
  },
  {
    pergunta: "Qual foi o nome da segunda turnê mundial da Ado, em 2025?",
    imagem: "",
    opcoes: ["Wish", "Yodaka", "Hibana", "Campanella"],
    correta: 2,
    explicacao: "A Hibana passou por cinco continentes, com 34 shows e cerca de 500 mil pessoas.",
  },
  {
    pergunta: "O que significa Hibana em japonês?",
    imagem: "",
    opcoes: ["Faísca", "Sonho", "Revolução", "Estrela"],
    correta: 0,
    explicacao: "Hibana (火花) quer dizer faísca.",
  },
  {
    pergunta: "Em 2024, a Ado foi a primeira artista solo feminina a se apresentar em qual local?",
    imagem: "",
    opcoes: ["Tokyo Dome", "Nippon Budokan", "Saitama Super Arena", "Estádio Nacional do Japão"],
    correta: 3,
    explicacao: "O show Shinzou, em abril de 2024, foi no Estádio Nacional do Japão.",
  },
  {
    pergunta: "Qual é o nome do segundo álbum de estúdio da Ado, lançado em julho de 2024?",
    imagem: "",
    opcoes: ["Hibana", "Mirage", "Zanmu", "Yodaka"],
    correta: 2,
    explicacao: "Zanmu chegou ao 1º lugar nas paradas Oricon e Billboard Japan.",
  },
  {
    pergunta: "Com qual grupo de K-pop a Ado fez a versão japonesa de Unforgiven?",
    imagem: "",
    opcoes: ["IVE", "aespa", "NewJeans", "LE SSERAFIM"],
    correta: 3,
    explicacao: "Ela cantou a versão japonesa de Unforgiven, do LE SSERAFIM.",
  },
  {
    pergunta: "Qual música de 2026 a Ado escreveu (letra e música) e acompanha seu romance biográfico?",
    imagem: "",
    opcoes: ["Odo", "Vivarium", "Gira Gira", "Readymade"],
    correta: 1,
    explicacao: "Vivarium saiu em fevereiro de 2026 junto do livro Vivarium: Ado and Me.",
  },
];


const niveis = [
  {
    minimo: 90,
    titulo: "Fã número 1!",
    mensagem: "Você sabe tudo sobre a Ado. Parabéns!",
    imagem: "",
  },
  {
    minimo: 60,
    titulo: "Fã dedicado",
    mensagem: "Você conhece bastante, só faltou um pouquinho.",
    imagem: "",
  },
  {
    minimo: 30,
    titulo: "Fã iniciante",
    mensagem: "Você está no caminho. Que tal ouvir mais músicas dela?",
    imagem: "",
  },
  {
    minimo: 0,
    titulo: "Acabou de chegar",
    mensagem: "Tudo bem, todo fã começa de algum lugar. Tente de novo!",
    imagem: "",
  },
];


const quizBox = document.getElementById("quiz-box");
const resultadoBox = document.getElementById("resultado");
const contador = document.getElementById("contador");
const placar = document.getElementById("placar");
const barra = document.getElementById("barra-progresso");
const imagemPergunta = document.getElementById("imagem-pergunta");
const textoPergunta = document.getElementById("texto-pergunta");
const opcoesBox = document.getElementById("opcoes");
const feedback = document.getElementById("feedback");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const resultadoTitulo = document.getElementById("resultado-titulo");
const resultadoImagem = document.getElementById("resultado-imagem");
const resultadoPontos = document.getElementById("resultado-pontos");
const resultadoMensagem = document.getElementById("resultado-mensagem");


let lista = [];
let indice = 0;
let pontos = 0;
let respondeu = false;


function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}


function iniciarQuiz() {
  lista = EMBARALHAR_PERGUNTAS ? embaralhar(perguntas) : [...perguntas];

  if (QUANTIDADE_PERGUNTAS > 0) {
    lista = lista.slice(0, QUANTIDADE_PERGUNTAS);
  }

  indice = 0;
  pontos = 0;

  resultadoBox.hidden = true;
  quizBox.hidden = false;

  mostrarPergunta();
}


function mostrarPergunta() {
  respondeu = false;
  const atual = lista[indice];

  contador.textContent = `Pergunta ${indice + 1} de ${lista.length}`;
  placar.textContent = `Acertos: ${pontos}`;
  barra.style.width = `${(indice / lista.length) * 100}%`;

  textoPergunta.textContent = atual.pergunta;

 
  if (atual.imagem) {
    imagemPergunta.src = atual.imagem;
    imagemPergunta.alt = "Imagem da pergunta";
    imagemPergunta.hidden = false;
  } else {
    imagemPergunta.hidden = true;
    imagemPergunta.removeAttribute("src");
  }


  opcoesBox.innerHTML = "";
  atual.opcoes.forEach((texto, i) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "opcao";

    const letra = document.createElement("span");
    letra.className = "opcao-letra";
    letra.textContent = String.fromCharCode(65 + i); // A, B, C...

    const conteudo = document.createElement("span");
    conteudo.textContent = texto;

    botao.append(letra, conteudo);
    botao.addEventListener("click", () => escolher(i, botao));
    opcoesBox.appendChild(botao);
  });

  feedback.textContent = "";
  feedback.className = "feedback";
  btnProxima.hidden = true;
}


function escolher(escolhida, botaoClicado) {
  if (respondeu) return;
  respondeu = true;

  const atual = lista[indice];
  const botoes = opcoesBox.querySelectorAll(".opcao");

  botoes.forEach((b) => (b.disabled = true));
  botoes[atual.correta].classList.add("correta");

  if (escolhida === atual.correta) {
    pontos++;
    feedback.textContent = "Acertou! " + (atual.explicacao || "");
    feedback.classList.add("acertou");
  } else {
    botaoClicado.classList.add("errada");
    feedback.textContent = "Errou! " + (atual.explicacao || "");
    feedback.classList.add("errou");
  }

  placar.textContent = `Acertos: ${pontos}`;

  const ehUltima = indice === lista.length - 1;
  btnProxima.textContent = ehUltima ? "Ver resultado" : "Próxima";
  btnProxima.hidden = false;
}

function proxima() {
  if (indice < lista.length - 1) {
    indice++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

// Tela de resultado
function mostrarResultado() {
  barra.style.width = "100%";

  const porcentagem = Math.round((pontos / lista.length) * 100);
  const nivel = niveis.find((n) => porcentagem >= n.minimo) || niveis[niveis.length - 1];

  resultadoTitulo.textContent = nivel.titulo;
  resultadoPontos.textContent = `${pontos} / ${lista.length}`;
  resultadoMensagem.textContent = `${nivel.mensagem} (${porcentagem}% de acerto)`;

  if (nivel.imagem) {
    resultadoImagem.src = nivel.imagem;
    resultadoImagem.alt = nivel.titulo;
    resultadoImagem.hidden = false;
  } else {
    resultadoImagem.hidden = true;
    resultadoImagem.removeAttribute("src");
  }

  quizBox.hidden = true;
  resultadoBox.hidden = false;
}

// Eventos
btnProxima.addEventListener("click", proxima);
btnReiniciar.addEventListener("click", iniciarQuiz);

// Atalhos do teclado: 1-6 escolhem alternativa, Enter vai para a próxima
document.addEventListener("keydown", (e) => {
  if (quizBox.hidden) return;

  if (e.key === "Enter" && !btnProxima.hidden) {
    proxima();
    return;
  }

  const numero = parseInt(e.key, 10);
  if (!respondeu && numero >= 1) {
    const botoes = opcoesBox.querySelectorAll(".opcao");
    if (botoes[numero - 1]) botoes[numero - 1].click();
  }
});

// Início
if (perguntas.length > 0) {
  iniciarQuiz();
} else {
  textoPergunta.textContent = "Nenhuma pergunta cadastrada ainda.";
}
