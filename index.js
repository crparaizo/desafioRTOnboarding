//--------------------------------------------------------------------------------------
//Testes funcionais
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// Funções de restrição de caracteres nos campos dos formulário
//--------------------------------------------------------------------------------------

$(document).ready(function () { //"impõe" padrão de preenchimento do campo
    $("#form_telefone").inputmask({
        mask: ["(99) 9999-9999", "(99) 99999-9999",],
        keepStatic: true
    });

    $("#form_cep").inputmask({
        mask: ["99999-999",],
        keepStatic: true
    });

});

function restricaoNomeSobrenome(i) { //permite que somente letras sejam considerados no campo
    var v = i.value;

    if (!/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]+$/.test(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }
}

function restricaoNumero(i) { //permite que somente números sejam considerados no campo

    var v = i.value;

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "6");
}

function restricaoCPF(i) { //permite que somente números sejam considerados no campo

    var v = i.value;

    validaCPF(i);

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

var confiabilidadeCEP = false;

$(document).ready(function () {
    // Função para validar o CEP em tempo real
    $("#form_cep").on("input", function () {
        const cep = $(this).val().trim();
        const invalidFeedback = $(this).next('.invalid-feedback');

        // Regex para validar o formato do CEP (XXXXX-XXX ou XXXXXXXX)
        const regex = /^\d{5}-?\d{3}$/;

        if (!cep) {
            // Se o campo estiver vazio
            $(this).removeClass('is-valid is-invalid');
            invalidFeedback.text('Campo vazio!');
            confiabilidadeCEP = false;

        } else if (!regex.test(cep)) {
            // Se o formato do CEP estiver incorreto
            $(this).removeClass('is-valid').addClass('is-invalid');
            invalidFeedback.text('Formato inválido! Use o formato XXXXX-XXX.');
            confiabilidadeCEP = false;

        } else {
            // Se o formato estiver correto, faz a consulta na API
            consultarCEP(cep, $(this), invalidFeedback);
        }
    });

    // Função para consultar o CEP na API ViaCEP
    function consultarCEP(cep, input, invalidFeedback) {
        // Remove tudo o que não é número para fazer a pesquisa
        cep = cep.replace(/\D/g, '');

        // Verifica se o CEP tem 8 dígitos
        if (cep.length !== 8) {
            input.removeClass('is-valid').addClass('is-invalid');
            invalidFeedback.text('CEP inválido!');
            confiabilidadeCEP = true;
            return;
        }

        // URL da API ViaCEP
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        // Faz a requisição à API
        $.getJSON(url)
            .done(function (dadosRetorno) {
                if (!dadosRetorno.erro) {
                    // Se o CEP for válido, preenche os campos e marca como válido
                    input.removeClass('is-invalid').addClass('is-valid');
                    $("#form_endereco").val(dadosRetorno.logradouro + " - " + dadosRetorno.bairro);
                    $("#form_cidade").val(dadosRetorno.localidade);
                    $("#form_estado").val(dadosRetorno.uf);
                } else {
                    // Se o CEP não existir
                    input.removeClass('is-valid').addClass('is-invalid');
                    invalidFeedback.text('CEP não encontrado!');
                    $("#form_endereco").val(" ");
                    $("#form_cidade").val(" ");
                    $("#form_estado").val(" ");
                    confiabilidadeCEP = false;
                }
            })
            .fail(function () {
                // Se ocorrer um erro na requisição
                input.removeClass('is-valid').addClass('is-invalid');
                invalidFeedback.text('Erro ao consultar CEP. Tente novamente.');
                $("#form_endereco").val(" ");
                $("#form_cidade").val(" ");
                $("#form_estado").val(" ");
                confiabilidadeCEP = false;
            });
    }
});

//--------------------------------------------------------------------------------------
//Funções que verificam se conteúdo dos campos é valido
//--------------------------------------------------------------------------------------

var confiabilidadeEmail = false;

function validaEmail(input) {

    // Regex para validar e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = input.value.trim();

    // Seleciona o elemento de feedback inválido
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');

    if (email === "") {
        // Se o campo estiver vazio
        input.classList.add('is-invalid');
        invalidFeedback.textContent = 'Campo vazio!';
        confiabilidadeEmail = false;
    } else if (!regex.test(email)) {
        // Se o e-mail for inválido
        input.classList.add('is-invalid');
        invalidFeedback.textContent = 'E-mail inválido!';
        confiabilidadeEmail = false;
    } else {
        // Se o e-mail for válido
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        invalidFeedback.textContent = '';
        confiabilidadeEmail = true;
    }
}

var confiabilidadeDataNascimento = false;

function validaDataNascimento(input) {
    // Obtém a data de nascimento do campo
    const dataNascimento = new Date(input.value);
    const dataAtual = new Date(); // Data atual

    // Calcula a diferença em anos
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();

    // Ajusta a idade se o aniversário ainda não ocorreu este ano
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    // Seleciona o elemento de feedback inválido
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');

    if (!input.value) {
        // Se o campo estiver vazio
        input.classList.add('is-invalid');
        invalidFeedback.textContent = 'Campo vazio!';
        confiabilidadeDataNascimento = false;
    } else if (idade < 18) {
        // Se a idade for menor que 18 anos
        input.classList.add('is-invalid');
        invalidFeedback.textContent = 'Idade inferir a 18 anos!';
        confiabilidadeDataNascimento = false;
    } else if (idade > 125) {
        // Se a idade for maior que 125 anos
        input.classList.add('is-invalid');
        invalidFeedback.textContent = 'Idade superior a 125 anos!';
        confiabilidadeDataNascimento = false;
    } else {
        // Se a idade for válida
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        invalidFeedback.textContent = '';
        confiabilidadeDataNascimento = true;
    }
}

var confiabilidadeCPF = false;

function validaCPF(input) {
    const cpf = input.value.trim();
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');

    // Regex para validar o formato do CPF (XXX.XXX.XXX-XX)
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!cpf) {
        // Se o campo estiver vazio
        input.classList.add('is-invalid');
        invalidFeedback.textContent = 'Campo vazio!';
        confiabilidadeCPF = false;
    } else if (!regex.test(cpf)) {
        // Se o formato do CPF estiver incorreto
        input.classList.add('is-invalid');
        invalidFeedback.textContent = 'Formato inválido! Use o formato XXX.XXX.XXX-XX.';
        confiabilidadeCPF = false;
    } else if (!validarDigitosCPF(cpf)) {
        // Se os dígitos verificadores estiverem incorretos
        input.classList.add('is-invalid');
        invalidFeedback.textContent = 'CPF inválido!';
        confiabilidadeCPF = false;
    } else {
        // Se o CPF for válido
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        confiabilidadeCPF = true;
        invalidFeedback.textContent = '';
    }
}

function validarDigitosCPF(cpf) {
    // Remove pontos e traço para calcular os dígitos verificadores
    const cpfNumerico = cpf.replace(/\D/g, '');

    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1{10}$/.test(cpfNumerico)) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpfNumerico.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    const digito1 = resto === 10 ? 0 : resto;

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpfNumerico.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    const digito2 = resto === 10 ? 0 : resto;

    // Verifica se os dígitos calculados são iguais aos dígitos do CPF
    return (
        digito1 === parseInt(cpfNumerico.charAt(9)) &&
        digito2 === parseInt(cpfNumerico.charAt(10))
    );
}


//--------------------------------------------------------------------------------------
//Sinaliza quais campos não estão preenchidos
//--------------------------------------------------------------------------------------


function validarInputs(listaIds) {
    listaIds.forEach(function (id) {
        $(`#${id}`).blur(function () {
            const valor = $(this).val().trim();

            if (valor === "") {
                $(this).removeClass("is-valid");
                $(this).addClass("is-invalid");
            } else if (id == "form_nome" || id == "form_sobrenome" || id == "form_nomeMae") { //campos de nomes só valida se tem preenchimento
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }
        });
    });
}

// Lista de IDs dos inputs que você deseja validar
const idsInputs = [
    "form_nome",
    "form_sobrenome",
    "form_email",
    "form_dataNascimento",
    "form_cpf",
    "form_telefone",
    "form_cep",
    "form_nomeMae",
];

// Chama a função passando a lista de IDs
validarInputs(idsInputs);

function pverificaPrenchimento(conteudo) {
    return conteudo.trim() === "";
}

var confiabilidadePreenchimento = false;

function verificaCamposVazios() {

    const validacoes = {
        "Nome": () => pverificaPrenchimento(document.getElementById("form_nome").value),
        "Sobrenome": () => pverificaPrenchimento(document.getElementById("form_sobrenome").value),
        "Email": () => pverificaPrenchimento(document.getElementById("form_email").value),
        "Data de Nascimento": () => pverificaPrenchimento(document.getElementById("form_dataNascimento").value),
        "CPF": () => pverificaPrenchimento(document.getElementById("form_cpf").value),
        "Telefone/Celular": () => pverificaPrenchimento(document.getElementById("form_telefone").value),
        "CEP": () => pverificaPrenchimento(document.getElementById("form_cep").value),
        "Nome da Mãe": () => pverificaPrenchimento(document.getElementById("form_nomeMae").value),
    };

    const camposVazios = [];

    for (const [nomeFuncao, funcao] of Object.entries(validacoes)) {
        if (funcao()) {
            camposVazios.push(nomeFuncao); // Adiciona o nome da função à lista de campos vazios
        }
    }

    // Gera a mensagem de campos vazios
    let mensagem;
    // Se houver campos vazios, exibe no console
    if (camposVazios.length > 0) {
        mensagem = "Os seguintes campos estão vazios: " + camposVazios.join(", ") + ". Deseja continuar mesmo assim?";
        confiabilidadePreenchimento = false;
        console.log("Os seguintes campos estão vazios:", camposVazios.join(", "));
    } else {
        mensagem = "Todos os campos estão preenchidos.";
        confiabilidadePreenchimento = true;
        console.log("Todos os campos estão preenchidos. Deseja prosseguir?");
    }

    document.querySelector("#meuModal .modal-body p").textContent = mensagem;
}


//--------------------------------------------------------------------------------------
//Validação após clicar no botão de enviar
//--------------------------------------------------------------------------------------


$(document).ready(function () { //"impõe" padrão de preenchimento do campo

    $("#btnEnviar").click(function (e) {
        e.preventDefault(); // Impede o envio do formulário

        //verifica campos vazios e avisa ao usuário
        verificaCamposVazios();

        // Verifica se o checkbox está marcado
        if (!$("#form_checagem").prop("checked")) {
            // Adiciona a classe 'is-invalid' para exibir a mensagem de erro
            $("#form_checagem").addClass("is-invalid");

        } else {

            //Atribuir nota grau de confiabilidade

            var nota;
            const notaConfiabilidade = document.querySelector('.confiabilidade');

            if (confiabilidadeEmail == true && confiabilidadeDataNascimento == true && confiabilidadeCPF == true && confiabilidadePreenchimento == true) {

                nota = Math.floor(Math.random() * 11);

                //input.classList.add('is-invalid');
                notaConfiabilidade.textContent = nota;

            } else {
                nota = 0;

                //input.classList.add('is-invalid');
                notaConfiabilidade.textContent = nota;
            }

            // Remove a classe 'is-invalid' (caso exista)
            $("#form_checagem").removeClass("is-invalid");
            // Abre o modal
            $("#meuModal").modal("show");
        }
    });

});