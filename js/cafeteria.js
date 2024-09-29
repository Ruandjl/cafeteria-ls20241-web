// Este código JavaScript cria e gerencia uma lista de produtos de café, permitindo a exibição desses produtos em cartões na página inicial e em uma tabela na página de cardápio, utilizando o localStorage para armazenar as informações dos produtos e incluindo funcionalidades para adicionar novos produtos através de um formulário, além de manipular o DOM para inserir dinamicamente elementos HTML baseados nos dados dos produtos.


let itens = [ // Cria uma lista de itens, onde cada item é um objeto com informações sobre um tipo de café.
  {
    titulo: 'Café Expresso', // O título do primeiro item (Café Expresso).
    descricao: 'Café expresso feito com grãos selecionados com máquina profissional.', // Uma breve descrição do Café Expresso.
    alt: 'Café Expresso', // Texto alternativo para a imagem, útil caso a imagem não carregue.
    imagemUrl: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // URL da imagem do Café Expresso.
  },
  {
    titulo: 'Prensa Francesa', // O título do segundo item (Prensa Francesa).
    descricao: 'Sabor suave do café selecionado.', // Descrição do sabor suave da Prensa Francesa.
    alt: 'Prensa Francesa', // Texto alternativo para a imagem da Prensa Francesa.
    imagemUrl: 'https://images.unsplash.com/photo-1444594975920-e69885b357d5?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // URL da imagem da Prensa Francesa.
  },
  {
    titulo: 'Café Filtrado', // O título do terceiro item (Café Filtrado).
    descricao: 'Café filtrado v60 com todas as notas sensoriais.', // Descrição das notas sensoriais do Café Filtrado.
    alt: 'Café Filtrado', // Texto alternativo para a imagem do Café Filtrado.
    imagemUrl: 'https://images.unsplash.com/photo-1498603536246-15572faa67a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // URL da imagem do Café Filtrado.
  },
  {
    titulo: 'Café verde', // O título do quarto item (Café Verde).
    descricao: 'Café filtrado v60 com todas as notas sensoriais.', // Descrição do Café Verde.
    alt: 'Café Filtrado', // Texto alternativo incorreto (deveria ser algo relacionado ao Café Verde).
    imagemUrl: 'https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // URL da imagem do Café Verde.
  },
];

document.addEventListener('DOMContentLoaded', () => { // Aguarda o carregamento completo da página HTML.
  if (window.location.pathname.includes('index.html')) { // Verifica se a página atual é 'index.html'.
      createCards(); // Chama a função para criar os cartões de produtos na página inicial.
  } else if (window.location.pathname.includes('cardapio.html')) { // Verifica se a página atual é 'cardapio.html'.
      createTableRows(); // Chama a função para criar as linhas da tabela de produtos.
  }
});

const createCards = () => { // Função responsável por criar os cartões de produtos.
  let produtos = JSON.parse(localStorage.getItem('produtos')); // Obtém a lista de produtos do localStorage e converte para um array de objetos.
  let cardsDiv = document.getElementById('cards'); // Seleciona o elemento HTML onde os cartões serão inseridos.

  for (let produto of produtos) { // Itera sobre cada produto no array 'produtos'.
      let card = createCardItem(produto); // Cria o HTML de um cartão para o produto atual.
      cardsDiv.insertAdjacentHTML('beforeend', card); // Insere o cartão criado dentro do elemento 'cardsDiv'.
  }
};

const createCardItem = (item) => { // Função que cria o HTML de um cartão de produto.
  return `
      <div class="col m-2"> <!-- Coluna que contém o cartão, com espaçamento de 2 unidades nas margens -->
          <div class="card"> <!-- Define o início do cartão -->
              <img src="${item.imagemUrl}" class="card-img-top" alt="${item.alt}"> <!-- Imagem do produto no topo do cartão -->
              <div class="card-body"> <!-- Corpo do cartão -->
                  <h5 class="card-title">${item.titulo}</h5> <!-- Título do produto -->
                  <p class="card-text">${item.descricao}</p> <!-- Descrição do produto -->
                  <a href="#" class="btn btn-primary">Comprar</a> <!-- Botão para comprar o produto -->
              </div> <!-- Fim do corpo do cartão -->
          </div> <! -- Fim do cartão -->
      </div> <!-- Fim da coluna que contém o cartão -->
  `; // Retorna o HTML completo de um cartão de produto como uma string.
};

const createTableRows = () => { // Função responsável por criar as linhas da tabela de produtos.
  let produtos = JSON.parse(localStorage.getItem('produtos')); // Obtém a lista de produtos do localStorage.
  let produtosBody = document.getElementById('produtosBody'); // Seleciona o corpo da tabela onde as linhas serão inseridas.

  produtosBody.innerHTML = ''; // Limpa qualquer conteúdo existente no corpo da tabela.

  for (let produto of produtos) { // Itera sobre cada produto no array 'produtos'.
      let row = createTableRow(produto); // Cria o HTML de uma linha de tabela para o produto atual.
      produtosBody.insertAdjacentHTML('beforeend', row); // Insere a linha criada no corpo da tabela.
  }
};

const createTableRow = (item) => { // Função que cria o HTML de uma linha de tabela para um produto.
  return `
      <tr> <! -- Início da linha de tabela -->
          <td></td> <!-- Coluna vazia (pode ser usada como um contador) -->
          <td>${item.titulo}</td> <!-- Coluna com o título do produto -->
          <td>${item.descricao}</td> <!-- Coluna com a descrição do produto -->
          <td>${item.alt}</td> <!-- Coluna com o texto alternativo da imagem do produto -->
          <td><img src="${item.imagemUrl}" alt="${item.alt}" style="width: 200px; height: 200px;"></td> <!-- Coluna com a imagem do produto, com tamanho de 200x200px -->
      </tr> <! -- Fim da linha de tabela -->
  `;
};

document.getElementById('save').addEventListener('click', function() { // Adiciona um ouvinte de clique no botão de salvar.
  const titulo = document.getElementById('1item').value; // Obtém o valor do campo de entrada '1item' (título do produto).
  const descricao = document.getElementById('1descricao').value; // Obtém o valor do campo de entrada '1descricao' (descrição do produto).
  const alt = document.getElementById('1alt').value; // Obtém o valor do campo de entrada '1alt' (texto alternativo da imagem).
  const imagemUrl = document.getElementById('1img').value; // Obtém o valor do campo de entrada '1img' (URL da imagem do produto).

  if (titulo && descricao && alt && imagemUrl) { // Verifica se todos os campos foram preenchidos.
      const novaLinha = ` <!-- Cria o HTML de uma nova linha de tabela com os valores inseridos no formulário -->
          <tr> <! -- Início da linha de tabela -->
              <td></td> <!-- Coluna vazia -->
              <td>${titulo}</td> <!-- Coluna com o título do produto -->
              <td>${descricao}</td> <!-- Coluna com a descrição do produto -->
              <td>${alt}</td> <!-- Coluna com o texto alternativo da imagem do produto -->
              <td><img src="${imagemUrl}" alt="${alt}" style="width: 100px;"></td> <!-- Coluna com a imagem do produto, tamanho ajustado para 100px de largura -->
          </tr> <! -- Fim da linha de tabela -->
      `;
      document.getElementById('produtosBody').insertAdjacentHTML('beforeend', novaLinha); // Insere a nova linha no corpo da tabela.
      document.getElementById('formProduto').reset(); // Reseta os campos do formulário para limpar os dados após o envio.
      let modal = bootstrap.Modal.getInstance(document.getElementById('produtoModal')); // Obtém a instância do modal.
      modal.hide(); // Fecha o modal.
  } else { // Se algum campo não foi preenchido, exibe uma mensagem de erro.
      alert('Por favor, preencha todos os campos!'); // Exibe um alerta se algum campo não foi preenchido.
  }
});
