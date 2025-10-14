# SessionVar

## Sintaxis

```
[SessionVar]
```

## Descripción

La etiqueta `SessionVar` instruye al motor para generar automáticamente un formulario que muestra todas las variables de sesión activas y permite al usuario modificarlas. Esta funcionalidad es especialmente útil para:

- **Simulación de usuarios**: Permite simular ser otro usuario
- **Cambio de contexto**: Cambiar el nodo o contexto de ejecución
- **Depuración**: Verificar y modificar el estado de la sesión
- **Pruebas**: Probar el comportamiento de la aplicación con diferentes valores de sesión

### Propósito principal

El uso principal de esta etiqueta es **simular ser otro usuario y estar en otro nodo** para observar y probar el comportamiento de la Intranet bajo diferentes condiciones de sesión.

## Características

- **Generación automática**: El motor crea automáticamente el formulario con todas las variables de sesión
- **Modificación en tiempo real**: Permite cambiar los valores de las variables de sesión
- **Interfaz intuitiva**: Presenta las variables de forma organizada y fácil de modificar
- **Funcionalidad de depuración**: Herramienta valiosa para desarrolladores y administradores

## Parámetros

Esta etiqueta no requiere parámetros adicionales. Su funcionalidad es automática.

## Variables de sesión comunes

El formulario generado típicamente incluye variables como:

| Variable | Descripción |
|----------|-------------|
| **User** | Usuario actual |
| **Node** | Nodo de conexión |
| **Tree** | Árbol de navegación |
| **HndWeb** | Manejador de conexión web |
| **CDI** | Identificador CDI |
| **AvisoStatus** | Estado de avisos |

## Ejemplo completo

```
[Title] VARIABLES DE SESION
[Stop]
[NoButton] cR
[SessionVar]
[Width] c | *AvisoStatus* | 240
[Fields]
    Conexión | *HndWeb | 0 | T | 3 |    | A |||
    Nodo     | *Node   | 0 | T | 3 | 40 | M |||
   ,Usuario  | *User   | 0 | T | 3 | 30 | M |||
   ,Árbol    | *Tree   | 0 | T | 3 | 20 | M |||

{FS}{ Avisos
   <]Aviso CDI    | *CDI*         | 0 | T | 10 || M |||
   ,]Aviso status | *AvisoStatus* | 0 | T | 40 || M |||
}
```

## Componentes del ejemplo

### Configuración del formulario
```
[Title] VARIABLES DE SESION
[Stop]
[NoButton] cR
```
- Define el título del formulario
- Detiene la ejecución normal
- Oculta el botón de cerrar en modo consulta

### Generación automática
```
[SessionVar]
```
- Activa la generación automática del formulario de variables de sesión

### Configuración de campos
```
[Width] c | *AvisoStatus* | 240
```
- Establece el ancho del campo AvisoStatus

### Definición de campos
Los campos se definen con el formato estándar de `[Fields]`, donde cada campo representa una variable de sesión:

```
Conexión | *HndWeb | 0 | T | 3 |    | A |||
Nodo     | *Node   | 0 | T | 3 | 40 | M |||
Usuario  | *User   | 0 | T | 3 | 30 | M |||
Árbol    | *Tree   | 0 | T | 3 | 20 | M |||
```

### Sección de avisos
```
{FS}{ Avisos
   <]Aviso CDI    | *CDI*         | 0 | T | 10 || M |||
   ,]Aviso status | *AvisoStatus* | 0 | T | 40 || M |||
}
```

## Casos de uso

### Depuración de sesiones
```
[SessionVar]
```
*Para inspeccionar y modificar todas las variables de sesión activas*

### Simulación de usuarios
```
[Title] SIMULAR USUARIO
[SessionVar]
```
*Para cambiar el contexto del usuario y probar funcionalidades*

### Cambio de nodo
```
[Title] CAMBIAR NODO
[SessionVar]
```
*Para simular conexiones desde diferentes nodos*

### Pruebas de comportamiento
```
[Title] PRUEBAS DE SESION
[SessionVar]
```
*Para probar cómo responde la aplicación a diferentes valores de sesión*

## Consideraciones de seguridad

- **Acceso restringido**: Esta funcionalidad debe estar disponible solo para usuarios autorizados
- **Entorno de desarrollo**: Principalmente útil en entornos de desarrollo y pruebas
- **Logging**: Considerar registrar los cambios realizados en las variables de sesión
- **Validación**: Asegurar que los valores modificados sean válidos

## Funcionalidad relacionada

- **Variables de sesión**: Trabaja directamente con el sistema de sesiones
- **Formularios dinámicos**: Genera formularios automáticamente
- **Depuración**: Herramienta de desarrollo y depuración
- **Simulación**: Permite simular diferentes contextos de usuario

## Notas adicionales

- Es una herramienta principalmente de desarrollo y administración
- Permite modificar el comportamiento de la aplicación en tiempo real
- Útil para probar diferentes escenarios sin necesidad de cambiar código
- Debe usarse con precaución en entornos de producción
- Los cambios realizados afectan toda la sesión del usuario