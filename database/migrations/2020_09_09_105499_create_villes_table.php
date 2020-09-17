<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateVillesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('villes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('nomAr');
            $table->timestamps();
        });

        DB::insert("INSERT INTO `villes` (`id`, `nom`, `nomAr`, `created_at`, `updated_at`) VALUES
            (1, 'Rabat', 'Rabat', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
            (2, 'CasaBlanca', 'CasaBlanca', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
            (3, 'Larache', 'Larache', '2020-09-09 12:23:57', '2020-09-09 12:23:57')
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('villes');
    }
}
