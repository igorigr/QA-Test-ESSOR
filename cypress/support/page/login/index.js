/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';
import { EL_LOGIN } from './elements';

class Login {

  acessaPaginaLogin(){
    cy.visit(EnvHelper.getValue('urlLogin'));
  }

  acessaPaginaHome(){
    cy.visit(EnvHelper.getValue('urlLogin'));
  }

  preencheCampoEmail(email){
    cy.get(EL_LOGIN.inputEmail).type(email, { log: false });
  }

  preencheCampoSenha(senha){
    cy.get(EL_LOGIN.inputPassword).type(senha, { log: false });
  }

  pressionaBotaoLogin(){
    cy.get(EL_LOGIN.botaoLogin).click();
  }

  assertivaUsuarioLogado(){
    cy.get(EL_LOGIN.divModulos)
      .should('be.visible');
  }

  assertivaUsuarioNaoLogado(msg){
    cy.wait(5000)
      .get(EL_LOGIN.divCredenciaisInvalidas)
      .should('be.visible')
      .find(EL_LOGIN.classAlerta)
      .should('have.text',msg);
  }

  loginPlataforma(email,senha) {
    this.acessaPaginaLogin();
    this.preencheCampoEmail(email);
    this.preencheCampoSenha(senha);
    this.pressionaBotaoLogin();
    this.assertivaUsuarioLogado();
    
  }

}

export default new Login();
