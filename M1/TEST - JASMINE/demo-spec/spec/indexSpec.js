describe("Función sumar", function () {
  it("debería sumar dos números correctamente", function () {
    expect(sumar(2, 3)).toBe(5);
  });

  it("debería manejar números negativos", function () {
    expect(sumar(-2, 3)).toBe(1);
  });
});
