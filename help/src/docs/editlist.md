# EditList

## Sintaxis

```
[EditList] ListaDeCampos [ | NomFunCheck [ | InteriorStyle[/InteriorPar] [ | ModoGrabación [ | NomFuncIni [ | ScriptPHP | DDBB ] ] ] ] ] ]
```

## Descripción

Permite editar las celdas de un listado de forma interactiva. Para entrar en modo edición se pulsa en la celda con el botón derecho, y se navega entre celdas editables usando Enter, Tab o las teclas de cursor.

### Características principales

- Solo está activa en modo "l" y submodo "ml"
- No se pueden editar campos definidos en `[DBIndex]` (el índice debe ser simple)
- Compatible con `{iSubList}`
- Cuando se edita un select, el valor real se guarda en el atributo "v" del TD
- Para habilitar edición con click izquierdo, usar la etiqueta `[EditListClick]`

### Limitaciones

- **Tipos de datos no soportados**: A, H, F, f, P, ICON, `[SelectMultiple]` y campos en `[DBIndex]`
- **Etiquetas desactivadas en iSubList**: `[JSOnClickRow]` y `[JSSelRow]`

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **ListaDeCampos** | Lista de campos editables separados por coma |
| **NomFunCheck** | Función de validación (opcional) |
| **InteriorStyle** | Estilo CSS para columnas editables (opcional) |
| **ModoGrabación** | Forma de grabar los datos (opcional) |
| **NomFuncIni** | Función ejecutada antes de editar (opcional) |
| **ScriptPHP** | Script PHP ejecutado antes de modificar (opcional) |
| **DDBB** | Driver de base de datos alternativo (opcional) |

### Tipos de campos soportados
- Campos de texto
- Campos numéricos  
- Campos select
- **No soportados**: radio, checkbox, file

### Función de validación (NomFunCheck)

```javascript
function nombreFuncion(NomField, oRow, OldValue, NewValue, oTD, NCol, pkOld, pkNew) {
    // Validación personalizada
    return ""; // Dato correcto
    // return "Mensaje de error"; // Dato incorrecto
    // return "=NuevoValor"; // Asignar nuevo valor
}
```

**Parámetros de la función:**
- `NomField`: Nombre del campo
- `oRow`: Objeto TR de la fila
- `OldValue`: Valor anterior
- `NewValue`: Nuevo valor
- `oTD`: Objeto TD de la celda
- `NCol`: Número de columna
- `pkOld`, `pkNew`: Solo para campos select

### InteriorStyle

- **Por defecto**: Usa la clase CSS "EditList"
- **Personalizado**: CSS directo para columnas editables
- **Con separador "/"**: Parte izquierda para filas impares, derecha para pares

### Modos de grabación

| Modo | Descripción |
|------|-------------|
| **NoSave** | No graba nada (activa edición con botón izquierdo) |
| **Cell** | Graba al salir de la celda si hay cambios (por defecto) |
| **Row** | Graba al cambiar de fila si hay cambios |
| **Table** | Graba todos los registros al pulsar botón |

### Función de inicialización (NomFuncIni)

```javascript
function nombreFuncion(oTR, textocelda, cellIndex) {
    // Lógica de validación
    return true;  // Permitir edición
    // return false; // No permitir edición
}
```

### Valores adicionales (ADDVALUE)

Se pueden enviar valores adicionales con la estructura:
```html
<TR ADDVALUE='campo1="valor1", campo2="valor2"'>
```

## Ejemplos

### Ejemplo 1: Edición básica con estilo
```
[EditList] Field1, Field2 || color:#000000; background:#efebe1;
```

### Ejemplo 2: Con función de validación
```
[EditList] nm_prov | usuFunc()

[JSIni] l
function usuFunc(NomField, oRow, OldValue, NewValue, oTD, NCol, pkOld, pkNew){
    // Validación personalizada
    return "";        // Dato correcto
    // return "Error"; // Dato incorrecto
    // return "=NuevoValor"; // Asignar nuevo valor
}
```

### Ejemplo 3: Cálculo automático con ADDVALUE
```
[EditList] precio1, precio2, precio3, precio4, precio5, precio6 | uTotal()

[JSIni] l
function uTotal(NomField, oRow, OldValue, NewValue, oTD, NCol){
    var valor = eClearThousands(oRow.cells[6].innerText) * eClearThousands(NewValue);
    oRow.cells[eGCol(NomField)+1].innerText = eShowThousands(valor);
    oRow.setAttribute("ADDVALUE", 'total'+NomField.substr(NomField.length-1,1) +'="' +valor +'"');
    return "";
}
```

### Ejemplo 4: Activar edición con botón izquierdo
```
[JSSelRow] l
if(_oTD.cellIndex==7) setTimeout('_oTD.fireEvent("oncontextmenu")', 1);
return false;
```

### Ejemplo 5: Modo TABLE con validación
```
[EditList] * | uCheckFila || TABLE

[JSIni] ml
function uCheckFila(datos, oTR, xTH, def){
    // Validación a nivel de fila
    // Variables disponibles: $ + nombre_campo
    return "";
}
```

## Funciones de utilidad

### Resetear celda
```javascript
// En caso de error, resetear la celda
top.eAlert("ERROR", "No se ha realizado la modificación.", "A", "E", 
          window.frameElement.WOPENER.eEditListResetCell);
```

### Funciones de formato
- `eClearThousands()`: Quita separadores de miles
- `eShowThousands()`: Añade separadores de miles
- `eGCol(NomField)`: Obtiene número de columna por nombre de campo

## Notas importantes

- La información se graba automáticamente al salir de cada celda si hay cambios
- Se pueden desactivar celdas específicas con `disabled = true;`
- Los campos índice de `[DBIndex]` se descartan automáticamente
- En modo NoSave se puede editar con botón izquierdo sin grabar