# Documentación de Constantes JavaScript - Formularios e Iframes

## Descripción General

Las constantes JavaScript definen los elementos principales para la gestión de formularios y marcos de trabajo (iframes) en aplicaciones web con sistema de fichas y multifichas.

## Constantes Principales

### Tabla de Constantes JavaScript

| Constante | Tipo | Descripción | Uso | Ejemplo |
|-----------|------|-------------|-----|---------|
| `FRM1` | Formulario | Formulario principal en fichas simples | Acceso directo al formulario | `FRM1.campo.value` |
| `FRM2` | Formulario | Segundo formulario en multifichas | Acceso a segunda solapa | `FRM2.campo.value` |
| `FRMn` | Formulario | Formulario n en multifichas | Acceso a solapa n | `FRMn.campo.value` |
| `ICALL` | Iframe | Iframe oculto en desktop | Llamadas en segundo plano | `ICALL.src = 'url'` |
| `IWORK` | Iframe | Iframe de trabajo principal | Área de trabajo visible | `IWORK.FRM1.campo.value` |

## Estructura de Formularios

### Formularios Simples

En una ficha simple, se utiliza únicamente:

| Formulario | Descripción | Acceso |
|------------|-------------|--------|
| `FRM1` | Formulario único | `FRM1.nombreCampo.value` |

### Formularios Multificha

En sistema multificha, cada solapa tiene su propio formulario:

| Formulario | Solapa | Descripción | Acceso |
|------------|--------|-------------|--------|
| `FRM1` | Primera | Datos principales | `FRM1.nombreCampo.value` |
| `FRM2` | Segunda | Datos secundarios | `FRM2.nombreCampo.value` |
| `FRM3` | Tercera | Configuración | `FRM3.nombreCampo.value` |
| `FRMn` | n-ésima | Datos específicos | `FRMn.nombreCampo.value` |

## Gestión de Iframes

### ICALL - Iframe Oculto

| Propiedad | Descripción | Uso Típico |
|-----------|-------------|------------|
| **Visibilidad** | Oculto en desktop | Procesamiento en segundo plano |
| **Función** | Llamadas asíncronas | Validaciones, consultas AJAX |
| **Ubicación** | Desktop principal | Siempre disponible |

#### Ejemplo de Uso ICALL

```javascript
// Realizar llamada oculta
ICALL.src = 'procesar.php?accion=validar&campo=' + valor;

// Escuchar respuesta
ICALL.onload = function() {
    var resultado = ICALL.contentDocument.body.innerHTML;
    // Procesar resultado
};
```

### IWORK - Iframe de Trabajo

| Propiedad | Descripción | Uso Típico |
|-----------|-------------|------------|
| **Visibilidad** | Visible al usuario | Área de trabajo principal |
| **Función** | Contenido principal | Formularios, datos, interfaces |
| **Acceso** | `top.parent['IWORK']` | Acceso desde cualquier contexto |

#### Ejemplo de Uso IWORK

```javascript
// Acceder a campo en formulario principal
var valorCampo = top.parent['IWORK'].FRM1.nombreCampo.value;

// Modificar campo en segunda ficha
top.parent['IWORK'].FRM2.nombreCampo.value = 'nuevo valor';

// Enviar formulario
top.parent['IWORK'].FRM1.submit();
```

## Patrones de Acceso

### Acceso a Campos

| Contexto | Sintaxis | Ejemplo |
|----------|----------|---------|
| Directo | `FRM1.campo.value` | `FRM1.usuario.value` |
| Desde iframe | `top.parent['IWORK'].FRM1.campo.value` | `top.parent['IWORK'].FRM1.usuario.value` |
| Multificha | `FRM2.campo.value` | `FRM2.configuracion.value` |

### Manipulación de Formularios

#### Operaciones Básicas

| Operación | Sintaxis | Descripción |
|-----------|----------|-------------|
| Leer valor | `FRM1.campo.value` | Obtener valor del campo |
| Escribir valor | `FRM1.campo.value = 'valor'` | Establecer valor |
| Validar | `FRM1.campo.checkValidity()` | Validar campo |
| Enfocar | `FRM1.campo.focus()` | Dar foco al campo |
| Deshabilitar | `FRM1.campo.disabled = true` | Deshabilitar campo |

#### Operaciones Avanzadas

| Operación | Sintaxis | Descripción |
|-----------|----------|-------------|
| Enviar formulario | `FRM1.submit()` | Enviar datos |
| Resetear formulario | `FRM1.reset()` | Limpiar campos |
| Validar formulario | `FRM1.checkValidity()` | Validar todos los campos |

## Comunicación entre Contextos

### Desde Iframe Principal a IWORK

```javascript
// Acceder desde contexto principal
function accederIWORK() {
    var iframe = document.getElementById('IWORK');
    var valor = iframe.contentWindow.FRM1.campo.value;
    return valor;
}
```

### Desde IWORK a Contexto Principal

```javascript
// Acceder desde IWORK al padre
function accederPadre() {
    var valor = top.parent.variableGlobal;
    return valor;
}
```

## Ejemplos Prácticos

### Validación en Tiempo Real

```javascript
// Validar campo al cambiar
FRM1.email.onchange = function() {
    ICALL.src = 'validar_email.php?email=' + this.value;
};

ICALL.onload = function() {
    var resultado = JSON.parse(ICALL.contentDocument.body.innerHTML);
    if (!resultado.valido) {
        alert('Email inválido');
    }
};
```

### Navegación entre Fichas

```javascript
// Cambiar a segunda ficha
function cambiarFicha(numero) {
    // Ocultar todas las fichas
    for (var i = 1; i <= 5; i++) {
        var ficha = document.getElementById('ficha' + i);
        if (ficha) ficha.style.display = 'none';
    }
    
    // Mostrar ficha seleccionada
    document.getElementById('ficha' + numero).style.display = 'block';
}
```

### Sincronización de Datos

```javascript
// Sincronizar datos entre fichas
function sincronizarDatos() {
    // Datos de la primera ficha
    var nombre = FRM1.nombre.value;
    var email = FRM1.email.value;
    
    // Actualizar segunda ficha
    FRM2.nombre_confirmacion.value = nombre;
    FRM2.email_confirmacion.value = email;
}
```

## Mejores Prácticas

### Recomendaciones de Uso

| Aspecto | Recomendación | Motivo |
|---------|---------------|--------|
| Acceso a campos | Usar try-catch | Evitar errores si no existe |
| Validación | Validar antes de enviar | Mejor experiencia de usuario |
| Comunicación | Usar eventos personalizados | Mejor arquitectura |
| Rendimiento | Minimizar accesos DOM | Optimización |

### Gestión de Errores

```javascript
// Acceso seguro a campos
function obtenerValorCampo(formulario, campo) {
    try {
        return window[formulario][campo].value;
    } catch (e) {
        console.error('Campo no encontrado:', formulario, campo);
        return '';
    }
}
```

## Compatibilidad y Consideraciones

### Navegadores Soportados

| Navegador | Soporte | Notas |
|-----------|---------|-------|
| Chrome | ✅ | Completo |
| Firefox | ✅ | Completo |
| Safari | ✅ | Completo |
| Edge | ✅ | Completo |
| IE11 | ⚠️ | Funcionalidad limitada |

### Consideraciones de Seguridad

| Aspecto | Recomendación | Motivo |
|---------|---------------|--------|
| Validación | Siempre validar en servidor | Seguridad |
| Sanitización | Limpiar datos antes de enviar | Prevenir XSS |
| Contexto | Verificar origen de datos | Evitar manipulación |

## Notas Importantes

- **Contexto**: Siempre verificar el contexto desde donde se accede
- **Existencia**: Comprobar que los elementos existen antes de acceder
- **Sincronización**: Mantener coherencia entre fichas
- **Rendimiento**: Minimizar accesos frecuentes al DOM
- **Debugging**: Usar console.log para depurar accesos complejos