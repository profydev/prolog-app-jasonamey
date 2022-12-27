describe("projects error screen", () => {
  it("renders an error when 500 internal server error returns", () => {
    //trigger network error
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      forceNetworkError: true,
    }).as("getProjectsError");
    cy.visit("http://localhost:3000/dashboard");
    cy.wait("@getProjectsError");
    cy.wait(6000);
    //test error
    cy.contains("There was a problem loading the project data.").should(
      "exist"
    );
    //remove network error
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");
    //test projects properly render when "try again" is clicked
    cy.get("[src='/icons/arrow-right.svg']").click();
    cy.get("main > div").find("li").should("have.length", "3");
  });
});
