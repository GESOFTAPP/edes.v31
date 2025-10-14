# 5. Longitud del Campo

## DESCRIPCIÓN
Indica la cantidad de caracteres que el campo puede contener como máximo.

## FORMATOS SEGÚN TIPO DE CAMPO

### 📊 Campos con Decimales
Para campos que contienen decimales, se indica de la forma:
```
DígitosEnteros,DígitosDecimales
```

**Ejemplo:**
- `3,2` → tres dígitos para la parte entera y dos para los decimales

---

### 📋 Campos SELECT
Para controles de tipo "select" se puede definir el ancho del valor interno y del externo, así como el alto del select:
```
LongitudValue,LongitudInnerText[,AltoSelect]
```

> **Nota:** *(futuro)* Si en "AltoSelect" ponemos `-1`, el alto será el número total de opciones.

---

### 📝 Campos TEXTAREA (Tipo `#`)
Para campos TEXTAREA se especifica:
```
LongitudTotal,Ancho,Alto
```

**Ejemplo:**
- `250,100,5` → Longitud total de 250 caracteres, ancho 100, alto 5

**Para longitud ilimitada:**
- `-1,100,5` → Sin límite de longitud, ancho 100, alto 5

---

### 🎨 Campos TEXTAREA con HTML (Tipo `H`)
Para campos TEXTAREA con soporte HTML (tipo `H` en columna 3):
```
LongitudTotal,Ancho,Alto[,TamañoMáximoImagen]
```

**Ejemplo:**
- `750000,100,10,50000` → Longitud 750000, ancho 100, alto 10, imágenes hasta 50KB

**Configuración de imágenes:**
- Si `TamañoMáximoImagen > 0` → Se pueden incrustar imágenes hasta ese tamaño en bytes
- Si no se especifica o es `0` → No se permite incrustar imágenes

---

### 📄 Campos INPUTEXT
Para campos INPUTEXT se puede especificar:
```
MAXLENGTH,SIZE
```

**Ejemplo:**
```
Nombre | nm_distrito | x | T | 100,30 || MQ || # |
```
- `100,30` → Máximo 100 caracteres, tamaño visual de 30

---

## RESUMEN DE SINTAXIS

| Tipo de Campo | Formato | Ejemplo |
|---------------|---------|---------|
| **Decimales** | `Enteros,Decimales` | `3,2` |
| **Select** | `LongValue,LongText[,Alto]` | `10,50,5` |
| **TextArea** | `LongTotal,Ancho,Alto` | `250,100,5` |
| **TextArea HTML** | `LongTotal,Ancho,Alto[,MaxImg]` | `750000,100,10,50000` |
| **InputText** | `MaxLength,Size` | `100,30` |

---

## CASOS ESPECIALES

### ✨ Longitud Ilimitada
- Usar `-1` como valor de longitud para campos sin límite
- Ejemplo: `-1,100,5` para TEXTAREA sin límite de caracteres

### 🔮 Funcionalidades Futuras
- **Alto automático en SELECT**: `-1` ajustará el alto al número total de opciones
- Estas funcionalidades están marcadas como *(futuro)* en la documentación