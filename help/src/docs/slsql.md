# slSql

## SINTAXIS

### Sintaxis simple (una línea)
```
{slSql} Sql [ | CampoSerial [ | CampoFile [ | CampoDondeSeGuardaElFichero [ | AddWhere ] ] ] ]
```

### Sintaxis multilínea
```
{slSql} Sql...
Sql..
... [ | CampoSerial [ | CampoFile [ | CampoDondeSeGuardaElFichero [ | AddWhere ] ] ] ]
```

## DESCRIPCIÓN

Define la consulta SQL para la extracción de datos de la Sublista. Esta consulta determina qué registros y campos se mostrarán en la sublista.

### Consideraciones importantes

- **No incluir campo padre**: En los campos a seleccionar no se puede incluir el campo de la tabla padre
- **Comodines disponibles**: La lista de campos se puede sustituir por:
  - `#` - Selecciona todos los campos
  - `*` - Selecciona todos los campos
- **Variables**: Se pueden usar variables del formulario padre entre llaves `{variable}`

## PARÁMETROS

| Parámetro | Obligatorio | Descripción |
|-----------|-------------|-------------|
| **Sql** | Sí | La consulta SQL que define los datos a mostrar en la sublista |
| **CampoSerial** | No | Campo que actúa como identificador serial o secuencial de los registros |
| **CampoFile** | No | Campo que contiene referencias a archivos |
| **CampoDondeSeGuardaElFichero** | No | Campo donde se almacena la ruta o nombre del fichero |
| **AddWhere** | No | Condición WHERE adicional que se añade a la consulta |

## EJEMPLOS

### Ejemplo básico
```sql
{slSql} select codigo,cd_foto,nm_foto,fichero,fichero from foto where codigo='{codigo}'
```

### Ejemplo con comodines
```sql
{slSql} select # from tabla where campo_padre='{id}'
```

### Ejemplo multilínea complejo
```sql
{slSql} 
select # from *redis*old o
    left join auto a on o.cd_auto=a.cd_auto
    left join prov p on o.cd_prov=p.cd_prov
    left join coma c on (o.cd_prov=c.cd_prov and o.cd_coma=c.cd_coma)
    left join muni m on (o.cd_prov=m.cd_prov and o.cd_muni=m.cd_muni)
    left join distri d on (o.cd_prov=d.cd_prov and o.cd_muni=d.cd_muni and o.cd_distri=d.cd_distri)
where o.cd_redis_new = '{cd_redis_new}'
order by a.nm_auto,p.nm_prov,c.nm_coma,m.nm_muni
| o.cd_redis_old
```

### Ejemplo con parámetros adicionales
```sql
{slSql} 
select id, nombre, archivo, ruta_archivo, activo 
from documentos 
where codigo_padre='{codigo}' and activo=1
order by nombre
| id | archivo | ruta_archivo | activo=1
```

### Ejemplo de implementación completa en SubList
```
[SubList]
a,A,mR,cR | fotos |
{slSql}
select codigo,cd_foto,nm_foto,fichero,ver,imprimir,'' 
from foto 
where codigo='{codigo}' 
order by nm_foto
{slTH}
codigo,cd_foto,DESCRIPCIÓN,FICHERO,Ver,Imp,Acciones
{slMenu}
a,mR | Modificar:u, Insertar:i, Borrar:d | foto.edf | codigo=0, cd_foto=1
```