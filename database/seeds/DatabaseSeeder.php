<?php

use App\Activite;
use App\LieuCours;
use App\NiveauScolaire;
use App\OffreProf;
use App\Student;
use App\Prof;
use App\TypeActivite;
use App\TypeCours;
use App\User;
use App\Ville;
use App\Video;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        Model::unguard(); // Disable mass assignment

        // $this->call(VilleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ProfSeeder::class);
        $this->call(StudentSeeder::class);
        $this->call(TypeActiviteSeeder::class);
        $this->call(ActiviteSeeder::class);
        $this->call(lieuCourseeder::class);
        $this->call(TypeCoursSeeder::class);
        $this->call(NiveauScolaireSeeder::class);
        $this->call(VideoSeeder::class);
        $this->call(OffreProfSeeder::class);

        Model::reguard(); // Enable mass assignment
    }
}

class UserSeeder extends Seeder
{
    public function run()
    {
        factory(User::class, 100)->create();
    }
}

class ProfSeeder extends Seeder
{
    public function run()
    {
        factory(Prof::class, 50)->create();
    }
}

class StudentSeeder extends Seeder
{
    public function run()
    {
        factory(Student::class, 50)->create();
    }
}

class ActiviteSeeder extends Seeder
{
    public function run()
    {
        factory(Activite::class, 9)->create();
    }
}

class TypeActiviteSeeder extends Seeder
{
    public function run()
    {
        factory(TypeActivite::class, 3)->create();
    }
}

class VilleSeeder extends Seeder
{
    public function run()
    {
        factory(Ville::class, 3)->create();
    }
}

class lieuCourseeder extends Seeder
{
    public function run()
    {
        factory(LieuCours::class, 3)->create();
    }
}

class TypeCoursSeeder extends Seeder
{
    public function run()
    {
        factory(TypeCours::class, 4)->create();
    }
}

class NiveauScolaireSeeder extends Seeder
{
    public function run()
    {
        factory(NiveauScolaire::class, 5)->create();
    }
}

class VideoSeeder extends Seeder
{
    public function run()
    {
        factory(Video::class, 3)->create();
    }
}

class OffreProfSeeder extends Seeder
{
    public function run()
    {
        factory(OffreProf::class, 4)->create();
    }
}
