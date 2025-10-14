# HTMIni

## SINTAXIS
```
[HTMIni] Mode [ | NomDF/else,... [ | UNIQUE/Condition ] ] ...
```

## DESCRIPCIÓN
Permite insertar código HTML personalizado después de la etiqueta de apertura del body (`<body>`). Esta etiqueta es útil para añadir elementos HTML, estilos CSS incrustados o cualquier contenido que deba aparecer al inicio del documento.

En formularios de **grupo de fichas**, el contenido se incluirá en el archivo "gdf" correspondiente.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de ejecución del código HTML |
| **NomDF** | Nombre del formulario de datos o condición específica |
| **else** | Condición alternativa si no se cumple la condición principal |
| **UNIQUE** | Indicador para inclusión única del contenido |
| **Condition** | Condición específica para la inserción del código |

## FUNCIONAMIENTO
- Se ejecuta inmediatamente después de la apertura de `<body>`
- Permite insertar HTML, CSS incrustado y elementos de inicialización
- En grupos de fichas se aplica al archivo "gdf"
- Soporta condiciones para inserción condicional
- Puede utilizarse múltiples veces en el mismo documento

## ESTILOS CSS INCRUSTADOS
Cuando se incluyen hojas de estilo CSS dentro de HTMIni, las clases CSS deben indicarse con caracteres extendidos **"․"** (punto extendido) en lugar del punto normal:

```css
<style>
․mi-clase {
    color: red;
    font-weight: bold;
}
․contenedor {
    width: 100%;
    margin: 0 auto;
}
</style>
```

## EJEMPLOS

### Ejemplo básico - HTML inicial
```
[HTMIni]
<div id="mensaje-bienvenida" class="alert alert-info">
    <h3>Bienvenido al Sistema</h3>
    <p>Por favor, complete todos los campos requeridos.</p>
</div>
```

### Ejemplo con estilos CSS incrustados
```
[HTMIni]
<style>
․formulario-principal {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

․campo-obligatorio {
    background-color: #fff8dc;
    border-left: 4px solid #ffa500;
}

․boton-principal {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

․boton-principal:hover {
    background-color: #0056b3;
}
</style>

<div class="formulario-principal">
    <div id="cabecera-formulario">
        <h2>Datos del Cliente</h2>
    </div>
</div>
```

### Ejemplo con condición de formulario
```
[HTMIni] | FormularioUsuarios
<div class="barra-herramientas">
    <button type="button" onclick="exportarUsuarios()">Exportar</button>
    <button type="button" onclick="importarUsuarios()">Importar</button>
</div>

<style>
․barra-herramientas {
    background-color: #f8f9fa;
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e9ecef;
}

․barra-herramientas button {
    margin-right: 10px;
    padding: 8px 16px;
    border: 1px solid #007bff;
    background-color: white;
    color: #007bff;
    border-radius: 4px;
    cursor: pointer;
}
</style>
```

### Ejemplo con contenido único
```
[HTMIni] | | UNIQUE
<div id="overlay-cargando" style="display: none;">
    <div class="spinner">
        <p>Cargando...</p>
    </div>
</div>

<style>
․spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 9999;
}

#overlay-cargando {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9998;
}
</style>
```

### Ejemplo con elementos de navegación
```
[HTMIni]
<nav class="navegacion-principal">
    <ul>
        <li><a href="#seccion-datos">Datos Básicos</a></li>
        <li><a href="#seccion-contacto">Contacto</a></li>
        <li><a href="#seccion-configuracion">Configuración</a></li>
    </ul>
</nav>

<style>
․navegacion-principal {
    background-color: #343a40;
    padding: 0;
    margin-bottom: 20px;
}

․navegacion-principal ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

․navegacion-principal li {
    margin: 0;
}

․navegacion-principal a {
    display: block;
    padding: 15px 20px;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
}

․navegacion-principal a:hover {
    background-color: #495057;
}
</style>
```

### Ejemplo para grupo de fichas
```
[HTMIni]
<!-- Este contenido se incluirá en el archivo "gdf" -->
<div class="contenedor-fichas">
    <div class="encabezado-grupo">
        <h1>Gestión de Productos</h1>
        <p>Administre los productos del sistema</p>
    </div>
</div>

<style>
․contenedor-fichas {
    width: 100%;
    min-height: 100vh;
    background-color: #f8f9fa;
}

․encabezado-grupo {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    text-align: center;
    margin-bottom: 30px;
}

․encabezado-grupo h1 {
    margin: 0 0 10px 0;
    font-size: 2.5em;
}

․encabezado-grupo p {
    margin: 0;
    font-size: 1.2em;
    opacity: 0.9;
}
</style>
```

## CASOS DE USO
- **Elementos de interfaz**: Barras de herramientas, navegación, mensajes
- **Estilos personalizados**: CSS específico para formularios
- **Contenedores estructurales**: Divs principales, layouts
- **Elementos de feedback**: Mensajes de estado, indicadores de carga
- **Navegación interna**: Enlaces a secciones del formulario
- **Branding**: Logos, encabezados corporativos

## DIFERENCIAS CON OTRAS ETIQUETAS

| Etiqueta | Ubicación | Propósito |
|----------|-----------|-----------|
| **HTMIni** | Después de `<body>` | Contenido inicial del documento |
| **HTMEnd** | Antes de `</body>` | Contenido final del documento |
| **HTMHead** | Dentro de `<head>` | Metadatos y recursos |
| **CSS** | Hoja de estilo externa | Estilos globales |

## BUENAS PRÁCTICAS
- **Use caracteres extendidos (․)** para clases CSS en estilos incrustados
- **Organice el CSS** al inicio del bloque HTMIni
- **Use UNIQUE** para elementos que solo deben aparecer una vez
- **Valide el HTML** para evitar problemas de renderizado
- **Considere la responsividad** en los estilos CSS
- **Documente elementos complejos** para facilitar mantenimiento

## RELACIÓN CON OTRAS ETIQUETAS
- **CSS/CSSAdd**: Para estilos externos más organizados
- **JSIni**: Para funcionalidad JavaScript asociada a los elementos HTML
- **HTMEnd**: Para contenido que debe aparecer al final
- **HTMHead**: Para recursos que van en el head del documento

## NOTAS IMPORTANTES
⚠️ **Consideraciones**:
- El contenido se inserta inmediatamente después de `<body>`
- En grupos de fichas el contenido va al archivo "gdf"
- Use punto extendido (․) para clases CSS en estilos incrustados
- El HTML debe ser válido para evitar problemas de renderizado
- Los estilos incrustados aquí tienen prioridad sobre CSS externos