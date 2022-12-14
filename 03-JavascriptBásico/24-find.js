const articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audífonos", costo: 1700 },
];

var encontrarArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

console.log(encontrarArticulo);

// El método find() devuelve el valor del primer elemento del
// array que cumple la función de prueba proporcionada.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
