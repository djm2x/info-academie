!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{HQmH:function(e,a,n){"use strict";n.r(a),n.d(a,"DetailUserActiviteModule",function(){return rt});var c=n("ofXK"),o=n("tyNb"),r=n("mrSG"),s=n("fXoL"),u=n("VRyK"),l=n("3Pt+"),b=n("0IaG"),d=n("V2kc"),m=n("7q3A"),f=n("/t3+"),h=n("f0Cb"),p=n("kmnG"),v=n("qFsG"),g=n("iadO"),U=n("d3UM"),T=n("bTqV"),k=n("FKr1");function y(t,e){if(1&t&&(s.Ub(0,"mat-option",15),s.Mc(1),s.Tb()),2&t){var i=e.$implicit;s.mc("value",i.id),s.Cb(1),s.Nc(i.prenom)}}function w(t,e){if(1&t&&(s.Ub(0,"mat-option",15),s.Mc(1),s.Tb()),2&t){var i=e.$implicit;s.mc("value",i.id),s.Cb(1),s.Nc(i.nom)}}function C(t,e){if(1&t){var i=s.Vb();s.Ub(0,"button",16),s.bc("click",function(){s.Bc(i);var t=s.fc();return t.onOkClick(t.myForm.value)}),s.Mc(1,"Enregistre"),s.Tb()}if(2&t){var a=s.fc();s.mc("disabled",a.myForm.invalid)}}var x,M=((x=function(){function e(i,a,n,c){t(this,e),this.dialogRef=i,this.data=a,this.fb=n,this.uow=c,this.subs=[],this.title="",this.visualisation=!1,this.users=this.uow.users.get(),this.activites=this.uow.activites.get(),this.folderToSaveInServer="detailUserActivites"}return i(e,[{key:"ngOnInit",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.o=this.data.model,this.folderToSaveInServer=this.folderToSaveInServer+"_"+this.o.id,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm();case 1:case"end":return t.stop()}},t,this)}))}},{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"onOkClick",value:function(t){var e,i=this;e=0===t.id?this.uow.detailUserActivites.post(t).subscribe(function(e){i.dialogRef.close(t)}):this.uow.detailUserActivites.put(t.id,t).subscribe(function(e){i.dialogRef.close(t)}),this.subs.push(e)}},{key:"createForm",value:function(){this.myForm=this.fb.group({id:[this.o.id,[l.u.required]],date:[this.o.date,[l.u.required]],idUser:[this.o.idUser,[l.u.required]],idActivite:[this.o.idActivite,[l.u.required]]})}},{key:"resetForm",value:function(){this.o=new d.e,this.createForm()}},{key:"ngOnDestroy",value:function(){this.subs.forEach(function(t){t.unsubscribe()})}}]),e}()).\u0275fac=function(t){return new(t||x)(s.Ob(b.g),s.Ob(b.a),s.Ob(l.e),s.Ob(m.a))},x.\u0275cmp=s.Ib({type:x,selectors:[["app-update"]],decls:32,vars:11,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["formControlName","idUser"],[3,"value",4,"ngFor","ngForOf"],["formControlName","idActivite"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){if(1&t&&(s.Ub(0,"div",0),s.Ub(1,"h1",1),s.Ub(2,"mat-toolbar",2),s.Ub(3,"span"),s.Mc(4),s.Tb(),s.Tb(),s.Pb(5,"mat-divider"),s.Tb(),s.Ub(6,"div",3),s.Ub(7,"mat-dialog-content"),s.Ub(8,"form",4),s.Ub(9,"mat-form-field",5),s.Ub(10,"mat-label"),s.Mc(11,"date"),s.Tb(),s.Pb(12,"input",6),s.Pb(13,"mat-datepicker-toggle",7),s.Pb(14,"mat-datepicker",null,8),s.Tb(),s.Ub(16,"mat-form-field",5),s.Ub(17,"mat-label"),s.Mc(18,"users"),s.Tb(),s.Ub(19,"mat-select",9),s.Kc(20,y,2,2,"mat-option",10),s.gc(21,"async"),s.Tb(),s.Tb(),s.Ub(22,"mat-form-field",5),s.Ub(23,"mat-label"),s.Mc(24,"activites"),s.Tb(),s.Ub(25,"mat-select",11),s.Kc(26,w,2,2,"mat-option",10),s.gc(27,"async"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(28,"mat-dialog-actions",12),s.Ub(29,"button",13),s.bc("click",function(){return e.onNoClick()}),s.Mc(30,"Annuler"),s.Tb(),s.Kc(31,C,2,1,"button",14),s.Tb(),s.Tb(),s.Tb()),2&t){var i=s.yc(15);s.Cb(4),s.Nc(e.title),s.Cb(4),s.mc("formGroup",e.myForm),s.Cb(4),s.mc("matDatepicker",i),s.Cb(1),s.mc("for",i),s.Cb(7),s.mc("ngForOf",s.hc(21,7,e.users)),s.Cb(6),s.mc("ngForOf",s.hc(27,9,e.activites)),s.Cb(5),s.mc("ngIf",!e.visualisation)}},directives:[b.h,f.a,h.a,b.e,l.v,l.p,l.i,p.c,p.f,v.b,l.c,g.e,l.o,l.h,g.h,p.g,g.d,U.a,c.m,b.c,T.a,c.n,k.n],pipes:[c.b],styles:[""]}),x),O=n("M9IT"),S=n("Dh3D"),R=n("JX91"),A=n("hUFt"),D=n("8lcG"),L=n("NFeN"),F=n("7EHt"),I=n("+0xr"),K=n("Xa2L"),P=n("Qu3c");function N(t,e){if(1&t&&(s.Ub(0,"mat-option",27),s.Mc(1),s.Tb()),2&t){var i=e.$implicit;s.mc("value",i.id),s.Cb(1),s.Nc(i.prenom)}}function j(t,e){if(1&t&&(s.Ub(0,"mat-option",27),s.Mc(1),s.Tb()),2&t){var i=e.$implicit;s.mc("value",i.id),s.Cb(1),s.Nc(i.nom)}}function z(t,e){1&t&&s.Pb(0,"mat-spinner")}function G(t,e){if(1&t&&(s.Ub(0,"div",28),s.Kc(1,z,1,0,"mat-spinner",29),s.Tb()),2&t){var i=s.fc();s.Cb(1),s.mc("ngIf",i.isLoadingResults)}}function $(t,e){1&t&&(s.Ub(0,"th",30),s.Mc(1,"Date"),s.Tb())}function q(t,e){if(1&t&&(s.Ub(0,"td",31),s.Mc(1),s.gc(2,"date"),s.Tb()),2&t){var i=e.$implicit;s.Cb(1),s.Nc(s.ic(2,1,i.date,"dd/MM/yyyy"))}}function E(t,e){1&t&&(s.Ub(0,"th",32),s.Mc(1,"User"),s.Tb())}function H(t,e){if(1&t&&(s.Ub(0,"td",31),s.Mc(1),s.Tb()),2&t){var i=e.$implicit;s.Cb(1),s.Nc(i.user)}}function V(t,e){1&t&&(s.Ub(0,"th",32),s.Mc(1,"Activite"),s.Tb())}function B(t,e){if(1&t&&(s.Ub(0,"td",31),s.Mc(1),s.Tb()),2&t){var i=e.$implicit;s.Cb(1),s.Nc(i.activite)}}function Q(t,e){1&t&&s.Pb(0,"th",32)}function X(t,e){if(1&t){var i=s.Vb();s.Ub(0,"td",31),s.Ub(1,"div",33),s.Ub(2,"button",34),s.bc("click",function(){s.Bc(i);var t=e.$implicit;return s.fc().edit(t)}),s.Ub(3,"mat-icon"),s.Mc(4,"create"),s.Tb(),s.Tb(),s.Ub(5,"button",35),s.bc("click",function(){s.Bc(i);var t=e.$implicit;return s.fc().delete(t.id)}),s.Ub(6,"mat-icon"),s.Mc(7,"delete_sweep"),s.Tb(),s.Tb(),s.Tb(),s.Tb()}}function _(t,e){1&t&&s.Pb(0,"tr",36)}function J(t,e){1&t&&s.Pb(0,"tr",37)}var W,Y,Z,tt=function(){return[10,25,50,100,250]},et=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(W=function(){function e(i,a,n,c,o){t(this,e),this.uow=i,this.dialog=a,this.mydialog=n,this.url=c,this.breadcrumb=o,this.update=new s.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["date","user","activite","option"],this.panelOpenState=!1,this.idUser=new l.f(0),this.idActivite=new l.f(0),this.users=this.uow.users.get(),this.activites=this.uow.activites.get(),this.breadcrumb.name="DetailUserActivites"}return i(e,[{key:"ngOnInit",value:function(){var t=this,e=Object(u.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(R.a)(null)).subscribe(function(e){!0===e?t.paginator.pageIndex=0:e=e,t.paginator.pageSize?e=e:t.paginator.pageSize=10;var i=t.paginator.pageIndex*t.paginator.pageSize;t.isLoadingResults=!0,t.getPage(i,t.paginator.pageSize,t.sort.active?t.sort.active:"id",t.sort.direction?t.sort.direction:"desc",0===t.idUser.value?0:t.idUser.value,0===t.idActivite.value?0:t.idActivite.value)});this.subs.push(e)}},{key:"reset",value:function(){this.idUser.setValue(0),this.idActivite.setValue(0),this.update.next(!0)}},{key:"search",value:function(){this.update.next(!0)}},{key:"getPage",value:function(t,e,i,a,n,c){var o=this,r=this.uow.detailUserActivites.getAll(t,e,i,a,n,c).subscribe(function(t){console.log(t.list),o.dataSource=t.list,o.resultsLength=t.count,o.isLoadingResults=!1});this.subs.push(r)}},{key:"openDialog",value:function(t,e,i){return this.dialog.open(M,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}},{key:"add",value:function(){var t=this;this.openDialog(new d.e,"Ajouter "+this.breadcrumb.name,!1).subscribe(function(e){e&&t.update.next(!0)})}},{key:"edit",value:function(t){var e=this;this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe(function(t){t&&e.update.next(!0)})}},{key:"detail",value:function(t){var e=this;this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(function(t){t&&e.update.next(!0)})}},{key:"delete",value:function(t){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var i,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mydialog.openDialog(this.breadcrumb.name).toPromise();case 2:if(e.t0=e.sent,"ok"!==e.t0){e.next=6;break}i=this.uow.detailUserActivites.delete(t).subscribe(function(){return a.update.next(!0)}),this.subs.push(i);case 6:case"end":return e.stop()}},e,this)}))}},{key:"displayImage",value:function(t,e){return t?t&&t.startsWith("http")?t:"".concat(this.url,"/detailUserActivites/").concat(e,"/").concat(t.replace(";","")):"assets/404.png"}},{key:"imgError",value:function(t){t.src="assets/404.png"}},{key:"isSelected",value:function(t){return!!this.selectedList.find(function(e){return e.id===t.id})}},{key:"check",value:function(t){var e=this.selectedList.findIndex(function(e){return t.id===e.id});-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}},{key:"isAllSelected",value:function(){return this.selectedList.length===this.dataSource.length}},{key:"masterToggle",value:function(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}},{key:"deleteList",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mydialog.openDialog("role").toPromise();case 2:if(t.t0=t.sent,"ok"!==t.t0){t.next=6;break}e=this.uow.detailUserActivites.deleteRange(this.selectedList).subscribe(function(){i.selectedList=[],i.update.next(!0)}),this.subs.push(e);case 6:case"end":return t.stop()}},t,this)}))}},{key:"ngOnDestroy",value:function(){this.subs.forEach(function(t){t.unsubscribe()})}}]),e}(),W.\u0275fac=function(t){return new(t||W)(s.Ob(m.a),s.Ob(b.b),s.Ob(A.a),s.Ob("BASE_URL"),s.Ob(D.a))},W.\u0275cmp=s.Ib({type:W,selectors:[["app-detailUserActivite"]],viewQuery:function(t,e){var i;1&t&&(s.Gc(O.a,!0),s.Gc(S.a,!0)),2&t&&(s.xc(i=s.cc())&&(e.paginator=i.first),s.xc(i=s.cc())&&(e.sort=i.first))},decls:59,vars:15,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","user"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","activite"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["mat-icon-button","","matTooltip","Ajouter quizzes","color","accent",3,"click"],["mat-icon-button","","matTooltip","supprimer","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"button",1),s.bc("click",function(){return e.add()}),s.Ub(2,"mat-icon"),s.Mc(3,"add"),s.Tb(),s.Mc(4," DetailUserActivite "),s.Tb(),s.Tb(),s.Ub(5,"mat-accordion"),s.Ub(6,"mat-expansion-panel",2),s.bc("opened",function(){return e.panelOpenState=!0})("closed",function(){return e.panelOpenState=!1}),s.Ub(7,"mat-expansion-panel-header"),s.Ub(8,"mat-panel-title",3),s.Ub(9,"mat-icon"),s.Mc(10,"search"),s.Tb(),s.Ub(11,"p",4),s.Mc(12,"Recherche"),s.Tb(),s.Tb(),s.Pb(13,"mat-panel-description"),s.Tb(),s.Pb(14,"mat-divider"),s.Ub(15,"div",5),s.Ub(16,"mat-form-field",6),s.Ub(17,"mat-label"),s.Mc(18,"users"),s.Tb(),s.Ub(19,"mat-select",7),s.Kc(20,N,2,2,"mat-option",8),s.gc(21,"async"),s.Tb(),s.Tb(),s.Ub(22,"mat-form-field",6),s.Ub(23,"mat-label"),s.Mc(24,"activites"),s.Tb(),s.Ub(25,"mat-select",7),s.Kc(26,j,2,2,"mat-option",8),s.gc(27,"async"),s.Tb(),s.Tb(),s.Tb(),s.Ub(28,"div",9),s.Ub(29,"button",10),s.bc("click",function(){return e.reset()}),s.Ub(30,"mat-icon"),s.Mc(31,"refresh"),s.Tb(),s.Mc(32," R\xe9initialiser "),s.Tb(),s.Mc(33," \xa0\xa0 "),s.Ub(34,"button",1),s.bc("click",function(){return e.search()}),s.Ub(35,"mat-icon"),s.Mc(36,"search"),s.Tb(),s.Mc(37," Rechercher "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(38,"div",11),s.Kc(39,G,2,1,"div",12),s.Ub(40,"div",13),s.Ub(41,"table",14,15),s.Sb(43,16),s.Kc(44,$,2,0,"th",17),s.Kc(45,q,3,4,"td",18),s.Rb(),s.Sb(46,19),s.Kc(47,E,2,0,"th",20),s.Kc(48,H,2,1,"td",18),s.Rb(),s.Sb(49,21),s.Kc(50,V,2,0,"th",20),s.Kc(51,B,2,1,"td",18),s.Rb(),s.Sb(52,22),s.Kc(53,Q,1,0,"th",20),s.Kc(54,X,8,0,"td",18),s.Rb(),s.Kc(55,_,1,0,"tr",23),s.Kc(56,J,1,0,"tr",24),s.Tb(),s.Tb(),s.Pb(57,"mat-paginator",25,26),s.Tb()),2&t&&(s.Cb(19),s.mc("formControl",e.idUser),s.Cb(1),s.mc("ngForOf",s.hc(21,10,e.users)),s.Cb(5),s.mc("formControl",e.idActivite),s.Cb(1),s.mc("ngForOf",s.hc(27,12,e.activites)),s.Cb(13),s.mc("ngIf",e.isLoadingResults),s.Cb(2),s.mc("dataSource",e.dataSource),s.Cb(14),s.mc("matHeaderRowDef",e.displayedColumns),s.Cb(1),s.mc("matRowDefColumns",e.displayedColumns),s.Cb(1),s.mc("length",e.resultsLength)("pageSizeOptions",s.oc(14,tt)))},directives:[T.a,L.a,F.a,F.c,F.e,F.f,F.d,h.a,p.c,p.f,U.a,l.o,l.g,c.m,c.n,I.j,S.a,I.c,I.e,I.b,I.g,I.i,O.a,k.n,K.b,I.d,S.b,I.a,P.a,I.f,I.h],pipes:[c.b,c.e],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),W)}],it=((Y=function e(){t(this,e)}).\u0275mod=s.Mb({type:Y}),Y.\u0275inj=s.Lb({factory:function(t){return new(t||Y)},imports:[[o.h.forChild(et)],o.h]}),Y),at=n("tk/3"),nt=n("2thQ"),ct=n("lOAm"),ot=n("Fr4G"),rt=((Z=function e(){t(this,e)}).\u0275mod=s.Mb({type:Z}),Z.\u0275inj=s.Lb({factory:function(t){return new(t||Z)},imports:[[c.c,it,at.d,nt.a,l.j,l.s,ct.a,ot.a]]}),Z)}}])}();