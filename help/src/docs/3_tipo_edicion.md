# Tipo edición

## Descripción General

Los tipos de edición definen qué tipo de control de validación se aplica a un campo, restringiendo los patrones de caracteres que el usuario puede introducir. 

> **Nota importante**: Los números y las fechas no admiten el asterisco (*) en las búsquedas.

---

## Tipos de Edición Disponibles

### 📞 Comunicación y Contacto

| Código | Descripción | Características |
|--------|-------------|-----------------|
| `T` | **Teléfono** | Obligatorio 9 caracteres. Si está activo 3CX, aparece icono para llamar |
| `@` | **Email** | Dirección de correo electrónico |
| `W` | **Web** | Dirección web. Si el campo es "facebook" o "twitter" muestra logo específico |

#### Funcionalidad de Teléfono
Para personalizar el comportamiento del teléfono, se puede usar la función:

```javascript
function FUNCTION_phone(tlf) {
    return false;    // Bloquea la acción
    return tlf;      // Mantiene el número original
    return newtlf;   // Devuelve número modificado
}
```

---

### 🔢 Números y Códigos

| Código | Descripción |
|--------|-------------|
| `0` | **Solo números** (tipo string) |
| `+` | **Números positivos** |
| `-` | **Números positivos y negativos** |
| `+,` | **Números positivos con decimales** |
| `-,` | **Números positivos y negativos con decimales** |

---

### 🆔 Identificación Personal

| Código | Descripción | Validación |
|--------|-------------|------------|
| `DNI` | **DNI completo** | Letra del NIF si longitud=1, NIF completo si longitud=9 |
| `nif` | **DNI/NIF flexible** | Acepta DNI y NIF de 9 caracteres, formatea con ceros |
| `NIF` | **NIF específico** | Validación estricta de NIF |
| `CIF` | **CIF de empresa** | Validación completa de CIF |
| `cif` | **CIF simplificado** | Solo verifica que los 7 caracteres centrales sean números |
| `NSS` | **Seguridad Social** | Número de 11 caracteres |

---

### 📍 Ubicación y Dirección

| Código | Descripción |
|--------|-------------|
| `CP` | **Código Postal** |
| `D` | **Dirección en mayúsculas** |
| `d` | **Dirección en minúsculas** |
| `#D` | **Dirección con mayúsculas y minúsculas** |

---

### 👤 Nombres y Texto

| Código | Descripción |
|--------|-------------|
| `N` | **Nombre en mayúsculas** |
| `n` | **Nombre en minúsculas** |
| `#N` | **Nombre con mayúsculas y minúsculas** |
| `X` | **Cualquier texto en mayúsculas** |
| `x` | **Cualquier texto en minúsculas** |
| `#X` | **Cualquier texto con mayúsculas y minúsculas** |

---

### 📁 Archivos y Sistema

| Código | Descripción |
|--------|-------------|
| `f` | **Nombre de archivo en minúsculas** |
| `F` | **Nombre de archivo en mayúsculas** |
| `C` | **Password/Clave** |

---

### 📅 Fechas y Tiempo

| Código | Descripción | Formato |
|--------|-------------|---------|
| `CDI` | **Fecha y hora completa** | AAAA-MM-DD HH:MM:SS |
| `F4` | **Fecha con año de 4 dígitos** | AAAA-MM-DD |
| `P4` | **Periodo con año de 4 dígitos** | AAAA |
| `H` | **Hora** | HH:MM |

---

### 💳 Financiero

| Código | Descripción |
|--------|-------------|
| `DC` | **Dígitos de control** (cuenta corriente) |
| `TC` | **Tarjeta de crédito** (solo número, sin validación) |

---

### 🎨 Especiales

| Código | Descripción |
|--------|-------------|
| `#` | **Campo de notas** (textarea, permite retornos de carro) |
| `#L` | **Notas en minúsculas** |
| `#U` | **Notas en mayúsculas** |
| `*` | **Campo autoincremental** (no se graba) |
| `CLR` | **Color hexadecimal** |
| `IP` | **Dirección IP** |

---

## Configuraciones Especiales

### Evitar Filtrado de Caracteres

Para deshabilitar el filtrado de caracteres en un campo:

```
[AddCode] a,mR | campo | I | NotFilter=1
```

### Permitir Acentos

Para que un campo admita caracteres acentuados:

```
[AddCode] a,mR | campo | I | eAccent=1
```

### Comportamiento del Valor Cero

Para campos numéricos, se puede controlar cómo se muestra el valor cero usando la variable `_ShowZero`:

```javascript
[JSIni] 
_ShowZero = 1;  // Siempre muestra el cero
_ShowZero = 0;  // Campo vacío si es cero (por defecto)
_ShowZero = -1; // Muestra cero solo si se introduce explícitamente
```

#### Configuración Global

Para definir el comportamiento globalmente, editar el archivo `group.var` en la sección `Tab` con la propiedad `ShowZero`.

---

## Resumen de Uso

Los tipos de edición proporcionan una validación automática del lado cliente, mejorando la experiencia del usuario y garantizando la integridad de los datos. La elección del tipo correcto depende del contexto y los requisitos específicos del campo en cuestión.