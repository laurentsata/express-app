# express-app
***********************************************************************
Installation
Étape 1 : Commence par ouvrir ton terminal et par créer un répertoire :
-----------------------------------------------------------------------
mkdir express-app
Étape 2 : Navigue dans ce répertoire :
-----------------------------------------------------------------------
cd express-app
Étape 3 : Initialise ton projet :
-----------------------------------------------------------------------
npm init -y
👌🏻 On peut utiliser le flag -y pour utiliser les valeurs par défaut pour notre package.json
-----------------------------------------------------------------------
Étape 4 : Maintenant que le projet est initialisé, installe Express :

npm install express
💯 Bien joué ! Tu peux maintenant utiliser Express!
-----------------------------------------------------------------------
***********************************************************************
⚙️ Installer Nodemon
Étape 1 : Installer nodemon en utilisant npm.

npm install nodemon --save-dev
☝🏻 Nous devons installer nodemon dans les dépendances de développement, car nous n'utiliserons nodemon que lorsque nous développerons notre projet.
Nous ne voulons pas que ce paquet soit installé et utilisé en production.
--------------------------------------------------------------------------
Étape 2: Adapte ton package.json, en modifiant "main" et "scripts" :
++++++++++++++++++++++++++++
"main": "app.js",
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
+++++++++++++++++++++++++++++
C'est une pratique courante de réserver le script start pour la prodution, et d'avoir un script dev pour le développement : ici, le script dev exécutera nodemon au lieu de node.
-------------------------------------------------------------------------------
Étape 3: Utilise npm run dev pour démarrer le serveur.