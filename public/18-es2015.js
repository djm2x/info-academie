(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{xHm4:function(e,t,i){"use strict";i.r(t),i.d(t,"MessageModule",(function(){return me}));var s=i("ofXK"),a=i("tyNb"),c=i("mrSG"),o=i("fXoL"),n=i("VRyK"),r=i("3Pt+"),b=i("0IaG"),l=i("V2kc"),d=i("7q3A"),u=i("/t3+"),m=i("f0Cb"),h=i("kmnG"),p=i("qFsG"),f=i("bSwM"),g=i("iadO"),V=i("d3UM"),W=i("bTqV"),v=i("FKr1");function L(e,t){if(1&e&&(o.Wb(0,"mat-option",19),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Db(1),o.Mc(e.nom)}}function D(e,t){if(1&e&&(o.Wb(0,"mat-option",19),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Db(1),o.Mc(e.nom)}}function w(e,t){if(1&e){const e=o.Xb();o.Wb(0,"button",20),o.ec("click",(function(){o.Cc(e);const t=o.ic();return t.onOkClick(t.myForm.value)})),o.Lc(1,"Enregistre"),o.Vb()}if(2&e){const e=o.ic();o.pc("disabled",e.myForm.invalid)}}let C=(()=>{class e{constructor(e,t,i,s){this.dialogRef=e,this.data=t,this.fb=i,this.uow=s,this.subs=[],this.title="",this.visualisation=!1,this.users=this.uow.users.get(),this.receivers=this.uow.users.get(),this.folderToSaveInServer="messages"}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){this.o=this.data.model,this.folderToSaveInServer=this.folderToSaveInServer+"_"+this.o.id,this.title=this.data.title,this.visualisation=this.data.visualisation,this.createForm(),0!==this.o.id&&setTimeout(()=>this.createForm(),300)}))}onNoClick(){this.dialogRef.close()}onOkClick(e){let t=null;t=0===e.id?this.uow.messages.post(e).subscribe(t=>{this.dialogRef.close(e)}):this.uow.messages.put(e.id,e).subscribe(t=>{this.dialogRef.close(e)}),this.subs.push(t)}createForm(){this.myForm=this.fb.group({id:[this.o.id,[r.s.required]],object:[this.o.object,[r.s.required]],message:[this.o.message,[r.s.required]],vu:[this.o.vu,[r.s.required]],date:[this.o.date,[r.s.required]],idUser:[this.o.idUser,[r.s.required]],senderName:[this.o.senderName,[r.s.required]],idReceiver:[this.o.idReceiver,[r.s.required]],idCours:[this.o.idCours,[r.s.required]]})}resetForm(){this.o=new l.g,this.createForm()}ngOnDestroy(){this.subs.forEach(e=>{e.unsubscribe()})}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(b.g),o.Qb(b.a),o.Qb(r.d),o.Qb(d.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-update"]],decls:46,vars:11,consts:[[1,"dialog"],["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"content"],[3,"formGroup"],["appearance","fill",1,"col-md-6"],["matInput","","formControlName","object","required",""],["matInput","","formControlName","message","required",""],["formControlName","vu","labelPosition","before",1,"col-md-6"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker4",""],["formControlName","idUser"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","senderName","required",""],["formControlName","idReceiver"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"disabled","click"]],template:function(e,t){if(1&e&&(o.Wb(0,"div",0),o.Wb(1,"h1",1),o.Wb(2,"mat-toolbar",2),o.Wb(3,"span"),o.Lc(4),o.Vb(),o.Vb(),o.Rb(5,"mat-divider"),o.Vb(),o.Wb(6,"div",3),o.Wb(7,"mat-dialog-content"),o.Wb(8,"form",4),o.Wb(9,"mat-form-field",5),o.Wb(10,"mat-label"),o.Lc(11,"object"),o.Vb(),o.Rb(12,"input",6),o.Vb(),o.Wb(13,"mat-form-field",5),o.Wb(14,"mat-label"),o.Lc(15,"message"),o.Vb(),o.Rb(16,"input",7),o.Vb(),o.Wb(17,"mat-checkbox",8),o.Lc(18," Activer "),o.Vb(),o.Wb(19,"mat-form-field",5),o.Wb(20,"mat-label"),o.Lc(21,"date"),o.Vb(),o.Rb(22,"input",9),o.Rb(23,"mat-datepicker-toggle",10),o.Rb(24,"mat-datepicker",null,11),o.Vb(),o.Wb(26,"mat-form-field",5),o.Wb(27,"mat-label"),o.Lc(28,"users"),o.Vb(),o.Wb(29,"mat-select",12),o.Jc(30,L,2,2,"mat-option",13),o.jc(31,"async"),o.Vb(),o.Vb(),o.Wb(32,"mat-form-field",5),o.Wb(33,"mat-label"),o.Lc(34,"senderName"),o.Vb(),o.Rb(35,"input",14),o.Vb(),o.Wb(36,"mat-form-field",5),o.Wb(37,"mat-label"),o.Lc(38,"receivers"),o.Vb(),o.Wb(39,"mat-select",15),o.Jc(40,D,2,2,"mat-option",13),o.jc(41,"async"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(42,"mat-dialog-actions",16),o.Wb(43,"button",17),o.ec("click",(function(){return t.onNoClick()})),o.Lc(44,"Annuler"),o.Vb(),o.Jc(45,w,2,1,"button",18),o.Vb(),o.Vb(),o.Vb()),2&e){const e=o.Ac(25);o.Db(4),o.Mc(t.title),o.Db(4),o.pc("formGroup",t.myForm),o.Db(14),o.pc("matDatepicker",e),o.Db(1),o.pc("for",e),o.Db(7),o.pc("ngForOf",o.kc(31,7,t.users)),o.Db(10),o.pc("ngForOf",o.kc(41,9,t.receivers)),o.Db(5),o.pc("ngIf",!t.visualisation)}},directives:[b.h,u.a,m.a,b.e,r.t,r.n,r.h,h.c,h.f,p.b,r.b,r.m,r.g,r.r,f.a,g.b,g.d,h.g,g.a,V.a,s.m,b.c,W.a,s.n,v.o],pipes:[s.b],styles:[""]}),e})();var R=i("M9IT"),k=i("Dh3D"),y=i("JX91"),x=i("qQ+2"),S=i("hUFt"),j=i("8lcG"),J=i("NFeN"),O=i("7EHt"),M=i("+0xr"),N=i("Xa2L");function F(e,t){if(1&e&&(o.Wb(0,"mat-option",33),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Db(1),o.Mc(e.nom)}}function I(e,t){if(1&e&&(o.Wb(0,"mat-option",33),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.pc("value",e.id),o.Db(1),o.Mc(e.nom)}}function U(e,t){1&e&&o.Rb(0,"mat-spinner")}function q(e,t){if(1&e&&(o.Wb(0,"div",34),o.Jc(1,U,1,0,"mat-spinner",35),o.Vb()),2&e){const e=o.ic();o.Db(1),o.pc("ngIf",e.isLoadingResults)}}function T(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Object"),o.Vb())}function $(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.object)}}function Q(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Message"),o.Vb())}function A(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.message)}}function z(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Vu"),o.Vb())}function G(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.vu?"Oui":"Non")}}function H(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Date"),o.Vb())}function E(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.jc(2,"date"),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(o.lc(2,1,e.date,"dd/MM/yyyy"))}}function P(e,t){1&e&&(o.Wb(0,"th",38),o.Lc(1,"User"),o.Vb())}function X(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.user)}}function _(e,t){1&e&&(o.Wb(0,"th",36),o.Lc(1,"Sender Name"),o.Vb())}function K(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.senderName)}}function B(e,t){1&e&&(o.Wb(0,"th",38),o.Lc(1,"Receiver"),o.Vb())}function Y(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.receiver)}}function Z(e,t){1&e&&(o.Wb(0,"th",38),o.Lc(1,"Cours"),o.Vb())}function ee(e,t){if(1&e&&(o.Wb(0,"td",37),o.Lc(1),o.Vb()),2&e){const e=t.$implicit;o.Db(1),o.Mc(e.cours)}}function te(e,t){1&e&&o.Rb(0,"th",38)}function ie(e,t){if(1&e){const e=o.Xb();o.Wb(0,"td",37),o.Wb(1,"div",39),o.Wb(2,"button",40),o.ec("click",(function(){o.Cc(e);const i=t.$implicit;return o.ic().edit(i)})),o.Wb(3,"mat-icon"),o.Lc(4,"create"),o.Vb(),o.Vb(),o.Wb(5,"button",41),o.ec("click",(function(){o.Cc(e);const i=t.$implicit;return o.ic().detail(i)})),o.Wb(6,"mat-icon"),o.Lc(7,"remove_red_eye"),o.Vb(),o.Vb(),o.Wb(8,"button",42),o.ec("click",(function(){o.Cc(e);const i=t.$implicit;return o.ic().delete(i.id)})),o.Wb(9,"mat-icon"),o.Lc(10,"delete_sweep"),o.Vb(),o.Vb(),o.Vb(),o.Vb()}}function se(e,t){1&e&&o.Rb(0,"tr",43)}function ae(e,t){1&e&&o.Rb(0,"tr",44)}const ce=function(){return[10,25,50,100,250]},oe=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class e{constructor(e,t,i,s,a,c){this.uow=e,this.dialog=t,this.excel=i,this.mydialog=s,this.url=a,this.breadcrumb=c,this.update=new o.o,this.isLoadingResults=!0,this.resultsLength=0,this.isRateLimitReached=!1,this.subs=[],this.dataSource=[],this.selectedList=[],this.displayedColumns=["object","message","vu","date","user","senderName","receiver","cours","option"],this.panelOpenState=!1,this.object=new r.e(""),this.message=new r.e(""),this.idUser=new r.e(0),this.senderName=new r.e(""),this.idReceiver=new r.e(0),this.idCours=new r.e(0),this.users=this.uow.users.get(),this.receivers=this.uow.users.get(),this.breadcrumb.name="Messages"}ngOnInit(){const e=Object(n.a)(this.sort.sortChange,this.paginator.page,this.update).pipe(Object(y.a)(null)).subscribe(e=>{!0===e?this.paginator.pageIndex=0:e=e,this.paginator.pageSize?e=e:this.paginator.pageSize=10;const t=this.paginator.pageIndex*this.paginator.pageSize;this.isLoadingResults=!0,this.getPage(t,this.paginator.pageSize,this.sort.active?this.sort.active:"id",this.sort.direction?this.sort.direction:"desc",""===this.object.value?"*":this.object.value,""===this.message.value?"*":this.message.value,0===this.idUser.value?0:this.idUser.value)});this.subs.push(e)}reset(){this.object.setValue(""),this.message.setValue(""),this.idUser.setValue(0),this.senderName.setValue(""),this.idReceiver.setValue(0),this.idCours.setValue(0),this.update.next(!0)}search(){this.update.next(!0)}getPage(e,t,i,s,a,c,o){const n=this.uow.messages.getAll(e,t,i,s,a,c,o).subscribe(e=>{console.log(e.list),this.dataSource=e.list,this.resultsLength=e.count,this.isLoadingResults=!1});this.subs.push(n)}openDialog(e,t,i){return this.dialog.open(C,{width:"1100px",disableClose:!0,data:{model:e,title:t,visualisation:i}}).afterClosed()}add(){this.openDialog(new l.g,"Ajouter "+this.breadcrumb.name,!1).subscribe(e=>{e&&this.update.next(!0)})}edit(e){this.openDialog(e,"Modifier "+this.breadcrumb.name,!1).subscribe(e=>{e&&this.update.next(!0)})}detail(e){this.openDialog(e,"D\xe9tail "+this.breadcrumb.name,!0).subscribe(e=>{e&&this.update.next(!0)})}delete(e){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog(this.breadcrumb.name).toPromise())){const t=this.uow.messages.delete(e).subscribe(()=>this.update.next(!0));this.subs.push(t)}}))}displayImage(e,t){return e?e&&e.startsWith("http")?e:`${this.url}/messages/${t}/${e.replace(";","")}`:"assets/404.jpg"}imgError(e){e.src="assets/404.jpg"}isSelected(e){return!!this.selectedList.find(t=>t.id===e.id)}check(e){const t=this.selectedList.findIndex(t=>e.id===t.id);-1!==t?this.selectedList.splice(t,1):this.selectedList.push(e)}isAllSelected(){return this.selectedList.length===this.dataSource.length}masterToggle(){this.selectedList=this.isAllSelected()?[]:Array.from(this.dataSource)}deleteList(){return Object(c.b)(this,void 0,void 0,(function*(){if("ok"===(yield this.mydialog.openDialog("role").toPromise())){const e=this.uow.messages.deleteRange(this.selectedList).subscribe(()=>{this.selectedList=[],this.update.next(!0)});this.subs.push(e)}}))}ngOnDestroy(){this.subs.forEach(e=>{e.unsubscribe()})}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(d.a),o.Qb(b.b),o.Qb(x.a),o.Qb(S.a),o.Qb("BASE_URL"),o.Qb(j.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["app-message"]],viewQuery:function(e,t){var i;1&e&&(o.Hc(R.a,!0),o.Hc(k.a,!0)),2&e&&(o.zc(i=o.fc())&&(t.paginator=i.first),o.zc(i=o.fc())&&(t.sort=i.first))},decls:86,vars:18,consts:[[1,"d-flex","flex-row-reverse","pt-3","mb-3"],["mat-raised-button","","color","primary",3,"click"],["expanded","",3,"opened","closed"],[1,"d-flex","align-items-center"],[1,"mb-0","ml-2"],[1,"mt-2"],["appearance","fill",1,"col-md-6"],["matInput","","required","",3,"formControl"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","flex-row-reverse","mb-2","mr-2"],["mat-raised-button","",3,"click"],[1,"example-container","mat-elevation-z8","mt-2"],["class","example-loading-shade",4,"ngIf"],[1,"example-table-container"],["mat-table","","multiTemplateDataRows","","aria-label","Elements","matSort","",3,"dataSource"],["table",""],["matColumnDef","object"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","message"],["matColumnDef","vu"],["matColumnDef","date"],["matColumnDef","user"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","senderName"],["matColumnDef","receiver"],["matColumnDef","cours"],["matColumnDef","option",2,"flex-direction","row-reverse"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["pageIndex","0","pageSize","10","showFirstLastButtons","",3,"length","pageSizeOptions"],["paginator",""],[3,"value"],[1,"example-loading-shade"],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"button-row"],["title","Modifier","mat-icon-button","","color","accent",3,"click"],["title","Visualiser","mat-icon-button","","color","warn",3,"click"],["title","Supprimer","mat-icon-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(o.Wb(0,"div",0),o.Wb(1,"button",1),o.ec("click",(function(){return t.add()})),o.Wb(2,"mat-icon"),o.Lc(3,"add"),o.Vb(),o.Lc(4," Message "),o.Vb(),o.Vb(),o.Wb(5,"mat-accordion"),o.Wb(6,"mat-expansion-panel",2),o.ec("opened",(function(){return t.panelOpenState=!0}))("closed",(function(){return t.panelOpenState=!1})),o.Wb(7,"mat-expansion-panel-header"),o.Wb(8,"mat-panel-title",3),o.Wb(9,"mat-icon"),o.Lc(10,"search"),o.Vb(),o.Wb(11,"p",4),o.Lc(12,"Recherche"),o.Vb(),o.Vb(),o.Rb(13,"mat-panel-description"),o.Vb(),o.Rb(14,"mat-divider"),o.Wb(15,"div",5),o.Wb(16,"mat-form-field",6),o.Wb(17,"mat-label"),o.Lc(18,"object"),o.Vb(),o.Rb(19,"input",7),o.Vb(),o.Wb(20,"mat-form-field",6),o.Wb(21,"mat-label"),o.Lc(22,"message"),o.Vb(),o.Rb(23,"input",7),o.Vb(),o.Wb(24,"mat-form-field",6),o.Wb(25,"mat-label"),o.Lc(26,"users"),o.Vb(),o.Wb(27,"mat-select",8),o.Jc(28,F,2,2,"mat-option",9),o.jc(29,"async"),o.Vb(),o.Vb(),o.Wb(30,"mat-form-field",6),o.Wb(31,"mat-label"),o.Lc(32,"senderName"),o.Vb(),o.Rb(33,"input",7),o.Vb(),o.Wb(34,"mat-form-field",6),o.Wb(35,"mat-label"),o.Lc(36,"receivers"),o.Vb(),o.Wb(37,"mat-select",8),o.Jc(38,I,2,2,"mat-option",9),o.jc(39,"async"),o.Vb(),o.Vb(),o.Vb(),o.Wb(40,"div",10),o.Wb(41,"button",11),o.ec("click",(function(){return t.reset()})),o.Wb(42,"mat-icon"),o.Lc(43,"refresh"),o.Vb(),o.Lc(44," R\xe9initialiser "),o.Vb(),o.Lc(45," \xa0\xa0 "),o.Wb(46,"button",1),o.ec("click",(function(){return t.search()})),o.Wb(47,"mat-icon"),o.Lc(48,"search"),o.Vb(),o.Lc(49," Rechercher "),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(50,"div",12),o.Jc(51,q,2,1,"div",13),o.Wb(52,"div",14),o.Wb(53,"table",15,16),o.Ub(55,17),o.Jc(56,T,2,0,"th",18),o.Jc(57,$,2,1,"td",19),o.Tb(),o.Ub(58,20),o.Jc(59,Q,2,0,"th",18),o.Jc(60,A,2,1,"td",19),o.Tb(),o.Ub(61,21),o.Jc(62,z,2,0,"th",18),o.Jc(63,G,2,1,"td",19),o.Tb(),o.Ub(64,22),o.Jc(65,H,2,0,"th",18),o.Jc(66,E,3,4,"td",19),o.Tb(),o.Ub(67,23),o.Jc(68,P,2,0,"th",24),o.Jc(69,X,2,1,"td",19),o.Tb(),o.Ub(70,25),o.Jc(71,_,2,0,"th",18),o.Jc(72,K,2,1,"td",19),o.Tb(),o.Ub(73,26),o.Jc(74,B,2,0,"th",24),o.Jc(75,Y,2,1,"td",19),o.Tb(),o.Ub(76,27),o.Jc(77,Z,2,0,"th",24),o.Jc(78,ee,2,1,"td",19),o.Tb(),o.Ub(79,28),o.Jc(80,te,1,0,"th",24),o.Jc(81,ie,11,0,"td",19),o.Tb(),o.Jc(82,se,1,0,"tr",29),o.Jc(83,ae,1,0,"tr",30),o.Vb(),o.Vb(),o.Rb(84,"mat-paginator",31,32),o.Vb()),2&e&&(o.Db(19),o.pc("formControl",t.object),o.Db(4),o.pc("formControl",t.message),o.Db(4),o.pc("formControl",t.idUser),o.Db(1),o.pc("ngForOf",o.kc(29,13,t.users)),o.Db(5),o.pc("formControl",t.senderName),o.Db(4),o.pc("formControl",t.idReceiver),o.Db(1),o.pc("ngForOf",o.kc(39,15,t.receivers)),o.Db(13),o.pc("ngIf",t.isLoadingResults),o.Db(2),o.pc("dataSource",t.dataSource),o.Db(29),o.pc("matHeaderRowDef",t.displayedColumns),o.Db(1),o.pc("matRowDefColumns",t.displayedColumns),o.Db(1),o.pc("length",t.resultsLength)("pageSizeOptions",o.qc(17,ce)))},directives:[W.a,J.a,O.a,O.c,O.e,O.f,O.d,m.a,h.c,h.f,p.b,r.b,r.r,r.m,r.f,V.a,s.m,s.n,M.j,k.a,M.c,M.e,M.b,M.g,M.i,R.a,v.o,N.b,M.d,k.b,M.a,M.f,M.h],pipes:[s.b,s.e],styles:["img[_ngcontent-%COMP%]{height:60px;width:60px;padding:3px}"]}),e})()}];let ne=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[a.h.forChild(oe)],a.h]}),e})();var re=i("tk/3"),be=i("2thQ"),le=i("lOAm"),de=i("Fr4G"),ue=i("67nL");let me=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[s.c,ne,re.c,be.a,r.i,r.q,le.a,de.a,ue.a]]}),e})()}}]);