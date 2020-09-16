<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTypeActivitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_activites', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('nomAr');
            $table->string('imageUrl');
            $table->timestamps();
        });

        // DB::insert("INSERT INTO `type_activites` (`id`, `nom`, `nomAr`, `imageUrl`, `created_at`, `updated_at`) VALUES
        //     (1, 'Soutenance scolaire', 'الدفاع المدرسي', 'imageUrl', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        //     (2, 'Langage', 'لغة', 'imageUrl', '2020-09-09 12:23:57', '2020-09-09 12:23:57'),
        //     (3, 'Activites paralelle', 'الأنشطة الموازية', 'imageUrl', '2020-09-09 12:23:57', '2020-09-09 12:23:57')
        // ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_activites');
    }
}
