<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('prenom');
            $table->string('imageUrl');
            $table->string('intro');
            $table->string('email')->unique();
            $table->string('tel')->nullable(true);
            $table->string('adresse')->nullable(true);
            $table->string('cin')->nullable(true);
            $table->string('password');
            $table->string('role');
            $table->boolean('isActive');

            $table->unsignedBigInteger('idVille')->nullable(true);
            $table->foreign('idVille')->references('id')->on('villes');

            $table->timestamps();
        });
        
        DB::insert("INSERT INTO `users` (`id`, `nom`, `prenom`, `imageUrl`, `intro`, `email`, `tel`, `idVille`, `adresse`, `cin`, `password`, `role`, `isActive`, `created_at`, `updated_at`) VALUES
        (1, 'admin', 'admin', 'imageUrl', 'intro', 'admin@angular.io', '0537255578', 1, 'hay riyad', 'aabbcc', '123', 'admin', 1, '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        (2, 'teacher', 'teacher', 'imageUrl', 'intro', 'teacher@angular.io', '0537255578', 2, 'hay riyad', 'aabbcc', '123', 'teacher', 1, '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        (3, 'student', 'student', 'imageUrl', 'intro', 'student@angular.io', '0537255578', 3, 'hay riyad', 'aabbcc', '123', 'student', 1, '2020-09-09 12:23:57', '2020-09-09 12:23:57')
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
