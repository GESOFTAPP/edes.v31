# Options

## Sintaxis

```
[Options] Mode [ | NomDF, ... [ | UNIQUE/Condition ]
    NombreOpcion | Función a ejecutar [ | CondiciónPHP ]
    ...
```

## Descripción

Activa un icono de "Menú de opciones" en las fichas que permite crear menús contextuales dinámicos. Cuando se ejecuta una ventana nueva con `top.eSWOpen()`, el sistema verifica los permisos del usuario contra el árbol de navegación. Si el usuario no tiene acceso a una opción, esta no aparecerá en la lista. Si la URL no existe en el árbol de ningún usuario, se mostrará de todas formas.

## Características Principales

### Líneas Divisorias
- Se pueden agregar separadores visuales usando `"-"` como nombre de opción

### Iconos en Opciones
- Los iconos se especifican entre llaves: `{nombre_icono}`
- Si la extensión es `.gif`, no es necesario especificarla
- Ejemplo: `{g/aviso.gif}` o `{g/aviso}`

### Variables Dinámicas
- Dentro de las funciones se pueden usar variables: `{$NomVar}`
- Permiten pasar datos del contexto actual a las funciones

### Submenús con Botones
- Si el título contiene `\`, se crea un botón en lugar de icono
- Formato: `"TítuloBotón\TítuloSubMenú"`

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de funcionamiento del menú |
| **NomDF** | (Opcional) Nombre del formulario |
| **UNIQUE/Condition** | (Opcional) Condición única o específica |
| **NombreOpcion** | Texto que aparece en el menú |
| **Función a ejecutar** | Código JavaScript/PHP a ejecutar |
| **CondiciónPHP** | (Opcional) Condición para mostrar la opción |

## Ejemplos de Uso

### Ejemplo Básico con Icono
```
[Options] cR
    TITULO SUBMENU
    Nueva ventana | top.eSWOpen( window, 'FmR:visita.edf&_SEEK&cd_visita="{$cd_visita}"', 'VISTAS', true )
    LoadDiv | eLoadDiv( 'NomVentana', 'edes.php?E:prueba.php', 'TITULO', -3, -3 )
    -
    {g/aviso.gif} Función | uFunction()
    Reactivar | ... | $_vF['estado']=='B'
```

### Ejemplo con Botón de Acceso
```
[Options] cR
    TítuloBotón\TITULO SUBMENU
    Nueva ventana | top.eSWOpen( window, 'FmR:visita.edf&_SEEK&cd_visita="{$cd_visita}"', 'VISTAS', true )
    ...
```
**Resultado:** En lugar de mostrar un icono, aparecerá un botón con el texto "TítuloBotón".

### Ejemplo con Menú de Acceso Rápido
```
[Options] ?R
    MENU DE ACCESO RAPIDO
    {g/op_view} Ficha del Usuario | top.eSWOpen( window, 'edes.php?GmR:u_usuario.gdf&_SEEK&dni="'+eGF('dni')+'"', "Ficha del Usuario", true ); //eGF('dni') campo del formulario [fields]
    {g/op_view} Chequear cuenta | top.eSWOpen( window, "edes.php?Fa:usuario/ue_check_cuenta.edf&_email="+eGF('email'), "Chequear cuenta", true ); //eGF('email') campo del formulario [fields]
```

## Tipos de Funciones Comunes

### Apertura de Ventanas
```javascript
top.eSWOpen( window, 'url', 'titulo', modal )
```
- **window:** Ventana padre
- **url:** URL a abrir
- **titulo:** Título de la ventana
- **modal:** true/false para ventana modal

### Carga de Divs
```javascript
eLoadDiv( 'nombre', 'url', 'titulo', x, y )
```
- **nombre:** Identificador del div
- **url:** URL del contenido
- **titulo:** Título del div
- **x, y:** Posición (-3, -3 para centrado)

### Funciones Personalizadas
```javascript
uFunction() // Función definida por el usuario
```

## Variables Dinámicas Disponibles

### Variables de Campo
```javascript
eGF('nombre_campo') // Obtiene el valor de un campo del formulario
```

### Variables del Sistema
```php
{$cd_visita}    // Variable PHP del contexto
{$dni}          // DNI del usuario actual
{$email}        // Email del usuario actual
```

## Condiciones PHP

Las condiciones permiten mostrar opciones según el estado de los datos:

```php
$_vF['estado']=='B'        // Solo si el estado es 'B'
$_vF['tipo']=='admin'      // Solo para administradores
isset($_vF['documento'])   // Solo si existe documento
```

## Casos de Uso Avanzados

### Menú Contextual por Roles
```
[Options] cR
    OPCIONES ADMINISTRATIVAS
    {g/user} Ver Usuario | top.eSWOpen(window, 'admin/usuario.edf&id={$id}', 'Usuario', true) | $_SESSION['rol']=='admin'
    {g/edit} Editar Perfil | editarPerfil({$id}) | $_SESSION['rol']=='admin' || $_SESSION['id']=='{$id}'
    -
    {g/delete} Eliminar | confirmarEliminar({$id}) | $_SESSION['rol']=='superadmin'
```

### Menú con Estados Dinámicos
```
[Options] mR
    GESTIÓN DE ESTADOS
    {g/activate} Activar | cambiarEstado({$id}, 'A') | $_vF['estado']=='I'
    {g/deactivate} Desactivar | cambiarEstado({$id}, 'I') | $_vF['estado']=='A'
    {g/block} Bloquear | cambiarEstado({$id}, 'B') | $_vF['estado']!='B'
    -
    {g/history} Ver Historial | verHistorial({$id})
```

### Menú de Reportes
```
[Options] vR
    REPORTES Y EXPORTACIÓN
    {g/pdf} Generar PDF | generarPDF({$id})
    {g/excel} Exportar Excel | exportarExcel({$id})
    {g/email} Enviar por Email | enviarEmail({$id}) | $_vF['email']!=''
    -
    {g/print} Imprimir | window.print()
```

## Integración con Permisos

El sistema verifica automáticamente los permisos basándose en:

1. **Árbol de navegación del usuario**
2. **URLs definidas en el sistema**
3. **Roles y permisos específicos**

### Ejemplo de Verificación
```
Nueva Ficha | top.eSWOpen(window, 'admin/nueva_ficha.edf', 'Nueva', true)
```
- Si el usuario tiene acceso a `admin/nueva_ficha.edf` → Se muestra
- Si no tiene acceso → No aparece en el menú
- Si la URL no existe en el árbol → Se muestra siempre

## Mejores Prácticas

### ✅ Recomendaciones

1. **Títulos descriptivos:** Usar títulos claros para los submenús
2. **Iconos consistentes:** Mantener un estilo visual coherente
3. **Condiciones específicas:** Usar condiciones PHP para un control fino
4. **Variables seguras:** Validar variables antes de usarlas
5. **Separadores lógicos:** Agrupar opciones relacionadas con separadores

### ❌ Evitar

1. **Menús muy largos:** Limitar el número de opciones por menú
2. **Condiciones complejas:** Mantener las condiciones simples y legibles
3. **Variables no validadas:** Siempre verificar que las variables existan
4. **Títulos genéricos:** Evitar títulos como "Opciones" o "Menú"

## Debugging y Troubleshooting

### Problemas Comunes

1. **Opción no aparece:** Verificar permisos del usuario
2. **Error en función:** Comprobar sintaxis JavaScript/PHP
3. **Variable no definida:** Asegurar que la variable existe en el contexto
4. **Icono no se muestra:** Verificar ruta del archivo de imagen

### Herramientas de Debug

```javascript
// En la consola del navegador
console.log(eGF('campo')); // Verificar valor de campo
console.log($_vF);         // Ver variables PHP disponibles (en contexto PHP)
```

## Consideraciones de Seguridad

1. **Validación de entrada:** Siempre validar datos del usuario
2. **Escape de caracteres:** Escapar variables en URLs y JavaScript
3. **Verificación de permisos:** No confiar solo en la ocultación visual
4. **Sanitización:** Limpiar datos antes de procesarlos

```javascript
// Ejemplo seguro
top.eSWOpen(window, 'ficha.edf&id=' + encodeURIComponent(eGF('id')), 'Ficha', true);
```