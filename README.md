# Projeto Escrito em Cypress

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## Ferramenta usada:
- [Cypress](https://www.cypress.io/ "Cypress")

## DEPENDENCIAS
  
  - @faker-js/faker
  - cypress-plugin-steps
  - cypress-mochawesome-reporter
  - cypress-plugin-api

## Prerequisotos para usar:

- Node.js v20.11.0
- Cypress >= 13.0

## Instalação: 

- Abrir o Terminal, entrar na pasta principal do Projeto

- Executar o seguinte comando para o node instalar as dependencias referenrentes a

 npm install 

### Arquitetura utilizada

-  Este framework foi construido na arquitetura PageObjects, com isso temos um codigo mais modularizado e de fácil manutenção. Para cada teste na pasta "e2e", temos objetos que chamam as classes e seus metodos na pasta "/suporte/pages".

-  Os testes estão divididos em e2e/API e e2e/GUI, estão escritos em steps no modelo gherkin.


```
├── README.md
├── cypress
    └── downloads
    └── e2e
        └── api
            └── CRUD_Clientes.cy.js
            └── CRUD_Negocios.cy.js
        └── gui
            └── 01_Login_Sistema.cy.js
            └── CRUD_Clientes.cy.js
            └── CRUD_Negocios.cy.js
    └── env
        └── model.json
        └── test.json
    └── fixtures
        └── contact
            └── post.json
            └── put.json
        └── deal
            └── path.json
            └── post.json
    └── results
        └── videos
        └── index.html
    └── support
        └── commands
            └── api
                └── commands.js
            └── gui
                └── commands.js
        └── page
            └── clientes
                └── elements.js
                └── index.js
            └── login
                └── elements.js
                └── index.js
            └── negocios
                └── elements.js
                └── index.js
├── cypress.config.js
├── package-lock.json
├── package.json

```

### Desafios encontrados

- O maior desafio foi o tempo de construção dos 19 casos de testes entre API e GUI
- Outro desafio foi para encontrar os elementos no frame web, onde não possui     identificadores proprio para serem utilizados na automação, como manda as boas práticas.

### Report da execução dos testes automatizado 

- Para acessar o relatório que foi gerado durante a minha execução acesse o link abaixo:

- [Report da Execução](https://github.com/igorigr/QA-Test-ESSOR-REPORT "Report da Execução")


### Informação das Variáveis de Ambiente

- Informar as credencias como email, senha e chave de Integração nos parametros correspondentes do arquivo env/test.json, antes de executar o projeto.

```
└── env
   └── test.json
{
  "urlLogin": "https://app10.ploomes.com/login",
  "urlApi": "https://api2.ploomes.com",
  "usuario": {
      "credenciaisValidas": {
        "email": "SeuEmail@seudominio.com",
        "senha": "suaSenha"
      },
      "credenciaisInvalidas": {
        "email": "invalidemail@domain.com",
        "senha": "123.Mudar"
      },
      "chaveIntegracao": "SuaChave"
  }
}
```

### Como Executar o projeto

Estando na pasta do projeto /automacao-ploomes

- Para exeuctar no modo open

npm rum openTestBrowser

- Para exeuctar no modo run. Este último irá gerar o relatorio em html na pasta /results

npm rum runTestBrowser
