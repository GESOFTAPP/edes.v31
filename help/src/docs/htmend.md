# HTMEnd

## Sintaxis

```
[HTMEnd] Mode [ | NomDF/else,... [ | UNIQUE/Condition ] ] ...
```

## Descripción

Añade código HTML justo antes del final del BODY, es decir, antes de la etiqueta `</body>`.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Mode | HTML | Código HTML que se insertará antes del cierre del body |
| NomDF/else | Opcional | Nombre del dataframe o condición alternativa |
| UNIQUE/Condition | Opcional | Condición única o filtro específico |

## Ejemplos

### Ejemplo básico
```
[HTMEnd] <!-- Copyright 2025 by Empresa S.L -->
```

### Ejemplo con script
```
[HTMEnd] <script>console.log('Página cargada');</script>
```

### Ejemplo con múltiples elementos
```
[HTMEnd] 
<div id="footer">
    <p>&copy; 2025 Empresa S.L. Todos los derechos reservados.</p>
</div>
<script src="analytics.js"></script>
```