import RecentExplorationsModal from "@/components/modals/RecentExplorationsModal";

describe('RecentExplorationsModal component', () => {
    beforeEach(() => {
        const onClose = cy.stub();
      // Mount the RecentExplorationsModal component before each test
     cy. mount(<RecentExplorationsModal onClose={onClose} sessionId={1} />);
    });

    it('renders properly with default props', () => {
      // Check if the component renders
      cy.get('div.fixed.top-0.left-0.flex.flex-col.w-full.h-full.justify-center.items-center.bg-black.bg-opacity-50').should('exist');

      // Check if the table with metric types and values is rendered
      cy.get('table').should('exist');

      // Check if the "Close modal" button is rendered
      cy.contains('Close modal').should('exist');
    });

    it('displays the correct metric values', () => {
        cy.get('#timestamp').should('have.text', '14:20:18');
        cy.get('#latitude').should('have.text', '34.858');
        cy.get('#longitude').should('have.text', '28.747');
        cy.get('#altitude').should('have.text', '5');
        cy.get('#temperature').should('have.text', '37');
        cy.get('#humidity').should('have.text', '0');
        cy.get('#pressure').should('have.text', '1147');
        cy.get('#light').should('have.text', '1478.2554');
        cy.get('#windspeed').should('have.text', '34');
        cy.get('#windDirection').should('have.text', '249');
        cy.get('#radiation').should('have.text', '34.782');
    });

    // Add more tests as needed based on your component functionality
  });
