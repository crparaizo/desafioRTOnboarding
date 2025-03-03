
// Funções de restrição de caracteres nos campos dos formulário - restringe envio

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

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}


// Registra o evento blur do campo "cep", ou seja, a pesquisa será feita
// quando o usuário sair do campo "cep"
$("#form_cep").blur(function () {
    // Remove tudo o que não é número para fazer a pesquisa
    var cep = this.value.replace(/[^0-9]/, "");

    // Validação do CEP; caso o CEP não possua 8 números, então cancela
    // a consulta
    if (cep.length != 8) {
        return false;
    }

    // A url de pesquisa consiste no endereço do webservice + o cep que
    // o usuário informou + o tipo de retorno desejado (entre "json",
    // "jsonp", "xml", "piped" ou "querty")
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    // Faz a pesquisa do CEP, tratando o retorno com try/catch para que
    // caso ocorra algum erro (o cep pode não existir, por exemplo) a
    // usabilidade não seja afetada, assim o usuário pode continuar//
    // preenchendo os campos normalmente
    $.getJSON(url, function (dadosRetorno) {
        try {
            // Preenche os campos de acordo com o retorno da pesquisa
            $("#form_endereco").val(dadosRetorno.logradouro + " - " + dadosRetorno.bairro);
            $("#form_cidade").val(dadosRetorno.localidade);
            $("#form_estado").val(dadosRetorno.uf);
        } catch (ex) { }
    });
});



//Funções que verificam se conteúdo dos campos é valido - restrige envio


function validaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function validaEmail(email) {
    // Regex para validar e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validaDataNascimento(dataNascimento) {
    
}

//Sinaliza quais campos não estão preenchidos - não restrigem envio

function preenchimentoEmail(nome) {
    // Remove espaços em branco no início e no fim e verifica se a string está vazia
    return email.trim() === "";
}

function preenchimentoSobrenome(sobrenome) {
    return sobrenome.trim() === "";
}

function preenchimentoEmail(email) {
    return email.trim() === "";
}

function preenchimentoDataNasc(dataNasc) {
    return dataNasc.trim() === "";
}

function preenchimentoCPF(cpf) {
    return cpf.trim() === "";
}

function preenchimentoCEP(cep) {
    return cep.trim() === "";
}

function preenchimentoNomeMae(nomeMae) {
    return nomeMae.trim() === "";
}