// write tests here
/*global cy */
describe("Testing links and see if adding name works and adding information to test button later", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.visit("http://localhost:3000/Pizza");
	});
	it("Checking to see if homepage works", () => {
		cy.get("input[name=name").type("Winnie").should("have.value", "Winnie");
		cy.get("input[name=instructions")
			.type("Add Extra Sauce")
			.should("have.value", "Add Extra Sauce");
		cy.get("#size").select("Small");
	});
});
describe("Selecting Multiple Toppings", function () {
	it("Checks multiple toppings", function () {
		cy.get("input[name=pepperoni").check();
		cy.get("input[name=cheese]").check();
		cy.get("input[name=meatball]").check();
		cy.get("input[name=ham]").check();

		cy.get("input[name=pepperoni").should("be.checked");
		cy.get("input[name=cheese").should("be.checked");
		cy.get("input[name=meatball").should("be.checked");
		cy.get("input[name=ham").should("be.checked");
	});
});
describe("Submitting Form Works", function () {
	it("Submits the form", function () {
		cy.get("button").click();
	});
});
