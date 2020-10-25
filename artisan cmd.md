composer global require laravel/installer
laravel new blog

php artisan make:middleware Localization

php artisan key:generate
php artisan serve --port=8080

php artisan make:migration creer_table_membres --create="membres"

php artisan make:migration modifier_champs_table_membres --table="membres" 
php artisan make:migration add_foreignkey_userID_to_table_members --table="membres" 
php artisan migrate:rollback --step=1

php artisan make:model EventProf -mcrf

php artisan make:migration creer_table_membres --create="membres"

php artisan migrate:refresh --seed 

php artisan migrate 

php artisan tinker

protected static $categories = array(
        'abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife',
        'fashion', 'people', 'nature', 'sports', 'technics', 'transport'
    );

sqlite3 database/database.sqlite 
.tables 
.schema membre
sqlite3 database/database.sqlite -cmd '.schema membres'

# semaine 3

composer require laravel/ui
php artisan ui vue --auth 
 npm install && npm run dev 

# semaine 4
php artisan make:migration add_role_to_users_table --table=users

php artisan make:middleware CheckIsActive

https://github.com/heroku/heroku-buildpack-php

# internalisation
https://dev.to/fadilxcoder/adding-multi-language-functionality-in-a-website-developed-in-laravel-4ech

https://github.com/froala/angular-froala-wysiwyg

https://info-academie.herokuapp.com/
