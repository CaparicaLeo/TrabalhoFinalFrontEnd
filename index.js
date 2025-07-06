document.getElementById("formulario-contato").addEventListener("submit", function(e) {
  e.preventDefault();

  // Captura os dados
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const dados = {
    nome,
    email,
    mensagem,
    dataEnvio: new Date().toLocaleString()
  };

  // Recupera os dados existentes (ou array vazio)
  const armazenados = JSON.parse(localStorage.getItem("mensagensContato")) || [];

  // Adiciona a nova mensagem
  armazenados.push(dados);

  // Salva novamente no localStorage
  localStorage.setItem("mensagensContato", JSON.stringify(armazenados));

  // Printa no console
  console.log("Mensagem salva:");
  console.log(dados);

  alert("Mensagem armazenada localmente!");
  this.reset(); // Limpa o formulário
});
