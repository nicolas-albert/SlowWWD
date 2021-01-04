import { Component }																	from '@angular/core';
import { DomSanitizer }                 												from '@angular/platform-browser';
import { IonicPage, NavParams, LoadingController, MenuController, Platform, Events}		from 'ionic-angular';
import { AlertController, ActionSheetController, ModalController }						from 'ionic-angular';
import { C8oPage, C8oPageBase, C8oRouter, C8oCafUtils }                      			from 'c8ocaf';
import { C8oNetworkStatus }                                 							from 'c8osdkangular';
import { ChangeDetectorRef, ChangeDetectionStrategy, InjectionToken, Injector, Type}	from "@angular/core";
import { TranslateService }                                 							from '@ngx-translate/core';
import { ActionBeans } 																	from '../../services/actionbeans.service';

/*
	You can customize your page class by writing code between the :
   		Begin_c8o_XXXX and
   		End_c8o_XXXX
   	Comments.
   	Any code placed outside these these comments will be lost when the application is generated
*/
import * as ts from 'typescript';
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import * as namer from 'color-namer';


/*Begin_c8o_PageImport*/
import { sha256 } from 'js-sha256';
import { ToastController } from 'ionic-angular';
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'path-to-createpwa', defaultHistory: []})
@Component({selector: 'page-createpwa', templateUrl: 'createpwa.html', changeDetection: ChangeDetectionStrategy.Default})
export class CreatePwa extends C8oPage  {
	
	@ViewChildren("ElseBlock_1603808476027") public all_ElseBlock_1603808476027 : QueryList<any>;
	@ViewChild("ElseBlock_1603808476027") public ElseBlock_1603808476027;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "CreatePwa";
	/*Begin_c8o_PageDeclaration*/
	public form;
	public pwa;
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		
		/*Begin_c8o_PageConstructor*/
		this.form = this.navParams.data.form;
		
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	
	// create id
	public showToast(msg){
	    let toastC = this.getInstance(ToastController);
        let toast = toastC.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
          });
        toast.present();
	}
	
	public makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
	
	public detectContentType(base64Content) {
        // base64 encoded data doesn't contain commas    
       let base64ContentArray = base64Content.split(",")
       // base64 content cannot contain whitespaces but nevertheless skip if there are!
       return [base64ContentArray[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0], base64ContentArray[1]];
    }
	
	public b64toBlob(b64Data, contentType='', sliceSize=512){
       const byteCharacters = atob(b64Data);
       const byteArrays = [];

       for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
         const slice = byteCharacters.slice(offset, offset + sliceSize);

         const byteNumbers = new Array(slice.length);
         for (let i = 0; i < slice.length; i++) {
           byteNumbers[i] = slice.charCodeAt(i);
         }

         const byteArray = new Uint8Array(byteNumbers);
         byteArrays.push(byteArray);
       }

       const blob = new Blob(byteArrays, {type: contentType});
       return blob;
     }
   
   
	/*End_c8o_PageFunction*/
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1603900448853({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
		});
	}



	/**
	 * Function ATS1603882432356
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603882432356(stack): Promise<any> {
		let c8oPage : C8oPageBase = this;
		let parent;
		let scope;
		let out;
		let event;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					c8oPage.c8o.log.trace("[MB] ATS1603882432356: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603882432356: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603882432356: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603882432356: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1603882432356"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1603882432356'}, vars:{}};
		return this.CTS1603882432356(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1603881988935"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{pwa: true}`), cssClass: get('cssClass', `'modalCSV'`), blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1603889340298"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1603889340298'}, vars:{}};
		return this.CTS1603889340298(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603889340298 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603882432356 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603882432356: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603882432356: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CustomAction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603882432356(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603882432356*/
		this.global.multiple = false;
		resolve();
		/*End_c8o_function:CTS1603882432356*/
		});
	}


	/**
	 * Function CustomAction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603889340298(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603889340298*/
		if(page.global.pwafile != undefined){
		    var reader = new FileReader();
            reader.readAsDataURL(page.global.pwafile[0]); 
            reader.onloadend = () => {
                var base64data = reader.result;                
                this.pwa.img = {data: base64data, url: this.router.sanitizer.bypassSecurityTrustUrl(base64data), blob : page.global.pwafile[0]};
                this.local.updatedImg = true;
                page.global.pwafile = undefined;
            }  
		}
		
		resolve();
		/*End_c8o_function:CTS1603889340298*/
		});
	}


	/**
	 * Function ATS1606903357173
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606903357173(stack): Promise<any> {
		let c8oPage : C8oPageBase = this;
		let parent;
		let scope;
		let out;
		let event;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					c8oPage.c8o.log.trace("[MB] ATS1606903357173: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606903357173: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606903357173: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606903357173: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1606903357173"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1606903357173'}, vars:{}};
		return this.CTS1606903357173(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1606903357176"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{pwa: true}`), cssClass: get('cssClass', `'modalCSV'`), blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1606903357179"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1606903357179'}, vars:{}};
		return this.CTS1606903357179(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1606903357179 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1606903357173 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606903357173: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606903357173: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CustomAction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606903357173(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606903357173*/
		this.global.multiple = false;
		resolve();
		/*End_c8o_function:CTS1606903357173*/
		});
	}


	/**
	 * Function CustomAction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606903357179(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606903357179*/
		if(page.global.pwafile != undefined){
		    var reader = new FileReader();
            reader.readAsDataURL(page.global.pwafile[0]); 
            reader.onloadend = () => {
                var base64data = reader.result;                
                this.pwa.img = {data: base64data, url: this.router.sanitizer.bypassSecurityTrustUrl(base64data), blob : page.global.pwafile[0]};
                this.local.updatedImg = true;
                page.global.pwafile = undefined;
            }  
		}
		
		resolve();
		/*End_c8o_function:CTS1606903357179*/
		});
	}


	/**
	 * Function CustomAction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603900416360(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603900416360*/
		this.local.initDone = true;
		resolve();
		/*End_c8o_function:CTS1603900416360*/
		});
	}


	/**
	 * Function ATS1603900448853
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603900448853(stack): Promise<any> {
		let c8oPage : C8oPageBase = this;
		let parent;
		let scope;
		let out;
		let event;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					c8oPage.c8o.log.trace("[MB] ATS1603900448853: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603900448853: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603900448853: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603900448853: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1603900448853"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `!c8oPage.local.initDone`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["GetData"] = stack["1603806047577"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `false`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `c8oPage.navParams.data.form._id+'_pwa_document'`)}, vars:{}};
		return this.actionBeans.FullSyncGetAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["LoadDefaultValues"] = stack["1603806712006"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'LoadDefaultValues', actionFunction: 'CTS1603806712006'}, vars:{}};
		return this.CTS1603806712006(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603806712006 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return new Promise((resolve, reject) => {
		let self: any = stack["SetPwaValues"] = stack["1603806229991"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetPwaValues', actionFunction: 'CTS1603806229991'}, vars:{}};
		return this.CTS1603806229991(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603806229991 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["ImportNamerLib"] = stack["1603812580074"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ImportNamerLib', actionFunction: 'CTS1603812580074'}, vars:{}};
		return this.CTS1603812580074(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603812580074 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603900448853: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1603900416360"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1603900416360'}, vars:{}};
		return this.CTS1603900416360(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603900416360 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603900448853: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603900448853: ended"); resolveP(res)});
		});
	}

	/**
	 * Function LoadDefaultValues
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603806712006(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603806712006*/
		new Promise(async(resolveGet)=>{
		    if(this.pwa == undefined){
		        this.local.new = true;
		        this.pwa = {name : this.form.name, shortName: this.form.shortName, backgroundColor: "#ffffff", themeColor: "#0cbbe7", "notAnonymous": true, "querystr": "", originalFormId: this.form._id, "c8o_view_type_pwa_document": true};
		        try{
		            var tryWallPaper = false;
		            let response = await this.c8o.callJson("fs://c8oforms_fs.get_attachment", "docid", this.form._id, "name", "thumbnail").async();
		            if(!(response["size"] > 0)){
		                tryWallPaper = true;
                    }
                    else{
                        var reader = new FileReader();
                        reader.readAsDataURL(response); 
                        reader.onloadend = () => {
                            var base64data = reader.result;                
                            this.pwa.img = {data: base64data, url: this.router.sanitizer.bypassSecurityTrustUrl(base64data)};
                            resolveGet();
                        }
                        
                    }
		        }
		        catch(e){
		            tryWallPaper = true;
		        }
		        
		        if(tryWallPaper){
		            try{
    		            let response2 = await this.c8o.callJson("fs://c8oforms_fs.get_attachment", "docid", this.form._id, "name", "wallpaper").async();
    		            if(!(response2["size"] > 0)){
    		                this.pwa.img = {url: 'assets/images/category.png'};
                            this.local.updatedImg = true;
                        }
                        else{
                            var reader = new FileReader();
                            reader.readAsDataURL(response2); 
                            reader.onloadend = () => {
                                var base64data = reader.result;                
                                this.pwa.img = {data: base64data, url: this.router.sanitizer.bypassSecurityTrustUrl(base64data)};
                                resolveGet();
                            }
                            return null;
                        }
		            }
    		        catch(e){
    		            this.pwa.img = {url: 'assets/images/category.png'};
    		            this.local.updatedImg = true;
    		            resolveGet();
                    }
		        
		    }
		    
		    }
		}).then(()=>{
		    resolve();
		});
		/*End_c8o_function:CTS1603806712006*/
		});
	}


	/**
	 * Function SetPwaValues
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603806229991(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603806229991*/
		    if(props.parent.out != undefined){
		        this.pwa = props.parent.out;
		        this.resetImageCache(this.pwa._id+"/icon")
		    }
		    resolve();
		/*End_c8o_function:CTS1603806229991*/
		});
	}


	/**
	 * Function ImportNamerLib
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603812580074(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603812580074*/
		    page.local.namer = namer;
		    resolve();
		/*End_c8o_function:CTS1603812580074*/
		});
	}


	/**
	 * Function ATS1603878579103
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603878579103(stack): Promise<any> {
		let c8oPage : C8oPageBase = this;
		let parent;
		let scope;
		let out;
		let event;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					c8oPage.c8o.log.trace("[MB] ATS1603878579103: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603878579103: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603878579103: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603878579103: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["GeneratePwa"] = stack["1603878579103"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GeneratePwa', actionFunction: 'CTS1603878579103'}, vars:{}};
		return this.CTS1603878579103(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1604331902591"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1604330825068'}, vars:{}};
		return this.actionBeans.STS1604330825068(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] STS1604330825068 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["CloseModal"] = stack["1603878579106"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CloseModal', actionFunction: 'CloseModalAction', data: null}, vars:{}};
		return this.actionBeans.CloseModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] CloseModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["PublishEvent"] = stack["1604007492068"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PublishEvent', actionFunction: 'PublishEventAction', data: null, topic: get('topic', `'toastPWA'`)}, vars:{}};
		return this.actionBeans.PublishEventAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] PublishEventAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603878579103 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603878579103: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603878579103: ended"); resolveP(res)});
		});
	}

	/**
	 * Function GeneratePwa
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603878579103(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603878579103*/
		    // check all required fields
		    if(this.pwa.name == ""){
		        this.showToast(this.translate.instant("must_complete") + " "+ this.translate.instant("name"));
		        reject();
		    }
		    else if(this.pwa.shortName == ""){
		        this.showToast(this.translate.instant("must_complete") + " "+ this.translate.instant("short_name"));
                reject();
		    }
		    else if(this.local.new && (this.pwa.img == undefined || (this.pwa.img.data == undefined && this.pwa.img.blob == undefined))){
		        this.showToast(this.translate.instant("must_complete") + " "+ this.translate.instant("image"));
                reject();
		    }
		    else{
		     // be sure that form is available in anonymous if option has been enabled
	            new Promise (async(resolveAnonymous)=>{
	                try{
	                    //check if pwa has to be published as anonymous
	                    if(!this.pwa.notAnonymous){
	                        let doc = await page.c8o.callJson("fs://c8oforms_fs.get", "docid", this.pwa.originalFormId).async();
	                        // check if pwa is not already anonymous
	                        if (doc.sharedAnonymous != "true" || doc.sharedAnonymous != true){
	                            let idCOntrolDocument = "control_document_create_user_" + this.makeid(10) + "" + Date.now();
	                            let userName = sha256(doc["_id"]);
	                            try{
	                                await page.c8o.callJson("fs://c8oforms_fs.post", "_id",idCOntrolDocument, "formId", doc["_id"], "formRev", doc["_rev"],"userName", userName).async();
	                                page.c8o.log.debug("[PWA CREATION] subsmisson for pwa anonymous");
	                                resolveAnonymous();
	                            }
	                            catch(e){
	                                resolveAnonymous();
	                            }
	            }
	                    }
	                    else{
	                        resolveAnonymous();
	                    }
	                }
	                catch(e){
	                    resolveAnonymous();
	                    page.c8o.log.error("[PWA CREATION] an error occured (anonymous for pwa)", e)
	                }	                
	            })
	            .then(()=>{
	                // get pwa id
	                this.pwa.targetId = this.pwa.notAnonymous ? this.pwa.originalFormId:sha256(this.pwa.originalFormId);
	                delete this.pwa.done;
	                // first creation
	                if(this.pwa._id == undefined){
	                    let img = this.pwa.img.data;
	                    let blob = this.pwa.img.blob;
	                    delete this.pwa.img;
	                    this.pwa.updateFinished = false;
	                    this.pwa._id = this.navParams.data.form._id+'_pwa_document';
	                    this.c8o.callJsonObject("fs://c8oforms_fs.post", this.pwa)
	                    .then((res)=>{
	                        page.c8o.log.debug("[PWA CREATION] properties inserted");
	                        if(blob != undefined){
	                            return this.c8o.callJson("fs://c8oforms_fs.put_attachment", "docid", this.pwa._id, "name","icon", "content_type", blob.type, "content", blob )
	                        }
	                        else{
	                            const nB64 = this.detectContentType(img);
	                            let contentType = nB64[0];
	                            let b64 = nB64[1];
	                            return this.c8o.callJson("fs://c8oforms_fs.put_attachment", "docid", this.pwa._id, "name","icon", "content_type", contentType, "content", this.b64toBlob(b64, contentType))
	                        }
	                        
	                    })
	                    .then((res)=>{
	                        page.c8o.log.debug("[PWA CREATION] assets inserted");
	                        return this.c8o.callJson("fs://c8oforms_fs.post", "_use_policy", "merge", "updateFinished", true, "_id", this.pwa._id)
	                        
	                    })
	                    .then((res)=>{
	                        page.c8o.log.debug("[PWA CREATION] property updateFinished inserted");
	                        resolve();
	                        return null;
	                        
	                    })
	                    .fail((e)=>{
	                        page.c8o.log.debug("[PWA CREATION] an error occured", e);
	                        resolve();
	                    })
	                }
	                //update
	                else{
	                    delete this.pwa._rev;
	                    this.pwa["_use_policy"] = "override";
	                    let blob = this.pwa.img != undefined ? this.pwa.img.blob: undefined;
	                    delete this.pwa.img;
	                    this.pwa.updateFinished = !(this.local.updatedImg == true);
	                    this.c8o.callJsonObject("fs://c8oforms_fs.post", this.pwa)
	                    .then((res)=>{
	                        page.c8o.log.debug("[PWA CREATION] properties inserted");
	                        if(this.local.updatedImg == true){
	                           
	                            return this.c8o.callJson("fs://c8oforms_fs.put_attachment", "docid", this.pwa._id, "name","icon", "content_type", blob.type, "content", blob )
	                        }
	                        else{
	                            return null;
	                        }
	                       
	                    })
	                    .then((res)=>{
	                        page.c8o.log.debug("[PWA CREATION] assets inserted");
	                        return this.c8o.callJson("fs://c8oforms_fs.post", "_id", this.pwa._id ,"_use_policy", "merge", "updateFinished", true)
	                        
	                    })
	                    .then((res)=>{
	                        page.c8o.log.debug("[PWA CREATION] property updateFinished inserted");
	                        resolve();
	                        return null;
	                        
	                    })
	                    .fail((e)=>{
	                        page.c8o.log.debug("[PWA CREATION] an error occured", e);
	                        resolve();
	                    })
	                }
	                
	            }) 
		    }
		/*End_c8o_function:CTS1603878579103*/
		});
	}

}
