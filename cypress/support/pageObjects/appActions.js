Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
  cy.visit('/produtos');
  cy.get('.product-block').first().click();
  cy.get('.single_add_to_cart_button').click();
});

Cypress.Commands.add('realizarCheckout', (dados) => {
  cy.get('.woocommerce-message a').click(); // ir para checkout
  cy.get('#billing_first_name').type(dados.nome);
  cy.get('#billing_last_name').type(dados.sobrenome);
  cy.get('#billing_address_1').type(dados.endereco);
  cy.get('#billing_city').type(dados.cidade);
  cy.get('#billing_postcode').type(dados.cep);
  cy.get('#billing_phone').type(dados.telefone);
  cy.get('#billing_email').type(dados.email);
  cy.get('#place_order').click();

// Comando customizado para adicionar produto ao carrinho
Cypress.Commands.add('adicionarProdutoAoCarrinho', (produtoNome) => {
  cy.get('.product_list').contains(produtoNome).click();
  cy.get('button.single_add_to_cart_button').click();
  cy.wait(1000); // Pequena espera para garantir que produto foi adicionado
});

});