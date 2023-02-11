class E2EPage {

    adicionarAoCarrinho(produto, tamanho, cor, quantidade){
        
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]').contains(produto).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    realizarCheckout(nome, sobrenome, empresa, pais, endereco, cidade, estado, cep, telefone, email){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_2').clear().click().type(endereco)
        cy.get('#billing_city').clear().click().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado).get('#select2-billing_state-container').click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#payment_method_cod').check()
        cy.get('#terms').check()
        cy.get('#place_order').click()

    }

}

export default new E2EPage()