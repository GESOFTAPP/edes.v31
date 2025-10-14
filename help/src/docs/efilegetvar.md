# eFileGetVar

## Descripción
Recupera variables de configuración desde archivos .var organizados por grupos, con múltiples formas de acceso y retorno.

## Sintaxis
```php
eFileGetVar($NomGrupo[.NomVar] [, $var1 [, $var2 [... $var10]]])
```

## Parámetros
- `$NomGrupo` (string): Nombre del grupo de variables
- `$NomVar` (string, opcional): Nombre específico de variable (usando punto como separador)
- `$var1, $var2, ...` (mixed, opcional): Variables donde asignar los valores recuperados

## Funcionalidad
Lee archivos de configuración ubicados en "/_datos/config/group.var" con estructura de grupos y variables. Permite diferentes formas de acceso:
- Recuperar una variable específica
- Recuperar todas las variables de un grupo
- Hacer globales las variables
- Recuperar todas las variables de todos los grupos

**Estructura del archivo .var:**
```
Grupo1:
   key1 = Var1
   key2 = Var2
Grupo2:
   key3 = Var3
```

## Ejemplos
```php
// Ejemplo 1: Recuperar variable específica
$idioma = eFileGetVar('LogHistory.idioma');
echo $idioma; // Retorna el valor de la variable 'idioma'

// Ejemplo 2: Recuperar todas las variables de un grupo en array
$config = array();
eFileGetVar('LogHistory', $config);
// $config ahora contiene todas las variables del grupo LogHistory

// Ejemplo 3: Hacer globales todas las variables de un grupo
eFileGetVar('LogHistory', true);
// Todas las variables del grupo LogHistory son ahora globales

// Ejemplo 4: Recuperar múltiples variables específicas
eFileGetVar('Database', $host, $usuario, $password);
// Asigna los valores a las variables locales $host, $usuario, $password
```