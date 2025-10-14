# PHPNextPage

## Sintaxis

```
[PHPNextPage] Mode [ | Script/else [ | UNIQUE/Condition ] ]
```

## Descripción

Código a ejecutar en los listados paginados cada vez que se cambie de página. Esta etiqueta permite ejecutar código PHP personalizado cuando el usuario navega entre páginas de un listado paginado.

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Mode** | Modo de ejecución del código PHP |
| **Script/else** | Código PHP a ejecutar o condición alternativa |
| **UNIQUE/Condition** | Identificador único o condición adicional para la ejecución |

## Ejemplos

### Ejemplo básico
```php
[PHPNextPage] default | echo "Página cambiada";
```
Ejecuta un mensaje cada vez que se cambia de página.

### Ejemplo con condición
```php
[PHPNextPage] conditional | updateCounter() | page_counter
```
Ejecuta la función `updateCounter()` con un identificador único `page_counter`.

### Ejemplo con código complejo
```php
[PHPNextPage] advanced | 
    $page = $_GET['page'] ?? 1;
    logPageAccess($page);
    updateUserActivity();
```
Ejecuta múltiples operaciones al cambiar de página, incluyendo logging y actualización de actividad del usuario.

### Ejemplo real: Redefinir botones en frame oculto
```php
[PHPNextPage] l 
?>
    <script>
        var padre = window.frameElement.WOPENER;
        padre._WOPENER.RedefineBotonDeleteISublist();
        padre._WOPENER.RedefineBotonQueryISublist();
    </script>	
<?PHP
```
Etiqueta para ejecutar código cada vez que se pagina. Como no se recarga al paginar y hay un frame oculto, se necesita acceder al padre mediante `frameElement.WOPENER` para redefinir los botones de eliminar y consultar de la sublista.