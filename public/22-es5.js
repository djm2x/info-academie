function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3qfE":function(e,t,i){"use strict";i.r(t),i.d(t,"VilleModule",(function(){return B}));var n=i("ofXK"),a=i("tyNb"),o=i("mrSG"),r=i("fXoL"),c=i("VRyK"),s=i("3Pt+"),l=i("0IaG"),u=i("V2kc"),b=i("7q3A"),d=i("/t3+"),m=i("f0Cb"),f=i("kmnG"),h=i("qFsG"),p=i("bTqV");function v(e,t){if(1&e){var i=r.Xb();r.Wb(0,"button",11),r.ec("click",(function(){r.Cc(i);var e=r.ic();return e.onOkClick(e.myForm.value)})),r.Lc(1,"Enregistre"),r.Vb()}if(2&e){var n=r.ic();r.pc("disabled",n.myForm.invalid)}}var g,k=((g=function(){function e(t,i,n,a){_classCallCheck(this,e),this.dialogRef=t,this.data=i,this.fb=n,this.uow=a,this.subs=[],this.title="",this.visualisation=!1,this.folderToSaveInServer="villes"}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.o=this.data.model,this.folderToSaveInServer=this.folderToSaveInServer+"_"+this.o.id,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm(),setTimeout((function(){}),100);case 1:case"end":return e.stop()}}),e,this)})))}},{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"onOkClick",value:function(e){var t,i=this;t=0===e.id?this.uow.villes.post(e).subscribe((function(t){i.dialogRef.close(e)})):this.uow.villes.put(e.id,e).subscribe((function(t){i.dialogRef.close(e)})),this.subs.push(t)}},{key:"createForm",value:function(){this.myForm=this.fb.group({id:[this.o.id,[s.r.required]],nom:[this.o.nom,[s.r.required]],nomAr:[this.o.nomAr,[s.r.required]]})}},{key:"resetForm",value:function(){this.o=new u.l,this.createForm()}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(e){e.unsubscribe()}))}}]),e}()).\u0275fac=function(e){return new(e||g)(r.Qb(l.g),r.Qb(l.a),r.Qb(s.c),r.Qb(b.a))},g.\u0275cmp=r.Kb({type:g,selectors:[["app-update"]],decls:21,vars:3,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","nom","required",""],["matInput","","formControlName","nomAr","required",""],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(e,t){1&e&&(r.Wb(0,"div",0),r.Wb(1,"h1",1),r.Wb(2,"mat-toolbar",2),r.Wb(3,"span"),r.Lc(4),r.Vb(),r.Vb(),r.Rb(5,"mat-divider"),r.Vb(),r.Wb(6,"div",3),r.Wb(7,"mat-dialog-content"),r.Wb(8,"form",4),r.Wb(9,"mat-form-field",5),r.Wb(10,"mat-label"),r.Lc(11,"nom"),r.Vb(),r.Rb(12,"input",6),r.Vb(),r.Wb(13,"mat-form-field",5),r.Wb(14,"mat-label"),r.Lc(15,"nomAr"),r.Vb(),r.Rb(16,"input",7),r.Vb(),r.Vb(),r.Vb(),r.Wb(17,"mat-dialog-actions",8),r.Wb(18,"button",9),r.ec("click",(function(){return t.onNoClick()})),r.Lc(19,"Annuler"),r.Vb(),r.Jc(20,v,2,1,"button",10),r.Vb(),r.Vb(),r.Vb()),2&e&&(r.Db(4),r.Mc(t.title),r.Db(4),r.pc("formGroup",t.myForm),r.Db(12),r.pc("ngIf",!t.visualisation))},directives:[l.h,d.a,m.a,l.e,s.s,s.m,s.g,f.c,f.f,h.b,s.b,s.l,s.f,s.q,l.c,p.a,n.n],styles:[""]}),g),y=i("M9IT"),V=i("Dh3D"),w=i("JX91"),W=i("qQ+2"),L=i("hUFt"),C=i("8lcG"),R=i("NFeN"),x=i("7EHt"),D=i("+0xr"),S=i("Xa2L");function A(e,t){1&e&&r.Rb(0,"mat-spinner")}function I(e,t){if(1&e&&(r.Wb(0,"div",25),r.Jc(1,A,1,0,"mat-spinner",26),r.Vb()),2&e){var i=r.ic();r.Db(1),r.pc("ngIf",i.isLoadingResults)}}function O(e,t){1&e&&(r.Wb(0,"th",27),r.Lc(1,"Nom"),r.Vb())}function _(e,t){if(1&e&&(r.Wb(0,"td",28),r.Lc(1),r.Vb()),2&e){var i=t.$implicit;r.Db(1),r.Mc(i.nom)}}function F(e,t){1&e&&(r.Wb(0,"th",27),r.Lc(1,"Nom Ar"),r.Vb())}function q(e,t){if(1&e&&(r.Wb(0,"td",28),r.Lc(1),r.Vb()),2&e){var i=t.$implicit;r.Db(1),r.Mc(i.nomAr)}}function J(e,t){1&e&&r.Rb(0,"th",29)}function Q(e,t){if(1&e){var i=r.Xb();r.Wb(0,"td",28),r.Wb(1,"div",30),r.Wb(2,"button",31),r.ec("click",(function(){r.Cc(i);var e=t.$implicit;return r.ic().edit(e)})),r.Wb(3,"mat-icon"),r.Lc(4,"create"),r.Vb(),r.Vb(),r.Wb(5,"button",32),r.ec("click",(function(){r.Cc(i);var e=t.$implicit;return r.ic().detail(e)})),r.Wb(6,"mat-icon"),r.Lc(7,"remove_red_eye"),r.Vb(),r.Vb(),r.Wb(8,"button",33),r.ec("click",(function(){r.Cc(i);var e=t.$implicit;return r.ic().delete(e.id)})),r.Wb(9,"mat-icon"),r.Lc(10,"delete_sweep"),r.Vb(),r.Vb(),r.Vb(),r.Vb()}}function T(e,t){1&e&&r.Rb(0,"tr",34)}function j(e,t){1&e&&r.Rb(0,"tr",35)}var N,z,P,E=function(){return[10,25,50,100,250]},M=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(N=function(){function e(t,i,n,a,o,c){_classCallCheck(this,e),this.uow=t,this.dialog=i,this.excel=n,this.mydialog=a,this.url=o,this.breadcrumb=c,this.update=new r.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["nom","nomAr","option"],this.panelOpenState=!1,this.nom=new s.d(""),this.nomAr=new s.d(""),this.breadcrumb.name="Villes"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=Object(c.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(w.a)(null)).subscribe((function(t){!0===t?e.paginator.pageIndex=0:t=t,e.paginator.pageSize?t=t:e.paginator.pageSize=10;var i=e.paginator.pageIndex*e.paginator.pageSize;e.isLoadingResults=!0,e.getPage(i,e.paginator.pageSize,e.sort.active?e.sort.active:"id",e.sort.direction?e.sort.direction:"desc",""===e.nom.value?"*":e.nom.value,""===e.nomAr.value?"*":e.nomAr.value)}));this.subs.push(t)}},{key:"reset",value:function(){this.nom.setValue(""),this.nomAr.setValue(""),this.update.next(!0)}},{key:"search",value:function(){this.update.next(!0)}},{key:"getPage",value:function(e,t,i,n,a,o){var r=this,c=this.uow.villes.getAll(e,t,i,n,a,o).subscribe((function(e){console.log(e.list),r.dataSource=e.list,r.resultsLength=e.count,r.isLoadingResults=!1}));this.subs.push(c)}},{key:"openDialog",value:function(e,t,i){return this.dialog.open(k,{width:"1100px",disableClose:!0,data:{model:e,title:t,visualisation:i}}).afterClosed()}},{key:"add",value:function(){var e=this;this.openDialog(new u.l,"Ajouter "+this.breadcrumb.name,!1).subscribe((function(t){t&&e.update.next(!0)}))}},{key:"edit",value:function(e){var t=this;this.openDialog(e,"Modifier "+this.breadcrumb.name,!1).subscribe((function(e){e&&t.update.next(!0)}))}},{key:"detail",value:function(e){var t=this;this.openDialog(e,"D\xe9tail "+this.breadcrumb.name,!0).subscribe((function(e){e&&t.update.next(!0)}))}},{key:"delete",value:function(e){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mydialog.openDialog(this.breadcrumb.name).toPromise();case 2:if(t.t0=t.sent,"ok"!==t.t0){t.next=6;break}i=this.uow.villes.delete(e).subscribe((function(){return n.update.next(!0)})),this.subs.push(i);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"displayImage",value:function(e,t){return e?e&&e.startsWith("http")?e:"".concat(this.url,"/villes/").concat(t,"/").concat(e.replace(";","")):"assets/404.jpg"}},{key:"imgError",value:function(e){e.src="assets/404.jpg"}},{key:"isSelected",value:function(e){return!!this.selectedList.find((function(t){return t.id===e.id}))}},{key:"check",value:function(e){var t=this.selectedList.findIndex((function(t){return e.id===t.id}));-1!==t?this.selectedList.splice(t,1):this.selectedList.push(e)}},{key:"isAllSelected",value:function(){return this.selectedList.length===this.dataSource.length}},{key:"masterToggle",value:function(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}},{key:"deleteList",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mydialog.openDialog("role").toPromise();case 2:if(e.t0=e.sent,"ok"!==e.t0){e.next=6;break}t=this.uow.villes.deleteRange(this.selectedList).subscribe((function(){i.selectedList=[],i.update.next(!0)})),this.subs.push(t);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(e){e.unsubscribe()}))}}]),e}(),N.\u0275fac=function(e){return new(e||N)(r.Qb(b.a),r.Qb(l.b),r.Qb(W.a),r.Qb(L.a),r.Qb("BASE_URL"),r.Qb(C.a))},N.\u0275cmp=r.Kb({type:N,selectors:[["app-ville"]],viewQuery:function(e,t){var i;1&e&&(r.Hc(y.a,!0),r.Hc(V.a,!0)),2&e&&(r.zc(i=r.fc())&&(t.paginator=i.first),r.zc(i=r.fc())&&(t.sort=i.first))},decls:52,vars:9,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nomAr"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(r.Wb(0,"div",0),r.Wb(1,"button",1),r.ec("click",(function(){return t.add()})),r.Wb(2,"mat-icon"),r.Lc(3,"add"),r.Vb(),r.Lc(4," Ville "),r.Vb(),r.Vb(),r.Wb(5,"mat-accordion"),r.Wb(6,"mat-expansion-panel",2),r.ec("opened",(function(){return t.panelOpenState=!0}))("closed",(function(){return t.panelOpenState=!1})),r.Wb(7,"mat-expansion-panel-header"),r.Wb(8,"mat-panel-title",3),r.Wb(9,"mat-icon"),r.Lc(10,"search"),r.Vb(),r.Wb(11,"p",4),r.Lc(12,"Recherche"),r.Vb(),r.Vb(),r.Rb(13,"mat-panel-description"),r.Vb(),r.Rb(14,"mat-divider"),r.Wb(15,"div",5),r.Wb(16,"mat-form-field",6),r.Wb(17,"mat-label"),r.Lc(18,"nom"),r.Vb(),r.Rb(19,"input",7),r.Vb(),r.Wb(20,"mat-form-field",6),r.Wb(21,"mat-label"),r.Lc(22,"nomAr"),r.Vb(),r.Rb(23,"input",7),r.Vb(),r.Vb(),r.Wb(24,"div",8),r.Wb(25,"button",9),r.ec("click",(function(){return t.reset()})),r.Wb(26,"mat-icon"),r.Lc(27,"refresh"),r.Vb(),r.Lc(28," R\xe9initialiser "),r.Vb(),r.Lc(29," \xa0\xa0 "),r.Wb(30,"button",1),r.ec("click",(function(){return t.search()})),r.Wb(31,"mat-icon"),r.Lc(32,"search"),r.Vb(),r.Lc(33," Rechercher "),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(34,"div",10),r.Jc(35,I,2,1,"div",11),r.Wb(36,"div",12),r.Wb(37,"table",13,14),r.Ub(39,15),r.Jc(40,O,2,0,"th",16),r.Jc(41,_,2,1,"td",17),r.Tb(),r.Ub(42,18),r.Jc(43,F,2,0,"th",16),r.Jc(44,q,2,1,"td",17),r.Tb(),r.Ub(45,19),r.Jc(46,J,1,0,"th",20),r.Jc(47,Q,11,0,"td",17),r.Tb(),r.Jc(48,T,1,0,"tr",21),r.Jc(49,j,1,0,"tr",22),r.Vb(),r.Vb(),r.Rb(50,"mat-paginator",23,24),r.Vb()),2&e&&(r.Db(19),r.pc("formControl",t.nom),r.Db(4),r.pc("formControl",t.nomAr),r.Db(12),r.pc("ngIf",t.isLoadingResults),r.Db(2),r.pc("dataSource",t.dataSource),r.Db(11),r.pc("matHeaderRowDef",t.displayedColumns),r.Db(1),r.pc("matRowDefColumns",t.displayedColumns),r.Db(1),r.pc("length",t.resultsLength)("pageSizeOptions",r.qc(8,E)))},directives:[p.a,R.a,x.a,x.c,x.e,x.f,x.d,m.a,f.c,f.f,h.b,s.b,s.q,s.l,s.e,n.n,D.j,V.a,D.c,D.e,D.b,D.g,D.i,y.a,S.b,D.d,V.b,D.a,D.f,D.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),N)}],G=((z=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ob({type:z}),z.\u0275inj=r.Nb({factory:function(e){return new(e||z)},imports:[[a.h.forChild(M)],a.h]}),z),H=i("tk/3"),X=i("2thQ"),U=i("lOAm"),$=i("Fr4G"),K=i("67nL"),B=((P=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ob({type:P}),P.\u0275inj=r.Nb({factory:function(e){return new(e||P)},imports:[[n.c,G,H.c,X.a,s.h,s.p,U.a,$.a,K.a]]}),P)}}]);