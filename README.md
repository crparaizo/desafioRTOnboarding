# Formulário de Onboarding de Clientes
Este projeto é um formulário de onboarding de clientes desenvolvido com HTML, CSS, Bootstrap e JavaScript. O objetivo é coletar informações essenciais dos clientes de forma simples e intuitiva, garantindo uma experiência agradável e eficiente.

# 🚀 Como Funciona
O formulário permite que os clientes insiram seus dados pessoais, como nome, e-mail, telefone, data de nascimento, CPF, endereço e nome da mãe. Ele também inclui validações em tempo real para garantir que os dados sejam inseridos corretamente.

Após o preenchimento, os dados podem ser enviados para um backend (não implementado neste projeto) ou exibidos no console do navegador para fins de teste.

# 🛠️ Tecnologias Utilizadas
* HTML: Estrutura do formulário.
* CSS: Estilização personalizada.
* Bootstrap: Design responsivo e componentes pré-estilizados.
* JavaScript: Validações em tempo real e interações dinâmicas.

# 📂 Estrutura do Projeto
O projeto está organizado da seguinte forma:

`Copy` 

``` desafioRTOnboarding/
├── index.html          # Página principal do formulário
├── index.css           # Estilos personalizados
├── index.js            # Lógica de validação e interação (testes funcionais)
├── units_tests.js      # Lógica de validação e interação (testes unitários)
└── README.md           # Documentação do projeto
```

# 🎨 Design e Funcionalidades

## 1. Formulário de Onboarding

### Campos do formulário:

* Nome completo
* E-mail
* Telefone
* Data de Nascimento
* CPF
* CEP
* Nome da mãe

### Validações em tempo real:

* Todos os campos são obrigatórios para gerar um grau de confiabilidade entre 0 e 10.
* E-mail deve ser válido.
* Telefone deve seguir o formato (XX) XXXXX-XXXX.
* Data de Nascimento deve ser válida.
* CPF deve ser válido.
* CEP deve ser válido.

## 2. Design Responsivo
* O formulário é totalmente responsivo, adaptando-se a diferentes tamanhos de tela (desktop, tablet e mobile).

## 3. Feedback Visual

* Mensagens de erro são exibidas abaixo de cada campo quando os dados são inválidos ou qunado os campos estão vazios.
* Campos válidos são destacados com uma borda verde.
* Campos inválidos são destacados com uma borda vermelha.

## Público alvo

* O formulário é direcionado para brasileiros, maiores de 18 anos e que residam no Brasil.
* Qualquer perfil diferente do mencionado acima pode encontrar restrições no preenchimento/envio do formulário.


# 🛠️ Como Executar o Projeto

## Pré-requisitos
* Navegador moderno (Chrome, Firefox, Edge, etc.).
* Conexão com a internet (para carregar o Bootstrap via CDN).

## Passos
1. Clone o repositório:

`bash`

`Copy`

`git clone https://github.com/crparaizo/desafioRTOnboarding`

2. Navegue até a pasta do projeto:

`bash`

`Copy`

`cd desafioRTOnboarding`

3. Abra o arquivo index.html no navegador:

4. Clique duas vezes no arquivo index.html ou use um servidor local (como o Live Server do VS Code).

# Implementações Futuras

Com o intuito de tornar a aplicação mais acessível e funcional, garantindo uma experiência inclusiva e eficiente para todos os usuários, as seguintes melhorias estão planejadas:

* Recursos de acessibilidade
* Desenvolvimento de uma API para Validação de Dados:
* Implementação de testes de integração
* Otimização do carregamento do formulário e das respectivas funções de validação