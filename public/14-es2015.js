(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QTC5:function(t,e,i){"use strict";i.r(e),i.d(e,"BrancheModule",(function(){return Z}));var a=i("ofXK"),o=i("tyNb"),n=i("mrSG"),s=i("fXoL"),c=i("VRyK"),r=i("3Pt+"),l=i("0IaG"),b=i("V2kc"),u=i("7q3A"),d=i("/t3+"),m=i("f0Cb"),h=i("kmnG"),p=i("qFsG"),f=i("d3UM"),g=i("bTqV"),v=i("FKr1");function V(t,e){if(1&t&&(s.Wb(0,"mat-option",13),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Db(1),s.Mc(t.nom)}}function W(t,e){if(1&t){const t=s.Xb();s.Wb(0,"button",14),s.ec("click",(function(){s.Cc(t);const e=s.ic();return e.onOkClick(e.myForm.value)})),s.Lc(1,"Enregistre"),s.Vb()}if(2&t){const t=s.ic();s.pc("disabled",t.myForm.invalid)}}let L=(()=>{class t{constructor(t,e,i,a){this.dialogRef=t,this.data=e,this.fb=i,this.uow=a,this.subs=[],this.title="",this.visualisation=!1,this.niveauScolaires=this.uow.niveauScolaires.get(),this.folderToSaveInServer="branches"}ngOnInit(){return Object(n.b)(this,void 0,void 0,(function*(){this.o=this.data.model,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm()}))}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.branches.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.branches.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.s.required]],nom:[this.o.nom,[r.s.required]],nomAr:[this.o.nomAr,[r.s.required]],idNiveauScolaire:[this.o.idNiveauScolaire,[r.s.required]]})}resetForm(){this.o=new b.b,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(l.g),s.Qb(l.a),s.Qb(r.d),s.Qb(u.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-update"]],decls:27,vars:6,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["formControlName","idNiveauScolaire"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"h1",1),s.Wb(2,"mat-toolbar",2),s.Wb(3,"span"),s.Lc(4),s.Vb(),s.Vb(),s.Rb(5,"mat-divider"),s.Vb(),s.Wb(6,"div",3),s.Wb(7,"mat-dialog-content"),s.Wb(8,"form",4),s.Wb(9,"mat-form-field",5),s.Wb(10,"mat-label"),s.Lc(11,"nom"),s.Vb(),s.Rb(12,"input",6),s.Vb(),s.Wb(13,"mat-form-field",5),s.Wb(14,"mat-label"),s.Lc(15,"nomAr"),s.Vb(),s.Rb(16,"input",7),s.Vb(),s.Wb(17,"mat-form-field",5),s.Wb(18,"mat-label"),s.Lc(19,"niveauScolaires"),s.Vb(),s.Wb(20,"mat-select",8),s.Jc(21,V,2,2,"mat-option",9),s.jc(22,"async"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(23,"mat-dialog-actions",10),s.Wb(24,"button",11),s.ec("click",(function(){return e.onNoClick()})),s.Lc(25,"Annuler"),s.Vb(),s.Jc(26,W,2,1,"button",12),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Db(4),s.Mc(e.title),s.Db(4),s.pc("formGroup",e.myForm),s.Db(13),s.pc("ngForOf",s.kc(22,4,e.niveauScolaires)),s.Db(5),s.pc("ngIf",!e.visualisation))},directives:[l.h,d.a,m.a,l.e,r.t,r.n,r.h,h.c,h.f,p.b,r.b,r.m,r.g,r.r,f.a,a.m,l.c,g.a,a.n,v.o],pipes:[a.b],styles:[""]}),t})();var S=i("M9IT"),w=i("Dh3D"),D=i("JX91"),k=i("qQ+2"),y=i("hUFt"),C=i("8lcG"),R=i("NFeN"),x=i("7EHt"),O=i("+0xr"),A=i("Xa2L");function F(t,e){if(1&t&&(s.Wb(0,"mat-option",28),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Db(1),s.Mc(t.nom)}}function I(t,e){1&t&&s.Rb(0,"mat-spinner")}function N(t,e){if(1&t&&(s.Wb(0,"div",29),s.Jc(1,I,1,0,"mat-spinner",30),s.Vb()),2&t){const t=s.ic();s.Db(1),s.pc("ngIf",t.isLoadingResults)}}function J(t,e){1&t&&(s.Wb(0,"th",31),s.Lc(1,"Nom"),s.Vb())}function j(t,e){if(1&t&&(s.Wb(0,"td",32),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.nom)}}function Q(t,e){1&t&&(s.Wb(0,"th",31),s.Lc(1,"Nom Ar"),s.Vb())}function q(t,e){if(1&t&&(s.Wb(0,"td",32),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.nomAr)}}function M(t,e){1&t&&(s.Wb(0,"th",33),s.Lc(1,"Niveau Scolaire"),s.Vb())}function T(t,e){if(1&t&&(s.Wb(0,"td",32),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.niveau_scolaire.nom)}}function z(t,e){1&t&&s.Rb(0,"th",33)}function $(t,e){if(1&t){const t=s.Xb();s.Wb(0,"td",32),s.Wb(1,"div",34),s.Wb(2,"button",35),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().edit(i)})),s.Wb(3,"mat-icon"),s.Lc(4,"create"),s.Vb(),s.Vb(),s.Wb(5,"button",36),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().detail(i)})),s.Wb(6,"mat-icon"),s.Lc(7,"remove_red_eye"),s.Vb(),s.Vb(),s.Wb(8,"button",37),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().delete(i.id)})),s.Wb(9,"mat-icon"),s.Lc(10,"delete_sweep"),s.Vb(),s.Vb(),s.Vb(),s.Vb()}}function E(t,e){1&t&&s.Rb(0,"tr",38)}function G(t,e){1&t&&s.Rb(0,"tr",39)}const _=function(){return[10,25,50,100,250]},H=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,a,o,n){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=a,this.url=o,this.breadcrumb=n,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","niveauScolaire","option"],this.panelOpenState=!1,this.nom=new r.e(""),this.nomAr=new r.e(""),this.idNiveauScolaire=new r.e(0),this.niveauScolaires=this.uow.niveauScolaires.get(),this.breadcrumb.name="Branches"}ngOnInit(){const t=Object(c.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(D.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value,""===this.nomAr.value?"*":this.nomAr.value,0===this.idNiveauScolaire.value?0:this.idNiveauScolaire.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.nomAr.setValue(""),this.idNiveauScolaire.setValue(0),this.update.next(!0)}generateExcel(){this.excel.json_to_sheet(this.dataSource)}search(){this.update.next(!0)}getPage(t,e,i,a,o,n,s){const c=this.uow.branches.getAll(t,e,i,a,o,n,s).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(c)}openDialog(t,e,i){return this.dialog.open(L,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){this.openDialog(new b.b,"Ajouter "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(n.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const e=this.uow.branches.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/branches/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(n.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.branches.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(u.a),s.Qb(l.b),s.Qb(k.a),s.Qb(y.a),s.Qb("BASE_URL"),s.Qb(C.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-branche"]],viewQuery:function(t,e){var i;1&t&&(s.Hc(S.a,!0),s.Hc(w.a,!0)),2&t&&(s.zc(i=s.fc())&&(e.paginator=i.first),s.zc(i=s.fc())&&(e.sort=i.first))},decls:61,vars:13,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","niveauScolaire"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"button",1),s.ec("click",(function(){return e.add()})),s.Wb(2,"mat-icon"),s.Lc(3,"add"),s.Vb(),s.Lc(4," Branche "),s.Vb(),s.Vb(),s.Wb(5,"mat-accordion"),s.Wb(6,"mat-expansion-panel",2),s.ec("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),s.Wb(7,"mat-expansion-panel-header"),s.Wb(8,"mat-panel-title",3),s.Wb(9,"mat-icon"),s.Lc(10,"search"),s.Vb(),s.Wb(11,"p",4),s.Lc(12,"Recherche"),s.Vb(),s.Vb(),s.Rb(13,"mat-panel-description"),s.Vb(),s.Rb(14,"mat-divider"),s.Wb(15,"div",5),s.Wb(16,"mat-form-field",6),s.Wb(17,"mat-label"),s.Lc(18,"nom"),s.Vb(),s.Rb(19,"input",7),s.Vb(),s.Wb(20,"mat-form-field",6),s.Wb(21,"mat-label"),s.Lc(22,"nomAr"),s.Vb(),s.Rb(23,"input",7),s.Vb(),s.Wb(24,"mat-form-field",6),s.Wb(25,"mat-label"),s.Lc(26,"niveauScolaires"),s.Vb(),s.Wb(27,"mat-select",8),s.Jc(28,F,2,2,"mat-option",9),s.jc(29,"async"),s.Vb(),s.Vb(),s.Vb(),s.Wb(30,"div",10),s.Wb(31,"button",11),s.ec("click",(function(){return e.reset()})),s.Wb(32,"mat-icon"),s.Lc(33,"refresh"),s.Vb(),s.Lc(34," R\xe9initialiser "),s.Vb(),s.Lc(35," \xa0\xa0 "),s.Wb(36,"button",1),s.ec("click",(function(){return e.search()})),s.Wb(37,"mat-icon"),s.Lc(38,"search"),s.Vb(),s.Lc(39," Rechercher "),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(40,"div",12),s.Jc(41,N,2,1,"div",13),s.Wb(42,"div",14),s.Wb(43,"table",15,16),s.Ub(45,17),s.Jc(46,J,2,0,"th",18),s.Jc(47,j,2,1,"td",19),s.Tb(),s.Ub(48,20),s.Jc(49,Q,2,0,"th",18),s.Jc(50,q,2,1,"td",19),s.Tb(),s.Ub(51,21),s.Jc(52,M,2,0,"th",22),s.Jc(53,T,2,1,"td",19),s.Tb(),s.Ub(54,23),s.Jc(55,z,1,0,"th",22),s.Jc(56,$,11,0,"td",19),s.Tb(),s.Jc(57,E,1,0,"tr",24),s.Jc(58,G,1,0,"tr",25),s.Vb(),s.Vb(),s.Rb(59,"mat-paginator",26,27),s.Vb()),2&t&&(s.Db(19),s.pc("formControl",e.nom),s.Db(4),s.pc("formControl",e.nomAr),s.Db(4),s.pc("formControl",e.idNiveauScolaire),s.Db(1),s.pc("ngForOf",s.kc(29,10,e.niveauScolaires)),s.Db(13),s.pc("ngIf",e.isLoadingResults),s.Db(2),s.pc("dataSource",e.dataSource),s.Db(14),s.pc("matHeaderRowDef",e.displayedColumns),s.Db(1),s.pc("matRowDefColumns",e.displayedColumns),s.Db(1),s.pc("length",e.resultsLength)("pageSizeOptions",s.qc(12,_)))},directives:[g.a,R.a,x.a,x.c,x.e,x.f,x.d,m.a,h.c,h.f,p.b,r.b,r.r,r.m,r.f,f.a,a.m,a.n,O.j,w.a,O.c,O.e,O.b,O.g,O.i,S.a,v.o,A.b,O.d,w.b,O.a,O.f,O.h],pipes:[a.b],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let U=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[o.h.forChild(H)],o.h]}),t})();var P=i("tk/3"),X=i("2thQ"),B=i("lOAm"),K=i("Fr4G"),Y=i("67nL");let Z=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[a.c,U,P.c,X.a,r.i,r.q,B.a,K.a,Y.a]]}),t})()}}]);