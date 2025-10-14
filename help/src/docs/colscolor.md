# ColsColor

## Sintaxis

```
[ColsColor] Colors, Colors, ...
```

**Sintaxis alternativa:**
```
[ColsColor] NomCampo=Colors, ...
```

## Descripción

Define la lista de colores de las columnas en un listado. Permite especificar colores directos mediante códigos hexadecimales o clases CSS, incluyendo formateo condicional para valores numéricos.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `Colors` | Color o clase CSS para aplicar a la columna |

### Tipos de valores para Colors

| Formato | Descripción | Ejemplo |
|---------|-------------|---------|
| `#RRGGBB` | Color hexadecimal (debe empezar por #) | `#cccccc` |
| `NombreClase` | Nombre de clase CSS definida en la hoja de estilos | `NomClaseTotales` |
| `+` | Valores numéricos positivos usan clase `numPositive` | `+` |
| `-` | Valores numéricos negativos usan clase `numNegative` | `-` |
| `+-` | Combinación: positivos en verde, negativos en rojo | `+-` |

### Clases por defecto para valores numéricos

| Clase | Color por defecto | Descripción |
|-------|-------------------|-------------|
| `numPositive` | Verde | Aplicada a valores mayores de 0 |
| `numNegative` | Rojo | Aplicada a valores menores de 0 |

## Ejemplos

### Ejemplo 1: Colores mixtos
```
[ColsColor] #cccccc, NomClaseTotales, +-
```
- Primera columna: color gris (#cccccc)
- Segunda columna: clase CSS personalizada
- Tercera columna: formateo condicional (verde/rojo según valor)

### Ejemplo 2: Sintaxis alternativa
```
[ColsColor] dni=#dddddd
```
- Campo 'dni': color gris claro (#dddddd)