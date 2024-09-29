// Função que é chamada quando o botão é clicado
const incrementarOnclick = (event) => {
  console.log('Clicou no botão'); // Exibe uma mensagem no console quando o botão é clicado
};

// Função que é chamada quando o mouse passa sobre o botão
const incrementarOnmouseover = (event) => {
  console.log('Passou o mouse no botão'); // Exibe uma mensagem no console quando o mouse passa sobre o botão
};

// Obtém o elemento do botão pelo seu ID
let incrementarButton = document.getElementById('incrementar'); 

// Atribui a função incrementarOnclick ao evento de clique do botão
incrementarButton.onclick = incrementarOnclick; 

// Atribui a função incrementarOnmouseover ao evento de passar o mouse sobre o botão
incrementarButton.onmouseover = incrementarOnmouseover; 
