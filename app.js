function pesquisarTodosPersonagens() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let contentSection = document.getElementById('resultados-pesquisa');

  // Itera sobre cada personagem na lista de personagens
  for (let pessoa of personagens) {
    // Cria o HTML para um item de resultado
    contentSection.innerHTML += `
       <div class='item-resultado'>
         <h2>
           <a href='#' target="_blank"> ${pessoa.nome}</a>
         </h2>
         <p class='descricao-meta'>${pessoa.descricao}</p>
         <a href='${pessoa.link}' target='_blank'>Saiba mais </a>
       </div>
     `;
  }
}

function pesquisarPersonagem() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let contentSection = document.getElementById('resultados-pesquisa');

  let searchField = document.getElementById('campo-pesquisa').value;
  searchField = searchField.toLowerCase();

  if (!searchField) {
    let resultado = '';
    resultado += `<h2 class='resultado-pesquisa'>Personagem Não encontrado</h2>`;
    contentSection.innerHTML = resultado;
    return;
  }

  // Inicializa strings vazias para armazenar os resultados
  let resultados = '';
  let nome = '';
  let descricao = '';
  //let tags = ''; Repetir o mesmo processo após adicionar tags na base de dados

  // Itera sobre cada personagem na lista de personagens
  for (let pessoa of personagens) {
    //Transforma to lower case para poder ter maior compatibilidade na busca
    nome = pessoa.nome.toLowerCase();
    descricao = pessoa.descricao.toLowerCase();

    //Verificação de se caso uma dessas condições seja atendida, a pesquisa é feita
    if (nome.includes(searchField) || descricao.includes(searchField)) {
      // Cria o HTML para um item de resultado
      resultados += `
      <div class='item-resultado'>
        <h2>
          <a href='#' target="_blank"> ${pessoa.nome}</a>
        </h2>
        <p class='descricao-meta'>${pessoa.descricao}</p>
        <a href='${pessoa.link}' target='_blank'>Saiba mais </a>
      </div>
      `;
    }
  }

  if (!resultados) {
    resultados = `<h2 class='resultado-pesquisa'>Nada foi encontrado</h2>`;
  }

  // Atualiza o conteúdo HTML da seção de resultados com os resultados gerados
  contentSection.innerHTML = resultados;
}
