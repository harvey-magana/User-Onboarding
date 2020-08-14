describe("Testing form inputs" , () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("adding text to inputs and submits to the form", () => {
        cy.get('[data-cy="name"]').type("Jeff").should("have.value", "Jeff")
        cy.get('[data-cy="email"]').type("jeff@gmail.com").should("have.value", "jeff@gmail.com")
        cy.get('[data-cy="password"]').type("password2020").should("have.value", "password2020")
    });
});

