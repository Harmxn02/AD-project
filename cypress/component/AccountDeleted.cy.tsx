import AccountDeleted from "@/components/settings/AccountDeleted";

describe("AccountDeleted component", () => {
	beforeEach(() => {
		cy.mount(<AccountDeleted />);
	});

	it('clears local storage on mount', () => {
        // Check if local storage is cleared after mounting the component
        cy.window().then((win) => {
          const preferences = win.localStorage.getItem('preferences');
          expect(preferences).to.be.null;
        });
      });

      it('renders the correct UI elements', () => {
        // Check if the component renders the expected UI elements
        cy.get('.h-screen').should('exist');
        cy.get('nav').should('exist');
        cy.get('h1').should('have.text', 'X-Plor');
        cy.get('svg').should('exist');
        cy.get('.flex-col').should('exist');
        cy.get('p.font-bold').should('have.text', 'Data succesfully deleted');
        cy.get('span.font-normal').should('have.text', 'welcome to a fresh start');
        cy.get('a').should('exist').and('have.attr', 'href', '/');
      });

      it('go to homescreen button renders', () => {
        cy.get('a').should('have.text', 'Go to Home Screen').should('have.attr', 'href');
      });
});


