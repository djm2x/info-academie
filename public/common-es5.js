!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5WMv":function(t,i,s){"use strict";s.d(i,"a",(function(){return h}));var r=s("mrSG"),o=s("XNiG"),a=s("fXoL"),c=s("rdAd"),l=s("bTqV"),u=s("NFeN"),f=s("ofXK");function m(e,t){if(1&e){var n=a.Vb();a.Ub(0,"div",8),a.Ub(1,"img",9,10),a.bc("error",(function(){a.zc(n);var e=a.xc(2);return a.fc(2).imgError(e)})),a.Tb(),a.Ub(3,"button",11),a.bc("click",(function(){a.zc(n);var e=t.$implicit;return a.fc(2).removeFromImages(e.name)})),a.Ub(4,"mat-icon",12),a.Kc(5,"delete_sweep"),a.Tb(),a.Tb(),a.Tb()}if(2&e){var i=t.$implicit;a.Cb(1),a.mc("src",i.image,a.Bc)}}function p(e,t){if(1&e&&(a.Sb(0,6),a.Ic(1,m,6,1,"div",7),a.Rb()),2&e){var n=a.fc();a.Cb(1),a.mc("ngForOf",n.Images)}}function d(e,t){if(1&e){var n=a.Vb();a.Ub(0,"img",9,10),a.bc("error",(function(){a.zc(n);var e=a.xc(1);return a.fc().imgError(e)})),a.Tb(),a.Ub(2,"button",11),a.bc("click",(function(){a.zc(n);var e=a.fc();return e.remove(e.oneImage)})),a.Ub(3,"mat-icon",12),a.Kc(4,"delete_sweep"),a.Tb(),a.Tb()}if(2&e){var i=a.fc();a.mc("src",i.oneImage,a.Bc)}}var h=function(){var t=function(){function t(n,i){e(this,t),this.filesService=n,this.url=i,this.listOfNames=[],this.imagesToShow=[],this.listToDelete=[],this.files=[],this.nameBtn="",this.folderToSaveInServer="folder",this.multiple=!1,this.oneImage="assets/404.jpg",this.Images=[],this.propertyOfParent=new o.a,this.eventSubmitToParent=new o.a,this.eventSubmitFromParent=new o.a}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.propertyOfParent.subscribe((function(t){if(t){var n=t.split(";");if(n.pop(),e.listOfNames=n,e.listToDelete=[],console.log(n),e.multiple)n.forEach((function(t,n){var i=t;if(null!==i&&i.startsWith("http"))e.Images[n]={name:i,image:i};else if(i){var s="".concat(e.url,"/").concat(e.folderToSaveInServer.replace("_","/"),"/").concat(i);e.Images[n]={name:s,image:s}}else e.Images[n]={name:"assets/404.jpg",image:"assets/404.jpg"}}));else{var i=0!==n.length?n[0]:null;e.oneImage=null!==i&&i.startsWith("http")?i:i?"".concat(e.url,"/").concat(e.folderToSaveInServer,"/").concat(i):"assets/404.jpg"}}})),this.eventSubmitFromParent.subscribe((function(t){return Object(r.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.submit(t);case 2:case"end":return e.stop()}}),e,this)})))}))}},{key:"upload",value:function(e){var t=this;if(this.multiple)for(var n=0;n<e.length;n++){var i=e.item(n);this.listOfNames.push(this.setFileName(i)),this.sendPropertyOfParent(),this.files.push(i),this.files.forEach((function(e,n){var i=new FileReader;i.onload=function(){-1===t.Images.findIndex((function(n){return t.setFileName(e).includes(n.name)}))&&t.Images.push({name:t.setFileName(e),image:i.result.toString()})},i.readAsDataURL(e)}))}else{var s=e.item(0);this.listOfNames=[],this.listOfNames.push(this.setFileName(s)),this.sendPropertyOfParent(),this.files=[],this.files.push(s),this.handleFileInput(s)}}},{key:"fileToImageFrom",value:function(){}},{key:"handleFileInput",value:function(e){var t=this,n=new FileReader;n.onload=function(){return t.oneImage=n.result.toString()},n.readAsDataURL(e)}},{key:"imgError",value:function(e){e.src="assets/404.jpg"}},{key:"setIcon",value:function(e){var t=e.lastIndexOf("."),n=e.substring(t+1);return"pdf"===n||"pdf;"===n?"assets/svg/pdf.svg":"assets/svg/word.svg"}},{key:"removeFromImages",value:function(e){var t=this.Images.findIndex((function(t){return e.includes(t.name)}));this.Images.splice(t,1);var n=this.listOfNames.findIndex((function(t){return e.includes(t)}));this.listToDelete.push(this.listOfNames[n]),-1!==n&&(this.listOfNames.splice(n,1),this.sendPropertyOfParent());var i=e.indexOf("_"),s=e.substring(i);-1!==this.files.findIndex((function(e){return e.name===s}))&&this.files.splice(n,1)}},{key:"remove",value:function(e){var t=this.listOfNames.findIndex((function(t){return e.includes(t)}));this.listToDelete.push(this.listOfNames[t]),-1!==t&&(this.listOfNames.splice(t,1),this.sendPropertyOfParent());var n=e.indexOf("_"),i=e.substring(n);-1!==this.files.findIndex((function(e){return e.name===i}))&&this.files.splice(t,1),this.oneImage="assets/404.jpg"}},{key:"openInput",value:function(e){e.click()}},{key:"sendPropertyOfParent",value:function(){var e="";this.listOfNames.forEach((function(t){e+=t+";"})),this.eventSubmitToParent.next(e)}},{key:"submit",value:function(e){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,s,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new FormData,this.files.forEach((function(e){var t=r.setFileName(e);n.append("file",e,t),console.log(e)})),!n){t.next=10;break}return e.id&&!this.folderToSaveInServer.includes("_")&&(this.folderToSaveInServer="".concat(this.folderToSaveInServer,"_").concat(e.id)),t.next=5,this.filesService.uploadFiles(n,this.folderToSaveInServer).toPromise();case 5:return i=t.sent,t.next=8,this.filesService.deleteFiles(this.listToDelete,this.folderToSaveInServer).toPromise();case 8:s=t.sent,console.log(i,s);case 10:case"end":return t.stop()}}),t,this)})))}},{key:"setFileName",value:function(e){return"".concat(e.lastModified,"_").concat(e.name)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Ob(c.a),a.Ob("BASE_URL"))},t.\u0275cmp=a.Ib({type:t,selectors:[["app-upload-image"]],inputs:{nameBtn:"nameBtn",folderToSaveInServer:"folderToSaveInServer",multiple:"multiple",propertyOfParent:"propertyOfParent",eventSubmitToParent:"eventSubmitToParent",eventSubmitFromParent:"eventSubmitFromParent"},decls:11,vars:3,consts:[[1,"d-flex","mb-3","align-items-center"],["hidden","","multiple","","accept","image/*","type","file",3,"change"],["file1",""],["mat-raised-button","","type","button","color","accent",2,"height","fit-content",3,"click"],["class","ml-3",4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"ml-3"],["style","font-size: .7em;margin: 0;",4,"ngFor","ngForOf"],[2,"font-size",".7em","margin","0"],[2,"width","70px","height","70px",3,"src","error"],["img",""],["mat-icon-button","","color","warn","type","button",3,"click"],[2,"font-size","1.3em !important"]],template:function(e,t){if(1&e){var n=a.Vb();a.Ub(0,"div",0),a.Ub(1,"input",1,2),a.bc("change",(function(e){return t.upload(e.target.files)})),a.Tb(),a.Ub(3,"button",3),a.bc("click",(function(){a.zc(n);var e=a.xc(2);return t.openInput(e)})),a.Ub(4,"mat-icon"),a.Kc(5,"add"),a.Tb(),a.Kc(6),a.Tb(),a.Kc(7," \xa0\xa0 "),a.Ic(8,p,2,1,"ng-container",4),a.Ic(9,d,5,1,"ng-template",null,5,a.Jc),a.Tb()}if(2&e){var i=a.xc(10);a.Cb(6),a.Mc(" ",t.nameBtn," "),a.Cb(2),a.mc("ngIf",t.multiple)("ngIfElse",i)}},directives:[l.a,u.a,f.n,f.m],styles:["img[_ngcontent-%COMP%]{height:20px}"]}),t}()},"5nPQ":function(t,i,s){"use strict";s.d(i,"a",(function(){return F}));var r=s("mrSG"),o=s("XNiG"),a=s("tk/3"),c=s("2ChS"),l=s("Cfvw"),u=s("lJxs"),f=s("0EUg"),m=s("fXoL"),p=s("rdAd"),d=s("MutI"),h=s("bTqV"),b=s("NFeN"),v=s("ofXK"),g=s("FKr1"),T=s("bv9b");function y(e,t){if(1&e&&(m.Ub(0,"div"),m.Ub(1,"a",2),m.Ub(2,"div",3),m.Ub(3,"div",4),m.Ub(4,"p",5),m.Kc(5),m.Tb(),m.Ub(6,"span",6),m.Kc(7),m.gc(8,"async"),m.Tb(),m.Tb(),m.Pb(9,"mat-progress-bar",7),m.gc(10,"async"),m.Tb(),m.Tb(),m.Tb()),2&e){var n=t.$implicit;m.Cb(5),m.Mc("- ",n.name,""),m.Cb(2),m.Mc("",m.hc(8,3,n.progressValue)," %"),m.Cb(2),m.mc("value",m.hc(10,5,n.progressValue))}}var I,O=((I=function(){function t(n,i,s){e(this,t),this.bottomSheetRef=n,this.data=i,this.service=s,this.files=[],this.folder="",this.list=[],this.uploadCompleted=0}return n(t,[{key:"ngOnInit",value:function(){try{this.handleUpload()}catch(e){console.warn(e)}}},{key:"handleUpload",value:function(){var e=this;this.files=this.data.files,0===this.files.length&&this.bottomSheetRef.dismiss("."),this.folder=this.data.folder;var t=new FormData,n=[];this.list=[],this.files.forEach((function(i,s){var r="".concat(i.size,"_").concat(i.lastModified,"_").concat(i.name);e.list.push({fileId:i.size+i.lastModified,name:i.name,progressValue:new o.a}),t.append("file_"+s,i,r),n.push(e.service.uploadFiles(t,e.folder).pipe(Object(u.a)((function(t){return e.getEventMessage(t,i)}))))})),t.append("length",""+this.files.length),Object(l.a)(n).pipe(Object(f.a)()).subscribe((function(t){e.list.length===e.uploadCompleted&&(setTimeout((function(){e.bottomSheetRef.dismiss(".")}),500),console.log(t))}))}},{key:"updateListOfProgress",value:function(e,t){var n=this.list.findIndex((function(t){return+t.fileId==+e}));n>-1&&this.list[n].progressValue.next(t)}},{key:"trackFn",value:function(e,t){return t.progressValue}},{key:"getEventMessage",value:function(e,t){switch(e.type){case a.e.Sent:return'Uploading file "'.concat(t.name.substring(0,10),'" of size ').concat(t.size,".");case a.e.UploadProgress:var n=Math.round(100*e.loaded/e.total);return this.updateListOfProgress(t.size+t.lastModified,n),'File "'.concat(t.name.substring(0,10),'" is ').concat(n,"% uploaded.");case a.e.Response:return this.uploadCompleted++,'File "'.concat(t.name.substring(0,10),'" was completely uploaded!');default:return'File "'.concat(t.name.substring(0,10),'" surprising upload event: ').concat(e,".")}}}]),t}()).\u0275fac=function(e){return new(e||I)(m.Ob(c.e),m.Ob(c.a),m.Ob(p.a))},I.\u0275cmp=m.Ib({type:I,selectors:[["app-progress"]],decls:5,vars:2,consts:[["mat-icon-button","","color","warn",3,"click"],[4,"ngFor","ngForOf","ngForTrackBy"],["mat-list-item",""],[2,"width","100%"],[1,"space-between"],["mat-line","",2,"font-size",".8em"],[2,"font-size",".8em"],["mode","determinate",3,"value"]],template:function(e,t){1&e&&(m.Ub(0,"mat-nav-list"),m.Ub(1,"button",0),m.bc("click",(function(){return t.bottomSheetRef.dismiss(".")})),m.Ub(2,"mat-icon"),m.Kc(3,"highlight_off"),m.Tb(),m.Tb(),m.Ic(4,y,11,7,"div",1),m.Tb()),2&e&&(m.Cb(4),m.mc("ngForOf",t.list)("ngForTrackBy",t.trackFn))},directives:[d.c,h.a,b.a,v.m,d.a,g.l,T.a],pipes:[v.b],styles:[".space-between[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]}),I);function S(e,t){if(1&e){var n=m.Vb();m.Ub(0,"button",5),m.bc("click",(function(){return m.zc(n),m.fc().submit(null)})),m.Ub(1,"mat-icon"),m.Kc(2,"add"),m.Tb(),m.Kc(3," Submit "),m.Tb()}if(2&e){var i=m.fc();m.mc("color",i.color)}}function w(e,t){if(1&e){var n=m.Vb();m.Ub(0,"p",8),m.Ub(1,"span"),m.Kc(2),m.Tb(),m.Ub(3,"button",9),m.bc("click",(function(){m.zc(n);var e=t.$implicit;return m.fc().remove(e)})),m.Ub(4,"mat-icon",10),m.Kc(5,"delete_sweep"),m.Tb(),m.Tb(),m.Tb()}if(2&e){var i=t.$implicit;m.Cb(2),m.Mc("- ",i.substring(14),"")}}var k,F=((k=function(){function t(n,i){e(this,t),this.service=n,this.bottomSheet=i,this.accepts={doc:"application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",video:"video/mp4,video/*",audio:"audio/*",image:"image/*",doc2:".pdf,.doc,.docx"},this.listOfNames=[],this.listToDelete=[],this.files=[],this.nameBtn="",this.color="",this.accept="doc",this.config={multiple:!0,showSubmitButton:!0,folderToSaveInServer:"folder",propertyStringToParent:new o.a,propertyStringToUploader:new o.a,eventSubmitToUploader:new o.a}}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.config.propertyStringToUploader.subscribe((function(t){if(t){var n=t.split(";");n.pop(),e.listOfNames=n,e.listToDelete=[]}})),this.config.eventSubmitToUploader.subscribe((function(t){return Object(r.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.submit(t);case 2:case"end":return e.stop()}}),e,this)})))}))}},{key:"upload",value:function(e){for(var t=0;t<e.length;t++){var n=e.item(t);this.config.multiple?this.listOfNames.push(this.setFileName(n)):(this.listToDelete.push(this.listOfNames[0]),this.listOfNames=[this.setFileName(n)]),this.sendPropertyOfParent(),this.files.push(n)}}},{key:"setIcon",value:function(e){var t=e.lastIndexOf("."),n=e.substring(t+1);return"pdf"===n||"pdf;"===n?"assets/svg/pdf.svg":"assets/svg/word.svg"}},{key:"remove",value:function(e){var t=this.listOfNames.findIndex((function(t){return t===e}));-1!==t&&(this.listOfNames.splice(t,1),this.sendPropertyOfParent()),this.listToDelete.push(e);var n=e.indexOf("_"),i=e.substring(n);-1!==this.files.findIndex((function(e){return e.name===i}))&&this.files.splice(t,1)}},{key:"openInput",value:function(e){e.click()}},{key:"sendPropertyOfParent",value:function(){var e="";this.listOfNames.forEach((function(t){e+=t+";"})),this.config.propertyStringToParent.next(e)}},{key:"submit",value:function(e){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.id&&!this.config.folderToSaveInServer.includes("_")&&(this.config.folderToSaveInServer="".concat(this.config.folderToSaveInServer,"_").concat(e.id)),this.bottomSheet.open(O,{data:{files:this.files,folder:this.config.folderToSaveInServer},panelClass:"my-component-bottom-sheet"}).afterDismissed().subscribe((function(e){return Object(r.b)(n,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Bottom sheet has been dismissed ",e),t.next=3,this.service.deleteFiles(this.listToDelete,this.config.folderToSaveInServer).toPromise();case 3:n=t.sent,console.log(n);case 5:case"end":return t.stop()}}),t,this)})))}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"setFileName",value:function(e){return"".concat(e.size,"_").concat(e.lastModified,"_").concat(e.name)}}]),t}()).\u0275fac=function(e){return new(e||k)(m.Ob(p.a),m.Ob(c.c))},k.\u0275cmp=m.Ib({type:k,selectors:[["app-upload"]],inputs:{nameBtn:"nameBtn",color:"color",accept:"accept",config:"config"},decls:13,vars:6,consts:[[1,"row"],[1,"col-md-12","mb-3"],[1,"myrow"],["hidden","","type","file",3,"accept","multiple","change"],["e",""],["mat-raised-button","","type","button",3,"color","click"],["mat-raised-button","","type","button",3,"color","click",4,"ngIf"],["style","font-size: .7em;margin: 0;",4,"ngFor","ngForOf"],[2,"font-size",".7em","margin","0"],["mat-icon-button","","color","warn","type","button",3,"click"],[2,"font-size","1.3em !important"]],template:function(e,t){if(1&e){var n=m.Vb();m.Ub(0,"div",0),m.Ub(1,"div",1),m.Ub(2,"div",2),m.Ub(3,"input",3,4),m.bc("change",(function(){m.zc(n);var e=m.xc(4);return t.upload(e.files)})),m.Tb(),m.Ub(5,"button",5),m.bc("click",(function(){m.zc(n);var e=m.xc(4);return t.openInput(e)})),m.Ub(6,"mat-icon"),m.Kc(7,"add"),m.Tb(),m.Kc(8),m.Tb(),m.Ic(9,S,4,1,"button",6),m.Kc(10," \xa0\xa0 "),m.Ub(11,"div",2),m.Ic(12,w,6,1,"p",7),m.Tb(),m.Tb(),m.Tb(),m.Tb()}2&e&&(m.Cb(3),m.mc("accept",t.accepts[t.accept])("multiple",t.config.multiple),m.Cb(2),m.mc("color",t.color),m.Cb(3),m.Mc(" ",t.nameBtn," "),m.Cb(1),m.mc("ngIf",t.config.showSubmitButton),m.Cb(3),m.mc("ngForOf",t.listOfNames))},directives:[h.a,b.a,v.n,v.m],styles:[".my-component-bottom-sheet{min-width:80vw!important}"]}),k)},"8lcG":function(t,n,i){"use strict";i.d(n,"a",(function(){return r}));var s=i("fXoL"),r=function(){var t=function t(){e(this,t),this.name=""};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},lOAm:function(t,n,i){"use strict";i.d(n,"a",(function(){return a}));var s=i("ofXK"),r=i("2thQ"),o=i("fXoL"),a=function(){var t=function t(){e(this,t)};return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[s.c,r.a]]}),t}()}}])}();