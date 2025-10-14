# Align

## Sintaxis

```
[Align] AlignType_Col1 [,AlignType_Col2]...[,AlignType_ColN]
```

**Sintaxis alternativa:**
```
[Align] NomCampo=AlignType, ...
```

## Descripción

Alinea y oculta las columnas del listado según los tipos de alineación especificados.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| `AlignType_Col` | Tipo de alineación de los datos de la columna |

### Tipos de alineación disponibles

| Tipo | Descripción |
|------|-------------|
| `L` | Alinear a la izquierda (o en blanco) |
| `C` | Centrar |
| `R` | Alinear a la derecha |
| `H` | Columna oculta |

## Ejemplo

```
[Align] L,C,R,H
```

Este ejemplo alinea la primera columna a la izquierda, centra la segunda, alinea la tercera a la derecha y oculta la cuarta columna.