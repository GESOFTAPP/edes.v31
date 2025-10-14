# PDFTh

## Sintaxis

```
[PDFTh] Title1 [, Title2] ..... [, TitleN] [ | campo=etiqueta, ...] [ | campo=NomFuncion() ; [ campo=NomFuncion()] ]
```

## Descripción

Define los títulos de las cabeceras del listado en PDF. El segundo parámetro permite definir etiquetas para campos que no están en la definición del listado ni en la DB "gs_campo". El tercer parámetro permite mostrar un valor distinto en las condiciones mediante funciones personalizadas.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **Title1, Title2, ..., TitleN** | String | Títulos de las columnas del listado |
| **campo=etiqueta** | String | Definición de etiquetas para campos no definidos |
| **campo=NomFuncion()** | String | Funciones para mostrar valores personalizados en condiciones |

### Comportamiento de títulos

| Valor | Comportamiento |
|-------|----------------|
| Vacío (`""`) | No muestra título para esa columna |
| `"="` | Utiliza la etiqueta del formulario |
| No definido | Utiliza la etiqueta del formulario por defecto |
| Texto personalizado | Muestra el texto especificado |

### Parámetros adicionales

#### Segundo parámetro: campo=etiqueta
Se utiliza cuando el listado tiene condiciones sobre campos que:
- No están definidos en la definición del listado
- No existen en la base de datos "gs_campo"

#### Tercer parámetro: campo=NomFuncion()
Permite definir funciones personalizadas para mostrar valores diferentes en las condiciones del listado.

## Ejemplos

### Ejemplo básico con títulos personalizados
```
[PDFTh] EMPRESA,R.SOCIAL,FECHA,IMPORTE
```

### Ejemplo mixto con títulos del formulario
```
[PDFTh] =,R.SOCIAL
```
En este ejemplo:
- Primera columna: usa la etiqueta del formulario
- Segunda columna: usa "R.SOCIAL" como título personalizado
- Columnas restantes: usan las etiquetas del formulario por defecto

### Ejemplo con definición de etiquetas para campos no definidos
```
[PDFTh] CÓDIGO,DESCRIPCIÓN,ESTADO | cd_categoria=Categoría, tipo_cliente=Tipo de Cliente
```

### Ejemplo con función personalizada para valores de condición
```
[PHPIni] *
function LiteralEstado( $v ){
    if( $v=='[ABC]' ) return 'ACTIVOS';
    if( $v=='[DE]' ) return 'EN ESPERA';
    sqlQuery( "select nm_estado from estado where cd_estado='{$v}'" );
    $row = sqlRow();
    return $row[0];
}

[PDFTh] || estado=LiteralEstado();
```

### Ejemplo combinado completo
```
[PDFTh] EMPRESA,=,FECHA,IMPORTE | cd_sector=Sector,tipo_negocio=Tipo de Negocio | estado=LiteralEstado();cd_categoria=ObtenerCategoria()
```

### Ejemplo con múltiples funciones
```
[PHPIni] *
function FormatearTipo( $v ){
    switch($v) {
        case 'A': return 'TIPO A - PREMIUM';
        case 'B': return 'TIPO B - ESTÁNDAR';
        case 'C': return 'TIPO C - BÁSICO';
        default: return 'NO DEFINIDO';
    }
}

function EstadoCompleto( $v ){
    return "Estado: " . strtoupper($v);
}

[PDFTh] CÓDIGO,DESCRIPCIÓN,TIPO,ESTADO | | tipo=FormatearTipo();estado=EstadoCompleto()
```

### Uso práctico
Este comando es especialmente útil cuando:
- Se necesitan títulos de columna diferentes a los definidos en el formulario
- Se trabaja con campos de condición que no están en gs_campo
- Se requiere mostrar valores procesados o formateados en las condiciones del listado
- Se quiere mantener consistencia en la presentación de datos en PDF