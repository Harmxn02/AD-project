import AuctionProceeds from "@/components/transactions/AuctionProceeds";

describe("AuctionProceeds component", () => {
	beforeEach(() => {
		cy.mount(<AuctionProceeds />);
	});

	it('renders loading skeleton when data is null', () => {
        // Check if the component renders with loading state (skeleton)
        cy.get('.text-black.font-bold.text-3xl.my-4').should('exist');
        cy.contains('An overview of your earnings from the auction.').should('exist');
      });

    it('renders auction proceeds table with data', () => {
        // Check if the component renders with the correct title and description
        cy.get('section > h2.text-black.font-bold.text-3xl.my-4').should('exist');
        cy.contains('An overview of your earnings from the auction.').should('exist');

        // Check if the table is rendered with the correct headers
        cy.get('thead tr').should('have.length', 1);
        cy.get('thead tr th').should('have.length', 4);
    });
});
