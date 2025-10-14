# slSequence

## SINTAXIS

```
{slSequence} NmSequence
```

## DESCRIPCIÓN

Define el nombre de la secuencia para las sublistas cuando se trabaja con bases de datos Oracle, o especifica la constante "NO" para desactivar el uso de secuencias.

Las secuencias son objetos de base de datos que generan números únicos automáticamente, comúnmente utilizados para campos de clave primaria en Oracle.

## PARÁMETROS

### NmSequence
Puede ser uno de los siguientes valores:

- **Nombre de secuencia**: El nombre de la secuencia de Oracle que se utilizará para generar valores únicos
- **"NO"**: Constante que indica que no se debe usar ninguna secuencia

## EJEMPLOS

### Ejemplo con secuencia de Oracle

```
{slSequence} SEQ_FOTOS_ID
```

### Ejemplo desactivando secuencias

```
{slSequence} NO
```

### Ejemplo de implementación completa

```
[SubList]
a,A,mR,cR | fotos |
{slSql}
select id, codigo, nombre, archivo from fotos where codigo_padre='{codigo}' order by nombre
{slSequence}
SEQ_FOTOS_ID
{slMenu}
a,mR | Modificar:u, Insertar:i, Borrar:d | foto.edf | codigo=0, id=1
```