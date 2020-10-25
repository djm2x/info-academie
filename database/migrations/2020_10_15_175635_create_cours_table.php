<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cours', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom')->nullable(true);
            $table->string('nomAr')->nullable(true);
            $table->string('filesUrl')->nullable(true);
            $table->string('videosUrl')->nullable(true);
            $table->integer('semester')->nullable(true);

            $table->integer('idBranche')->nullable(true);
            $table->foreign('idBranche')->references('id')->on('branches');

            $table->unsignedBigInteger('idNiveauScolaire')->nullable(true);
            $table->foreign('idNiveauScolaire')->references('id')->on('niveau_scolaires');

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
        Schema::dropIfExists('cours');
    }
}
