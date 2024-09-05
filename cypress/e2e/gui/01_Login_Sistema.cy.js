/// <reference types ="cypress"/>
import paginaLogin from '@support/page/login';
import EnvHelper from '@helper/envHelper';


describe('Cenário de teste de Login do Sistema.', { tags: ['regressao', 'smoke'] }, () => {
   
  
    describe('Como um Usuário final da plataforma, faço login no sistema.', () => {
      
        it('T001 - Caso de Teste Negativo: Logar no Sistema com o email inválido.', () => {

          cy.step('DADO que eu acesso a página de login da plataforma');
          paginaLogin.acessaPaginaLogin();

          cy.step('QUANDO eu preencho o campo: Email com um email INVÁLIDO');
          paginaLogin.preencheCampoEmail(EnvHelper.getValue('usuario.credenciaisInvalidas.email'));

          cy.step('E eu preencho o campo: Password com uma senha válida');
          paginaLogin.preencheCampoSenha(EnvHelper.getValue('usuario.credenciaisValidas.senha'));

          cy.step('E eu preencho clico no botão: Login');
          paginaLogin.pressionaBotaoLogin();

          cy.step('Então é apresentada a mensagem de erro: E-mail ou senha incorretos');
          paginaLogin.assertivaUsuarioNaoLogado('E-mail ou senha incorretos');
      
      });

      it('T002 - Caso de Teste Negativo: Logar no Sistema com o senha inválida.', () => {

        cy.step('DADO que eu acesso a página de login da plataforma');
        paginaLogin.acessaPaginaLogin();

        cy.step('QUANDO eu preencho o campo: Email, com um email váildo');
        paginaLogin.preencheCampoEmail(EnvHelper.getValue('usuario.credenciaisValidas.email'));

        cy.step('E eu preencho o campo: Password, com uma senha INVÁLIDA');
        paginaLogin.preencheCampoSenha(EnvHelper.getValue('usuario.credenciaisInvalidas.senha'));

        cy.step('E eu preencho clico no botão: Login');
        paginaLogin.pressionaBotaoLogin();

        cy.step('Então é apresentada a mensagem de erro: E-mail ou senha incorretos');
        paginaLogin.assertivaUsuarioNaoLogado('E-mail ou senha incorretos');
    
    });


      it('T003 - Caso de Teste Positivo: Logar no Sistema com as Credenciais Válidas com Sucesso.', () => {

        cy.step('DADO que eu acesso a página de login da plataforma');
        paginaLogin.acessaPaginaLogin();

        cy.step('QUANDO eu preencho o campo: Email com um email válido');
        paginaLogin.preencheCampoEmail(EnvHelper.getValue('usuario.credenciaisValidas.email'));

        cy.step('E eu preencho o campo: Password com uma senha válida');
        paginaLogin.preencheCampoSenha(EnvHelper.getValue('usuario.credenciaisValidas.senha'));

        cy.step('E eu preencho clico no botão: Login');
        paginaLogin.pressionaBotaoLogin();

        cy.step('Então o usuario se loga na plataforma');
        paginaLogin.assertivaUsuarioLogado();
    
    });

  
    });

});