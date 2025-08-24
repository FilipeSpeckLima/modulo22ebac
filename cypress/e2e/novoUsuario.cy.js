/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Fluxo de Criação de Conta', () => {

  it('Deve criar uma conta com sucesso', () => {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const telefone = '51999999999';
    const email = faker.internet.email();
    const senha = 'senha123!';

    // Define cookie antes de visitar a página
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });

    cy.visit('/minha-conta');

    // Clica na aba "Conta"
    cy.get('[href="/Tab/Account"]', { timeout: 15000 }).click();

    // Clica no botão "Sign Up"
    cy.get('[data-testid="signUp"] > .css-146c3p1', { timeout: 15000 }).click();

    // Preenche o formulário
    cy.get('[data-testid="firstName"]').type(nome);
    cy.get('[data-testid="lastName"]').type(sobrenome);
    cy.get('[data-testid="phone"]').type(telefone);
    cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email);
    cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(senha);
    cy.get('[data-testid="repassword"]').type(senha);

    // Clica no botão final de criar conta
    cy.get('[data-testid="create"]', { timeout: 15000 }).click();
    
    // Após criar a conta, acessar Profile
    cy.get('[href="/Tab/Account"]', { timeout: 15000 }).should('be.visible').click({ force: true });

  });

});
