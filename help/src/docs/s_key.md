# S.key

## SINTAXIS
```javascript
S.key(win, type, long, dec)
```

## DESCRIPCIÓN
Configura el manejo de teclas para elementos de entrada con validaciones específicas.

## PARÁMETROS
- `win` (object): Objeto window
- `type` (string): Tipo de entrada (text, number, etc.)
- `long` (number): Longitud máxima permitida
- `dec` (number): Número de decimales (para números)

## EJEMPLO
```javascript
// Configurar campo numérico con 2 decimales
S.key(window, "number", 10, 2);

// Configurar campo de texto
S.key(window, "text", 50, 0);
```