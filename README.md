#Formulário de Onboarding de Clientes
Este projeto é um formulário de onboarding de clientes desenvolvido com HTML, CSS, Bootstrap e JavaScript. O objetivo é coletar informações essenciais dos clientes de forma simples e intuitiva, garantindo uma experiência agradável e eficiente.

#🚀 Como Funciona
O formulário permite que os clientes insiram seus dados pessoais, como nome, e-mail, telefone, data de nascimento, CPF, endereço e nome da mãe. Ele também inclui validações em tempo real para garantir que os dados sejam inseridos corretamente.

Após o preenchimento, os dados podem ser enviados para um backend (não implementado neste projeto) ou exibidos no console do navegador para fins de teste.

#🛠️ Tecnologias Utilizadas
HTML: Estrutura do formulário.

CSS: Estilização personalizada.

Bootstrap: Design responsivo e componentes pré-estilizados.

JavaScript: Validações em tempo real e interações dinâmicas.

#📂 Estrutura do Projeto
O projeto está organizado da seguinte forma:

Copy
onboarding-form/
├── index.html          # Página principal do formulário
├── index.css           # Estilos personalizados
├── index.js            # Lógica de validação e interação (testes funcionais)
├── units_tests.js      # Lógica de validação e interação (testes unitários)
└── README.md           # Documentação do projeto
🎨 Design e Funcionalidades
##1. Formulário de Onboarding

Campos do formulário:

Nome completo

E-mail

Telefone

Data de Nascimento

CPF

Validações em tempo real:

Todos os campos são obrigatórios.

E-mail deve ser válido.

Telefone deve seguir o formato (XX) XXXXX-XXXX.

Data de Nascimento deve ser válida.

CPF deve ser válido.

##2. Design Responsivo
O formulário é totalmente responsivo, adaptando-se a diferentes tamanhos de tela (desktop, tablet e mobile).

##3. Feedback Visual
Mensagens de erro são exibidas abaixo de cada campo quando os dados são inválidos.

Campos válidos são destacados com uma borda verde.

#🛠️ Como Executar o Projeto
Pré-requisitos
Navegador moderno (Chrome, Firefox, Edge, etc.).

Conexão com a internet (para carregar o Bootstrap via CDN).

Passos
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/onboarding-form.git
Navegue até a pasta do projeto:

bash
Copy
cd onboarding-form
Abra o arquivo index.html no navegador:

Clique duas vezes no arquivo index.html ou use um servidor local (como o Live Server do VS Code).