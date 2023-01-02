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

$("#datanascimento").on('blur', function () {
	calcular_idade();
});

function calcular_idade() {
	if ($('datanascimento').val() != '') {
		var dataInput = new Date($("#datanascimento").val());
		if (!isNaN(dataInput)) {
			var dataAtual = new Date();
			var diferenca = dataAtual.getFullYear() - dataInput.getFullYear();
			document.getElementById('idade').value = diferenca;
			console.log("gg");
			return true;
		}
	}
	return false;
}
calcular_idade();


function validarCPF() {

	// cpf = '04909331140'
	var valor = document.querySelector("#valor").value;
	console.log(document.querySelector("#valor").value)


	// valor = '';
	valor = valor.replace(/[^\d]+/g, '');
	if (valor == '') {
		alert("Insira um CPF")
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
			alert("CPF Invalido")
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
			alert("CPF Invalido")
			return false;

		}
		alert("Ok")
		return true;
	};


}


function busca_cbo() {
    var estado = document.getElementById("cuf").value;
    var lista = document.getElementById("ccidade");
    while (lista.options.length) {
        lista.remove(0);
    }
    if (estado == "padeiro") {
        padeiro();
    } else {
        if (estado == "AL") {
            alagoas();
        } else {
            if (estado == "AM") {
                amazonas();
            } else {
                if (estado == "AP") {
                    amapa();
                } else {
                    if (estado == "GO") {
                        goias();
                    }
                }
            }
        }
    }
}

function padeiro() {
    var cidade = new Option("Padeiro");
    document.getElementById('ccidade').add(cidade);
    // cidade = new Option("PADEIROS, CONFEITEIROS E AFINS");
    // document.getElementById('ccidade').add(cidade);
    // cidade = new Option("");
    // document.getElementById('ccidade').add(cidade);
    // cidade = new Option("Brasiléia");
    // document.getElementById('ccidade').add(cidade);
    // cidade = new Option("Bujari");
    // document.getElementById('ccidade').add(cidade);
}

function goias() {
	var cidade = new Option("Goiânia");
	document.getElementById('ccidade').add(cidade);
	cidade = new Option("Abadia de Goiás");
	document.getElementById('ccidade').add(cidade);
	cidade = new Option("Abadiânia");
	document.getElementById('ccidade').add(cidade);
	cidade = new Option("Acreúna");
	document.getElementById('ccidade').add(cidade);
	cidade = new Option("Adelândia");
	document.getElementById('ccidade').add(cidade);
}


