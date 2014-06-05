GDG Demo
===============

Instrucciones para ejecutar la demo en el navegador una vez clonado el proyecto
--------------------------------------------------------------------------------

1.- Instalar node en la página nodejs.org

2.- Instalar yeoman, bower y grunt instalado y el generador de angular

<code>
sudo npm install -g yo bower grunt
</code>

<code>
sudo npm install -g generator-angular
</code>

3.- Para instalar las dependencias necesarias ejecutar en la raíz del proyecto:

<code>
npm install
</code>

<code>
bower install
</code>

4.- Para visualizar la aplicación en el navegador, desde la raíz del proyecto, ejecutar:

<code>
grunt serve
</code>


Instrucciones para ejecutar la demo en el móvil una vez clonado el proyecto
----------------------------------------------------------------------------

1.- Instalar node en la página nodejs.org

2.- Instalar yeoman, bower y grunt instalado y el generador de angular si no

<code>
sudo npm install -g yo bower grunt
</code>
 
<code>
sudo npm install -g generator-angular
</code>

3.- Para instalar las dependencias necesarias ejecutar en la raíz del proyecto:

<code>
npm install
</code>

<code>
bower install
</code>


4.- Instalar Apache Cordova

<code>
sudo npm install -g cordova
</code>

5.- Creamos el proyecto para móvil

<code>
cordova create cordova-apps "com.autentia" "GDGDemo" --link-to=app
</code>

<code>
cd cordova-apps && cordova platforms add android [o la plataforma que queramos]
</code>

Nota: para poder añadir la plataforma android (que es nuestro caso), se necesita tener instalado [Apache Ant](http://ant.apache.org) y [Android SDK](https://developer.android.com/sdk/index.html). En la variable de entorno `PATH` deben de estar accesibles: la herramienta `ant` y los directorios `tools` y `platform-tools` del Android SDK. 

6.- Añadimos todos los plugins necesarios

Añade el soporte de geolocalización en el móvil

<code>
cordova plugins add org.apache.cordova.geolocation 
</code>

Añade el soporte de cámara del móvil

<code>
cordova plugins add org.apache.cordova.camera
</code>
 
Añade soporte de vibración

<code>
cordova plugin add org.apache.cordova.vibration 
</code>
 
Permite mostrar la información del dispositivo

<code>
cordova plugin add org.apache.cordova.device
</code>
 
Da información del tipo de conexión actual

<code>
cordova plugin add org.apache.cordova.network-information
</code>
 
Permite emitir pitidos y mostrar alertas

<code>
cordova plugin add org.apache.cordova.dialogs
</code>

Permite utilizar el acelerómetro

<code>
cordova plugin add org.apache.cordova.device-motion
</code>


7.- Ejecutamos la aplicación en el terminal de Android que tengamos registrado

<code>
cordova build android
</code>
 
<code>
cordova run android
</code>
