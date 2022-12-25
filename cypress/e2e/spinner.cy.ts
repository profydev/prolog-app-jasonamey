describe("spinner", () => {
  it("renders and hides the spinner", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("[data-testid='spinner']").should("be.visible");
    cy.wait(1000);
    cy.get("[data-testid='spinner']").should("not.exist");
  });
});
