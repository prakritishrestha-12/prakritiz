describe("Challenge tests", () => {
    beforeEach(() => {
        cy.visit("https://responsivefight.herokuapp.com/");
        cy.get("#login").click();
        cy.get("#worrior_username").type("1231231231");
        cy.get("#worrior_pwd").type("123");
        cy.get(".btn").contains("Login warrior").click();
        cy.get(".btn").contains("Start your journey 1231231231").click();
    });

    it("should show all the challenges", () => {
        cy.get(".summarytext")
            .contains("Visit all battlefields")
            .should("be.visible");
        cy.get(".summarytext")
            .contains("You need to jump on public transport.")
            .should("be.visible");
        cy.get(".summarytext")
            .contains("Lockdown rules have been eased and you go out.")
            .should("be.visible");
        cy.get(".summarytext")
            .contains("You are still required to attend your workplace.")
            .should("be.visible");
        cy.get("#news").contains("Are you game?").should("be.visible");
        cy.get("#bus").contains("Take the bus").should("be.visible");
        cy.get("#restaurant").contains("Go to a public place").should("be.visible");
        cy.get("#office").contains("Go to the office").should("be.visible");
        cy.screenshot();
    });

    it("should successfully play the challenge and display the score", () => {
        cy.get("#bus").click();
        cy.get(".modal-header").contains("You have taken the public bus..");
        cy.get("#bus_timer_start").contains("Start").should("be.visible");
        cy.get("#bus_timer_start").click();
        cy.get(".option-label").contains("Inside the Bus").should("be.visible");
        cy.get("#bus_answer_1")
            .contains(
                "Use your superheroes Mask and sanitizer while traveling on public transport and clean your hands regularly."
            )
            .should("be.visible");
        cy.get("#bus_answer_2")
            .contains(
                "Please consider travelling during peak times, when more help is available to you"
            )
            .should("be.visible");
        cy.get("#bus_answer_1").click();
        cy.get(".modal-title").contains("That is correct!").should("be.visible");
        cy.get("#score")
            .contains("1231231231 you have scored 100 points!")
            .should("be.visible");
        cy.get("#close_correct_modal_btn")
            .contains("Try the next battle")
            .should("be.visible");
        cy.get("#leaderboard_link")
            .contains("Check your final score")
            .should("be.visible");
    });

    it("should show times up message on user delay for challenge", () => {
        cy.get("#bus").click();
        cy.get("#bus_timer_start").click();
        cy.wait(25000);
        cy.get(".modal-title").contains("Time's Up!").should("be.visible");
        cy.get(".btn.btn-secondary").first().should("have.text", "Try again");
        cy.get(".btn.btn-secondary").next().should("have.text", " Return Home");
    });
});
