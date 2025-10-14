# PHPStart

## Sintaxis
```
[PHPStart] Mode [ [ | NomDF,.../else ] | UNIQUE/Condition ] ...
```

## Descripción
Define código PHP que se ejecutará al inicio del proceso. **Esta etiqueta debe ser la primera en el DF** (Definition File).

Si se necesita acceder a la base de datos, es necesario llamar a la función:
```php
eInclude($_Sql);
```

## Parámetros
- **Mode**: Modo de ejecución (ej. M para modificar, A para agregar, etc.)
- **NomDF**: Nombre del archivo DF específico
- **UNIQUE**: Incluye la zona de código una sola vez (útil para declaraciones de funciones)
- **Condition**: Condición personalizada para la ejecución

## Parámetro UNIQUE
El parámetro `UNIQUE` evita conflictos cuando se declaran funciones que podrían ejecutarse múltiples veces en diferentes modos:

```php
[PHPStart] UNIQUE
function miFunction() {
    // Función que solo se declara una vez
}
```

## Ejemplos

### Ejemplo básico
```php
[PHPStart] M
eUnSet('re_num_devoluciones');
```
En este caso, al modificar eliminamos el campo "nº de devoluciones" porque es un campo que solo puede modificar el sistema.

### Ejemplo con acceso a base de datos
```php
[PHPStart] A
eInclude($_Sql);
$result = mysql_query("SELECT * FROM tabla");
```

### Ejemplo con condición
```php
[PHPStart] M|A
// Código que se ejecuta tanto en modo modificar como agregar
$_SESSION['timestamp'] = time();
```

## Casos de uso comunes
- 🔧 **Inicialización de variables**: Configurar valores iniciales
- 🔒 **Validaciones de acceso**: Verificar permisos del usuario  
- 🗃️ **Configuración de sesión**: Establecer variables de sesión
- 📝 **Preparación de datos**: Procesar información antes del formulario
- 🚫 **Restricciones de campos**: Eliminar campos según el contexto
- 🔄 **Funciones auxiliares**: Declarar funciones reutilizables

## Buenas prácticas
- ✅ **Primera posición**: Siempre colocar al inicio del archivo DF
- 🎯 **Modos específicos**: Usar modos apropiados para cada funcionalidad
- 🔍 **Funciones únicas**: Usar UNIQUE para evitar redeclaraciones
- 📊 **Acceso a BD**: Recordar usar `eInclude($_Sql)` cuando sea necesario
- 💡 **Comentarios**: Documentar el propósito del código PHP

## Notas importantes
- ⚠️ **Posición crítica**: Debe ser la primera etiqueta en el DF
- 🔄 **Múltiples bloques**: Se pueden tener varios bloques PHPStart con diferentes condiciones
- 🗃️ **Base de datos**: No olvides incluir `eInclude($_Sql)` para operaciones de BD
- 🔧 **Debug**: Usar para inicializar variables de depuración si es necesario