describe("All", () => {
  it("should be publicly accessible", () => {
    cy.visit("http://localhost:4200/all");
    cy.get(".tests-container").matchImageSnapshot("fast-visual-regression");
  });
});
