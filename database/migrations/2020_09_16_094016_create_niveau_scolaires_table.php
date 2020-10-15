<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateNiveauScolairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('niveau_scolaires', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('nomAr');
            $table->integer('idCycle');
            $table->integer('coursLigneGroupe');
            $table->integer('coursLigneIndividuel');
            $table->integer('coursDomicileGroupe');
            $table->integer('coursDomicileIndividuel');
            $table->timestamps();
        });






        // DB::insert("INSERT INTO `niveau_scolaires` (`id`, `nom`, `nomAr`, `created_at`, `updated_at`) VALUES
        //     (1, 'Primaire', 'Primaire', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        //     (2, 'Collège', 'Collège', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        //     (3, 'Tronc commun', 'Tronc commun', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        //     (4, '1er bac', '1er bac', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        //     (5, '2eme bac', '2eme bac', '2020-09-09 12:23:57', '2020-09-09 12:23:57')
        // ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('niveau_scolaires');
    }
}
