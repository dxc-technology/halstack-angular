describe("Detailed Testing", () => {
    it("should be publicly accessible", () => {
      cy.setResolution([1024, 768]);
      cy.visit("http://localhost:4200").then(() => {
        const linksArray = Cypress.$("#links-list a");
        console.log(linksArray.length);
        if (linksArray.length) {
          cy.wrap(linksArray).each(link => {
            const componentName = link.text();
            console.log(componentName);
            cy.wrap(link)
              .click()
              .then(() => {
                const testCasesArray = Cypress.$(".test-case");
                if (testCasesArray.length) {
                  cy.wrap(testCasesArray).each(testCase => {
                    const testCaseId = testCase.attr("id");
                    cy.wrap(testCase).matchImageSnapshot(
                      `${componentName} - ${testCaseId}`
                    );
                  });
                }
              });
          });
        }
      });
    });
});