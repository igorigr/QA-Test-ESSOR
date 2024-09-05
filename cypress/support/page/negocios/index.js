/// <reference types ="cypress"/>
import { EL_NEGOCIO } from './elements';
import EnvHelper from '@helper/envHelper';
import login from '../login';
import { gerarClienteDados } from '@helper/dataGenerator';
const clienteDados = gerarClienteDados();


class Negocios {
 
  acessaMenuPipes(){
    cy.get(EL_NEGOCIO.acessaMenuPipes)
      .should('be.visible')
      .click();
    cy.get(EL_NEGOCIO.botaoNovoCard)
      .should('be.visible');
  }

  pressionaBotaoNovoCard(){
    cy.get(EL_NEGOCIO.botaoNovoCard)
      .should('be.visible')
      .click();
  }

  selecionaSecaoPipeVendasNovo(){
    cy.get(EL_NEGOCIO.sectionPipeVendasNovo)
      .contains('Vendas | Novos clientes')
      .should('be.visible')
      .click();
  }

  selecionaSecaoPipeVendas(){
    cy.get(EL_NEGOCIO.sectionPipeVendas)
      .contains('Vendas | Novos clientes')
      .should('be.visible')
      .click();
  }

  assertivaModalFormNovaOportunidade(){
    cy.get(EL_NEGOCIO.inputFormValor)
      .should('be.visible')
  }

  selecionaCliente(){
    cy.get(EL_NEGOCIO.inputFormCliente)
      .should('be.visible')
      .click()
   cy.get(EL_NEGOCIO.itemFormSelect)
      .eq(0)
      .click()

  }

  preencheValorNegocio(){
    cy.get(EL_NEGOCIO.inputFormValor)
      .should('be.visible')
      .click()
      .type(clienteDados.empresa.valorNegocio)
  }

  pressionaBotaoSalvarNegocio(){
    cy.get(EL_NEGOCIO.botaoSalvarNegocio)
      .should('be.visible')
      .contains('Salvar')
      .click()
  }

  asservivaNovoNegocioCriado(){
    cy.get(EL_NEGOCIO.botoTipoNegocio)
      .contains('Vendas | Novos clientes')
      .should('be.visible')

  }

  assertivaKanbanPipes(){
    cy.get(EL_NEGOCIO.tituloPipelineKanbam)
      .contains('Vendas | Novos clientes')
      .should('be.visible')

  }

  clicaCardOportunidadeNull(){
    cy.get(EL_NEGOCIO.cardOportunidadeNull)
      .contains('Oportunidade | null')
      .eq(0)
      .should('be.visible')
      .click()
  }

  selecionaOpcaoEditarOportunidade(){
    cy.get(EL_NEGOCIO.botaoDropDownEditarNegocio)
      .contains('Opções')
      .should('be.visible')
      .click();
    cy.get(EL_NEGOCIO.opcaoDropDownLink)
      .contains('aside','Editar oportunidade')
      .should('be.visible')
      .click();
  }

  selecionaOpcaoExcluirOportunidade(){
    cy.get(EL_NEGOCIO.botaoDropDownEditarNegocio)
      .contains('Opções')
      .should('be.visible')
      .click();
    cy.get(EL_NEGOCIO.opcaoDropDownLink)
      .contains('aside','Excluir oportunidade')
      .should('be.visible')
      .click();
  }

  assertivaModalConfirmacao(){
    cy.get(EL_NEGOCIO.modalDeConfirmacao)
      .should('be.visible')
      .contains('Confirmação');
  }

  pressionarBotaoConfirmar(){
    cy.get(EL_NEGOCIO.botaoConfirmarModal)
      .should('be.visible')
      .click();

  }

  assertivaMensageNegocioExcluido(){
    cy.get(EL_NEGOCIO.tostMessage)
      .should('be.visible')
      .contains('Card excluído');
  }


}

export default new Negocios();
