//! Hola Mundo

/* describe("Hola mundo", function () {
  it("Creando mi test hola mundo", function () {
    expect("hola mundo").toBe("hola mundo");
  });
});

describe("Este es un suite de prueba", function () {
  it("Debe pasar siempre", function () {
    expect(true).toBe(true);
  });
}); */

//! Suma y resta

/* const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

describe("Test para la funcion suma", function () {
  it("Si se ejecuta la funcion con 2 y 4, devuelve 6", function () {
    expect(suma(2, 4)).toBe(6);
  });

  it("Si se ejecuta con 3 y 5, devuelve 8", function () {
    expect(suma(3, 5)).toBe(8);
  });
});

describe("Test para la funcion resta", function () {
  it("Si se ejecuta la funcion con 4 y 2, devuelve 2", function () {
    expect(resta(4, 3)).toBe(1);
  });

  it("Si se ejecuta con 5 y 3, devuelve 2", function () {
    expect(resta(5, 0)).toBe(5);
  });
}); */

//! Otros Matchers

/* const persona = {
  nombre: "Juan",
  apellido: "Perez",
};

describe("Test para el objeto persona", function () {
  it("El objeto persona debe estar definido", function () {
    expect(persona).toBeDefined();
  });

  it("El objeto persona debe ser una instancia de Object", function () {
    expect(persona).toBeInstanceOf(Object);
  });

  it("La propiedad nombre debe ser Juan", function () {
    expect(persona.nombre).toEqual("Juan");
  });
}); */

//? Diferencias entre toBe y toEqual

/* describe("Diferencias entre toBe y toEqual", function () {
  it("toBe compara si dos objetos son el mismo", function () {
    //* toBe Apunta a la misma referencia de memoria
    const a = { nombre: "Juan" };
    const b = { nombre: "Juan" };
    expect(a).not.toBe(b);
  });

  it("toEqual compara si dos objetos son iguales", function () {
    const a = { nombre: "Juan" };
    const b = { nombre: "Juan" };
    expect(a).toEqual(b);
  });
}); */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* describe("Test para el array numeros", function () {
  it("El array numeros debe tener 10 elementos", function () {
    expect(numeros.length).toBe(10);
  });

  it("El array numeros debe tener menos de 11 elementos", function () {
    expect(numeros.length).toBeLessThan(11);
  });

  it("El elemento 0 del array debe ser distinto de 2", function () {
    expect(numeros[0]).not.toBe(2);
  });

  it("El array numeros debe contener el numero 5", function () {
    expect(numeros).toContain(5);
  });

  it("El array numeros no debe contener el numero 11", function () {
    expect(numeros).not.toContain(11);
  });
}); */

//! Excepciones

/* const funcionQueLanzaExcepcion = () => {
  throw new Error("Error lanzado por la funcion");
};

describe("Test para la funcion que lanza excepcion", function () {
  it("Debe lanzar una excepcion", function () {
    expect(funcionQueLanzaExcepcion).toThrow();
  });

  it("Debe lanzar una excepcion con el mensaje: 'Error lanzado por la funcion'", function () {
    expect(funcionQueLanzaExcepcion).toThrowError("Error lanzado por la funcion");
  });
}); */

//! BeforeAll, AfterAll, BeforeEach, AfterEach

/* beforeEach(function () {
  console.log("beforeEach");
});

afterEach(function () {
  console.log("afterEach");
});

beforeAll(function () {
  console.log("beforeAll");
});

afterAll(function () {
  console.log("afterAll");
}); */
