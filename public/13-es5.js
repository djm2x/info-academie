!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{QTC5:function(t,n,a){"use strict";a.r(n),a.d(n,"BrancheModule",function(){return ne});var o=a("ofXK"),r=a("tyNb"),c=a("mrSG"),s=a("fXoL"),u=a("VRyK"),l=a("3Pt+"),b=a("0IaG"),m=a("V2kc"),d=a("7q3A"),f=a("/t3+"),h=a("f0Cb"),p=a("kmnG"),v=a("qFsG"),g=a("d3UM"),T=a("bTqV"),k=a("FKr1");function U(e,t){if(1&e&&(s.Ub(0,"mat-option",13),s.Kc(1),s.Tb()),2&e){var i=t.$implicit;s.mc("value",i.id),s.Cb(1),s.Lc(i.nom)}}function y(e,t){if(1&e){var i=s.Vb();s.Ub(0,"button",14),s.bc("click",function(){s.zc(i);var e=s.fc();return e.onOkClick(e.myForm.value)}),s.Kc(1,"Enregistre"),s.Tb()}if(2&e){var n=s.fc();s.mc("disabled",n.myForm.invalid)}}var w,C=((w=function(){function t(i,n,a,o){e(this,t),this.dialogRef=i,this.data=n,this.fb=a,this.uow=o,this.subs=[],this.title="",this.visualisation=!1,this.niveauScolaires=this.uow.niveauScolaires.get(),this.folderToSaveInServer="branches"}return i(t,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.o=this.data.model,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm();case 1:case"end":return e.stop()}},e,this)}))}},{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"onOkClick",value:function(e){var t,i=this;t=0===e.id?this.uow.branches.post(e).subscribe(function(t){i.dialogRef.close(e)}):this.uow.branches.put(e.id,e).subscribe(function(t){i.dialogRef.close(e)}),this.subs.push(t)}},{key:"createForm",value:function(){this.myForm=this.fb.group({id:[this.o.id,[l.u.required]],nom:[this.o.nom,[l.u.required]],nomAr:[this.o.nomAr,[l.u.required]],idNiveauScolaire:[this.o.idNiveauScolaire,[l.u.required]]})}},{key:"resetForm",value:function(){this.o=new m.b,this.createForm()}},{key:"ngOnDestroy",value:function(){this.subs.forEach(function(e){e.unsubscribe()})}}]),t}()).\u0275fac=function(e){return new(e||w)(s.Ob(b.g),s.Ob(b.a),s.Ob(l.e),s.Ob(d.a))},w.\u0275cmp=s.Ib({type:w,selectors:[["app-update"]],decls:27,vars:6,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["formControlName","idNiveauScolaire"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(e,t){1&e&&(s.Ub(0,"div",0),s.Ub(1,"h1",1),s.Ub(2,"mat-toolbar",2),s.Ub(3,"span"),s.Kc(4),s.Tb(),s.Tb(),s.Pb(5,"mat-divider"),s.Tb(),s.Ub(6,"div",3),s.Ub(7,"mat-dialog-content"),s.Ub(8,"form",4),s.Ub(9,"mat-form-field",5),s.Ub(10,"mat-label"),s.Kc(11,"nom"),s.Tb(),s.Pb(12,"input",6),s.Tb(),s.Ub(13,"mat-form-field",5),s.Ub(14,"mat-label"),s.Kc(15,"nomAr"),s.Tb(),s.Pb(16,"input",7),s.Tb(),s.Ub(17,"mat-form-field",5),s.Ub(18,"mat-label"),s.Kc(19,"niveauScolaires"),s.Tb(),s.Ub(20,"mat-select",8),s.Ic(21,U,2,2,"mat-option",9),s.gc(22,"async"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(23,"mat-dialog-actions",10),s.Ub(24,"button",11),s.bc("click",function(){return t.onNoClick()}),s.Kc(25,"Annuler"),s.Tb(),s.Ic(26,y,2,1,"button",12),s.Tb(),s.Tb(),s.Tb()),2&e&&(s.Cb(4),s.Lc(t.title),s.Cb(4),s.mc("formGroup",t.myForm),s.Cb(13),s.mc("ngForOf",s.hc(22,4,t.niveauScolaires)),s.Cb(5),s.mc("ngIf",!t.visualisation))},directives:[b.h,f.a,h.a,b.e,l.v,l.p,l.i,p.c,p.f,v.b,l.c,l.o,l.h,l.t,g.a,o.m,b.c,T.a,o.n,k.n],pipes:[o.b],styles:[""]}),w),S=a("M9IT"),I=a("Dh3D"),x=a("JX91"),R=a("hUFt"),K=a("8lcG"),O=a("NFeN"),L=a("7EHt"),D=a("+0xr"),A=a("Xa2L");function F(e,t){if(1&e&&(s.Ub(0,"mat-option",28),s.Kc(1),s.Tb()),2&e){var i=t.$implicit;s.mc("value",i.id),s.Cb(1),s.Lc(i.nom)}}function N(e,t){1&e&&s.Pb(0,"mat-spinner")}function P(e,t){if(1&e&&(s.Ub(0,"div",29),s.Ic(1,N,1,0,"mat-spinner",30),s.Tb()),2&e){var i=s.fc();s.Cb(1),s.mc("ngIf",i.isLoadingResults)}}function z(e,t){1&e&&(s.Ub(0,"th",31),s.Kc(1,"Nom"),s.Tb())}function j(e,t){if(1&e&&(s.Ub(0,"td",32),s.Kc(1),s.Tb()),2&e){var i=t.$implicit;s.Cb(1),s.Lc(i.nom)}}function q(e,t){1&e&&(s.Ub(0,"th",31),s.Kc(1,"Nom Ar"),s.Tb())}function E(e,t){if(1&e&&(s.Ub(0,"td",32),s.Kc(1),s.Tb()),2&e){var i=t.$implicit;s.Cb(1),s.Lc(i.nomAr)}}function M(e,t){1&e&&(s.Ub(0,"th",33),s.Kc(1,"Niveau Scolaire"),s.Tb())}function V(e,t){if(1&e&&(s.Ub(0,"td",32),s.Kc(1),s.Tb()),2&e){var i=t.$implicit;s.Cb(1),s.Lc(i.niveau_scolaire.nom)}}function G(e,t){1&e&&s.Pb(0,"th",33)}function $(e,t){if(1&e){var i=s.Vb();s.Ub(0,"td",32),s.Ub(1,"div",34),s.Ub(2,"button",35),s.bc("click",function(){s.zc(i);var e=t.$implicit;return s.fc().edit(e)}),s.Ub(3,"mat-icon"),s.Kc(4,"create"),s.Tb(),s.Tb(),s.Ub(5,"button",36),s.bc("click",function(){s.zc(i);var e=t.$implicit;return s.fc().detail(e)}),s.Ub(6,"mat-icon"),s.Kc(7,"remove_red_eye"),s.Tb(),s.Tb(),s.Ub(8,"button",37),s.bc("click",function(){s.zc(i);var e=t.$implicit;return s.fc().delete(e.id)}),s.Ub(9,"mat-icon"),s.Kc(10,"delete_sweep"),s.Tb(),s.Tb(),s.Tb(),s.Tb()}}function _(e,t){1&e&&s.Pb(0,"tr",38)}function B(e,t){1&e&&s.Pb(0,"tr",39)}var H,X,J,Q=function(){return[10,25,50,100,250]},W=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(H=function(){function t(i,n,a,o,r){e(this,t),this.uow=i,this.dialog=n,this.mydialog=a,this.url=o,this.breadcrumb=r,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","niveauScolaire","option"],this.panelOpenState=!1,this.nom=new l.f(""),this.nomAr=new l.f(""),this.idNiveauScolaire=new l.f(0),this.niveauScolaires=this.uow.niveauScolaires.get(),this.breadcrumb.name="Branches"}return i(t,[{key:"ngOnInit",value:function(){var e=this,t=Object(u.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(x.a)(null)).subscribe(function(t){!0===t?e.paginator.pageIndex=0:t=t,e.paginator.pageSize?t=t:e.paginator.pageSize=10;var i=e.paginator.pageIndex*e.paginator.pageSize;e.isLoadingResults=!0,e.getPage(i,e.paginator.pageSize,e.sort.active?e.sort.active:"id",e.sort.direction?e.sort.direction:"desc",""===e.nom.value?"*":e.nom.value,""===e.nomAr.value?"*":e.nomAr.value,0===e.idNiveauScolaire.value?0:e.idNiveauScolaire.value)});this.subs.push(t)}},{key:"reset",value:function(){this.nom.setValue(""),this.nomAr.setValue(""),this.idNiveauScolaire.setValue(0),this.update.next(!0)}},{key:"search",value:function(){this.update.next(!0)}},{key:"getPage",value:function(e,t,i,n,a,o,r){var c=this,s=this.uow.branches.getAll(e,t,i,n,a,o,r).subscribe(function(e){console.log(e.list),c.dataSource=e.list,c.resultsLength=e.count,c.isLoadingResults=!1});this.subs.push(s)}},{key:"openDialog",value:function(e,t,i){return this.dialog.open(C,{width:"1100px",disableClose:!0,data:{model:e,title:t,visualisation:i}}).afterClosed()}},{key:"add",value:function(){var e=this;this.openDialog(new m.b,"Ajouter "+this.breadcrumb.name,!1).subscribe(function(t){t&&e.update.next(!0)})}},{key:"edit",value:function(e){var t=this;this.openDialog(e,"Modifier "+this.breadcrumb.name,!1).subscribe(function(e){e&&t.update.next(!0)})}},{key:"detail",value:function(e){var t=this;this.openDialog(e,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(function(e){e&&t.update.next(!0)})}},{key:"delete",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var i,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mydialog.openDialog(this.breadcrumb.name).toPromise();case 2:if(t.t0=t.sent,"ok"!==t.t0){t.next=6;break}i=this.uow.branches.delete(e).subscribe(function(){return n.update.next(!0)}),this.subs.push(i);case 6:case"end":return t.stop()}},t,this)}))}},{key:"displayImage",value:function(e){return e?e&&e.startsWith("http")?e:"".concat(this.url,"/branches/").concat(e.replace(";","")):"assets/404.png"}},{key:"imgError",value:function(e){e.src="assets/404.png"}},{key:"isSelected",value:function(e){return!!this.selectedList.find(function(t){return t.id===e.id})}},{key:"check",value:function(e){var t=this.selectedList.findIndex(function(t){return e.id===t.id});-1!==t?this.selectedList.splice(t,1):this.selectedList.push(e)}},{key:"isAllSelected",value:function(){return this.selectedList.length===this.dataSource.length}},{key:"masterToggle",value:function(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}},{key:"deleteList",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mydialog.openDialog("role").toPromise();case 2:if(e.t0=e.sent,"ok"!==e.t0){e.next=6;break}t=this.uow.branches.deleteRange(this.selectedList).subscribe(function(){i.selectedList=[],i.update.next(!0)}),this.subs.push(t);case 6:case"end":return e.stop()}},e,this)}))}},{key:"ngOnDestroy",value:function(){this.subs.forEach(function(e){e.unsubscribe()})}}]),t}(),H.\u0275fac=function(e){return new(e||H)(s.Ob(d.a),s.Ob(b.b),s.Ob(R.a),s.Ob("BASE_URL"),s.Ob(K.a))},H.\u0275cmp=s.Ib({type:H,selectors:[["app-branche"]],viewQuery:function(e,t){var i;1&e&&(s.Ec(S.a,!0),s.Ec(I.a,!0)),2&e&&(s.wc(i=s.cc())&&(t.paginator=i.first),s.wc(i=s.cc())&&(t.sort=i.first))},decls:61,vars:13,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","niveauScolaire"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(s.Ub(0,"div",0),s.Ub(1,"button",1),s.bc("click",function(){return t.add()}),s.Ub(2,"mat-icon"),s.Kc(3,"add"),s.Tb(),s.Kc(4," Branche "),s.Tb(),s.Tb(),s.Ub(5,"mat-accordion"),s.Ub(6,"mat-expansion-panel",2),s.bc("opened",function(){return t.panelOpenState=!0})("closed",function(){return t.panelOpenState=!1}),s.Ub(7,"mat-expansion-panel-header"),s.Ub(8,"mat-panel-title",3),s.Ub(9,"mat-icon"),s.Kc(10,"search"),s.Tb(),s.Ub(11,"p",4),s.Kc(12,"Recherche"),s.Tb(),s.Tb(),s.Pb(13,"mat-panel-description"),s.Tb(),s.Pb(14,"mat-divider"),s.Ub(15,"div",5),s.Ub(16,"mat-form-field",6),s.Ub(17,"mat-label"),s.Kc(18,"nom"),s.Tb(),s.Pb(19,"input",7),s.Tb(),s.Ub(20,"mat-form-field",6),s.Ub(21,"mat-label"),s.Kc(22,"nomAr"),s.Tb(),s.Pb(23,"input",7),s.Tb(),s.Ub(24,"mat-form-field",6),s.Ub(25,"mat-label"),s.Kc(26,"niveauScolaires"),s.Tb(),s.Ub(27,"mat-select",8),s.Ic(28,F,2,2,"mat-option",9),s.gc(29,"async"),s.Tb(),s.Tb(),s.Tb(),s.Ub(30,"div",10),s.Ub(31,"button",11),s.bc("click",function(){return t.reset()}),s.Ub(32,"mat-icon"),s.Kc(33,"refresh"),s.Tb(),s.Kc(34," R\xe9initialiser "),s.Tb(),s.Kc(35," \xa0\xa0 "),s.Ub(36,"button",1),s.bc("click",function(){return t.search()}),s.Ub(37,"mat-icon"),s.Kc(38,"search"),s.Tb(),s.Kc(39," Rechercher "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(40,"div",12),s.Ic(41,P,2,1,"div",13),s.Ub(42,"div",14),s.Ub(43,"table",15,16),s.Sb(45,17),s.Ic(46,z,2,0,"th",18),s.Ic(47,j,2,1,"td",19),s.Rb(),s.Sb(48,20),s.Ic(49,q,2,0,"th",18),s.Ic(50,E,2,1,"td",19),s.Rb(),s.Sb(51,21),s.Ic(52,M,2,0,"th",22),s.Ic(53,V,2,1,"td",19),s.Rb(),s.Sb(54,23),s.Ic(55,G,1,0,"th",22),s.Ic(56,$,11,0,"td",19),s.Rb(),s.Ic(57,_,1,0,"tr",24),s.Ic(58,B,1,0,"tr",25),s.Tb(),s.Tb(),s.Pb(59,"mat-paginator",26,27),s.Tb()),2&e&&(s.Cb(19),s.mc("formControl",t.nom),s.Cb(4),s.mc("formControl",t.nomAr),s.Cb(4),s.mc("formControl",t.idNiveauScolaire),s.Cb(1),s.mc("ngForOf",s.hc(29,10,t.niveauScolaires)),s.Cb(13),s.mc("ngIf",t.isLoadingResults),s.Cb(2),s.mc("dataSource",t.dataSource),s.Cb(14),s.mc("matHeaderRowDef",t.displayedColumns),s.Cb(1),s.mc("matRowDefColumns",t.displayedColumns),s.Cb(1),s.mc("length",t.resultsLength)("pageSizeOptions",s.nc(12,Q)))},directives:[T.a,O.a,L.a,L.c,L.e,L.f,L.d,h.a,p.c,p.f,v.b,l.c,l.t,l.o,l.g,g.a,o.m,o.n,D.j,I.a,D.c,D.e,D.b,D.g,D.i,S.a,k.n,A.b,D.d,I.b,D.a,D.f,D.h],pipes:[o.b],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),H)}],Y=((X=function t(){e(this,t)}).\u0275mod=s.Mb({type:X}),X.\u0275inj=s.Lb({factory:function(e){return new(e||X)},imports:[[r.h.forChild(W)],r.h]}),X),Z=a("tk/3"),ee=a("2thQ"),te=a("lOAm"),ie=a("Fr4G"),ne=((J=function t(){e(this,t)}).\u0275mod=s.Mb({type:J}),J.\u0275inj=s.Lb({factory:function(e){return new(e||J)},imports:[[o.c,Y,Z.c,ee.a,l.j,l.s,te.a,ie.a]]}),J)}}])}();