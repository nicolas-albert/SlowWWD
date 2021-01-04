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
import { C8oLogLevel } from 'c8osdkangular';
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { C8oSessionStatus } from 'c8osdkangular';


/*Begin_c8o_PageImport*/
import {ToastController } from 'ionic-angular';
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'settings', defaultHistory: []})
@Component({selector: 'page-settingspage', templateUrl: 'settingspage.html', changeDetection: ChangeDetectionStrategy.Default})
export class settingsPage extends C8oPage  {
	
	@ViewChildren("elseBlock_1587717591928") public all_elseBlock_1587717591928 : QueryList<any>;
	@ViewChild("elseBlock_1587717591928") public elseBlock_1587717591928;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "settingsPage";
	/*Begin_c8o_PageDeclaration*/
	public fr = false;
	public en = true;
	public es = false;
	public selectedItem;
	public language = 'en';
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		this.menuId = 'MenuSelector';
		
		
		/*Begin_c8o_PageConstructor*/
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	getTranslate(msgTosearch :string): Promise<any>{
        return new Promise((resolve, reject)=>{
            let translate = this.getInstance(TranslateService)
            translate.get(msgTosearch).subscribe((res: string) => {
                resolve(res);
            });
        });        
    }
	
	public showToast(msg:string){
        let toastCtrl = this.getInstance(ToastController);
        let toast = toastCtrl.create({
            message: msg,
            duration: 3000,
            cssClass:"changeToast"
        })
        toast.present();
    }
	
	public selected(e){
	    if(e["target"]["files"]["length"] > 0){
	        this.c8o.callJson("fs://c8oform_users_objects.put_attachment",
	                "docid", this.global["user"], "name", "theme.jpg",
	                "content_type", "image/jpeg", "content", e["target"]["files"][0])
	                .then((resp)=>{
	                    this.resetImageCache('theme.jpg');
	                    this.c8o.callJson("fs://c8oform_users_objects.post",
	                            "default", false,
	                            "_use_policy", "merge",
	                            '_id', this.global['user'])
	                            .then((res)=>{
	                                this.getTranslate("updateImg")
	                                .then((res)=>{
	                                    this.showToast(res);
	                                    
	                                })
	                                return null;
	                            })
	                            .fail((err)=>{
	                                console.log(err);
	                            })
	                    return null;
	                })
	                .fail((err)=>{
	                    console.log(err);
	                })
	        
	        
	       
	    }
	         /*
	          * let resultGet = await this.c8o.callJson("fs://base.put_attachment", 
            "docid", id, "name", "text2.txt", "content_type", "text/plain", "content", new Blob(["Hello Convertigo !"], {type: "text/plain"})).async();
 
	            }*/
	     console.log("selected");
	     console.log(e);
	}
	/*End_c8o_PageFunction*/
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1587717407024({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1572542751053({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1606995382489
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606995382489(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606995382489: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606995382489: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606995382489: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606995382489: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["QueryView"] = stack["1606995382489"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'QueryView', actionFunction: 'FullSyncViewAction', reduce: get('reduce', `false`), startkey: null, group_level: null, attachments: null, __live: get('__live', `'liveRefresh'`), keys: null, noLoading: get('noLoading', `true`), fsview: get('fsview', `'C8Oforms.c8oforms_fs.notifs.all'`), skip: null, descending: get('descending', `'true'`), include_docs: get('include_docs', `'false'`), endkey: null, stale: null, marker: get('marker', `'viewNotifsAll'`), binary: null, limit: get('limit', `500`), conflicts: null, inclusive_end: null, key: null, group: null}, vars:{}};
		return this.actionBeans.FullSyncViewAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["Popover"] = stack["1606995382492"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: null, cssClass: get('cssClass', `'popOverNotifs'`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.PopOverNotifs'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
		return this.actionBeans.PopoverAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncViewAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606995382489: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606995382489: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1603918107963
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603918107963(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1603918107963: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603918107963: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603918107963: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603918107963: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["QueryView"] = stack["1603918107963"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'QueryView', actionFunction: 'FullSyncViewAction', reduce: get('reduce', `false`), startkey: null, group_level: null, attachments: null, __live: get('__live', `'liveRefresh'`), keys: null, noLoading: get('noLoading', `false`), fsview: get('fsview', `'C8Oforms.c8oforms_fs.notifs.all'`), skip: null, descending: get('descending', `'true'`), include_docs: get('include_docs', `'false'`), endkey: null, stale: null, marker: get('marker', `'viewNotifsAll'`), binary: null, limit: get('limit', `500`), conflicts: null, inclusive_end: null, key: null, group: null}, vars:{}};
		return this.actionBeans.FullSyncViewAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["Popover"] = stack["1603905390576"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: null, cssClass: null, showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.PopOverNotifs'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
		return this.actionBeans.PopoverAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncViewAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603918107963: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603918107963: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587717673245
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587717673245(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587717673245: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587717673245: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587717673245: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587717673245: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["ChangeLanguage"] = stack["1587717673245"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ChangeLanguage', actionFunction: 'CTS1587717673245'}, vars:{}};
		return this.CTS1587717673245(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SetGlobal"] = stack["1587717673248"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'language'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["CallSequence1"] = stack["1587717673251"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence1', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.SetLanguage'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{email: get('email', `c8oPage.local.user`), language: get('language', `parent.out`)}};
		return this.actionBeans.CallSequenceAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1587717673245 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587717673245: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587717673245: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ChangeLanguage
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1587717673245(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1587717673245*/
		let lang = event.toString();
		if(lang != undefined && lang != ""){
		    localStorage.setItem('lang', lang);
	        window["__c8o__translate"]["use"](lang);
	        this.fr = false;
	        this.en = false;
	        this.es = false;
	        this.selectedItem = lang;
	        this[lang] = true;
	        resolve(lang);
		}
        



		/*End_c8o_function:CTS1587717673245*/
		});
	}


	/**
	 * Function ATS1601543806339
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1601543806339(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1601543806339: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1601543806339: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1601543806339: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1601543806339: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1601543806339"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1601543806339'}, vars:{}};
		return this.CTS1601543806339(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["PostData"] = stack["1601543806342"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: null, RootKey: null, noLoading: get('noLoading', `false`), _use_policy: get('_use_policy', `'merge'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `'C8Oreserved_' +c8oPage.local.user`)}, vars:{published_First: get('published_First', `parent.out`)}};
		return this.actionBeans.FullSyncPostAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1601543806339 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1601543806339: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1601543806339: ended"); resolveP(res)});
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
	CTS1601543806339(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1601543806339*/
		resolve(event);
		/*End_c8o_function:CTS1601543806339*/
		});
	}


	/**
	 * Function setLogLevel
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1601544736766(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1601544736766*/
		    window.localStorage.setItem("c8oforms_log_level", event);
    		page.c8o.logLevelLocal = C8oLogLevel[event];
    		this.global['log_level'] = event;

		/*End_c8o_function:CTS1601544736766*/
		});
	}


	/**
	 * Function ATS1572542751053
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572542751053(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572542751053: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572542751053: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572542751053: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572542751053: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser1"] = stack["1572542751053"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser1', actionFunction: 'CTS1572542751053'}, vars:{}};
		return this.CTS1572542751053(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1572542751053 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572542751053: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572542751053: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckUser1
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1572542751053(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1572542751053*/
		    /*page.local.formId = this.navParams.get('formId');
		    page.local.edit = this.navParams.get('edit');*/
		    if(page.c8o.session.status == C8oSessionStatus.Connected || page.c8o.session.status == C8oSessionStatus.HasBeenConnected){
                page.local.user = page.c8o.session.user.name;
		        resolve(true);
            }
		    const request = window["indexedDB"]["open"]("MyTestDatabase", 3);
            request.onerror = (event)=> {
                resolve(false);
                setTimeout(()=>{
                    page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
                }, 200);
                return;
              };
              request.onsuccess = (event)=> {
		    // Getting user status (whenever he is logged or not)
		    page.c8o.httpInterface.getUserServiceStatus()
		    .then((res)=>{
		        if(res.user.length == 64 || res.user.authenticated == false){
		            setTimeout(()=>{
                        page.routerProvider.setRoot("loginPage", {page:'settingsPage'}, null); 
                    }, 200);
                    resolve(false);
                }
                else{
                    page.local.user = res.user;
                    resolve(true);
                }
		    })
		    .catch((err)=>{
		        if(window.navigator.onLine == true){
                    setTimeout(()=>{
                        page.routerProvider.setRoot("loginPage", {page:'settingsPage'}, null);
                        }, 200); 
                    resolve(false);
                }
                else{
                    // Offline mode
                    page.local.user = page.c8o.session.user.name;
                    resolve(true);
                }
		    })
              };
		   /* this.local.debug = {};
            let formId = this.navParams.get('formId');
            if(formId != undefined){
                this.local.formId = formId;
                resolve(true);
            }
            else{
                resolve(true);
            }*/
           
            
		/*
		if(this.global.user == '' || this.global.user == undefined){
		    window.location.href = './';
		    resolve(false);
		}
		else{
		    resolve(true);
		}*/
		/*End_c8o_function:CTS1572542751053*/
		});
	}


	/**
	 * Function ATS1587717407024
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587717407024(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587717407024: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587717407024: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587717407024: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587717407024: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1587717407024"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1586254399526'}, vars:{}};
		return this.actionBeans.STS1586254399526(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SyncData"] = stack["1579078830273"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SyncData', actionFunction: 'FullSyncSyncAction', BatchSize: get('BatchSize', `100`), Mode: get('Mode', `'continuous'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), Retry: get('Retry', `'true'`), BatchesLimit: get('BatchesLimit', `10`), Direction: get('Direction', `'bi-directional'`)}, vars:{}};
		return this.actionBeans.FullSyncSyncAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["GetData"] = stack["1579078843692"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `false`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `'C8Oreserved_' + c8oPage.local.user`)}, vars:{}};
		return this.actionBeans.FullSyncGetAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["SetGlobal"] = stack["1579078942570"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out.published_First`), Property: get('Property', `'published_First'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal1"] = stack["1599469906388"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out.language`), Property: get('Property', `'language'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1599470007813"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1599470007813'}, vars:{}};
		return this.CTS1599470007813(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1599470007813 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["PublishEvent"] = stack["1601542706761"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PublishEvent', actionFunction: 'PublishEventAction', data: null, topic: get('topic', `'anyInitalSyncFinished'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncSyncAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1586865821341"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `window.localStorage.getItem('c8oforms_log_level')`), Property: get('Property', `'log_level'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] STS1586254399526 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587717407024: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1587718302711"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1586254487958'}, vars:{}};
		return this.actionBeans.STS1586254487958(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1586254487958 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587717407024: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587717407024: ended"); resolveP(res)});
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
	CTS1599470007813(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599470007813*/
		    if(props.parent.out["editing_rights"] != undefined && (props.parent.out["editing_rights"] == false || props.parent.out["editing_rights"] == "false")){
                page.local.editing_rights = false;
            }
            else{
                page.local.editing_rights = true;
            }
		    resolve();
		/*End_c8o_function:CTS1599470007813*/
		});
	}

}
