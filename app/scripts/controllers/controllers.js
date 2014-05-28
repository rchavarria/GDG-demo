angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller(
		'LocalizaCtrl',
		function($scope, $rootScope) {
			var onSuccess = function(position) {
				$rootScope.$apply(function() {
					$scope.position = position;
				});
			};
			var onError = function(error) {
				console.log('ERROR! code: ' + error.code + ' ' + 'message: '
						+ error.message);
			};
			navigator.geolocation.getCurrentPosition(onSuccess, onError, {
				timeout : 10000,
				enableHighAccuracy : true
			});
		})

.controller('DeviceCtrl', function($scope) {
	if (window.cordova) {
		$scope.device = device;
	} else {
		var msg = 'Info no disponible desde web';
		$scope.device = {
			model : msg,
			cordova : msg,
			platform : msg,
			uuid : msg,
			version : msg
		};
	}
})

.controller('ConexionCtrl', function($scope) {
	if (window.cordova) {
		var networkState = navigator.connection.type;

	    var states = {};
	    states[Connection.UNKNOWN]  = 'Unknown connection';
	    states[Connection.ETHERNET] = 'Ethernet connection';
	    states[Connection.WIFI]     = 'WiFi connection';
	    states[Connection.CELL_2G]  = 'Cell 2G connection';
	    states[Connection.CELL_3G]  = 'Cell 3G connection';
	    states[Connection.CELL_4G]  = 'Cell 4G connection';
	    states[Connection.CELL]     = 'Cell generic connection';
	    states[Connection.NONE]     = 'No network connection';
		
		$scope.conexion = states[networkState];
	} else {
		$scope.conexion = 'No disponible';
	}
})

.controller('AcelerometroCtrl', function($scope) {
	function onSuccess(acceleration) {
		console.log('onSuccess acelerometro');
		$scope.acc_x = acceleration.x;
		$scope.acc_y = acceleration.y;
		$scope.acc_z = acceleration.z;
		$scope.acc_timestamp = acceleration.timestamp;
		$scope.$apply();
	};

	function onError() {
	    console.log('Error en el acelerómetro');
	};
	
	if (window.cordova){
		console.log('LLamo al acelerometro');
		var options = { frequency: 3000 };  // Update every 3 seconds
		var watchId = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
		console.log('Creo el watchId ' + watchId);
		$scope.watchID = watchId;
	}else{
		$scope.acc_x = 'NO';
		$scope.acc_y = 'NO';
		$scope.acc_z = 'NO';
		$scope.acc_timestamp = 'NO';
	}
	
	$scope.stop = function(){
		if (window.cordova){
			console.log('Para el WatchId ' + $scope.watchID);
			navigator.accelerometer.clearWatch($scope.watchID);
			navigator.notification.beep(2);
			navigator.notification.vibrate(2500);
		}else{
			alert('Lo paro!!!');
		}
	}

	
})

.controller('BatteryCtrl', function($scope) {
	if (window.cordova) {
		$scope.device = device;
	} else {
		$scope.nivel_bateria = 'No disponible';
	}
})

.controller('CameraCtrl', function() {
	if (window.cordova) {
		navigator.camera.getPicture(onSuccess, onFail, {
			quality : 50,
			destinationType : Camera.DestinationType.DATA_URL
		});

		function onSuccess(imageData) {
			var image = document.getElementById('myImage');
			image.src = "data:image/jpeg;base64," + imageData;
		}

		function onFail(message) {
			console.log('Failed because: ' + message);
		}
	} else {
		var image = document.getElementById('myImage');
		image.src = "http://www.preitv.es/fotos/no_imagen.jpg";
	}
});