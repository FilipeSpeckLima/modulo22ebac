// Comando customizado para adicionar produto ao carrinho
Cypress.Commands.add('adicionarProdutoAoCarrinho', (produtoNome) => {
  cy.get('.product_list').contains(produtoNome).click();
  cy.get('button.single_add_to_cart_button').click();
  cy.wait(1000); // Pequena espera para garantir que produto foi adicionado
});
