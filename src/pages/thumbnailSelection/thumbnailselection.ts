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


/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'path-to-thumbnailselection', defaultHistory: []})
@Component({selector: 'page-thumbnailselection', templateUrl: 'thumbnailselection.html', changeDetection: ChangeDetectionStrategy.Default})
export class thumbnailSelection extends C8oPage  {
	
	@ViewChildren("slidingTabsThumb") public all_slidingTabsThumb : QueryList<any>;
	@ViewChild("slidingTabsThumb") public slidingTabsThumb;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "thumbnailSelection";
	/*Begin_c8o_PageDeclaration*/
	public idselected = "";
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		
		/*Begin_c8o_PageConstructor*/
		this.global.showO = false;
		this.local.selectedTabI = 0;
        if(this.global.thumbType != undefined && this.global.thumbType == 'custom'){
            this.local.selectedTabI = 1;
            this.global.showO = true;
        }
        if(this.global.thumbType != undefined && this.global.thumbType == 'color'){
            this.local.selectedTabI = 2;
            this.global.showO = true;
        }
        this.global.urls = [];
        for (var i = 1; i < 23; i++) {
            this.global.urls.push("assets/images/jpg/img"+i+".jpg");
        }
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	/*End_c8o_PageFunction*/
	
	
	ionViewDidEnter() {
		super.ionViewDidEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1594649062522({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
		});
	}



	/**
	 * Function ATS1594649062522
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1594649062522(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1594649062522: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1594649062522: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1594649062522: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1594649062522: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1594649062522"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1594649062522'}, vars:{}};
		return this.CTS1594649062522(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1594649062522 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1594649062522: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1594649062522: ended"); resolveP(res)});
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
	CTS1594649062522(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1594649062522*/
	        this.global.indexthumb = this.global.indexthumb || 0;
	        resolve();
		/*End_c8o_function:CTS1594649062522*/
		});
	}


	/**
	 * Function ATS1594649062543
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1594649062543(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1594649062543: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1594649062543: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1594649062543: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1594649062543: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SaveProperties"] = stack["1594649062543"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SaveProperties', actionFunction: 'CTS1594649062543'}, vars:{}};
		return this.CTS1594649062543(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["GetData"] = stack["1607093854432"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `true`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `parent.out._id`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1607093854441"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `stack['GetData'].out.formulaire`), negate: get('negate', `false`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["PostData"] = stack["1607093854459"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: null, RootKey: get('RootKey', `'thumbnail'`), noLoading: get('noLoading', `true`), _use_policy: get('_use_policy', `'merge'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `stack['SaveProperties'].out._id`)}, vars:{index: get('index', `stack['SaveProperties'].out.realIndex`), enabled: get('enabled', `stack['SaveProperties'].out.enabledThumbTemp`), type: get('type', `stack['SaveProperties'].out.fromDevice == 'color' ? 'color' : (stack['root'].out.fromDevice ? 'custom' : 'library')`), random: get('random', `stack['SaveProperties'].out.wallpaper.random`), color: get('color', `stack['SaveProperties'].out.colorPicker`)}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["checkAttachment"] = stack["1607093854474"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'checkAttachment', actionFunction: 'CTS1607093854474'}, vars:{arg: get('arg', `stack['SaveProperties'].out`)}};
		return this.CTS1607093854474(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1607093854480"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out.put_attach == true`), negate: get('negate', `false`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["PutAttachment"] = stack["1607093854483"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PutAttachment', actionFunction: 'FullSyncPutAttachmentAction', content_type: get('content_type', `stack['checkAttachment'].out.type`), docid: get('docid', `stack['SaveProperties'].out._id`), noLoading: get('noLoading', `true`), name: get('name', `'thumbnail'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), content: get('content', `stack['checkAttachment'].out.content`)}, vars:{}};
		return this.actionBeans.FullSyncPutAttachmentAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncPutAttachmentAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1607093854474 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["CloseModal"] = stack["1594649062549"] = {};
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
		])
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1594649062543 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1594649062543: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1594649062543: ended"); resolveP(res)});
		});
	}

	/**
	 * Function SaveProperties
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1594649062543(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1594649062543*/
		if(this.slidingTabsThumb == undefined){
	        this.global.transmit = {};
	        this.global.transmit.enabledThumbTemp = this.global.enabledThumbTemp;
	        this.global.transmit._id = this.navParams.data.selectedForm._id;
	        resolve(this.global.transmit);
		}
		else if(this.slidingTabsThumb.selectedTabIndex == 0){
		    if(this.global.transmit == undefined){
                this.global.transmit = {};
            }
		    this.global.transmit.fromDevice = false;
            this.global.transmit.enabledThumbTemp = this.global.enabledThumbTemp;
            this.global.transmit._id = this.navParams.data.selectedForm._id;
            resolve(this.global.transmit);
		}
		else if(this.slidingTabsThumb.selectedTabIndex == 1){
            if(this.global.transmit == undefined){
                this.global.transmit = {};
            }
            this.global.transmit.fromDevice = true;
            this.global.transmit.enabledThumbTemp = this.global.enabledThumbTemp;
            this.global.transmit._id = this.navParams.data.selectedForm._id;
            resolve(this.global.transmit);
        }
		else if(this.slidingTabsThumb.selectedTabIndex == 2){
            if(this.global.transmit == undefined){
                this.global.transmit = {};
            }
            this.global.transmit.fromDevice = 'color';
            this.global.transmit.enabledThumbTemp = this.global.enabledThumbTemp;
            this.global.transmit.colorPicker=this.global.colorPicker;
            this.global.transmit._id = this.navParams.data.selectedForm._id;
            this.global.colorPicker = undefined;
            resolve(this.global.transmit);
        }
		/*End_c8o_function:CTS1594649062543*/
		});
	}


	/**
	 * Function checkAttachment
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1607093854474(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1607093854474*/
		    let args = vars.arg;
	        if(args.fromDevice === false){
                this.c8o.httpPublic.get(args.url, {responseType: 'blob' })
                .subscribe(resp => {
                    resolve({"put_attach": true, "content": resp,"type": resp.type });
                });
            }
	        else if(args.fromDevice === true){
	            resolve({"put_attach": true, "content": page.global.filePrev, "type" : page.global.filePrevType });
	        }
	        else {
                resolve({"put_attach": false});
            }
		/*End_c8o_function:CTS1607093854474*/
		});
	}

}
