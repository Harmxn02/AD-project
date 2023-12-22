import AuctionProceeds from "@/components/transactions/AuctionProceeds";

describe("LineBarChart component", () => {
	beforeEach(() => {
		cy.mount(<AuctionProceeds />);
	});

	it('renders loading skeleton when data is null', () => {
        // Check if the component renders with loading state (skeleton)
        cy.get('.text-black.font-bold.text-3xl.my-4').should('exist');
        cy.contains('An overview of your earnings from the auction.').should('exist');
      });

    it('renders auction proceeds table with data', () => {
        // Provide sample data for testing
        const sampleAuctionProceeds = [
          {
            id: 1,
            date: '2023-01-01T12:00:00Z',
            status: 'completed',
            value: 100.5,
            member: { adriaId: '123' },
          },
          // Add more sample data if needed
        ];

        // Mount the component with sample data
        cy.mount(<AuctionProceeds />, {
          preloadedState: {
            auction_proceeds: sampleAuctionProceeds,
          },
        });

        // Check if the component renders with the correct title and description
        cy.get('section > h2.text-black.font-bold.text-3xl.my-4').should('exist');
        cy.contains('An overview of your earnings from the auction.').should('exist');

        // Check if the table is rendered with the correct headers
        cy.get('thead tr').should('have.length', 1);
        cy.get('thead tr th').should('have.length', 4);
    });
});
