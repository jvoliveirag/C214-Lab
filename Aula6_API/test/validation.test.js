const Constants = require("../src/utils/constants");
const Validation = require("../src/utils/validation");

it("Caso válido", () => {
  const result = Validation.create({
    nome: "Batman: The Dark Knight",
    Protagonista: "Christian Bale",
    ano: "2012",
    Produtor: "Christopher Nolan",
  });
  expect(result).toEqual(undefined);
});

it("Caso inválido - sem o parâmetro nome", () => {
  const result = Validation.create({
    Protagonista: "Christian Bale",
    ano: "2012",
    Produtor: "Christopher Nolan",
  });
  expect(result.name).toEqual(Constants.ErrorValidation.name);
});
