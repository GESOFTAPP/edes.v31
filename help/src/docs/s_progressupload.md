# S.progressUpload

## SINTAXIS
```javascript
S.progressUpload(pct, txt)
```

## DESCRIPCIÓN
Actualiza el progreso de una subida de archivo con porcentaje y texto.

## PARÁMETROS
- `pct` (number): Porcentaje de progreso (0-100)
- `txt` (string): Texto descriptivo del progreso

## EJEMPLO
```javascript
S.progressUpload(25, "Subiendo archivo...");
S.progressUpload(75, "Procesando datos...");
S.progressUpload(100, "Subida completada");
```