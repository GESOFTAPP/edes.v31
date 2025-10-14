# S.getCookie

## SINTAXIS
```javascript
S.getCookie([nmCookie])
```

## DESCRIPCIÓN
Te devuelve una matriz con todas las cookies o solo la pasada por parámetro a la función. Si no se especifica nombre, retorna un objeto con todas las cookies del documento.

## PARÁMETROS
- **nmCookie** (string, opcional): El nombre de la cookie específica que se desea obtener. Si se omite, retorna todas las cookies.

## EJEMPLO
```javascript
// Obtener una cookie específica
var sesionUsuario = S.getCookie("sessionId");
console.log(sesionUsuario); // Valor de la cookie "sessionId"

// Obtener todas las cookies
var todasLasCookies = S.getCookie();
console.log(todasLasCookies); // Objeto con todas las cookies
// Ejemplo: { sessionId: "abc123", theme: "dark", lang: "es" }

// Verificar si existe una cookie
var idioma = S.getCookie("language");
if (idioma) {
    console.log("Idioma configurado:", idioma);
} else {
    console.log("No hay idioma configurado");
}
```