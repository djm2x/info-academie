(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{PUEU:function(t,e,i){"use strict";i.r(e),i.d(e,"LieuCoursModule",function(){return _});var o=i("ofXK"),s=i("tyNb"),a=i("mrSG"),n=i("fXoL"),r=i("VRyK"),c=i("3Pt+"),l=i("0IaG"),b=i("V2kc"),u=i("7q3A"),d=i("/t3+"),m=i("f0Cb"),h=i("kmnG"),p=i("qFsG"),f=i("bTqV");function g(t,e){if(1&t){const t=n.Vb();n.Ub(0,"button",11),n.bc("click",function(){n.zc(t);const e=n.fc();return e.onOkClick(e.myForm.value)}),n.Kc(1,"Enregistre"),n.Tb()}if(2&t){const t=n.fc();n.mc("disabled",t.myForm.invalid)}}let T=(()=>{class t{constructor(t,e,i,o){this.dialogRef=t,this.data=e,this.fb=i,this.uow=o,this.subs=[],this.title="",this.visualisation=!1,this.folderToSaveInServer="lieuCours"}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){this.o=this.data.model,this.folderToSaveInServer=this.folderToSaveInServer+"_"+this.o.id,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm(),0!==this.o.id&&setTimeout(()=>this.createForm(),300)})}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.lieuCours.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.lieuCours.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[c.u.required]],nom:[this.o.nom,[c.u.required]],nomAr:[this.o.nomAr,[c.u.required]]})}resetForm(){this.o=new b.h,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(l.g),n.Ob(l.a),n.Ob(c.e),n.Ob(u.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-update"]],decls:21,vars:3,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"h1",1),n.Ub(2,"mat-toolbar",2),n.Ub(3,"span"),n.Kc(4),n.Tb(),n.Tb(),n.Pb(5,"mat-divider"),n.Tb(),n.Ub(6,"div",3),n.Ub(7,"mat-dialog-content"),n.Ub(8,"form",4),n.Ub(9,"mat-form-field",5),n.Ub(10,"mat-label"),n.Kc(11,"nom"),n.Tb(),n.Pb(12,"input",6),n.Tb(),n.Ub(13,"mat-form-field",5),n.Ub(14,"mat-label"),n.Kc(15,"nomAr"),n.Tb(),n.Pb(16,"input",7),n.Tb(),n.Tb(),n.Tb(),n.Ub(17,"mat-dialog-actions",8),n.Ub(18,"button",9),n.bc("click",function(){return e.onNoClick()}),n.Kc(19,"Annuler"),n.Tb(),n.Ic(20,g,2,1,"button",10),n.Tb(),n.Tb(),n.Tb()),2&t&&(n.Cb(4),n.Lc(e.title),n.Cb(4),n.mc("formGroup",e.myForm),n.Cb(12),n.mc("ngIf",!e.visualisation))},directives:[l.h,d.a,m.a,l.e,c.v,c.p,c.i,h.c,h.f,p.b,c.c,c.o,c.h,c.t,l.c,f.a,o.n],styles:[""]}),t})();var U=i("M9IT"),v=i("Dh3D"),C=i("JX91"),w=i("hUFt"),I=i("8lcG"),k=i("NFeN"),y=i("7EHt"),S=i("+0xr"),L=i("Xa2L");function x(t,e){1&t&&n.Pb(0,"mat-spinner")}function O(t,e){if(1&t&&(n.Ub(0,"div",25),n.Ic(1,x,1,0,"mat-spinner",26),n.Tb()),2&t){const t=n.fc();n.Cb(1),n.mc("ngIf",t.isLoadingResults)}}function R(t,e){1&t&&(n.Ub(0,"th",27),n.Kc(1,"Nom"),n.Tb())}function K(t,e){if(1&t&&(n.Ub(0,"td",28),n.Kc(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Lc(t.nom)}}function A(t,e){1&t&&(n.Ub(0,"th",27),n.Kc(1,"Nom Ar"),n.Tb())}function D(t,e){if(1&t&&(n.Ub(0,"td",28),n.Kc(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Lc(t.nomAr)}}function P(t,e){1&t&&n.Pb(0,"th",29)}function F(t,e){if(1&t){const t=n.Vb();n.Ub(0,"td",28),n.Ub(1,"div",30),n.Ub(2,"button",31),n.bc("click",function(){n.zc(t);const i=e.$implicit;return n.fc().edit(i)}),n.Ub(3,"mat-icon"),n.Kc(4,"create"),n.Tb(),n.Tb(),n.Ub(5,"button",32),n.bc("click",function(){n.zc(t);const i=e.$implicit;return n.fc().detail(i)}),n.Ub(6,"mat-icon"),n.Kc(7,"remove_red_eye"),n.Tb(),n.Tb(),n.Ub(8,"button",33),n.bc("click",function(){n.zc(t);const i=e.$implicit;return n.fc().delete(i.id)}),n.Ub(9,"mat-icon"),n.Kc(10,"delete_sweep"),n.Tb(),n.Tb(),n.Tb(),n.Tb()}}function z(t,e){1&t&&n.Pb(0,"tr",34)}function j(t,e){1&t&&n.Pb(0,"tr",35)}const E=function(){return[10,25,50,100,250]},q=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,o,s){this.uow=t,this.dialog=e,this.mydialog=i,this.url=o,this.breadcrumb=s,this.update=new n.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","option"],this.panelOpenState=!1,this.nom=new c.f(""),this.nomAr=new c.f(""),this.breadcrumb.name="lieuCours"}ngOnInit(){const t=Object(r.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(C.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value,""===this.nomAr.value?"*":this.nomAr.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.nomAr.setValue(""),this.update.next(!0)}search(){this.update.next(!0)}getPage(t,e,i,o,s,a){const n=this.uow.lieuCours.getAll(t,e,i,o,s,a).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(n)}openDialog(t,e,i){return this.dialog.open(T,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){this.openDialog(new b.h,"Ajouter "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(a.a)(this,void 0,void 0,function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const e=this.uow.lieuCours.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}})}displayImage(t,e){return t?t&&t.startsWith("http")?t:`${this.url}/lieuCours/${e}/${t.replace(";","")}`:"assets/404.png"}imgError(t){t.src="assets/404.png"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(a.a)(this,void 0,void 0,function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.lieuCours.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}})}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(u.a),n.Ob(l.b),n.Ob(w.a),n.Ob("BASE_URL"),n.Ob(I.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-lieuCours"]],viewQuery:function(t,e){if(1&t&&(n.Ec(U.a,!0),n.Ec(v.a,!0)),2&t){let t;n.wc(t=n.cc())&&(e.paginator=t.first),n.wc(t=n.cc())&&(e.sort=t.first)}},decls:52,vars:9,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"button",1),n.bc("click",function(){return e.add()}),n.Ub(2,"mat-icon"),n.Kc(3,"add"),n.Tb(),n.Kc(4," LieuCours "),n.Tb(),n.Tb(),n.Ub(5,"mat-accordion"),n.Ub(6,"mat-expansion-panel",2),n.bc("opened",function(){return e.panelOpenState=!0})("closed",function(){return e.panelOpenState=!1}),n.Ub(7,"mat-expansion-panel-header"),n.Ub(8,"mat-panel-title",3),n.Ub(9,"mat-icon"),n.Kc(10,"search"),n.Tb(),n.Ub(11,"p",4),n.Kc(12,"Recherche"),n.Tb(),n.Tb(),n.Pb(13,"mat-panel-description"),n.Tb(),n.Pb(14,"mat-divider"),n.Ub(15,"div",5),n.Ub(16,"mat-form-field",6),n.Ub(17,"mat-label"),n.Kc(18,"nom"),n.Tb(),n.Pb(19,"input",7),n.Tb(),n.Ub(20,"mat-form-field",6),n.Ub(21,"mat-label"),n.Kc(22,"nomAr"),n.Tb(),n.Pb(23,"input",7),n.Tb(),n.Tb(),n.Ub(24,"div",8),n.Ub(25,"button",9),n.bc("click",function(){return e.reset()}),n.Ub(26,"mat-icon"),n.Kc(27,"refresh"),n.Tb(),n.Kc(28," R\xe9initialiser "),n.Tb(),n.Kc(29," \xa0\xa0 "),n.Ub(30,"button",1),n.bc("click",function(){return e.search()}),n.Ub(31,"mat-icon"),n.Kc(32,"search"),n.Tb(),n.Kc(33," Rechercher "),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(34,"div",10),n.Ic(35,O,2,1,"div",11),n.Ub(36,"div",12),n.Ub(37,"table",13,14),n.Sb(39,15),n.Ic(40,R,2,0,"th",16),n.Ic(41,K,2,1,"td",17),n.Rb(),n.Sb(42,18),n.Ic(43,A,2,0,"th",16),n.Ic(44,D,2,1,"td",17),n.Rb(),n.Sb(45,19),n.Ic(46,P,1,0,"th",20),n.Ic(47,F,11,0,"td",17),n.Rb(),n.Ic(48,z,1,0,"tr",21),n.Ic(49,j,1,0,"tr",22),n.Tb(),n.Tb(),n.Pb(50,"mat-paginator",23,24),n.Tb()),2&t&&(n.Cb(19),n.mc("formControl",e.nom),n.Cb(4),n.mc("formControl",e.nomAr),n.Cb(12),n.mc("ngIf",e.isLoadingResults),n.Cb(2),n.mc("dataSource",e.dataSource),n.Cb(11),n.mc("matHeaderRowDef",e.displayedColumns),n.Cb(1),n.mc("matRowDefColumns",e.displayedColumns),n.Cb(1),n.mc("length",e.resultsLength)("pageSizeOptions",n.nc(8,E)))},directives:[f.a,k.a,y.a,y.c,y.e,y.f,y.d,m.a,h.c,h.f,p.b,c.c,c.t,c.o,c.g,o.n,S.j,v.a,S.c,S.e,S.b,S.g,S.i,U.a,L.b,S.d,v.b,S.a,S.f,S.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let N=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)},imports:[[s.h.forChild(q)],s.h]}),t})();var G=i("tk/3"),M=i("2thQ"),V=i("lOAm"),$=i("Fr4G");let _=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)},imports:[[o.c,N,G.c,M.a,c.j,c.s,V.a,$.a]]}),t})()}}]);