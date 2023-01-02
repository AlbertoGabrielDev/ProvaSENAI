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


function validarCPF(cpf) {

	cpf = cpf.replace(/[^\d]+/g, '');
	if (cpf == '') {
		alert("Erro")
		return false

	};
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 ||
		cpf == "00000000000" ||
		cpf == "11111111111" ||
		cpf == "22222222222" ||
		cpf == "33333333333" ||
		cpf == "44444444444" ||
		cpf == "55555555555" ||
		cpf == "66666666666" ||
		cpf == "77777777777" ||
		cpf == "88888888888" ||
		cpf == "99999999999") {
		alert("CPF Invalido")
		return false;
	}

	// Valida 1o digito	
	add = 0;
	for (i = 0; i < 9; i++)
		add += parseInt(cpf.charAt(i)) * (10 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11)
		rev = 0;
	if (rev != parseInt(cpf.charAt(9))) {
		alert("CPF Invalido2")
		return false;
	}
	// Valida 2o digito	
	add = 0;
	for (i = 0; i < 10; i++)
		add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11)
		rev = 0;
	if (rev != parseInt(cpf.charAt(10))) {
		alert("nha")
		return false;

	}
	alert("aee")
	return true;
}
cpf = "04909331140";
// alert (validarCPF(cpf));