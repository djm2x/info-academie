(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1pWo":function(t,e,i){"use strict";i.r(e),i.d(e,"NiveauScolaireModule",(function(){return rt}));var o=i("ofXK"),n=i("tyNb"),c=i("mrSG"),s=i("fXoL"),r=i("XNiG"),a=i("VRyK"),l=i("3Pt+"),u=i("V2kc"),b=i("7q3A"),d=i("Wp6s"),m=i("kmnG"),h=i("qFsG"),p=i("d3UM"),f=i("bTqV"),g=i("FKr1");function v(t,e){if(1&t&&(s.Wb(0,"mat-option",14),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Db(1),s.Nc(" ",t.name," ")}}let L=(()=>{class t{constructor(t,e,i,o){this.fb=t,this.uow=e,this.route=i,this.router=o,this.subs=[],this.o=new u.f,this.title="",this.visualisation=!1,this.folderToSaveInServer="niveauScolaires",this.cycles=this.uow.cycles,this.id=0}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){this.createForm(),this.id=+this.route.snapshot.paramMap.get("id"),this.title="Ajouter Niveau Scolaire",0!==this.id&&this.uow.niveauScolaires.getOne(this.id).subscribe(t=>Object(c.b)(this,void 0,void 0,(function*(){this.o=t,console.log(this.o),this.title="Modifier Niveau Scolaire",this.createForm()})))}))}submit(t){let e=null;e=0===t.id?this.uow.niveauScolaires.post(t).subscribe(t=>{this.router.navigate(["/admin/settings/user"])}):this.uow.niveauScolaires.put(t.id,t).subscribe(t=>{this.router.navigate(["/admin/settings/user"])}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[l.r.required]],nom:[this.o.nom,[l.r.required]],nomAr:[this.o.nomAr,[l.r.required]],idCycle:[+this.o.idCycle,[l.r.required]],coursLigneGroupe:[this.o.coursLigneGroupe,[l.r.required]],coursLigneIndividuel:[this.o.coursLigneIndividuel,[l.r.required]],coursDomicileGroupe:[this.o.coursDomicileGroupe,[l.r.required]],coursDomicileIndividuel:[this.o.coursDomicileIndividuel,[l.r.required]]})}resetForm(){this.o=new u.f,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(l.c),s.Qb(b.a),s.Qb(n.a),s.Qb(n.e))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-update"]],decls:40,vars:6,consts:[[1,"row","justify-content-center","align-items-center","m-0","px-2"],[1,"mat-elevation-z8","mywith"],[3,"formGroup"],["appearance","fill",1,"col-md-4"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["formControlName","idCycle"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill",1,"col-md-3"],["matInput","","formControlName","coursLigneGroupe","required",""],["matInput","","formControlName","coursLigneIndividuel","required",""],["matInput","","formControlName","coursDomicileGroupe","required",""],["matInput","","formControlName","coursDomicileIndividuel","required",""],["mat-raised-button","","color","accent","type","submit",1,"mb-2",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"mat-card",1),s.Wb(2,"mat-card-header"),s.Wb(3,"mat-card-title"),s.Lc(4),s.Vb(),s.Vb(),s.Wb(5,"mat-card-content"),s.Wb(6,"form",2),s.Wb(7,"mat-form-field",3),s.Wb(8,"mat-label"),s.Lc(9,"nom"),s.Vb(),s.Rb(10,"input",4),s.Vb(),s.Wb(11,"mat-form-field",3),s.Wb(12,"mat-label"),s.Lc(13,"nom Ar"),s.Vb(),s.Rb(14,"input",5),s.Vb(),s.Wb(15,"mat-form-field",3),s.Wb(16,"mat-label"),s.Lc(17,"Cycle"),s.Vb(),s.Wb(18,"mat-select",6),s.Jc(19,v,2,2,"mat-option",7),s.jc(20,"async"),s.Vb(),s.Vb(),s.Wb(21,"mat-form-field",8),s.Wb(22,"mat-label"),s.Lc(23,"coursLigneGroupe"),s.Vb(),s.Rb(24,"input",9),s.Vb(),s.Wb(25,"mat-form-field",8),s.Wb(26,"mat-label"),s.Lc(27,"coursLigneIndividuel"),s.Vb(),s.Rb(28,"input",10),s.Vb(),s.Wb(29,"mat-form-field",8),s.Wb(30,"mat-label"),s.Lc(31,"coursDomicileGroupe"),s.Vb(),s.Rb(32,"input",11),s.Vb(),s.Wb(33,"mat-form-field",8),s.Wb(34,"mat-label"),s.Lc(35,"coursDomicileIndividuel"),s.Vb(),s.Rb(36,"input",12),s.Vb(),s.Vb(),s.Vb(),s.Wb(37,"mat-card-actions"),s.Wb(38,"button",13),s.ec("click",(function(){return e.submit(e.myForm.value)})),s.Lc(39,"Valider"),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Db(4),s.Mc(e.title),s.Db(2),s.pc("formGroup",e.myForm),s.Db(13),s.pc("ngForOf",s.kc(20,4,e.cycles)),s.Db(19),s.pc("disabled",e.myForm.invalid))},directives:[d.a,d.d,d.h,d.c,l.s,l.m,l.g,m.c,m.f,h.b,l.b,l.l,l.f,l.q,p.a,o.m,d.b,f.a,g.o],pipes:[o.b],styles:[""]}),t})();var V=i("M9IT"),W=i("Dh3D"),D=i("JX91"),w=i("0IaG"),S=i("qQ+2"),y=i("hUFt"),C=i("8lcG"),I=i("NFeN"),R=i("7EHt"),x=i("f0Cb"),G=i("+0xr"),J=i("Xa2L");function A(t,e){1&t&&s.Rb(0,"mat-spinner")}function k(t,e){if(1&t&&(s.Wb(0,"div",30),s.Jc(1,A,1,0,"mat-spinner",31),s.Vb()),2&t){const t=s.ic();s.Db(1),s.pc("ngIf",t.isLoadingResults)}}function q(t,e){1&t&&(s.Wb(0,"th",32),s.Lc(1,"Nom"),s.Vb())}function O(t,e){if(1&t&&(s.Wb(0,"td",33),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.nom)}}function N(t,e){1&t&&(s.Wb(0,"th",32),s.Lc(1,"Nom Ar"),s.Vb())}function F(t,e){if(1&t&&(s.Wb(0,"td",33),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.nomAr)}}function T(t,e){1&t&&(s.Wb(0,"th",32),s.Lc(1,"Cycle"),s.Vb())}function M(t,e){if(1&t&&(s.Wb(0,"td",33),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.idCycle)}}function j(t,e){1&t&&(s.Wb(0,"th",32),s.Lc(1,"coursLigneGroupe (DH)"),s.Vb())}function $(t,e){if(1&t&&(s.Wb(0,"td",33),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.coursLigneGroupe)}}function Q(t,e){1&t&&(s.Wb(0,"th",32),s.Lc(1,"coursLigneIndividuel (DH)"),s.Vb())}function z(t,e){if(1&t&&(s.Wb(0,"td",33),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.coursLigneIndividuel)}}function H(t,e){1&t&&(s.Wb(0,"th",32),s.Lc(1,"coursDomicileGroupe (DH)"),s.Vb())}function U(t,e){if(1&t&&(s.Wb(0,"td",33),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.coursDomicileGroupe)}}function E(t,e){1&t&&(s.Wb(0,"th",32),s.Lc(1,"coursDomicileIndividuel (DH)"),s.Vb())}function P(t,e){if(1&t&&(s.Wb(0,"td",33),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.coursDomicileIndividuel)}}function X(t,e){1&t&&s.Rb(0,"th",34)}const K=function(t){return["/admin/settings/niveauScolaire/update",t]};function _(t,e){if(1&t){const t=s.Xb();s.Wb(0,"td",33),s.Wb(1,"div",35),s.Wb(2,"button",36),s.Wb(3,"mat-icon"),s.Lc(4,"create"),s.Vb(),s.Vb(),s.Wb(5,"button",37),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().detail(i)})),s.Wb(6,"mat-icon"),s.Lc(7,"remove_red_eye"),s.Vb(),s.Vb(),s.Wb(8,"button",38),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().delete(i.id)})),s.Wb(9,"mat-icon"),s.Lc(10,"delete_sweep"),s.Vb(),s.Vb(),s.Vb(),s.Vb()}if(2&t){const t=e.$implicit;s.Db(2),s.pc("routerLink",s.rc(1,K,t.id))}}function B(t,e){1&t&&s.Rb(0,"tr",39)}function Y(t,e){1&t&&s.Rb(0,"tr",40)}const Z=function(){return[10,25,50,100,250]},tt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,o,n,c){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=o,this.url=n,this.breadcrumb=c,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","idCycle","coursLigneGroupe","coursLigneIndividuel","coursDomicileGroupe","coursDomicileIndividuel","option"],this.panelOpenState=!1,this.nom=new l.d(""),this.nomAr=new l.d(""),this.dataSubject=new r.a,this.isListTabSelected=!0,this.isChartTabSelected=!0,this.listTabSelectedEvent=new r.a,this.chartTabSelectedEvent=new r.a,this.breadcrumb.name="NiveauScolaires"}ngOnInit(){const t=Object(a.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(D.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value,""===this.nomAr.value?"*":this.nomAr.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.nomAr.setValue(""),this.update.next(!0)}search(){this.update.next(!0)}getPage(t,e,i,o,n,c){const s=this.uow.niveauScolaires.getAll(t,e,i,o,n,c).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(s)}openDialog(t,e,i){return this.dialog.open(L,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){this.openDialog(new u.f,"Ajouter "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const e=this.uow.niveauScolaires.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t,e){return t?t&&t.startsWith("http")?t:`${this.url}/niveauScolaires/${e}/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.niveauScolaires.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(b.a),s.Qb(w.b),s.Qb(S.a),s.Qb(y.a),s.Qb("BASE_URL"),s.Qb(C.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-niveauScolaire"]],viewQuery:function(t,e){var i;1&t&&(s.Hc(V.a,!0),s.Hc(W.a,!0)),2&t&&(s.zc(i=s.fc())&&(e.paginator=i.first),s.zc(i=s.fc())&&(e.sort=i.first))},decls:67,vars:9,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","idCycle"],["matColumnDef","coursLigneGroupe"],["matColumnDef","coursLigneIndividuel"],["matColumnDef","coursDomicileGroupe"],["matColumnDef","coursDomicileIndividuel"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"routerLink"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"button",1),s.ec("click",(function(){return e.add()})),s.Wb(2,"mat-icon"),s.Lc(3,"add"),s.Vb(),s.Lc(4," NiveauScolaire "),s.Vb(),s.Vb(),s.Wb(5,"mat-accordion"),s.Wb(6,"mat-expansion-panel",2),s.ec("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),s.Wb(7,"mat-expansion-panel-header"),s.Wb(8,"mat-panel-title",3),s.Wb(9,"mat-icon"),s.Lc(10,"search"),s.Vb(),s.Wb(11,"p",4),s.Lc(12,"Recherche"),s.Vb(),s.Vb(),s.Rb(13,"mat-panel-description"),s.Vb(),s.Rb(14,"mat-divider"),s.Wb(15,"div",5),s.Wb(16,"mat-form-field",6),s.Wb(17,"mat-label"),s.Lc(18,"nom"),s.Vb(),s.Rb(19,"input",7),s.Vb(),s.Wb(20,"mat-form-field",6),s.Wb(21,"mat-label"),s.Lc(22,"nomAr"),s.Vb(),s.Rb(23,"input",7),s.Vb(),s.Vb(),s.Wb(24,"div",8),s.Wb(25,"button",9),s.ec("click",(function(){return e.reset()})),s.Wb(26,"mat-icon"),s.Lc(27,"refresh"),s.Vb(),s.Lc(28," R\xe9initialiser "),s.Vb(),s.Lc(29," \xa0\xa0 "),s.Wb(30,"button",1),s.ec("click",(function(){return e.search()})),s.Wb(31,"mat-icon"),s.Lc(32,"search"),s.Vb(),s.Lc(33," Rechercher "),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(34,"div",10),s.Jc(35,k,2,1,"div",11),s.Wb(36,"div",12),s.Wb(37,"table",13,14),s.Ub(39,15),s.Jc(40,q,2,0,"th",16),s.Jc(41,O,2,1,"td",17),s.Tb(),s.Ub(42,18),s.Jc(43,N,2,0,"th",16),s.Jc(44,F,2,1,"td",17),s.Tb(),s.Ub(45,19),s.Jc(46,T,2,0,"th",16),s.Jc(47,M,2,1,"td",17),s.Tb(),s.Ub(48,20),s.Jc(49,j,2,0,"th",16),s.Jc(50,$,2,1,"td",17),s.Tb(),s.Ub(51,21),s.Jc(52,Q,2,0,"th",16),s.Jc(53,z,2,1,"td",17),s.Tb(),s.Ub(54,22),s.Jc(55,H,2,0,"th",16),s.Jc(56,U,2,1,"td",17),s.Tb(),s.Ub(57,23),s.Jc(58,E,2,0,"th",16),s.Jc(59,P,2,1,"td",17),s.Tb(),s.Ub(60,24),s.Jc(61,X,1,0,"th",25),s.Jc(62,_,11,3,"td",17),s.Tb(),s.Jc(63,B,1,0,"tr",26),s.Jc(64,Y,1,0,"tr",27),s.Vb(),s.Vb(),s.Rb(65,"mat-paginator",28,29),s.Vb()),2&t&&(s.Db(19),s.pc("formControl",e.nom),s.Db(4),s.pc("formControl",e.nomAr),s.Db(12),s.pc("ngIf",e.isLoadingResults),s.Db(2),s.pc("dataSource",e.dataSource),s.Db(26),s.pc("matHeaderRowDef",e.displayedColumns),s.Db(1),s.pc("matRowDefColumns",e.displayedColumns),s.Db(1),s.pc("length",e.resultsLength)("pageSizeOptions",s.qc(8,Z)))},directives:[f.a,I.a,R.a,R.c,R.e,R.f,R.d,x.a,m.c,m.f,h.b,l.b,l.q,l.l,l.e,o.n,G.j,W.a,G.c,G.e,G.b,G.g,G.i,V.a,J.b,G.d,W.b,G.a,n.f,G.f,G.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()},{path:"update/:id",component:L}];let et=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[n.h.forChild(tt)],n.h]}),t})();var it=i("tk/3"),ot=i("2thQ"),nt=i("lOAm"),ct=i("Fr4G"),st=i("67nL");let rt=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[o.c,et,it.c,ot.a,l.h,l.p,nt.a,ct.a,st.a]]}),t})()}}]);