# S.code

## SINTAXIS
```javascript
S.code(txt, n)
```

## DESCRIPCIÓN
Obtiene el código ASCII/Unicode del carácter en la posición especificada de una cadena de texto.

## PARÁMETROS
- **txt** (String): Cadena de texto de la cual obtener el código del carácter
- **n** (Number): Posición del carácter en la cadena (base 0)

## EJEMPLO
```javascript
// Obtener el código del primer carácter
const codigo = S.code('Hola', 0); // Devuelve 72 (código de 'H')

// Obtener el código de un carácter específico
const codigoA = S.code('Hola', 3); // Devuelve 97 (código de 'a')

// Trabajar con caracteres especiales
const codigoEspecial = S.code('©', 0); // Devuelve 169

// Validar entrada de usuario
const primerCaracter = S.code(userInput, 0);
if (primerCaracter >= 65 && primerCaracter <= 90) {
    console.log('Comienza con mayúscula');
}
```