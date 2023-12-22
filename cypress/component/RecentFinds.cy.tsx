import RecentFinds from "@/components/dashboard/RecentFinds";

describe("RecentFinds component", () => {
	beforeEach(() => {
		cy.mount(<RecentFinds />);
	});

	it("renders correctly", () => {
		cy.contains('Recent finds').should('exist');

		// Check if the description paragraph is rendered
		cy.contains('An overview of your recent finds').should('exist');

		// Check if at least one find is rendered (assuming there should be some finds)
		cy.get('div.w-full.flex.flex-col').should('exist');
		cy.get('div.w-full.flex.flex-col').first().within(() => {
			cy.get('.font-medium.text-lg').should('exist');
			cy.get('.text-brandBlack.font-semibold').should('exist');
			cy.get('.font-medium.text-sm').should('exist');
		});
	});
});
