# FileMultiple

## Sintaxis

```
[FileMultiple] Field [ | DatosACopiar ]
```

## Descripción

La etiqueta **FileMultiple** permite seleccionar múltiples archivos a la vez, **exclusivamente en Fichas**.

### Proceso de funcionamiento:

1. **Selección**: El usuario selecciona múltiples archivos
2. **Envío**: Cada archivo se envía al servidor individualmente
3. **Retorno**: Después de enviar cada archivo, retorna al cliente
4. **Función personalizada**: Ejecuta la función `FUNCTION_user()` si existe, para solicitar datos adicionales del siguiente archivo a enviar

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Field** | Nombre del campo con selección múltiple |
| **DatosACopiar** | Copia el atributo indicado en los campos designados con el formato: `CampoDestino=atributo, ...` |

## Atributos Disponibles

Los siguientes atributos pueden ser copiados automáticamente a otros campos:

| Atributo | Descripción |
|----------|-------------|
| **caption** | Nombre del archivo transformado |
| **size** | Tamaño en bytes |
| **format** | Extensión del archivo |
| **date** | Fecha de última modificación |
| **hour** | Hora de la última modificación |
| **datetime** | Fecha y hora de la última modificación |

## Ejemplo

### Configuración FileMultiple
```
[FileMultiple] fichero | nm_gs_store=caption, caption=caption, tamano=size, extension=format, fecha=date, hora=hour, cdi=datetime
```

### Definición del Campo
```
[Fields]
...
Fichero | fichero | f | F | 40 | | MDCPS | | # |
...
```

### Explicación del Ejemplo

En este ejemplo:
- **Campo**: `fichero` (campo de selección múltiple)
- **Mapeo de atributos**:
  - `nm_gs_store` ← nombre del archivo (`caption`)
  - `caption` ← nombre del archivo (`caption`)
  - `tamano` ← tamaño en bytes (`size`)
  - `extension` ← extensión del archivo (`format`)
  - `fecha` ← fecha de modificación (`date`)
  - `hora` ← hora de modificación (`hour`)
  - `cdi` ← fecha y hora completa (`datetime`)

## Casos de Uso

### Carga Masiva de Documentos
```
[FileMultiple] documentos | nombre_doc=caption, tamano_doc=size, tipo_doc=format, fecha_subida=datetime
```

### Galería de Imágenes
```
[FileMultiple] imagenes | titulo=caption, peso=size, formato=format, fecha_creacion=date
```

## Función Personalizada

### FUNCTION_user()
```javascript
function FUNCTION_user() {
    // Código personalizado para procesar cada archivo
    // Se ejecuta después de cada envío al servidor
    // Permite solicitar datos adicionales para el siguiente archivo
}
```

## Características Importantes

### Limitaciones
- **Solo disponible en Fichas** (no en listados ni otras vistas)
- Procesa los archivos **uno por uno**, no en lote

### Ventajas
- **Automatización**: Copia automática de metadatos del archivo
- **Flexibilidad**: Función personalizada para cada archivo
- **Eficiencia**: Selección múltiple con procesamiento individual

## Flujo de Trabajo

```
Usuario selecciona múltiples archivos
         ↓
    Archivo 1 → Servidor → Cliente → FUNCTION_user()
         ↓
    Archivo 2 → Servidor → Cliente → FUNCTION_user()
         ↓
    Archivo 3 → Servidor → Cliente → FUNCTION_user()
         ↓
    ... (continúa hasta procesar todos)
```

## Notas Adicionales

- Los atributos se copian automáticamente a los campos especificados
- La función `FUNCTION_user()` es opcional pero recomendada para casos complejos
- Ideal para sistemas de gestión documental o galerías multimedia
- Permite validación y procesamiento personalizado para cada archivo