(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5WMv":function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var s=i("mrSG"),n=i("XNiG"),o=i("fXoL"),c=i("rdAd"),r=i("bTqV"),l=i("NFeN"),a=i("ofXK");function f(e,t){if(1&e){const e=o.Vb();o.Ub(0,"div",8),o.Ub(1,"img",9,10),o.bc("error",(function(){o.zc(e);const t=o.xc(2);return o.fc(2).imgError(t)})),o.Tb(),o.Ub(3,"button",11),o.bc("click",(function(){o.zc(e);const i=t.$implicit;return o.fc(2).removeFromImages(i.name)})),o.Ub(4,"mat-icon",12),o.Kc(5,"delete_sweep"),o.Tb(),o.Tb(),o.Tb()}if(2&e){const e=t.$implicit;o.Cb(1),o.mc("src",e.image,o.Bc)}}function m(e,t){if(1&e&&(o.Sb(0,6),o.Ic(1,f,6,1,"div",7),o.Rb()),2&e){const e=o.fc();o.Cb(1),o.mc("ngForOf",e.Images)}}function d(e,t){if(1&e){const e=o.Vb();o.Ub(0,"img",9,10),o.bc("error",(function(){o.zc(e);const t=o.xc(1);return o.fc().imgError(t)})),o.Tb(),o.Ub(2,"button",11),o.bc("click",(function(){o.zc(e);const t=o.fc();return t.remove(t.oneImage)})),o.Ub(3,"mat-icon",12),o.Kc(4,"delete_sweep"),o.Tb(),o.Tb()}if(2&e){const e=o.fc();o.mc("src",e.oneImage,o.Bc)}}let h=(()=>{class e{constructor(e,t){this.filesService=e,this.url=t,this.listOfNames=[],this.imagesToShow=[],this.listToDelete=[],this.files=[],this.nameBtn="",this.folderToSaveInServer="folder",this.multiple=!1,this.oneImage="assets/404.jpg",this.Images=[],this.propertyOfParent=new n.a,this.eventSubmitToParent=new n.a,this.eventSubmitFromParent=new n.a}ngOnInit(){this.propertyOfParent.subscribe(e=>{if(!e)return;const t=e.split(";");if(t.pop(),this.listOfNames=t,this.listToDelete=[],console.log(t),this.multiple)t.forEach((e,t)=>{const i=e;if(null!==i&&i.startsWith("http"))this.Images[t]={name:i,image:i};else if(i){const e=`${this.url}/${this.folderToSaveInServer.replace("_","/")}/${i}`;this.Images[t]={name:e,image:e}}else this.Images[t]={name:"assets/404.jpg",image:"assets/404.jpg"}});else{const e=0!==t.length?t[0]:null;this.oneImage=null!==e&&e.startsWith("http")?e:e?`${this.url}/${this.folderToSaveInServer}/${e}`:"assets/404.jpg"}}),this.eventSubmitFromParent.subscribe(e=>Object(s.b)(this,void 0,void 0,(function*(){yield this.submit(e)})))}upload(e){if(this.multiple)for(let t=0;t<e.length;t++){const i=e.item(t);this.listOfNames.push(this.setFileName(i)),this.sendPropertyOfParent(),this.files.push(i),this.files.forEach((e,t)=>{const i=new FileReader;i.onload=()=>{-1===this.Images.findIndex(t=>this.setFileName(e).includes(t.name))&&this.Images.push({name:this.setFileName(e),image:i.result.toString()})},i.readAsDataURL(e)})}else{const t=e.item(0);this.listOfNames=[],this.listOfNames.push(this.setFileName(t)),this.sendPropertyOfParent(),this.files=[],this.files.push(t),this.handleFileInput(t)}}fileToImageFrom(){}handleFileInput(e){const t=new FileReader;t.onload=()=>this.oneImage=t.result.toString(),t.readAsDataURL(e)}imgError(e){e.src="assets/404.jpg"}setIcon(e){const t=e.lastIndexOf("."),i=e.substring(t+1);return"pdf"===i||"pdf;"===i?"assets/svg/pdf.svg":"assets/svg/word.svg"}removeFromImages(e){const t=this.Images.findIndex(t=>e.includes(t.name));this.Images.splice(t,1);const i=this.listOfNames.findIndex(t=>e.includes(t));this.listToDelete.push(this.listOfNames[i]),-1!==i&&(this.listOfNames.splice(i,1),this.sendPropertyOfParent());const s=e.indexOf("_"),n=e.substring(s);-1!==this.files.findIndex(e=>e.name===n)&&this.files.splice(i,1)}remove(e){const t=this.listOfNames.findIndex(t=>e.includes(t));this.listToDelete.push(this.listOfNames[t]),-1!==t&&(this.listOfNames.splice(t,1),this.sendPropertyOfParent());const i=e.indexOf("_"),s=e.substring(i);-1!==this.files.findIndex(e=>e.name===s)&&this.files.splice(t,1),this.oneImage="assets/404.jpg"}openInput(e){e.click()}sendPropertyOfParent(){let e="";this.listOfNames.forEach(t=>{e+=t+";"}),this.eventSubmitToParent.next(e)}submit(e){return Object(s.b)(this,void 0,void 0,(function*(){const t=new FormData;if(this.files.forEach(e=>{const i=this.setFileName(e);t.append("file",e,i),console.log(e)}),t){e.id&&!this.folderToSaveInServer.includes("_")&&(this.folderToSaveInServer=`${this.folderToSaveInServer}_${e.id}`);const i=yield this.filesService.uploadFiles(t,this.folderToSaveInServer).toPromise(),s=yield this.filesService.deleteFiles(this.listToDelete,this.folderToSaveInServer).toPromise();console.log(i,s)}}))}setFileName(e){return`${e.lastModified}_${e.name}`}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(c.a),o.Ob("BASE_URL"))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-upload-image"]],inputs:{nameBtn:"nameBtn",folderToSaveInServer:"folderToSaveInServer",multiple:"multiple",propertyOfParent:"propertyOfParent",eventSubmitToParent:"eventSubmitToParent",eventSubmitFromParent:"eventSubmitFromParent"},decls:11,vars:3,consts:[[1,"d-flex","mb-3","align-items-center"],["hidden","","multiple","","accept","image/*","type","file",3,"change"],["file1",""],["mat-raised-button","","type","button","color","accent",2,"height","fit-content",3,"click"],["class","ml-3",4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"ml-3"],["style","font-size: .7em;margin: 0;",4,"ngFor","ngForOf"],[2,"font-size",".7em","margin","0"],[2,"width","70px","height","70px",3,"src","error"],["img",""],["mat-icon-button","","color","warn","type","button",3,"click"],[2,"font-size","1.3em !important"]],template:function(e,t){if(1&e){const e=o.Vb();o.Ub(0,"div",0),o.Ub(1,"input",1,2),o.bc("change",(function(e){return t.upload(e.target.files)})),o.Tb(),o.Ub(3,"button",3),o.bc("click",(function(){o.zc(e);const i=o.xc(2);return t.openInput(i)})),o.Ub(4,"mat-icon"),o.Kc(5,"add"),o.Tb(),o.Kc(6),o.Tb(),o.Kc(7," \xa0\xa0 "),o.Ic(8,m,2,1,"ng-container",4),o.Ic(9,d,5,1,"ng-template",null,5,o.Jc),o.Tb()}if(2&e){const e=o.xc(10);o.Cb(6),o.Mc(" ",t.nameBtn," "),o.Cb(2),o.mc("ngIf",t.multiple)("ngIfElse",e)}},directives:[r.a,l.a,a.n,a.m],styles:["img[_ngcontent-%COMP%]{height:20px}"]}),e})()},"5nPQ":function(e,t,i){"use strict";i.d(t,"a",(function(){return S}));var s=i("mrSG"),n=i("XNiG"),o=i("tk/3"),c=i("2ChS"),r=i("Cfvw"),l=i("lJxs"),a=i("0EUg"),f=i("fXoL"),m=i("rdAd"),d=i("MutI"),h=i("bTqV"),p=i("NFeN"),u=i("ofXK"),b=i("FKr1"),g=i("bv9b");function v(e,t){if(1&e&&(f.Ub(0,"div"),f.Ub(1,"a",2),f.Ub(2,"div",3),f.Ub(3,"div",4),f.Ub(4,"p",5),f.Kc(5),f.Tb(),f.Ub(6,"span",6),f.Kc(7),f.gc(8,"async"),f.Tb(),f.Tb(),f.Pb(9,"mat-progress-bar",7),f.gc(10,"async"),f.Tb(),f.Tb(),f.Tb()),2&e){const e=t.$implicit;f.Cb(5),f.Mc("- ",e.name,""),f.Cb(2),f.Mc("",f.hc(8,3,e.progressValue)," %"),f.Cb(2),f.mc("value",f.hc(10,5,e.progressValue))}}let T=(()=>{class e{constructor(e,t,i){this.bottomSheetRef=e,this.data=t,this.service=i,this.files=[],this.folder="",this.list=[],this.uploadCompleted=0}ngOnInit(){try{this.handleUpload()}catch(e){console.warn(e)}}handleUpload(){this.files=this.data.files,0===this.files.length&&this.bottomSheetRef.dismiss("."),this.folder=this.data.folder;const e=new FormData,t=[];this.list=[],this.files.forEach((i,s)=>{const o=`${i.size}_${i.lastModified}_${i.name}`;this.list.push({fileId:i.size+i.lastModified,name:i.name,progressValue:new n.a}),e.append("file_"+s,i,o),t.push(this.service.uploadFiles(e,this.folder).pipe(Object(l.a)(e=>this.getEventMessage(e,i))))}),e.append("length",""+this.files.length),Object(r.a)(t).pipe(Object(a.a)()).subscribe(e=>{this.list.length===this.uploadCompleted&&(setTimeout(()=>{this.bottomSheetRef.dismiss(".")},500),console.log(e))})}updateListOfProgress(e,t){const i=this.list.findIndex(t=>+t.fileId==+e);i>-1&&this.list[i].progressValue.next(t)}trackFn(e,t){return t.progressValue}getEventMessage(e,t){switch(e.type){case o.e.Sent:return`Uploading file "${t.name.substring(0,10)}" of size ${t.size}.`;case o.e.UploadProgress:const i=Math.round(100*e.loaded/e.total);return this.updateListOfProgress(t.size+t.lastModified,i),`File "${t.name.substring(0,10)}" is ${i}% uploaded.`;case o.e.Response:return this.uploadCompleted++,`File "${t.name.substring(0,10)}" was completely uploaded!`;default:return`File "${t.name.substring(0,10)}" surprising upload event: ${e}.`}}}return e.\u0275fac=function(t){return new(t||e)(f.Ob(c.d),f.Ob(c.a),f.Ob(m.a))},e.\u0275cmp=f.Ib({type:e,selectors:[["app-progress"]],decls:5,vars:2,consts:[["mat-icon-button","","color","warn",3,"click"],[4,"ngFor","ngForOf","ngForTrackBy"],["mat-list-item",""],[2,"width","100%"],[1,"space-between"],["mat-line","",2,"font-size",".8em"],[2,"font-size",".8em"],["mode","determinate",3,"value"]],template:function(e,t){1&e&&(f.Ub(0,"mat-nav-list"),f.Ub(1,"button",0),f.bc("click",(function(){return t.bottomSheetRef.dismiss(".")})),f.Ub(2,"mat-icon"),f.Kc(3,"highlight_off"),f.Tb(),f.Tb(),f.Ic(4,v,11,7,"div",1),f.Tb()),2&e&&(f.Cb(4),f.mc("ngForOf",t.list)("ngForTrackBy",t.trackFn))},directives:[d.c,h.a,p.a,u.m,d.a,b.l,g.a],pipes:[u.b],styles:[".space-between[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]}),e})();function I(e,t){if(1&e){const e=f.Vb();f.Ub(0,"button",5),f.bc("click",(function(){return f.zc(e),f.fc().submit(null)})),f.Ub(1,"mat-icon"),f.Kc(2,"add"),f.Tb(),f.Kc(3," Submit "),f.Tb()}if(2&e){const e=f.fc();f.mc("color",e.color)}}function O(e,t){if(1&e){const e=f.Vb();f.Ub(0,"p",8),f.Ub(1,"span"),f.Kc(2),f.Tb(),f.Ub(3,"button",9),f.bc("click",(function(){f.zc(e);const i=t.$implicit;return f.fc().remove(i)})),f.Ub(4,"mat-icon",10),f.Kc(5,"delete_sweep"),f.Tb(),f.Tb(),f.Tb()}if(2&e){const e=t.$implicit;f.Cb(2),f.Mc("- ",e.substring(14),"")}}let S=(()=>{class e{constructor(e,t){this.service=e,this.bottomSheet=t,this.accepts={doc:"application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",video:"video/mp4,video/*",audio:"audio/*",image:"image/*",doc2:".pdf,.doc,.docx"},this.listOfNames=[],this.listToDelete=[],this.files=[],this.nameBtn="",this.color="",this.accept="doc",this.config={multiple:!0,showSubmitButton:!0,folderToSaveInServer:"folder",propertyStringToParent:new n.a,propertyStringToUploader:new n.a,eventSubmitToUploader:new n.a}}ngOnInit(){this.config.propertyStringToUploader.subscribe(e=>{if(!e)return;const t=e.split(";");t.pop(),this.listOfNames=t,this.listToDelete=[]}),this.config.eventSubmitToUploader.subscribe(e=>Object(s.b)(this,void 0,void 0,(function*(){yield this.submit(e)})))}upload(e){for(let t=0;t<e.length;t++){const i=e.item(t);this.config.multiple?this.listOfNames.push(this.setFileName(i)):(this.listToDelete.push(this.listOfNames[0]),this.listOfNames=[this.setFileName(i)]),this.sendPropertyOfParent(),this.files.push(i)}}setIcon(e){const t=e.lastIndexOf("."),i=e.substring(t+1);return"pdf"===i||"pdf;"===i?"assets/svg/pdf.svg":"assets/svg/word.svg"}remove(e){const t=this.listOfNames.findIndex(t=>t===e);-1!==t&&(this.listOfNames.splice(t,1),this.sendPropertyOfParent()),this.listToDelete.push(e);const i=e.indexOf("_"),s=e.substring(i);-1!==this.files.findIndex(e=>e.name===s)&&this.files.splice(t,1)}openInput(e){e.click()}sendPropertyOfParent(){let e="";this.listOfNames.forEach(t=>{e+=t+";"}),this.config.propertyStringToParent.next(e)}submit(e){return Object(s.b)(this,void 0,void 0,(function*(){e.id&&!this.config.folderToSaveInServer.includes("_")&&(this.config.folderToSaveInServer=`${this.config.folderToSaveInServer}_${e.id}`),this.bottomSheet.open(T,{data:{files:this.files,folder:this.config.folderToSaveInServer},panelClass:"my-component-bottom-sheet"}).afterDismissed().subscribe(e=>Object(s.b)(this,void 0,void 0,(function*(){console.log("Bottom sheet has been dismissed ",e);const t=yield this.service.deleteFiles(this.listToDelete,this.config.folderToSaveInServer).toPromise();console.log(t)})))}))}setFileName(e){return`${e.size}_${e.lastModified}_${e.name}`}}return e.\u0275fac=function(t){return new(t||e)(f.Ob(m.a),f.Ob(c.b))},e.\u0275cmp=f.Ib({type:e,selectors:[["app-upload"]],inputs:{nameBtn:"nameBtn",color:"color",accept:"accept",config:"config"},decls:13,vars:6,consts:[[1,"row"],[1,"col-md-12","mb-3"],[1,"myrow"],["hidden","","type","file",3,"accept","multiple","change"],["e",""],["mat-raised-button","","type","button",3,"color","click"],["mat-raised-button","","type","button",3,"color","click",4,"ngIf"],["style","font-size: .7em;margin: 0;",4,"ngFor","ngForOf"],[2,"font-size",".7em","margin","0"],["mat-icon-button","","color","warn","type","button",3,"click"],[2,"font-size","1.3em !important"]],template:function(e,t){if(1&e){const e=f.Vb();f.Ub(0,"div",0),f.Ub(1,"div",1),f.Ub(2,"div",2),f.Ub(3,"input",3,4),f.bc("change",(function(){f.zc(e);const i=f.xc(4);return t.upload(i.files)})),f.Tb(),f.Ub(5,"button",5),f.bc("click",(function(){f.zc(e);const i=f.xc(4);return t.openInput(i)})),f.Ub(6,"mat-icon"),f.Kc(7,"add"),f.Tb(),f.Kc(8),f.Tb(),f.Ic(9,I,4,1,"button",6),f.Kc(10," \xa0\xa0 "),f.Ub(11,"div",2),f.Ic(12,O,6,1,"p",7),f.Tb(),f.Tb(),f.Tb(),f.Tb()}2&e&&(f.Cb(3),f.mc("accept",t.accepts[t.accept])("multiple",t.config.multiple),f.Cb(2),f.mc("color",t.color),f.Cb(3),f.Mc(" ",t.nameBtn," "),f.Cb(1),f.mc("ngIf",t.config.showSubmitButton),f.Cb(3),f.mc("ngForOf",t.listOfNames))},directives:[h.a,p.a,u.n,u.m],styles:[".my-component-bottom-sheet{min-width:80vw!important}"]}),e})()},ZTdd:function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));var s=i("mrSG"),n=i("2ChS"),o=i("fXoL"),c=i("MutI"),r=i("ofXK"),l=i("FKr1");function a(e,t){if(1&e){const e=o.Vb();o.Ub(0,"a",2),o.bc("click",(function(){o.zc(e);const t=o.fc().$implicit;return o.fc().openLink(t)})),o.Ub(1,"span",3),o.Kc(2),o.Tb(),o.Tb()}if(2&e){const e=o.fc().$implicit;o.Cb(2),o.Mc("- ",e,"")}}function f(e,t){if(1&e&&(o.Ub(0,"div"),o.Ic(1,a,3,1,"a",1),o.Tb()),2&e){const e=t.$implicit;o.Cb(1),o.mc("ngIf",""!==e)}}let m=(()=>{class e{constructor(e,t,i){this.bottomSheetRef=e,this.data=t,this.url=i,this.list=[],this.folder="",this.id=0}ngOnInit(){if(this.data.elementUrl){const e=this.data.elementUrl.split(";");this.id=this.data.id,e.pop(),this.folder=this.data.folder,this.list=e}}openLink(e){return Object(s.b)(this,void 0,void 0,(function*(){e.includes("http")?window.open(e,"_blanc"):window.open(`${this.url}/${this.folder}/${this.id}/${e}`,"_blanc")}))}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(n.d),o.Ob(n.a),o.Ob("BASE_URL"))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-download-sheet"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],["mat-list-item","",3,"click",4,"ngIf"],["mat-list-item","",3,"click"],["mat-line",""]],template:function(e,t){1&e&&(o.Ub(0,"mat-nav-list"),o.Ic(1,f,2,1,"div",0),o.Tb()),2&e&&(o.Cb(1),o.mc("ngForOf",t.list))},directives:[c.c,r.m,r.n,c.a,l.l],styles:[""]}),e})()}}]);