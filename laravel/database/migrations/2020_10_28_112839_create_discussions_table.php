<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiscussionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discussions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('unReaded');
            $table->dateTime('date');

            $table->unsignedBigInteger('idMe')->nullable(true);
            $table->foreign('idMe')->references('id')->on('users');

            $table->unsignedBigInteger('idOtherUser')->nullable(true);
            $table->foreign('idOtherUser')->references('id')->on('users');

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
        Schema::dropIfExists('discussions');
    }
}
