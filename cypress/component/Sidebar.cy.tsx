import Sidebar from "@/components/dashboard/Sidebar";

describe("Sidebar Component", () => {
	beforeEach(() => {
		cy.mount(<Sidebar />);
	});

	it("renders the sidebar with the correct elements", () => {
		// Check if the profile picture is visible
		cy.get("img[alt='Profile Picture']").should("be.visible");

		// Check if the user's name is displayed
		cy.get(".text-brandTeal.font-bold").should("contain.text", "Alexander Karpenko");

		// Check if the navigation links are visible
		cy.get("nav ul")
			.children()
			.should("have.length", 3)
			.each((link, index) => {
				cy.wrap(link).find("a").should("be.visible").and("have.attr", "href");
				expect(["Dashboard", "Transactions", "Settings"]).to.include(link.text());
			});

		// Check if the "START EXPLORING" button is visible
		cy.contains("START EXPLORING").should("be.visible");

		// Check if the "SCHEDULE EXCURSION" button is visible
		cy.contains("SCHEDULE EXCURSION").should("be.visible");

		// Check if the exit link is visible
		cy.get("nav a[href='/']").should("be.visible").and("contain.text", "Exit");
	});
});
