/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
			this.receivedEvent('deviceready');
			document.getElementById("btn-device").addEventListener("click", this.btnClick, false);
			document.getElementById("btn-battery").addEventListener("click", this.btnClick, false);
			document.getElementById("btn-camera").addEventListener("click", this.btnClick, false);
			//console.log(r)
			this.get_device()
			document.getElementById("deck-device").style.display = "block";
			
			document.addEventListener("pause", this.onPause, false);
			document.addEventListener("resume", this.onResume, false);
			document.addEventListener("menubutton", this.onMenuKeyDown, false);
			//document.getElementById("body").addEventListener("load", app.onload, false);
			
			window.addEventListener("batterystatus", this.onBatteryStatus, false);
			window.addEventListener("batterylow", this.onBatteryStatusLow, false);
			window.addEventListener("batterycritical", this.onBatteryStatusCritical, false);
			
			document.getElementById("camera-picture-camera").addEventListener("click", this.camera.take_picture, false);
			document.getElementById("camera-picture-storage").addEventListener("click", this.camera.load_picture, false);
			
		},
		
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    btnClick: function(e) {
    	//console.log(e.srcElement.id);
    	
    	var id = e.srcElement.id.substr(4);
    	document.getElementById("deck-device").style.display = "none";
    	document.getElementById("deck-battery").style.display = "none";
    	document.getElementById("deck-camera").style.display = "none";
    	
    	console.log(id)
    	document.getElementById("deck-" + id).style.display = "block";
    },
    
    // == device information ==
    innerHtml: function(id, markup) {
    	document.getElementById(id).innerHTML = markup;
    },
    
    get_device: function(e) {
    	//console.log(e)
    	this.innerHtml("device-cordova", device.cordova);
    	this.innerHtml("device-model", device.model);
    	this.innerHtml("device-platform", device.platform);
    	this.innerHtml("device-uuid", device.uuid);
    	this.innerHtml("device-version", device.version);
    	this.innerHtml("device-manufacturer", device.manufacturer);
    	this.innerHtml("device-isVirtual", device.isVirtual);
    	this.innerHtml("device-serial", device.serial);
    },
    
    // == camera api ==
    camera: {
    	take_picture: function(e) {
    		console.log(e);
				navigator.camera.getPicture(onSuccess, onFail, 
					{ 
						quality: 50,
						destinationType: Camera.DestinationType.FILE_URI 
					}
				);

				function onSuccess(imageURI) {
					var image = document.getElementById('camera-img');
					image.src = imageURI;
				}

				function onFail(message) {
					
					// iOS quirk: using setTimeout tow work around a bug with alert in ios
					setTimeout(function() {
						alert('Failed because: ' + message);
					}, 0);
				}
    	
    	},
    	load_picture: function(e) {
    		console.log(e);
				navigator.camera.getPicture(onSuccess, onFail, 
					{ 
						quality: 50,
						destinationType: Camera.DestinationType.FILE_URI,
						sourceType: Camera.PictureSourceType.PHOTOLIBRARY
					}
				);

				function onSuccess(imageURI) {
					var image = document.getElementById('camera-img');
					image.src = imageURI;
				}

				function onFail(message) {
					
					// iOS quirk: using setTimeout tow work around a bug with alert in ios
					setTimeout(function() {
						alert('Failed because: ' + message);
					}, 0);
				}
    	
    	},
    },
    
    // == battery status ==
		battery_status: function(status) {
    	app.innerHtml("battery-level", status.level);
    	app.innerHtml("battery-isPlugged", status.isPlugged);
			//console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
		},

		onBatteryStatus: function(status) {
			app.battery_status(status);
		},
		
		onBatteryStatusLow: function(status) {
			alert("Battery Low");
			app.battery_status(status);
		},
		
		onBatteryStatusCritical: function(status) {
			alert("Battery Critical");
			app.battery_status(status);
		},
		
		// == general events ==
		onPause: function(e) {
			// Handle the pause event
			console.log(e)
		},

		onResume: function(e) {
			// Handle the resume event
			console.log(e)
		},

		onMenuKeyDown: function(e) {
			// Handle the menubutton event
			console.log(e)
		},
};

app.initialize();
