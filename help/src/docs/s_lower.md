# S.lower

## SINTAXIS
```javascript
S.lower(x)
```

## DESCRIPCIÓN
Convierte una cadena de texto a minúsculas. Equivalente al método toLowerCase() nativo de JavaScript pero con manejo adicional de casos especiales.

## PARÁMETROS
- **x** (string): La cadena de texto que se convertirá a minúsculas.

## EJEMPLO
```javascript
// Convertir texto simple
var texto = "HOLA MUNDO";
var minusculas = S.lower(texto);
console.log(minusculas); // "hola mundo"

// Normalizar entrada de usuario
var entrada = "JavaScript ES Genial";
var normalizada = S.lower(entrada);
console.log(normalizada); // "javascript es genial"

// Para comparaciones
var nombre1 = "JUAN";
var nombre2 = "juan";
if (S.lower(nombre1) === S.lower(nombre2)) {
    console.log("Los nombres son iguales"); // Se ejecuta
}

// Con caracteres especiales
var textoEspecial = "ÑOÑO ÜRBAN";
var resultado = S.lower(textoEspecial);
console.log(resultado); // "ñoño ürban"
```