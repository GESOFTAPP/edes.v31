# Chr

## Sintaxis

```
[Chr] Name | [TipoConversion] | AllowedChars [ | ExpresionRegularDown | ExpresionRegularExit [ | ChrOld | ChrNew ] ] Patron ]
```

## Descripción

Crea un tipo de edición personalizado que únicamente tendrá vigencia en el ámbito en el que se encuentra la etiqueta (en el EDF actual). Este comando permite definir tipos de edición que sólo admitirán los caracteres designados.

Se utiliza esta etiqueta cuando ninguno de los tipos de edición predefinidos se adapta a nuestras necesidades específicas. Los parámetros `ChrOld` y `ChrNew` permiten transformar caracteres automáticamente.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Name** | Nombre del tipo de edición personalizado |
| **TipoConversion** | Tipo de conversión de caracteres:<br>• `U`: Convertir a mayúsculas<br>• `L`: Convertir a minúsculas<br>• Vacío: Acepta mayúsculas y minúsculas<br>• `NoCheck`: Permite introducir cualquier carácter |
| **AllowedChars** | Caracteres permitidos en la entrada |
| **ExpresionRegularDown** | Expresión regular para validar mientras se teclea |
| **ExpresionRegularExit** | Expresión regular para validar al aceptar la ficha |
| **ChrOld** | Lista de caracteres a transformar |
| **ChrNew** | Lista de caracteres transformados |
| **Patron** | Patrón de formato donde `#` representa cualquier carácter y otros caracteres se generan automáticamente |

## Ejemplos

### Ejemplo 1: Tipo de edición con conversión a mayúsculas

```
[Chr] uNuevo | U | htsmkiwq@.:,;-
```

**Resultado:** Crea un tipo de edición llamado "uNuevo" que:
- Convierte las letras a mayúsculas automáticamente (toUpperCase)
- Acepta únicamente los caracteres especificados: `htsmkiwq@.:,;-`

### Ejemplo 2: Entrada de letras minúsculas con expresiones regulares

```
[Chr] letras | L | | a-zñçáéíóúâêîôûàèìòùäëïöüãõ
```

**Resultado:** Crea un tipo de edición que acepta letras en minúsculas con caracteres especiales y acentos usando expresiones regulares.

### Ejemplo 3: Transformación de caracteres

```
[Chr] uTipo || 0123456789, ||| . | ,
```

**Resultado:** 
- Permite números y coma
- Transforma automáticamente el carácter "." al carácter ","
- Útil para entrada decimal desde el teclado numérico

### Ejemplo 4: Formato hexadecimal con patrón

```
[Chr] HEX | U | 1234567890ABCDEF ||||| ##-##-##
```

**Resultado:**
- Acepta números hexadecimales en mayúsculas
- Aplica el patrón `##-##-##` separando con guiones cada dos posiciones
- Ejemplo de salida: `A1-B2-C3`

## Notas Importantes

- El tipo de edición personalizado solo tiene vigencia en el EDF actual
- El carácter `#` en el patrón representa cualquier carácter válido
- Los caracteres literales en el patrón se insertan automáticamente
- La transformación de caracteres (`ChrOld` → `ChrNew`) se aplica en tiempo real durante la entrada