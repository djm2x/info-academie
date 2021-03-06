# App web System de suivi ..

## Le projet à éte developpé par les technologies suivantes : 
[Download Composer](https://dotnet.microsoft.com/download)
[Install Laravel](https://dotnet.microsoft.com/download)

```
composer global require laravel/installer
```
[Node js et NPM](https://nodejs.org/en/download/) & [Angular](https://cli.angular.io/)

[Git for Windows](https://git-scm.com/downloads)

## Etape d'instalation : 

### clone le repo
```
git clone https://github.com/djm2x/this repo
```

### Pour installer les dependences du back-end et front-end éxécuter la commande suivante : 
```
npm run install
```

### pour le lancer le back-end laravel restful api :
```
npm run b
```

### pour lancer le projet front-end angular : 
```
npm run f 
```

### configurer heroku pour deploye l'application

- Crée un compte [Heroku](https://www.heroku.com/)
- Dans le Dashboard clique sur new => `create a new app`
- Donner un nom à l'application et choisie un la région proche a vous => `create app`
- Dans l'ongle Settings -> 
`add Buildpacks` : https://github.com/heroku/heroku-buildpack-php (pour qui Heroku support Php)
`add Buildpacks` : https://github.com/anuraj/dotnetcore-buildpack (pour qui Heroku support ASP.NET Core)
- Dans l'ongle `Deploy`, choisie comme `Deployment method` GitHub, connectez-vous après choisie votre repo est cliqué sur `connect` -> `Enable Automatic Deploy`


### pour deployer le projet sur Heroku : 
Cette commande au dessous (plus de detail dans package.json -> scripts) va pushe les changement dans votre repo, puis Heroku ecoute les action faite sur votre repo alors ila copy et builder votre app , et le site sera actualiser
```
npm run ci 
```
### pour deployer le projet sur IIS (cas du asp.net core): 
- 1. Dans le fichier Startup.cs , change la ligne 133 , utiliser SqlServer au lieu de Sqlite
- 2. Dans le fichie appsettings.json, modifier la chaine de connexion de base de donnee dans la ligne 10
- 3. Pour genere la base de donne install ce package de entity framwork core
```
dotnet tool install --global dotnet-ef
```
- apres lance la commande de generation:
```
npm run m
```
- 4. Apres genere la distribusion d'Angular avec
```
npm run f-p
```
- 5. Finalement genere le deploy d'ASP .net core avec
```
dotnet publish -o D:/chemin souhaite
```

### pour deployer le projet sur Xampp: 
- 1. Dans le fichier .env , Vous pauvez change les information du base donne qui sera utiliser (sqlite, mysql ou sqlserver)

- apres lance la commande de generation de la base de donne:
```
npm run m
```
- 4. Apres genere la distribusion d'Angular avec
```
npm run f-p
```

### Useful Angular cli command:
ng g m offre --route offre --module dash


### Useful php cli command:
php -r "echo ini_get('memory_limit').PHP_EOL;"

### Lecture des fichiers JSON local dans Angular 
import SampleJson from '../../assets/SampleJson.json';

dans  tsconfig.json => 
{  "compilerOptions": {  "resolveJsonModule": true, "esModuleInterop": true } }

### add new migration => add new table or column
php artisan make:migration create_quizs --table="table_name" 
or
php artisan make:model Response -mcrf
php artisan migrate
