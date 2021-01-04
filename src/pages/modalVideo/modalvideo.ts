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


/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'path-to-modalvideo', defaultHistory: []})
@Component({selector: 'page-modalvideo', templateUrl: 'modalvideo.html', changeDetection: ChangeDetectionStrategy.Default})
export class modalVideo extends C8oPage  {
	

	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "modalVideo";
	/*Begin_c8o_PageDeclaration*/
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		
		/*Begin_c8o_PageConstructor*/
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
			this.ATS1605871938265({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
		});
	}



	/**
	 * Function ATS1605894938363
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605894938363(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605894938363: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605894938363: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605894938363: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605894938363: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["resetVideo"] = stack["1605894938363"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'resetVideo', actionFunction: 'CTS1605894938363'}, vars:{}};
		return this.CTS1605894938363(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["CloseModal"] = stack["1605892700256"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605894938363 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605894938363: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605894938363: ended"); resolveP(res)});
		});
	}

	/**
	 * Function resetVideo
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605894938363(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605894938363*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		if(page.global['zxing:codeReader'] !== undefined){
		    page.global['zxing:codeReader'].reset();
		    delete page.global['zxing:codeReader'];
		}
		resolve();
		/*End_c8o_function:CTS1605894938363*/
		});
	}


	/**
	 * Function resetVideo
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606318222928(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606318222928*/
		    page.local.facingMode = page.local.facingMode == "environment" ? 'user' : "environment";
		    page.local.resetXzing();
		    page.local.startXzing(page.local.facingMode);
		resolve();
		/*End_c8o_function:CTS1606318222928*/
		});
	}


	/**
	 * Function ATS1605871938265
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605871938265(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605871938265: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605871938265: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605871938265: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605871938265: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605871938265"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606311206408'}, vars:{type: get('type', `'video'`), resultId: get('resultId', `''`), videoId: get('videoId', `'videoSource'`), topic: get('topic', `''`), isOutputEvent: get('isOutputEvent', `false`), isOutputLocal: get('isOutputLocal', `false`), ref: get('ref', `''`)}};
		return this.actionBeans.STS1606311206408(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["save_result"] = stack["1605871938289"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'save_result', actionFunction: 'CTS1605871938289'}, vars:{model: get('model', `c8oPage.navParams.data.model`)}};
		return this.CTS1605871938289(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605871938289 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["CloseModal"] = stack["1605872039037"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606311206408 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605871938265: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605871938265: ended"); resolveP(res)});
		});
	}

	/**
	 * Function save_result
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605871938289(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605871938289*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		let out = props.out[1];
		if(out && out.text && vars.model['value'] !== undefined)
		    vars.model['value'] = out.text;
		resolve();
		/*End_c8o_function:CTS1605871938289*/
		});
	}

}
