describe("Testing form inputs" , () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("adding text to inputs and submits to the form", () => {
        cy.get('[data-cy="name"]').type("Jeff").should("have.value", "Jeff")
    });
});