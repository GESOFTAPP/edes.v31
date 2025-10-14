# streamerClient

## SINTAXIS
```javascript
streamerClient(window, functionMessage, channel)
```

## DESCRIPCIÓN
Método para enviar al cliente cada "n" segundos o cuando se produzca un evento información. El uso habitual es en un dashboard. Establece una conexión persistente entre el servidor y el cliente para recibir datos en tiempo real.

## PARÁMETROS
- **window**: Objeto window del navegador
- **functionMessage**: Función callback principal para recibir mensajes
- **channel**: Array de objetos con canales y sus funciones correspondientes

## EJEMPLO

### Archivo Frontend (llamada a streamerClient)
```javascript
// Inicialización de la sesión
SESS::$var["streamer"] = '..path del fichero servidor...';     // se define en esta variable el fichero php para obtener los datos

?> top.S.init(window);

// Definir canales y sus funciones
var channel = [
    {
        channel: "channelWarnnig",
        function: functionWarnnig
    },
    {
        channel: "channelError",
        function: functionError
    }
];

// Cargar y ejecutar streamerClient
S.loadJS(window, "$js/streamerClient", function(){
    streamerClient(window, functionMessage, channel);
    S("body").visible();     // S.windowView(window);
});

// Función principal para recibir mensajes
function functionMessage(data){
    // data es el json enviado por el servidor a este canal
}

// Función para mensajes de warning
function functionWarnnig(data){
    // data es el json enviado por el servidor a este canal
}

// Función para mensajes de error
function functionError(data){
    // data es el json enviado por el servidor a este canal
}
```

### Archivo PHP Servidor (recopilación de datos)
```php
<?php
// Configuración del streamerClient
streamerClient::setup(null, "messageSend", null, -1, 60*5);

function messageSend(){
    $message = array(
        array(
            "message"=>[
                "key1"=>"Linea 1",
                "key2"=>"Linea 2"
            ]
        ),
        array(
            "channel"=>"channelWarnnig",
            "message"=>[
                "key3"=>"Linea 3",
                "key4"=>"Linea 4"
            ]
        ),
        array(
            "channel"=>"channelError",
            "message"=>[
                "key5"=>"Linea 5",
                "key6"=>"Linea 6"
            ]
        )
    );
    
    // si se retorna "NULL" significa que no hay mensajes para enviar
    // si se retorna "close" se cerrará conexión con el cliente
    // en otro caso hay que devolver un array de array hash, con los atributos
    //   "message" único datos obligatorio con los datos a enviar
    //   "channel" dato opcional para indicar el canal por donde se enviará la información
    //   "sleep" dato opcional para cambiar el tiempo de espera entre llamadas
    return $message;
}
?>
```