
// const sizes = [
//   ['iphone-6', 'landscape'],
//   'iphone-6',
//   'ipad-2',
//   ['ipad-2', 'landscape'],
//   [1920, 1080],
// ];

describe("All", () => {
  it("should be publicly accessible", () => {
    cy.setResolution([1920, 1080]);
    cy.visit("http://localhost:4200/all");
    cy.get(".tests-container").matchImageSnapshot("fast-visual-regression");
  });
});
