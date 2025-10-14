# eInclude

## Descripción
Incluye recursos del motor EDes o scripts de usuario, proporcionando acceso a controladores de base de datos, funciones adicionales y librerías.

## Sintaxis
```php
eInclude($NomRecurso [, $NomRecurso2, ...])
```

## Parámetros
- `$NomRecurso` (string): Nombre del recurso a incluir (sin extensión para recursos del motor, con extensión para scripts de usuario)

## Funcionalidad
Permite incluir diferentes tipos de recursos:
- **Controladores de BD**: mysql, informix, oracle
- **Funciones adicionales**: message, markdown, lib
- **Scripts de usuario**: Con extensión, desde directorio 'd' o raíz

**Recursos disponibles:**
- `mysql`: Controlador DB de MySQL
- `informix`: Controlador DB de Informix  
- `oracle`: Controlador DB de Oracle
- `message`: Función para mostrar mensajes únicos
- `markdown`: Función `eMarkDown($txt)` para convertir markdown a HTML
- `lib`: Funciones adicionales como `eAddMonth()`, `eNum2String()`, clase `eColor`

## Ejemplos
```php
// Ejemplo 1: Incluir controlador de base de datos por defecto
eInclude($_Sql);

// Ejemplo 2: Incluir múltiples recursos del sistema
eInclude('mysql', 'message');

// Ejemplo 3: Incluir script de usuario
eInclude('cliente.php'); // Desde directorio 'd'
eInclude('/scripts/utilidades.php'); // Desde raíz de aplicación
```