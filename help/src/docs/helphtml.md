# HelpHTML

## Sintaxis

```
[HelpHTML] IdHelp
ContenidoHTML
```

## Descripción

La función `HelpHTML` permite definir contenido de ayuda directamente en formato HTML dentro del código del sistema. A diferencia de `[Help]` que referencia archivos externos, `HelpHTML` incrusta el contenido de ayuda directamente en el documento, proporcionando una forma rápida y eficiente de incluir ayuda contextual sin necesidad de archivos separados.

Esta función es especialmente útil para ayudas cortas, tooltips o información contextual que no justifica la creación de archivos de ayuda independientes. El contenido HTML se procesa y renderiza cuando el usuario solicita ayuda para el identificador especificado.

## Parámetros

| Parámetro | Tipo | Descripción | Obligatorio |
|-----------|------|-------------|-------------|
| `IdHelp` | String | Identificador único para el contenido de ayuda | Sí |
| `ContenidoHTML` | HTML | Código HTML que se mostrará como ayuda (líneas siguientes) | Sí |

## Ejemplos

### Ayuda básica para aplicación
```php
[TitleIcon] * | H | | aplicacion
[HelpHTML] aplicacion
<b>Información de la aplicación</b><br />
<p>Esta aplicación permite gestionar los datos de usuarios y realizar operaciones básicas de CRUD.</p>
<ul>
    <li>Crear nuevos registros</li>
    <li>Editar información existente</li>
    <li>Eliminar registros obsoletos</li>
    <li>Consultar información detallada</li>
</ul>
```
**Descripción**: Define ayuda HTML para el identificador "aplicacion" con formato enriquecido.

### Ayuda para formulario específico
```php
[HelpHTML] formulario_usuario
<div style="padding: 10px; background-color: #f0f8ff; border: 1px solid #ccc;">
    <h3>Formulario de Usuario</h3>
    <p><strong>Campos obligatorios:</strong></p>
    <ul>
        <li><em>Nombre:</em> Mínimo 3 caracteres</li>
        <li><em>Email:</em> Formato válido requerido</li>
        <li><em>Teléfono:</em> Solo números, 9-15 dígitos</li>
    </ul>
    <p><span style="color: red;">*</span> Los campos marcados son obligatorios</p>
</div>
```
**Descripción**: Ayuda con estilos CSS integrados para un formulario de usuario.

### Ayuda para herramienta específica
```php
[HelpHTML] calculadora
<table border="1" cellpadding="5" cellspacing="0">
    <tr>
        <th colspan="2">Calculadora de Impuestos</th>
    </tr>
    <tr>
        <td><strong>Base Imponible:</strong></td>
        <td>Cantidad sin impuestos</td>
    </tr>
    <tr>
        <td><strong>Tipo IVA:</strong></td>
        <td>Seleccionar: 21%, 10% o 4%</td>
    </tr>
    <tr>
        <td><strong>Total:</strong></td>
        <td>Se calcula automáticamente</td>
    </tr>
</table>
<br />
<small>Para más información consulte el manual fiscal.</small>
```
**Descripción**: Ayuda tabulada para una herramienta de cálculo con formato de tabla.

### Ayuda con multimedia
```php
[HelpHTML] tutorial_basico
<h2>Tutorial Básico</h2>
<p>Bienvenido al sistema. Siga estos pasos:</p>
<ol>
    <li>
        <strong>Paso 1:</strong> Acceder al menú principal
        <br /><img src="images/menu_principal.png" alt="Menú Principal" width="200" />
    </li>
    <li>
        <strong>Paso 2:</strong> Seleccionar la opción deseada
        <br /><small>Utilice los iconos para navegar más rápidamente</small>
    </li>
    <li>
        <strong>Paso 3:</strong> Completar la información requerida
    </li>
</ol>
<hr />
<p><a href="manual_completo.pdf" target="_blank">Descargar manual completo (PDF)</a></p>
```
**Descripción**: Tutorial paso a paso con imágenes y enlaces externos.

### Ayuda con código de ejemplo
```php
[HelpHTML] api_usage
<h3>Uso de la API</h3>
<p>Para realizar consultas a la API utilice el siguiente formato:</p>
<pre style="background: #f4f4f4; padding: 10px; border-left: 3px solid #007acc;">
GET /api/usuarios?filtro=activos
Headers:
  Authorization: Bearer {token}
  Content-Type: application/json
</pre>
<p><strong>Respuesta esperada:</strong></p>
<pre style="background: #f9f9f9; padding: 10px; border: 1px solid #ddd;">
{
  "status": "success",
  "data": [
    {"id": 1, "nombre": "Juan", "activo": true},
    {"id": 2, "nombre": "María", "activo": true}
  ]
}
</pre>
<p><em>Nota:</em> El token debe obtenerse mediante el endpoint de autenticación.</p>
```
**Descripción**: Documentación técnica con ejemplos de código formateados.

### Ayuda contextual para campos
```php
[HelpHTML] campo_fecha
<div style="border: 2px solid #4CAF50; padding: 8px; border-radius: 5px;">
    <strong>📅 Campo Fecha</strong>
    <p>Formatos aceptados:</p>
    <ul style="margin: 5px 0;">
        <li>DD/MM/AAAA (Ej: 15/03/2024)</li>
        <li>DD-MM-AAAA (Ej: 15-03-2024)</li>
        <li>AAAA-MM-DD (Ej: 2024-03-15)</li>
    </ul>
    <p style="color: #666; font-size: 0.9em;">
        💡 <em>Tip:</em> Use el calendario desplegable para seleccionar fechas rápidamente.
    </p>
</div>
```
**Descripción**: Ayuda contextual específica para un campo de fecha con estilos modernos.

## Buenas prácticas

### HTML válido y accesible
```php
[HelpHTML] ejemplo_accesible
<div role="dialog" aria-labelledby="titulo-ayuda">
    <h4 id="titulo-ayuda">Ayuda del Sistema</h4>
    <p>Información importante sobre el funcionamiento:</p>
    <ul>
        <li tabindex="0">Elemento navegable con teclado</li>
        <li><strong>Alt + H:</strong> Acceso rápido a ayuda</li>
        <li><strong>Esc:</strong> Cerrar ventana de ayuda</li>
    </ul>
    <p><small>Esta ayuda cumple con estándares de accesibilidad web.</small></p>
</div>
```
**Descripción**: Ejemplo de ayuda siguiendo buenas prácticas de accesibilidad web.

## Notas importantes

- El contenido HTML se debe escribir en las líneas siguientes al identificador
- Se pueden usar todas las etiquetas HTML estándar
- Los estilos CSS pueden incluirse inline o mediante clases
- Las imágenes deben referenciar rutas válidas del sistema
- El contenido se renderiza tal como se define, sin procesamiento adicional
- Se recomienda usar HTML semántico para mejor accesibilidad
- Para ayudas extensas, considere usar `[Help]` con archivos externos