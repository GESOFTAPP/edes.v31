# Card

## Sintaxis

```
[Card] Mode | %, MínimoAncho [,MáximoAncho] | ... | AnchoEnPx|Separación (%,min,max / default)
```

## Descripción

**Card** convierte las fichas tradicionales en tarjetas (cards) con diseño responsive. Esta funcionalidad permite crear interfaces más modernas y adaptables a diferentes tamaños de pantalla.

### Características Principales

- **Diseño Responsive**: Las cards se adaptan automáticamente al tamaño de pantalla
- **Múltiples Cards**: Posibilidad de tener varias cards en el mismo formulario
- **Tamaños Flexibles**: Control de ancho mínimo, máximo y porcentaje
- **Card Única**: Usar "u" (unique) para que la card ocupe toda la fila

## Sintaxis de Parámetros

### Estructura Básica
```
[Card] Mode | Porcentaje,AnchoMínimo,AnchoMáximo | ... | Separación
```

| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Mode** | Modos de aplicación (a, m, c, b, R, ?) | `a,?R` |
| **Porcentaje** | Porcentaje del ancho de pantalla | `50` |
| **AnchoMínimo** | Ancho mínimo en píxeles | `400` |
| **AnchoMáximo** | Ancho máximo en píxeles | `600` |
| **Separación** | Separación entre cards | `default` |

### Modificadores Especiales

| Modificador | Descripción | Uso |
|-------------|-------------|-----|
| **u** | Unique - Card sola en la fila | `50u,400,600` |
| **default** | Separación por defecto | Al final de la definición |

## Ejemplos Prácticos

### Ejemplo 1: Card Simple

```
[Card] ? | 50,400,600 | default
```

**Resultado**: En modo consulta (`?`) se mostrará una card que:
- Tomará el **50%** de la pantalla si el espacio lo permite
- Tendrá un **ancho mínimo** de 400px
- Tendrá un **ancho máximo** de 600px
- Usará la separación por defecto

### Ejemplo 2: Dos Cards en la Misma Fila

```
[Card] else | 50,400,600 | 50,400,600 | default
```

**Resultado**: Habrá **dos cards** con las mismas proporciones:
- Cada una tomará el 50% del espacio disponible
- Ambas con ancho mínimo de 400px y máximo de 600px

### Ejemplo 3: Formulario Completo con Múltiples Cards

```
[Card] a,?R | 50,200,600 | 50,400,600 | default

[Fields] a,?R
    - |Datos básicos
    Serial  | cd_exp  | + | T |   9 | | A     | |   |
    N.Ref.  | nref    | D | T |  15 | | MQcp  | | # |
    
    {card}
    
    - |Otros datos
    S.Ref.  | sref    | D | T |  40 | | MQcp  | | # |
    Fichero | fichero | f | F | 150 | | MDCPS | |   |
```

**Explicación del Ejemplo**:
1. **Primera Card**: Ancho mínimo 200px, máximo 600px, 50% de pantalla
2. **Segunda Card**: Ancho mínimo 400px, máximo 600px, 50% de pantalla
3. **Separador `{card}`**: Indica dónde empieza la nueva card dentro de Fields

### Ejemplo 4: Card Única (Unique)

```
[Card] a,m | 80u,600,1000 | default
```

**Resultado**: 
- Card única que ocupa toda la fila
- 80% del ancho de pantalla
- Ancho mínimo 600px, máximo 1000px

### Ejemplo 5: Cards Responsivas para Diferentes Modos

```
[Card] a,m | 100u,300,800 | default    // Modo alta/modificación
[Card] ?   | 45,350,600 | 45,350,600 | 10px    // Modo consulta con dos cards
```

## Implementación en Fields

### Estructura Básica
```
[Fields] modo
    - |Título de la primera sección
    Campo1 | valor1 | ... |
    Campo2 | valor2 | ... |
    
    {card}  // ← Separador para nueva card
    
    - |Título de la segunda sección
    Campo3 | valor3 | ... |
    Campo4 | valor4 | ... |
```

### Ejemplo Completo con Tres Cards

```
[Card] a,mR | 33,200,400 | 33,200,400 | 33,200,400 | 5px

[Fields] a,mR
    - |Información Personal
    Nombre    | nombre    | D | T | 30 | | M | | # |
    Apellidos | apellidos | D | T | 50 | | M | | # |
    
    {card}
    
    - |Información de Contacto
    Email     | email     | D | T | 50 | | M | | # |
    Teléfono  | telefono  | D | T | 15 | | M | | # |
    
    {card}
    
    - |Información Adicional
    Notas     | notas     | D | A | 100,60,3 | | - | | |
    Fecha     | fecha     | D | T | 10 | | M | | # |
```

## Comportamiento Responsive

### Breakpoints Automáticos

| Ancho de Pantalla | Comportamiento |
|-------------------|----------------|
| **< Ancho Mínimo** | Card toma el ancho mínimo |
| **Entre Min y Max** | Card toma el porcentaje definido |
| **> Ancho Máximo** | Card toma el ancho máximo |

### Ejemplo de Comportamiento

Para `[Card] ? | 50,400,600 | default`:

```
Pantalla 800px  → Card: 400px (50% de 800 = 400, que es el mínimo)
Pantalla 1000px → Card: 500px (50% de 1000 = 500, entre min y max)
Pantalla 1400px → Card: 600px (50% de 1400 = 700, pero max es 600)
```

## Casos de Uso Comunes

### 1. **Formulario de Datos Personales**
```
[Card] a,m | 60,500,800 | default
```
- Ideal para formularios de una sola columna
- Centrado y responsive

### 2. **Dashboard con Múltiples Secciones**
```
[Card] ? | 30,250,400 | 30,250,400 | 30,250,400 | 10px
```
- Tres columnas en pantallas grandes
- Se reorganizan automáticamente en móviles

### 3. **Formulario Maestro-Detalle**
```
[Card] a,m | 70u,600,1000 | default    // Datos principales
[Card] ?   | 100u,400,1200 | default   // Lista de detalles
```

### 4. **Formulario Responsive**
```
[Card] a,m,? | 45,300,600 | 45,300,600 | 5px
```
- Dos columnas en desktop
- Una columna en móvil automáticamente

## Buenas Prácticas

### 🎯 **Diseño**
- **Mantener consistencia** en los tamaños entre cards relacionadas
- **Usar separaciones adecuadas** (5px-15px) entre cards
- **Considerar el contenido** al definir anchos mínimos y máximos

### 📱 **Responsive**
- **Anchos mínimos** no menores a 250px para móviles
- **Anchos máximos** no mayores a 1200px para desktop
- **Porcentajes equilibrados** que sumen 100% o menos

### 🔧 **Implementación**
- **Definir cards antes** de los Fields
- **Usar `{card}` correctamente** para separar secciones
- **Probar en diferentes tamaños** de pantalla

## Troubleshooting

### Problemas Comunes

| Problema | Causa | Solución |
|----------|-------|----------|
| Cards no se muestran | Sintaxis incorrecta | Verificar formato de parámetros |
| Cards muy estrechas | Ancho mínimo muy bajo | Aumentar el valor mínimo |
| Cards no responsive | Falta configuración | Revisar porcentajes y breakpoints |
| Separación incorrecta | `{card}` mal ubicado | Colocar entre secciones de Fields |

### Validación de Configuración

```javascript
// Ejemplo de validación en JavaScript
function validarCard(porcentaje, minimo, maximo) {
    if (minimo > maximo) {
        console.error("El ancho mínimo no puede ser mayor al máximo");
        return false;
    }
    if (porcentaje < 10 || porcentaje > 100) {
        console.error("El porcentaje debe estar entre 10 y 100");
        return false;
    }
    return true;
}
```

## Compatibilidad

### Navegadores Soportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos
- 📱 **Mobile**: Cards se reorganizan automáticamente
- 💻 **Desktop**: Mantiene el layout definido
- 📱 **Tablet**: Comportamiento híbrido según orientación

## Notas Importantes

1. **Orden de Definición**: Las cards deben definirse antes que los Fields
2. **Separador `{card}`**: Obligatorio para múltiples cards
3. **Unique Modifier**: Una card con "u" ocupa toda la fila
4. **Responsive Automático**: El sistema calcula automáticamente los breakpoints
5. **Separación**: Usar píxeles o "default" para espaciado entre cards