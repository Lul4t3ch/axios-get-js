// fetch('pessoas.json')
//   .then(response => response.json())
//   .then(json => showDataInf(json))
//   .catch(e => console.log(e)); 

axios('pessoas.json')
  .then(response => showDataInf(response.data));

function showDataInf(dados) {
  const resultado = document.querySelector('.resultado');
  const table = document.createElement('table');
  for (let pessoa of dados) {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);
  
    table.appendChild(tr);
  }

  resultado.appendChild(table);
}