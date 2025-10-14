# SelectFill

## Sintaxis

```
[SelectFill] Campo1,Campo2,... / mode / *
```

## Descripción

Por defecto, los campos select no editables no se rellenan automáticamente. La etiqueta `SelectFill` fuerza el relleno de estos campos select, permitiendo que muestren sus valores incluso en modo no editable.

Esta funcionalidad es especialmente útil cuando se necesita visualizar información de campos select en formularios de solo lectura o reportes.

## Parámetros

### Opciones de Configuración

| Parámetro | Tipo | Descripción | Ejemplo |
|-----------|------|-------------|---------|
| `Campo1,Campo2,...` | Lista de campos | Campos específicos a rellenar | `categoria,estado,prioridad` |
| `mode` | Modo específico | Rellena campos según un modo particular | `readonly`, `display` |
| `*` | Todos los campos | Rellena todos los campos select | `*` |

### Separadores
- **Coma (`,`)**: Separa nombres de campos
- **Barra (`/`)**: Separa diferentes tipos de parámetros

## Tipos de Configuración

### 1. Campos Específicos
```
[SelectFill] campo1,campo2,campo3
```
Rellena únicamente los campos especificados.

### 2. Por Modo
```
[SelectFill] mode
```
Rellena campos según un modo específico de visualización.

### 3. Todos los Campos
```
[SelectFill] *
```
Rellena todos los campos select del formulario.

## Ejemplos Prácticos

### Ejemplo 1: Campos Específicos
```
[SelectFill] estado,categoria,prioridad
```
**Resultado**: Solo los campos `estado`, `categoria` y `prioridad` se rellenarán en modo no editable.

### Ejemplo 2: Todos los Campos
```
[SelectFill] *
```
**Resultado**: Todos los campos select del formulario se rellenarán automáticamente.

### Ejemplo 3: Configuración por Modo
```
[SelectFill] readonly
```
**Resultado**: Los campos en modo `readonly` se rellenarán con sus valores.

### Ejemplo 4: Configuración Mixta
```
[SelectFill] usuario,departamento / readonly / *
```
**Resultado**: 
- Campos específicos: `usuario`, `departamento`
- Modo: `readonly`
- Todos los campos: `*`

## Casos de Uso

### 1. Formularios de Solo Lectura
```
[SelectFill] *
```
Para mostrar todos los valores en formularios de consulta.

### 2. Reportes con Datos Específicos
```
[SelectFill] categoria,estado,responsable
```
Para mostrar solo información relevante en reportes.

### 3. Vistas de Resumen
```
[SelectFill] prioridad,tipo,estado
```
Para mostrar campos clave en vistas de resumen.

### 4. Formularios Parcialmente Editables
```
[SelectFill] departamento,cargo
```
Para mostrar campos de referencia mientras otros son editables.

## Comportamiento por Defecto vs SelectFill

### Sin SelectFill
```
Campo Select No Editable: [          ]  ← Vacío
```

### Con SelectFill
```
Campo Select No Editable: [Valor Actual]  ← Relleno
```

## Comparación de Configuraciones

| Configuración | Campos Afectados | Uso Recomendado |
|---------------|------------------|-----------------|
| `campo1,campo2` | Solo especificados | Control granular |
| `mode` | Según modo | Comportamiento específico |
| `*` | Todos los select | Formularios de solo lectura |

## Notas Importantes

- ✅ **Solo afecta a campos SELECT**: No aplica a otros tipos de campos
- ✅ **Modo no editable**: Específicamente para campos en modo no editable
- ✅ **Visualización**: Mejora la experiencia de usuario en formularios de consulta
- ⚠️ **Rendimiento**: Usar `*` puede afectar el rendimiento en formularios grandes
- ⚠️ **Selectividad**: Es recomendable especificar campos cuando sea posible

## Beneficios

1. **Visibilidad**: Los usuarios pueden ver los valores actuales
2. **Consistencia**: Mantiene la información visible en todos los modos
3. **Usabilidad**: Mejora la experiencia en formularios de solo lectura
4. **Flexibilidad**: Permite configuración granular o global

## Ejemplo Completo

```
[Fields]
     Nombre     | nombre     | 0 | T  | 50 || M |||
     Categoria  | categoria  | 0 | S  | 20 || M |||
     Estado     | estado     | 0 | S  | 15 || M |||
     Prioridad  | prioridad  | 0 | S  | 10 || M |||

[SelectFill] categoria,estado,prioridad
```

**Resultado**: En modo no editable, los campos `categoria`, `estado` y `prioridad` mostrarán sus valores actuales en lugar de aparecer vacíos.