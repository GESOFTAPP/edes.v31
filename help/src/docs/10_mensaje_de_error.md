# Mensaje de error

## Descripción General

El décimo parámetro de la definición de campos (`[Fields]`) permite personalizar el mensaje de error que se mostrará cuando la validación del campo falle o no se cumpla la condición especificada.

## Funcionalidad

Este parámetro controla el mensaje que aparecerá cuando:
- El campo no esté rellenado correctamente
- No se cumpla la condición definida en el parámetro 9
- Falte información requerida en el campo

## Formato del Mensaje

El mensaje puede contener códigos especiales como:
- `\n` - Salto de línea
- `\t` - Tabulación
- Otros códigos de escape estándar

## Tres Modos de Funcionamiento

### 1. Mensaje Automático (Campo Vacío)

**Sintaxis:** Dejar el parámetro en blanco
```
Etiqueta | campo | tipo | control | longitud | ancho | modo | defecto | condicion | 
```

**Comportamiento:**
- El sistema genera automáticamente el mensaje
- Utiliza la "Etiqueta" definida en el primer parámetro
- Formato: `"Falta introducir el campo '[Etiqueta]'"`

**Variaciones del mensaje automático:**
- `"Falta rellenar [Etiqueta]"`
- `"Falta introducir [Etiqueta]"`
- `"Error en [Etiqueta]"`

### 2. Mensaje Personalizado

**Sintaxis:** Escribir el texto del mensaje directamente
```
Etiqueta | campo | tipo | control | longitud | ancho | modo | defecto | condicion | Mi mensaje personalizado
```

**Comportamiento:**
- Muestra el texto personalizado seguido del mensaje por defecto del sistema
- Combina el mensaje custom con el mensaje estándar

### 3. Mensaje con Etiqueta Personalizada

**Sintaxis:** `L:[Texto]`
```
Etiqueta | campo | tipo | control | longitud | ancho | modo | defecto | condicion | L:Nombre Personalizado
```

**Comportamiento:**
- Utiliza el texto después de `L:` como nombre del campo en el mensaje
- Formato: `"Falta introducir el campo '[Nombre Personalizado]'"`
- Útil cuando no se quiere mostrar el nombre del campo en la interfaz pero sí en los errores

## Casos de Uso Prácticos

### Ejemplo 1: Campos Relacionados sin Etiqueta

```
Localidad/CP | nm_loca | N | T | 30 | | M | | # | 
             | cd_post | 0 | T | 5  | | M | | # |
```

**Problema:** El segundo campo no tiene etiqueta, generará un error vacío.

**Solución:**
```
Localidad/CP | nm_loca | N | T | 30 | | M | | # | 
             | cd_post | 0 | T | 5  | | M | | # | L:Código Postal
```

**Resultado:**
- Campo 1: `"Falta introducir el campo 'LOCALIDAD/CP'"`
- Campo 2: `"Falta introducir el campo 'CÓDIGO POSTAL'"`

### Ejemplo 2: Mensaje Completamente Personalizado

```
Email | email | N | T | 50 | | M | | # | Por favor, introduce una dirección de email válida
```

### Ejemplo 3: Campo Opcional con Mensaje Específico

```
Observaciones | obs | N | A | 200 | | - | | | Este campo es opcional pero recomendado
```

## Recomendaciones de Uso

### ✅ Buenas Prácticas

1. **Usar L:** para campos sin etiqueta visible
2. **Mensajes claros y específicos** para validaciones complejas
3. **Consistencia** en el tono de los mensajes
4. **Incluir información útil** sobre cómo corregir el error

### ❌ Evitar

1. Mensajes demasiado técnicos para usuarios finales
2. Dejar campos requeridos sin etiqueta y sin L:
3. Mensajes muy largos que no se ajusten a la interfaz
4. Inconsistencia en el estilo de mensajes

## Integración con Otros Parámetros

El mensaje de error trabaja en conjunto con:

- **Parámetro 1 (Etiqueta):** Se usa como referencia por defecto
- **Parámetro 7 (Modo):** Determina si el campo es obligatorio
- **Parámetro 9 (Condición):** Define cuándo se activa el error

## Consideraciones Técnicas

- Los mensajes se procesan en el lado del servidor
- Pueden integrarse con sistemas de internacionalización
- Soportan HTML básico para formato (verificar implementación específica)
- Se pueden combinar con validaciones JavaScript del lado cliente

## Ejemplo Completo

```
# Formulario de Registro
DNI           | dni      | DNI | T | 8  | 100 | A | | # | L:Documento de Identidad
Apellidos     | apellido | N   | T | 30 | 300 | - | | # | 
Nombre        | nombre   | N   | T | 20 | 200 | - | | # |
Email         | email    | N   | T | 50 | 300 | M | | # | Introduce un email válido (ej: user@domain.com)
Teléfono      | telefono | 0   | T | 12 | 150 | - | | # | L:Número de Teléfono
```

Este ejemplo muestra diferentes aproximaciones para manejar los mensajes de error según las necesidades específicas de cada campo.