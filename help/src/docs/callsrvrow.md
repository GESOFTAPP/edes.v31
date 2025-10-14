# CallSrvRow

## Sintaxis

```
[CallSrvRow] url | NmFunction | TextProgress [ | TextEnd ]
```

## Descripción

Genera una llamada a la función especificada por cada fila del listado con la URL proporcionada, creando un proceso masivo que puede generar archivos para descarga o ejecutar acciones en lote.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| url | string | URL a ejecutar para obtener la información. Se añadirá automáticamente el nombre del campo serial y su valor en cada fila. Si el listado es paginado, procesará todos los registros, no solo los visibles | Requerido |
| NmFunction | string | Nombre de la función a llamar cuando se desencadene el proceso, normalmente será el onclick de un icono | Requerido |
| TextProgress | string | Texto a mostrar mientras se ejecuta cada línea del proceso | Requerido |
| TextEnd | string | Mensaje al descargar un ZIP con todos los documentos. Si no se especifica, no generará ZIP y solo informará que el proceso ha terminado | Opcional |

## Sintaxis

```
[CallSrvRow] url | NmFunction | TextProgress [ | TextEnd ]
```

## Ejemplos

### Ejemplo 1: Descarga masiva de facturas PDF

```
[CallSrvRow] edes.php?E:factura_pdf.php | uFuncion | Descargando factura | Grupo de facturas
[SubTitle] eAddButton("pdf", "Descargar todas las facturas", "uFuncion()");
```

**Archivo: factura_pdf.php**
```php
if( $_GET["_CALLSRVROW"]<>"" ){
    eCallSrvRow("../_tmp/php/{$cod_factu}.pdf");  // se le pasa el nombre del fichero a descargar
}
```

**Resultado:** Descargará un ZIP con todos los ficheros PDF indicados.

### Ejemplo 2: Envío masivo de emails

```
[CallSrvRow] edes.php?E:email.php | uFuncion | Enviando email
[SubTitle] eAddButton("email", "Enviar todos los email", "uFuncion()");
```

**Archivo: email.php**
```php
if( $_GET["_CALLSRVROW"]<>"" ){
    eCallSrvRow();  // no se le pasa ningún parámetro al no tener que descargar ningún fichero
}
```

**Resultado:** Enviará los emails (no descargará nada).

## Notas

- El proceso se ejecuta para **todas las filas** del listado, incluso en listados paginados
- El campo serial y su valor se añaden automáticamente a la URL
- Si se especifica `TextEnd`, se generará un archivo ZIP con todos los documentos procesados
- Si no se especifica `TextEnd`, solo se ejecutará el proceso sin generar descargas
- La función `eCallSrvRow()` en el archivo PHP determina si se genera un archivo para descarga