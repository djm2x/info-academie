function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{eRwu:function(e,t,i){"use strict";i.r(t),i.d(t,"OffreProfModule",(function(){return ie}));var a=i("ofXK"),n=i("tyNb"),r=i("mrSG"),o=i("fXoL"),s=i("XNiG"),c=i("VRyK"),u=i("3Pt+"),l=i("0IaG"),b=i("V2kc"),d=i("7q3A"),f=i("/t3+"),h=i("f0Cb"),p=i("kmnG"),m=i("qFsG"),v=i("d3UM"),g=i("bTqV"),y=i("FKr1");function k(e,t){if(1&e&&(o.Wb(0,"mat-option",13),o.Lc(1),o.Vb()),2&e){var i=t.$implicit;o.pc("value",i.id),o.Db(1),o.Mc(i.nom)}}function C(e,t){if(1&e){var i=o.Xb();o.Wb(0,"button",14),o.ec("click",(function(){o.Cc(i);var e=o.ic();return e.onOkClick(e.myForm.value)})),o.Lc(1,"Enregistre"),o.Vb()}if(2&e){var a=o.ic();o.pc("disabled",a.myForm.invalid)}}var w,V=((w=function(){function e(t,i,a,n){_classCallCheck(this,e),this.dialogRef=t,this.data=i,this.fb=a,this.uow=n,this.subs=[],this.title="",this.visualisation=!1,this.typeCourss=this.uow.typeCours.get(),this.folderToSaveInServer="offreProfs"}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.o=this.data.model,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"onOkClick",value:function(e){var t,i=this;t=0===e.id?this.uow.offreProfs.post(e).subscribe((function(t){i.dialogRef.close(e)})):this.uow.offreProfs.put(e.id,e).subscribe((function(t){i.dialogRef.close(e)})),this.subs.push(t)}},{key:"createForm",value:function(){this.myForm=this.fb.group({id:[this.o.id,[u.r.required]],interval:[this.o.interval,[u.r.required]],value:[this.o.value,[u.r.required]],idTypeCours:[+this.o.idTypeCours,[u.r.required]]})}},{key:"resetForm",value:function(){this.o=new b.g,this.createForm()}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(e){e.unsubscribe()}))}}]),e}()).\u0275fac=function(e){return new(e||w)(o.Qb(l.g),o.Qb(l.a),o.Qb(u.c),o.Qb(d.a))},w.\u0275cmp=o.Kb({type:w,selectors:[["app-update"]],decls:27,vars:6,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","interval","required",""],["matInput","","formControlName","value","required",""],["formControlName","idTypeCours"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(e,t){1&e&&(o.Wb(0,"div",0),o.Wb(1,"h1",1),o.Wb(2,"mat-toolbar",2),o.Wb(3,"span"),o.Lc(4),o.Vb(),o.Vb(),o.Rb(5,"mat-divider"),o.Vb(),o.Wb(6,"div",3),o.Wb(7,"mat-dialog-content"),o.Wb(8,"form",4),o.Wb(9,"mat-form-field",5),o.Wb(10,"mat-label"),o.Lc(11,"interval"),o.Vb(),o.Rb(12,"input",6),o.Vb(),o.Wb(13,"mat-form-field",5),o.Wb(14,"mat-label"),o.Lc(15,"value"),o.Vb(),o.Rb(16,"input",7),o.Vb(),o.Wb(17,"mat-form-field",5),o.Wb(18,"mat-label"),o.Lc(19,"type Cours"),o.Vb(),o.Wb(20,"mat-select",8),o.Jc(21,k,2,2,"mat-option",9),o.jc(22,"async"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(23,"mat-dialog-actions",10),o.Wb(24,"button",11),o.ec("click",(function(){return t.onNoClick()})),o.Lc(25,"Annuler"),o.Vb(),o.Jc(26,C,2,1,"button",12),o.Vb(),o.Vb(),o.Vb()),2&e&&(o.Db(4),o.Mc(t.title),o.Db(4),o.pc("formGroup",t.myForm),o.Db(13),o.pc("ngForOf",o.kc(22,4,t.typeCourss)),o.Db(5),o.pc("ngIf",!t.visualisation))},directives:[l.h,f.a,h.a,l.e,u.s,u.m,u.g,p.c,p.f,m.b,u.b,u.l,u.f,u.q,v.a,a.m,l.c,g.a,a.n,y.o],pipes:[a.b],styles:[""]}),w),L=i("M9IT"),W=i("Dh3D"),D=i("JX91"),R=i("qQ+2"),x=i("hUFt"),S=i("8lcG"),O=i("NFeN"),T=i("+0xr"),I=i("Xa2L");function P(e,t){1&e&&o.Rb(0,"mat-spinner")}function F(e,t){if(1&e&&(o.Wb(0,"div",18),o.Jc(1,P,1,0,"mat-spinner",19),o.Vb()),2&e){var i=o.ic();o.Db(1),o.pc("ngIf",i.isLoadingResults)}}function _(e,t){1&e&&(o.Wb(0,"th",20),o.Lc(1,"Interval"),o.Vb())}function J(e,t){if(1&e&&(o.Wb(0,"td",21),o.Lc(1),o.Vb()),2&e){var i=t.$implicit;o.Db(1),o.Mc(i.interval)}}function j(e,t){1&e&&(o.Wb(0,"th",20),o.Lc(1,"Value"),o.Vb())}function Q(e,t){if(1&e&&(o.Wb(0,"td",21),o.Lc(1),o.Vb()),2&e){var i=t.$implicit;o.Db(1),o.Mc(i.value)}}function q(e,t){1&e&&(o.Wb(0,"th",22),o.Lc(1,"Type Cours"),o.Vb())}function M(e,t){if(1&e&&(o.Wb(0,"td",21),o.Lc(1),o.Vb()),2&e){var i=t.$implicit;o.Db(1),o.Mc(i.type_cours.nom)}}function N(e,t){1&e&&o.Rb(0,"th",22)}function z(e,t){if(1&e){var i=o.Xb();o.Wb(0,"td",21),o.Wb(1,"div",23),o.Wb(2,"button",24),o.ec("click",(function(){o.Cc(i);var e=t.$implicit;return o.ic().edit(e)})),o.Wb(3,"mat-icon"),o.Lc(4,"create"),o.Vb(),o.Vb(),o.Wb(5,"button",25),o.ec("click",(function(){o.Cc(i);var e=t.$implicit;return o.ic().detail(e)})),o.Wb(6,"mat-icon"),o.Lc(7,"remove_red_eye"),o.Vb(),o.Vb(),o.Wb(8,"button",26),o.ec("click",(function(){o.Cc(i);var e=t.$implicit;return o.ic().delete(e.id)})),o.Wb(9,"mat-icon"),o.Lc(10,"delete_sweep"),o.Vb(),o.Vb(),o.Vb(),o.Vb()}}function E(e,t){1&e&&o.Rb(0,"tr",27)}function A(e,t){1&e&&o.Rb(0,"tr",28)}var G,U,X,$=function(){return[10,25,50,100,250]},H=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(G=function(){function e(t,i,a,n,r,c){_classCallCheck(this,e),this.uow=t,this.dialog=i,this.excel=a,this.mydialog=n,this.url=r,this.breadcrumb=c,this.update=new o.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["interval","value","typeCours","option"],this.panelOpenState=!1,this.interval=new u.d(""),this.value=new u.d(0),this.idTypeCours=new u.d(0),this.typeCourss=this.uow.typeCours.get(),this.dataSubject=new s.a,this.isListTabSelected=!0,this.isChartTabSelected=!0,this.listTabSelectedEvent=new s.a,this.chartTabSelectedEvent=new s.a,this.breadcrumb.name="OffreProfs"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=Object(c.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(D.a)(null)).subscribe((function(t){!0===t?e.paginator.pageIndex=0:t=t,e.paginator.pageSize?t=t:e.paginator.pageSize=10;var i=e.paginator.pageIndex*e.paginator.pageSize;e.isLoadingResults=!0,e.getPage(i,e.paginator.pageSize,e.sort.active?e.sort.active:"id",e.sort.direction?e.sort.direction:"desc",""===e.interval.value?"*":e.interval.value,0===e.value.value?0:e.value.value,0===e.idTypeCours.value?0:e.idTypeCours.value)}));this.subs.push(t)}},{key:"reset",value:function(){this.interval.setValue(""),this.value.setValue(0),this.idTypeCours.setValue(0),this.update.next(!0)}},{key:"generateExcel",value:function(){this.excel.json_to_sheet(this.dataSource)}},{key:"search",value:function(){this.update.next(!0)}},{key:"getPage",value:function(e,t,i,a,n,r,o){var s=this,c=this.uow.offreProfs.getAll(e,t,i,a,n,r,o).subscribe((function(e){console.log(e.list),s.dataSource=e.list,s.resultsLength=e.count,s.isLoadingResults=!1}));this.subs.push(c)}},{key:"selectedIndexChange",value:function(e){}},{key:"openDialog",value:function(e,t,i){return this.dialog.open(V,{width:"1100px",disableClose:!0,data:{model:e,title:t,visualisation:i}}).afterClosed()}},{key:"add",value:function(){var e=this;this.openDialog(new b.g,"Ajouter "+this.breadcrumb.name,!1).subscribe((function(t){t&&e.update.next(!0)}))}},{key:"edit",value:function(e){var t=this;this.openDialog(e,"Modifier "+this.breadcrumb.name,!1).subscribe((function(e){e&&t.update.next(!0)}))}},{key:"detail",value:function(e){var t=this;this.openDialog(e,"D\xe9tail "+this.breadcrumb.name,!0).subscribe((function(e){e&&t.update.next(!0)}))}},{key:"delete",value:function(e){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.mydialog.openDialog(this.breadcrumb.name).toPromise();case 2:if(t.t0=t.sent,"ok"!==t.t0){t.next=6;break}i=this.uow.offreProfs.delete(e).subscribe((function(){return a.update.next(!0)})),this.subs.push(i);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"displayImage",value:function(e){return e?e&&e.startsWith("http")?e:"".concat(this.url,"/offreProfs/").concat(e.replace(";","")):"assets/404.jpg"}},{key:"imgError",value:function(e){e.src="assets/404.jpg"}},{key:"isSelected",value:function(e){return!!this.selectedList.find((function(t){return t.id===e.id}))}},{key:"check",value:function(e){var t=this.selectedList.findIndex((function(t){return e.id===t.id}));-1!==t?this.selectedList.splice(t,1):this.selectedList.push(e)}},{key:"isAllSelected",value:function(){return this.selectedList.length===this.dataSource.length}},{key:"masterToggle",value:function(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}},{key:"deleteList",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.mydialog.openDialog("role").toPromise();case 2:if(e.t0=e.sent,"ok"!==e.t0){e.next=6;break}t=this.uow.offreProfs.deleteRange(this.selectedList).subscribe((function(){i.selectedList=[],i.update.next(!0)})),this.subs.push(t);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnDestroy",value:function(){this.subs.forEach((function(e){e.unsubscribe()}))}}]),e}(),G.\u0275fac=function(e){return new(e||G)(o.Qb(d.a),o.Qb(l.b),o.Qb(R.a),o.Qb(x.a),o.Qb("BASE_URL"),o.Qb(S.a))},G.\u0275cmp=o.Kb({type:G,selectors:[["app-offreProf"]],viewQuery:function(e,t){var i;1&e&&(o.Hc(L.a,!0),o.Hc(W.a,!0)),2&e&&(o.zc(i=o.fc())&&(t.paginator=i.first),o.zc(i=o.fc())&&(t.sort=i.first))},decls:26,vars:7,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","interval"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["matColumnDef","typeCours"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(o.Wb(0,"div",0),o.Wb(1,"button",1),o.ec("click",(function(){return t.add()})),o.Wb(2,"mat-icon"),o.Lc(3,"add"),o.Vb(),o.Lc(4," OffreProf "),o.Vb(),o.Vb(),o.Wb(5,"div",2),o.Jc(6,F,2,1,"div",3),o.Wb(7,"div",4),o.Wb(8,"table",5,6),o.Ub(10,7),o.Jc(11,_,2,0,"th",8),o.Jc(12,J,2,1,"td",9),o.Tb(),o.Ub(13,10),o.Jc(14,j,2,0,"th",8),o.Jc(15,Q,2,1,"td",9),o.Tb(),o.Ub(16,11),o.Jc(17,q,2,0,"th",12),o.Jc(18,M,2,1,"td",9),o.Tb(),o.Ub(19,13),o.Jc(20,N,1,0,"th",12),o.Jc(21,z,11,0,"td",9),o.Tb(),o.Jc(22,E,1,0,"tr",14),o.Jc(23,A,1,0,"tr",15),o.Vb(),o.Vb(),o.Rb(24,"mat-paginator",16,17),o.Vb()),2&e&&(o.Db(6),o.pc("ngIf",t.isLoadingResults),o.Db(2),o.pc("dataSource",t.dataSource),o.Db(14),o.pc("matHeaderRowDef",t.displayedColumns),o.Db(1),o.pc("matRowDefColumns",t.displayedColumns),o.Db(1),o.pc("length",t.resultsLength)("pageSizeOptions",o.qc(6,$)))},directives:[g.a,O.a,a.n,T.j,W.a,T.c,T.e,T.b,T.g,T.i,L.a,I.b,T.d,W.b,T.a,T.f,T.h],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),G)}],K=((U=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ob({type:U}),U.\u0275inj=o.Nb({factory:function(e){return new(e||U)},imports:[[n.h.forChild(H)],n.h]}),U),B=i("tk/3"),Y=i("2thQ"),Z=i("lOAm"),ee=i("Fr4G"),te=i("67nL"),ie=((X=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ob({type:X}),X.\u0275inj=o.Nb({factory:function(e){return new(e||X)},imports:[[a.c,K,B.c,Y.a,u.h,u.p,Z.a,ee.a,te.a]]}),X)}}]);