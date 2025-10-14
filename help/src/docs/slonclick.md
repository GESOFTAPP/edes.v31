# slOnClick

## SINTAXIS

```
{slOnClick} NomFuncJS
```

## DESCRIPCIÓN

Permite asignar un evento OnClick a la tabla de la SubLista, desviando la ejecución hacia una función JavaScript personalizada del usuario.

Cuando se hace clic en cualquier fila de la sublista, se ejecutará la función JavaScript especificada.

## PARÁMETROS

### NomFuncJS
Nombre de la función JavaScript a ejecutar cuando se hace clic en una fila de la sublista.

**Importante:** Se debe especificar solo el nombre de la función, sin paréntesis ni parámetros.

## EJEMPLO

```
{slOnClick} miFuncionPersonalizada
```

### Ejemplo de implementación completa

```javascript
// Función JavaScript que se ejecutará al hacer clic
function miFuncionPersonalizada() {
    // Lógica personalizada aquí
    alert('Se hizo clic en la fila de la sublista');
}
```

```
[SubList]
a,A,mR,cR | datos |
{slSql}
select id, nombre, descripcion from tabla_datos where parent_id='{id}' order by nombre
{slOnClick}
miFuncionPersonalizada
```