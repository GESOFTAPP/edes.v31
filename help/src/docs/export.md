# Export

## Sintaxis

```
Export[datos, formato, destino]
Export[datos, formato, destino, opciones]
```

## Descripción

La función `Export` permite exportar datos desde el entorno de trabajo actual hacia archivos externos en diversos formatos. Es una herramienta fundamental para la persistencia de datos, intercambio de información entre aplicaciones y generación de reportes.

Esta función acepta matrices, conjuntos de datos, listas y otras estructuras de datos, convirtiéndolas al formato especificado y guardándolas en la ubicación deseada.

## Parámetros

| Parámetro | Tipo | Descripción | Obligatorio |
|-----------|------|-------------|-------------|
| `datos` | Variable/Matriz | Los datos que se desean exportar (matriz, lista, tabla, etc.) | Sí |
| `formato` | String | Formato de salida del archivo ("CSV", "Excel", "JSON", "XML", "TXT") | Sí |
| `destino` | String | Ruta completa donde se guardará el archivo exportado | Sí |
| `opciones` | Object | Configuraciones adicionales para el formato (separadores, encoding, etc.) | No |

## Ejemplos

### Exportar matriz a CSV
```javascript
matriz_ventas = [
    ["Producto", "Cantidad", "Precio"],
    ["Laptop", 10, 1200],
    ["Mouse", 50, 25],
    ["Teclado", 30, 75]
];

Export[matriz_ventas, "CSV", "./reportes/ventas.csv"]
```

### Exportar a Excel con opciones
```javascript
datos_empleados = [
    ["Nombre", "Departamento", "Salario"],
    ["Juan Pérez", "IT", 45000],
    ["María García", "Ventas", 38000],
    ["Carlos López", "Marketing", 42000]
];

opciones = {
    hoja: "Empleados_2024",
    encabezados: true
};

Export[datos_empleados, "Excel", "./recursos/empleados.xlsx", opciones]
```

### Exportar configuración a JSON
```javascript
configuracion = {
    servidor: "localhost",
    puerto: 8080,
    base_datos: "empresa_db",
    conexiones_max: 100
};

Export[configuracion, "JSON", "./config/app_config.json"]
```

### Exportar datos a XML
```javascript
inventario = [
    {id: 1, nombre: "Producto A", stock: 25},
    {id: 2, nombre: "Producto B", stock: 12},
    {id: 3, nombre: "Producto C", stock: 8}
];

Export[inventario, "XML", "./data/inventario.xml"]
```

### Exportar con separador personalizado
```javascript
datos_log = [
    ["2024-01-15", "INFO", "Sistema iniciado"],
    ["2024-01-15", "WARNING", "Memoria baja"],
    ["2024-01-15", "ERROR", "Conexión perdida"]
];

opciones_csv = {
    separador: ";",
    encoding: "UTF-8"
};

Export[datos_log, "CSV", "./logs/sistema.csv", opciones_csv]
```