# S.unserialize

## SINTAXIS
```javascript
S.unserialize(txt)
```

## DESCRIPCIÓN
Convierte una cadena de texto serializada (como datos de formulario o query string) en un objeto JavaScript. Útil para procesar datos URL-encoded o cadenas de parámetros.

## PARÁMETROS
- **txt** (string): La cadena de texto serializada que se desea convertir en objeto

## EJEMPLO
```javascript
// Deserializar datos de formulario
var datosSerializados = 'nombre=Juan&apellido=Pérez&edad=30';
var objeto = S.unserialize(datosSerializados);
console.log(objeto); // {nombre: "Juan", apellido: "Pérez", edad: "30"}

// Procesar query string de URL
var queryString = 'categoria=tecnologia&ordenar=fecha&limite=10';
var parametros = S.unserialize(queryString);
console.log(parametros); // {categoria: "tecnologia", ordenar: "fecha", limite: "10"}
```