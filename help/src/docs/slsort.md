# slSort

## SINTAXIS

```
{slSort} CampoDeOrdenación [ | manual ]
```

## DESCRIPCIÓN

Reordena de forma automática las filas de una sublista según el campo especificado. Permite establecer un orden dinámico de los registros mostrados en la sublista.

## PARÁMETROS

### CampoDeOrdenación  
Nombre del campo por el que se reordenará la sublista.

**Características:**
- Solo se puede especificar un campo
- Si el campo tiene alias, se debe usar el alias
- Es obligatorio especificar este parámetro

### manual
Constante opcional que indica que la ordenación se hará de forma manual.

**Importante:** Cuando se usa `manual`, el campo especificado debe estar oculto en la visualización de la sublista.

## EJEMPLOS

### Ejemplo básico con ordenación automática

```
{slSort} a.dt_entrada
```

### Ejemplo con ordenación manual

```
{slSort} orden_manual | manual
```

### Ejemplo con alias de campo

```
{slSort} fecha_modificacion
```

### Ejemplo de implementación completa

```
[SubList]
a,A,mR,cR | documentos |
{slSql}
select id, nombre, a.dt_entrada, descripcion from documentos a where codigo_padre='{codigo}' order by nombre
{slSort}
a.dt_entrada
{slMenu}
a,mR | Modificar:u, Insertar:i, Borrar:d | documento.edf | codigo=0, id=1
```

### Ejemplo con ordenación manual

```
[SubList]
a,A,mR,cR | items |
{slSql}
select id, nombre, orden_manual, descripcion from items where codigo_padre='{codigo}' order by orden_manual
{slSort}
orden_manual | manual
{slTH}
id,NOMBRE,,DESCRIPCIÓN
```