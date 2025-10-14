# View

## Descripción

Permite mostrar un listado con múltiples visualizaciones simultáneas. Cada visualización se representa con un icono en la parte superior del listado, permitiendo al usuario alternar entre diferentes vistas de los mismos datos. Si se especifica `type=button`, en lugar de iconos se muestran botones de texto.

### Características especiales:
- Múltiples vistas de los mismos datos
- Navegación mediante iconos o botones
- Control granular de qué campos mostrar en cada vista
- Configuración independiente por vista

## Sintaxis

```
[View] Title1 | Title2 | ... | type=button
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `Title1, Title2, ...` | Requerido | Títulos de cada vista disponible, separados por `\|` |
| `type=button` | Opcional | Si se especifica, muestra botones en lugar de iconos |

### Configuración en Fields
En la columna **Color/Mode** de `[Fields]` se debe especificar:
- **Modo habitual** + **número de vista** (empezando por 0)
- El número indica en qué vista(s) se mostrará el campo

## Ejemplos

### Ejemplo básico: Múltiples vistas con iconos
```
[View] Datos genéricos | Datos de pago | Otros datos
[Fields] l || mix
| Label               | Field              | TE | TC | Px  | Mod | Color | ColsOp  | Align |
|                     | cd_referencia      | +  | T  | 9   |     | *     |         |       |
| Tienda              | nm_referencia      | X  | T  | 45  | 400 | - 12  | #00FF00 |       |
| Fichero config      | fich_config        | x  | T  | 100 |     | *     |         |       |
| Visualización       | plantilla          | +  | SV | 100 | 300 | - 1   |         |       |
| Tipo                | seleccionable      | N  | SV | 1   | 300 | -012  |         |       |
| Ver en tienda       | flg_ver_en_tienda  | X  | C  | 1   | 50  | -0 2  |         |       |
| Requiere validación | flg_req_validacion | X  | C  | 1   |     | -0 2  |         |       |
```

**Explicación del ejemplo**:
- **Vista 0** (Datos genéricos): Muestra campos con código `*`, `-12`, `-0 2`
- **Vista 1** (Datos de pago): Muestra campos con código `- 1`, `-012`, `-0 2`  
- **Vista 2** (Otros datos): Muestra campos con código `- 12`, `-012`, `-0 2`

### Ejemplo con botones
```
[View] Información básica | Detalles técnicos | Configuración | type=button
[Fields] l
| Label          | Field         | TE | TC | Px | Mod | Color | ColsOp | Align |
| ID             | id_producto   | #  | T  | 8  |     | *     |        |       |
| Nombre         | nombre        | X  | T  | 30 |     | -0    |        |       |
| Descripción    | descripcion   | X  | T  | 50 |     | -0    |        |       |
| Especificaciones| specs        | X  | T  | 40 |     | - 1   |        |       |
| Manual técnico | manual        | F  | T  | 20 |     | - 1   |        |       |
| Configuración  | config_xml    | X  | T  | 30 |     | -  2  |        |       |
| Parámetros     | parametros    | X  | T  | 25 |     | -  2  |        |       |
```

### Ejemplo con campos compartidos
```
[View] Resumen | Completo
[Fields] l
| Label       | Field      | TE | TC | Px | Mod | Color | ColsOp | Align |
| Código      | codigo     | #  | T  | 8  |     | *     |        |       |
| Cliente     | cliente    | X  | T  | 25 |     | *     |        |       |
| Importe     | importe    | €  | T  | 10 |     | *     |        |       |
| Fecha       | fecha      | F  | T  | 10 |     | - 1   |        |       |
| Observaciones| observ     | X  | T  | 40 |     | - 1   |        |       |
| Estado      | estado     | X  | T  | 15 |     | - 1   |        |       |
| Vendedor    | vendedor   | X  | T  | 20 |     | - 1   |        |       |
```

**Resultado**:
- **Vista 0** (Resumen): Código, Cliente, Importe (campos con `*`)
- **Vista 1** (Completo): Todos los campos (`*` + `- 1`)

## Codificación de Vistas en Color/Mode

| Código | Descripción |
|--------|-------------|
| `*` | Se muestra en todas las vistas |
| `-0` | Solo en vista 0 |
| `- 1` | Solo en vista 1 |
| `-  2` | Solo en vista 2 |
| `-012` | En vistas 0, 1 y 2 |
| `-0 2` | En vistas 0 y 2 |

### Sintaxis del código:
- **Guión inicial**: Indica configuración de vista
- **Números**: Posiciones de vista (0, 1, 2, ...)
- **Espacios**: Se ignoran, permiten mejor legibilidad

## Comportamiento

- **Navegación**: Los usuarios pueden cambiar entre vistas haciendo clic en iconos/botones
- **Persistencia**: La vista seleccionada se mantiene durante la sesión
- **Datos**: Los mismos datos se muestran con diferentes configuraciones de campos
- **Responsive**: Se adapta al contenido de cada vista

## Casos de uso típicos

- **Niveles de detalle**: Vista resumen vs vista completa
- **Categorización**: Datos básicos, técnicos, administrativos
- **Roles de usuario**: Diferentes vistas según permisos
- **Contexto**: Vistas optimizadas para diferentes tareas

## Ventajas

- **Flexibilidad**: Múltiples perspectivas de los mismos datos
- **Usabilidad**: Reduce la sobrecarga visual mostrando solo información relevante
- **Organización**: Agrupa campos relacionados lógicamente
- **Personalización**: Diferentes vistas para diferentes necesidades
- **Eficiencia**: Evita múltiples pantallas para diferentes niveles de detalle

## Consideraciones

- **Numeración**: Las vistas se numeran desde 0
- **Consistencia**: Mantener campos clave (`*`) en todas las vistas
- **Rendimiento**: Considerar el impacto de múltiples configuraciones
- **UX**: Títulos de vista claros y descriptivos