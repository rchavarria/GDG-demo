GDG Demo
===============

Instrucciones para ejecutar la demo en el navegador una vez clonado el proyecto
===============================================================================

 1. Instalar node en la página nodejs.org

 2. Instalar yeoman, bower y grunt instalado 
 y el generador de angular si no

<code>
 sudo npm install -g yo bower grunt
</code>
<code>
 sudo npm install -g generator-angular
</code>

 3. Para visualizar la aplicación en el navegador, ejecutar:

<code>
 grunt serve
</code>


Instrucciones para ejecutar la demo en el móvil una vez clonado el proyecto
===============================================================================

 1. Instalar node en la página nodejs.org

 2. Instalar yeoman, bower y grunt instalado 
 y el generador de angular si no

<code>
 sudo npm install -g yo bower grunt
 </code>
 <code>
 sudo npm install -g generator-angular
</code>

 3. Instalar Apache Cordova

<code>
 sudo npm install -g cordova
</code>

 4. Creamos el proyecto para móvil:
 
<code>
 cordova create cordova-apps "com.autentia" "GDGDemo" --copy-from=app
</code>
 <code>
 cd cordova-apps && cordova platforms add android [o la plataforma que queramos]
 </code>
 <code>
 cordova build android
 </code>
 <code>
 cordova run android
</code>

 5. Añadimos todos los plugins necesarios

<code>
 cordova plugins add org.apache.cordova.geolocation --> añade el soporte de geolocalización en el móvil
</code>
<code>
 cordova plugins add org.apache.cordova.camera --> añade el soporte de cámara del móvil
 </code>
 <code>
 cordova plugin add org.apache.cordova.vibration --> añade soporte de vibración
 </code>
 <code>
 cordova plugin add org.apache.cordova.device --> permite mostrar la información del dispositivo
 </code>
 <code>
 cordova plugin add org.apache.cordova.network-information --> da infomración del tipo de conexión actual
 </code>
 <code>
 cordova plugin add org.apache.cordova.dialogs --> permite emitir pitidos y mostrar alertas
</code>
 <code>
 cordova plugin add org.apache.cordova.device-motion --> permite utilizar el acelerómetro
</code>


