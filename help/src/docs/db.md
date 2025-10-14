# DB

## SINTAXIS

```
[DB] SQLFile, HostName, Database, User, Password
```

**o**

```
[DB] NomScript
```

## Descripción

La etiqueta `[DB]` permite especificar un nuevo controlador de bases de datos y sus parámetros de conexión. Esta etiqueta es fundamental para establecer la conexión con la base de datos que utilizará la aplicación.

Existen dos formatos disponibles:
- **Formato completo**: Se especifican todos los parámetros de conexión directamente
- **Formato por script**: La definición de la base de datos se encuentra en un archivo de configuración externo

## Parámetros

### Formato Completo

| Parámetro | Descripción |
|-----------|-------------|
| **SQLFile** | Nombre del controlador de la base de datos. Valores soportados: `mysql`, `informix`, `oracle`, `pdo` |
| **HostName** | Nombre o dirección IP del servidor de base de datos |
| **Database** | Nombre de la base de datos a utilizar |
| **User** | Usuario para la conexión a la base de datos |
| **Password** | Contraseña del usuario de la base de datos |

### Formato por Script

| Parámetro | Descripción |
|-----------|-------------|
| **NomScript** | Nombre del archivo de script donde está definida la configuración de la base de datos |

## Notas Importantes

- **Ruta por defecto**: Si `NomScript` no incluye una ruta completa, se buscará automáticamente en el directorio `/_datos/config/`
- **Extensión automática**: Si el archivo no tiene extensión, se añadirá automáticamente `.ini`
- **Seguridad**: Se recomienda usar el formato por script para evitar exponer credenciales directamente en el código

## Ejemplos

### Ejemplo 1: Conexión MySQL directa
```
[DB] mysql, sabenet, inmuebles, entra, ertF4
```

### Ejemplo 2: Conexión Oracle directa
```
[DB] oracle, servidor-oracle, sistema_ventas, admin, mi_password
```

### Ejemplo 3: Configuración por script
```
[DB] configuracion_produccion
```
*Buscará el archivo en: `/_datos/config/configuracion_produccion.ini`*

### Ejemplo 4: Script con ruta específica
```
[DB] /config/custom/mi_database.ini
```

## Controladores Soportados

- **mysql**: Para bases de datos MySQL/MariaDB
- **informix**: Para bases de datos IBM Informix
- **oracle**: Para bases de datos Oracle
- **pdo**: Para conexiones PDO (PHP Data Objects) genéricas

## Archivo de Configuración (.ini)

Cuando se usa el formato por script, el archivo `.ini` debe contener la configuración en el siguiente formato:

```ini
[database]
driver=mysql
host=localhost
database=mi_base_datos
username=usuario
password=contraseña
```

## Buenas Prácticas

1. **Usar archivos de configuración** para entornos de producción
2. **Separar configuraciones** por entorno (desarrollo, testing, producción)
3. **Proteger archivos de configuración** con permisos restrictivos
4. **No versionar credenciales** en sistemas de control de versiones
5. **Validar conexión** antes de realizar operaciones sobre la base de datos