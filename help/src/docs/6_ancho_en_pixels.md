# Ancho en Píxeles

## DESCRIPCIÓN
Indica el ancho del campo en píxeles.

---

## 1. CAMPOS ESPECIALES

### 📝 Campos TEXTAREA (Tipo `#`)
Para campos TEXTAREA se especifica:
```
Ancho,Alto
```

**Ejemplo:**
- `100,30` → Ancho de 100px, alto de 30px

### 📋 Campos SELECT con Modo "I" o "i"
Para selects con modo "I" o "i" en la columna 7:
```
AnchoSelect,AnchoInteriorSelect[,AltoSelect]
```

**Ejemplos:**
- `150,120` → Select de 150px con interior de 120px
- `150,120,5` → Select de 150px con interior de 120px y alto de 5 líneas

---

## 2. REFERENCIAS A OTROS CAMPOS

### 🎯 Alineación Básica

| Sintaxis | Descripción | Ejemplo |
|----------|-------------|---------|
| `vacío` | Asume el ancho definido por la longitud del campo | |
| `CampoReferencia` | Mismo ancho que el campo de referencia | `nombre` |
| `+CampoReferencia` | Se alinea con el final del campo de referencia | `+apellidos` |
| `-CampoReferencia` | Ajusta considerando iconos a la derecha | `-apellidos` |

### 📏 Distancias Entre Campos

| Sintaxis | Descripción | Ejemplo |
|----------|-------------|---------|
| `Campo1+Campo2` | Desde inicio de Campo1 hasta final de Campo2 | `nombre+apellidos` |
| `Campo1-Campo2` | Como anterior, pero incluyendo iconos | `nombre-apellidos` |

---

## 3. POSICIONAMIENTO DE CAMPOS

### ⬅️ Alineación con Label

| Sintaxis | Descripción | Ejemplo |
|----------|-------------|---------|
| `<CampoReferencia` | Alinea el final del campo con el campo de referencia | `<apellidos` |
| `>CampoReferencia` | Alinea el inicio del campo con el campo de referencia | `>nombre` |
| `<<` | Alinea el final del campo con iconos incluidos | `<<` |

---

## 4. FORMATOS DUALES (FICHA/LISTADO)

### 🔄 Separación por Contexto
Se pueden usar **dos formatos** separados por el símbolo **`/`**:

```
AnchoFicha / AnchoListado
```

**Importante:** 
- Los anchos solo se aplican en **fichas** por defecto
- Para que se aplique en **listados**, anteponer el símbolo **`=`**

### Ejemplos de Formatos Duales

| Sintaxis | Ficha | Listado | Descripción |
|----------|--------|---------|-------------|
| `200 / =100` | 200px | 100px | Diferente ancho en cada contexto |
| `nombre / =50` | Ancho como "nombre" | 50px | Referencia en ficha, fijo en listado |
| `+apellidos / =80` | Alineado con "apellidos" | 80px | Alineación en ficha, fijo en listado |

---

## EJEMPLOS PRÁCTICOS

### 📋 Casos de Uso Comunes

**Campo simple con ancho fijo:**
```
DNI | dni | DNI | T | 8 | 120 | A | | # |
```

**Campo alineado con otro:**
```
Apellidos | apel | N | T | 30 | +dni | - | | |
```

**Campo con formato dual:**
```
Nombre | nombre | N | T | 20 | 200/=100 | - | | |
```

**TEXTAREA:**
```
Observaciones | obs | # | T | 250 | 300,80 | - | | |
```

**SELECT con modo especial:**
```
Estado | estado | X | S | 1 | 150,120,5 | I | | |
```

---

## RESUMEN DE SÍMBOLOS

| Símbolo | Función | Ejemplo |
|---------|---------|---------|
| `+` | Alineación con final | `+apellidos` |
| `-` | Ajuste con iconos | `-apellidos` |
| `<` | Alineación hacia atrás | `<apellidos` |
| `>` | Alineación hacia adelante | `>nombre` |
| `<<` | Alineación con iconos | `<<` |
| `/` | Separador ficha/listado | `200/=100` |
| `=` | Aplicar en listado | `=100` |

---

## NOTAS IMPORTANTES

> ⚠️ **Recordatorio:** Los anchos solo se tienen en cuenta en las **fichas** por defecto. Para aplicar en **listados**, usar el prefijo **`=`**.

> 💡 **Tip:** Se pueden combinar referencias de campos con formatos duales para máxima flexibilidad.