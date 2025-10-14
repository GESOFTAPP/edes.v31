# GPFields

## Sintaxis

```
[GPFields] Fields | Caracteres
```

## Descripción

Es una etiqueta para agilizar la prueba de formularios. Permite definir campos que cambien automáticamente su valor al usar las funciones "Copy" y "Paste" del menú de desarrollo, generando datos aleatorios o secuenciales para facilitar las pruebas de formularios con campos únicos.

**Funcionamiento:**
1. Definir mediante `[GPFields]` los campos que deben cambiar su valor (campos únicos como DNI, CIF, etc.)
2. Rellenar un alta y hacer "Copy" con el menú del desktop o de la página actual antes de submit
3. Hacer submit del formulario
4. En el siguiente alta, pulsar "Paste" para copiar todos los valores variando los campos indicados en las etiquetas `[GPFields]`

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `Fields` | Nombre del campo al que se aplicará la generación automática |
| `Caracteres` | Lista de caracteres que acepta el campo para generación aleatoria, o `+` para indicar campo autoincremental |

## Ejemplos

### Ejemplo 1: Campo autoincremental
```
[GPFields] codigo | +
```
Cada vez que se use "Paste", el campo 'codigo' se incrementará secuencialmente.

### Ejemplo 2: Generación aleatoria de texto
```
[GPFields] nombre | ABCDEFGHIJKLMNOPQRSTUVWXYZ
```
Genera un nombre aleatorio usando caracteres de la 'A' a la 'Z'.

### Ejemplo 3: Caracteres con espacios
```
[GPFields] descripcion | ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
```
Genera texto aleatorio incluyendo letras, números y espacios en blanco.

### Ejemplo 4: Múltiples campos
```
[GPFields] codigo | +
[GPFields] nombre | ABCDEFGHIJKLMNOPQRSTUVWXYZ
[GPFields] email | abcdefghijklmnopqrstuvwxyz@.-
```

## Notas

- Para incluir espacios en blanco en la generación aleatoria, debe incluirse el carácter espacio dentro de la secuencia de caracteres
- El símbolo `+` indica que el campo será autoincremental (números secuenciales)
- Esta funcionalidad está disponible a través del menú de desarrollo (botón derecho en la página principal)
- Es especialmente útil para pruebas de formularios con campos únicos que requieren valores diferentes en cada alta