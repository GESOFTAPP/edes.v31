# SDF

## Introducción

SDF (Sistema de Definición de Campos) es un sistema para definir la selección de datos de otras tablas, permitiendo crear relaciones dinámicas entre campos de formularios y bases de datos.

## Sintaxis

```
[SDF] Field [ | script[.sdf] [ | icon [ | FieldSeek | titleSubWin [ | InteriorDelIcono ] ] ] ] ]
```

### Parámetros de la Sintaxis

| Parámetro | Descripción | Obligatorio |
|-----------|-------------|-------------|
| `Field` | Nombre del campo | ✅ Sí |
| `script.sdf` | Script a ejecutar | ❌ No |
| `icon` | Icono de búsqueda | ❌ No |
| `FieldSeek` | Campo de búsqueda | ❌ No |
| `titleSubWin` | Título de subventana | ❌ No |
| `InteriorDelIcono` | Interior del icono | ❌ No |

## Variables y Referencias

### Variables por URL
```
'{$NombreVariable}'
```

### Variables de Línea de Argumentos
```
'{$argv[0]}'  // Primera variable sin nombre
'{$argv[1]}'  // Segunda variable sin nombre
```

### Variables de Resultado de SELECT
```
'{$_vF['campo']}'  // Acceso a resultados de consultas SELECT
```

### Variables de Sistema
```
$NmVar=Valor      // Asignación de variables
```

## Comandos Disponibles

### Comandos de Control de Flujo

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `Count` | Control basado en número de registros | `Count = 1`, `Count > 0`, `Count <= 50` |
| `Empty` | Ejecuta cuando el campo está vacío | `Empty:` |
| `Put` | Asigna valores a campos | `Put: nm_empresa` |
| `Clear` | Limpia campos especificados | `Clear: cif, nm_empresa` |

### Comandos de Interfaz

| Comando | Descripción |
|---------|-------------|
| `Show` | Muestra elemento |
| `Hide` | Oculta elemento |
| `ShowTR` | Muestra fila de tabla |
| `HideTR` | Oculta fila de tabla |
| `ShowGrpTR` | Muestra grupo de filas |
| `HideGrpTR` | Oculta grupo de filas |
| `ShowTab` | Muestra pestaña |
| `HideTab` | Oculta pestaña |
| `EditField` | Habilita edición de campo |
| `NoEditField` | Deshabilita edición de campo |
| `Focus` | Establece foco en campo |

### Comandos de Interacción

| Comando | Descripción | Sintaxis |
|---------|-------------|----------|
| `Tab` | Abre pestaña con filtros | `Tab:archivo.edf&_FILTER=...&_ASSIGN=...` |
| `List` | Muestra lista de selección | `List:archivo.edf&_FILTER=...&_ASSIGN=...` |
| `OnChange` | Ejecuta al cambiar valor | `OnChange: función()` |
| `Message` | Muestra mensaje | `Message: Texto del mensaje` |
| `Help` | Muestra ayuda | `Help: Texto de ayuda` |

### Comandos de Depuración

| Comando | Descripción | Ubicación |
|---------|-------------|-----------|
| `Tron` | Activar traza | Solo línea 0 |
| `Trace` | Activar seguimiento | Solo línea 0 |
| `Debug` | Modo depuración | Solo línea 0 |
| `SaveSql` | Guardar SQL | Cualquier línea |
| `SaveSqlH` | Guardar SQL con headers | Cualquier línea |

## Estructura de Control

### Operadores de Comparación
- `=` : Igual
- `>` : Mayor que
- `<` : Menor que
- `>=` : Mayor o igual
- `<=` : Menor o igual
- `!=` : Diferente

### Flujo de Ejecución
```
select consulta_sql
Empty:
    // Código cuando el campo está vacío
Count = 0
    // Código cuando no hay registros
Count = 1
    // Código cuando hay exactamente un registro
Count < 50
    // Código cuando hay pocos registros (mostrar lista)
Count >= 50
    // Código cuando hay muchos registros (mostrar búsqueda)
```

## Ejemplos Prácticos

### Ejemplo 1: Validación Simple de Empresa

**Archivo: empresa.edf**
```
[SDF] cif | existe_empresa.sdf
```

**Archivo: existe_empresa.sdf**
```sql
select nm_empresa from empresa where cif='{$cif}'

Count = 1
    Put: nm_empresa

Count = 0
    Clear: cif, nm_empresa
    Message: La empresa no existe
    Focus: cif
```

### Ejemplo 2: Búsqueda de Código Postal con Lista

**Archivo: direccion.edf**
```
[SDF] cd_postal | buscar_postal.sdf | | CPOSTAL
```

**Archivo: buscar_postal.sdf**
```sql
select * from postal where cd_postal='{$CPOSTAL}'

Empty:
    Clear: cd_postal, nm_postal

Count = 0
    Clear: cd_postal, nm_postal
    Help: Código postal DESCONOCIDO
    Focus: cd_postal

Count = 1
    Put: nm_postal

Count < 50
    List: postal.edf&_FILTER=cd_postal='{$CPOSTAL}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal

Count >= 50
    Tab: postal.edf&_FILTER=cd_postal='{$CPOSTAL}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal
```

### Ejemplo 3: Búsqueda Compleja con Múltiples Consultas

**Archivo: ubicacion.edf**
```
[SDF] cd_postal | buscar_completo.sdf | seek | CPOSTAL
```

**Archivo: buscar_completo.sdf**
```sql
select * from postal where cd_postal='{$CPOSTAL}'
select * from prov where cd_prov='{$_vF['cd_prov']}'

Empty:
    Clear: cd_postal, nm_postal, cd_prov, _nm_prov

Count = 0
    Clear: cd_postal, nm_postal, cd_prov, _nm_prov
    Help: Código postal DESCONOCIDO
    Focus: cd_postal

Count = 1
    Put: nm_postal, cd_prov, _nm_prov='{$_vF['nm_prov']}'

Count < 50
    List: postal.edf&_FILTER=cd_postal='{$CPOSTAL}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal,_nm_prov=nm_prov

Count >= 50
    Tab: postal.edf&_FILTER=cd_postal='{$CPOSTAL}'&_ASSIGN=cd_postal=cd_postal,nm_postal=nm_postal,_nm_prov=nm_prov
```

### Ejemplo 4: Con Icono de Búsqueda

**Archivo: persona.edf**
```
[SDF] dni1 | buscar_persona.sdf | buscar.gif | DNI
```

### Ejemplo 5: Concatenación de Campos

**Archivo: unificar.edf**
```
[SDF] dni1 | buscar_persona_completa.sdf | buscar.gif | DNI
```

**Archivo: buscar_persona_completa.sdf**
```sql
Source: cen/unificar.edf
chkPersona()
select dni as dni1, cd_persona as cd_persona1, nombre as _nom1, 
       concat(apel1,' ',apel2) as _ape1 
from persona 
where dni like '{$DNI}%'

Empty:
    Clear: dni1,_nom1,_ape1,cd_persona1

Count = 0
    Clear: dni1,_nom1,_ape1,cd_persona1
    Help: DNI no encontrado

Count = 1
    Put: dni1, _nom1, _ape1, cd_persona1

Count < 10
    Clear: dni1,_nom1,_ape1,cd_persona1
    List: cen/a_personas.edf&_FILTER=dni='{$DNI}'&_ASSIGN=dni1=dni,_nom1=nombre,_ape1=apel1+' '+apel2,cd_persona1=cd_persona

Count >= 10
    Clear: dni1,_nom1,_ape1,cd_persona1
    Tab: cen/a_personas.edf&_FILTER=dni='{$DNI}'&_ASSIGN=dni1=dni,_nom1=nombre,_ape1=apel1+' '+apel2,cd_persona1=cd_persona
```

## Funciones de Usuario

### Definición
```php
PHP
FuncionDeUsuario(){
    // Lógica personalizada
    if( condicion1 ) return -1;
    if( condicion2 ) return -2;
    return TotalRegistros;
}
```

### Uso en SDF
```sql
FuncionDeUsuario();
select * from tabla where condicion='{$VARIABLE}'

Count = -1
    // Código para condición personalizada 1

Count = -2
    // Código para condición personalizada 2

Count = 0
    // No se encontraron registros

Count > 0
    // Se encontraron registros
```

## Configuraciones Adicionales

### Campos Relacionados
```
[RelationFields] cd_auto,cd_prov
```

### Eventos OnChange
```
[OnChange] * | cd_prov | | FuncUsuario()
```

### JavaScript Inicial
```javascript
[JSIni] *
function FuncUsuario(){
    eDelOption('cd_prov','11');
}
```

### Base de Datos
```
DB: [SqlFileDefinition]
```

## Funciones Auxiliares

### Funciones de Cadena
- `mb_substr()` - Subcadena con soporte UTF-8
- Concatenación con `+` - Ejemplo: `nombre+" "+apellidos`

### Comentarios
```
// Comentario de línea
.  // Comentario al final de línea
```

## Notas Importantes

1. **Variables**: Todas las variables de URL se referencian con `{$nombreVariable}`
2. **Resultados SELECT**: Se almacenan automáticamente en `$_vF` como array asociativo
3. **Funciones de Usuario**: Retornan números negativos para casos especiales, positivos para cantidad de registros
4. **Comandos de Depuración**: Solo `Tron`, `Trace` y `Debug` pueden usarse en la línea 0
5. **Concatenación**: Se puede concatenar campos en las consultas SQL y en las asignaciones

## Flujo Típico de Ejecución

1. **Campo Vacío**: Se ejecuta bloque `Empty:`
2. **Sin Registros**: Se ejecutan las instrucciones de `Count = 0`
3. **Un Registro**: Se ejecutan las instrucciones de `Count = 1` (generalmente `Put:`)
4. **Pocos Registros**: Se muestra una lista para seleccionar (`List:`)
5. **Muchos Registros**: Se abre un formulario de búsqueda avanzada (`Tab:`)

Esta estructura permite crear interfaces intuitivas que se adaptan automáticamente según la cantidad de resultados encontrados.