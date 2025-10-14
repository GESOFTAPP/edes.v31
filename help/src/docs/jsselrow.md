# JSSelRow

## Sintaxis
```
[JSSelRow] Mode [ | NomDF/else,... [ | UNIQUE/Condition ] ] ...
```

## Descripción
Código JavaScript a ejecutar cuando se selecciona un registro de un listado. Suele usarse para copiar información de la ventana actual a la ventana padre.

En el momento de pulsar saldrá un icono para indicar que se está procesando, si se quiere quitar el icono se puede ocultar con la función eHideBusy().

**Notas importantes:**
- Esta etiqueta predomina sobre [JSOnClickRow]
- Cuando se utiliza esta etiqueta desactiva la opción de poder ejecutar sublistados
- Si al final de la etiqueta [JSSelRow] no pones un "return;" y es una lista de selección se seleccionará el registro y no se cerrará la ventana
- Si retornas true se mantendrá uno en el listado, si se retorna false irá a mostrar la ficha de la fila actual
- Si se está en una subventana y no se pone "return" se cerrará la ventana

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Mode | String | Código JavaScript a ejecutar |
| NomDF/else | String | Nombres de campos o condiciones alternativas (opcional) |
| UNIQUE/Condition | String | Condición única o condición específica (opcional) |

## Variables disponibles

### Variables actuales
- **_vF**: Matriz asociativa con el valor de las celdas
- **_oF**: Matriz asociativa con los objetos (TD)
- **_oTR**: Objeto TR
- **_oTD**: Objeto TD
- **$+NombreVariable**: Para obtener o asignar valores

### Variables obsoletas
- **_Celda**: La celda pulsada
- **_Fila**: La fila pulsada
- **_ValCol**: Matriz asociativa con el valor de las celdas de la fila pulsada
- **_Columna**: Matriz ordinal con el valor de las celdas de la fila pulsada
- **eGF()**: Función para coger el valor de cualquier campo de la fila pulsada

## Ejemplo
```javascript
[JSSelRow] l
    ePPF('campo1', _Columna[0]);
    ePPF('campo2', _Columna[1]);
```

En este ejemplo al seleccionar una fila tomará los valores de las columnas '0' y '1' y los asignará al formulario de la ventana de donde fue llamado.