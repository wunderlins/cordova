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
        document.getElementById("clickMe").addEventListener("click", this.clickMe, false);
        //console.log(r)
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
    
    innerHtml: function(id, markup) {
    	document.getElementById(id).innerHTML = markup;
    },
    
    clickMe: function(e) {
    	//console.log(e)
    	app.innerHtml("device-cordova", device.cordova);
    	app.innerHtml("device-model", device.model);
    	app.innerHtml("device-platform", device.platform);
    	app.innerHtml("device-uuid", device.uuid);
    	app.innerHtml("device-version", device.version);
    	app.innerHtml("device-manufacturer", device.manufacturer);
    	app.innerHtml("device-isVirtual", device.isVirtual);
    	app.innerHtml("device-serial", device.serial);
    }
    
};

app.initialize();
