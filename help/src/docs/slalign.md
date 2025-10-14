# slAlign

## Sintaxis
```
{slAlign} AlignType_Col1 [,AlignType_Col2]...[,AlignType_ColN]
```

## Descripción
Permite alinear u ocultar los datos de las columnas de las sublistas, proporcionando control sobre la presentación visual de la información tabular.

## Parámetros

### AlignType_Col
Define el tipo de alineación de los datos para cada columna. Los valores disponibles son:

| Tipo | Descripción |
|------|-------------|
| `L` o vacío | Alinear a la izquierda |
| `C` | Centrar |
| `R` | Alinear a la derecha |
| `H` | Ocultar columna |
| `T` | Oculta la columna y pone el valor como "title" de cada fila |

### Alineación Condicional
Si en el `AlignType` está presente el carácter `\`, indica que:
- El tipo a la **izquierda** del `\` se aplica en los modos `"a"` y `"mR"`
- El tipo a la **derecha** del `\` se aplica en el resto de modos

**Ejemplo común:** `C\H`
- En modos `"a"` y `"mR"`: se ve la columna centrada
- En otros modos: la columna se oculta

## Ejemplo de Uso

### Configuración en `d/vi/v_calidad.edf`

```html
<   | [fotos] | o | | | | | | | [SubList] a,A,mR,cR | fotos |
  {slSql} select codigo,cd_foto,nm_foto,fichero,ver,imprimir,fichero 
          from foto 
          where codigo='{codigo}' 
          order by nm_foto
  
  {slTH} codigo,cd_foto,DESCRIPCION,FICHERO,Ver,Imp,<img src='g/album.gif' onclick="VerAlbum()" title='Ver album'>
  
  {slAlign} H,H,L,L,C,C,C
  
  {slFormat} ,,,,,,<img src='g/d_@.gif' onclick='VerFoto()' title='_@_'>
  
  {slTipIcon} gif,Ver foto; jpg,Ver foto; png,Ver foto; avi, Ver película
  
  {slWin} ,7
  
  {slMenu} a,mR | Alta:Fa, Modificar:FmR, Baja:FbR | foto | codigo=0, cd_foto=1
```

### Configuración en `d/fotos.df`

```
[SubListDF] fotos | d/vi/v_fotos | codigo
```

### Explicación del Ejemplo

En este ejemplo, `{slAlign} H,H,L,L,C,C,C` establece:

1. **Columna 1 (codigo):** `H` - Oculta
2. **Columna 2 (cd_foto):** `H` - Oculta  
3. **Columna 3 (nm_foto):** `L` - Alineación izquierda
4. **Columna 4 (fichero):** `L` - Alineación izquierda
5. **Columna 5 (ver):** `C` - Centrado
6. **Columna 6 (imprimir):** `C` - Centrado
7. **Columna 7 (fichero):** `C` - Centrado

## Notas Importantes

- Los tipos de alineación deben separarse por comas
- El número de tipos debe corresponder con el número de columnas en la consulta SQL
- La alineación condicional con `\` es útil para mostrar diferentes presentaciones según el modo de visualización
- Las columnas ocultas (`H`) no se muestran al usuario pero sus datos siguen disponibles para procesamiento interno