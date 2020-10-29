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
            $table->integer('idCours');
            $table->string('otherUserName');
            $table->string('otherUserImage');

            $table->unsignedBigInteger('idMe')->nullable(true);
            $table->foreign('idMe')->references('id')->on('users');

            $table->unsignedBigInteger('idOtherUser')->nullable(true);
            $table->foreign('idOtherUser')->references('id')->on('users');

            $table->unsignedBigInteger('idDiscussion')->nullable(true);
            $table->foreign('idDiscussion')->references('id')->on('discussions');

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
