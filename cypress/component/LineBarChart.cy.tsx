import LineBarChart from "@/components/dashboard/charts/LineBarChart";

describe("LineBarChart component", () => {
	beforeEach(() => {
		cy.mount(<LineBarChart dataObject={[]}/>);
	});

	it("renders correctly", () => {
		cy.get('canvas').should('be.visible');
	});
});


