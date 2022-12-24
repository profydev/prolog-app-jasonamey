describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });
  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });
    it("renders footer items", () => {
      cy.get("footer").children().should("have.length", 3);
      cy.get("footer").find("ul").contains("Docs");
      cy.get("footer").find("ul").contains("Help");
      cy.get("footer").find("ul").contains("API");
      cy.get("footer").find("ul").contains("Community");
      cy.get("footer").find("span").contains("Version: 14.5.1");
      cy.get("footer")
        .find("img")
        .should("have.attr", "src")
        .should("include", "logo-small");
    });
  });
});
