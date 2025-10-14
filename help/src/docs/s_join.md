# S.join

## SINTAXIS
```javascript
S.join(dim [, delimiter=","])
```

## DESCRIPCIÓN
Devuelve un array asociativo en una cadena, uniendo los elementos con el delimitador especificado. Similar al método join nativo de JavaScript pero adaptado para objetos asociativos.

## PARÁMETROS
- **dim** (object/array): El array o objeto asociativo que se convertirá en cadena.
- **delimiter** (string, opcional): El delimitador que se usará para separar los elementos. Por defecto es una coma ",".

## EJEMPLO
```javascript
// Con un array simple
var frutas = ["manzana", "banana", "naranja"];
var cadenaFrutas = S.join(frutas, " - ");
console.log(cadenaFrutas); // "manzana - banana - naranja"

// Con un objeto asociativo
var usuario = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
var datosUsuario = S.join(usuario, " | ");
console.log(datosUsuario); // "Juan | 30 | Madrid"

// Con delimitador por defecto
var numeros = [1, 2, 3, 4, 5];
var cadenaNumeros = S.join(numeros);
console.log(cadenaNumeros); // "1,2,3,4,5"
```