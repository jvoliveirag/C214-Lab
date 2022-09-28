const { UserModel } = require("../src/infrastructure/database");
const user = require("../src/port/user_repository");

describe("create", () => {
  it("Valid User", async () => {
    UserModel.prototype.save = jest.fn().mockImplementation(() => ({
      toObject: () => ({
        id: 1,
        nome: "Batman Begins",
        Protagonista: "Christian Bale",
        ano: "2008",
        Produtor: "Christopher Nolan",
      }),
    }));

    expect(
      await user.create({
        id: 1,
        nome: "Batman Begins",
        Protagonista: "Christian Bale",
        ano: "2008",
        Produtor: "Christopher Nolan",
      })
    ).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        nome: expect.any(String),
        Protagonista: expect.any(String),
        ano: expect.any(String),
        Produtor: expect.any(String),
      })
    );
  });
});
