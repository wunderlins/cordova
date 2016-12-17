# installation
## debian - android

all tools require about 12GB of disk space.

	sudo dpkg --add-architecture i386
	sudo apt-get update
	sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
	# install kvm
	sudo apt-get install nodejs npm
	sudo ln -s /usr/bin/nodejs /usr/bin/node # make nodejs bin available as node

upgrade nodejs

	sudo npm cache clean -f
	sudo npm install -g n
	sudo n stable
	# in case you must override a local binary
	# sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/node 

install oracle java sdk

	# make sure the contrib repo is enabled
	sudo apt-get install java-package
	# download jdk from http://www.oracle.com/technetwork/java/javase/downloads/index.html
	make-jpkg jdk-8u111-linux-x64.tar.gz
	sudo dpkg -i oracle-java8-jdk_8u111_amd64.deb

install google chrome for debugging

	wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
	sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
	sudo apt-get update
	sudo apt-get install google-chrome-stable

- Download android Studio for linux: https://developer.android.com/studio/index.html
- run installer
- install SDK
- install platform (lollipop in my case)
- create nexus 5 emulator

Add paths in `.bashrc` or `.profile`
	
	# point this folder to the location where studio has installed the sdk
	export ANDROID_HOME=/opt/Android/Sdk 
	export PATH=${PATH}:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools
	
- create a simple java app
- build it to test the build system, some dependencies might have to be fulfilled
- run to test emulator. it will be later needed by cordova to test your app

## cordova

	cd project_dir
	sudo npm install -g cordova
	
create app
	
	cordova create hello net.wunderlin.hello HelloWorld
	cd hello
	cordova platform add android --save # or ios or browser
	cordova platform add browser
	cordova platform ls
	
	cordova build browser
	cordova run browser
	
	cordova build android
	cordova emulate android
	cordova run android # android phone must be connected

## useful plugins

- https://github.com/katzer/cordova-plugin-background-mode

