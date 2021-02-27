<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOffreProfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offre_profs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('interval')->nullable(true);
            $table->integer('value')->nullable(true);

            $table->unsignedBigInteger('idTypeCours')->nullable(true);
            $table->foreign('idTypeCours')->references('id')->on('type_cours');

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
        Schema::dropIfExists('offre_profs');
    }
}
