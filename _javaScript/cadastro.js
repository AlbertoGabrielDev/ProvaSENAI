let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
	file.click();
});

file.addEventListener('change', () => {

	if (file.files.length <= 0) {
		return;
	}

	let reader = new FileReader();

	reader.onload = () => {
		photo.src = reader.result;
	}

	reader.readAsDataURL(file.files[0]);
});


function validarCPF() {

	// cpf = '04909331140'
	var valor = document.querySelector("#valor").value;
	console.log(document.querySelector("#valor").value)


	// valor = '';
	valor = valor.replace(/[^\d]+/g, '');
	if (valor == '') {
		alert("Erro")
		return false
	} else {
		// Elimina CPFs invalidos conhecidos
		if (valor.length != 11 ||
			valor == "00000000000" ||
			valor == "11111111111" ||
			valor == "22222222222" ||
			valor == "33333333333" ||
			valor == "44444444444" ||
			valor == "55555555555" ||
			valor == "66666666666" ||
			valor == "77777777777" ||
			valor == "88888888888" ||
			valor == "99999999999") {
			alert("CPF Invalido")
			return false;
		}

		// Valida 1o digito	
		add = 0;
		for (i = 0; i < 9; i++)
			add += parseInt(valor.charAt(i)) * (10 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
			rev = 0;
		if (rev != parseInt(valor.charAt(9))) {
			alert("CPF Invalido2")
			return false;
		}
		// Valida 2o digito	
		add = 0;
		for (i = 0; i < 10; i++)
			add += parseInt(valor.charAt(i)) * (11 - i);
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11)
			rev = 0;
		if (rev != parseInt(valor.charAt(10))) {
			alert("nha")
			return false;

		}
		alert("Certo")
		return true;
	};


}
// alert (validarCPF(cpf));