# .init

## SINTAXIS
```javascript
S().init(window, listaCSS, ...)
```

## DESCRIPCIÓN
Inicializa la librería S con el contexto de ventana especificado y una lista de selectores CSS.

## PARÁMETROS
- **window** (Object): El objeto window del contexto donde se ejecutará S
- **listaCSS** (String): Lista de selectores CSS separados por comas
- **...** (Mixed): Parámetros adicionales opcionales

## EJEMPLO
```javascript
S().init(window, "all,list");
```

---

# .extend

## SINTAXIS
```javascript
S().extend(objeto, propiedades)
```

## DESCRIPCIÓN
Extiende un objeto con las propiedades de otro objeto.

## PARÁMETROS
- **objeto** (Object): Objeto destino a extender
- **propiedades** (Object): Propiedades a añadir al objeto destino

## EJEMPLO
```javascript
S().extend(miObjeto, {nueva: "propiedad"});
```

---

# .clone

## SINTAXIS
```javascript
S().clone(elemento)
```

## DESCRIPCIÓN
Crea una copia profunda de un elemento DOM.

## PARÁMETROS
- **elemento** (Element): Elemento DOM a clonar

## EJEMPLO
```javascript
S().clone(document.getElementById("miDiv"));
```

---

# .fnExtend

## SINTAXIS
```javascript
S().fnExtend(nombre, funcion)
```

## DESCRIPCIÓN
Extiende el prototipo de S con nuevas funciones personalizadas.

## PARÁMETROS
- **nombre** (String): Nombre del nuevo método
- **funcion** (Function): Función a añadir al prototipo

## EJEMPLO
```javascript
S().fnExtend("miMetodo", function(parametro) {
    // código personalizado
});
```