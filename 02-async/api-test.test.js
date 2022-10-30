import getAllComments from "./api-test";

describe("Test the comments api", () => {
    it('should return all comments in an array', async () => {
        const comments = await getAllComments();
        expect(comments).toBeInstanceOf(Array);
    })
})