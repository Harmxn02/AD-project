import Header from "@/components/dashboard/Header";

describe("Header component", () => {
	let onButtonClickStub;

	beforeEach(() => {
		// Stub document.requestFullscreen
		cy.stub(document.documentElement, "requestFullscreen").as("requestFullscreenStub");
		// Stub document.exitFullscreen
		cy.stub(document, "exitFullscreen").as("exitFullscreenStub");

		onButtonClickStub = cy.stub().as("onButtonClick");
		cy.mount(<Header activeButton="DAY" onButtonClick={onButtonClickStub} />);
	});

	it("renders correctly", () => {
		cy.get("header").should("exist");
	});

	it("handles button clicks for period time", () => {
		cy.get("button").contains("DAY").click();
		cy.get("@onButtonClick").should("be.calledWith", "DAY");

		cy.get("button").contains("WEEK").click();
		cy.get("@onButtonClick").should("be.calledWith", "WEEK");

		cy.get("button").contains("MONTH").click();
		cy.get("@onButtonClick").should("be.calledWith", "MONTH");
	});
});
