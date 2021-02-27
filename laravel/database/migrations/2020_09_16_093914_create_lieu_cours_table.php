<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateLieuCoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lieu_cours', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('nomAr');
            $table->timestamps();
        });
        
        // DB::insert("INSERT INTO `lieu_cours` (`id`, `nom`, `nomAr`, `created_at`, `updated_at`) VALUES
        //     (1, 'Donner des cours à distance', 'Donner des cours à distance', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        //     (2, 'Aller au domicile de lélève', 'Aller au domicile de lélève', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        //     (3, 'Accueillez létudiant chez moi', 'Accueillez létudiant chez moi', '2020-09-09 12:23:57', '2020-09-09 12:23:57')
        // ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lieu_cours');
    }
}
