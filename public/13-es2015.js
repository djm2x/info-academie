(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{H0cD:function(t,e,i){"use strict";i.r(e),i.d(e,"ActiviteModule",(function(){return et}));var o=i("ofXK"),a=i("tyNb"),n=i("mrSG"),s=i("fXoL"),c=i("VRyK"),r=i("3Pt+"),b=i("0IaG"),l=i("V2kc"),m=i("XNiG"),d=i("7q3A"),u=i("/t3+"),h=i("f0Cb"),p=i("kmnG"),f=i("qFsG"),g=i("d3UM"),v=i("5WMv"),T=i("bTqV"),U=i("FKr1");function y(t,e){if(1&t&&(s.Ub(0,"mat-option",15),s.Kc(1),s.Tb()),2&t){const t=e.$implicit;s.mc("value",t.id),s.Cb(1),s.Lc(t.nom)}}function C(t,e){if(1&t){const t=s.Vb();s.Ub(0,"button",16),s.bc("click",(function(){s.zc(t);const e=s.fc();return e.onOkClick(e.myForm.value)})),s.Kc(1,"Enregistre"),s.Tb()}if(2&t){const t=s.fc();s.mc("disabled",t.myForm.invalid)}}let w=(()=>{class t{constructor(t,e,i,o){this.dialogRef=t,this.data=e,this.fb=i,this.uow=o,this.subs=[],this.title="",this.visualisation=!1,this.typeActivites=this.uow.typeActivites.get(),this.folderToSaveInServer="activites",this.imageUrlTo=new m.a,this.imageUrlFrom=new m.a,this.eventSubmitFromParent=new m.a}ngOnInit(){return Object(n.b)(this,void 0,void 0,(function*(){this.o=this.data.model,this.folderToSaveInServer=this.folderToSaveInServer+"_"+this.o.id,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm(),this.imageUrlFrom.subscribe(t=>this.myForm.get("imageUrl").setValue(t)),console.log(this.o),setTimeout(()=>{this.imageUrlTo.next(this.o.imageUrl)},100)}))}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.activites.post(t).subscribe(e=>{this.eventSubmitFromParent.next({id:e.id}),this.dialogRef.close(t)}):this.uow.activites.put(t.id,t).subscribe(e=>{this.eventSubmitFromParent.next({id:t.id}),this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.u.required]],nom:[this.o.nom,[r.u.required]],nomAr:[this.o.nomAr,[r.u.required]],imageUrl:[this.o.imageUrl,[r.u.required]],idTypeActivite:[+this.o.idTypeActivite,[r.u.required]]})}resetForm(){this.o=new l.a,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(b.g),s.Ob(b.a),s.Ob(r.e),s.Ob(d.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-update"]],decls:29,vars:10,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["formControlName","idTypeActivite"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-12"],["nameBtn","Image",3,"folderToSaveInServer","propertyOfParent","eventSubmitToParent","eventSubmitFromParent"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"h1",1),s.Ub(2,"mat-toolbar",2),s.Ub(3,"span"),s.Kc(4),s.Tb(),s.Tb(),s.Pb(5,"mat-divider"),s.Tb(),s.Ub(6,"div",3),s.Ub(7,"mat-dialog-content"),s.Ub(8,"form",4),s.Ub(9,"mat-form-field",5),s.Ub(10,"mat-label"),s.Kc(11,"nom"),s.Tb(),s.Pb(12,"input",6),s.Tb(),s.Ub(13,"mat-form-field",5),s.Ub(14,"mat-label"),s.Kc(15,"nomAr"),s.Tb(),s.Pb(16,"input",7),s.Tb(),s.Ub(17,"mat-form-field",5),s.Ub(18,"mat-label"),s.Kc(19,"typeActivites"),s.Tb(),s.Ub(20,"mat-select",8),s.Ic(21,y,2,2,"mat-option",9),s.gc(22,"async"),s.Tb(),s.Tb(),s.Ub(23,"div",10),s.Pb(24,"app-upload-image",11),s.Tb(),s.Tb(),s.Tb(),s.Ub(25,"mat-dialog-actions",12),s.Ub(26,"button",13),s.bc("click",(function(){return e.onNoClick()})),s.Kc(27,"Annuler"),s.Tb(),s.Ic(28,C,2,1,"button",14),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Cb(4),s.Lc(e.title),s.Cb(4),s.mc("formGroup",e.myForm),s.Cb(13),s.mc("ngForOf",s.hc(22,8,e.typeActivites)),s.Cb(3),s.mc("folderToSaveInServer",e.folderToSaveInServer)("propertyOfParent",e.imageUrlTo)("eventSubmitToParent",e.imageUrlFrom)("eventSubmitFromParent",e.eventSubmitFromParent),s.Cb(4),s.mc("ngIf",!e.visualisation))},directives:[b.h,u.a,h.a,b.e,r.v,r.p,r.i,p.c,p.f,f.b,r.c,r.o,r.h,r.t,g.a,o.m,v.a,b.c,T.a,o.n,U.o],pipes:[o.b],styles:[""]}),t})();var S=i("M9IT"),I=i("Dh3D"),A=i("JX91"),k=i("hUFt"),x=i("8lcG"),K=i("NFeN"),O=i("7EHt"),F=i("+0xr"),L=i("Xa2L");function P(t,e){if(1&t&&(s.Ub(0,"mat-option",29),s.Kc(1),s.Tb()),2&t){const t=e.$implicit;s.mc("value",t.id),s.Cb(1),s.Lc(t.nom)}}function R(t,e){1&t&&s.Pb(0,"mat-spinner")}function D(t,e){if(1&t&&(s.Ub(0,"div",30),s.Ic(1,R,1,0,"mat-spinner",31),s.Tb()),2&t){const t=s.fc();s.Cb(1),s.mc("ngIf",t.isLoadingResults)}}function z(t,e){1&t&&(s.Ub(0,"th",32),s.Kc(1,"Nom"),s.Tb())}function j(t,e){if(1&t&&(s.Ub(0,"td",33),s.Kc(1),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.Lc(t.nom)}}function $(t,e){1&t&&(s.Ub(0,"th",32),s.Kc(1,"Nom Ar"),s.Tb())}function q(t,e){if(1&t&&(s.Ub(0,"td",33),s.Kc(1),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.Lc(t.nomAr)}}function N(t,e){1&t&&(s.Ub(0,"th",34),s.Kc(1,"Image"),s.Tb())}function V(t,e){if(1&t){const t=s.Vb();s.Ub(0,"td",33),s.Ub(1,"img",35,36),s.bc("error",(function(){s.zc(t);const e=s.xc(2);return s.fc().imgError(e)})),s.Tb(),s.Tb()}if(2&t){const t=e.$implicit,i=s.fc();s.Cb(1),s.mc("src",i.displayImage(t.imageUrl,t.id),s.Bc)}}function E(t,e){1&t&&(s.Ub(0,"th",34),s.Kc(1,"Type Activite"),s.Tb())}function M(t,e){if(1&t&&(s.Ub(0,"td",33),s.Kc(1),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.Lc(t.type_activite.nom)}}function G(t,e){1&t&&s.Pb(0,"th",34)}function _(t,e){if(1&t){const t=s.Vb();s.Ub(0,"td",33),s.Ub(1,"div",37),s.Ub(2,"button",38),s.bc("click",(function(){s.zc(t);const i=e.$implicit;return s.fc().edit(i)})),s.Ub(3,"mat-icon"),s.Kc(4,"create"),s.Tb(),s.Tb(),s.Ub(5,"button",39),s.bc("click",(function(){s.zc(t);const i=e.$implicit;return s.fc().detail(i)})),s.Ub(6,"mat-icon"),s.Kc(7,"remove_red_eye"),s.Tb(),s.Tb(),s.Ub(8,"button",40),s.bc("click",(function(){s.zc(t);const i=e.$implicit;return s.fc().delete(i.id)})),s.Ub(9,"mat-icon"),s.Kc(10,"delete_sweep"),s.Tb(),s.Tb(),s.Tb(),s.Tb()}}function H(t,e){1&t&&s.Pb(0,"tr",41)}function X(t,e){1&t&&s.Pb(0,"tr",42)}const B=function(){return[10,25,50,100,250]},J=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,o,a){this.uow=t,this.dialog=e,this.mydialog=i,this.url=o,this.breadcrumb=a,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["imageUrl","nom","nomAr","typeActivite","option"],this.panelOpenState=!1,this.nom=new r.f(""),this.nomAr=new r.f(""),this.idTypeActivite=new r.f(0),this.typeActivites=this.uow.typeActivites.get(),this.breadcrumb.name="Activites"}ngOnInit(){const t=Object(c.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(A.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.nom.value?"*":this.nom.value,""===this.nomAr.value?"*":this.nomAr.value,0===this.idTypeActivite.value?0:this.idTypeActivite.value)});this.subs.push(t)}reset(){this.nom.setValue(""),this.nomAr.setValue(""),this.idTypeActivite.setValue(0),this.update.next(!0)}search(){this.update.next(!0)}getPage(t,e,i,o,a,n,s){const c=this.uow.activites.getAll(t,e,i,o,a,n,s).subscribe(t=>{console.log(t),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(c)}openDialog(t,e,i){return this.dialog.open(w,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){this.openDialog(new l.a,"Ajouter "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(n.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const e=this.uow.activites.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}}))}displayImage(t,e){return t?t&&t.startsWith("http")?t:`${this.url}/activites/${e}/${t.replace(";","")}`:"assets/404.jpg"}imgError(t){t.src="assets/404.jpg"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(n.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.activites.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}}))}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(d.a),s.Ob(b.b),s.Ob(k.a),s.Ob("BASE_URL"),s.Ob(x.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-activite"]],viewQuery:function(t,e){var i;1&t&&(s.Ec(S.a,!0),s.Ec(I.a,!0)),2&t&&(s.wc(i=s.cc())&&(e.paginator=i.first),s.wc(i=s.cc())&&(e.sort=i.first))},decls:64,vars:13,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","imageUrl"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","typeActivite"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["alt","","srcset","",3,"src","error"],["img",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"button",1),s.bc("click",(function(){return e.add()})),s.Ub(2,"mat-icon"),s.Kc(3,"add"),s.Tb(),s.Kc(4," Activite "),s.Tb(),s.Tb(),s.Ub(5,"mat-accordion"),s.Ub(6,"mat-expansion-panel",2),s.bc("opened",(function(){return e.panelOpenState=!0}))("closed",(function(){return e.panelOpenState=!1})),s.Ub(7,"mat-expansion-panel-header"),s.Ub(8,"mat-panel-title",3),s.Ub(9,"mat-icon"),s.Kc(10,"search"),s.Tb(),s.Ub(11,"p",4),s.Kc(12,"Recherche"),s.Tb(),s.Tb(),s.Pb(13,"mat-panel-description"),s.Tb(),s.Pb(14,"mat-divider"),s.Ub(15,"div",5),s.Ub(16,"mat-form-field",6),s.Ub(17,"mat-label"),s.Kc(18,"nom"),s.Tb(),s.Pb(19,"input",7),s.Tb(),s.Ub(20,"mat-form-field",6),s.Ub(21,"mat-label"),s.Kc(22,"nomAr"),s.Tb(),s.Pb(23,"input",7),s.Tb(),s.Ub(24,"mat-form-field",6),s.Ub(25,"mat-label"),s.Kc(26,"typeActivites"),s.Tb(),s.Ub(27,"mat-select",8),s.Ic(28,P,2,2,"mat-option",9),s.gc(29,"async"),s.Tb(),s.Tb(),s.Tb(),s.Ub(30,"div",10),s.Ub(31,"button",11),s.bc("click",(function(){return e.reset()})),s.Ub(32,"mat-icon"),s.Kc(33,"refresh"),s.Tb(),s.Kc(34," R\xe9initialiser "),s.Tb(),s.Kc(35," \xa0\xa0 "),s.Ub(36,"button",1),s.bc("click",(function(){return e.search()})),s.Ub(37,"mat-icon"),s.Kc(38,"search"),s.Tb(),s.Kc(39," Rechercher "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(40,"div",12),s.Ic(41,D,2,1,"div",13),s.Ub(42,"div",14),s.Ub(43,"table",15,16),s.Sb(45,17),s.Ic(46,z,2,0,"th",18),s.Ic(47,j,2,1,"td",19),s.Rb(),s.Sb(48,20),s.Ic(49,$,2,0,"th",18),s.Ic(50,q,2,1,"td",19),s.Rb(),s.Sb(51,21),s.Ic(52,N,2,0,"th",22),s.Ic(53,V,3,1,"td",19),s.Rb(),s.Sb(54,23),s.Ic(55,E,2,0,"th",22),s.Ic(56,M,2,1,"td",19),s.Rb(),s.Sb(57,24),s.Ic(58,G,1,0,"th",22),s.Ic(59,_,11,0,"td",19),s.Rb(),s.Ic(60,H,1,0,"tr",25),s.Ic(61,X,1,0,"tr",26),s.Tb(),s.Tb(),s.Pb(62,"mat-paginator",27,28),s.Tb()),2&t&&(s.Cb(19),s.mc("formControl",e.nom),s.Cb(4),s.mc("formControl",e.nomAr),s.Cb(4),s.mc("formControl",e.idTypeActivite),s.Cb(1),s.mc("ngForOf",s.hc(29,10,e.typeActivites)),s.Cb(13),s.mc("ngIf",e.isLoadingResults),s.Cb(2),s.mc("dataSource",e.dataSource),s.Cb(17),s.mc("matHeaderRowDef",e.displayedColumns),s.Cb(1),s.mc("matRowDefColumns",e.displayedColumns),s.Cb(1),s.mc("length",e.resultsLength)("pageSizeOptions",s.nc(12,B)))},directives:[T.a,K.a,O.a,O.c,O.e,O.f,O.d,h.a,p.c,p.f,f.b,r.c,r.t,r.o,r.g,g.a,o.m,o.n,F.j,I.a,F.c,F.e,F.b,F.g,F.i,S.a,U.o,L.b,F.d,I.b,F.a,F.f,F.h],pipes:[o.b],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let Q=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[a.h.forChild(J)],a.h]}),t})();var W=i("tk/3"),Y=i("2thQ"),Z=i("lOAm"),tt=i("Fr4G");let et=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[o.c,Q,W.c,Y.a,r.j,r.s,Z.a,tt.a]]}),t})()}}]);