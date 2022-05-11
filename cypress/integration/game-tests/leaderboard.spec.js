describe("SignUp flow tests", () => {
    beforeEach(() => {
        cy.visit("https://responsivefight.herokuapp.com/");
        cy.get("#login").click();
        cy.get("#worrior_username").type("1231231231");
        cy.get("#worrior_pwd").type("123");
        cy.get(".btn").contains("Login warrior").click();
        cy.get(".btn").contains("Start your journey 1231231231");
        cy.visit("https://responsivefight.herokuapp.com/leaderboard");
    });

    describe("Leaderboard tests", () => {
        it("should have elements present", () => {
            cy.get("p").contains("COVID-19 THE GAME - LEADERBOARD");
            cy.get("#leaderboard_link").should("be.visible");
            cy.screenshot();
        });

        it("should show correct points", () => {
            cy.get("p").contains("COVID-19 THE GAME - LEADERBOARD");
            cy.get("#leaderboard_link").should("be.visible");
            cy.get(".ticker-item").contains(
                "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water."
            );
            cy.get(".row").contains("td", "1231231231").siblings().contains("4000");
            cy.screenshot();
        });
    });
});
