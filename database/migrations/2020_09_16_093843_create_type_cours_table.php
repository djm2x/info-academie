<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTypeCoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_cours', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('nomAr');
            $table->timestamps();
        });
        
        DB::insert("INSERT INTO `type_cours` (`id`, `nom`, `nomAr`, `created_at`, `updated_at`) VALUES
            (1, 'Cours individuel', 'Cours individuel', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
            (2, 'Cours pour groupe', 'Cours pour groupe', '2020-09-09 12:23:57', '2020-09-09 12:23:57')
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_cours');
    }
}
