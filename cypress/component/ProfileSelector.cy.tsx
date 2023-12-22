import ProfileSelector from "@/components/homescreen/ProfileSelector";

describe('ProfileSelector component', () => {
    beforeEach(() => {
      // Mount the ProfileSelector component before each test
      cy.mount(<ProfileSelector />);
    });

    it('renders with default profile and select options', () => {
      // Check if the component renders
      cy.get('.ProfileSelector').should('exist');

      // Check if the default profile text is displayed
      cy.contains('Continue as:').should('exist');

      // Check if the select element exists and has the default disabled option
      cy.get('select').should('exist');
      cy.get('select option:disabled').should('have.text', 'Select a profile');
    });

    it('changes the selected profile and shows toast', () => {
      // Select a profile from the dropdown
      cy.get('select').select('2');

      // Check if the selected profile has changed
      cy.get('select').should('have.value', '2');

      // Check if the toast for the profile change is displayed
      cy.get('.react-hot-toast-success').should('exist');
      cy.contains('Profile changed to: Felix Gonet').should('exist');
    });

    it('saves selected profile to localStorage', () => {
      // Select a profile from the dropdown
      cy.get('select').select('3');

      // Reload the page to trigger the useEffect hook and check if the selected profile is loaded from localStorage
      cy.reload();

      // Check if the selected profile has been loaded from localStorage
      cy.get('select').should('have.value', '3');
    });

    it('shows error toast when attempting to change to an invalid profile', () => {
      // Select an invalid profile (profile with ID 0, assuming IDs are positive integers)
      cy.get('select').select('0');

      // Check if the error toast is displayed
      cy.get('.react-hot-toast-error').should('exist');
      cy.contains('Invalid profile selected').should('exist');
    });
  });
