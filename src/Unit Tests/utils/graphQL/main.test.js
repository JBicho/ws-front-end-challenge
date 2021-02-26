import client from "../../../utils/graphQL/main";

describe("Test graphQL client", () => {
  it("Should have a defined client", () => {
    expect(client).toBeDefined();
  });
});
