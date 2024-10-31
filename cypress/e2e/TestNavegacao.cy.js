/// <reference types="cypress" />

describe('Testar Formularios', () => {

    beforeEach(() => {
        cy.visit('https://parceiros.ifood.com.br/restaurante/cadastre-seu-negocio-no-ifood?network=o&utm_source=bing&utm_medium=cpc&utm_campaign=ifood_br_b2b_bing-search-brand_aon_branded&utm_content=&utm_term=ifood-e&msclkid=8b0fb8a143b31b592cf3df82ec5fb891');
    });

    it('Acessar pagina', () => {
        cy.pause(5000);
        cy.screenshot('Pagina encontrada');

        cy.url().should('include', '/');
        cy.contains('Cadastre sua loja');
    });

    it('Clicar e retornar página', () => {
        cy.get('img[alt="Logotipo de iFood, vai para a página inicial"]')
        .eq(0) // Seleciona o primeiro elemento
        .click({ force: true });

        cy.screenshot('IfoodClick')

        cy.go('back');
        cy.screenshot('RetornoPagina')
    });
});
