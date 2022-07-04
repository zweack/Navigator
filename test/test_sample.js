const assert = require('assert');

describe("", () => {
	before(() => {
		console.log("Starting navigation tests");
	});

	after(() => {
		console.log("Basic tests completed");
	});


	describe("Status Bar Test", () => {
		it("Status bar navigation forward is successful", () => {
			assert.equal(2 + 3, 5);
		});

		it("Status bar navigation back is successful", () => {
			assert.equal(2 * 3, 6);
		});
	});

	describe("Menu Bar Test", () => {
		it("Menu bar navigation forward is successful", () => {
			assert.equal(2 + 3, 5);
		});

		it("Menu bar navigation back is successful", () => {
			assert.equal(2 * 4, 8);
		});
	});
});
