describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays five items and load more button by default", () => {
    cy.get("[data-testid=application]").should("have.length", 5);
    cy.get("[data-testid=load-more]").should("have.length", 1);
  });

  it("error should not exist", () => {
    cy.get("[data-testid=error]").should("not.exist");
  });

  it("load page 1 by default", () => {
    cy.get("[data-testid=page-1]").should("have.length", 1);
  });

  it("should load page 1 on load more button click", () => {
    cy.get("[data-testid=load-more]").click();
    cy.get("[data-testid=page-1]").should("not.exist");
    cy.get("[data-testid=page-2]").should("have.length", 1);

    cy.get("[data-testid=load-more]").click();
    cy.get("[data-testid=page-1]").should("not.exist");
    cy.get("[data-testid=page-2]").should("not.exist");
    cy.get("[data-testid=page-3]").should("have.length", 1);
  });
});
