import supertest from "supertest";
describe("post functional tests", () => {
  it("should returna post with few data", async () => {
    const { body, status } = await supertest(app).get("/post");
    expect(status).toBe(200);
    expect(body).toBe([
      {
        id: 1,
        user: {
          id: 1,
          name: "Douglas Craici",
          email: "douglas@example.com",
          createdAt: "2022-04-01T00:00+00:00",
        },
        message: "lorem ipsun solem",
      },
      {
        id: 2,
        user: {
          id: 2,
          name: "Davi Figueredo",
          email: "davi@example.com",
          createdAt: "2022-04-01T00:00+00:00",
        },
        message: "lorem ipsun solem",
      },
    ]);
  });
});
