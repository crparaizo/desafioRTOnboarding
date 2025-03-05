//--------------------------------------------------------------------------------------
//Testes de unidade
//--------------------------------------------------------------------------------------


//#####################
//Email
//#####################


let mensagemTeste = '';

// Função para executar os testes
function runTests_Email() {
    const input = document.getElementById('form_email');
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');

    // Teste 1: Campo vazio
    input.value = '';
    validaEmail(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'Campo vazio!') {
        //console.log('Email - Teste 1: Passou (Campo vazio)');
        mensagemTeste += 'Email - Teste 1: Passou (Campo vazio)\n';
    } else {
        //console.log('Email - Teste 1: Falhou (Campo vazio)');
        mensagemTeste += 'Email - Teste 1: Falhou (Campo vazio)\n';
    }

    // Teste 2: E-mail inválido (sem "@")
    input.value = 'emailinvalido';
    validaEmail(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'E-mail inválido!') {
        //console.log('Email - Teste 2: Passou (E-mail inválido - sem "@")');
        mensagemTeste += 'Email - Teste 2: Passou (E-mail inválido - sem "@")\n';
    } else {
        //console.log('Email - Teste 2: Falhou (E-mail inválido - sem "@")');
        mensagemTeste += 'Email - Teste 2: Falhou (E-mail inválido - sem "@")\n';
    }

    // Teste 3: E-mail inválido (sem domínio)
    input.value = 'email@invalido';
    validaEmail(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'E-mail inválido!') {
        //console.log('Email - Teste 3: Passou (E-mail inválido - sem domínio)');
        mensagemTeste += 'Email - Teste 3: Passou (E-mail inválido - sem domínio)\n';
    } else {
        //console.log('Email - Teste 3: Falhou (E-mail inválido - sem domínio)');
        mensagemTeste += 'Email - Teste 3: Falhou (E-mail inválido - sem domínio)\n';
    }

    // Teste 4: E-mail válido
    input.value = 'email@valido.com';
    validaEmail(input);
    if (input.classList.contains('is-valid') && invalidFeedback.textContent === '') {
        //console.log('Email - Teste 4: Passou (E-mail válido)');
        mensagemTeste += 'Email - Teste 4: Passou (E-mail válido)\n';
    } else {
        //console.log('Email - Teste 4: Falhou (E-mail válido)');
        mensagemTeste += 'Email - Teste 4: Falhou (E-mail válido)\n';
    }

    input.value = '';
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');
}

// // Executa os testes
runTests_Email();


//#####################
//Data Nascimento
//#####################


// Função para executar os testes
function runTests_DataNascimento() {
    const input = document.getElementById('form_dataNascimento');
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');

    // Teste 1: Campo vazio
    input.value = '';
    validaDataNascimento(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'Campo vazio!') {
        //console.log('Data Nascimento - Teste 1: Passou (Campo vazio)');
        mensagemTeste += 'Data Nascimento - Teste 1: Passou (Campo vazio)\n';
    } else {
        //console.log('Data Nascimento - Teste 1: Falhou (Campo vazio)');
        mensagemTeste += 'Data Nascimento - Teste 1: Falhou (Campo vazio)\n';
    }

    // Teste 2: Idade inferior a 18 anos
    const dataMenor18 = new Date();
    dataMenor18.setFullYear(dataMenor18.getFullYear() - 17); // 17 anos
    input.value = dataMenor18.toISOString().split('T')[0];
    validaDataNascimento(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'Idade inferir a 18 anos!') {
        //console.log('Data Nascimento - Teste 2: Passou (Idade inferior a 18 anos)');
        mensagemTeste += 'Data Nascimento - Teste 2: Passou (Idade inferior a 18 anos)\n';
    } else {
        //console.log('Data Nascimento - Teste 2: Falhou (Idade inferior a 18 anos)');
        mensagemTeste += 'Data Nascimento - Teste 2: Falhou (Idade inferior a 18 anos)\n';
    }

    // Teste 3: Idade superior a 125 anos
    const dataMaior125 = new Date();
    dataMaior125.setFullYear(dataMaior125.getFullYear() - 126); // 126 anos
    input.value = dataMaior125.toISOString().split('T')[0];
    validaDataNascimento(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'Idade superior a 125 anos!') {
        //console.log('Data Nascimento - Teste 3: Passou (Idade superior a 125 anos)');
        mensagemTeste += 'Data Nascimento - Teste 3: Passou (Idade superior a 125 anos)\n';
    } else {
        //console.log('Data Nascimento - Teste 3: Falhou (Idade superior a 125 anos)');
        mensagemTeste += 'Data Nascimento - Teste 3: Falhou (Idade superior a 125 anos)\n';
    }

    // Teste 4: Idade válida (18 anos)
    const data18Anos = new Date();
    data18Anos.setFullYear(data18Anos.getFullYear() - 18); // 18 anos
    input.value = data18Anos.toISOString().split('T')[0];
    validaDataNascimento(input);
    if (input.classList.contains('is-valid') && invalidFeedback.textContent === '') {
        //console.log('Data Nascimento - Teste 4: Passou (Idade válida - 18 anos)');
        mensagemTeste += 'Data Nascimento - Teste 4: Passou (Idade válida - 18 anos)\n';
    } else {
        //console.log('Data Nascimento - Teste 4: Falhou (Idade válida - 18 anos)');
        mensagemTeste += 'Data Nascimento - Teste 4: Falhou (Idade válida - 18 anos)\n';
    }

    // Teste 5: Idade válida (125 anos)
    const data125Anos = new Date();
    data125Anos.setFullYear(data125Anos.getFullYear() - 125); // 125 anos
    input.value = data125Anos.toISOString().split('T')[0];
    validaDataNascimento(input);
    if (input.classList.contains('is-valid') && invalidFeedback.textContent === '') {
        //console.log('Data Nascimento - Teste 5: Passou (Idade válida - 125 anos)');
        mensagemTeste += 'Data Nascimento - Teste 5: Passou (Idade válida - 125 anos)\n';
    } else {
        //console.log('Data Nascimento - Teste 5: Falhou (Idade válida - 125 anos)');
        mensagemTeste += 'Data Nascimento - Teste 5: Falhou (Idade válida - 125 anos)\n';
    }

    input.value = '';
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');
}

// Executa os testes
runTests_DataNascimento();


//#####################
//CPF
//#####################


// Função para executar os testes
function runTests_CPF() {
    const input = document.getElementById('form_cpf');
    const invalidFeedback = input.parentElement.querySelector('.invalid-feedback');

    // Teste 1: Campo vazio
    input.value = '';
    validaCPF(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'Campo vazio!') {
        //console.log('CPF - Teste 1: Passou (Campo vazio)');
        mensagemTeste += 'CPF - Teste 1: Passou (Campo vazio)\n';
    } else {
        //console.log('CPF - Teste 1: Falhou (Campo vazio)');
        mensagemTeste += 'CPF - Teste 1: Falhou (Campo vazio)\n';
    }

    // Teste 2: Formato inválido (sem pontuação)
    input.value = '12345678900';
    validaCPF(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'Formato inválido! Use o formato XXX.XXX.XXX-XX.') {
        //console.log('CPF - Teste 2: Passou (Formato inválido - sem pontuação)');
        mensagemTeste += 'CPF - Teste 2: Passou (Formato inválido - sem pontuação)\n';
    } else {
        //console.log('CPF - Teste 2: Falhou (Formato inválido - sem pontuação)');
        mensagemTeste += 'CPF - Teste 2: Falhou (Formato inválido - sem pontuação)\n';
    }

    // Teste 3: Formato inválido (com pontuação incorreta)
    input.value = '123.456.789-0';
    validaCPF(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'Formato inválido! Use o formato XXX.XXX.XXX-XX.') {
        //console.log('CPF - Teste 3: Passou (Formato inválido - pontuação incorreta)');
        mensagemTeste += 'CPF - Teste 3: Passou (Formato inválido - pontuação incorreta)\n';
    } else {
        //console.log('CPF - Teste 3: Falhou (Formato inválido - pontuação incorreta)');
        mensagemTeste += 'CPF - Teste 3: Falhou (Formato inválido - pontuação incorreta)\n';
    }

    // Teste 4: CPF inválido (dígitos verificadores incorretos)
    input.value = '111.111.111-11';
    validaCPF(input);
    if (input.classList.contains('is-invalid') && invalidFeedback.textContent === 'CPF inválido!') {
        //console.log('CPF - Teste 4: Passou (CPF inválido - dígitos verificadores incorretos)');
        mensagemTeste += 'CPF - Teste 4: Passou (CPF inválido - dígitos verificadores incorretos)\n';
    } else {
        //console.log('CPF - Teste 4: Falhou (CPF inválido - dígitos verificadores incorretos)');
        mensagemTeste += 'CPF - Teste 4: Falhou (CPF inválido - dígitos verificadores incorretos)\n';
    }

    // Teste 5: CPF válido
    input.value = '529.982.247-25'; // CPF válido
    validaCPF(input);
    if (input.classList.contains('is-valid') && invalidFeedback.textContent === '') {
        //console.log('CPF - Teste 5: Passou (CPF válido)');
        mensagemTeste += 'CPF - Teste 5: Passou (CPF válido)\n';
    } else {
        //console.log('CPF - Teste 5: Falhou (CPF válido)');
        mensagemTeste += 'CPF - Teste 5: Falhou (CPF válido)\n';
    }

    input.value = '';
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');

}

// Executa os testes
runTests_CPF();


//#####################
//CEP -> Implementação  futura
//#####################


//console.log(mensagemTeste)
document.querySelector("#modalTestes .modal-body p").textContent = mensagemTeste;

// Função para formatar o texto do modal de testes
function formatarMensagem(mensagem) {
    // Divide o texto em linhas
    const linhas = mensagem.split('\n');

    // Cria um array para armazenar as linhas formatadas
    const linhasFormatadas = linhas.map(linha => {
        // Se a linha não estiver vazia, formata como um item de teste
        if (linha.trim() !== "") {
            return `<div class="teste-item">${linha}</div>`;
        }
        return ""; // Ignora linhas vazias
    });

    // Junta todas as linhas em uma única string
    return linhasFormatadas.join('');
}

// Atualiza o conteúdo do modal testes com o texto formatado
document.querySelector("#modalTestes .modal-body p").innerHTML = `
    <div class="testes-container">
        ${formatarMensagem(mensagemTeste)}
    </div>
`;