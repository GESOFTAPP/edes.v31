# eNum2String

## Descripción
Convierte un número en formato texto. Para utilizar la función se debe cargar mediante `eInclude('lib')`.

## Sintaxis
```php
eNum2String($Numero, $NumDecimales=0, $FormatoSalida='L', $SufijoEntero='', $SufijoDecimal='')
```

## Parámetros
- **$Numero**: Número a pasar a texto
- **$NumDecimales**: Número de decimales (por defecto 0)
- **$FormatoSalida**: Formato de salida
  - `U` - Upper (mayúsculas)
  - `L` - Lower (minúsculas)
  - `C` - Capitalize (primera letra mayúscula)
- **$SufijoEntero**: Sufijo a añadir después de la parte entera. Se puede utilizar el símbolo "/" para construir el plural
- **$SufijoDecimal**: Sufijo a añadir después de la parte decimal. Se puede utilizar el símbolo "/" para construir el plural

## Funcionalidad
Esta función permite convertir números a texto con formato personalizado, incluyendo decimales y sufijos con soporte para plurales automáticos.

## Ejemplos
```php
// Ejemplo básico con euros
echo eNum2String($Importe, 2, 'U', ' euro/s', ' centimo/s');

// Ejemplo con formato en minúsculas
echo eNum2String(1234.56, 2, 'L', ' unidad/es', ' fracción/es');

// Ejemplo con capitalización
echo eNum2String(42, 0, 'C', ' elemento/s');
```