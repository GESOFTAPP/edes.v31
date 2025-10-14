# Count

## Sintaxis
```
[Count] [TextoAMostrar / Función]
```

## Descripción
Realiza un conteo de registros de la base de datos y muestra el resultado en pantalla. Esta etiqueta únicamente funciona en los siguientes modos de operación:
- **"c"** (modo recomendado)
- **"b"** 
- **"m"**

## Ejemplos

### Ejemplo básico
```
[Count]
```

### Ejemplo con texto personalizado
```
[Count] Total de registros: #
```

### Ejemplo con función
```
[Count] MostrarReg( # )

[PHPIni] cR
function MostrarReg( $Valor ){
    // Se pasa el control a la función, el motor no genera ninguna salida
    ...
}
```

## Notas importantes
- El símbolo `#` representa el valor del conteo obtenido
- Cuando se especifica una función, el control se transfiere completamente a ella
- El motor no genera salida automática cuando se utiliza una función personalizada