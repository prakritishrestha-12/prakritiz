import {generateUsername} from '../../support/utils/common'

describe("SignUp flow tests", () => {
  beforeEach(() => {
    cy.visit("https://responsivefight.herokuapp.com/");
    cy.get("#rego").click();
  });

  describe("UI tests", () => {
    it("should have all the fields visible", () => {
      cy.get("h1").should("contain.text", "Sign Up");
      cy.get("p").should(
        "contain.text",
        "Please fill in this form to create an account."
      );
      cy.get("#uname").should("be.visible");
      cy.get("input").invoke("attr", "for", "psw").should("be.visible");
      cy.get("input").invoke("attr", "for", "psw-repeat").should("be.visible");
      cy.get("button").contains("Cancel").should("be.visible");
      cy.get("#signupbtn").contains("Sign Up").should("be.visible");
      cy.screenshot();
    });
  });

  describe("Unsuccessful signup tests", () => {
    it("should show error when form is submitted with empty fields", () => {
      // cy.intercept('/api/auth/user/register', { statusCode: 401, body: { message: 'incorrect user name and password' } });
      const signupBtn = cy
        .get("#signupbtn")
        .contains("Sign Up")
        .should("be.visible");
      signupBtn.click();
      cy.contains( "incorrect user name and password"); // TODO find the message to be displayed when form is submitted with all the fields empty
      cy.screenshot();
    });

    it("should not let user enter more than 10 chars in username", () => {
      cy.get("#uname").type("A1234567890");
      cy.get("#uname").should("have.value", "A123456789");
      cy.screenshot();
    });

    it("should show error if passwords don't match", () => {
      cy.get("#uname").type("abcdabcd");
      cy.get("#pwd").type("123");
      cy.get("#psw-repeat").type("124");
      cy.get("#signupbtn").click();
      cy.get("#popup").should("contain.text", "Passwords do not match");
      cy.screenshot();
    });

    it("should show error if user already exists", () => {
      cy.get("#uname").type("appleapple");
      cy.get("#pwd").type("123");
      cy.get("#psw-repeat").type("123");
      cy.get("#signupbtn").click();
      cy.get("#popup").should("contain.text", "User already exists");
      cy.screenshot();
    });

    it("should exit the signup screen on Cancel button click", () => {
      cy.get("#uname").type("appleapple");
      cy.get("#pwd").type("123");
      cy.get("#psw-repeat").type("123");
      cy.get("button").contains("Cancel").click();
      cy.get("#signupbtn").contains("Sign Up").should("not.be.visible");
      cy.screenshot();
    });

    it("should clear screen input fields after cancel", () => {
      cy.get("#uname").type("appleapple");
      cy.get("#pwd").type("123");
      cy.get("#psw-repeat").type("123");
      cy.get("button").contains("Cancel").click();
      cy.get("#signupbtn").contains("Sign Up").should("not.be.visible");
      cy.get("#rego").click();
      cy.get("#uname").should("not.have.value","appleapple");
      cy.get("#pwd").should("not.have.value","123");
      cy.get("#psw-repeat").should("not.contain.value","123");
      cy.screenshot();
    });
  });

  describe("Successful signup tests", () => {
    it("should successfully create user", () => {
      const username = generateUsername(10);

      cy.get("#uname").type(username);
      cy.get("#pwd").type("123");
      cy.get("#psw-repeat").type("123");
      cy.get("#signupbtn").click();
      cy.contains("Login with your warrior name");
      cy.get("#worrior_username").should("have.value", username);
      cy.get("#warrior").should("have.text", "Login warrior");
      cy.get("#close").should("be.visible");
      cy.screenshot();
    });
  });
});
