fantainbuild
============

Build Script for Fantain Application


Steps to use
============

1.) Clone the Project 

2.) Open your bashfile 

3.) Add the below snippet to the end of your bash / Profile file,

      export PATH=$PATH:{the-path-where-this-project-cloned}/bin

4.) Refresh the bash file using the below command,

      source {your-path-to-bash/Profile-file}
      
5.) Go to your project root directory and build the application


Installing the man file
=======================

1.) Copy the fantainbuild,in the root directory of this project to the man folder as follows,

      sudo cp fantainbuild /usr/local/man/man1/fantainbuild.1
      sudo gzip /usr/local/man/man1/fantainbuild.1
      
2.) Now the man file is ready acces using the below command, 

      man fantainbuild

Prerequesites
=============

1.) In fantainEnv.js make sure that installation=\`_DEPLOY_INSTALLATION_

2.) In fantainEnv.js make sure that env=_DEPLOY_INSTANCE_

3.) In config.xml make sure that id=_DEPLOY_ID_

4.) In config.xml make sure that version=_DEPLOY_VERSION_

5.) In config.xml make sure that name=_DEPLOY_APK_NAME_

6.) In AndroidManifest.xml make sure that versioncode=_DEPLOY_VERSION_CODE_

7.) In Build.xml make sure that projectname=_DEPLOY_GIT_NAME_

8.) Add Environment variable in your bashfile / profile in the following format and update your bashfile / profile

	FANTAIN_HOME={root-path-to-your-project}
