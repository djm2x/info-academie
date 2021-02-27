<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserActivitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_activites', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->dateTime('date')->nullable(true);

            $table->unsignedBigInteger('idUser')->nullable(true);
            $table->foreign('idUser')->references('id')->on('users');

            $table->unsignedBigInteger('idActivite')->nullable(true);
            $table->foreign('idActivite')->references('id')->on('activites');

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
        Schema::dropIfExists('user_activites');
    }
}
