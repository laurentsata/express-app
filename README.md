# NODE 04 dotenv
***********************************************************************
npm install dotenv
-----------------------------------------------------------------------
EXEMPLE:  

# .env file
SERVER_PORT=5000
DB_USER=toto
DB_PASSWORD=Ftst453sf2jerfh
SECRET_API_KEY=YGFftyftyfy4565VHCFTD!!YFT  
------------------------------------------------------------------------
Tu peux ensuite charger ces variables à l'aide du paquet dotenv :  

// server.js
require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file  
console.log(`The server will run on port ${process.env.SERVER_PORT}`);  
console.log(`The secret key ${process.env.SECRET_API_KEY} will be used to connect to the third party API`);  
console.log(`The server will connect to the database with the user "${process.env.DB_USER}" and the password "${process.env.DB_PASSWORD}"`);    
--------------------------------------------------------------------------
Tu peux simplement lancer le serveur normalement :  

node server.js  
--------------------------------------------------------------------------
⚠️ Ne publie jamais d'informations sensibles ! ⚠️
Le fichier .env doit TOUJOURS être ajouté dans le fichier .gitignore afin de ne pas partager des données sensibles via un dépôt public (sur GitHub par exemple) !  
--------------------------------------------------------------------------
# .gitignore
node_modules/  
.env  
--------------------------------------------------------------------------
Cependant, tu devrais mettre dans le dépôt un fichier appelé .env.sample avec des valeurs fictives, permettant aux contributeurs de savoir quels paramètres sont nécessaires pour que l'application fonctionne. Ils peuvent ensuite créer localement leur propre .env à partir de cet exemple.  

# .env.sample file
SERVER_PORT=5000  
DB_USER=YOUR_DB_USER  
DB_PASSWORD=YOUR_DB_PASSWORD  
SECRET_API_KEY=YOUR_SECRET_API_KEY  
---------------------------------------------------------------------------
☝️ Résumé
Certaines variables de configuration dans une application web ne devraient pas être codées en dur. Elles devraient plutôt être lues à partir de l'environnement dans lequel l'application est exécutée. Cela permet de rendre l'application utilisable sur différentes machines (autres développeurs travaillant sur le projet, serveur de production, etc.) sans avoir à modifier le code source à chaque fois.
Les paramètres qui dépendent de l'environnement doivent être stockés dans un fichier .env, sous la forme KEY=valeur (une paire clé-valeur par ligne).
Ce fichier est lu en appelant require('dotenv').config().
Les variables sont ensuite accessibles dans l'application, via process.env.KEY (remplace KEY par la vraie clé).
Le fichier .env ne doit pas être versionné avec Git (utilise .gitgnore).
--------------------------------------------------------------------------
