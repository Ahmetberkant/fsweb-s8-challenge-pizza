/// <reference types="cypress" />

describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("İsim inputuna metin girilebilmeli", () => {
    cy.get('input[placeholder^="Adınızı giriniz"]').type("Ahmet");
    cy.get('input[placeholder^="Adınızı giriniz"]').should(
      "have.value",
      "Ahmet"
    );
  });

  it("Birden fazla malzeme seçilebilmeli", () => {
    cy.contains("Pepperoni").click();
    cy.contains("Sosis").click();
    cy.contains("Kanada Jambonu").click();

    cy.get('input[value="Pepperoni"]').should("be.checked");
    cy.get('input[value="Sosis"]').should("be.checked");
    cy.get('input[value="Kanada Jambonu"]').should("be.checked");
  });

  it("Form gönderilebilmeli", () => {
    cy.get('input[placeholder^="Adınızı giriniz"]').type("Ahmet");
    cy.get("input[type='radio'][value='M']").check({ force: true });
    cy.get("select").select("Kalın");

    cy.contains("Pepperoni").click();
    cy.contains("Sosis").click();
    cy.contains("Kanada Jambonu").click();
    cy.contains("Tavuk").click();

    cy.get('input[placeholder^="Siparişine eklemek"]').type(
      "Lütfen hızlı gelsin"
    );

    cy.get("button[type='submit']").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Siparişiniz başarıyla alındı!");
    });

    cy.url().should("include", "/success");
  });
});
