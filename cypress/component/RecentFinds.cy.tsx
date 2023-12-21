import RecentFinds from "@/components/dashboard/RecentFinds";

describe("RecentFinds component", () => {
	beforeEach(() => {
		cy.mount(<RecentFinds />);
	});

	it("renders correctly", () => {
		cy.get("p.font-light").should("be.visible");
	});
});
