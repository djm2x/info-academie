<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateActivitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activites', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('nomAr');
            $table->string('imageUrl');

            $table->unsignedBigInteger('idTypeActivite')->nullable(true);
            $table->foreign('idTypeActivite')->references('id')->on('type_activites');

            $table->timestamps();
        });

        DB::insert("INSERT INTO `activites` (`id`, `nom`, `nomAr`, `imageUrl`, 'idTypeActivite', `created_at`, `updated_at`) VALUES
            (1, 'Math', 'رياضيات', 'imageUrl', 1,'2020-09-09 12:23:57', '2020-09-09 12:23:57'),
            (2, 'Arab', 'عرب', 'imageUrl', 1,'2020-09-09 12:23:57', '2020-09-09 12:23:57'),
            (3, 'Français', 'فرنسي', 'imageUrl', 1,'2020-09-09 12:23:57', '2020-09-09 12:23:57'),

            (4, 'Arab', 'عرب', 'imageUrl', 2,'2020-09-09 12:23:57', '2020-09-09 12:23:57'),
            (5, 'Français', 'فرنسي', 'imageUrl', 2,'2020-09-09 12:23:57', '2020-09-09 12:23:57'),
            (6, 'Anglais', 'الإنجليزية', 'imageUrl', 2,'2020-09-09 12:23:57', '2020-09-09 12:23:57'),

            (7, 'dessin', 'رسم', 'imageUrl', 3, '2020-09-09 12:23:57','2020-09-09 12:23:57'),
            (8, 'calcule', 'محسوب', 'imageUrl', 3, '2020-09-09 12:23:57','2020-09-09 12:23:57'),
            (9, 'music', 'موسيقى', 'imageUrl', 3, '2020-09-09 12:23:57','2020-09-09 12:23:57')
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activites');
    }
}
