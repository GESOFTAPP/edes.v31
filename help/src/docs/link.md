# Link

## Sintaxis

```
[Link] Field, Field, Field, ...
```

## Descripción

Establece una relación de dependencia entre campos de formulario, de manera que los campos solo sean editables si su campo predecesor está completamente relleno. Este mecanismo garantiza un flujo de entrada de datos ordenado y lógico.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Fields** | Lista de campos separados por comas que establecen la cadena de dependencia |

## Reglas de Funcionamiento

### Separadores Especiales

- **Coma (`,`)** - Separa campos en secuencia lineal
- **Símbolo más (`+`)** - Agrupa múltiples campos que dependen del mismo predecesor

### Comportamiento de Dependencia

1. **Activación**: Un campo solo se vuelve editable cuando su predecesor contiene datos
2. **Desactivación**: Si se vacía un campo predecesor, automáticamente:
   - Los campos dependientes se vuelven no editables
   - El contenido de los campos dependientes se elimina

## Ejemplos de Uso

### Ejemplo 1: Secuencia Linear Simple

```
[Link] banco, sucursal, digitoControl, numeroCuenta
```

**Comportamiento:**
- Inicialmente solo `banco` es editable
- Al rellenar `banco` → `sucursal` se vuelve editable
- Al rellenar `sucursal` → `digitoControl` se vuelve editable  
- Al rellenar `digitoControl` → `numeroCuenta` se vuelve editable

**Resultado:** Los campos deben rellenarse obligatoriamente en orden secuencial.

### Ejemplo 2: Dependencia con Agrupación

```
[Link] field1, field2+field3, field4
```

**Comportamiento:**
- Al rellenar `field1` → `field2` y `field3` se vuelven editables simultáneamente
- Al rellenar cualquiera de `field2` o `field3` → `field4` se vuelve editable
- Si se vacía `field1` → `field2`, `field3` y `field4` se vacían y desactivan
- Si se vacían tanto `field2` como `field3` → `field4` se vacía y desactiva

## Casos de Uso Comunes

- **Formularios bancarios**: Banco → Sucursal → Dígito → Número de cuenta
- **Direcciones**: País → Provincia → Ciudad → Código postal
- **Datos jerárquicos**: Categoría → Subcategoría → Producto → Variante

## Notas Importantes

- La dependencia es unidireccional (de izquierda a derecha)
- El vaciado de un campo predecesor limpia automáticamente todos sus dependientes
- Los campos agrupados con `+` actúan como alternativas para activar el siguiente nivel