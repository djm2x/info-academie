(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QTC5:function(t,e,i){"use strict";i.r(e),i.d(e,"BrancheModule",function(){return Y});var a=i("ofXK"),o=i("tyNb"),n=i("mrSG"),s=i("fXoL"),c=i("VRyK"),r=i("3Pt+"),l=i("0IaG"),b=i("V2kc"),u=i("7q3A"),m=i("/t3+"),d=i("f0Cb"),h=i("kmnG"),p=i("qFsG"),f=i("d3UM"),g=i("bTqV"),v=i("FKr1");function T(t,e){if(1&t&&(s.Ub(0,"mat-option",13),s.Mc(1),s.Tb()),2&t){const t=e.$implicit;s.mc("value",t.id),s.Cb(1),s.Nc(t.nom)}}function U(t,e){if(1&t){const t=s.Vb();s.Ub(0,"button",14),s.bc("click",function(){s.Bc(t);const e=s.fc();return e.onOkClick(e.myForm.value)}),s.Mc(1,"Enregistre"),s.Tb()}if(2&t){const t=s.fc();s.mc("disabled",t.myForm.invalid)}}let C=(()=>{class t{constructor(t,e,i,a){this.dialogRef=t,this.data=e,this.fb=i,this.uow=a,this.subs=[],this.title="",this.visualisation=!1,this.niveauScolaires=this.uow.niveauScolaires.get(),this.folderToSaveInServer="branches"}ngOnInit(){return Object(n.a)(this,void 0,void 0,function*(){this.o=this.data.model,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm()})}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.branches.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.branches.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.u.required]],nom:[this.o.nom,[r.u.required]],nomAr:[this.o.nomAr,[r.u.required]],idNiveauScolaire:[this.o.idNiveauScolaire,[r.u.required]]})}resetForm(){this.o=new b.b,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(l.g),s.Ob(l.a),s.Ob(r.e),s.Ob(u.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-update"]],decls:27,vars:6,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["formControlName","idNiveauScolaire"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"h1",1),s.Ub(2,"mat-toolbar",2),s.Ub(3,"span"),s.Mc(4),s.Tb(),s.Tb(),s.Pb(5,"mat-divider"),s.Tb(),s.Ub(6,"div",3),s.Ub(7,"mat-dialog-content"),s.Ub(8,"form",4),s.Ub(9,"mat-form-field",5),s.Ub(10,"mat-label"),s.Mc(11,"nom"),s.Tb(),s.Pb(12,"input",6),s.Tb(),s.Ub(13,"mat-form-field",5),s.Ub(14,"mat-label"),s.Mc(15,"nomAr"),s.Tb(),s.Pb(16,"input",7),s.Tb(),s.Ub(17,"mat-form-field",5),s.Ub(18,"mat-label"),s.Mc(19,"niveauScolaires"),s.Tb(),s.Ub(20,"mat-select",8),s.Kc(21,T,2,2,"mat-option",9),s.gc(22,"async"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(23,"mat-dialog-actions",10),s.Ub(24,"button",11),s.bc("click",function(){return e.onNoClick()}),s.Mc(25,"Annuler"),s.Tb(),s.Kc(26,U,2,1,"button",12),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Cb(4),s.Nc(e.title),s.Cb(4),s.mc("formGroup",e.myForm),s.Cb(13),s.mc("ngForOf",s.hc(22,4,e.niveauScolaires)),s.Cb(5),s.mc("ngIf",!e.visualisation))},directives:[l.h,m.a,d.a,l.e,r.v,r.p,r.i,h.c,h.f,p.b,r.c,r.o,r.h,r.t,f.a,a.m,l.c,g.a,a.n,v.n],pipes:[a.b],styles:[""]}),t})();var S=i("M9IT"),w=i("Dh3D"),M=i("JX91"),y=i("hUFt"),k=i("8lcG"),x=i("NFeN"),O=i("7EHt"),R=i("+0xr"),L=i("Xa2L"),N=i("Qu3c");function A(t,e){if(1&t&&(s.Ub(0,"mat-option",28),s.Mc(1),s.Tb()),2&t){const t=e.$implicit;s.mc("value",t.id),s.Cb(1),s.Nc(t.nom)}}function D(t,e){1&t&&s.Pb(0,"mat-spinner")}function I(t,e){if(1&t&&(s.Ub(0,"div",29),s.Kc(1,D,1,0,"mat-spinner",30),s.Tb()),2&t){const t=s.fc();s.Cb(1),s.mc("ngIf",t.isLoadingResults)}}function F(t,e){1&t&&(s.Ub(0,"th",31),s.Mc(1,"Nom"),s.Tb())}function K(t,e){if(1&t&&(s.Ub(0,"td",32),s.Mc(1),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.Nc(t.nom)}}function P(t,e){1&t&&(s.Ub(0,"th",31),s.Mc(1,"Nom Ar"),s.Tb())}function j(t,e){if(1&t&&(s.Ub(0,"td",32),s.Mc(1),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.Nc(t.nomAr)}}function q(t,e){1&t&&(s.Ub(0,"th",33),s.Mc(1,"Niveau Scolaire"),s.Tb())}function z(t,e){if(1&t&&(s.Ub(0,"td",32),s.Mc(1),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.Nc(t.niveau_scolaire.nom)}}function G(t,e){1&t&&s.Pb(0,"th",33)}function $(t,e){if(1&t){const t=s.Vb();s.Ub(0,"td",32),s.Ub(1,"div",34),s.Ub(2,"button",35),s.bc("click",function(){s.Bc(t);const i=e.$implicit;return s.fc().edit(i)}),s.Ub(3,"mat-icon"),s.Mc(4,"create"),s.Tb(),s.Tb(),s.Ub(5,"button",36),s.bc("click",function(){s.Bc(t);const i=e.$implicit;return s.fc().delete(i.id)}),s.Ub(6,"mat-icon"),s.Mc(7,"delete_sweep"),s.Tb(),s.Tb(),s.Tb(),s.Tb()}}function B(t,e){1&t&&s.Pb(0,"tr",37)}function V(t,e){1&t&&s.Pb(0,"tr",38)}const E=function(){return[10,25,50,100,250]},H=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,a,o){this.uow=t,this.dialog=e,this.mydialog=i,this.url=a,this.breadcrumb=o,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","niveauScolaire","option"],this.panelOpenState=!1,this.nom=new r.f(""),this.nomAr=new r.f(""),this.idNiveauScolaire=new r.f(0),this.niveauScolaires=this.uow.niveauScolaires.get(),this.breadcrumb.name="Branches"}ngOnInit(){const t=Object(c.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(M.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value,""===this.nomAr.value?"*":this.nomAr.value,0===this.idNiveauScolaire.value?0:this.idNiveauScolaire.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.nomAr.setValue(""),this.idNiveauScolaire.setValue(0),this.update.next(!0)}search(){this.update.next(!0)}getPage(t,e,i,a,o,n,s){const c=this.uow.branches.getAll(t,e,i,a,o,n,s).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(c)}openDialog(t,e,i){return this.dialog.open(C,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){this.openDialog(new b.b,"Ajouter "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(n.a)(this,void 0,void 0,function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const e=this.uow.branches.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}})}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/branches/${t.replace(";","")}`:"assets/404.png"}imgError(t){t.src="assets/404.png"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(n.a)(this,void 0,void 0,function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.branches.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}})}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(u.a),s.Ob(l.b),s.Ob(y.a),s.Ob("BASE_URL"),s.Ob(k.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-branche"]],viewQuery:function(t,e){if(1&t&&(s.Gc(S.a,!0),s.Gc(w.a,!0)),2&t){let t;s.xc(t=s.cc())&&(e.paginator=t.first),s.xc(t=s.cc())&&(e.sort=t.first)}},decls:61,vars:13,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","niveauScolaire"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["mat-icon-button","","matTooltip","Ajouter quizzes","color","accent",3,"click"],["mat-icon-button","","matTooltip","supprimer","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"button",1),s.bc("click",function(){return e.add()}),s.Ub(2,"mat-icon"),s.Mc(3,"add"),s.Tb(),s.Mc(4," Branche "),s.Tb(),s.Tb(),s.Ub(5,"mat-accordion"),s.Ub(6,"mat-expansion-panel",2),s.bc("opened",function(){return e.panelOpenState=!0})("closed",function(){return e.panelOpenState=!1}),s.Ub(7,"mat-expansion-panel-header"),s.Ub(8,"mat-panel-title",3),s.Ub(9,"mat-icon"),s.Mc(10,"search"),s.Tb(),s.Ub(11,"p",4),s.Mc(12,"Recherche"),s.Tb(),s.Tb(),s.Pb(13,"mat-panel-description"),s.Tb(),s.Pb(14,"mat-divider"),s.Ub(15,"div",5),s.Ub(16,"mat-form-field",6),s.Ub(17,"mat-label"),s.Mc(18,"nom"),s.Tb(),s.Pb(19,"input",7),s.Tb(),s.Ub(20,"mat-form-field",6),s.Ub(21,"mat-label"),s.Mc(22,"nomAr"),s.Tb(),s.Pb(23,"input",7),s.Tb(),s.Ub(24,"mat-form-field",6),s.Ub(25,"mat-label"),s.Mc(26,"niveauScolaires"),s.Tb(),s.Ub(27,"mat-select",8),s.Kc(28,A,2,2,"mat-option",9),s.gc(29,"async"),s.Tb(),s.Tb(),s.Tb(),s.Ub(30,"div",10),s.Ub(31,"button",11),s.bc("click",function(){return e.reset()}),s.Ub(32,"mat-icon"),s.Mc(33,"refresh"),s.Tb(),s.Mc(34," R\xe9initialiser "),s.Tb(),s.Mc(35," \xa0\xa0 "),s.Ub(36,"button",1),s.bc("click",function(){return e.search()}),s.Ub(37,"mat-icon"),s.Mc(38,"search"),s.Tb(),s.Mc(39," Rechercher "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(40,"div",12),s.Kc(41,I,2,1,"div",13),s.Ub(42,"div",14),s.Ub(43,"table",15,16),s.Sb(45,17),s.Kc(46,F,2,0,"th",18),s.Kc(47,K,2,1,"td",19),s.Rb(),s.Sb(48,20),s.Kc(49,P,2,0,"th",18),s.Kc(50,j,2,1,"td",19),s.Rb(),s.Sb(51,21),s.Kc(52,q,2,0,"th",22),s.Kc(53,z,2,1,"td",19),s.Rb(),s.Sb(54,23),s.Kc(55,G,1,0,"th",22),s.Kc(56,$,8,0,"td",19),s.Rb(),s.Kc(57,B,1,0,"tr",24),s.Kc(58,V,1,0,"tr",25),s.Tb(),s.Tb(),s.Pb(59,"mat-paginator",26,27),s.Tb()),2&t&&(s.Cb(19),s.mc("formControl",e.nom),s.Cb(4),s.mc("formControl",e.nomAr),s.Cb(4),s.mc("formControl",e.idNiveauScolaire),s.Cb(1),s.mc("ngForOf",s.hc(29,10,e.niveauScolaires)),s.Cb(13),s.mc("ngIf",e.isLoadingResults),s.Cb(2),s.mc("dataSource",e.dataSource),s.Cb(14),s.mc("matHeaderRowDef",e.displayedColumns),s.Cb(1),s.mc("matRowDefColumns",e.displayedColumns),s.Cb(1),s.mc("length",e.resultsLength)("pageSizeOptions",s.oc(12,E)))},directives:[g.a,x.a,O.a,O.c,O.e,O.f,O.d,d.a,h.c,h.f,p.b,r.c,r.t,r.o,r.g,f.a,a.m,a.n,R.j,w.a,R.c,R.e,R.b,R.g,R.i,S.a,v.n,L.b,R.d,w.b,R.a,N.a,R.f,R.h],pipes:[a.b],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let Q=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[o.h.forChild(H)],o.h]}),t})();var X=i("tk/3"),_=i("2thQ"),J=i("lOAm"),W=i("Fr4G");let Y=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[a.c,Q,X.d,_.a,r.j,r.s,J.a,W.a]]}),t})()}}]);