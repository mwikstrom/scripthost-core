import { isGenericMessage } from "../src";

describe("GenericMessage", () => {
    it("can test matching", async () => {
        expect(isGenericMessage({
            type: "dummy",
            messageId: "id-123",
        })).toBe(true);
    });

    it("can test matching (typed)", async () => {
        expect(isGenericMessage({
            type: "dummy",
            messageId: "id-123",
        }, "dummy")).toBe(true);
    });
});