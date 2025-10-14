# eAddIFRAME

## Descripción
Si al cargar el Desktop esta función está definida, la ejecutará permitiendo meter zonas de trabajo en el mismo área que el IWORK.

## Sintaxis
```php
eAddIFRAME()
```

## Parámetros
Ninguno.

## Funcionalidad
Permite definir múltiples IFRAMEs que funcionarán como contenedores de trabajo adicionales en el Desktop.

## Ejemplos
```php
// Ejemplo 1: Implementación básica
function eAddIFRAME(){
?>
<IFRAME id=CAJA1 name=uFichaAux eNORESIZE=true src='about:blank' width='100%' height='100%'
style='display:none;border:1 solid #FF0000' FRAMEBORDER=0 SCROLLING='auto'></iframe>
<script>
window.CAJA1.frameElement.WOPENER = window;
</script>
<?
}

// Ejemplo 2: Múltiples IFRAMEs
function eAddIFRAME(){
?>
<IFRAME id=CAJA1 name=uFichaAux src='about:blank' width='100%' height='100%'></iframe>
<IFRAME id=CAJA2 name=uFichaAux src='about:blank' width='100%' height='100%'></iframe>
<?
}

// Ejemplo 3: IFRAME con estilos personalizados
function eAddIFRAME(){
?>
<IFRAME id=CAJA3 name=uFichaAux src='about:blank' width='100%' height='100%'
style='display:none;border:2px solid #009900' FRAMEBORDER=0></iframe>
<?
}
```