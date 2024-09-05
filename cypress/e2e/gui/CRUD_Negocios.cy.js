/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';
import negocio from '@support/page/negocios';
import paginaLogin from '@support/page/login';

describe('Cenários de Testes Negócios.', { tags: ['regressao', 'smoke'] }, () => {

  beforeEach(() => {
    cy.step('DADO que estou logado no sistema');
    cy.login([EnvHelper.getValue('usuario.credenciaisValidas.email'), EnvHelper.getValue('usuario.credenciaisValidas.senha')]);
    paginaLogin.acessaPaginaLogin();
  });

  describe('Como um usuario final do sistema, faço testes na funcionalidade Negócios', () => {

    it('TC001 - Cadastrar um novo Negócio (Pipe) do tipo Novos Clientes.', () => {

      cy.step('QUANDO eu clico no menu lateral: Pipes, é apresentada a página de novo Card');
      negocio.acessaMenuPipes();

      cy.step('E eu clico no botão: Novo Card');
      negocio.pressionaBotaoNovoCard();

      cy.step('E seleciono a opção: Vendas | Novos clientes');
      negocio.selecionaSecaoPipeVendasNovo();

      cy.step('Então é aberto o modal do formulario de nova oportunidade');
      negocio.assertivaModalFormNovaOportunidade();

      cy.step('E preencho o valor do negocio no campo: Valor');
      negocio.preencheValorNegocio();

      cy.step('E pressiono o botão: Salvar');
      negocio.pressionaBotaoSalvarNegocio();

      cy.step('Então o novo negócio é criado');
      negocio.asservivaNovoNegocioCriado();


    });

    it('TC002 - Pesquisar/Ler um  Negócio (Pipe) do tipo Novos Clientes.', () => {

      cy.step('QUANDO eu clico no menu lateral: Pipes, é apresentada a página de novo Card');
      negocio.acessaMenuPipes();

      cy.step('E seleciono o Pipeline: Vendas | Novos clientes');
      negocio.selecionaSecaoPipeVendas();

      cy.step('Então é aberto o kanban com os pipes');
      negocio.assertivaKanbanPipes();

      cy.step('E clico no card criado com o titulo: Oportunidade | null');
      negocio.clicaCardOportunidadeNull();

      cy.step('Então o novo negócio é aberto');
      negocio.asservivaNovoNegocioCriado();


    });

    it('TC003 - Editar um  Negócio (Pipe) do tipo Novos Clientes.', () => {

      cy.step('QUANDO eu clico no menu lateral: Pipes, é apresentada a página de novo Card');
      negocio.acessaMenuPipes();

      cy.step('E seleciono o Pipeline: Vendas | Novos clientes');
      negocio.selecionaSecaoPipeVendas();

      cy.step('Então é aberto o kanban com os pipes');
      negocio.assertivaKanbanPipes();

      cy.step('E clico no card criado com o titulo: Oportunidade | null');
      negocio.clicaCardOportunidadeNull();

      cy.step('Então o novo negócio é aberto');
      negocio.asservivaNovoNegocioCriado();

      cy.step('E clico no botão: Opções e escolho a opção Editar oportunidade');
      negocio.selecionaOpcaoEditarOportunidade();

      cy.step('E altero o campo: valor');
      negocio.preencheValorNegocio();

      cy.step('E pressiono o botão: Salvar')
      negocio.pressionaBotaoSalvarNegocio();

      cy.step('Então o negócio é alterado');
      negocio.asservivaNovoNegocioCriado();


    });

    it('TC003 - Excluir um  Negócio (Pipe) do tipo Novos Clientes.', () => {

      cy.step('QUANDO eu clico no menu lateral: Pipes, é apresentada a página de novo Card');
      negocio.acessaMenuPipes();

      cy.step('E seleciono o Pipeline: Vendas | Novos clientes');
      negocio.selecionaSecaoPipeVendas();

      cy.step('Então é aberto o kanban com os pipes');
      negocio.assertivaKanbanPipes();

      cy.step('E clico no card criado com o titulo: Oportunidade | null');
      negocio.clicaCardOportunidadeNull();

      cy.step('Então o negócio é aberto');
      negocio.asservivaNovoNegocioCriado();

      cy.step('E clico no botão: Opções e escolho a opção Excluir oportunidade');
      negocio.selecionaOpcaoExcluirOportunidade();

      cy.step('ENTÃO é aberto o modal de confirmação de exclusão da oportunidade');
      negocio.assertivaModalConfirmacao();

      cy.step('E clico no botão: Confirmar');
      negocio.pressionarBotaoConfirmar();

      cy.step('E com isso a oportunidade é excluida e a mensagem de sucesso é apresentada');
      negocio.assertivaMensageNegocioExcluido();


    });

  });

});