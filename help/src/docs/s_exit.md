# S.exit

## SINTAXIS
```javascript
S.exit(["login"])
```

## DESCRIPCIÓN
Salir de la aplicación, con la constante "login" irá a la página de "login"

## PARÁMETROS
- `route` (array): Array opcional con la ruta de destino. Si se especifica "login", redirige a la página de login

## EJEMPLO
```javascript
// Salir normal
S.exit();

// Salir y redirigir al login
S.exit(["login"]);
```