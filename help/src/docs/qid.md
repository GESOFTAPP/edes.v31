# qId

## Descripción
Devuelve el último serial generado en la sesión. Si se llama sin parámetros, devuelve el último serial general; si se especifica el nombre de la tabla, devuelve el último serial de esa tabla específica.

## Sintaxis
```php
qId([NmTabla])
```

## Parámetros
- **NmTabla** (string, opcional): Nombre de la tabla de la cual obtener el último serial

## Funcionalidad
La función recupera el último valor de secuencia o auto-incremento generado durante la sesión actual. Es útil para obtener el ID del último registro insertado, ya sea de forma general o específica por tabla.

## Ejemplos

### Ejemplo 1: Obtener último serial general
```php
$ultimoId = qId();
echo "Último ID generado: " . $ultimoId;
```

### Ejemplo 2: Obtener último serial de tabla específica
```php
// Después de insertar en la tabla usuarios
qQuery("INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@email.com')");
$ultimoUserId = qId('usuarios');
echo "Último ID de usuario: " . $ultimoUserId;
```

### Ejemplo 3: Usar ID para relaciones
```php
// Insertar padre
qQuery("INSERT INTO clientes (nombre) VALUES ('Empresa ABC')");
$clienteId = qId('clientes');

// Insertar hijo con relación
qQuery("INSERT INTO pedidos (cliente_id, fecha) VALUES ($clienteId, NOW())");
$pedidoId = qId('pedidos');
```