describe("Login flow tests", () => {
    beforeEach(() => {
        cy.visit("https://responsivefight.herokuapp.com/");
        cy.get("#login").click();
    });

    describe("UI tests", () => {
        it("should have all the fields visible", () => {
            cy.get("h1").should("contain.text", "Login with your warrior name");
            cy.get("p").should(
                "contain.text",
                "Please fill in this form to create an account."
            );
            cy.get("#worrior_username").should("be.visible");
            cy.get("#worrior_pwd").should("be.visible");
            cy.get(".btn").contains("Login warrior").should("be.visible");
            cy.get(".btn").contains("Cancel").should("be.visible");
            cy.screenshot();
        });
    });

    describe("Valid user login tests", () => {
        it("should successfully login valid user", () => {
            cy.get("#worrior_username").type("1231231231");
            cy.get("#worrior_pwd").type("123");
            cy.get(".btn").contains("Login warrior").click();
            cy.get(".btn").contains("Start your journey 1231231231");
        });

        it("should not show login screen on cancel button click", () => {
            cy.get("#worrior_username").type("1231231231");
            cy.get("#worrior_pwd").type("123");
            cy.get(".btn").contains("Login warrior").click();
            cy.get(".btn").contains("Start your journey 1231231231");
        });
    });

    describe("Invalid user login tests", () => {
        it("should show error message for invalid user", () => {
            cy.get("#worrior_username").type(Date.now());
            cy.get("#worrior_pwd").type("123");
            cy.get(".btn").contains("Login warrior").click();
            cy.get("#login_popup").contains("Wrong username or password");
        });

        it("should show error message for empty fields submit", () => {
            cy.get(".btn").contains("Login warrior").click();
            cy.get("#login_popup").contains("Wrong username or password");
        });
    });
});
