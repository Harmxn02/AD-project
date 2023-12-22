import RecentXplorations from "@/components/dashboard/RecentXplorations";

describe("RecentXplorations component", () => {
	beforeEach(() => {
		cy.mount(<RecentXplorations />);
	});

	it("renders correctly", () => {
		cy.contains('Recent X-Plorations').should('exist');

		// Check if the description paragraph is rendered
		cy.contains('An overview of your recently visited locations, including travel time.').should('exist');

		// Check if at least one find is rendered (assuming there should be some finds)
		cy.get('div.w-full.flex.flex-col').should('exist');
		cy.get('div.w-full.flex.flex-col').first().within(() => {
			cy.get('.font-medium.text-lg').should('exist');
			cy.get('.text-brandBlack.font-semibold').should('exist');
			cy.get('.font-medium.text-sm').should('exist');
		});
	});
});
