import Homescreen from "@/components/homescreen/Homescreen";

describe("Homescreen component", () => {
	beforeEach(() => {
		cy.viewport(1920, 1080); // Adjust the viewport as needed

		// Mount the component
		cy.mount(<Homescreen />);
	});

	it("renders correctly", () => {
		cy.get(".h-screen").should("exist");
		cy.get("nav").should("exist");
		cy.get(".flex.flex-col.text-4xl.justify-center.px-8.text-brandLightGreen").should("exist");
		cy.get(".bg-white.flex.flex-col.gap-8.justify-center.items-center").should("exist");
	});

	it("displays the correct splash text", () => {
		cy.get(".flex.flex-col.text-4xl.justify-center.px-8.text-brandLightGreen p").should(
			"contain.text",
			"Escape Gravity, Explore Earth",
		);
	});

	it("displays the 'Get started' section correctly", () => {
		cy.get(".text-3xl.font-bold.text-brandBlack").should("contain.text", "Get started");
		cy.get(".bg-brandTeal").contains("Enter dashboard").should("exist");
		cy.get(".bg-brandTeal").contains("Explore plans").should("exist");
	});

	it("displays the X-Plor logo and text", () => {
		cy.get(".flex.gap-2.justify-center").should("exist");
		cy.get(".text-brandTeal.font-medium").should("exist");
	});
});
