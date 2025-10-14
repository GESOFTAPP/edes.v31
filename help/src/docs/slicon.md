# slICON

## Sintaxis

```
{slICON} Iconos
```

## Descripción

La función `slICON` permite definir una lista de iconos que aparecerán en los registros ya grabados de las sublistas. Estos iconos funcionan como botones de acción que permiten realizar operaciones específicas sobre cada registro.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Iconos` | string | Configuración de iconos con modos y acciones |

### Formato de Parámetros

```
Modo | [Accion,Tooltip][Accion,Tooltip]...
```

- **Modo**: Define en qué modo se muestran los iconos (a, mR, cR, bR, etc.)
- **Acción**: Letra que identifica la operación (u=update, d=delete, v=view, etc.)
- **Tooltip**: Texto descriptivo que aparece al pasar el mouse sobre el icono

## Métodos de Definición de Iconos

### 1. Mediante Fuente del Sistema
Utiliza la función `eIcon()` del sistema para generar iconos desde fuentes de iconos.

### 2. Mediante Imágenes
Utiliza archivos de imagen para representar los iconos de acción.

## Ejemplos de Uso

### Ejemplo 1: Iconos para Modo Modificación y Consulta

```ini
{slIcon} a,mR | [u,Modificar Artículo][d,Borrar Artículo]
```

**Explicación:**
- **Modo**: `a,mR` (activo en modo modificación y consulta read-only)
- **Acciones**: 
  - `u` = Modificar con tooltip "Modificar Artículo"
  - `d` = Borrar con tooltip "Borrar Artículo"

### Ejemplo 2: Iconos para Modo Consulta

```ini
{slIcon} cR,bR | [v,Ver Artículo]
```

**Explicación:**
- **Modo**: `cR,bR` (activo en modos de consulta restringida)
- **Acción**: `v` = Ver con tooltip "Ver Artículo"

### Ejemplo 3: Configuración Básica

```ini
{slIcon} a,mR |
```

**Explicación:**
- Configuración vacía que puede ser completada dinámicamente

## Códigos de Acción Comunes

| Código | Operación | Descripción |
|--------|-----------|-------------|
| `u` | Update | Modificar registro |
| `d` | Delete | Borrar registro |
| `v` | View | Ver detalles del registro |
| `i` | Insert | Insertar nuevo registro |
| `c` | Copy | Copiar registro |
| `p` | Print | Imprimir registro |
| `e` | Edit | Editar en formulario |

## Modos de Visualización

| Modo | Descripción |
|------|-------------|
| `a` | Modo activo (modificación) |
| `mR` | Modo read-only |
| `cR` | Modo consulta restringida |
| `bR` | Modo browse restringido |

## Configuración Avanzada

### Múltiples Configuraciones por Modo

```ini
{slIcon} a | [u,Modificar][d,Eliminar][c,Copiar]
{slIcon} mR | [v,Ver Detalles]
{slIcon} cR,bR | [p,Imprimir]
```

### Con Condiciones

```ini
{slIcon} a,mR | [u,Modificar Artículo][d,Borrar Artículo]
{slIcon} cR | [v,Ver Artículo en Solo Lectura]
```

## Implementación con eIcon()

```javascript
// Ejemplo de uso con la función eIcon()
function generarIconos() {
    return eIcon('edit') + eIcon('delete') + eIcon('view');
}
```

## Implementación con Imágenes

```html
<!-- Ejemplo con imágenes -->
<img src="icons/edit.png" title="Modificar Artículo" onclick="editRecord()">
<img src="icons/delete.png" title="Borrar Artículo" onclick="deleteRecord()">
<img src="icons/view.png" title="Ver Artículo" onclick="viewRecord()">
```

## Casos de Uso Comunes

### Lista de Productos
```ini
{slIcon} a,mR | [u,Modificar Producto][d,Eliminar Producto][c,Duplicar Producto]
```

### Lista de Usuarios (Solo Lectura)
```ini
{slIcon} cR,bR | [v,Ver Perfil de Usuario]
```

### Lista de Documentos
```ini
{slIcon} a | [u,Editar][d,Eliminar][p,Imprimir]
{slIcon} mR | [v,Ver][p,Imprimir]
```

### Lista de Facturas
```ini
{slIcon} a,mR | [u,Modificar Factura][d,Anular Factura][p,Imprimir Factura][c,Duplicar Factura]
```

## Ventajas de slICON

- **Interfaz intuitiva**: Los iconos proporcionan acceso rápido a acciones
- **Configuración flexible**: Diferentes iconos según el modo de operación
- **Tooltips informativos**: Mejoran la usabilidad con descripciones claras
- **Múltiples formatos**: Soporte para fuentes de iconos e imágenes
- **Control de acceso**: Iconos diferentes según permisos del usuario

## Consideraciones de Diseño

- **Consistencia**: Use iconos similares para acciones similares en toda la aplicación
- **Accesibilidad**: Siempre proporcione tooltips descriptivos
- **Tamaño**: Mantenga los iconos en un tamaño apropiado para la interfaz
- **Contraste**: Asegúrese de que los iconos sean visibles en todos los temas
- **Responsividad**: Considere cómo se ven los iconos en dispositivos móviles

## Notas Importantes

- Los iconos solo aparecen en registros ya grabados
- La configuración puede variar según el modo de la sublista
- Es recomendable usar tooltips descriptivos para mejorar la usabilidad
- Los códigos de acción deben coincidir con las funciones JavaScript implementadas