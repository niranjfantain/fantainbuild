fantainbuild
============

Build Script for Fantain Application


Steps to use
============

1.) Clone the Project 

2.) Open your bashfile 

3.) Add the below snippet to the end of your bash file,

      export PATH=$PATH:{the-path-where-this-project-cloned}/bin

4.) Refresh the bash file using the below command,

      source {your-path-to-bash-file}
      
5.) Go to your project root directory and build the application


Installing the man file
=======================

1.) Copy the fantainbuild,in the root directory of this project to the man folder as follows,

      sudo cp fantainbuild /usr/local/man/man1/fantainbuild.1
      sudo gzip /usr/local/man/man1/fantainbuild.1
      
2.) Now the man file is ready acces using the below command, 

      man fantainbuild

Prerequesties
=============

1.) In fantainEnv.js make sure that installation=##DEPLOYINSTALLATION##

2.) In fantainEnv.js make sure that env=##DEPLOYINSTANCE##

3.) In config.xml make sure that id=##DEPLOYID##

4.) In config.xml make sure that version=##DEPLOYVERSION##

5.) In AndroidManifest.xml make sure that versioncode=##DEPLOYVERSIONCODE##

6.) In Build.xml make sure that projectname=##DEPLOYGITNAME##

7.) Add Environment variable in your bashfile / profile as,

	FANTAIN_HOME={root-path-to-your-project}

    and update your bashfile / profile

