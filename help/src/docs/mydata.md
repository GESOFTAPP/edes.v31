# MyData

## Sintaxis

```
[MyData] Nomcampo=VariableDeSesión
```

## Descripción

En los modos de consulta o modificación muestra la ficha o multificha ejecutando la búsqueda mediante la etiqueta `[MyData]` para mostrar la ficha directamente sin pasar por la ficha de búsqueda. Esto evita que se llame a una ficha sin permisos, proporcionando acceso directo basado en variables de sesión.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| Nomcampo | String | Nombre del campo que se utilizará para la búsqueda | Sí | - |
| VariableDeSesión | String | Variable de sesión que contiene el valor a buscar | Sí | - |

## Ejemplos

### Configuración en opciones de menú

#### Ficha con modo consulta (cR)
```
Opción Ficha con cR | FcR:$mydata.edf&prueba
```

#### Ficha con modo modificación (mR)
```
Opción Ficha con mR | FmR:$mydata.edf&prueba
```

#### Grupo de fichas con modo consulta (cR)
```
Opción GrupoDeFichas con cR | GcR:$mydata.gdf&prueba
```

#### Grupo de fichas con modo modificación (mR)
```
Opción GrupoDeFichas con mR | GmR:$mydata.gdf&prueba
```

### Definición en el script

**En el archivo "prueba.edf" o "prueba.gdf":**
```
[MyData] cd_gs_user=_User
```

### Ejemplo completo

**Menú:**
```
Mi Perfil | FmR:$perfil.edf&miperfil
```

**Archivo: miperfil.edf**
```
[MyData] id_usuario=_UserId

[Tabla] usuarios
[Campo] id_usuario | N | 10 | ID Usuario
[Campo] nombre | C | 50 | Nombre
[Campo] email | C | 100 | Email
[Campo] telefono | C | 20 | Teléfono
```

### Casos de uso adicionales

#### Mostrar datos del usuario actual
```
[MyData] cod_empleado=_EmpleadoActual
```

#### Mostrar datos de la empresa del usuario
```
[MyData] id_empresa=_EmpresaUsuario
```

#### Acceso a configuración personal
```
[MyData] user_id=_CurrentUser
```

## Ventajas

1. **Seguridad**: Evita acceso no autorizado al saltarse fichas de búsqueda
2. **Usabilidad**: Acceso directo sin pasos intermedios
3. **Personalización**: Muestra datos específicos del usuario en sesión
4. **Eficiencia**: Reduce el número de clics y navegación necesaria

## Notas importantes

- La variable de sesión debe existir y tener un valor válido
- El campo especificado debe existir en la tabla correspondiente
- Se utiliza principalmente para mostrar información personalizada del usuario en sesión
- Compatible tanto con fichas simples (.edf) como con grupos de fichas (.gdf)