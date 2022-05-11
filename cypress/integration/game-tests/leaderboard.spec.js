describe("Leaderboard tests", () => {
    beforeEach(() => {
        cy.visit("https://responsivefight.herokuapp.com/");
        cy.get("#login").click();
        cy.get("#worrior_username").type("applekiwis");
        cy.get("#worrior_pwd").type("123");
        cy.get(".btn").contains("Login warrior").click();
        cy.get(".btn").contains("Start your journey applekiwis");
        cy.visit("https://responsivefight.herokuapp.com/leaderboard");
        cy.request({
            method: 'PUT',
            url: 'https://supervillain.herokuapp.com/v1/user',
            form: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization'    : 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIxMjMxMjMxMjMxIiwiZW1haWwiOiJzaC5wcmFrcml0aUBnbWFpbC5jb20iLCJpYXQiOjE2NTIyNDYzNTAsImV4cCI6MTY1MjUwNTU1MH0.syKMK8lRDZocP-7QLY6pWy0TFX5q9K-hNzN4-19uEl2fDuXe10GRcn-Rzmmu1lmm2cGttWSVpsMdqYI9KEPkWA',
            },
            body: {
                username: 'applekiwis',
                score: 4000,
            },
        })
    });

    it("should have elements present", () => {
        cy.get("p").contains("COVID-19 THE GAME - LEADERBOARD");
        cy.get("#leaderboard_link").should("be.visible");
        cy.screenshot();
    });

    it("should display correct points", () => {
        cy.get("p").contains("COVID-19 THE GAME - LEADERBOARD");
        cy.get("#leaderboard_link").should("be.visible");
        cy.get(".ticker-item").contains(
            "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water."
        );
        cy.get(".row").contains("td", "applekiwis").siblings().contains("4000");
        cy.screenshot();
    });
});
