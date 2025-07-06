document
	.getElementById("formulario-contato")
	.addEventListener("submit", function (e) {
		e.preventDefault();

		const nome = document.getElementById("nome").value;
		const email = document.getElementById("email").value;
		const mensagem = document.getElementById("mensagem").value;

		const dados = {
			nome,
			email,
			mensagem,
			dataEnvio: new Date().toLocaleString(),
		};

		const armazenados =
			JSON.parse(localStorage.getItem("mensagensContato")) || [];

		armazenados.push(dados);

		localStorage.setItem("mensagensContato", JSON.stringify(armazenados));

		console.log("Mensagem salva:");
		console.log(dados);

		alert("Mensagem armazenada localmente!");
		this.reset();
	});
