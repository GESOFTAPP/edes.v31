# qSelect

## Descripción
Ejecuta una sentencia SQL SELECT con parámetros simplificados, construyendo automáticamente la consulta a partir de los componentes proporcionados.

## Sintaxis
```php
qSelect($Tabla, $ListaCampos [, $Where [, $Order [, $PunteroCursor]]])
```

## Parámetros
- **$Tabla** (string): Nombre de la tabla a consultar
- **$ListaCampos** (string): Lista de campos a seleccionar, separados por comas
- **$Where** (string, opcional): Condición WHERE para filtrar los registros
- **$Order** (string, opcional): Cláusula ORDER BY para ordenar los resultados
- **$PunteroCursor** (resource, opcional): Cursor específico donde ejecutar la consulta

## Funcionalidad
La función construye y ejecuta una consulta SELECT de forma simplificada, combinando automáticamente los parámetros proporcionados en una sentencia SQL completa. Es útil para consultas básicas sin necesidad de escribir la sintaxis SQL completa.

## Ejemplos

### Ejemplo 1: SELECT básico
```php
qSelect('usuarios', 'id, nombre, email');
// Ejecuta: SELECT id, nombre, email FROM usuarios
```

### Ejemplo 2: SELECT con WHERE
```php
qSelect('productos', 'codigo, nombre, precio', 'categoria = "electrónicos"');
// Ejecuta: SELECT codigo, nombre, precio FROM productos WHERE categoria = "electrónicos"
```

### Ejemplo 3: SELECT completo con ORDER
```php
qSelect('empleados', 'id, nombre, salario', 'departamento = "ventas"', 'salario DESC');
// Ejecuta: SELECT id, nombre, salario FROM empleados WHERE departamento = "ventas" ORDER BY salario DESC
```