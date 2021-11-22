describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays five items by default", () => {
    cy.get("[data-testid=application]").should("have.length", 5);
  });
});
