# FormStatic

## Sintaxis

```
[FormStatic]
```
**Sin parámetros**

```
[FormStatic] NomSubLista | CampoDestino=CampoOrigen, ... | Operaciones en Fila | Operaciones en Columna | NomFuncUsu | CódigoHTML
```
**Con parámetros**

## Descripción

La etiqueta **FormStatic** tiene dos comportamientos diferentes dependiendo de si se especifican parámetros o no:

### Sin Parámetros
- **Funcionalidad**: Solo en modo alta, permite dar altas sin enviar la ficha al servidor
- **Ventaja**: Solo viajan los datos necesarios, obteniendo mayor velocidad
- **Limitación**: Actualmente no soportado en el grupo de fichas
- **Función personalizada**: Si existe `FUNCTION_FormStatic()`, será ejecutada para acciones no automáticas

#### Comportamiento en Modo Alta Sin Parámetros
1. **Limpieza automática**: Cada vez que se da un alta, todos los campos se limpian
2. **Valores por defecto**: Los campos con valores por defecto se refrescan automáticamente
3. **Campos persistentes**: Para evitar que un campo se limpie, usar:
   ```
   [AddCode] a | ...NomCampo... | i | NoClear
   ```

### Con Parámetros
- **Funcionalidad**: Identifica que este EDF realiza el mantenimiento de una SubLista sin ir al servidor
- **Procesamiento**: El formulario padre enviará todos los datos al servidor
- **Requisito**: El `[DBIndex]` debe ser el campo de relación con la tabla padre donde está la `[SubList]`
- **Restricciones**: No se permiten campos del tipo "file"

#### Etiquetas No Disponibles con Parámetros
- `[JSEnd]`
- `[HTMEnd]`
- `[PHPEnd]`
- `[MsgAnswer]`

## Parámetros

### NomSubLista
- **Formato**: El nombre debe ir encerrado entre corchetes `[nombre]`
- **Función**: Identifica la SubLista asociada

### Igualdad (CampoDestino=CampoOrigen)
Define la correspondencia entre campos de la SubLista y campos de la ficha.

| Formato | Descripción |
|---------|-------------|
| `CampoDestino=CampoOrigen` | Mapeo entre campo de SubLista y campo de ficha |
| `NombreCampo` | Si ambos campos tienen el mismo nombre, solo se especifica uno |
| `*NombreCampo` | Para obtener el `innerText` de un campo select, usar asterisco |

### Operaciones en Fila
**Parámetro no implementado actualmente**

### Operaciones en Columna
Define operaciones matemáticas sobre las columnas de la SubLista.

| Operación | Símbolo | Descripción |
|-----------|---------|-------------|
| **Sumar** | `+` | Suma todos los valores de la columna |
| **Contar** | `c` | Cuenta todas las filas |
| **Contar rellenas** | `#` | Cuenta solo las filas que tienen datos |

**Sintaxis**: `NomCampoDestino=[+/c/#], ...`

### NomFuncUsu
- **Función**: Nombre de la función de usuario sin parámetros
- **Parámetro**: Recibe el objeto TR que se ha modificado o insertado
- **Caso especial**: Si se ha borrado el TR, se pasa NULL

### CódigoHTML
- **Uso**: Código HTML para insertar en la columna marcada como "IMG"
- **Propósito**: Añadir iconos con opciones de Alta, Baja y Modificación
- **Ubicación**: Se inserta en la columna del listado

## Ejemplos

### Ejemplo Básico
```
[FormStatic]
```
Modo alta rápido sin parámetros.

### Ejemplo Completo con SubLista
```
[FormStatic] [_clau] | ''=IMG, cd_tclausula, nm_contra_clau | | ,c | CalculaValores |
```

**Desglose del ejemplo:**
- **SubLista**: `[_clau]`
- **Mapeo de campos**: 
  - `''=IMG`: Campo vacío mapeado a columna de imágenes
  - `cd_tclausula`: Campo de código
  - `nm_contra_clau`: Campo de nombre
- **Operaciones**: `,c` (contar filas)
- **Función usuario**: `CalculaValores`

### Ejemplo con Iconos de Gestión
```
[FormStatic] [_clau] | ''=IMG, cd_tclausula, nm_contra_clau | | ,c | CalculaValores | [u][v][d]
```

**Código HTML añadido**: `[u][v][d]`
- `[u]`: Icono de modificar (update)
- `[v]`: Icono de ver (view)  
- `[d]`: Icono de borrar (delete)

## Casos de Uso

### Entrada Rápida de Datos
```
[FormStatic]
```
Para formularios de alta masiva donde la velocidad es crítica.

### Mantenimiento de SubListas
```
[FormStatic] [detalle_pedido] | cd_producto, cantidad, precio | | cantidad=+, precio=+ | RecalcularTotal |
```
SubLista de detalles de pedido con suma automática de cantidades y precios.

### Lista con Contadores
```
[FormStatic] [participantes] | nombre, apellido, activo | | activo=c | ActualizarContadores |
```
Lista de participantes con contador de elementos activos.

## Funciones de Usuario

### FUNCTION_FormStatic()
```javascript
function FUNCTION_FormStatic() {
    // Código personalizado para acciones no automáticas
    // Se ejecuta después de cada alta en modo sin parámetros
}
```

### Función Personalizada con Parámetros
```javascript
function NombreFuncion(tr) {
    if (tr === null) {
        // El registro fue eliminado
        console.log("Registro eliminado");
    } else {
        // Registro modificado o insertado
        console.log("Registro procesado:", tr);
    }
}
```

## Ventajas

### Sin Parámetros
- **Velocidad**: Procesamiento local sin comunicación con servidor
- **Responsividad**: Interfaz más ágil para entrada de datos
- **Eficiencia**: Menor carga de red

### Con Parámetros
- **Gestión integrada**: Mantenimiento completo de SubListas
- **Operaciones automáticas**: Cálculos automáticos en columnas
- **Flexibilidad**: Funciones personalizadas para lógica específica

## Limitaciones

- **Campos file**: No permitidos en modo con parámetros
- **Grupo de fichas**: Sin parámetros no funciona en grupos
- **Etiquetas restringidas**: Varias etiquetas no disponibles con parámetros
- **Operaciones en fila**: Funcionalidad no implementada

## Notas Importantes

- **Configuración del DBIndex**: Debe coincidir con el campo de relación en SubListas
- **Limpieza de campos**: Usar `NoClear` para campos que deben persistir
- **Funciones de usuario**: Importante manejar el caso NULL en eliminaciones
- **Rendimiento**: Ideal para operaciones que requieren velocidad de respuesta