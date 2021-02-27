<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventProfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_profs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->nullable(true);
            $table->dateTime('start')->nullable(true);
            $table->dateTime('end')->nullable(true);
            $table->string('color')->nullable(true);
            $table->boolean('draggable')->nullable(true);
            $table->string('resizable')->nullable(true);
            $table->integer('month')->nullable(true);
            $table->integer('year')->nullable(true);

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
        Schema::dropIfExists('event_profs');
    }
}
