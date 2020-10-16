describe('PizzaForm', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/pizza')
    })

    it('sanity checks', () => {
        expect(3).to.equal(3)
        expect({}).to.eql({})
    })

    const nameInput = () => cy.get('input[name="name"]')
    const instructionsInput = () => cy.get('input[name="instructions"]')
    const pepperoniBox = () => cy.get('input[name="pepperoni"]')
    const sausageBox = () => cy.get('input[name="sausage"]')
    const sizeDropdown = () => cy.get('select[name="size"]')
    const submitButton = () => cy.get('#submitButton')

    it('filling out inputs', () => {
        nameInput()
            .should('exist')
            .should('have.value', '')
            .type('Kylee')
            .should('have.value', 'Kylee')

        instructionsInput()
            .should('exist')
            .should('have.value', '')
            .type('Bring it into the house')
            .should('have.value', 'Bring it into the house')
    })

    it('select multiple toppings', () => {
        pepperoniBox()
            .should('exist')
            .should('not.be.checked')
            .click()
            .should('be.checked')
            
        sausageBox()
            .should('exist')
            .should('not.be.checked')
            .click()
            .should('be.checked')

        pepperoniBox()
            .click()

        sausageBox()
            .click()
    })

    it('submit the form', () => {
        nameInput().type('Kylee')
        sizeDropdown().select('small')
        submitButton().click()
        nameInput().should('have.value', '')
        sizeDropdown().should('have.value', '')

    })
})