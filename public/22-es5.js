!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{eRwu:function(e,n,a){"use strict";a.r(n),a.d(n,"OffreProfModule",(function(){return et}));var o=a("ofXK"),r=a("tyNb"),s=a("mrSG"),c=a("fXoL"),u=a("VRyK"),l=a("3Pt+"),b=a("0IaG"),f=a("V2kc"),d=a("7q3A"),m=a("/t3+"),h=a("f0Cb"),p=a("kmnG"),v=a("qFsG"),g=a("d3UM"),y=a("bTqV"),k=a("FKr1");function w(t,e){if(1&t&&(c.Ub(0,"mat-option",13),c.Kc(1),c.Tb()),2&t){var i=e.$implicit;c.mc("value",i.id),c.Cb(1),c.Lc(i.nom)}}function C(t,e){if(1&t){var i=c.Vb();c.Ub(0,"button",14),c.bc("click",(function(){c.zc(i);var t=c.fc();return t.onOkClick(t.myForm.value)})),c.Kc(1,"Enregistre"),c.Tb()}if(2&t){var n=c.fc();c.mc("disabled",n.myForm.invalid)}}var T,U=((T=function(){function e(i,n,a,o){t(this,e),this.dialogRef=i,this.data=n,this.fb=a,this.uow=o,this.subs=[],this.title="",this.visualisation=!1,this.typeCourss=this.uow.typeCours.get(),this.folderToSaveInServer="offreProfs"}return i(e,[{key:"ngOnInit",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.o=this.data.model,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm();case 1:case"end":return t.stop()}}),t,this)})))}},{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"onOkClick",value:function(t){var e,i=this;e=0===t.id?this.uow.offreProfs.post(t).subscribe((function(e){i.dialogRef.close(t)})):this.uow.offreProfs.put(t.id,t).subscribe((function(e){i.dialogRef.close(t)})),this.subs.push(e)}},{key:"createForm",value:function(){this.myForm=this.fb.group({id:[this.o.id,[l.u.required]],interval:[this.o.interval,[l.u.required]],value:[this.o.value,[l.u.required]],idTypeCours:[+this.o.idTypeCours,[l.u.required]]})}},{key:"resetForm",value:function(){this.o=new f.j,this.createForm()}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(t){t.unsubscribe()}))}}]),e}()).\u0275fac=function(t){return new(t||T)(c.Ob(b.g),c.Ob(b.a),c.Ob(l.e),c.Ob(d.a))},T.\u0275cmp=c.Ib({type:T,selectors:[["app-update"]],decls:27,vars:6,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","interval","required",""],["matInput","","formControlName","value","required",""],["formControlName","idTypeCours"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"h1",1),c.Ub(2,"mat-toolbar",2),c.Ub(3,"span"),c.Kc(4),c.Tb(),c.Tb(),c.Pb(5,"mat-divider"),c.Tb(),c.Ub(6,"div",3),c.Ub(7,"mat-dialog-content"),c.Ub(8,"form",4),c.Ub(9,"mat-form-field",5),c.Ub(10,"mat-label"),c.Kc(11,"interval"),c.Tb(),c.Pb(12,"input",6),c.Tb(),c.Ub(13,"mat-form-field",5),c.Ub(14,"mat-label"),c.Kc(15,"value"),c.Tb(),c.Pb(16,"input",7),c.Tb(),c.Ub(17,"mat-form-field",5),c.Ub(18,"mat-label"),c.Kc(19,"type Cours"),c.Tb(),c.Ub(20,"mat-select",8),c.Ic(21,w,2,2,"mat-option",9),c.gc(22,"async"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(23,"mat-dialog-actions",10),c.Ub(24,"button",11),c.bc("click",(function(){return e.onNoClick()})),c.Kc(25,"Annuler"),c.Tb(),c.Ic(26,C,2,1,"button",12),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Cb(4),c.Lc(e.title),c.Cb(4),c.mc("formGroup",e.myForm),c.Cb(13),c.mc("ngForOf",c.hc(22,4,e.typeCourss)),c.Cb(5),c.mc("ngIf",!e.visualisation))},directives:[b.h,m.a,h.a,b.e,l.v,l.p,l.i,p.c,p.f,v.b,l.c,l.o,l.h,l.t,g.a,o.m,b.c,y.a,o.n,k.o],pipes:[o.b],styles:[""]}),T),I=a("M9IT"),O=a("Dh3D"),R=a("JX91"),x=a("hUFt"),L=a("8lcG"),S=a("NFeN"),P=a("+0xr"),D=a("Xa2L");function K(t,e){1&t&&c.Pb(0,"mat-spinner")}function F(t,e){if(1&t&&(c.Ub(0,"div",18),c.Ic(1,K,1,0,"mat-spinner",19),c.Tb()),2&t){var i=c.fc();c.Cb(1),c.mc("ngIf",i.isLoadingResults)}}function j(t,e){1&t&&(c.Ub(0,"th",20),c.Kc(1,"Interval"),c.Tb())}function z(t,e){if(1&t&&(c.Ub(0,"td",21),c.Kc(1),c.Tb()),2&t){var i=e.$implicit;c.Cb(1),c.Lc(i.interval)}}function V(t,e){1&t&&(c.Ub(0,"th",20),c.Kc(1,"Value"),c.Tb())}function q(t,e){if(1&t&&(c.Ub(0,"td",21),c.Kc(1),c.Tb()),2&t){var i=e.$implicit;c.Cb(1),c.Lc(i.value)}}function A(t,e){1&t&&(c.Ub(0,"th",22),c.Kc(1,"Type Cours"),c.Tb())}function E(t,e){if(1&t&&(c.Ub(0,"td",21),c.Kc(1),c.Tb()),2&t){var i=e.$implicit;c.Cb(1),c.Lc(i.type_cours.nom)}}function M(t,e){1&t&&c.Pb(0,"th",22)}function G(t,e){if(1&t){var i=c.Vb();c.Ub(0,"td",21),c.Ub(1,"div",23),c.Ub(2,"button",24),c.bc("click",(function(){c.zc(i);var t=e.$implicit;return c.fc().edit(t)})),c.Ub(3,"mat-icon"),c.Kc(4,"create"),c.Tb(),c.Tb(),c.Ub(5,"button",25),c.bc("click",(function(){c.zc(i);var t=e.$implicit;return c.fc().detail(t)})),c.Ub(6,"mat-icon"),c.Kc(7,"remove_red_eye"),c.Tb(),c.Tb(),c.Ub(8,"button",26),c.bc("click",(function(){c.zc(i);var t=e.$implicit;return c.fc().delete(t.id)})),c.Ub(9,"mat-icon"),c.Kc(10,"delete_sweep"),c.Tb(),c.Tb(),c.Tb(),c.Tb()}}function N(t,e){1&t&&c.Pb(0,"tr",27)}function $(t,e){1&t&&c.Pb(0,"tr",28)}var _,H,X,J=function(){return[10,25,50,100,250]},B=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(_=function(){function e(i,n,a,o,r){t(this,e),this.uow=i,this.dialog=n,this.mydialog=a,this.url=o,this.breadcrumb=r,this.update=new c.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["interval","value","typeCours","option"],this.panelOpenState=!1,this.interval=new l.f(""),this.value=new l.f(0),this.idTypeCours=new l.f(0),this.typeCourss=this.uow.typeCours.get(),this.breadcrumb.name="OffreProfs"}return i(e,[{key:"ngOnInit",value:function(){var t=this,e=Object(u.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(R.a)(null)).subscribe((function(e){!0===e?t.paginator.pageIndex=0:e=e,t.paginator.pageSize?e=e:t.paginator.pageSize=10;var i=t.paginator.pageIndex*t.paginator.pageSize;t.isLoadingResults=!0,t.getPage(i,t.paginator.pageSize,t.sort.active?t.sort.active:"id",t.sort.direction?t.sort.direction:"desc",""===t.interval.value?"*":t.interval.value,0===t.value.value?0:t.value.value,0===t.idTypeCours.value?0:t.idTypeCours.value)}));this.subs.push(e)}},{key:"reset",value:function(){this.interval.setValue(""),this.value.setValue(0),this.idTypeCours.setValue(0),this.update.next(!0)}},{key:"search",value:function(){this.update.next(!0)}},{key:"getPage",value:function(t,e,i,n,a,o,r){var s=this,c=this.uow.offreProfs.getAll(t,e,i,n,a,o,r).subscribe((function(t){console.log(t.list),s.dataSource=t.list,s.resultsLength=t.count,s.isLoadingResults=!1}));this.subs.push(c)}},{key:"openDialog",value:function(t,e,i){return this.dialog.open(U,{width:"1100px",disableClose:!0,data:{model:t,title:e,visualisation:i}}).afterClosed()}},{key:"add",value:function(){var t=this;this.openDialog(new f.j,"Ajouter "+this.breadcrumb.name,!1).subscribe((function(e){e&&t.update.next(!0)}))}},{key:"edit",value:function(t){var e=this;this.openDialog(t,"Modifier "+this.breadcrumb.name,!1).subscribe((function(t){t&&e.update.next(!0)}))}},{key:"detail",value:function(t){var e=this;this.openDialog(t,"D\xe9tail "+this.breadcrumb.name,!0).subscribe((function(t){t&&e.update.next(!0)}))}},{key:"delete",value:function(t){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var i,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mydialog.openDialog(this.breadcrumb.name).toPromise();case 2:if(e.t0=e.sent,"ok"!==e.t0){e.next=6;break}i=this.uow.offreProfs.delete(t).subscribe((function(){return n.update.next(!0)})),this.subs.push(i);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"displayImage",value:function(t){return t?t&&t.startsWith("http")?t:"".concat(this.url,"/offreProfs/").concat(t.replace(";","")):"assets/404.jpg"}},{key:"imgError",value:function(t){t.src="assets/404.jpg"}},{key:"isSelected",value:function(t){return!!this.selectedList.find((function(e){return e.id===t.id}))}},{key:"check",value:function(t){var e=this.selectedList.findIndex((function(e){return t.id===e.id}));-1!==e?this.selectedList.splice(e,1):this.selectedList.push(t)}},{key:"isAllSelected",value:function(){return this.selectedList.length===this.dataSource.length}},{key:"masterToggle",value:function(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}},{key:"deleteList",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mydialog.openDialog("role").toPromise();case 2:if(t.t0=t.sent,"ok"!==t.t0){t.next=6;break}e=this.uow.offreProfs.deleteRange(this.selectedList).subscribe((function(){i.selectedList=[],i.update.next(!0)})),this.subs.push(e);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(t){t.unsubscribe()}))}}]),e}(),_.\u0275fac=function(t){return new(t||_)(c.Ob(d.a),c.Ob(b.b),c.Ob(x.a),c.Ob("BASE_URL"),c.Ob(L.a))},_.\u0275cmp=c.Ib({type:_,selectors:[["app-offreProf"]],viewQuery:function(t,e){var i;1&t&&(c.Ec(I.a,!0),c.Ec(O.a,!0)),2&t&&(c.wc(i=c.cc())&&(e.paginator=i.first),c.wc(i=c.cc())&&(e.sort=i.first))},decls:26,vars:7,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","interval"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["matColumnDef","typeCours"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"button",1),c.bc("click",(function(){return e.add()})),c.Ub(2,"mat-icon"),c.Kc(3,"add"),c.Tb(),c.Kc(4," OffreProf "),c.Tb(),c.Tb(),c.Ub(5,"div",2),c.Ic(6,F,2,1,"div",3),c.Ub(7,"div",4),c.Ub(8,"table",5,6),c.Sb(10,7),c.Ic(11,j,2,0,"th",8),c.Ic(12,z,2,1,"td",9),c.Rb(),c.Sb(13,10),c.Ic(14,V,2,0,"th",8),c.Ic(15,q,2,1,"td",9),c.Rb(),c.Sb(16,11),c.Ic(17,A,2,0,"th",12),c.Ic(18,E,2,1,"td",9),c.Rb(),c.Sb(19,13),c.Ic(20,M,1,0,"th",12),c.Ic(21,G,11,0,"td",9),c.Rb(),c.Ic(22,N,1,0,"tr",14),c.Ic(23,$,1,0,"tr",15),c.Tb(),c.Tb(),c.Pb(24,"mat-paginator",16,17),c.Tb()),2&t&&(c.Cb(6),c.mc("ngIf",e.isLoadingResults),c.Cb(2),c.mc("dataSource",e.dataSource),c.Cb(14),c.mc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.mc("matRowDefColumns",e.displayedColumns),c.Cb(1),c.mc("length",e.resultsLength)("pageSizeOptions",c.nc(6,J)))},directives:[y.a,S.a,o.n,P.j,O.a,P.c,P.e,P.b,P.g,P.i,I.a,D.b,P.d,O.b,P.a,P.f,P.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),_)}],Q=((H=function e(){t(this,e)}).\u0275mod=c.Mb({type:H}),H.\u0275inj=c.Lb({factory:function(t){return new(t||H)},imports:[[r.h.forChild(B)],r.h]}),H),W=a("tk/3"),Y=a("2thQ"),Z=a("lOAm"),tt=a("Fr4G"),et=((X=function e(){t(this,e)}).\u0275mod=c.Mb({type:X}),X.\u0275inj=c.Lb({factory:function(t){return new(t||X)},imports:[[o.c,Q,W.c,Y.a,l.j,l.s,Z.a,tt.a]]}),X)}}])}();