/// <reference types="cypress" />

import E2EPage from "../support/page_objects/e2e.page";
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
    })

});

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        E2EPage.adicionarAoCarrinho('Atomic Endurance Running Tee (V-neck)', 'XS', 'Blue', 3)
        E2EPage.adicionarAoCarrinho('Autumn Pullie', 'M', 'Green', 1)
        E2EPage.adicionarAoCarrinho('Augusta Pullover Jacket', 'XS', 'Blue', 4)
        E2EPage.adicionarAoCarrinho('Atomic Endurance Running Tee (Crew-Neck)', 'XS', 'Black', 2)

        E2EPage.realizarCheckout(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email

        )

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})