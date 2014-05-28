'use strict';

angular.module('gdgdemoApp', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url : "/app",
		abstract : true,
		templateUrl : "templates/menu.html",
		controller: "AppCtrl"
	})
	
	.state('app.localiza', {
		url : "/localiza",
		views : {
			'menuContent' : {
				templateUrl : "templates/localiza.html",
				controller : "LocalizaCtrl"
			}
		}
	})
	
	.state('app.camera', {
		url : "/camera",
		views : {
			'menuContent' : {
				templateUrl : "templates/camera.html",
				controller : "CameraCtrl"
			}
		}
	})

	.state('app.acelerometro', {
		url : "/acelerometro",
		views : {
			'menuContent' : {
				templateUrl : "templates/acelerometro.html",
				controller : "AcelerometroCtrl"
			}
		}
	})
	
	.state('app.conexion', {
		url : "/conexion",
		views : {
			'menuContent' : {
				templateUrl : "templates/conexion.html",
				controller : "ConexionCtrl"
			}
		}
	})
	
	.state('app.device', {
		url : "/device",
		views : {
			'menuContent' : {
				templateUrl : "templates/device.html",
				controller : "DeviceCtrl"
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/device');
});

var CordovaInit = function() {

	if (window.cordova) {
		document.addEventListener('deviceready', function() {
			console.log('Arranco angular desde cordova');
			boot();
		});
	} else {
		console.log('Arranco angular desde web');
		boot();
	}
	
	function boot(){
		angular.bootstrap(document, [ 'gdgdemoApp' ]);
	}
};

angular.element(document).ready(function() {
	new CordovaInit();
});
