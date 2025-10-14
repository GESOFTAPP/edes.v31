# S.date

## SINTAXIS
```javascript
S.date(Formato, Fecha, mes, ano)
```

## DESCRIPCIÓN
Formatea una fecha según el formato especificado.

## PARÁMETROS
- **Formato**: String que especifica el formato de salida de la fecha
- **Fecha**: Día del mes (opcional)
- **mes**: Mes (opcional)
- **ano**: Año (opcional)

## EJEMPLO
```javascript
let fechaFormateada = S.date("dd/mm/yyyy", 15, 3, 2024);
console.log(fechaFormateada); // "15/03/2024"
```