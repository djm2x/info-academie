@extends('master')

@section('title')
    Le sang c'est quoi ?
@stop

@section('content')

<style>
        @media screen and (max-width: 844px) {
            .with-image{
                width: 80%;
            }
        }

        @media screen and (min-width: 845px) {
            .with-image{
                width: 80%;
            }
        }
    
        @media screen and (max-width: 500px) {
            .with-image{
                width: 100%;
            }
        }
    </style>
<section class="president">

    <div class="container mt-5 mb-5 mt-5">
    {{-- <h1>{{request()->getSchemeAndHttpHost()}}</h1> --}}
        <div class="d-flex flex-wrap justify-content-center align-items-center">
            
            <div class="col-md-12 with-image">
                {{-- {!! $model ? str_replace('{{request()->getSchemeAndHttpHost()}}', request()->getSchemeAndHttpHost(), $model->description) : 'Le contenu est pas encore publié.' !!} --}}
                <p class="MsoNormal"><span lang="FR">Le sang
                    est indispensable au fonctionnement du corps humain. Rien ne peut le remplacer,
                    c’est pourquoi le don de sang est si important. Composé de globules rouges, de
                    plasma, de plaquettes et de globules blancs, il permet au&nbsp;<b>CNTH&nbsp;</b>de
                    fabriquer et distribuer des produits sanguins labiles. Les dons de sang
                    permettent de soigner chaque année un million de malades.&nbsp;</span></p>
        
            <p class="MsoNormal"><span lang="FR"><br>
                </span><span lang="FR"><a
                        target="_blank"><b><span>Définition:&nbsp;</span></b></a></span><b><u><span lang="FR"></span></u></b>
            </p>
        
            <p class="MsoNormal"><span lang="FR">Fluide circulant dans les vaisseaux
                    sanguins, constitué d'un milieu liquide (plasma) dans lequel baignent les
                    éléments figurés.&nbsp;Le plus important liquide biologique qui irrigue tous
                    les organes, leur apporte oxygène et éléments nutritifs et les débarrasse de
                    leurs déchets. Le sang est composé à 55% de plasma et à 45% de cellules,
                    globules rouges, globules blancs et plaquettes. Le volume de la masse sanguine
                    est d’environ 5 litres pour un adulte mais varie selon son sexe, son poids et
                    sa taille.</span></p>
        
            <p class="MsoNormal"><b><span lang="FR">Le sang est Gratuit</span></b><span lang="FR">.
                    "Le coût facturé" permet de couvrir une partie des frais, et qui
                    correspondent aux prix d'acquisition de:</span></p>
        
            <ul type="circle">
                <li class="MsoNormal"><span lang="FR">Poche triple,
                        vide, stérile à usage unique&nbsp;;</span></li>
                <li class="MsoNormal"><span lang="FR">Des réactifs pour
                        analyses pour donner un produit de qualité...etc.</span></li>
            </ul>
        
            <p class="MsoNormal"><span lang="FR">&nbsp;</span></p>
        
            <p class="MsoNormal"><b><span lang="FR-CA">Le sang : sa composition</span></b></p>
        
            <p class="MsoListParagraphCxSpFirst"><b><i><span lang="FR-CA">Partie liquide </span></i></b><b><i><span
                            lang="FR-CA">à</span></i></b><b><i><span lang="FR-CA"> PLASMA</span><span lang="FR"></span></i></b>
            </p>
        
            <p class="MsoListParagraphCxSpMiddle"><span lang="FR">-<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span dir="LTR"></span><span lang="FR-CA">Jaunâtre, il est composé à 90 % d</span>’<span
                    lang="FR-CA">eau et à 10 % d</span>’<span lang="FR-CA">hormones, protéines, sels</span>… <span
                    lang="FR"></span></p>
        
            <p class="MsoListParagraphCxSpMiddle"><span lang="FR">-<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span dir="LTR"></span><span lang="FR-CA">Il assure la fluidité du sang</span><span
                    lang="FR"></span></p>
        
            <p class="MsoListParagraphCxSpMiddle"><span lang="FR">-<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span dir="LTR"></span><span lang="FR-CA">Il représente 55 % du sang</span><span
                    lang="FR"></span></p>
        
            <p class="MsoListParagraphCxSpMiddle"><b><i><span lang="FR-CA">&nbsp;</span></i></b></p>
        
            <p class="MsoListParagraphCxSpMiddle"><b><i><span lang="FR-CA">Partie solide </span></i></b><b><i><span
                            lang="FR-CA">à</span></i></b><b><i><span lang="FR-CA"> Éléments&nbsp;&nbsp; figurés</span></i></b>
            </p>
        
            <p class="MsoListParagraphCxSpLast"><span lang="FR-CA">-<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span dir="LTR"></span><span lang="FR-CA">Regroupent les globules rouges, les globules<br>
                    blancs et les plaquettes sanguines</span></p>
        
            <span lang="FR-CA">Ils représentent 45 % du sang</span>
            <div><span lang="FR-CA"><br></span></div>
            <div class="col-md-12 ">
                            <img class="with-image" src="{{request()->getSchemeAndHttpHost()}}/imageAE/le sang cest quoi.jpg">

            </div>
            <div><span lang="FR-CA"><br></span></div>
            <div>
                <p class="MsoNormal"><b><span lang="FR-CA">Le sang : éléments figurés</span></b></p>
                <div class="row">
                    <div class="col-md-8">
                        <p class="MsoNormal"><b><i><span lang="FR-CA">Les&nbsp;&nbsp; globules&nbsp;
                            rouges</span><span lang="FR"></span></i></b></p>
    
            <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span dir="LTR"></span><span lang="FR-CA">Ils ne contiennent pas de noyau et sont de
                    forme biconcave ;</span><span lang="FR"></span></p>
    
            <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span dir="LTR"></span><span lang="FR-CA">Ils contiennent de l</span>’<b><span
                        lang="FR-CA">hémoglobine</span></b><span lang="FR-CA">, molécule responsable de la capture de
                    l’oxygène et des déchets
                    cellulaires gazeux (Comme le dioxyde de carbone.</span><span lang="FR"></span></p>
    
            <p class="MsoNormal"><span lang="FR-CA">Aussi
                    appelés <i>Hématies</i>, ils sont responsables de la couleur rouge du sang.</span><span
                    lang="FR"></span></p>
            <p class="MsoNormal"><span lang="FR-CA"><br></span></p>
                    </div>
                    <div class="col-md-4">
                        <p class="MsoNormal" style="text-align: center;"><span lang="FR-CA"><img
                            src="{{request()->getSchemeAndHttpHost()}}/imageAE/bull.png"><br></span></p>
                    </div>
                </div>
               
              
                <p class="MsoNormal"><span lang="FR-CA"><br></span></p>
                <p class="MsoNormal"><b><i><span lang="FR-CA">Les&nbsp;&nbsp; globules&nbsp;&nbsp;
                                blancs</span></i></b></p>
                <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span><span dir="LTR"></span><span lang="FR-CA">Transparents, ils contiennent un noyau
                        ;</span><span lang="FR"></span></p>
                <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span><span dir="LTR"></span><span lang="FR-CA">Jouant un rôle essentiel dans le système
                        immunitaire, ils défendent le corps contre les invasions ;</span><span lang="FR"></span></p>
                <p class="MsoNormal"><span lang="FR-CA">
        
        
        
        
        
                    </span></p>
                <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></span><span dir="LTR"></span><span lang="FR-CA">Aussi appelé <i>Leucocytes</i>, ils sont
                        divisés en plusieurs catégories : macrophages, lymphocytes, etc.</span></p>
                <p class="MsoNormal"><span lang="FR-CA"><br></span></p>
                <p class="MsoNormal" style="text-align: center;"><span lang="FR-CA"><img
                        class="with-image" src="{{request()->getSchemeAndHttpHost()}}/imageAE/globules.jpg"></span></p>
                <p class="MsoNormal"><span lang="FR-CA"><br></span></p>
                <p class="MsoNormal"><span lang="FR-CA">&nbsp;</span><span lang="FR"></span></p>
                <div class="row">
                        <div class="col-md-8">
                                <p class="MsoNormal"><b><i><span lang="FR-CA">Les&nbsp;&nbsp; plaquettes&nbsp;&nbsp;
                                        sanguines</span></i></b></p>
                        <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><span dir="LTR"></span><span lang="FR-CA">Ne contenant pas de noyau, elles sont les plus
                                petits éléments figurés du sang ;</span><span lang="FR"></span></p>
                        <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><span dir="LTR"></span><span lang="FR-CA">Elles sont responsables de la formation des
                                clous plaquettaires (galles) débutant la coagulation sanguine ;</span><span lang="FR"></span></p>
                        <p class="MsoNormal"><span lang="FR-CA">
                            </span></p>
                        <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><span dir="LTR"></span><span lang="FR-CA">Elles sont aussi appelées
                                <i>Thrombocytes.</i></span><span lang="FR"></span></p>
                        <p class="MsoNormal"><span lang="FR-CA"><i><br></i></span></p>
                        </div>

                        <div class="col-md-4">
                                <p class="MsoNormal" style="text-align: center;"><span lang="FR-CA"><img
                                        src="{{request()->getSchemeAndHttpHost()}}/imageAE/plaquette.png"><i><br></i></span></p>
                        </div>
                </div>
               

               



                <div class="row">
                        <div class="col-md-8">
                                <p class="MsoNormal"><span lang="FR-CA">Malgré la composition <u>cellulaire</u>
                                        identique du sang chez les humains, il existe une variabilité sur les divers
                                        éléments du sang entre les individus.</span><span lang="FR"></span></p>
                                <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span></span><span dir="LTR"></span><span lang="FR-CA">Ces différences rendent impossible le don de
                                        sang entre certains groupes de personnes ;&nbsp;
                                    </span><span lang="FR"></span></p>
                                <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span></span><span dir="LTR"></span><span lang="FR-CA">Ces différences sont appelées : Groupes
                                        Sanguins!</span><span lang="FR-CA"> </span><span lang="FR"></span></p>
                                <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span></span><span dir="LTR"></span><u><span lang="FR-CA">À la surface des globules
                                            rouges</span></u><span lang="FR-CA">, il existe des ANTIGÈNES (formes
                                        spéciales) : A, B et + <br>
                                        ( «&nbsp;O&nbsp;» et «&nbsp;-&nbsp;» signifient «&nbsp;aucun antigène&nbsp;») ;</span><span
                                        lang="FR"></span></p>
                                <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span></span><span dir="LTR"></span><u><span lang="FR-CA">Dans le plasma sanguin</span></u><span
                                        lang="FR-CA">, il y a des ANTICORPS produits par
                                        les antigènes qui détruisent les globules rouges ayant un ANTIGÈNE étranger ;</span><span
                                        lang="FR"></span></p>
                               
                                <p class="MsoNormal"><span lang="FR">•<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span></span><span dir="LTR"></span><span lang="FR-CA">Ainsi, si du sang avec un antigène étranger est
                                        transfusé à une personne, ses anticorps s’acharneront à le détruire.&nbsp; Il y aura obstruction des
                                        vaisseaux sanguins
                                        et risque de décès!&nbsp;</span></p>
                        </div>
                        <div class="col-md-4">
                                <p class="MsoNormal" style="text-align: center;"><img src="{{request()->getSchemeAndHttpHost()}}/imageAE/boutaille.png"></p>
                        </div>
                </div>
               
                <p class="MsoNormal"><span><br></span></p>
             
                <p class="MsoNormal"><span><br></span></p>
                <p class="MsoNormal"><b><u><span lang="FR-CA">Système ABO</span></u></b></p>
                <p class="MsoNormal" style="text-align: center;"><img
                        class="with-image" src="{{request()->getSchemeAndHttpHost()}}/imageAE/abo.png"><span>&nbsp;</span><br></p>
                <p class="MsoNormal"><span><br></span></p>
                <p class="MsoNormal"><b><i><span lang="FR-CA">Et c’est la même chose pour le facteur Rhésus
                                (+ ou -).</span></i></b><i><span lang="FR"></span></i></p>
                <p class="MsoNormal"><span lang="FR-CA">De nos jours, il est très rare que
                        le sang soit transfusé intégralement : il est plutôt séparé en composantes ;</span><span
                        lang="FR"></span></p>
                <p class="MsoNormal"><span lang="FR-CA">Ainsi, une transfusion de globules
                        rouges ne contient pas de plasma, donc pas d’<i>anticorps</i> ;</span><span lang="FR"></span></p>
                <p class="MsoNormal"><span lang="FR-CA">Par contre, </span><span lang="FR">il
                        faut veiller à ne pas transmettre au receveur des cellules sanguines sur la
                        surface desquelles se présentent des antigènes que le receveur n’a pas : il y
                        aurait alors un développement d’anticorps contraire aux antigènes du
                        receveur.&nbsp; </span></p>
                <p class="MsoNormal">
        
        
        
        
        
        
        
                </p>
                <p class="MsoNormal"><b><i><span lang="FR">Ainsi&nbsp;:</span></i></b></p>
                <p class="MsoNormal" style="text-align: center;">
                        
                        <img class="with-image"src="{{request()->getSchemeAndHttpHost()}}/imageAE/donneur.png"><b><i><span lang="FR">&nbsp;</span></i></b></p>
            </div>
            
            
            
            </div>
        </div>
    </div>
</section>

@stop


@section('pied_page')
@stop
