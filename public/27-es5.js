!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],o=!0,i=!1,n=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(c){i=!0,n=c}finally{try{o||null==s.return||s.return()}finally{if(i)throw n}}return r}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Yj9t:function(t,o,n){"use strict";n.r(o),n.d(o,"AuthModule",function(){return _});var a=n("ofXK"),s=n("tyNb"),c=n("mrSG"),u=n("3Pt+"),l=n("V2kc"),m=n("fXoL"),b=n("7q3A"),d=n("M0ag"),f=n("0kbX"),h=n("Wp6s"),p=n("kmnG"),g=n("qFsG"),y=n("NFeN"),v=n("bTqV");function w(e,t){1&e&&(m.Ub(0,"mat-error"),m.Kc(1,"Email non valide"),m.Tb())}var k,C,E=function(){return["/auth/create"]},T=((C=function(){function e(t,o,i,n,a,s,c){r(this,e),this.fb=t,this.uow=o,this.router=i,this.session=n,this.route=a,this.snackBar=s,this.url=c,this.o=new l.p,this.hide=!0,this.profil=!0,this.code=""}return i(e,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.o.email=(this.profil?"prof":"student")+"@angular.io",this.o.password="123",this.createForm(),this.code=this.route.snapshot.paramMap.get("code"),this.code&&""!==this.code&&this.submitCodeCommingFromEmail();case 1:case"end":return e.stop()}},e,this)}))}},{key:"changeProfil",value:function(){this.profil=!this.profil,this.myForm.get("email").setValue(this.profil?"prof@angular.io":"student@angular.io")}},{key:"createForm",value:function(){this.myForm=this.fb.group({email:[this.o.email,[u.u.required,u.u.email]],password:[this.o.password,[u.u.required]]})}},{key:"submit",value:function(e){var t=this;this.uow.accounts.login(e).subscribe(function(e){e.code<0?t.snackBar.notifyAlert(400,e.message):(t.snackBar.notifyOk(200,e.message),t.session.doSignIn(e.user,e.child,e.token),t.router.navigate(["/admin"]))})}},{key:"submitCodeCommingFromEmail",value:function(){var e=this;this.uow.accounts.activeAccount(this.code).subscribe(function(t){t.code<0?e.snackBar.notifyAlert(400,t.message):(e.snackBar.notifyOk(200,t.message),e.session.doSignIn(t.user,t.child,t.token),e.router.navigate(["/admin"]))})}},{key:"resetForm",value:function(){this.o=new l.p,this.createForm()}},{key:"ngOnDestroy",value:function(){console.log("ngOnDestroy")}},{key:"email",get:function(){return this.myForm.get("email")}},{key:"password",get:function(){return this.myForm.get("password")}},{key:"emailError",get:function(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}},{key:"passwordError",get:function(){return this.password.hasError("required")?"You must enter a value":""}}]),e}()).\u0275fac=function(e){return new(e||C)(m.Ob(u.e),m.Ob(b.a),m.Ob(s.e),m.Ob(d.a),m.Ob(s.a),m.Ob(f.a),m.Ob("BASE_URL"))},C.\u0275cmp=m.Ib({type:C,selectors:[["app-login"]],decls:30,vars:9,consts:[[1,"row","justify-content-center","align-items-center","m-0","pl-2","pr-2",2,"height","100vh"],[1,"mat-elevation-z8","mywith"],[3,"formGroup","ngSubmit"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],["src","assets/icon.jpg","alt","logo",1,"mb-4","mt-3",2,"height","200px"],[2,"text-align","center"],[1,""],["appearance","fill",1,"col-md-12","p-0"],["matInput","","formControlName","email","placeholder","Email address"],[4,"ngIf"],["appearance","fill",1,"col-md-12","p-0","mb-4"],["matInput","","formControlName","password","placeholder","Mot de passe",3,"type"],["matSuffix","",3,"click"],["mat-raised-button","","color","primary","type","submit",1,"col-md-12","mb-2",3,"disabled"],["mat-raised-button","","color","accent","type","button",1,"col-md-12",3,"routerLink"],["target","_blank","rel","noopener noreferrer",1,"mt-3","mat-raised-button","mat-button-base",3,"href"],[1,"d-flex","flex-row-reverse","mt-2","mb-2"],[2,"cursor","pointer","color","black",3,"click"]],template:function(e,t){1&e&&(m.Ub(0,"div",0),m.Ub(1,"mat-card",1),m.Ub(2,"form",2),m.bc("ngSubmit",function(){return t.submit(t.myForm.value)}),m.Ub(3,"div",3),m.Pb(4,"img",4),m.Ub(5,"h2",5),m.Kc(6,"Info-academie"),m.Tb(),m.Ub(7,"div",6),m.Ub(8,"mat-form-field",7),m.Ub(9,"mat-label"),m.Kc(10,"Email"),m.Tb(),m.Pb(11,"input",8),m.Ic(12,w,2,0,"mat-error",9),m.Tb(),m.Ub(13,"mat-form-field",10),m.Ub(14,"mat-label"),m.Kc(15,"Mot de passe"),m.Tb(),m.Pb(16,"input",11),m.Ub(17,"mat-icon",12),m.bc("click",function(){return t.hide=!t.hide}),m.Kc(18),m.Tb(),m.Tb(),m.Ub(19,"button",13),m.Kc(20,"Connexion"),m.Tb(),m.Ub(21,"button",14),m.Kc(22,"Inscription"),m.Tb(),m.Ub(23,"a",15),m.Kc(24," Vers le site "),m.Tb(),m.Ub(25,"div",16),m.Ub(26,"span",17),m.bc("click",function(){return t.changeProfil()}),m.Kc(27," teste avec un "),m.Ub(28,"b"),m.Kc(29),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&e&&(m.Cb(2),m.mc("formGroup",t.myForm),m.Cb(10),m.mc("ngIf",t.myForm.get("email").invalid),m.Cb(4),m.mc("type",t.hide?"password":"text"),m.Cb(2),m.Mc("",t.hide?"visibility_off":"visibility"," "),m.Cb(1),m.mc("disabled",t.myForm.invalid),m.Cb(2),m.mc("routerLink",m.nc(8,E)),m.Cb(2),m.mc("href",t.url,m.Bc),m.Cb(6),m.Lc(t.profil?"Student":"Prof"))},directives:[h.a,u.v,u.p,u.i,p.c,p.f,g.b,u.c,u.o,u.h,a.n,y.a,p.g,v.a,s.f,p.b],styles:["@media screen and (min-width:600px){.mywith[_ngcontent-%COMP%]{width:35rem}}"]}),C),U=((k=function(){function e(){r(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=m.Ib({type:k,selectors:[["app-auth"]],decls:1,vars:0,template:function(e,t){1&e&&m.Pb(0,"router-outlet")},directives:[s.i],styles:[".row[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:50%;height:100vh;width:100vw}@media screen and (min-width:600px){.mywith[_ngcontent-%COMP%]{width:35rem}}"]}),k);function I(e,t){1&e&&(m.Ub(0,"mat-error"),m.Kc(1,"Email non valide"),m.Tb())}function P(e,t){if(1&e&&(m.Ub(0,"mat-error"),m.Kc(1),m.Tb()),2&e){var r=m.fc(2);m.Cb(1),m.Lc(r.passwordError)}}function O(e,t){if(1&e){var r=m.Vb();m.Ub(0,"mat-form-field",3),m.Ub(1,"mat-label"),m.Kc(2,"Mot de passe"),m.Tb(),m.Pb(3,"input",12),m.Ub(4,"mat-icon",13),m.bc("click",function(){m.zc(r);var e=m.fc();return e.hide=!e.hide}),m.Kc(5),m.Tb(),m.Ic(6,P,2,1,"mat-error",5),m.Tb()}if(2&e){var o=m.fc();m.Cb(3),m.mc("type",o.hide?"password":"text"),m.Cb(2),m.Mc("",o.hide?"visibility_off":"visibility"," "),m.Cb(1),m.mc("ngIf",o.passwordError)}}function F(e,t){if(1&e&&(m.Ub(0,"mat-error"),m.Kc(1),m.Tb()),2&e){var r=m.fc(2);m.Cb(1),m.Lc(r.checkPasswordError)}}function x(e,t){if(1&e){var r=m.Vb();m.Ub(0,"mat-form-field",14),m.Ub(1,"mat-label"),m.Kc(2,"R\xe9p\xe9ter le mot de pass"),m.Tb(),m.Pb(3,"input",15),m.Ub(4,"mat-icon",13),m.bc("click",function(){m.zc(r);var e=m.fc();return e.hide2=!e.hide2}),m.Kc(5),m.Tb(),m.Ic(6,F,2,1,"mat-error",5),m.Tb()}if(2&e){var o=m.fc();m.Cb(3),m.mc("formControl",o.checkPassword)("type",o.hide2?"password":"text"),m.Cb(2),m.Mc("",o.hide2?"visibility_off":"visibility"," "),m.Cb(1),m.mc("ngIf",o.checkPassword.touched&&o.checkPasswordError)}}var K,M,S,A=function(){return["/auth/create"]},L=function(){return["/auth/login"]},j=((K=function(){function t(e,o,i,n,a,s){r(this,t),this.fb=e,this.uow=o,this.router=i,this.session=n,this.route=a,this.snackBar=s,this.o=new l.p,this.code="",this.hide=!0,this.hide2=!0,this.checkPassword=new u.f("",[u.u.required]),this.isEmailChecked=!1}return i(t,[{key:"ngOnInit",value:function(){if(this.code=this.route.snapshot.paramMap.get("code"),this.code){var t=e(atob(this.code).split("*"),3),r=t[0];t[1],t[2],this.o.email=r,this.isEmailChecked=!0}this.createForm()}},{key:"createForm",value:function(){this.myForm=this.fb.group({email:[this.o.email,[u.u.required,u.u.email]],password:[this.o.password,this.isEmailChecked?[u.u.required]:[]]})}},{key:"sendEmailForResetPassword",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.uow.accounts.sendEmailForResetPassword(e,"auth%2Freset","fr").subscribe(function(e){-1===e.code?(console.log(e.message),r.snackBar.notifyAlert(400,e.message)):(console.log(e.message),r.snackBar.notifyOk(200,e.message),r.router.navigate(["/auth/login"]))},function(e){console.log(e.error)});case 1:case"end":return t.stop()}},t,this)}))}},{key:"resetPassword",value:function(e){var t=this;this.uow.accounts.resetPassword({email:this.o.email,password:e}).subscribe(function(e){-1===e.code?console.log("Email Incorrect"):1===e.code&&(console.log(e.message),t.router.navigate(["/auth/login"]))},function(e){console.log(e.error)})}},{key:"email",get:function(){return this.myForm.get("email")}},{key:"password",get:function(){return this.myForm.get("password")}},{key:"emailError",get:function(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}},{key:"passwordError",get:function(){return this.password.hasError("required")?"You must enter a value":""}},{key:"checkPasswordError",get:function(){return this.checkPassword.hasError("required")?"You must enter a value":this.checkPassword.value!==this.password.value?"les mot de pass sont pas les m\xeame":""}}]),t}()).\u0275fac=function(e){return new(e||K)(m.Ob(u.e),m.Ob(b.a),m.Ob(s.e),m.Ob(d.a),m.Ob(s.a),m.Ob(f.a))},K.\u0275cmp=m.Ib({type:K,selectors:[["app-reset"]],decls:19,vars:9,consts:[[3,"formGroup"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,""],["appearance","fill",1,"col-md-12","p-0"],["matInput","","formControlName","email","placeholder","Email address","[]","isEmailChecked"],[4,"ngIf"],["appearance","fill","class","col-md-12 p-0",4,"ngIf"],["appearance","fill","class","col-md-12 p-0 mb-4",4,"ngIf"],["mat-raised-button","","color","primary",1,"col-md-12","mb-2",3,"disabled","click"],["mat-raised-button","","color","accent","type","button",1,"col-md-12",3,"routerLink"],[1,"d-flex","flex-row-reverse","mt-2","mb-2","text-muted"],[2,"cursor","pointer",3,"routerLink"],["matInput","","formControlName","password","placeholder","Mot de passe",3,"type"],["matSuffix","",3,"click"],["appearance","fill",1,"col-md-12","p-0","mb-4"],["matInput","","placeholder","R\xe9p\xe9ter le mot de pass",3,"formControl","type"]],template:function(e,t){1&e&&(m.Ub(0,"form",0),m.Ub(1,"mat-card-content",1),m.Ub(2,"h3"),m.Kc(3,"VEUILLEZ SAISIR VOTRE ADRESSE EMAIL"),m.Tb(),m.Ub(4,"div",2),m.Ub(5,"mat-form-field",3),m.Ub(6,"mat-label"),m.Kc(7,"Email"),m.Tb(),m.Pb(8,"input",4),m.Ic(9,I,2,0,"mat-error",5),m.Tb(),m.Ic(10,O,7,3,"mat-form-field",6),m.Ic(11,x,7,4,"mat-form-field",7),m.Ub(12,"button",8),m.bc("click",function(){return t.isEmailChecked?t.resetPassword(t.checkPassword.value):t.sendEmailForResetPassword(t.email.value)}),m.Kc(13," R\xe9initialiser "),m.Tb(),m.Ub(14,"button",9),m.Kc(15," Inscription "),m.Tb(),m.Ub(16,"div",10),m.Ub(17,"span",11),m.Kc(18,"Connexion ?"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&e&&(m.mc("formGroup",t.myForm),m.Cb(9),m.mc("ngIf",t.emailError),m.Cb(1),m.mc("ngIf",t.isEmailChecked),m.Cb(1),m.mc("ngIf",t.isEmailChecked),m.Cb(1),m.mc("disabled",t.myForm.invalid||t.isEmailChecked&&""!==t.checkPasswordError),m.Cb(2),m.mc("routerLink",m.nc(7,A)),m.Cb(3),m.mc("routerLink",m.nc(8,L)))},directives:[u.v,u.p,u.i,h.c,p.c,p.f,g.b,u.c,u.o,u.h,a.n,v.a,s.f,p.b,y.a,p.g,u.g],styles:[""]}),K),R=[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:U,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login/:code",component:T},{path:"login",component:T},{path:"create",loadChildren:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,"pUgZ")).then(function(e){return e.CreateModule})},data:{animation:"create"}},{path:"reset/:code",component:j},{path:"reset",component:j}]}],q=((M=function e(){r(this,e)}).\u0275mod=m.Mb({type:M}),M.\u0275inj=m.Lb({factory:function(e){return new(e||M)},imports:[[s.h.forChild(R)],s.h]}),M),B=n("tk/3"),N=n("2thQ"),V=n("sYmb"),_=((S=function e(){r(this,e)}).\u0275mod=m.Mb({type:S}),S.\u0275inj=m.Lb({factory:function(e){return new(e||S)},imports:[[a.c,q,u.j,u.s,B.c,N.a,V.b]]}),S)}}])}();