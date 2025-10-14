# S.splitHash

## SINTAXIS
```javascript
S.splitHash(dim, deli, txt)
```

## DESCRIPCIÓN
Divide un texto basándose en un delimitador específico y devuelve el elemento en la dimensión especificada. Útil para extraer partes específicas de una cadena separada por delimitadores.

## PARÁMETROS
- **dim** (number): La dimensión o índice del elemento que se desea obtener después de la división
- **deli** (string): El delimitador que se utilizará para dividir el texto
- **txt** (string): El texto que se va a dividir

## EJEMPLO
```javascript
// Dividir una URL y obtener el segundo segmento
var resultado = S.splitHash(1, '/', 'home/usuarios/perfil');
console.log(resultado); // "usuarios"

// Dividir un email y obtener el dominio
var dominio = S.splitHash(1, '@', 'usuario@ejemplo.com');
console.log(dominio); // "ejemplo.com"
```