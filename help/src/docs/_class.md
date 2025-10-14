# .class()

## SINTAXIS
```javascript
S().class(txt)
```

## DESCRIPCIÓN
Operaciones con el atributo "className":

1. `S(...).class()` - Devuelve el valor de className
2. `S(...).class("+NuevaClase[, ...]")` - Añade la clase indicada
3. `S(...).class("-BorrarClase[, ...]")` - Quita la clase indicada
4. `S(...).class("NuevaClase")` - Asigna la NuevaClase
5. `S(...).class("=NuevaClase")` - Asigna la NuevaClase
6. `S(...).class("/NuevaClase")` - Pone la clase si no la tiene y si la tiene la borra (toggle)
7. `S(...).class("?NuevaClase")` - Devuelve si el objeto tiene la clase indicada
8. `S(...).class(">Clase1,Clase2")` - Solo si tiene la clase "Clase1" le pone la clase "Clase2"

## PARÁMETROS
- **txt** (string, opcional): Operación a realizar con las clases

## EJEMPLO
```html
<span id="pk" class="clase1 clase2">..</span>
```

```javascript
S("#pk").class("-clase1,+clase3");
// Le quita la clase "clase1" y le añade la clase "clase3" 
// quedando className="clase2 clase3"

// Otros ejemplos
S("#pk").class(); // Devuelve "clase1 clase2"
S("#pk").class("+nueva"); // Añade clase "nueva"
S("#pk").class("-clase1"); // Quita clase "clase1"
S("#pk").class("?clase1"); // Verifica si tiene "clase1"
S("#pk").class("/activo"); // Toggle clase "activo"
```