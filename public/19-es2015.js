(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1pWo":function(t,e,i){"use strict";i.r(e),i.d(e,"NiveauScolaireModule",(function(){return Tt}));var o=i("ofXK"),n=i("tyNb"),c=i("mrSG"),s=i("fXoL"),a=i("VRyK"),r=i("3Pt+"),l=i("V2kc"),b=i("XNiG"),u=i("7q3A"),d=i("Wp6s"),m=i("kmnG"),h=i("qFsG"),p=i("d3UM"),f=i("bTqV"),g=i("f0Cb"),v=i("0IaG"),V=i("/t3+"),W=i("NFeN"),L=i("5nPQ"),D=i("FKr1");function w(t,e){if(1&t&&(s.Wb(0,"mat-option",20),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Db(1),s.Mc(t.nom)}}function S(t,e){if(1&t){const t=s.Xb();s.Wb(0,"button",25),s.ec("click",(function(){s.Cc(t);const e=s.ic().index;return s.ic().videosUrls.removeAt(e)})),s.Wb(1,"mat-icon"),s.Lc(2,"delete"),s.Vb(),s.Vb()}}function C(t,e){if(1&t&&(s.Wb(0,"div"),s.Wb(1,"div",21),s.Wb(2,"mat-form-field",22),s.Wb(3,"mat-label"),s.Lc(4),s.Vb(),s.Rb(5,"input",23),s.Vb(),s.Jc(6,S,3,0,"button",24),s.Vb(),s.Vb()),2&t){const t=e.index,i=s.ic();s.Db(4),s.Nc("Video ",t+1,""),s.Db(1),s.pc("formControl",i.videosUrls.controls[t]),s.Db(1),s.pc("ngIf",t>0)}}function y(t,e){if(1&t){const t=s.Xb();s.Wb(0,"button",26),s.ec("click",(function(){s.Cc(t);const e=s.ic();return e.onOkClick(e.myForm.value)})),s.Lc(1,"Enregistre"),s.Vb()}if(2&t){const t=s.ic();s.pc("disabled",t.myForm.invalid)}}let x=(()=>{class t{constructor(t,e,i,o){this.dialogRef=t,this.data=e,this.fb=i,this.uow=o,this.subs=[],this.videosUrls=new r.c([new r.e("")]),this.title="",this.visualisation=!1,this.config={multiple:!0,showSubmitButton:!1,folderToSaveInServer:"cours",propertyStringToParent:new b.a,propertyStringToUploader:new b.a,eventSubmitToUploader:new b.a}}ngOnInit(){this.o=this.data.model,this.title=this.data.title,this.branches=this.uow.branches.getByForeignkey("idNiveauScolaire",this.o.idNiveauScolaire),this.createForm();const t=this.myForm.get("videosUrl").value;t&&(this.videosUrls.removeAt(0),t.split(";").map(t=>this.videosUrls.push(new r.e(t)))),this.videosUrls.valueChanges.subscribe(t=>{this.myForm.get("videosUrl").setValue(t.join(";"))}),this.config.propertyStringToParent.subscribe(t=>this.myForm.get("filesUrl").setValue(t)),setTimeout(()=>{this.config.propertyStringToUploader.next(this.o.filesUrl)},100)}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.cours.post(t).subscribe(e=>{this.config.eventSubmitToUploader.next({id:e.id}),this.dialogRef.close(t)}):this.uow.cours.put(t.id,t).subscribe(e=>{this.config.eventSubmitToUploader.next({id:t.id}),this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.s.required]],nom:[this.o.nom,[r.s.required]],nomAr:[this.o.nomAr,[r.s.required]],filesUrl:[this.o.filesUrl],videosUrl:[this.o.videosUrl],idBranche:[+this.o.idBranche,[r.s.required]],idNiveauScolaire:[this.o.idNiveauScolaire,[r.s.required]]})}resetForm(){this.o=new l.d,this.createForm()}add(){this.videosUrls.push(new r.e(""))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(v.g),s.Qb(v.a),s.Qb(r.d),s.Qb(u.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-update-cours"]],decls:37,vars:8,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[2,"overflow-x","hidden"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["formControlName","idBranche"],[3,"value",4,"ngFor","ngForOf"],[1,"row","mt-3"],[1,"col-md-6","mt-2","mb-2"],[4,"ngFor","ngForOf"],["mat-raised-button","","type","button",1,"ml-3",3,"click"],[1,"col-md-6","p-0"],["nameBtn","Upload les docs",3,"config"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],[1,""],["appearance","fill",1,"col-md-10"],["matInput","","required","",3,"formControl"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"h1",1),s.Wb(2,"mat-toolbar",2),s.Wb(3,"span"),s.Lc(4),s.Vb(),s.Vb(),s.Rb(5,"mat-divider"),s.Vb(),s.Wb(6,"div",3),s.Wb(7,"mat-dialog-content",4),s.Wb(8,"form",5),s.Wb(9,"mat-form-field",6),s.Wb(10,"mat-label"),s.Lc(11,"nom"),s.Vb(),s.Rb(12,"input",7),s.Vb(),s.Wb(13,"mat-form-field",6),s.Wb(14,"mat-label"),s.Lc(15,"nomAr"),s.Vb(),s.Rb(16,"input",8),s.Vb(),s.Wb(17,"mat-form-field",6),s.Wb(18,"mat-label"),s.Lc(19,"branches"),s.Vb(),s.Wb(20,"mat-select",9),s.Jc(21,w,2,2,"mat-option",10),s.jc(22,"async"),s.Vb(),s.Vb(),s.Vb(),s.Rb(23,"mat-divider"),s.Wb(24,"div",11),s.Wb(25,"div",12),s.Jc(26,C,7,3,"div",13),s.Wb(27,"button",14),s.ec("click",(function(){return e.add()})),s.Wb(28,"mat-icon"),s.Lc(29,"add"),s.Vb(),s.Lc(30," Video "),s.Vb(),s.Vb(),s.Wb(31,"div",15),s.Rb(32,"app-upload",16),s.Vb(),s.Vb(),s.Vb(),s.Wb(33,"mat-dialog-actions",17),s.Wb(34,"button",18),s.ec("click",(function(){return e.onNoClick()})),s.Lc(35,"Annuler"),s.Vb(),s.Jc(36,y,2,1,"button",19),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Db(4),s.Mc(e.title),s.Db(4),s.pc("formGroup",e.myForm),s.Db(13),s.pc("ngForOf",s.kc(22,6,e.branches)),s.Db(5),s.pc("ngForOf",e.videosUrls.controls),s.Db(6),s.pc("config",e.config),s.Db(4),s.pc("ngIf",!e.visualisation))},directives:[v.h,V.a,g.a,v.e,r.t,r.n,r.h,m.c,m.f,h.b,r.b,r.m,r.g,r.r,p.a,o.m,f.a,W.a,L.a,v.c,o.n,D.o,r.f],pipes:[o.b],styles:[""]}),t})();var R=i("M9IT"),k=i("Dh3D"),I=i("JX91"),O=i("qQ+2"),U=i("hUFt"),J=i("+0xr"),F=i("7EHt"),N=i("Xa2L");function A(t,e){if(1&t&&(s.Wb(0,"mat-option",25),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Db(1),s.Mc(t.nom)}}function $(t,e){if(1&t){const t=s.Xb();s.Wb(0,"mat-accordion"),s.Wb(1,"mat-expansion-panel",26),s.ec("opened",(function(){return s.Cc(t),s.ic().panelOpenState=!0}))("closed",(function(){return s.Cc(t),s.ic().panelOpenState=!1})),s.Wb(2,"mat-expansion-panel-header"),s.Wb(3,"mat-panel-title",27),s.Wb(4,"mat-icon"),s.Lc(5,"search"),s.Vb(),s.Wb(6,"p",28),s.Lc(7,"Recherche"),s.Vb(),s.Vb(),s.Rb(8,"mat-panel-description"),s.Vb(),s.Rb(9,"mat-divider"),s.Wb(10,"div",29),s.Wb(11,"mat-form-field",30),s.Wb(12,"mat-label"),s.Lc(13,"nom"),s.Vb(),s.Rb(14,"input",31),s.Vb(),s.Wb(15,"mat-form-field",30),s.Wb(16,"mat-label"),s.Lc(17,"nomAr"),s.Vb(),s.Rb(18,"input",31),s.Vb(),s.Vb(),s.Wb(19,"div",32),s.Wb(20,"button",33),s.ec("click",(function(){return s.Cc(t),s.ic().reset()})),s.Wb(21,"mat-icon"),s.Lc(22,"refresh"),s.Vb(),s.Lc(23," R\xe9initialiser "),s.Vb(),s.Lc(24," \xa0\xa0 "),s.Wb(25,"button",34),s.ec("click",(function(){return s.Cc(t),s.ic().search()})),s.Wb(26,"mat-icon"),s.Lc(27,"search"),s.Vb(),s.Lc(28," Rechercher "),s.Vb(),s.Vb(),s.Vb(),s.Vb()}if(2&t){const t=s.ic();s.Db(14),s.pc("formControl",t.nom),s.Db(4),s.pc("formControl",t.nomAr)}}function q(t,e){1&t&&s.Rb(0,"mat-spinner")}function T(t,e){if(1&t&&(s.Wb(0,"div",35),s.Jc(1,q,1,0,"mat-spinner",5),s.Vb()),2&t){const t=s.ic();s.Db(1),s.pc("ngIf",t.isLoadingResults)}}function j(t,e){1&t&&(s.Wb(0,"th",36),s.Lc(1,"Nom"),s.Vb())}function G(t,e){if(1&t&&(s.Wb(0,"td",37),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.nom)}}function M(t,e){1&t&&(s.Wb(0,"th",36),s.Lc(1,"Nom Ar"),s.Vb())}function Q(t,e){if(1&t&&(s.Wb(0,"td",37),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.nomAr)}}function B(t,e){1&t&&(s.Wb(0,"th",36),s.Lc(1,"Files Url"),s.Vb())}function z(t,e){if(1&t){const t=s.Xb();s.Wb(0,"span",39),s.Lc(1),s.Wb(2,"mat-icon",40),s.ec("click",(function(){s.Cc(t);const i=e.$implicit,o=s.ic().$implicit;return s.ic().openLink(i,o.id)})),s.Lc(3,"description"),s.Vb(),s.Vb()}if(2&t){const t=e.index;s.Db(1),s.Nc(" ",t+1,"-")}}function H(t,e){if(1&t&&(s.Wb(0,"td",37),s.Jc(1,z,4,1,"span",38),s.Vb()),2&t){const t=e.$implicit,i=s.ic();s.Db(1),s.pc("ngForOf",i.toList(t.filesUrl))}}function _(t,e){1&t&&(s.Wb(0,"th",36),s.Lc(1,"videosUrl"),s.Vb())}function P(t,e){if(1&t){const t=s.Xb();s.Wb(0,"span",39),s.Lc(1),s.Wb(2,"mat-icon",40),s.ec("click",(function(){s.Cc(t);const i=e.$implicit,o=s.ic().$implicit;return s.ic().openLink(i,o.id)})),s.Lc(3,"movie"),s.Vb(),s.Vb()}if(2&t){const t=e.index;s.Db(1),s.Nc(" ",t+1,"-")}}function E(t,e){if(1&t&&(s.Wb(0,"td",37),s.Jc(1,P,4,1,"span",38),s.Vb()),2&t){const t=e.$implicit,i=s.ic();s.Db(1),s.pc("ngForOf",i.toList(t.videosUrl))}}function X(t,e){1&t&&(s.Wb(0,"th",41),s.Lc(1,"Niveau Scolaire"),s.Vb())}function K(t,e){if(1&t&&(s.Wb(0,"td",37),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.niveau_scolaire.nom)}}function Y(t,e){1&t&&(s.Wb(0,"th",41),s.Lc(1,"branche"),s.Vb())}function Z(t,e){if(1&t&&(s.Wb(0,"td",37),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(null==t.branche?null:t.branche.nom)}}function tt(t,e){1&t&&s.Rb(0,"th",41)}function et(t,e){if(1&t){const t=s.Xb();s.Wb(0,"td",37),s.Wb(1,"div",42),s.Wb(2,"button",43),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().edit(i)})),s.Wb(3,"mat-icon"),s.Lc(4,"create"),s.Vb(),s.Vb(),s.Wb(5,"button",44),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().detail(i)})),s.Wb(6,"mat-icon"),s.Lc(7,"remove_red_eye"),s.Vb(),s.Vb(),s.Wb(8,"button",45),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().delete(i.id)})),s.Wb(9,"mat-icon"),s.Lc(10,"delete_sweep"),s.Vb(),s.Vb(),s.Vb(),s.Vb()}}function it(t,e){1&t&&s.Rb(0,"tr",46)}function ot(t,e){1&t&&s.Rb(0,"tr",47)}const nt=function(){return[10,25,50,100,250]};let ct=(()=>{class t{constructor(t,e,i,o,n){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=o,this.url=n,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","filesUrl","videosUrl","niveauScolaire","branche","option"],this.panelOpenState=!1,this.nom=new r.e(""),this.nomAr=new r.e(""),this.idNiveauScolaire=0,this.parentObs=new b.a,this.idBranche=new r.e(0)}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){this.parentObs.subscribe(t=>{this.idNiveauScolaire=t,this.branches=this.uow.branches.getByForeignkey("idNiveauScolaire",this.idNiveauScolaire),this.update.next(!0)}),console.log("pere : ",this.idNiveauScolaire);const t=Object(a.a)(this.sort.sortChange,this.paginator.page,this.update,this.idBranche.valueChanges).pipe(Object(I.a)(null)).subscribe(t=>Object(c.b)(this,void 0,void 0,(function*(){!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value,""===this.nomAr.value?"*":this.nomAr.value,0===this.idNiveauScolaire?0:this.idNiveauScolaire,0===this.idBranche.value?0:this.idBranche.value)})));this.subs.push(t)}))}reset(){this.nom.setValue(""),this.nomAr.setValue(""),this.update.next(!0)}generateExcel(){this.excel.json_to_sheet(this.dataSource)}search(){this.update.next(!0)}toList(t){if(t){const e=t.split(";");return e.pop(),e}return[]}openLink(t,e){t.includes("http")?window.open(t,"_blanc"):window.open(`${this.url}/cours/${e}/${t}`,"_blanc")}getPage(t,e,i,o,n,c,s,a){const r=this.uow.cours.getAll(t,e,i,o,n,c,s,a).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(r)}openDialog(t,e,i){return this.dialog.open(x,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){const t=new l.d;t.idNiveauScolaire=this.idNiveauScolaire,t.idBranche=this.idBranche.value,this.openDialog(t,"Ajouter Cours",!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){t.idNiveauScolaire=this.idNiveauScolaire,t.idBranche=0===this.idBranche.value?t.idBranche:this.idBranche.value,this.openDialog(t,"Modifier Cours",!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail Cours",!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("Cours").toPromise())){const e=this.uow.cours.delete(t.id).subscribe(()=>this.update.next(!0));if(t.filesUrl&&""!==t.filesUrl){const e=t.filesUrl.slice(0,-1).split(";").map(e=>`cours_${t.id}/${e}`);yield this.uow.files.deleteFiles(e,"cours").toPromise()}this.subs.push(e)}}))}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/cours/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.cours.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(u.a),s.Qb(v.b),s.Qb(O.a),s.Qb(U.a),s.Qb("BASE_URL"))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-cours"]],viewQuery:function(t,e){var i;1&t&&(s.Hc(R.a,!0),s.Hc(k.a,!0)),2&t&&(s.zc(i=s.fc())&&(e.paginator=i.first),s.zc(i=s.fc())&&(e.sort=i.first))},inputs:{parentObs:"parentObs"},decls:42,vars:13,consts:[[1,"d-flex","justify-content-between","align-items-center","pt-3"],["appearance","fill"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",2,"height","38px",3,"disabled","click"],[4,"ngIf"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","filesUrl"],["matColumnDef","videosUrl"],["matColumnDef","niveauScolaire"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","branche"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"],[1,"example-loading-shade"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","mx-1",4,"ngFor","ngForOf"],[1,"mx-1"],[2,"cursor","pointer",3,"click"],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"mat-form-field",1),s.Wb(2,"mat-label"),s.Lc(3,"Branches"),s.Vb(),s.Wb(4,"mat-select",2),s.Jc(5,A,2,2,"mat-option",3),s.jc(6,"async"),s.Vb(),s.Vb(),s.Wb(7,"button",4),s.ec("click",(function(){return e.add()})),s.Wb(8,"mat-icon"),s.Lc(9,"add"),s.Vb(),s.Lc(10," Cours "),s.Vb(),s.Vb(),s.Jc(11,$,29,2,"mat-accordion",5),s.Wb(12,"div",6),s.Jc(13,T,2,1,"div",7),s.Wb(14,"div",8),s.Wb(15,"table",9,10),s.Ub(17,11),s.Jc(18,j,2,0,"th",12),s.Jc(19,G,2,1,"td",13),s.Tb(),s.Ub(20,14),s.Jc(21,M,2,0,"th",12),s.Jc(22,Q,2,1,"td",13),s.Tb(),s.Ub(23,15),s.Jc(24,B,2,0,"th",12),s.Jc(25,H,2,1,"td",13),s.Tb(),s.Ub(26,16),s.Jc(27,_,2,0,"th",12),s.Jc(28,E,2,1,"td",13),s.Tb(),s.Ub(29,17),s.Jc(30,X,2,0,"th",18),s.Jc(31,K,2,1,"td",13),s.Tb(),s.Ub(32,19),s.Jc(33,Y,2,0,"th",18),s.Jc(34,Z,2,1,"td",13),s.Tb(),s.Ub(35,20),s.Jc(36,tt,1,0,"th",18),s.Jc(37,et,11,0,"td",13),s.Tb(),s.Jc(38,it,1,0,"tr",21),s.Jc(39,ot,1,0,"tr",22),s.Vb(),s.Vb(),s.Rb(40,"mat-paginator",23,24),s.Vb()),2&t&&(s.Db(4),s.pc("formControl",e.idBranche),s.Db(1),s.pc("ngForOf",s.kc(6,10,e.branches)),s.Db(2),s.pc("disabled",0===e.idNiveauScolaire),s.Db(4),s.pc("ngIf",!1),s.Db(2),s.pc("ngIf",e.isLoadingResults),s.Db(2),s.pc("dataSource",e.dataSource),s.Db(23),s.pc("matHeaderRowDef",e.displayedColumns),s.Db(1),s.pc("matRowDefColumns",e.displayedColumns),s.Db(1),s.pc("length",e.resultsLength)("pageSizeOptions",s.qc(12,nt)))},directives:[m.c,m.f,p.a,r.m,r.f,o.m,f.a,W.a,o.n,J.j,k.a,J.c,J.e,J.b,J.g,J.i,R.a,D.o,F.a,F.c,F.e,F.f,F.d,g.a,h.b,r.b,r.r,N.b,J.d,k.b,J.a,J.f,J.h],pipes:[o.b],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})();function st(t,e){if(1&t&&(s.Wb(0,"mat-option",15),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Db(1),s.Nc(" ",t.name," ")}}let at=(()=>{class t{constructor(t,e,i,o){this.fb=t,this.uow=e,this.route=i,this.router=o,this.subs=[],this.o=new l.h,this.title="",this.visualisation=!1,this.folderToSaveInServer="niveauScolaires",this.cycles=this.uow.cycles,this.id=0,this.parentObs=new b.a}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){this.createForm(),this.id=+this.route.snapshot.paramMap.get("id"),this.title="Ajouter Niveau Scolaire",0!==this.id&&this.uow.niveauScolaires.getOne(this.id).subscribe(t=>Object(c.b)(this,void 0,void 0,(function*(){this.o=t,console.log(this.o),this.title="Modifier Niveau Scolaire",this.createForm(),this.parentObs.next(this.id)})))}))}submit(t){let e=null;e=0===t.id?this.uow.niveauScolaires.post(t).subscribe(t=>{this.id=t.id,this.parentObs.next(this.id)}):this.uow.niveauScolaires.put(t.id,t).subscribe(t=>{}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.s.required]],nom:[this.o.nom,[r.s.required]],nomAr:[this.o.nomAr,[r.s.required]],idCycle:[+this.o.idCycle,[r.s.required]],coursLigneGroupe:[this.o.coursLigneGroupe,[r.s.required]],coursLigneIndividuel:[this.o.coursLigneIndividuel,[r.s.required]],coursDomicileGroupe:[this.o.coursDomicileGroupe,[r.s.required]],coursDomicileIndividuel:[this.o.coursDomicileIndividuel,[r.s.required]]})}resetForm(){this.o=new l.h,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(r.d),s.Qb(u.a),s.Qb(n.a),s.Qb(n.e))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-update"]],decls:42,vars:7,consts:[[1,"row","justify-content-center","align-items-center","mb-4","mx-2"],[1,"mat-elevation-z8","mywith"],[3,"formGroup"],["appearance","fill",1,"col-md-4"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["formControlName","idCycle"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill",1,"col-md-3"],["matInput","","formControlName","coursLigneGroupe","required",""],["matInput","","formControlName","coursLigneIndividuel","required",""],["matInput","","formControlName","coursDomicileGroupe","required",""],["matInput","","formControlName","coursDomicileIndividuel","required",""],["mat-raised-button","","color","accent","type","submit",1,"mb-2",3,"disabled","click"],[3,"parentObs"],[3,"value"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"mat-card",1),s.Wb(2,"mat-card-header"),s.Wb(3,"mat-card-title"),s.Lc(4),s.Vb(),s.Vb(),s.Wb(5,"mat-card-content"),s.Wb(6,"form",2),s.Wb(7,"mat-form-field",3),s.Wb(8,"mat-label"),s.Lc(9,"nom"),s.Vb(),s.Rb(10,"input",4),s.Vb(),s.Wb(11,"mat-form-field",3),s.Wb(12,"mat-label"),s.Lc(13,"nom Ar"),s.Vb(),s.Rb(14,"input",5),s.Vb(),s.Wb(15,"mat-form-field",3),s.Wb(16,"mat-label"),s.Lc(17,"Cycle"),s.Vb(),s.Wb(18,"mat-select",6),s.Jc(19,st,2,2,"mat-option",7),s.jc(20,"async"),s.Vb(),s.Vb(),s.Wb(21,"mat-form-field",8),s.Wb(22,"mat-label"),s.Lc(23,"coursLigneGroupe"),s.Vb(),s.Rb(24,"input",9),s.Vb(),s.Wb(25,"mat-form-field",8),s.Wb(26,"mat-label"),s.Lc(27,"coursLigneIndividuel"),s.Vb(),s.Rb(28,"input",10),s.Vb(),s.Wb(29,"mat-form-field",8),s.Wb(30,"mat-label"),s.Lc(31,"coursDomicileGroupe"),s.Vb(),s.Rb(32,"input",11),s.Vb(),s.Wb(33,"mat-form-field",8),s.Wb(34,"mat-label"),s.Lc(35,"coursDomicileIndividuel"),s.Vb(),s.Rb(36,"input",12),s.Vb(),s.Vb(),s.Vb(),s.Wb(37,"mat-card-actions"),s.Wb(38,"button",13),s.ec("click",(function(){return e.submit(e.myForm.value)})),s.Lc(39,"Valider"),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Rb(40,"mat-divider"),s.Rb(41,"app-cours",14)),2&t&&(s.Db(4),s.Mc(e.title),s.Db(2),s.pc("formGroup",e.myForm),s.Db(13),s.pc("ngForOf",s.kc(20,5,e.cycles)),s.Db(19),s.pc("disabled",e.myForm.invalid),s.Db(3),s.pc("parentObs",e.parentObs))},directives:[d.a,d.d,d.h,d.c,r.t,r.n,r.h,m.c,m.f,h.b,r.b,r.m,r.g,r.r,p.a,o.m,d.b,f.a,g.a,ct,D.o],pipes:[o.b],styles:[""]}),t})();var rt=i("8lcG");function lt(t,e){1&t&&s.Rb(0,"mat-spinner")}function bt(t,e){if(1&t&&(s.Wb(0,"div",31),s.Jc(1,lt,1,0,"mat-spinner",32),s.Vb()),2&t){const t=s.ic();s.Db(1),s.pc("ngIf",t.isLoadingResults)}}function ut(t,e){1&t&&(s.Wb(0,"th",33),s.Lc(1,"Nom"),s.Vb())}function dt(t,e){if(1&t&&(s.Wb(0,"td",34),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.nom)}}function mt(t,e){1&t&&(s.Wb(0,"th",33),s.Lc(1,"Nom Ar"),s.Vb())}function ht(t,e){if(1&t&&(s.Wb(0,"td",34),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.nomAr)}}function pt(t,e){1&t&&(s.Wb(0,"th",33),s.Lc(1,"Cycle"),s.Vb())}function ft(t,e){if(1&t&&(s.Wb(0,"td",34),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.idCycle)}}function gt(t,e){1&t&&(s.Wb(0,"th",33),s.Lc(1,"coursLigneGroupe (DH)"),s.Vb())}function vt(t,e){if(1&t&&(s.Wb(0,"td",34),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.coursLigneGroupe)}}function Vt(t,e){1&t&&(s.Wb(0,"th",33),s.Lc(1,"coursLigneIndividuel (DH)"),s.Vb())}function Wt(t,e){if(1&t&&(s.Wb(0,"td",34),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.coursLigneIndividuel)}}function Lt(t,e){1&t&&(s.Wb(0,"th",33),s.Lc(1,"coursDomicileGroupe (DH)"),s.Vb())}function Dt(t,e){if(1&t&&(s.Wb(0,"td",34),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.coursDomicileGroupe)}}function wt(t,e){1&t&&(s.Wb(0,"th",33),s.Lc(1,"coursDomicileIndividuel (DH)"),s.Vb())}function St(t,e){if(1&t&&(s.Wb(0,"td",34),s.Lc(1),s.Vb()),2&t){const t=e.$implicit;s.Db(1),s.Mc(t.coursDomicileIndividuel)}}function Ct(t,e){1&t&&s.Rb(0,"th",35)}const yt=function(t){return["/admin/settings/niveauScolaire/update",t]};function xt(t,e){if(1&t){const t=s.Xb();s.Wb(0,"td",34),s.Wb(1,"div",36),s.Wb(2,"button",37),s.Wb(3,"mat-icon"),s.Lc(4,"create"),s.Vb(),s.Vb(),s.Wb(5,"button",38),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().detail(i)})),s.Wb(6,"mat-icon"),s.Lc(7,"remove_red_eye"),s.Vb(),s.Vb(),s.Wb(8,"button",39),s.ec("click",(function(){s.Cc(t);const i=e.$implicit;return s.ic().delete(i.id)})),s.Wb(9,"mat-icon"),s.Lc(10,"delete_sweep"),s.Vb(),s.Vb(),s.Vb(),s.Vb()}if(2&t){const t=e.$implicit;s.Db(2),s.pc("routerLink",s.rc(1,yt,t.id))}}function Rt(t,e){1&t&&s.Rb(0,"tr",40)}function kt(t,e){1&t&&s.Rb(0,"tr",41)}const It=function(){return["/admin/settings/niveauScolaire/update",0]},Ot=function(){return[10,25,50,100,250]},Ut=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,o,n,c){this.uow=t,this.dialog=e,this.excel=i,this.mydialog=o,this.url=n,this.breadcrumb=c,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","idCycle","coursLigneGroupe","coursLigneIndividuel","coursDomicileGroupe","coursDomicileIndividuel","option"],this.panelOpenState=!1,this.nom=new r.e(""),this.nomAr=new r.e(""),this.breadcrumb.name="NiveauScolaires"}ngOnInit(){const t=Object(a.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(I.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value,""===this.nomAr.value?"*":this.nomAr.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.nomAr.setValue(""),this.update.next(!0)}search(){this.update.next(!0)}getPage(t,e,i,o,n,c){const s=this.uow.niveauScolaires.getAll(t,e,i,o,n,c).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(s)}openDialog(t,e,i){return this.dialog.open(at,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){this.openDialog(new l.h,"Ajouter "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const e=this.uow.niveauScolaires.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t,e){return t?t&&t.startsWith("http")?t:`${this.url}/niveauScolaires/${e}/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.niveauScolaires.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(u.a),s.Qb(v.b),s.Qb(O.a),s.Qb(U.a),s.Qb("BASE_URL"),s.Qb(rt.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-niveauScolaire"]],viewQuery:function(t,e){var i;1&t&&(s.Hc(R.a,!0),s.Hc(k.a,!0)),2&t&&(s.zc(i=s.fc())&&(e.paginator=i.first),s.zc(i=s.fc())&&(e.sort=i.first))},decls:67,vars:11,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"routerLink"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","idCycle"],["matColumnDef","coursLigneGroupe"],["matColumnDef","coursLigneIndividuel"],["matColumnDef","coursDomicileGroupe"],["matColumnDef","coursDomicileIndividuel"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"routerLink"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"button",1),s.Wb(2,"mat-icon"),s.Lc(3,"add"),s.Vb(),s.Lc(4," NiveauScolaire "),s.Vb(),s.Vb(),s.Wb(5,"mat-accordion"),s.Wb(6,"mat-expansion-panel",2),s.ec("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),s.Wb(7,"mat-expansion-panel-header"),s.Wb(8,"mat-panel-title",3),s.Wb(9,"mat-icon"),s.Lc(10,"search"),s.Vb(),s.Wb(11,"p",4),s.Lc(12,"Recherche"),s.Vb(),s.Vb(),s.Rb(13,"mat-panel-description"),s.Vb(),s.Rb(14,"mat-divider"),s.Wb(15,"div",5),s.Wb(16,"mat-form-field",6),s.Wb(17,"mat-label"),s.Lc(18,"nom"),s.Vb(),s.Rb(19,"input",7),s.Vb(),s.Wb(20,"mat-form-field",6),s.Wb(21,"mat-label"),s.Lc(22,"nomAr"),s.Vb(),s.Rb(23,"input",7),s.Vb(),s.Vb(),s.Wb(24,"div",8),s.Wb(25,"button",9),s.ec("click",(function(){return e.reset()})),s.Wb(26,"mat-icon"),s.Lc(27,"refresh"),s.Vb(),s.Lc(28," R\xe9initialiser "),s.Vb(),s.Lc(29," \xa0\xa0 "),s.Wb(30,"button",10),s.ec("click",(function(){return e.search()})),s.Wb(31,"mat-icon"),s.Lc(32,"search"),s.Vb(),s.Lc(33," Rechercher "),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(34,"div",11),s.Jc(35,bt,2,1,"div",12),s.Wb(36,"div",13),s.Wb(37,"table",14,15),s.Ub(39,16),s.Jc(40,ut,2,0,"th",17),s.Jc(41,dt,2,1,"td",18),s.Tb(),s.Ub(42,19),s.Jc(43,mt,2,0,"th",17),s.Jc(44,ht,2,1,"td",18),s.Tb(),s.Ub(45,20),s.Jc(46,pt,2,0,"th",17),s.Jc(47,ft,2,1,"td",18),s.Tb(),s.Ub(48,21),s.Jc(49,gt,2,0,"th",17),s.Jc(50,vt,2,1,"td",18),s.Tb(),s.Ub(51,22),s.Jc(52,Vt,2,0,"th",17),s.Jc(53,Wt,2,1,"td",18),s.Tb(),s.Ub(54,23),s.Jc(55,Lt,2,0,"th",17),s.Jc(56,Dt,2,1,"td",18),s.Tb(),s.Ub(57,24),s.Jc(58,wt,2,0,"th",17),s.Jc(59,St,2,1,"td",18),s.Tb(),s.Ub(60,25),s.Jc(61,Ct,1,0,"th",26),s.Jc(62,xt,11,3,"td",18),s.Tb(),s.Jc(63,Rt,1,0,"tr",27),s.Jc(64,kt,1,0,"tr",28),s.Vb(),s.Vb(),s.Rb(65,"mat-paginator",29,30),s.Vb()),2&t&&(s.Db(1),s.pc("routerLink",s.qc(9,It)),s.Db(18),s.pc("formControl",e.nom),s.Db(4),s.pc("formControl",e.nomAr),s.Db(12),s.pc("ngIf",e.isLoadingResults),s.Db(2),s.pc("dataSource",e.dataSource),s.Db(26),s.pc("matHeaderRowDef",e.displayedColumns),s.Db(1),s.pc("matRowDefColumns",e.displayedColumns),s.Db(1),s.pc("length",e.resultsLength)("pageSizeOptions",s.qc(10,Ot)))},directives:[f.a,n.f,W.a,F.a,F.c,F.e,F.f,F.d,g.a,m.c,m.f,h.b,r.b,r.r,r.m,r.f,o.n,J.j,k.a,J.c,J.e,J.b,J.g,J.i,R.a,N.b,J.d,k.b,J.a,J.f,J.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()},{path:"update/:id",component:at}];let Jt=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[n.h.forChild(Ut)],n.h]}),t})();var Ft=i("tk/3"),Nt=i("2thQ"),At=i("lOAm"),$t=i("Fr4G"),qt=i("67nL");let Tt=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(e){return new(e||t)},imports:[[o.c,Jt,Ft.c,Nt.a,r.i,r.q,At.a,$t.a,qt.a]]}),t})()}}]);