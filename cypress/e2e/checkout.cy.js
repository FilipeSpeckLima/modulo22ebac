/// <reference types="cypress" />

describe('Fluxo de Login + Checkout', () => {

  it('Deve logar e realizar uma compra com sucesso', () => {
    // Carrega credenciais do fixture
    cy.fixture('usuario').then((usuario) => {
      
      // Define cookie antes de visitar a página
      cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });

      // --- Login ---
      cy.visit('/minha-conta');

      cy.get('[href="/Tab/Account"]', { timeout: 15000 }).click();
      cy.get('[data-testid="email"]').type(usuario.email);
      cy.get('[data-testid="password"]').type(usuario.senha);
      cy.get('[data-testid="btnLogin"]').click();

      
      
      // Seleciona o primeiro produto da lista de populares
      
      cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(3) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"]').click();

      // Adiciona ao carrinho
      cy.get('[data-testid="addToCart"]').click();

      // Continue para o pagamento
      cy.get('[data-testid="selectAddressOrContinueToPayment"]').click();

      // Valida produto no carrinho
      cy.get('[data-testid="completeCheckout"]').click();

      // Ir para profile
      cy.get('[href="/Tab/Account"]').click();
      
      // Sair
      cy.get('.r-14lw9ot > :nth-child(5)').click();
    });
  });

});

