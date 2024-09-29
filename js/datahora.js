// Função que atualiza a hora e a data
const dataHora = () => {
  let horaP = document.getElementById('hora'); // Obtém o elemento onde a hora será exibida
  let dataP = document.getElementById('data'); // Obtém o elemento onde a data será exibida
  let dataHora = new Date(); // Cria um novo objeto Date com a data e hora atuais

  // Atualiza o conteúdo HTML dos elementos com a hora e data formatadas
  horaP.innerHTML = dataHora.toLocaleTimeString(); // Formata a hora atual
  dataP.innerHTML = dataHora.toLocaleDateString(); // Formata a data atual
};

// Obtém o botão para iniciar a atualização da hora e data
let iniciarButtton = document.getElementById('iniciar'); 
let idInterval = 0; // Variável para armazenar o ID do intervalo

// Adiciona um evento de clique ao botão "Iniciar"
iniciarButtton.onclick = (event) => {
  idInterval = setInterval(dataHora, 1000); // Inicia um intervalo que chama a função dataHora a cada 1000 ms (1 segundo)
};

// Obtém o botão para parar a atualização da hora e data
let pararButton = document.getElementById('parar'); 

// Adiciona um evento de clique ao botão "Parar"
pararButton.onclick = (event) => {
  console.log(idInterval); // Exibe o ID do intervalo no console
  clearInterval(idInterval); // Para o intervalo usando o ID armazenado
};

// Obtém o corpo do documento
let body = document.body;

// Adiciona um evento que dispara ao mouse sair da área do corpo
body.onmouseleave = (event) => {
  let mensagemP = document.getElementById('mensagem'); // Obtém o elemento onde a mensagem será exibida
  mensagemP.innerHTML = ` 
    Por favor, não nos deixe. <!-- Mensagem quando o mouse sai -->
    <img src='../imagem/please.png' width='10%'/><!-- Imagem que acompanha a mensagem -->
  `;
};

// Adiciona um evento que dispara ao mouse entrar na área do corpo
body.onmouseenter = (event) => {
  let mensagemP = document.getElementById('mensagem'); // Obtém o elemento onde a mensagem será exibida
  mensagemP.innerHTML = `
    Que bom sua volta. <!-- Mensagem quando o mouse entra -->
    <img src='../imagem/happy.png' width='10%'/><!-- Imagem que acompanha a mensagem -->
  `;
};
