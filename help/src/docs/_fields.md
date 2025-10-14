# .fields()

## SINTAXIS
```javascript
S(selector).fields(dim)
```

## DESCRIPCIÓN
Gestiona campos de formulario de manera dinámica. Permite agregar, modificar o interactuar con campos de entrada según las dimensiones o parámetros especificados.

## PARÁMETROS
- `dim` (object|string|number): Parámetros de configuración para los campos. Puede ser:
  - Objeto con propiedades de configuración
  - String con nombre del campo
  - Number con cantidad de campos

## EJEMPLO
```javascript
// Configurar campos con objeto
S('#formulario').fields({
  nombre: 'text',
  email: 'email',
  edad: 'number'
});

// Crear múltiples campos
S('.container').fields(5); // Crea 5 campos de entrada

// Configurar campo específico
S('#miCampo').fields('usuario');

// Ejemplo con opciones avanzadas
S('.form-group').fields({
  tipo: 'select',
  opciones: ['Opción 1', 'Opción 2', 'Opción 3'],
  requerido: true
});
```

## NOTAS
- Útil para generación dinámica de formularios
- Puede trabajar con diferentes tipos de campos de entrada
- Permite configuración avanzada de campos