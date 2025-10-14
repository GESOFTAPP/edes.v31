# DBSequence

## Descripción General

La directiva **DBSequence** define el manejo de secuencias para bases de datos Oracle. Controla cómo se generan los valores secuenciales para campos de tipo serial, especialmente cuando se utiliza junto con la directiva **[DBSerial]**.

## Sintaxis

```
[DBSequence] NombreSequence | NO
```

### Parámetros

- **NombreSequence**: Nombre específico de la secuencia a utilizar
- **NO**: Indica que la secuencia será manejada por un trigger en la base de datos
- **Sin parámetro**: Utiliza la secuencia por defecto `sq[NombreTabla]`

## Requisitos

- **Base de datos**: Específico para Oracle
- **Dependencia**: Requiere la definición de la etiqueta **[DBSerial]**
- **Configuración**: La secuencia debe existir en la base de datos Oracle

## Modos de Funcionamiento

### 1. Secuencia Automática (Por Defecto)
```
[DBTable] usuarios
[DBSerial] id
[DBSequence]
```
- Utiliza automáticamente la secuencia `sq_usuarios`
- Convención de nomenclatura: `sq[NombreTabla]`

### 2. Secuencia Personalizada
```
[DBTable] productos
[DBSerial] codigo
[DBSequence] seq_productos_especial
```
- Utiliza la secuencia específica `seq_productos_especial`
- Permite nombres personalizados de secuencias

### 3. Secuencia por Trigger
```
[DBTable] pedidos
[DBSerial] numero
[DBSequence] NO
```
- La secuencia es manejada por un trigger de base de datos
- No utiliza secuencias Oracle estándar
- Útil para lógica compleja de numeración

## Casos de Uso

### Numeración Estándar
```
[DBTable] clientes
[DBSerial] id_cliente
[DBSequence]
```
Genera automáticamente IDs únicos usando `sq_clientes`.

### Múltiples Secuencias
```
[DBTable] documentos
[DBSerial] numero_documento
[DBSequence] seq_doc_2024
```
Permite usar secuencias específicas para diferentes períodos o tipos.

### Control por Trigger
```
[DBTable] facturas
[DBSerial] numero_factura
[DBSequence] NO
```
Ideal cuando la numeración requiere lógica específica (por año, sucursal, etc.).

## Integración con DBSerial

### Configuración Completa
```
[DBTable] articulos
[DBSerial] codigo_articulo
[DBSequence] seq_articulos_2024
```

### Campos Múltiples
```
[DBTable] transacciones
[DBSerial] id_transaccion
[DBSequence] seq_trans_principal
[Fields]
ID | id_transaccion | 0 | H | 10 | | | AUTO | |
```

## Consideraciones Técnicas

### Secuencias Oracle
- **Creación**: Las secuencias deben existir previamente en Oracle
- **Permisos**: El usuario debe tener permisos SELECT sobre la secuencia
- **Rendimiento**: Las secuencias Oracle están optimizadas para alta concurrencia

### Triggers vs Secuencias
- **Secuencias**: Más eficientes, menor bloqueo
- **Triggers**: Mayor flexibilidad, lógica personalizada

## Configuración de Base de Datos

### Crear Secuencia Estándar
```sql
CREATE SEQUENCE sq_nombre_tabla
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;
```

### Crear Secuencia Personalizada
```sql
CREATE SEQUENCE seq_productos_especial
    START WITH 1000
    INCREMENT BY 1
    CACHE 20
    NOCYCLE;
```

### Trigger para Numeración
```sql
CREATE OR REPLACE TRIGGER trg_facturas_seq
    BEFORE INSERT ON facturas
    FOR EACH ROW
BEGIN
    IF :NEW.numero_factura IS NULL THEN
        SELECT seq_facturas.NEXTVAL INTO :NEW.numero_factura FROM dual;
    END IF;
END;
```

## Mejores Prácticas

### Nomenclatura
- **Estándar**: `sq_[nombre_tabla]` para secuencias automáticas
- **Personalizada**: Usar prefijos descriptivos (`seq_`, `sequence_`)
- **Consistencia**: Mantener el mismo patrón en toda la aplicación

### Configuración
- **Cache**: Configurar cache apropiado para el volumen de datos
- **Incremento**: Normalmente 1, ajustar según necesidades
- **Inicio**: Comenzar en 1 o valor específico según requerimientos

### Mantenimiento
- **Monitoreo**: Verificar el uso de secuencias periódicamente
- **Limpieza**: Eliminar secuencias no utilizadas
- **Backup**: Incluir secuencias en respaldos de esquema

## Compatibilidad

### Motores Soportados
- ✅ **Oracle**: Soporte completo
- ❌ **MySQL**: No aplicable (usa AUTO_INCREMENT)
- ❌ **PostgreSQL**: Usa SERIAL/IDENTITY
- ❌ **SQL Server**: Usa IDENTITY

### Alternativas en Otros Motores
```
-- MySQL
[Fields]
ID | id | 0 | H | 10 | | | AUTO_INCREMENT | |

-- PostgreSQL
[Fields]
ID | id | 0 | H | 10 | | | SERIAL | |
```

## Solución de Problemas

### Errores Comunes

1. **Secuencia no existe**
   ```
   ORA-00942: table or view does not exist
   ```
   - Verificar que la secuencia esté creada
   - Comprobar permisos de acceso

2. **Secuencia desincronizada**
   ```
   ORA-00001: unique constraint violated
   ```
   - Ajustar el valor actual de la secuencia
   - Verificar datos existentes

3. **Rendimiento lento**
   - Aumentar el cache de la secuencia
   - Revisar contención en secuencias muy utilizadas

### Comandos de Diagnóstico
```sql
-- Verificar secuencias existentes
SELECT sequence_name, last_number, cache_size 
FROM user_sequences;

-- Obtener siguiente valor
SELECT seq_nombre.NEXTVAL FROM dual;

-- Verificar valor actual
SELECT seq_nombre.CURRVAL FROM dual;
```

## Migración y Mantenimiento

### Cambio de Secuencia
```sql
-- Actualizar secuencia al máximo ID existente
ALTER SEQUENCE sq_tabla 
RESTART START WITH (SELECT MAX(id) + 1 FROM tabla);
```

### Limpieza de Secuencias
```sql
-- Eliminar secuencia no utilizada
DROP SEQUENCE seq_antigua;
```

### Monitoreo
- Revisar uso de cache
- Monitorear gaps en numeración
- Verificar rendimiento de inserción