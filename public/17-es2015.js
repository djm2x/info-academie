(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1pWo":function(t,e,i){"use strict";i.r(e),i.d(e,"NiveauScolaireModule",(function(){return U}));var a=i("ofXK"),s=i("tyNb"),o=i("mrSG"),n=i("fXoL"),c=i("XNiG"),r=i("VRyK"),l=i("3Pt+"),b=i("0IaG"),d=i("V2kc"),u=i("7q3A"),m=i("/t3+"),h=i("f0Cb"),p=i("kmnG"),f=i("qFsG"),g=i("bTqV");function v(t,e){if(1&t){const t=n.Xb();n.Wb(0,"button",11),n.ec("click",(function(){n.Cc(t);const e=n.ic();return e.onOkClick(e.myForm.value)})),n.Lc(1,"Enregistre"),n.Vb()}if(2&t){const t=n.ic();n.pc("disabled",t.myForm.invalid)}}let V=(()=>{class t{constructor(t,e,i,a){this.dialogRef=t,this.data=e,this.fb=i,this.uow=a,this.subs=[],this.title="",this.visualisation=!1,this.folderToSaveInServer="niveauScolaires"}ngOnInit(){return Object(o.b)(this,void 0,void 0,(function*(){this.o=this.data.model,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm(),0!==this.o.id&&setTimeout(()=>this.createForm(),300),setTimeout(()=>{},100)}))}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.niveauScolaires.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.niveauScolaires.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[l.r.required]],nom:[this.o.nom,[l.r.required]],nomAr:[this.o.nomAr,[l.r.required]]})}resetForm(){this.o=new d.f,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(b.g),n.Qb(b.a),n.Qb(l.c),n.Qb(u.a))},t.\u0275cmp=n.Kb({type:t,selectors:[["app-update"]],decls:21,vars:3,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(n.Wb(0,"div",0),n.Wb(1,"h1",1),n.Wb(2,"mat-toolbar",2),n.Wb(3,"span"),n.Lc(4),n.Vb(),n.Vb(),n.Rb(5,"mat-divider"),n.Vb(),n.Wb(6,"div",3),n.Wb(7,"mat-dialog-content"),n.Wb(8,"form",4),n.Wb(9,"mat-form-field",5),n.Wb(10,"mat-label"),n.Lc(11,"nom"),n.Vb(),n.Rb(12,"input",6),n.Vb(),n.Wb(13,"mat-form-field",5),n.Wb(14,"mat-label"),n.Lc(15,"nomAr"),n.Vb(),n.Rb(16,"input",7),n.Vb(),n.Vb(),n.Vb(),n.Wb(17,"mat-dialog-actions",8),n.Wb(18,"button",9),n.ec("click",(function(){return e.onNoClick()})),n.Lc(19,"Annuler"),n.Vb(),n.Jc(20,v,2,1,"button",10),n.Vb(),n.Vb(),n.Vb()),2&t&&(n.Db(4),n.Mc(e.title),n.Db(4),n.pc("formGroup",e.myForm),n.Db(12),n.pc("ngIf",!e.visualisation))},directives:[b.h,m.a,h.a,b.e,l.s,l.m,l.g,p.c,p.f,f.b,l.b,l.l,l.f,l.q,b.c,g.a,a.n],styles:[""]}),t})();var W=i("M9IT"),L=i("Dh3D"),w=i("JX91"),S=i("qQ+2"),D=i("hUFt"),R=i("8lcG"),k=i("NFeN"),y=i("7EHt"),C=i("+0xr"),x=i("Xa2L");function A(t,e){1&t&&n.Rb(0,"mat-spinner")}function I(t,e){if(1&t&&(n.Wb(0,"div",25),n.Jc(1,A,1,0,"mat-spinner",26),n.Vb()),2&t){const t=n.ic();n.Db(1),n.pc("ngIf",t.isLoadingResults)}}function O(t,e){1&t&&(n.Wb(0,"th",27),n.Lc(1,"Nom"),n.Vb())}function F(t,e){if(1&t&&(n.Wb(0,"td",28),n.Lc(1),n.Vb()),2&t){const t=e.$implicit;n.Db(1),n.Mc(t.nom)}}function N(t,e){1&t&&(n.Wb(0,"th",27),n.Lc(1,"Nom Ar"),n.Vb())}function T(t,e){if(1&t&&(n.Wb(0,"td",28),n.Lc(1),n.Vb()),2&t){const t=e.$implicit;n.Db(1),n.Mc(t.nomAr)}}function J(t,e){1&t&&n.Rb(0,"th",29)}function q(t,e){if(1&t){const t=n.Xb();n.Wb(0,"td",28),n.Wb(1,"div",30),n.Wb(2,"button",31),n.ec("click",(function(){n.Cc(t);const i=e.$implicit;return n.ic().edit(i)})),n.Wb(3,"mat-icon"),n.Lc(4,"create"),n.Vb(),n.Vb(),n.Wb(5,"button",32),n.ec("click",(function(){n.Cc(t);const i=e.$implicit;return n.ic().detail(i)})),n.Wb(6,"mat-icon"),n.Lc(7,"remove_red_eye"),n.Vb(),n.Vb(),n.Wb(8,"button",33),n.ec("click",(function(){n.Cc(t);const i=e.$implicit;return n.ic().delete(i.id)})),n.Wb(9,"mat-icon"),n.Lc(10,"delete_sweep"),n.Vb(),n.Vb(),n.Vb(),n.Vb()}}function Q(t,e){1&t&&n.Rb(0,"tr",34)}function j(t,e){1&t&&n.Rb(0,"tr",35)}const z=function(){return[10,25,50,100,250]},E=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,a,s,o){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=a,this.url=s,this.breadcrumb=o,this.update=new n.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","option"],this.panelOpenState=!1,this.nom=new l.d(""),this.nomAr=new l.d(""),this.dataSubject=new c.a,this.isListTabSelected=!0,this.isChartTabSelected=!0,this.listTabSelectedEvent=new c.a,this.chartTabSelectedEvent=new c.a,this.breadcrumb.name="NiveauScolaires"}ngOnInit(){const t=Object(r.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(w.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value,""===this.nomAr.value?"*":this.nomAr.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.nomAr.setValue(""),this.update.next(!0)}search(){this.update.next(!0)}getPage(t,e,i,a,s,o){const n=this.uow.niveauScolaires.getAll(t,e,i,a,s,o).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(n)}openDialog(t,e,i){return this.dialog.open(V,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){this.openDialog(new d.f,"Ajouter "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(o.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const e=this.uow.niveauScolaires.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/niveauScolaires/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(o.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.niveauScolaires.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(u.a),n.Qb(b.b),n.Qb(S.a),n.Qb(D.a),n.Qb("BASE_URL"),n.Qb(R.a))},t.\u0275cmp=n.Kb({type:t,selectors:[["app-niveauScolaire"]],viewQuery:function(t,e){var i;1&t&&(n.Hc(W.a,!0),n.Hc(L.a,!0)),2&t&&(n.zc(i=n.fc())&&(e.paginator=i.first),n.zc(i=n.fc())&&(e.sort=i.first))},decls:52,vars:9,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","m-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(n.Wb(0,"div",0),n.Wb(1,"button",1),n.ec("click",(function(){return e.add()})),n.Wb(2,"mat-icon"),n.Lc(3,"add"),n.Vb(),n.Lc(4," NiveauScolaire "),n.Vb(),n.Vb(),n.Wb(5,"mat-accordion"),n.Wb(6,"mat-expansion-panel",2),n.ec("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),n.Wb(7,"mat-expansion-panel-header"),n.Wb(8,"mat-panel-title",3),n.Wb(9,"mat-icon"),n.Lc(10,"search"),n.Vb(),n.Wb(11,"p",4),n.Lc(12,"Recherche"),n.Vb(),n.Vb(),n.Rb(13,"mat-panel-description"),n.Vb(),n.Rb(14,"mat-divider"),n.Wb(15,"div",5),n.Wb(16,"mat-form-field",6),n.Wb(17,"mat-label"),n.Lc(18,"nom"),n.Vb(),n.Rb(19,"input",7),n.Vb(),n.Wb(20,"mat-form-field",6),n.Wb(21,"mat-label"),n.Lc(22,"nomAr"),n.Vb(),n.Rb(23,"input",7),n.Vb(),n.Vb(),n.Wb(24,"div",8),n.Wb(25,"button",9),n.ec("click",(function(){return e.reset()})),n.Wb(26,"mat-icon"),n.Lc(27,"refresh"),n.Vb(),n.Lc(28," R\xe9initialiser "),n.Vb(),n.Lc(29," \xa0\xa0 "),n.Wb(30,"button",1),n.ec("click",(function(){return e.search()})),n.Wb(31,"mat-icon"),n.Lc(32,"search"),n.Vb(),n.Lc(33," Rechercher "),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Wb(34,"div",10),n.Jc(35,I,2,1,"div",11),n.Wb(36,"div",12),n.Wb(37,"table",13,14),n.Ub(39,15),n.Jc(40,O,2,0,"th",16),n.Jc(41,F,2,1,"td",17),n.Tb(),n.Ub(42,18),n.Jc(43,N,2,0,"th",16),n.Jc(44,T,2,1,"td",17),n.Tb(),n.Ub(45,19),n.Jc(46,J,1,0,"th",20),n.Jc(47,q,11,0,"td",17),n.Tb(),n.Jc(48,Q,1,0,"tr",21),n.Jc(49,j,1,0,"tr",22),n.Vb(),n.Vb(),n.Rb(50,"mat-paginator",23,24),n.Vb()),2&t&&(n.Db(19),n.pc("formControl",e.nom),n.Db(4),n.pc("formControl",e.nomAr),n.Db(12),n.pc("ngIf",e.isLoadingResults),n.Db(2),n.pc("dataSource",e.dataSource),n.Db(11),n.pc("matHeaderRowDef",e.displayedColumns),n.Db(1),n.pc("matRowDefColumns",e.displayedColumns),n.Db(1),n.pc("length",e.resultsLength)("pageSizeOptions",n.qc(8,z)))},directives:[g.a,k.a,y.a,y.c,y.e,y.f,y.d,h.a,p.c,p.f,f.b,l.b,l.q,l.l,l.e,a.n,C.j,L.a,C.c,C.e,C.b,C.g,C.i,W.a,x.b,C.d,L.b,C.a,C.f,C.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let G=(()=>{class t{}return t.\u0275mod=n.Ob({type:t}),t.\u0275inj=n.Nb({factory:function(e){return new(e||t)},imports:[[s.h.forChild(E)],s.h]}),t})();var M=i("tk/3"),H=i("2thQ"),X=i("lOAm"),$=i("Fr4G"),P=i("67nL");let U=(()=>{class t{}return t.\u0275mod=n.Ob({type:t}),t.\u0275inj=n.Nb({factory:function(e){return new(e||t)},imports:[[a.c,G,M.c,H.a,l.h,l.p,X.a,$.a,P.a]]}),t})()}}]);