(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{xHm4:function(e,t,i){"use strict";i.r(t),i.d(t,"MessageModule",(function(){return he}));var s=i("ofXK"),a=i("tyNb"),c=i("mrSG"),o=i("fXoL"),n=i("XNiG"),r=i("VRyK"),b=i("3Pt+"),l=i("0IaG"),d=i("V2kc"),u=i("7q3A"),m=i("/t3+"),h=i("f0Cb"),p=i("kmnG"),f=i("qFsG"),g=i("bSwM"),V=i("iadO"),v=i("d3UM"),W=i("bTqV"),L=i("FKr1");function D(e,t){if(1&e&&(o.Wb(0,"mat-option",19),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Db(1),o.Mc(e.nom)}}function w(e,t){if(1&e&&(o.Wb(0,"mat-option",19),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Db(1),o.Mc(e.nom)}}function C(e,t){if(1&e){const e=o.Xb();o.Wb(0,"button",20),o.ec("click",(function(){o.Cc(e);const t=o.ic();return t.onOkClick(t.myForm.value)})),o.Lc(1,"Enregistre"),o.Vb()}if(2&e){const e=o.ic();o.pc("disabled",e.myForm.invalid)}}let R=(()=>{class e{constructor(e,t,i,s){this.dialogRef=e,this.data=t,this.fb=i,this.uow=s,this.subs=[],this.title="",this.visualisation=!1,this.users=this.uow.users.get(),this.receivers=this.uow.users.get(),this.folderToSaveInServer="messages"}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){this.o=this.data.model,this.folderToSaveInServer=this.folderToSaveInServer+"_"+this.o.id,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm(),0!==this.o.id&&setTimeout(()=>this.createForm(),300),setTimeout(()=>{},100)}))}onNoClick(){this.dialogRef.close()}onOkClick(e){let t=null;t=0===e.id?this.uow.messages.post(e).subscribe(t=>{this.dialogRef.close(e)}):this.uow.messages.put(e.id,e).subscribe(t=>{this.dialogRef.close(e)}),this.subs.push(t)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[b.r.required]],object:[this.o.object,[b.r.required]],message:[this.o.message,[b.r.required]],vu:[this.o.vu,[b.r.required]],date:[this.o.date,[b.r.required]],idUser:[this.o.idUser,[b.r.required]],senderName:[this.o.senderName,[b.r.required]],idReceiver:[this.o.idReceiver,[b.r.required]],idCours:[this.o.idCours,[b.r.required]]})}resetForm(){this.o=new d.e,this.createForm()}ngOnDestroy(){this.subs.forEach(e=>{e.unsubscribe()})}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(l.g),o.Qb(l.a),o.Qb(b.c),o.Qb(u.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-update"]],decls:46,vars:11,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","object","required",""],["matInput","","formControlName","message","required",""],["formControlName","vu","labelPosition","before",1,"col-md-6"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker4",""],["formControlName","idUser"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","senderName","required",""],["formControlName","idReceiver"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(e,t){if(1&e&&(o.Wb(0,"div",0),o.Wb(1,"h1",1),o.Wb(2,"mat-toolbar",2),o.Wb(3,"span"),o.Lc(4),o.Vb(),o.Vb(),o.Rb(5,"mat-divider"),o.Vb(),o.Wb(6,"div",3),o.Wb(7,"mat-dialog-content"),o.Wb(8,"form",4),o.Wb(9,"mat-form-field",5),o.Wb(10,"mat-label"),o.Lc(11,"object"),o.Vb(),o.Rb(12,"input",6),o.Vb(),o.Wb(13,"mat-form-field",5),o.Wb(14,"mat-label"),o.Lc(15,"message"),o.Vb(),o.Rb(16,"input",7),o.Vb(),o.Wb(17,"mat-checkbox",8),o.Lc(18," Activer "),o.Vb(),o.Wb(19,"mat-form-field",5),o.Wb(20,"mat-label"),o.Lc(21,"date"),o.Vb(),o.Rb(22,"input",9),o.Rb(23,"mat-datepicker-toggle",10),o.Rb(24,"mat-datepicker",null,11),o.Vb(),o.Wb(26,"mat-form-field",5),o.Wb(27,"mat-label"),o.Lc(28,"users"),o.Vb(),o.Wb(29,"mat-select",12),o.Jc(30,D,2,2,"mat-option",13),o.jc(31,"async"),o.Vb(),o.Vb(),o.Wb(32,"mat-form-field",5),o.Wb(33,"mat-label"),o.Lc(34,"senderName"),o.Vb(),o.Rb(35,"input",14),o.Vb(),o.Wb(36,"mat-form-field",5),o.Wb(37,"mat-label"),o.Lc(38,"receivers"),o.Vb(),o.Wb(39,"mat-select",15),o.Jc(40,w,2,2,"mat-option",13),o.jc(41,"async"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(42,"mat-dialog-actions",16),o.Wb(43,"button",17),o.ec("click",(function(){return t.onNoClick()})),o.Lc(44,"Annuler"),o.Vb(),o.Jc(45,C,2,1,"button",18),o.Vb(),o.Vb(),o.Vb()),2&e){const e=o.Ac(25);o.Db(4),o.Mc(t.title),o.Db(4),o.pc("formGroup",t.myForm),o.Db(14),o.pc("matDatepicker",e),o.Db(1),o.pc("for",e),o.Db(7),o.pc("ngForOf",o.kc(31,7,t.users)),o.Db(10),o.pc("ngForOf",o.kc(41,9,t.receivers)),o.Db(5),o.pc("ngIf",!t.visualisation)}},directives:[l.h,m.a,h.a,l.e,b.s,b.m,b.g,p.c,p.f,f.b,b.b,b.l,b.f,b.q,g.a,V.b,V.d,p.g,V.a,v.a,s.m,l.c,W.a,s.n,L.o],pipes:[s.b],styles:[""]}),e})();var k=i("M9IT"),y=i("Dh3D"),S=i("JX91"),x=i("qQ+2"),j=i("hUFt"),J=i("8lcG"),O=i("NFeN"),N=i("7EHt"),M=i("+0xr"),F=i("Xa2L");function I(e,t){if(1&e&&(o.Wb(0,"mat-option",33),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Db(1),o.Mc(e.nom)}}function T(e,t){if(1&e&&(o.Wb(0,"mat-option",33),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Db(1),o.Mc(e.nom)}}function U(e,t){1&e&&o.Rb(0,"mat-spinner")}function q(e,t){if(1&e&&(o.Wb(0,"div",34),o.Jc(1,U,1,0,"mat-spinner",35),o.Vb()),2&e){const e=o.ic();o.Db(1),o.pc("ngIf",e.isLoadingResults)}}function $(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Object"),o.Vb())}function Q(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.object)}}function A(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Message"),o.Vb())}function z(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.message)}}function E(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Vu"),o.Vb())}function G(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.vu?"Oui":"Non")}}function H(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Date"),o.Vb())}function P(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.jc(2,"date"),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(o.lc(2,1,e.date,"dd/MM/yyyy"))}}function X(e,t){1&e&&(o.Wb(0,"th",38),o.Lc(1,"User"),o.Vb())}function _(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.user)}}function K(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Sender Name"),o.Vb())}function B(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.senderName)}}function Y(e,t){1&e&&(o.Wb(0,"th",38),o.Lc(1,"Receiver"),o.Vb())}function Z(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.receiver)}}function ee(e,t){1&e&&(o.Wb(0,"th",38),o.Lc(1,"Cours"),o.Vb())}function te(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.cours)}}function ie(e,t){1&e&&o.Rb(0,"th",38)}function se(e,t){if(1&e){const e=o.Xb();o.Wb(0,"td",37),o.Wb(1,"div",39),o.Wb(2,"button",40),o.ec("click",(function(){o.Cc(e);const i=t.$implicit;return o.ic().edit(i)})),o.Wb(3,"mat-icon"),o.Lc(4,"create"),o.Vb(),o.Vb(),o.Wb(5,"button",41),o.ec("click",(function(){o.Cc(e);const i=t.$implicit;return o.ic().detail(i)})),o.Wb(6,"mat-icon"),o.Lc(7,"remove_red_eye"),o.Vb(),o.Vb(),o.Wb(8,"button",42),o.ec("click",(function(){o.Cc(e);const i=t.$implicit;return o.ic().delete(i.id)})),o.Wb(9,"mat-icon"),o.Lc(10,"delete_sweep"),o.Vb(),o.Vb(),o.Vb(),o.Vb()}}function ae(e,t){1&e&&o.Rb(0,"tr",43)}function ce(e,t){1&e&&o.Rb(0,"tr",44)}const oe=function(){return[10,25,50,100,250]},ne=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class e{constructor(e,t,i,s,a,c){this.uow=e,this.dialog=t,this.excel=i,this.mydialog=s,this.url=a,this.breadcrumb=c,this.update=new o.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["object","message","vu","date","user","senderName","receiver","cours","option"],this.panelOpenState=!1,this.object=new b.d(""),this.message=new b.d(""),this.idUser=new b.d(0),this.senderName=new b.d(""),this.idReceiver=new b.d(0),this.idCours=new b.d(0),this.users=this.uow.users.get(),this.receivers=this.uow.users.get(),this.dataSubject=new n.a,this.isListTabSelected=!0,this.isChartTabSelected=!0,this.listTabSelectedEvent=new n.a,this.chartTabSelectedEvent=new n.a,this.breadcrumb.name="Messages"}ngOnInit(){const e=Object(r.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(S.a)(null)).subscribe(e=>{!0===e?this.paginator.pageIndex=0:e=e,this.paginator.pageSize?e=e:this.paginator.pageSize=10;const t=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(t,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.object.value?"*":this.object.value,""===this.message.value?"*":this.message.value,0===this.idUser.value?0:this.idUser.value)});this.subs.push(e)}reset(){this.object.setValue(""),this.message.setValue(""),this.idUser.setValue(0),this.senderName.setValue(""),this.idReceiver.setValue(0),this.idCours.setValue(0),this.update.next(!0)}search(){this.update.next(!0)}getPage(e,t,i,s,a,c,o){const n=this.uow.messages.getAll(e,t,i,s,a,c,o).subscribe(e=>{console.log(e.list),this.dataSource=e.list,this.resultsLength=e.count,this.isLoadingResults=!1});this.subs.push(n)}openDialog(e,t,i){return this.dialog.open(R,{width:"1100px",disableClose:!0,data:{model:e,title:t,visualisation:i}}).afterClosed()}add(){this.openDialog(new d.e,"Ajouter "+this.breadcrumb.name,!1).subscribe(e=>{e&&this.update.next(!0)})}edit(e){this.openDialog(e,"Modifier "+this.breadcrumb.name,!1).subscribe(e=>{e&&this.update.next(!0)})}detail(e){this.openDialog(e,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(e=>{e&&this.update.next(!0)})}delete(e){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const t=this.uow.messages.delete(e).subscribe(()=>this.update.next(!0));this.subs.push(t)}}))}displayImage(e,t){return e?e&&e.startsWith("http")?e:`${this.url}/messages/${t}/${e.replace(";","")}`:"assets/404.jpg"}imgError(e){e.src="assets/404.jpg"}isSelected(e){return!!this.selectedList.find(t=>t.id===e.id)}check(e){const t=this.selectedList.findIndex(t=>e.id===t.id);-1!==t?this.selectedList.splice(t,1):this.selectedList.push(e)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const e=this.uow.messages.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(e)}}))}ngOnDestroy(){this.subs.forEach(e=>{e.unsubscribe()})}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(u.a),o.Qb(l.b),o.Qb(x.a),o.Qb(j.a),o.Qb("BASE_URL"),o.Qb(J.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-message"]],viewQuery:function(e,t){var i;1&e&&(o.Hc(k.a,!0),o.Hc(y.a,!0)),2&e&&(o.zc(i=o.fc())&&(t.paginator=i.first),o.zc(i=o.fc())&&(t.sort=i.first))},decls:86,vars:18,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","m-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","object"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","message"],["matColumnDef","vu"],["matColumnDef","date"],["matColumnDef","user"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","senderName"],["matColumnDef","receiver"],["matColumnDef","cours"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(o.Wb(0,"div",0),o.Wb(1,"button",1),o.ec("click",(function(){return t.add()})),o.Wb(2,"mat-icon"),o.Lc(3,"add"),o.Vb(),o.Lc(4," Message "),o.Vb(),o.Vb(),o.Wb(5,"mat-accordion"),o.Wb(6,"mat-expansion-panel",2),o.ec("opened",(function(){return t.panelOpenState=!0}))("closed",(function(){return t.panelOpenState=!1})),o.Wb(7,"mat-expansion-panel-header"),o.Wb(8,"mat-panel-title",3),o.Wb(9,"mat-icon"),o.Lc(10,"search"),o.Vb(),o.Wb(11,"p",4),o.Lc(12,"Recherche"),o.Vb(),o.Vb(),o.Rb(13,"mat-panel-description"),o.Vb(),o.Rb(14,"mat-divider"),o.Wb(15,"div",5),o.Wb(16,"mat-form-field",6),o.Wb(17,"mat-label"),o.Lc(18,"object"),o.Vb(),o.Rb(19,"input",7),o.Vb(),o.Wb(20,"mat-form-field",6),o.Wb(21,"mat-label"),o.Lc(22,"message"),o.Vb(),o.Rb(23,"input",7),o.Vb(),o.Wb(24,"mat-form-field",6),o.Wb(25,"mat-label"),o.Lc(26,"users"),o.Vb(),o.Wb(27,"mat-select",8),o.Jc(28,I,2,2,"mat-option",9),o.jc(29,"async"),o.Vb(),o.Vb(),o.Wb(30,"mat-form-field",6),o.Wb(31,"mat-label"),o.Lc(32,"senderName"),o.Vb(),o.Rb(33,"input",7),o.Vb(),o.Wb(34,"mat-form-field",6),o.Wb(35,"mat-label"),o.Lc(36,"receivers"),o.Vb(),o.Wb(37,"mat-select",8),o.Jc(38,T,2,2,"mat-option",9),o.jc(39,"async"),o.Vb(),o.Vb(),o.Vb(),o.Wb(40,"div",10),o.Wb(41,"button",11),o.ec("click",(function(){return t.reset()})),o.Wb(42,"mat-icon"),o.Lc(43,"refresh"),o.Vb(),o.Lc(44," R\xe9initialiser "),o.Vb(),o.Lc(45," \xa0\xa0 "),o.Wb(46,"button",1),o.ec("click",(function(){return t.search()})),o.Wb(47,"mat-icon"),o.Lc(48,"search"),o.Vb(),o.Lc(49," Rechercher "),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(50,"div",12),o.Jc(51,q,2,1,"div",13),o.Wb(52,"div",14),o.Wb(53,"table",15,16),o.Ub(55,17),o.Jc(56,$,2,0,"th",18),o.Jc(57,Q,2,1,"td",19),o.Tb(),o.Ub(58,20),o.Jc(59,A,2,0,"th",18),o.Jc(60,z,2,1,"td",19),o.Tb(),o.Ub(61,21),o.Jc(62,E,2,0,"th",18),o.Jc(63,G,2,1,"td",19),o.Tb(),o.Ub(64,22),o.Jc(65,H,2,0,"th",18),o.Jc(66,P,3,4,"td",19),o.Tb(),o.Ub(67,23),o.Jc(68,X,2,0,"th",24),o.Jc(69,_,2,1,"td",19),o.Tb(),o.Ub(70,25),o.Jc(71,K,2,0,"th",18),o.Jc(72,B,2,1,"td",19),o.Tb(),o.Ub(73,26),o.Jc(74,Y,2,0,"th",24),o.Jc(75,Z,2,1,"td",19),o.Tb(),o.Ub(76,27),o.Jc(77,ee,2,0,"th",24),o.Jc(78,te,2,1,"td",19),o.Tb(),o.Ub(79,28),o.Jc(80,ie,1,0,"th",24),o.Jc(81,se,11,0,"td",19),o.Tb(),o.Jc(82,ae,1,0,"tr",29),o.Jc(83,ce,1,0,"tr",30),o.Vb(),o.Vb(),o.Rb(84,"mat-paginator",31,32),o.Vb()),2&e&&(o.Db(19),o.pc("formControl",t.object),o.Db(4),o.pc("formControl",t.message),o.Db(4),o.pc("formControl",t.idUser),o.Db(1),o.pc("ngForOf",o.kc(29,13,t.users)),o.Db(5),o.pc("formControl",t.senderName),o.Db(4),o.pc("formControl",t.idReceiver),o.Db(1),o.pc("ngForOf",o.kc(39,15,t.receivers)),o.Db(13),o.pc("ngIf",t.isLoadingResults),o.Db(2),o.pc("dataSource",t.dataSource),o.Db(29),o.pc("matHeaderRowDef",t.displayedColumns),o.Db(1),o.pc("matRowDefColumns",t.displayedColumns),o.Db(1),o.pc("length",t.resultsLength)("pageSizeOptions",o.qc(17,oe)))},directives:[W.a,O.a,N.a,N.c,N.e,N.f,N.d,h.a,p.c,p.f,f.b,b.b,b.q,b.l,b.e,v.a,s.m,s.n,M.j,y.a,M.c,M.e,M.b,M.g,M.i,k.a,L.o,F.b,M.d,y.b,M.a,M.f,M.h],pipes:[s.b,s.e],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),e})()}];let re=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[a.h.forChild(ne)],a.h]}),e})();var be=i("tk/3"),le=i("2thQ"),de=i("lOAm"),ue=i("Fr4G"),me=i("67nL");let he=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[s.c,re,be.c,le.a,b.h,b.p,de.a,ue.a,me.a]]}),e})()}}]);