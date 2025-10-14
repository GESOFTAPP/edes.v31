# SubSelectMemory

## Sintaxis

```
[SubSelectMemory] Campo [,...]
```

## Descripción

Modifica el comportamiento de la etiqueta `RelationFields` haciendo que el SubSelect se calcule en el lado del cliente (navegador) en lugar del servidor. Esto mejora la velocidad de respuesta pero reduce algunas prestaciones de los SubSelect tradicionales.

También se puede definir dentro de la etiqueta `[RelationFields]`. Por cada campo especificado se genera una matriz JavaScript con el mismo nombre que el campo precedido por dos guiones bajos (`__`).

## Parámetros

| Parámetro | Descripción | Formato |
|-----------|-------------|---------|
| `Campo` | Nombre del campo a procesar en memoria | String |
| `[,...]` | Lista de campos separados por coma | `campo1,campo2,campo3` |

## Funcionamiento

### Procesamiento del Lado Cliente
1. **Carga inicial**: Los datos se cargan una vez desde el servidor
2. **Almacenamiento**: Se crean arrays JavaScript en memoria
3. **Filtrado**: Las opciones se filtran localmente según selecciones
4. **Actualización**: Los SubSelects se actualizan instantáneamente

### Generación de Variables
Para cada campo se crea una variable JavaScript:
```javascript
var __nombre_campo = new Array();
```

## Estructura de Datos

### Formato de Array Generado
```javascript
__campo["clave_padre"] = [
    ["valor1", "texto1"],
    ["valor2", "texto2"],
    ["valor3", "texto3"]
];
```

### Ejemplo de Estructura
```javascript
__cd_prov["01"] = [
    ["04", "ALMERIA"],
    ["11", "CADIZ"],
    ["14", "CORDOBA"]
];
```

## Ejemplo Práctico

### Configuración
```
[RelationFields] cd_auto,cd_prov,cd_coma,cd_muni
[SubSelectMemory] cd_prov,cd_coma,cd_muni
```

### Datos Generados

#### Variable para Provincias (__cd_prov)
```javascript
var __cd_prov = new Array();

// Andalucía
__cd_prov["01"] = [
    ["04", "ALMERIA"],
    ["11", "CADIZ"],
    ["14", "CORDOBA"],
    ["18", "GRANADA"],
    ["21", "HUELVA"],
    ["23", "JAEN"],
    ["29", "MALAGA"],
    ["41", "SEVILLA"]
];

// Aragón
__cd_prov["02"] = [
    ["22", "HUESCA"],
    ["44", "TERUEL"],
    ["50", "ZARAGOZA"]
];

// Asturias
__cd_prov["03"] = [
    ["33", "ASTURIAS"]
];

// Baleares
__cd_prov["04"] = [
    ["07", "ILLES"]
];

// Canarias
__cd_prov["05"] = [
    ["35", "LAS PALMAS"],
    ["38", "S.CRUZ TENERIFE"]
];

// Cantabria
__cd_prov["06"] = [
    ["39", "CANTABRIA"]
];

// Castilla y León
__cd_prov["07"] = [
    ["05", "AVILA"],
    ["09", "BURGOS"],
    ["24", "LEON"],
    ["34", "PALENCIA"],
    ["37", "SALAMANCA"],
    ["40", "SEGOVIA"],
    ["42", "SORIA"],
    ["47", "VALLADOLID"],
    ["49", "ZAMORA"]
];

// Castilla-La Mancha
__cd_prov["08"] = [
    ["02", "ALBACETE"],
    ["13", "CIUDAD REAL"],
    ["16", "CUENCA"],
    ["19", "GUADALAJARA"],
    ["45", "TOLEDO"]
];

// Cataluña
__cd_prov["09"] = [
    ["08", "BARCELONA"],
    ["17", "GIRONA"],
    ["25", "LLEIDA"],
    ["43", "TARRAGONA"]
];

// Comunidad Valenciana
__cd_prov["10"] = [
    ["03", "ALICANTE"],
    ["12", "CASTELLON"],
    ["46", "VALENCIA"]
];

// Extremadura
__cd_prov["11"] = [
    ["06", "BADAJOZ"],
    ["10", "CACERES"]
];

// Galicia
__cd_prov["12"] = [
    ["15", "A CORUÑA"],
    ["27", "LUGO"],
    ["32", "OURENSE"],
    ["36", "PONTEVEDRA"]
];

// Madrid
__cd_prov["13"] = [
    ["28", "MADRID"]
];

// Murcia
__cd_prov["14"] = [
    ["30", "MURCIA"]
];

// Navarra
__cd_prov["15"] = [
    ["31", "NAVARRA"]
];

// País Vasco
__cd_prov["16"] = [
    ["01", "ALAVA"],
    ["48", "BIZKAIA"],
    ["20", "GIPUZKOA"]
];

// La Rioja
__cd_prov["17"] = [
    ["26", "RIOJA"]
];

// Ceuta
__cd_prov["18"] = [
    ["51", "CEUTA"]
];

// Melilla
__cd_prov["19"] = [
    ["52", "MELILLA"]
];
```

## Ventajas y Limitaciones

### ✅ **Ventajas**

| Ventaja | Descripción |
|---------|-------------|
| **Velocidad** | Respuesta instantánea sin consultas al servidor |
| **Menos carga del servidor** | Reduce peticiones HTTP |
| **Experiencia de usuario** | Interface más fluida y responsiva |
| **Offline** | Funciona sin conexión una vez cargado |

### ⚠️ **Limitaciones**

| Limitación | Descripción |
|------------|-------------|
| **Memoria del navegador** | Consume más memoria en el cliente |
| **Carga inicial** | Primera carga puede ser más lenta |
| **Datos estáticos** | No se actualiza automáticamente con cambios del servidor |
| **Tamaño de datos** | No recomendado para datasets muy grandes |

## Casos de Uso

### 1. Ubicaciones Geográficas
```
[SubSelectMemory] pais,region,provincia,ciudad
```

### 2. Categorías de Productos
```
[SubSelectMemory] categoria,subcategoria,producto
```

### 3. Estructura Organizacional
```
[SubSelectMemory] empresa,departamento,puesto
```

### 4. Clasificaciones Jerárquicas
```
[SubSelectMemory] tipo,subtipo,variante
```

## Implementación Técnica

### Acceso a Datos desde JavaScript
```javascript
// Obtener opciones para una provincia específica
function getProvincias(codigoAutonomia) {
    return __cd_prov[codigoAutonomia] || [];
}

// Poblar select de provincias
function populateProvincias(selectElement, codigoAutonomia) {
    const provincias = __cd_prov[codigoAutonomia] || [];
    
    // Limpiar opciones existentes
    selectElement.innerHTML = '<option value="">Seleccione...</option>';
    
    // Añadir nuevas opciones
    provincias.forEach(function(provincia) {
        const option = document.createElement('option');
        option.value = provincia[0];
        option.textContent = provincia[1];
        selectElement.appendChild(option);
    });
}
```

### Ejemplo de Uso Dinámico
```javascript
// Evento cuando cambia la autonomía
document.getElementById('cd_auto').addEventListener('change', function() {
    const codigoAutonomia = this.value;
    const selectProvincias = document.getElementById('cd_prov');
    
    populateProvincias(selectProvincias, codigoAutonomia);
    
    // Limpiar selects dependientes
    document.getElementById('cd_coma').innerHTML = '<option value="">Seleccione...</option>';
    document.getElementById('cd_muni').innerHTML = '<option value="">Seleccione...</option>';
});
```

## Comparación con SubSelect Tradicional

| Aspecto | SubSelect Tradicional | SubSelectMemory |
|---------|----------------------|-----------------|
| **Ubicación del procesamiento** | Servidor | Cliente |
| **Velocidad de respuesta** | Depende de la red | Instantánea |
| **Consumo de memoria** | Servidor | Cliente |
| **Datos dinámicos** | Siempre actualizados | Requiere recarga |
| **Carga inicial** | Rápida | Más lenta |

## Notas Importantes

- ✅ **Compatibilidad**: Funciona con `RelationFields`
- ✅ **Nomenclatura**: Variables se crean con prefijo `__`
- ✅ **Estructura**: Cada array contiene pares [valor, texto]
- ⚠️ **Memoria**: Considerar el tamaño total de datos
- ⚠️ **Actualización**: Los datos no se actualizan automáticamente
- ⚠️ **JavaScript**: Requiere JavaScript habilitado en el navegador

## Recomendaciones

1. **Usar para datasets pequeños a medianos** (< 10,000 registros)
2. **Ideal para datos relativamente estáticos**
3. **Combinar con cache del navegador** para mejor rendimiento
4. **Considerar lazy loading** para datasets grandes
5. **Implementar mecanismo de actualización** si los datos cambian frecuentemente