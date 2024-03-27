const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Informe um número: ', (resposta) => {
  // TODO: Log the answer in a database
  console.log(`Número informado: ${resposta}`);
  input.close();
});

const alcool = 0;
const gasolina = 0;
const diesel = 0;

function coletarCombustivel() {
  const codigo = parseInt(document.getElementById("codigoCombustivel").value);

  if (isNaN(codigo) || codigo < 1 || codigo > 4) {
    alert("Código inválido. Digite novamente.");
    return;
  }

  if (codigo === 4) {
    mostrarResultado();
    return;
  }

  switch (codigo) {
    case 1:
      alcool++;
      break;
    case 2:
      gasolina++;
      break;
    case 3:
      diesel++;
      break;
  }

  document.getElementById("codigoCombustivel").value = "";
}

//função isNan = is not a number 
// parseInt = 
/* = é usado para atribuir valores.
   == é usado para comparar valores.
   === é usado para comparar valores e tipos.*/
   /* O que é switch em JavaScript?
Funções em JavaScript: Explorando o uso do switch case
Um switch case é uma instrução de controle JavaScript que permite executar 
diferentes blocos de código com base em diferentes valores. 
Esta é uma maneira consistente e eficiente 
de lidar com diversos valores. *fonte google* para meu conhecimento */

