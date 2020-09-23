<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('object');
            $table->string('message');
            $table->boolean('vu');
            $table->dateTime('date');
            $table->string('senderName');
            $table->integer('idCours');

            $table->unsignedBigInteger('idUser')->nullable(true);
            $table->foreign('idUser')->references('id')->on('users');

            $table->unsignedBigInteger('idReceiver')->nullable(true);
            $table->foreign('idReceiver')->references('id')->on('users');

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
        Schema::dropIfExists('messages');
    }
}
