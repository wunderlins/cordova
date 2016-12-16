# installation
## debian - android 

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

- Download android Studio for linux: https://developer.android.com/studio/index.html
- run installer
- install platfoem (lollipop in my case)
- install nexus 5 emulator

Add paths in `.bashrc` or `.profile`
	
	export PATH=${PATH}:/opt/Android/Sdk/platform-tools:/opt/Android/Sdk/tools:

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
