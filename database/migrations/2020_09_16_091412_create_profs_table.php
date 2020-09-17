<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('experience')->nullable(true);
            $table->string('approche')->nullable(true);
            $table->string('intro')->nullable(true);
            $table->string('videoUrl')->nullable(true);
            $table->string('cvUrl')->nullable(true);

            $table->double('prixHrWeb')->nullable(true);
            $table->double('prixHrHome')->nullable(true);
            $table->double('prixHrWebGroupe')->nullable(true);
            $table->double('prixHrHomeGroupe')->nullable(true);

            $table->string('idsTypeActivites')->nullable(true);
            $table->string('idsActivites')->nullable(true);
            $table->string('idsTypeCours')->nullable(true);
            $table->string('idsLieuCours')->nullable(true);
            $table->string('idsNiveauScolaires')->nullable(true);


            $table->unsignedBigInteger('idUser')->nullable(true);
            $table->foreign('idUser')->references('id')->on('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profs');
    }
}
