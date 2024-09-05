/// <reference types ="cypress"/>
import { EL_CLIENTE } from './elements';
import EnvHelper from '@helper/envHelper';
import login from '../login';
import { gerarClienteDados } from '@helper/dataGenerator';
const clienteDados = gerarClienteDados();


class Cliente {
 
  acessaMenuCliente(){
    cy.get(EL_CLIENTE.menuClientes)
      .should('be.visible')
      .click();
    cy.get(EL_CLIENTE.botaoNovoCliente)
      .should('be.visible');
  }

  pressionaBotaoNovoCliente(){
    cy.get(EL_CLIENTE.botaoNovoCliente)
      .should('be.visible')
      .click();
  }

  pressionaBotaoOpcaoPessoa(){
    cy
      .get(EL_CLIENTE.opcaoNovoClientePessoa)
      .should('be.visible')
      .click();
  }

  assertivaFormNovaPessoa(){
    cy.get(EL_CLIENTE.modalFormNovaPessoa)
      .should('be.visible')
      .should('have.text',EL_CLIENTE.titulomodalFormNovaPessoa);
  }

  assertivaFormEditarPessoa(){
    cy.get(EL_CLIENTE.modalFormNovaPessoa)
      .should('be.visible')
      .should('have.text','Editar pessoa');
  }

  assertivaModalConfirmacao(){
    cy.get(EL_CLIENTE.modalDeConfirmacao)
      .should('be.visible')
      .contains('Confirmação');
  }

  preencheCampoNomePessoa(){
    cy.get(EL_CLIENTE.inputFormNomePessoa)
      .should('be.visible')
      .type(clienteDados.pessoal.nome);
  }

  alteraCampoNomePessoa(){
    cy.get(EL_CLIENTE.inputFormNomePessoa)
      .should('be.visible')
      .invoke('val')
      .then((currentValue) => {
        const newValue = `${currentValue} EDITADO`; 
        cy.get(EL_CLIENTE.inputFormNomePessoa).clear().type(newValue);
      });
  }

  preencheCampoTelefone(){
    cy.get(EL_CLIENTE.inputFormTelefone)
    .should('be.visible')
    .type(clienteDados.pessoal.telefone);

  }

  preencheCampoEmail(){
    cy.get(EL_CLIENTE.inputFormEmail)
    .should('be.visible')
    .type(clienteDados.credenciais.email);
  }

  selecionaCampoCargo(){
    cy.get(EL_CLIENTE.inputFormCargo)
      .should('be.visible')
      .click()
    cy.get(EL_CLIENTE.itemFormSelect)
      .eq(0)
      .click()
  }

  selecionaCampoDepartamento(){
    cy.get(EL_CLIENTE.inputFormDepartamento)
      .should('be.visible')
      .click()
    cy.get(EL_CLIENTE.itemFormSelect)
      .eq(0)
      .click()

  }

  pressionarBotaoFormSalvar(){
    cy.get(EL_CLIENTE.botaoFormSalvar)
      .should('be.visible')
      .click()
  }

  assertivaClientePessoaCriado(){
    cy.get(EL_CLIENTE.tituloNomeCliente)
    .should('be.visible')
  }

  assertivaClientePessoaEditado(){
    cy.get(EL_CLIENTE.tituloNomeCliente)
    .should('be.visible')
    .contains('EDITADO')
  }

  pressionarAbaTodasAsPessoas(){
    cy.get('div[class="hbox ui-sortable-handle"]')
      .contains('span',EL_CLIENTE.opcaoTodasAsPessoas)
      .should('be.visible')
      .click()
  }

  selecionarPrimeiroClienteTabela(){
    cy.get(EL_CLIENTE.tabelaDinamica)
      .find('tbody td')
      .eq(0)
      .click()
  }

  selecionaOpcaoEditarCliente(){
    cy.get(EL_CLIENTE.botaoDropDownEditarCliente)
      .contains('Opções')
      .should('be.visible')
      .click();
    cy.get(EL_CLIENTE.opcaoDropDownLink)
      .contains('aside','Editar cliente')
      .should('be.visible')
      .click();
  }

  selecionaOpcaoExcluirCliente(){
    cy.get(EL_CLIENTE.botaoDropDownEditarCliente)
      .contains('Opções')
      .should('be.visible')
      .click();
    cy.get(EL_CLIENTE.opcaoDropDownLink)
      .contains('aside','Excluir cliente')
      .should('be.visible')
      .click();
  }

  pressionarBotaoConfirmar(){
    cy.get(EL_CLIENTE.botaoConfirmarModal)
      .should('be.visible')
      .click();

  }

  assertivaMensageClienteExcluido(){
    cy.get(EL_CLIENTE.tostMessage)
      .should('be.visible')
      .contains('Cliente excluído');
  }


}

export default new Cliente();
