<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResponsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('responses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('trueResponse');
            $table->string('userResponse');
            $table->dateTime('date');
            $table->integer('note');

            $table->unsignedBigInteger('idQuestion')->nullable(true);
            $table->foreign('idQuestion')->references('id')->on('questions')->onDelete('set null');

            $table->unsignedBigInteger('idUser')->nullable(true);
            $table->foreign('idUser')->references('id')->on('users')->onDelete('set null');

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
        Schema::dropIfExists('responses');
    }
}
