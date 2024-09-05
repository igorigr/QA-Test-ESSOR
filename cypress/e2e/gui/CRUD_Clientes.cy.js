/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';
import cliente from '@support/page/clientes';
import paginaLogin from '@support/page/login';

describe('Cenários de Testes Clientes.', { tags: ['regressao', 'smoke'] }, () => {
   

    describe('Como um usuario final do sistema, faço testes na funcionalidade Cliente.', () => {

      beforeEach(() => {
        cy.step('DADO que estou logado no sistema');
        cy.login([EnvHelper.getValue('usuario.credenciaisValidas.email'),EnvHelper.getValue('usuario.credenciaisValidas.senha')]);
        paginaLogin.acessaPaginaLogin();
      });

      it('TC001 - Cadastrar um novo Cliente do tipo Pessoa.', () => {

        cy.step('QUANDO eu clico no menu lateral: Clientes, é apresentada a página de clientes');
        cliente.acessaMenuCliente();

        cy.step('E clico no botão: Novo Cliente');
        cliente.pressionaBotaoNovoCliente();

        cy.step('E clico na opção: Pessoa');
        cliente.pressionaBotaoOpcaoPessoa();

        cy.step('ENTÃO é aberto o modal com o formulario de entrada: Nova Pessoa');
        cliente.assertivaFormNovaPessoa();

        cy.step('E preencho o campo: Nome');
        cliente.preencheCampoNomePessoa();

        cy.step('E preencho o campo: Telefone');
        cliente.preencheCampoTelefone();

        cy.step('E preencho o campo: Email');
        cliente.preencheCampoEmail();

        cy.step('E seleciono o primeiro cargo no campo: Cargo');
        cliente.selecionaCampoCargo();

        cy.step('E seleciono o primeiro Departamento no campo: Departamento');
        cliente.selecionaCampoDepartamento();

        cy.step('E pressiono o botão: Salvar');
        cliente.pressionarBotaoFormSalvar();

        cy.step('ENTÃO o novo cliente do tipo pessoa é criado');
        cliente.assertivaClientePessoaCriado();
      
      });

      it('TC002 - Pesquisar/Ler Cliente Cadastrado do tipo pessoa.', () => {

        cy.step('QUANDO eu clico no menu lateral: Clientes, é apresentada a página de clientes');
        cliente.acessaMenuCliente();

        cy.step('E eu clico na opção da aba lateral: Todas as Pessoas');
        cliente.pressionarAbaTodasAsPessoas();

        cy.step('E seleciono o primeiro cliente do tipo pessoa da tabela');
        cliente.selecionarPrimeiroClienteTabela();

        cy.step('Então o cadastro do cliente é aberto');
        cliente.assertivaClientePessoaCriado();

      });

      it('TC003 - Editar Cliente Cadastrado do tipo pessoa.', () => {

        cy.step('QUANDO eu clico no menu lateral: Clientes, é apresentada a página de clientes');
        cliente.acessaMenuCliente();

        cy.step('E eu clico na opção da aba lateral: Todas as Pessoas');
        cliente.pressionarAbaTodasAsPessoas();

        cy.step('E seleciono o primeiro cliente do tipo pessoa da tabela');
        cliente.selecionarPrimeiroClienteTabela();

        cy.step('Então o cadastro do clienete é aberto');
        cliente.assertivaClientePessoaCriado();

        cy.step('E clico no botão de Ação: OPÇÕES e seleciono a opção: Editar Cliente');
        cliente.selecionaOpcaoEditarCliente();

        cy.step('ENTÃO é aberto o modal com o formulario de entrada: Editar Pessoa');
        cliente.assertivaFormEditarPessoa();

        cy.step('E preencho altero o campo: Nome, com a palavra EDITADO no final do nome');
        cliente.alteraCampoNomePessoa();

        cy.step('E pressiono o botão: Salvar');
        cliente.pressionarBotaoFormSalvar();

        cy.step('ENTÃO o cliente do tipo pessoa é editado com seu nome alterado');
        cliente.assertivaClientePessoaCriado();


      });

      it('TC004 - Deletar Cliente Cadastrado do tipo pessoa.', () => {

        cy.step('QUANDO eu clico no menu lateral: Clientes, é apresentada a página de clientes');
        cliente.acessaMenuCliente();

        cy.step('E eu clico na opção da aba lateral: Todas as Pessoas');
        cliente.pressionarAbaTodasAsPessoas();

        cy.step('E seleciono o primeiro cliente do tipo pessoa da tabela');
        cliente.selecionarPrimeiroClienteTabela();

        cy.step('Então o cadastro do clienete é aberto');
        cliente.assertivaClientePessoaCriado();

        cy.step('E clico no botão de Ação: OPÇÕES e seleciono a opção: Excluir Cliente');
        cliente.selecionaOpcaoExcluirCliente();

        cy.step('ENTÃO é aberto o modal de confirmação de exclusão do cliente');
        cliente.assertivaModalConfirmacao();

        cy.step('E clico no botão: Confirmar');
        cliente.pressionarBotaoConfirmar();

        cy.step('E com isso o cliente é excluido e a mensagem de sucesso é apresentada');
        cliente.assertivaMensageClienteExcluido();
        

      });

  
    });

});