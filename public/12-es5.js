!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{H0cD:function(e,n,a){"use strict";a.r(n),a.d(n,"ActiviteModule",function(){return ct});var o=a("ofXK"),r=a("tyNb"),c=a("mrSG"),s=a("fXoL"),u=a("VRyK"),l=a("3Pt+"),b=a("0IaG"),m=a("V2kc"),d=a("XNiG"),f=a("7q3A"),p=a("/t3+"),h=a("f0Cb"),v=a("kmnG"),g=a("qFsG"),T=a("d3UM"),y=a("5WMv"),U=a("bTqV"),k=a("FKr1");function w(t,e){if(1&t&&(s.Ub(0,"mat-option",15),s.Lc(1),s.Tb()),2&t){var i=e.$implicit;s.mc("value",i.id),s.Cb(1),s.Mc(i.nom)}}function L(t,e){if(1&t){var i=s.Vb();s.Ub(0,"button",16),s.bc("click",function(){s.Ac(i);var t=s.fc();return t.onOkClick(t.myForm.value)}),s.Lc(1,"Enregistre"),s.Tb()}if(2&t){var n=s.fc();s.mc("disabled",n.myForm.invalid)}}var C,A=((C=function(){function e(i,n,a,o){t(this,e),this.dialogRef=i,this.data=n,this.fb=a,this.uow=o,this.subs=[],this.title="",this.visualisation=!1,this.typeActivites=this.uow.typeActivites.get(),this.folderToSaveInServer="activites",this.imageUrlTo=new d.a,this.imageUrlFrom=new d.a,this.eventSubmitFromParent=new d.a}return i(e,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.o=this.data.model,this.folderToSaveInServer=this.folderToSaveInServer+"_"+this.o.id,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm(),this.imageUrlFrom.subscribe(function(t){return e.myForm.get("imageUrl").setValue(t)}),console.log(this.o),setTimeout(function(){e.imageUrlTo.next(e.o.imageUrl)},100);case 1:case"end":return t.stop()}},t,this)}))}},{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"onOkClick",value:function(t){var e,i=this;e=0===t.id?this.uow.activites.post(t).subscribe(function(e){i.eventSubmitFromParent.next({id:e.id}),i.dialogRef.close(t)}):this.uow.activites.put(t.id,t).subscribe(function(e){i.eventSubmitFromParent.next({id:t.id}),i.dialogRef.close(t)}),this.subs.push(e)}},{key:"createForm",value:function(){this.myForm=this.fb.group({id:[this.o.id,[l.u.required]],nom:[this.o.nom,[l.u.required]],nomAr:[this.o.nomAr,[l.u.required]],imageUrl:[this.o.imageUrl],idTypeActivite:[+this.o.idTypeActivite,[l.u.required,l.u.min(1)]]})}},{key:"resetForm",value:function(){this.o=new m.a,this.createForm()}},{key:"ngOnDestroy",value:function(){this.subs.forEach(function(t){t.unsubscribe()})}}]),e}()).\u0275fac=function(t){return new(t||C)(s.Ob(b.g),s.Ob(b.a),s.Ob(l.e),s.Ob(f.a))},C.\u0275cmp=s.Ib({type:C,selectors:[["app-update"]],decls:29,vars:10,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["formControlName","idTypeActivite"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-12"],["nameBtn","Image",3,"folderToSaveInServer","propertyOfParent","eventSubmitToParent","eventSubmitFromParent"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"h1",1),s.Ub(2,"mat-toolbar",2),s.Ub(3,"span"),s.Lc(4),s.Tb(),s.Tb(),s.Pb(5,"mat-divider"),s.Tb(),s.Ub(6,"div",3),s.Ub(7,"mat-dialog-content"),s.Ub(8,"form",4),s.Ub(9,"mat-form-field",5),s.Ub(10,"mat-label"),s.Lc(11,"nom"),s.Tb(),s.Pb(12,"input",6),s.Tb(),s.Ub(13,"mat-form-field",5),s.Ub(14,"mat-label"),s.Lc(15,"nomAr"),s.Tb(),s.Pb(16,"input",7),s.Tb(),s.Ub(17,"mat-form-field",5),s.Ub(18,"mat-label"),s.Lc(19,"typeActivites"),s.Tb(),s.Ub(20,"mat-select",8),s.Jc(21,w,2,2,"mat-option",9),s.gc(22,"async"),s.Tb(),s.Tb(),s.Ub(23,"div",10),s.Pb(24,"app-upload-image",11),s.Tb(),s.Tb(),s.Tb(),s.Ub(25,"mat-dialog-actions",12),s.Ub(26,"button",13),s.bc("click",function(){return e.onNoClick()}),s.Lc(27,"Annuler"),s.Tb(),s.Jc(28,L,2,1,"button",14),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Cb(4),s.Mc(e.title),s.Cb(4),s.mc("formGroup",e.myForm),s.Cb(13),s.mc("ngForOf",s.hc(22,8,e.typeActivites)),s.Cb(3),s.mc("folderToSaveInServer",e.folderToSaveInServer)("propertyOfParent",e.imageUrlTo)("eventSubmitToParent",e.imageUrlFrom)("eventSubmitFromParent",e.eventSubmitFromParent),s.Cb(4),s.mc("ngIf",!e.visualisation))},directives:[b.h,p.a,h.a,b.e,l.v,l.p,l.i,v.c,v.f,g.b,l.c,l.o,l.h,l.t,T.a,o.m,y.a,b.c,U.a,o.n,k.n],pipes:[o.b],styles:[""]}),C),S=a("M9IT"),x=a("Dh3D"),F=a("JX91"),O=a("hUFt"),R=a("8lcG"),I=a("NFeN"),P=a("7EHt"),D=a("+0xr"),J=a("Xa2L");function M(t,e){if(1&t&&(s.Ub(0,"mat-option",29),s.Lc(1),s.Tb()),2&t){var i=e.$implicit;s.mc("value",i.id),s.Cb(1),s.Mc(i.nom)}}function j(t,e){1&t&&s.Pb(0,"mat-spinner")}function N(t,e){if(1&t&&(s.Ub(0,"div",30),s.Jc(1,j,1,0,"mat-spinner",31),s.Tb()),2&t){var i=s.fc();s.Cb(1),s.mc("ngIf",i.isLoadingResults)}}function V(t,e){1&t&&(s.Ub(0,"th",32),s.Lc(1,"Nom"),s.Tb())}function q(t,e){if(1&t&&(s.Ub(0,"td",33),s.Lc(1),s.Tb()),2&t){var i=e.$implicit;s.Cb(1),s.Mc(i.nom)}}function E(t,e){1&t&&(s.Ub(0,"th",32),s.Lc(1,"Nom Ar"),s.Tb())}function G(t,e){if(1&t&&(s.Ub(0,"td",33),s.Lc(1),s.Tb()),2&t){var i=e.$implicit;s.Cb(1),s.Mc(i.nomAr)}}function $(t,e){1&t&&(s.Ub(0,"th",34),s.Lc(1,"Image"),s.Tb())}function z(t,e){if(1&t){var i=s.Vb();s.Ub(0,"td",33),s.Ub(1,"img",35,36),s.bc("error",function(){s.Ac(i);var t=s.yc(2);return s.fc().imgError(t)}),s.Tb(),s.Tb()}if(2&t){var n=e.$implicit,a=s.fc();s.Cb(1),s.mc("src",a.displayImage(n.imageUrl,n.id),s.Cc)}}function _(t,e){1&t&&(s.Ub(0,"th",34),s.Lc(1,"Type Activite"),s.Tb())}function H(t,e){if(1&t&&(s.Ub(0,"td",33),s.Lc(1),s.Tb()),2&t){var i=e.$implicit;s.Cb(1),s.Mc(i.type_activite.nom)}}function X(t,e){1&t&&s.Pb(0,"th",34)}function B(t,e){if(1&t){var i=s.Vb();s.Ub(0,"td",33),s.Ub(1,"div",37),s.Ub(2,"button",38),s.bc("click",function(){s.Ac(i);var t=e.$implicit;return s.fc().edit(t)}),s.Ub(3,"mat-icon"),s.Lc(4,"create"),s.Tb(),s.Tb(),s.Ub(5,"button",39),s.bc("click",function(){s.Ac(i);var t=e.$implicit;return s.fc().detail(t)}),s.Ub(6,"mat-icon"),s.Lc(7,"remove_red_eye"),s.Tb(),s.Tb(),s.Ub(8,"button",40),s.bc("click",function(){s.Ac(i);var t=e.$implicit;return s.fc().delete(t.id)}),s.Ub(9,"mat-icon"),s.Lc(10,"delete_sweep"),s.Tb(),s.Tb(),s.Tb(),s.Tb()}}function K(t,e){1&t&&s.Pb(0,"tr",41)}function Q(t,e){1&t&&s.Pb(0,"tr",42)}var W,Y,Z,tt=function(){return[10,25,50,100,250]},et=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(W=function(){function e(i,n,a,o,r){t(this,e),this.uow=i,this.dialog=n,this.mydialog=a,this.url=o,this.breadcrumb=r,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["imageUrl","nom","nomAr","typeActivite","option"],this.panelOpenState=!1,this.nom=new l.f(""),this.nomAr=new l.f(""),this.idTypeActivite=new l.f(0),this.typeActivites=this.uow.typeActivites.get(),this.breadcrumb.name="Activites"}return i(e,[{key:"ngOnInit",value:function(){var t=this,e=Object(u.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(F.a)(null)).subscribe(function(e){!0===e?t.paginator.pageIndex=0:e=e,t.paginator.pageSize?e=e:t.paginator.pageSize=10;var i=t.paginator.pageIndex*t.paginator.pageSize;t.isLoadingResults=!0,t.getPage(i,t.paginator.pageSize,t.sort.active?t.sort.active:"id",t.sort.direction?t.sort.direction:"desc",""===t.nom.value?"*":t.nom.value,""===t.nomAr.value?"*":t.nomAr.value,0===t.idTypeActivite.value?0:t.idTypeActivite.value)});this.subs.push(e)}},{key:"reset",value:function(){this.nom.setValue(""),this.nomAr.setValue(""),this.idTypeActivite.setValue(0),this.update.next(!0)}},{key:"search",value:function(){this.update.next(!0)}},{key:"getPage",value:function(t,e,i,n,a,o,r){var c=this,s=this.uow.activites.getAll(t,e,i,n,a,o,r).subscribe(function(t){console.log(t),c.dataSource=t.list,c.resultsLength=t.count,c.isLoadingResults=!1});this.subs.push(s)}},{key:"openDialog",value:function(t,e,i){return this.dialog.open(A,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}},{key:"add",value:function(){var t=this;this.openDialog(new m.a,"Ajouter "+this.breadcrumb.name,!1).subscribe(function(e){e&&t.update.next(!0)})}},{key:"edit",value:function(t){var e=this;this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(function(t){t&&e.update.next(!0)})}},{key:"detail",value:function(t){var e=this;this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(function(t){t&&e.update.next(!0)})}},{key:"delete",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var i,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mydialog.openDialog(this.breadcrumb.name).toPromise();case 2:if(e.t0=e.sent,"ok"!==e.t0){e.next=6;break}i=this.uow.activites.delete(t).subscribe(function(){return n.update.next(!0)}),this.subs.push(i);case 6:case"end":return e.stop()}},e,this)}))}},{key:"displayImage",value:function(t,e){return t?t&&t.startsWith("http")?t:"".concat(this.url,"/activites/").concat(e,"/").concat(t.replace(";","")):"assets/404.png"}},{key:"imgError",value:function(t){t.src="assets/404.png"}},{key:"isSelected",value:function(t){return!!this.selectedList.find(function(e){return e.id===t.id})}},{key:"check",value:function(t){var e=this.selectedList.findIndex(function(e){return t.id===e.id});-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}},{key:"isAllSelected",value:function(){return this.selectedList.length===this.dataSource.length}},{key:"masterToggle",value:function(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}},{key:"deleteList",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mydialog.openDialog("role").toPromise();case 2:if(t.t0=t.sent,"ok"!==t.t0){t.next=6;break}e=this.uow.activites.deleteRange(this.selectedList).subscribe(function(){i.selectedList=[],i.update.next(!0)}),this.subs.push(e);case 6:case"end":return t.stop()}},t,this)}))}},{key:"ngOnDestroy",value:function(){this.subs.forEach(function(t){t.unsubscribe()})}}]),e}(),W.\u0275fac=function(t){return new(t||W)(s.Ob(f.a),s.Ob(b.b),s.Ob(O.a),s.Ob("BASE_URL"),s.Ob(R.a))},W.\u0275cmp=s.Ib({type:W,selectors:[["app-activite"]],viewQuery:function(t,e){var i;1&t&&(s.Fc(S.a,!0),s.Fc(x.a,!0)),2&t&&(s.xc(i=s.cc())&&(e.paginator=i.first),s.xc(i=s.cc())&&(e.sort=i.first))},decls:64,vars:13,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","imageUrl"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","typeActivite"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["alt","","srcset","",3,"src","error"],["img",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"button",1),s.bc("click",function(){return e.add()}),s.Ub(2,"mat-icon"),s.Lc(3,"add"),s.Tb(),s.Lc(4," Activite "),s.Tb(),s.Tb(),s.Ub(5,"mat-accordion"),s.Ub(6,"mat-expansion-panel",2),s.bc("opened",function(){return e.panelOpenState=!0})("closed",function(){return e.panelOpenState=!1}),s.Ub(7,"mat-expansion-panel-header"),s.Ub(8,"mat-panel-title",3),s.Ub(9,"mat-icon"),s.Lc(10,"search"),s.Tb(),s.Ub(11,"p",4),s.Lc(12,"Recherche"),s.Tb(),s.Tb(),s.Pb(13,"mat-panel-description"),s.Tb(),s.Pb(14,"mat-divider"),s.Ub(15,"div",5),s.Ub(16,"mat-form-field",6),s.Ub(17,"mat-label"),s.Lc(18,"nom"),s.Tb(),s.Pb(19,"input",7),s.Tb(),s.Ub(20,"mat-form-field",6),s.Ub(21,"mat-label"),s.Lc(22,"nomAr"),s.Tb(),s.Pb(23,"input",7),s.Tb(),s.Ub(24,"mat-form-field",6),s.Ub(25,"mat-label"),s.Lc(26,"typeActivites"),s.Tb(),s.Ub(27,"mat-select",8),s.Jc(28,M,2,2,"mat-option",9),s.gc(29,"async"),s.Tb(),s.Tb(),s.Tb(),s.Ub(30,"div",10),s.Ub(31,"button",11),s.bc("click",function(){return e.reset()}),s.Ub(32,"mat-icon"),s.Lc(33,"refresh"),s.Tb(),s.Lc(34," R\xe9initialiser "),s.Tb(),s.Lc(35," \xa0\xa0 "),s.Ub(36,"button",1),s.bc("click",function(){return e.search()}),s.Ub(37,"mat-icon"),s.Lc(38,"search"),s.Tb(),s.Lc(39," Rechercher "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(40,"div",12),s.Jc(41,N,2,1,"div",13),s.Ub(42,"div",14),s.Ub(43,"table",15,16),s.Sb(45,17),s.Jc(46,V,2,0,"th",18),s.Jc(47,q,2,1,"td",19),s.Rb(),s.Sb(48,20),s.Jc(49,E,2,0,"th",18),s.Jc(50,G,2,1,"td",19),s.Rb(),s.Sb(51,21),s.Jc(52,$,2,0,"th",22),s.Jc(53,z,3,1,"td",19),s.Rb(),s.Sb(54,23),s.Jc(55,_,2,0,"th",22),s.Jc(56,H,2,1,"td",19),s.Rb(),s.Sb(57,24),s.Jc(58,X,1,0,"th",22),s.Jc(59,B,11,0,"td",19),s.Rb(),s.Jc(60,K,1,0,"tr",25),s.Jc(61,Q,1,0,"tr",26),s.Tb(),s.Tb(),s.Pb(62,"mat-paginator",27,28),s.Tb()),2&t&&(s.Cb(19),s.mc("formControl",e.nom),s.Cb(4),s.mc("formControl",e.nomAr),s.Cb(4),s.mc("formControl",e.idTypeActivite),s.Cb(1),s.mc("ngForOf",s.hc(29,10,e.typeActivites)),s.Cb(13),s.mc("ngIf",e.isLoadingResults),s.Cb(2),s.mc("dataSource",e.dataSource),s.Cb(17),s.mc("matHeaderRowDef",e.displayedColumns),s.Cb(1),s.mc("matRowDefColumns",e.displayedColumns),s.Cb(1),s.mc("length",e.resultsLength)("pageSizeOptions",s.oc(12,tt)))},directives:[U.a,I.a,P.a,P.c,P.e,P.f,P.d,h.a,v.c,v.f,g.b,l.c,l.t,l.o,l.g,T.a,o.m,o.n,D.j,x.a,D.c,D.e,D.b,D.g,D.i,S.a,k.n,J.b,D.d,x.b,D.a,D.f,D.h],pipes:[o.b],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),W)}],it=((Y=function e(){t(this,e)}).\u0275mod=s.Mb({type:Y}),Y.\u0275inj=s.Lb({factory:function(t){return new(t||Y)},imports:[[r.h.forChild(et)],r.h]}),Y),nt=a("tk/3"),at=a("2thQ"),ot=a("lOAm"),rt=a("Fr4G"),ct=((Z=function e(){t(this,e)}).\u0275mod=s.Mb({type:Z}),Z.\u0275inj=s.Lb({factory:function(t){return new(t||Z)},imports:[[o.c,it,nt.c,at.a,l.j,l.s,ot.a,rt.a]]}),Z)}}])}();