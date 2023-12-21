import Account from "@/components/settings/Account";

describe("Account component", () => {
	beforeEach(() => {
		cy.mount(<Account />);
	});

	it("renders active subscription section correctly", () => {
		cy.get(".flex.flex-col.gap-4")
			.eq(0)
			.within(() => {
				cy.get("h3").contains("Active Subscription").should("exist");
				cy.get("p").contains("Change or cancel your active subscription.").should("exist");
				cy.get("a[href='settings/subscriptions']").contains("Change subscription").should("exist");
				cy.get("a[href='#todo']").contains("Cancel subscription").should("exist");
			});
	});

	it("renders danger zone section correctly", () => {
		cy.get(".flex.flex-col.gap-4")
			.eq(1)
			.within(() => {
				cy.get("h3").contains("DANGER ZONE").should("exist");
				cy.get("p").contains("Delete your data. This is a").should("exist");
				cy.get("a[href='settings/delete-data']").contains("Delete data").should("exist");
			});
	});
});
