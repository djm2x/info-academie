(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{eRwu:function(t,e,i){"use strict";i.r(e),i.d(e,"OffreProfModule",function(){return B});var s=i("ofXK"),a=i("tyNb"),o=i("mrSG"),n=i("fXoL"),r=i("VRyK"),c=i("3Pt+"),l=i("0IaG"),u=i("V2kc"),b=i("7q3A"),d=i("/t3+"),h=i("f0Cb"),m=i("kmnG"),f=i("qFsG"),p=i("d3UM"),g=i("bTqV"),v=i("FKr1");function C(t,e){if(1&t&&(n.Ub(0,"mat-option",13),n.Lc(1),n.Tb()),2&t){const t=e.$implicit;n.mc("value",t.id),n.Cb(1),n.Mc(t.nom)}}function T(t,e){if(1&t){const t=n.Vb();n.Ub(0,"button",14),n.bc("click",function(){n.Ac(t);const e=n.fc();return e.onOkClick(e.myForm.value)}),n.Lc(1,"Enregistre"),n.Tb()}if(2&t){const t=n.fc();n.mc("disabled",t.myForm.invalid)}}let y=(()=>{class t{constructor(t,e,i,s){this.dialogRef=t,this.data=e,this.fb=i,this.uow=s,this.subs=[],this.title="",this.visualisation=!1,this.typeCourss=this.uow.typeCours.get(),this.folderToSaveInServer="offreProfs"}ngOnInit(){return Object(o.a)(this,void 0,void 0,function*(){this.o=this.data.model,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm()})}onNoClick(){this.dialogRef.close()}onOkClick(t){let e=null;e=0===t.id?this.uow.offreProfs.post(t).subscribe(e=>{this.dialogRef.close(t)}):this.uow.offreProfs.put(t.id,t).subscribe(e=>{this.dialogRef.close(t)}),this.subs.push(e)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[c.u.required]],interval:[this.o.interval,[c.u.required]],value:[this.o.value,[c.u.required]],idTypeCours:[+this.o.idTypeCours,[c.u.required]]})}resetForm(){this.o=new u.k,this.createForm()}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(l.g),n.Ob(l.a),n.Ob(c.e),n.Ob(b.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-update"]],decls:27,vars:6,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","interval","required",""],["matInput","","formControlName","value","required",""],["formControlName","idTypeCours"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"h1",1),n.Ub(2,"mat-toolbar",2),n.Ub(3,"span"),n.Lc(4),n.Tb(),n.Tb(),n.Pb(5,"mat-divider"),n.Tb(),n.Ub(6,"div",3),n.Ub(7,"mat-dialog-content"),n.Ub(8,"form",4),n.Ub(9,"mat-form-field",5),n.Ub(10,"mat-label"),n.Lc(11,"interval"),n.Tb(),n.Pb(12,"input",6),n.Tb(),n.Ub(13,"mat-form-field",5),n.Ub(14,"mat-label"),n.Lc(15,"value"),n.Tb(),n.Pb(16,"input",7),n.Tb(),n.Ub(17,"mat-form-field",5),n.Ub(18,"mat-label"),n.Lc(19,"type Cours"),n.Tb(),n.Ub(20,"mat-select",8),n.Jc(21,C,2,2,"mat-option",9),n.gc(22,"async"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(23,"mat-dialog-actions",10),n.Ub(24,"button",11),n.bc("click",function(){return e.onNoClick()}),n.Lc(25,"Annuler"),n.Tb(),n.Jc(26,T,2,1,"button",12),n.Tb(),n.Tb(),n.Tb()),2&t&&(n.Cb(4),n.Mc(e.title),n.Cb(4),n.mc("formGroup",e.myForm),n.Cb(13),n.mc("ngForOf",n.hc(22,4,e.typeCourss)),n.Cb(5),n.mc("ngIf",!e.visualisation))},directives:[l.h,d.a,h.a,l.e,c.v,c.p,c.i,m.c,m.f,f.b,c.c,c.o,c.h,c.t,p.a,s.m,l.c,g.a,s.n,v.n],pipes:[s.b],styles:[""]}),t})();var w=i("M9IT"),L=i("Dh3D"),U=i("JX91"),k=i("hUFt"),O=i("8lcG"),S=i("NFeN"),x=i("+0xr"),P=i("Xa2L");function R(t,e){1&t&&n.Pb(0,"mat-spinner")}function D(t,e){if(1&t&&(n.Ub(0,"div",18),n.Jc(1,R,1,0,"mat-spinner",19),n.Tb()),2&t){const t=n.fc();n.Cb(1),n.mc("ngIf",t.isLoadingResults)}}function I(t,e){1&t&&(n.Ub(0,"th",20),n.Lc(1,"Interval"),n.Tb())}function F(t,e){if(1&t&&(n.Ub(0,"td",21),n.Lc(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Mc(t.interval)}}function J(t,e){1&t&&(n.Ub(0,"th",20),n.Lc(1,"Value"),n.Tb())}function M(t,e){if(1&t&&(n.Ub(0,"td",21),n.Lc(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Mc(t.value)}}function A(t,e){1&t&&(n.Ub(0,"th",22),n.Lc(1,"Type Cours"),n.Tb())}function j(t,e){if(1&t&&(n.Ub(0,"td",21),n.Lc(1),n.Tb()),2&t){const t=e.$implicit;n.Cb(1),n.Mc(t.type_cours.nom)}}function V(t,e){1&t&&n.Pb(0,"th",22)}function q(t,e){if(1&t){const t=n.Vb();n.Ub(0,"td",21),n.Ub(1,"div",23),n.Ub(2,"button",24),n.bc("click",function(){n.Ac(t);const i=e.$implicit;return n.fc().edit(i)}),n.Ub(3,"mat-icon"),n.Lc(4,"create"),n.Tb(),n.Tb(),n.Ub(5,"button",25),n.bc("click",function(){n.Ac(t);const i=e.$implicit;return n.fc().detail(i)}),n.Ub(6,"mat-icon"),n.Lc(7,"remove_red_eye"),n.Tb(),n.Tb(),n.Ub(8,"button",26),n.bc("click",function(){n.Ac(t);const i=e.$implicit;return n.fc().delete(i.id)}),n.Ub(9,"mat-icon"),n.Lc(10,"delete_sweep"),n.Tb(),n.Tb(),n.Tb(),n.Tb()}}function $(t,e){1&t&&n.Pb(0,"tr",27)}function z(t,e){1&t&&n.Pb(0,"tr",28)}const G=function(){return[10,25,50,100,250]},N=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class t{constructor(t,e,i,s,a){this.uow=t,this.dialog=e,this.mydialog=i,this.url=s,this.breadcrumb=a,this.update=new n.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["interval","value","typeCours","option"],this.panelOpenState=!1,this.interval=new c.f(""),this.value=new c.f(0),this.idTypeCours=new c.f(0),this.typeCourss=this.uow.typeCours.get(),this.breadcrumb.name="OffreProfs"}ngOnInit(){const t=Object(r.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(U.a)(null)).subscribe(t=>{!0===t?this.paginator.pageIndex=0:t=t,this.paginator.pageSize?t=t:this.paginator.pageSize=10;const e=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(e,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.interval.value?"*":this.interval.value,0===this.value.value?0:this.value.value,0===this.idTypeCours.value?0:this.idTypeCours.value)});this.subs.push(t)}reset(){this.interval.setValue(""),this.value.setValue(0),this.idTypeCours.setValue(0),this.update.next(!0)}search(){this.update.next(!0)}getPage(t,e,i,s,a,o,n){const r=this.uow.offreProfs.getAll(t,e,i,s,a,o,n).subscribe(t=>{console.log(t.list),this.dataSource=t.list,this.resultsLength=t.count,this.isLoadingResults=!1});this.subs.push(r)}openDialog(t,e,i){return this.dialog.open(y,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}add(){this.openDialog(new u.k,"Ajouter "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}edit(t){this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(t=>{t&&this.update.next(!0)})}detail(t){this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(t=>{t&&this.update.next(!0)})}delete(t){return Object(o.a)(this,void 0,void 0,function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const e=this.uow.offreProfs.delete(t).subscribe(()=>this.update.next(!0));this.subs.push(e)}})}displayImage(t){return t?t&&t.startsWith("http")?t:`${this.url}/offreProfs/${t.replace(";","")}`:"assets/404.png"}imgError(t){t.src="assets/404.png"}isSelected(t){return!!this.selectedList.find(e=>e.id===t.id)}check(t){const e=this.selectedList.findIndex(e=>t.id===e.id);-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(o.a)(this,void 0,void 0,function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const t=this.uow.offreProfs.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(t)}})}ngOnDestroy(){this.subs.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(b.a),n.Ob(l.b),n.Ob(k.a),n.Ob("BASE_URL"),n.Ob(O.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-offreProf"]],viewQuery:function(t,e){if(1&t&&(n.Fc(w.a,!0),n.Fc(L.a,!0)),2&t){let t;n.xc(t=n.cc())&&(e.paginator=t.first),n.xc(t=n.cc())&&(e.sort=t.first)}},decls:26,vars:7,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","interval"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["matColumnDef","typeCours"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.Ub(1,"button",1),n.bc("click",function(){return e.add()}),n.Ub(2,"mat-icon"),n.Lc(3,"add"),n.Tb(),n.Lc(4," OffreProf "),n.Tb(),n.Tb(),n.Ub(5,"div",2),n.Jc(6,D,2,1,"div",3),n.Ub(7,"div",4),n.Ub(8,"table",5,6),n.Sb(10,7),n.Jc(11,I,2,0,"th",8),n.Jc(12,F,2,1,"td",9),n.Rb(),n.Sb(13,10),n.Jc(14,J,2,0,"th",8),n.Jc(15,M,2,1,"td",9),n.Rb(),n.Sb(16,11),n.Jc(17,A,2,0,"th",12),n.Jc(18,j,2,1,"td",9),n.Rb(),n.Sb(19,13),n.Jc(20,V,1,0,"th",12),n.Jc(21,q,11,0,"td",9),n.Rb(),n.Jc(22,$,1,0,"tr",14),n.Jc(23,z,1,0,"tr",15),n.Tb(),n.Tb(),n.Pb(24,"mat-paginator",16,17),n.Tb()),2&t&&(n.Cb(6),n.mc("ngIf",e.isLoadingResults),n.Cb(2),n.mc("dataSource",e.dataSource),n.Cb(14),n.mc("matHeaderRowDef",e.displayedColumns),n.Cb(1),n.mc("matRowDefColumns",e.displayedColumns),n.Cb(1),n.mc("length",e.resultsLength)("pageSizeOptions",n.oc(6,G)))},directives:[g.a,S.a,s.n,x.j,L.a,x.c,x.e,x.b,x.g,x.i,w.a,P.b,x.d,L.b,x.a,x.f,x.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)},imports:[[a.h.forChild(N)],a.h]}),t})();var _=i("tk/3"),H=i("2thQ"),X=i("lOAm"),K=i("Fr4G");let B=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)},imports:[[s.c,E,_.c,H.a,c.j,c.s,X.a,K.a]]}),t})()}}]);