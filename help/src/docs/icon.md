# Icon

## Sintaxis

```
[Icon] Mode | Field,... | KeyIcon | InteriorDelObjeto [ | filled ]
```

## Descripción

Permite insertar iconos del sistema en formularios y interfaces. Es equivalente a llamar la función `eIcon()`. Si la clave del icono (`KeyIcon`) no existe en el sistema, buscará una imagen con ese nombre en el directorio "g".

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo en el que se ejecuta el icono |
| **Field,...** | Lista de campos (separados por coma) donde se colocará el icono al final |
| **KeyIcon** | Clave identificadora del icono a mostrar |
| **InteriorDelObjeto** | Contenido interior del icono, incluyendo eventos y propiedades |
| **filled** | (Opcional) Constante que indica que el icono solo se mostrará si el campo está relleno |

## Iconos Disponibles

### Operaciones CRUD
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `i` / `insert` | Insertar | Botones de creación de registros |
| `d` / `delete` | Eliminar | Botones de borrado |
| `u` / `update` | Actualizar | Botones de edición/guardado |
| `v` / `view` | Ver | Botones de visualización |
| `x` / `close` | Cerrar | Botones de cierre |

### Navegación y Menús
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `m` / `menu` | Menú | Menús principales |
| `=` | Menú 2 | Menús secundarios |
| `s` / `seek` | Buscar | Funciones de búsqueda |

### Documentos y Archivos
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `doc` | Documento | Documentos generales |
| `pdf` | PDF | Archivos PDF |
| `excel` | Excel | Hojas de cálculo |
| `word` | Word | Documentos de texto |
| `file` | Archivo genérico | Archivos diversos |

### Transferencia de Archivos
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `download` | Descargar | Descarga de archivos |
| `upload` | Subir | Carga de archivos |

### Herramientas y Utilidades
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `c` / `calendar` | Calendario | Selectores de fecha |
| `setup` | Configuración | Ajustes del sistema |
| `tools` | Herramientas | Utilidades diversas |
| `filter` | Filtro | Filtros de búsqueda |

### Información y Ayuda
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `help` | Ayuda | Ayuda principal |
| `help2` | Ayuda 2 | Ayuda secundaria |
| `info` | Información | Información general |

### Usuarios y Contacto
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `user` | Usuario | Usuario individual |
| `users` | Usuarios | Múltiples usuarios |
| `w` / `web` | Web | Enlaces web |
| `@` / `email` | Email | Correo electrónico |

### Estados y Acciones
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `exe` | Ejecutar | Ejecución de procesos |
| `on` | Activado | Estado activo |
| `off` | Desactivado | Estado inactivo |
| `copy` | Copiar | Función copiar |
| `paste` | Pegar | Función pegar |

### Organización
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `star` | Estrella | Favoritos/destacados |
| `pin` | Pin | Elementos fijados |
| `open` | Carpeta Abierta | Carpetas expandidas |
| `close` | Carpeta Cerrada | Carpetas contraídas |
| `print` | Imprimir | Función de impresión |

### Redes Sociales
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `FACEBOOK` | Facebook | Enlaces a Facebook |
| `TWITTER` | Twitter | Enlaces a Twitter |

### Navegación y Ubicación
| KeyIcon | Descripción | Uso |
|---------|-------------|-----|
| `GPS` | GPS | Funciones de geolocalización |
| `HOME` | Inicio | Página principal |

## Ejemplos de Uso

### Ejemplo Básico
```
[Icon] a,mR | field | help | onclick="showHelp()"
```
**Resultado:** En los modos "a" y "mR", coloca un icono de ayuda al final del campo "field" con un evento onclick.

### Ejemplo con Múltiples Campos
```
[Icon] a | nombre,apellido,email | info | title="Información adicional"
```
**Resultado:** Añade un icono de información a los campos nombre, apellido y email.

### Ejemplo con Condición 'filled'
```
[Icon] mR | documento | download | onclick="descargarDoc()" | filled
```
**Resultado:** Solo muestra el icono de descarga si el campo "documento" tiene contenido.

### Ejemplo con Icono Personalizado
```
[Icon] a | logo | mi_logo_custom | onclick="mostrarInfo()"
```
**Resultado:** Si "mi_logo_custom" no existe como icono del sistema, buscará "mi_logo_custom.png" en el directorio "g".

## Casos de Uso Comunes

### Formularios de Edición
```
[Icon] u | nombre | info | title="Ayuda para el nombre"
[Icon] u | email | @ | onclick="validarEmail()"
[Icon] u | fecha | calendar | onclick="abrirCalendario()"
```

### Listas de Registros
```
[Icon] v | id | view | onclick="verDetalle(this)"
[Icon] d | id | delete | onclick="confirmarBorrado(this)"
[Icon] u | id | update | onclick="editarRegistro(this)"
```

### Gestión de Archivos
```
[Icon] a | archivo | upload | onclick="subirArchivo()" | filled
[Icon] v | documento | download | onclick="descargar()" | filled
[Icon] v | pdf | pdf | onclick="abrirPDF()" | filled
```

## Consideraciones Técnicas

- **Directorio de imágenes:** Las imágenes personalizadas deben ubicarse en el directorio "g"
- **Formatos soportados:** Verificar qué formatos de imagen acepta el sistema (PNG, JPG, SVG, etc.)
- **Responsive:** Los iconos deben adaptarse a diferentes tamaños de pantalla
- **Accesibilidad:** Considerar atributos alt y title para mejorar la accesibilidad
- **Performance:** Los iconos del sistema cargan más rápido que las imágenes personalizadas

## Integración con Otros Componentes

- **Fields:** Se integra con la definición de campos en formularios
- **SubList:** Puede usarse en listas y sublistas
- **JavaScript:** Compatible con eventos onclick, onmouseover, etc.
- **CSS:** Permite personalización de estilos mediante clases CSS