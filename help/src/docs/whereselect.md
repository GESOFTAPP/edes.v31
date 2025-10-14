# WhereSelect

## Descripción General

La etiqueta `WhereSelect` permite establecer condiciones de filtrado (WHERE) y ordenación (ORDER BY) para campos de tipo select. Esta funcionalidad es esencial para controlar qué opciones se muestran en listas desplegables y cómo se ordenan.

## Sintaxis

```
[WhereSelect] Mode | Field | SQLCondition
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de aplicación del filtro |
| **Field** | Nombre del campo existente en la etiqueta [Fields] |
| **SQLCondition** | Condición SQL a aplicar |

## Modos de Aplicación

### Modos Disponibles

- `*` - Aplicar a todos los modos
- `c` - Modo consulta
- `a` - Modo alta
- `m` - Modo modificación
- `mR` - Modo modificación con restricciones
- `r` - Modo solo lectura

## Condiciones SQL

### Sintaxis de Condiciones

#### 1. Condición Simple
```sql
campo = 'valor'
```

#### 2. Condición con Variable PHP
```sql
campo = '{$variable}'
```
⚠️ **Nota**: La variable debe ser pública para tener acceso a ella.

#### 3. Condición con Ordenación
```sql
campo = 'valor' desc
```

#### 4. Solo Ordenación
```sql
desc
```
```sql
order by campo desc
```

### Tipos de Operadores

| Operador | Descripción | Ejemplo |
|----------|-------------|---------|
| `=` | Igual | `cd_tipo = 'V'` |
| `!=` | Diferente | `nm_prop != "(*)"` |
| `<` | Menor que | `nm_prov < 'D'` |
| `>` | Mayor que | `fecha > '2024-01-01'` |
| `LIKE` | Coincidencia parcial | `nm_prov LIKE '%I%'` |
| `IN` | Dentro de lista | `cd_estado IN ('A','B','C')` |
| `BETWEEN` | Entre valores | `fecha BETWEEN '2024-01-01' AND '2024-12-31'` |

## Características Especiales

### Variables PHP

Las variables PHP se incluyen usando la sintaxis `{$NombreVariable}`:

```sql
cd_usuario = '{$_SESSION["usuario"]}'
cd_empresa = '{$empresa_actual}'
```

### Ordenación

#### Ordenación Ascendente (por defecto)
```
[WhereSelect] * | cd_provincia | order by nm_provincia
```

#### Ordenación Descendente
```
[WhereSelect] * | cd_provincia | desc
[WhereSelect] * | cd_provincia | order by nm_provincia desc
```

### Subcadenas y Funciones

Acceso a subcadenas usando sintaxis de array:
```sql
nm_propiedad[1,3] != "(*)"
```
Esto accede a los caracteres del 1 al 3 de `nm_propiedad`.

## Ámbito de Aplicación

### ✅ Activo en:
- **EditList**: Zonas de edición de listas
- **Formularios de alta/modificación**
- **Campos select individuales**

### ❌ No activo en:
- **Listados generales**
- **Vistas de solo consulta** (salvo configuración específica)

## Ejemplos Prácticos

### Ejemplo 1: Filtro Simple
```
[WhereSelect] * | cd_tipovia | cd_tipo='V'
```
**Resultado**: Solo muestra tipos de vía donde `cd_tipo` es 'V' en todos los modos.

### Ejemplo 2: Filtro con Exclusión
```
[WhereSelect] mR,a | cd_propiedad | nm_propiedad[1,3] != "(*)"
```
**Resultado**: En modos modificación restringida y alta, excluye propiedades cuyo nombre empiece con "(*)" en los primeros 3 caracteres.

### Ejemplo 3: Solo Ordenación Descendente
```
[WhereSelect] * | cd_prov | desc
```
**Resultado**: Ordena las provincias en orden descendente.

### Ejemplo 4: Condición con Ordenación
```
[WhereSelect] * | cd_prov | nm_prov < 'D' desc
```
**Resultado**: Muestra solo provincias cuyo nombre sea menor que 'D' y las ordena descendentemente.

### Ejemplo 5: Búsqueda con LIKE
```
[WhereSelect] c | cd_prov | nm_prov like '%I%' order by nm_prov desc
```
**Resultado**: En modo consulta, muestra solo provincias que contengan 'I' en su nombre, ordenadas descendentemente.

### Ejemplo 6: Solo Ordenación Personalizada
```
[WhereSelect] c | cd_prov | order by nm_prov desc
```
**Resultado**: En modo consulta, ordena provincias por nombre descendente sin filtros.

## Casos de Uso Avanzados

### 1. Filtros por Usuario
```
[WhereSelect] * | cd_cliente | cd_vendedor = '{$_SESSION["id_vendedor"]}'
```
Muestra solo clientes del vendedor actual.

### 2. Filtros por Fecha
```
[WhereSelect] * | cd_pedido | fecha >= '{$fecha_inicio}' AND estado = 'A'
```
Filtra pedidos por fecha y estado.

### 3. Filtros Jerárquicos
```
[WhereSelect] * | cd_ciudad | cd_provincia = '{$provincia_seleccionada}'
```
Ciudades dependientes de la provincia seleccionada.

### 4. Filtros con Variables de Sesión
```
[WhereSelect] * | cd_sucursal | cd_empresa = '{$_SESSION["empresa"]}' AND activa = 1
```
Solo sucursales de la empresa del usuario logueado que estén activas.

## Optimización y Rendimiento

### Mejores Prácticas

1. **Índices en BD**: Asegúrese de que los campos filtrados tienen índices
2. **Variables cached**: Use variables que no cambien frecuentemente
3. **Filtros selectivos**: Aplique filtros que reduzcan significativamente los resultados
4. **Ordenación eficiente**: Use campos indexados para ordenar

### Ejemplo de Optimización
```
-- Bueno: Campo indexado con filtro selectivo
[WhereSelect] * | cd_producto | categoria_id = '{$categoria}' AND activo = 1

-- Mejor: Con ordenación por campo indexado
[WhereSelect] * | cd_producto | categoria_id = '{$categoria}' AND activo = 1 ORDER BY codigo
```

## Consideraciones de Seguridad

### Inyección SQL

⚠️ **Cuidado**: Al usar variables PHP, valide siempre los datos:

```php
// Malo - Vulnerable a inyección SQL
$filtro = $_GET['filtro']; // Sin validar

// Bueno - Con validación
$filtro = filter_var($_GET['filtro'], FILTER_SANITIZE_STRING);
$filtro = mysqli_real_escape_string($conexion, $filtro);
```

### Variables Seguras
```
[WhereSelect] * | cd_usuario | id_empresa = '{$_SESSION["empresa_id"]}' AND activo = 1
```

## Depuración y Troubleshooting

### Problemas Comunes

| Problema | Causa | Solución |
|----------|-------|----------|
| No aplica filtro | Variable no pública | Verificar scope de variable |
| Error SQL | Sintaxis incorrecta | Revisar sintaxis SQL |
| Campo no encontrado | Nombre incorrecto | Verificar nombre en [Fields] |
| Sin resultados | Filtro muy restrictivo | Revisar lógica del filtro |

### Debug de Variables
```php
// Para debug: mostrar valor de variable
echo "Variable: " . $variable_filtro;
```

## Integración con Otros Sistemas

### Con Formularios Dinámicos
```
[WhereSelect] * | cd_subcategoria | categoria_id = '{$form_categoria}'
```

### Con Sistemas de Permisos
```
[WhereSelect] * | cd_documento | acceso_nivel <= '{$_SESSION["nivel_usuario"]}'
```

### Con Múltiples Idiomas
```
[WhereSelect] * | cd_texto | idioma = '{$_SESSION["idioma"]}' ORDER BY orden
```

---

*Esta documentación describe el sistema WhereSelect para la aplicación de filtros y condiciones SQL en campos de selección.*