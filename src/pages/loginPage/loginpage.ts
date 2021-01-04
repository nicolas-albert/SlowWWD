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
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { C8oLogLevel } from 'c8osdkangular';
import { C8oSettings } from 'c8osdkangular';


/*Begin_c8o_PageImport*/
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/*End_c8o_PageImport*/

@IonicPage({priority: 'high', segment: 'login/:formId/:page/:edit/:published/:d/:e', defaultHistory: []})
@Component({selector: 'page-loginpage', templateUrl: 'loginpage.html', changeDetection: ChangeDetectionStrategy.Default})
export class loginPage extends C8oPage  {
	public form1603722109606 :  FormGroup;

	@ViewChildren("email") public all_email : QueryList<any>;
	@ViewChild("email") public email;

	@ViewChildren("pass") public all_pass : QueryList<any>;
	@ViewChild("pass") public pass;

	@ViewChildren("ElseBlock_1602679288839") public all_ElseBlock_1602679288839 : QueryList<any>;
	@ViewChild("ElseBlock_1602679288839") public ElseBlock_1602679288839;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "loginPage";
	/*Begin_c8o_PageDeclaration*/
	public fr = false;
	public en = true;
	public es = false;
	public selectedItem;
	public show = false;
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		this.menuId = 'MenuLogin';
		
		/**
		 * CustomValidator
		 *   
		 * 
		 * @param c:FormControl, the control
		 *    use c.value to retrieve control's value
		 * @return null if valid or any json error structure if invalid
		 */
		let validate1603722109750 = (c: FormControl) => {
		/*Begin_c8o_function:validate1603722109750*/
			/* return {'valid':false, 'password':wrong};	// any json if invalid */
			/* return null;									// null if valid */
		    //return {'valid':false, 'password':'wrong'}
			if(this.local.continue == undefined || this.local.continue == false){
			    return null;    
			}
			else{
			    try{
			        if(c.value.length > 0){
			            return null;
			        }
			        else{
			            return {'valid':false}
			        }
			    }
			    catch(e){
			        return null;
			    }
			}
		    
		/*End_c8o_function:validate1603722109750*/
		};

		/**
		 * Form
		 *   
		 */
		this.form1603722109606 = new FormGroup({
			email : new FormControl('', Validators.compose([Validators.required]), Validators.composeAsync([])),
			password : new FormControl('', Validators.compose([validate1603722109750]), Validators.composeAsync([])),
			var1603722109777 : new FormControl('', Validators.compose([]), Validators.composeAsync([])),
		});


		
		/*Begin_c8o_PageConstructor*/
		this.show = false;
		this.local.formId = (this.navParams.get('formId') != undefined && this.navParams.get('formId') != ":formId") ? this.navParams.get('formId') : null;
		this.local.page = (this.navParams.get('page') != undefined && this.navParams.get('page') != ":page") ? this.navParams.get('page') : null;
		this.local.edit = (this.navParams.get('edit') != undefined && this.navParams.get('edit') != ":edit") ? this.navParams.get('edit') : null;
		this.local.published = (this.navParams.get('published') != undefined && this.navParams.get('published') != ":published") ? this.navParams.get('published') : null;
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	setLanguage(lang){
		let translate = this.getInstance(TranslateService);
		window["__c8o__translate"]["use"](lang);
		this.fr = false;
		this.en = false;
		this.es = false;
		this.selectedItem = lang;
		this[lang] = true;
		}
	/*End_c8o_PageFunction*/
	
	
	ionViewDidEnter() {
		super.ionViewDidEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1542898360057({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
			this.ATS1567672606828({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
			this.ATS1582638545049({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
			this.ATS1602767162049({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1572447936955({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1542898360057
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1542898360057(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1542898360057: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1542898360057: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1542898360057: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1542898360057: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallGetLanguage"] = stack["1542898360057"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallGetLanguage', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `true`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.GetLanguage'`), timeout: get('timeout', `5000`), noAutoLogin: get('noAutoLogin', `false`)}, vars:{email: get('email', `c8oPage.form1558534086484.value.email`)}};
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
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["IfOK"] = stack["1542898490964"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfOK', actionFunction: 'IfAction', condition: get('condition', `stack['CallGetLanguage'].out.response != 'ko'`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["Log"] = stack["1542898490967"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Log', actionFunction: 'LogAction', level: get('level', `'info'`), message: get('message', `'Profil is known, set default language to ' + stack['CallGetLanguage'].out.response`)}, vars:{}};
		return this.actionBeans.LogAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] LogAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["ChangeLanguage"] = stack["1542899189148"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ChangeLanguage', actionFunction: 'CTS1542899189148'}, vars:{}};
		return this.CTS1542899189148(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1542899189148 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1542901782548"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `stack['CallGetLanguage'].out.response`), Property: get('Property', `'language'`)}, vars:{}};
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
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["IfKO"] = stack["1542898428005"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfKO', actionFunction: 'IfAction', condition: get('condition', `stack['CallGetLanguage'].out.response == "ko"`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["Log"] = stack["1542898455469"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Log', actionFunction: 'LogAction', level: get('level', `'info'`), message: get('message', `'Profil is not known, set default language to english'`)}, vars:{}};
		return this.actionBeans.LogAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] LogAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["ChangeLanguage"] = stack["1572112510184"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ChangeLanguage', actionFunction: 'CTS1572112510184'}, vars:{}};
		return this.CTS1572112510184(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1572112510184 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1542898360057: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1542898360057: ended"); resolveP(res)});
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
	CTS1542899189148(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1542899189148*/
		this.setLanguage(props.stack['CallGetLanguage'].out.response);
		this.tick();
		resolve();
		/*End_c8o_function:CTS1542899189148*/
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
	CTS1572112510184(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1572112510184*/
		this.setLanguage('en');
		this.tick();
		resolve();
		/*End_c8o_function:CTS1572112510184*/
		});
	}


	/**
	 * Function ATS1567672606828
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1567672606828(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1567672606828: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1567672606828: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1567672606828: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1567672606828: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1567672606828"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `c8oPage.global.platform.name['0'] != 'mobile' ? '#f9f9f9':'#4a4a4a'`), Property: get('Property', `'gridbackgroundcolor'`)}, vars:{}};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1567672606828: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1567672606828: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1582638545049
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1582638545049(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1582638545049: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1582638545049: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1582638545049: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1582638545049: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["getLocalAdValue"] = stack["1582638545049"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getLocalAdValue', actionFunction: 'CTS1582638545049'}, vars:{}};
		return this.CTS1582638545049(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1582638545049 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1582638545049: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1582638545049: ended"); resolveP(res)});
		});
	}

	/**
	 * Function getLocalAdValue
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1582638545049(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1582638545049*/
		this.local.loginad = false;
		let data = window["localStorage"]["getItem"]('__c8o_forms__loginad');
		if(data == "true"){
		    this.local.loginad = true;
		}
		resolve();
		/*End_c8o_function:CTS1582638545049*/
		});
	}


	/**
	 * Function ATS1602767162049
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1602767162049(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1602767162049: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1602767162049: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1602767162049: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1602767162049: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallSequence"] = stack["1602767162049"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `true`), cachePolicy: null, threshold: null, requestable: get('requestable', `'lib_OAuth.GetOAuthCredentials'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1603722087862"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1603722087862'}, vars:{}};
		return this.CTS1603722087862(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722087862 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1602767162049: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1602767162049: ended"); resolveP(res)});
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
	CTS1603722087862(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722087862*/
		if(!(props.parent.out.GoogleClientID == undefined || props.parent.out.GoogleClientID == "")){
		    this.local.continue = false;
		    this.local.forceContinue = false;
		}
		else{
	        this.local.continue = true;
	        this.local.forceContinue = true;
		}
		resolve();
		/*End_c8o_function:CTS1603722087862*/
		});
	}


	/**
	 * Function setVal
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1559050810244(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1559050810244*/
		    page["show"] = true;
		    resolve();
		/*End_c8o_function:CTS1559050810244*/
		});
	}


	/**
	 * Function ATS1603722109612
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603722109612(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1603722109612: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603722109612: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603722109612: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603722109612: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		
		let self: any = stack["IfContinue"] = stack["1603722109612"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfContinue', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.continue`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		
		let self: any = stack["IfBrowserNotSupported"] = stack["1603722109615"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfBrowserNotSupported', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local['notsupported'] == true`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["WindowAlertBrowserNotSupported"] = stack["1603722109618"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'WindowAlertBrowserNotSupported', actionFunction: 'CTS1603722109618'}, vars:{}};
		return this.CTS1603722109618(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109618 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		
		let self: any = stack["IfAD"] = stack["1603722109624"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfAD', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.loginad == true`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["LoginAd"] = stack["1603722109627"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'LoginAd', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `99999999999999999999`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: get('cachePolicy', `'priority_server'`), threshold: null, requestable: get('requestable', `'C8Oforms.LoginAD'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{secretL: get('secretL', `c8oPage.global['__secretL']`)}};
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
		return new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1603722109630"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `out.ok == 'true'`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["setValsRedirect"] = stack["1603722109633"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setValsRedirect', actionFunction: 'CTS1603722109633'}, vars:{}};
		return this.CTS1603722109633(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109633 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["getTranslate"] = stack["1603722109639"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getTranslate', actionFunction: 'CTS1603722109639'}, vars:{}};
		return this.CTS1603722109639(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["Toast"] = stack["1603722109642"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.local['loginko']`)}, vars:{}};
		return this.actionBeans.ToastAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109639 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["Login"] = stack["1603722109651"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Login', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `99999999999999999999`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: get('cachePolicy', `'priority_server'`), threshold: null, requestable: get('requestable', `'C8Oforms.Login'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1603722109654"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `out.ok == 'true'`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["setValsRedirect"] = stack["1603722109657"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setValsRedirect', actionFunction: 'CTS1603722109657'}, vars:{}};
		return this.CTS1603722109657(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109657 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["getTranslate"] = stack["1603722109663"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getTranslate', actionFunction: 'CTS1603722109663'}, vars:{}};
		return this.CTS1603722109663(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["Toast"] = stack["1603722109666"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.local['loginko']`)}, vars:{}};
		return this.actionBeans.ToastAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109663 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["setContinueTrue"] = stack["1603722109675"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setContinueTrue', actionFunction: 'CTS1603722109675'}, vars:{}};
		return this.CTS1603722109675(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109675 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603722109612: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603722109612: ended"); resolveP(res)});
		});
	}

	/**
	 * Function WindowAlertBrowserNotSupported
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109618(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109618*/
		window.alert(this.translate.instant("brower_not_supported"));
		resolve();
		/*End_c8o_function:CTS1603722109618*/
		});
	}


	/**
	 * Function setValsRedirect
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109633(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109633*/
		    let data= {};
		    let pagex = "selectorPage";
		    if(this.local.page != undefined && this.local.page != ':page'){
		        pagex = this.local.page;
		        switch(pagex){
		        case "editorPage":
		            if(this.local.formId != undefined){
	                    data["formId"] = page.local.formId;
	                }
		            break;
	            case "viewerPage":
	                if(this.local.formId != undefined){
	                    data["formId"] = page.local.formId;
	                }
	                if(this.local.edit != undefined){
	                    data["edit"] = page.local.edit;
	                }
	                break;
	            case "selectorPage":
	                data["published"] = page.local.published;
                    break;
	            case "linkPage":
	                data["d"] = page.local.d;
	                data["e"] = page.local.e;
                    
		        }
		        
		    }
		    
		    page.routerProvider.setRoot(pagex, data, null)
		resolve();
		/*End_c8o_function:CTS1603722109633*/
		});
	}


	/**
	 * Function getTranslate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109639(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109639*/
		    const translateService = this.getInstance(TranslateService);
    		if(props.stack["LoginAd"].out.ok == "false2"){
    		    translateService.get('loginko2').subscribe(value => {
                    // value is our translated string
                    this.local['loginko'] = value;
                    resolve();
                });
    		}
    		else{
    		    translateService.get('loginko').subscribe(value => {
                    // value is our translated string
                    this.local['loginko'] = value;
                    resolve();
                });
    		}
		/*End_c8o_function:CTS1603722109639*/
		});
	}


	/**
	 * Function setValsRedirect
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109657(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109657*/
		    if(window.navigator.onLine == false){
		        this.c8o.session.user.name = props.stack.Login.out.user;
		    }
		    let data= {};
		    let pagex = "selectorPage";
		    if(this.local.page != undefined && this.local.page != ':page'){
		        pagex = this.local.page;
		        switch(pagex){
		        case "editorPage":
		            if(this.local.formId != undefined){
	                    data["formId"] = page.local.formId;
	                }
		            break;
	            case "viewerPage":
	                if(this.local.formId != undefined){
	                    data["formId"] = page.local.formId;
	                }
	                if(this.local.edit != undefined){
	                    data["edit"] = page.local.edit;
	                }
	                break;
	            case "selectorPage":
	                data["published"] = page.local.published;
                    break;
	            case "linkPage":
	                data["d"] = page.local.d;
	                data["e"] = page.local.e;
                    
		        }
		        
		    }
		    
		    page.routerProvider.setRoot(pagex, data, null)
		resolve();
		/*End_c8o_function:CTS1603722109657*/
		});
	}


	/**
	 * Function getTranslate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109663(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109663*/
		page.c8o.log.debug(event ? event.toString():'no event');
		let translateService = this.getInstance(TranslateService);
		translateService.get('loginko').subscribe(
		        value => {
		          // value is our translated string
		          this.local['loginko'] = value;
		          resolve();
		        }
		      );
		/*End_c8o_function:CTS1603722109663*/
		});
	}


	/**
	 * Function setContinueTrue
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109675(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109675*/
		    this.local.continue = true;
		    if(!this.local.forceContinue){
		        setTimeout(()=>{
	                page["pass"]._elementRef.nativeElement.focus();
	            },50)
	            resolve();
		    }
		/*End_c8o_function:CTS1603722109675*/
		});
	}


	/**
	 * Function ATS1603722109693
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603722109693(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1603722109693: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603722109693: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603722109693: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603722109693: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallGetLanguage"] = stack["1603722109693"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallGetLanguage', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: get('threshold', `10000000000`), requestable: get('requestable', `'C8Oforms.GetLanguage'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{email: get('email', `c8oPage.form1603722109606.controls['email'].value`)}};
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
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["IfOK"] = stack["1603722109699"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfOK', actionFunction: 'IfAction', condition: get('condition', `parent.out.response != 'ko'`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["Log"] = stack["1603722109702"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Log', actionFunction: 'LogAction', level: get('level', `'info'`), message: get('message', `'Profil is known, set default language to ' + stack['CallGetLanguage'].out.response`)}, vars:{}};
		return this.actionBeans.LogAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] LogAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["ChangeLanguage"] = stack["1603722109705"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ChangeLanguage', actionFunction: 'CTS1603722109705'}, vars:{}};
		return this.CTS1603722109705(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109705 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1603722109708"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `stack['CallGetLanguage'].out.response`), Property: get('Property', `'language'`)}, vars:{}};
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
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["IfKO"] = stack["1603722109711"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfKO', actionFunction: 'IfAction', condition: get('condition', `parent.out.response == "ko"`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["Log"] = stack["1603722109714"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Log', actionFunction: 'LogAction', level: get('level', `'info'`), message: get('message', `'Profil is not known'`)}, vars:{}};
		return this.actionBeans.LogAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] LogAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603722109693: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603722109693: ended"); resolveP(res)});
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
	CTS1603722109705(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109705*/
		this.setLanguage(props.stack['CallGetLanguage'].out.response);
		this.tick();
		resolve();

		/*End_c8o_function:CTS1603722109705*/
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
	CTS1603722109786(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109786*/
		this.local.loginad = event;
		window["localStorage"]["setItem"]('__c8o_forms__loginad', event);

		resolve();
		/*End_c8o_function:CTS1603722109786*/
		});
	}


	/**
	 * Function ATS1603722109867
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603722109867(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1603722109867: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603722109867: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603722109867: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603722109867: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["OAuthLogin"] = stack["1603722109867"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'OAuthLogin', actionFunction: 'OAuthLoginAction', checkAccessTokenRequestable: get('checkAccessTokenRequestable', `'lib_OAuth.checkAccessTokenGoogle'`), clientid: get('clientid', `c8oPage.listen(['lib_OAuth.GetOAuthCredentials']).GoogleClientID`), provider: get('provider', `'openid'`), scope: get('scope', `'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'`), loginRequestable: get('loginRequestable', `'lib_OAuth.loginGoogleWithCode'`), tenantid: null, response_type: get('response_type', `'code'`), callbackurl: get('callbackurl', `'https://test-convertigo.convertigo.net/convertigo/projects/lib_OAuth/getTokenGoogle.html'`), authorization_endpoint: get('authorization_endpoint', `'https://accounts.google.com/o/oauth2/v2/auth'`)}, vars:{}};
		return this.actionBeans.OAuthLoginAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["CustomAction"] = stack["1603722109870"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1603722109870'}, vars:{}};
		return this.CTS1603722109870(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109870 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1603722109873"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out.decodedToken != undefined`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["CallSequence"] = stack["1603722109876"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.LoginGoogle'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{lang: get('lang', `c8oPage.global['__secretL']`), decodedToken: get('decodedToken', `stack['OAuthLogin'].out.decodedToken`), name: get('name', `stack['OAuthLogin'].out.object.given_name`), surname: get('surname', `stack['OAuthLogin'].out.object.family_name`), displayName: get('displayName', `stack['OAuthLogin'].out.object.name`), picture: get('picture', `stack['OAuthLogin'].out.object.picture`)}};
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
		return new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1603722109882"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `out.ok == 'true'`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["setValsRedirect"] = stack["1603722109885"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setValsRedirect', actionFunction: 'CTS1603722109885'}, vars:{}};
		return this.CTS1603722109885(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109885 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["getTranslate"] = stack["1603722109891"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getTranslate', actionFunction: 'CTS1603722109891'}, vars:{}};
		return this.CTS1603722109891(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["Toast"] = stack["1603722109894"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.local['loginko']`)}, vars:{}};
		return this.actionBeans.ToastAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109891 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] OAuthLoginAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603722109867: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603722109867: ended"); resolveP(res)});
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
	CTS1603722109870(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109870*/
		console.log(props.parent.out);
		resolve();
		/*End_c8o_function:CTS1603722109870*/
		});
	}


	/**
	 * Function setValsRedirect
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109885(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109885*/
		    if(window.navigator.onLine == false){
		        this.c8o.session.user.name = props.stack.Login.out.user;
		    }
		    let data= {};
		    let pagex = "selectorPage";
		    if(this.local.page != undefined && this.local.page != ':page'){
		        pagex = this.local.page;
		        switch(pagex){
		        case "editorPage":
		            if(this.local.formId != undefined){
	                    data["formId"] = page.local.formId;
	                }
		            break;
	            case "viewerPage":
	                if(this.local.formId != undefined){
	                    data["formId"] = page.local.formId;
	                }
	                if(this.local.edit != undefined){
	                    data["edit"] = page.local.edit;
	                }
	                break;
	            case "selectorPage":
	                data["published"] = page.local.published;
                    break;
	            case "linkPage":
	                data["d"] = page.local.d;
	                data["e"] = page.local.e;
                    
		        }
		        
		    }
		    
		    page.routerProvider.setRoot(pagex, data, null)
		resolve();
		/*End_c8o_function:CTS1603722109885*/
		});
	}


	/**
	 * Function getTranslate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109891(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109891*/
		page.c8o.log.debug(event ? event.toString():'no event');
		let translateService = this.getInstance(TranslateService);
		translateService.get('loginko').subscribe(
		        value => {
		          // value is our translated string
		          this.local['loginko'] = value;
		          resolve();
		        }
		      );
		/*End_c8o_function:CTS1603722109891*/
		});
	}


	/**
	 * Function ATS1603722109936
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603722109936(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1603722109936: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603722109936: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603722109936: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603722109936: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["OAuthLogin"] = stack["1603722109936"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'OAuthLogin', actionFunction: 'OAuthLoginAction', checkAccessTokenRequestable: null, clientid: get('clientid', `c8oPage.listen(['lib_OAuth.GetOAuthCredentials']).AzureAdClientID`), provider: get('provider', `'azure'`), scope: null, loginRequestable: null, tenantid: null, response_type: null, callbackurl: get('callbackurl', `'https://c8ocloud.convertigo.net/convertigo/projects/lib_OAuth/getToken.html'`), authorization_endpoint: null}, vars:{}};
		return this.actionBeans.OAuthLoginAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["CustomAction"] = stack["1603722109939"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1603722109939'}, vars:{}};
		return this.CTS1603722109939(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109939 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1603722109942"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out.login == 'ok'`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["CallSequence"] = stack["1603722109945"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.LoginMicrosoft'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{lang: get('lang', `c8oPage.global['__secretL']`), decodedToken: get('decodedToken', `stack['OAuthLogin'].out.authUser`), name: get('name', `stack['OAuthLogin'].out.object.givenName`), surname: get('surname', `stack['OAuthLogin'].out.object.surname`), displayName: get('displayName', `stack['OAuthLogin'].out.object.displayName`)}};
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
		return new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1603722109951"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `out.ok == 'true'`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["setValsRedirect"] = stack["1603722109954"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setValsRedirect', actionFunction: 'CTS1603722109954'}, vars:{}};
		return this.CTS1603722109954(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109954 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["getTranslate"] = stack["1603722109960"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getTranslate', actionFunction: 'CTS1603722109960'}, vars:{}};
		return this.CTS1603722109960(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["Toast"] = stack["1603722109963"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.local['loginko']`)}, vars:{}};
		return this.actionBeans.ToastAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603722109960 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] OAuthLoginAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603722109936: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603722109936: ended"); resolveP(res)});
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
	CTS1603722109939(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109939*/
		console.log(props.parent.out);
		resolve();
		/*End_c8o_function:CTS1603722109939*/
		});
	}


	/**
	 * Function setValsRedirect
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109954(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109954*/
		    if(window.navigator.onLine == false){
		        this.c8o.session.user.name = props.stack.Login.out.user;
		    }
		    let data= {};
		    let pagex = "selectorPage";
		    if(this.local.page != undefined && this.local.page != ':page'){
		        pagex = this.local.page;
		        switch(pagex){
		        case "editorPage":
		            if(this.local.formId != undefined){
	                    data["formId"] = page.local.formId;
	                }
		            break;
	            case "viewerPage":
	                if(this.local.formId != undefined){
	                    data["formId"] = page.local.formId;
	                }
	                if(this.local.edit != undefined){
	                    data["edit"] = page.local.edit;
	                }
	                break;
	            case "selectorPage":
	                data["published"] = page.local.published;
                    break;
	            case "linkPage":
	                data["d"] = page.local.d;
	                data["e"] = page.local.e;
                    
		        }
		        
		    }
		    
		    page.routerProvider.setRoot(pagex, data, null)
		resolve();
		/*End_c8o_function:CTS1603722109954*/
		});
	}


	/**
	 * Function getTranslate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1603722109960(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603722109960*/
		page.c8o.log.debug(event ? event.toString():'no event');
		let translateService = this.getInstance(TranslateService);
		translateService.get('loginko').subscribe(
		        value => {
		          // value is our translated string
		          this.local['loginko'] = value;
		          resolve();
		        }
		      );
		/*End_c8o_function:CTS1603722109960*/
		});
	}


	/**
	 * Function ATS1572447936955
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572447936955(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572447936955: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572447936955: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572447936955: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572447936955: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser1"] = stack["1572447936955"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser1', actionFunction: 'CTS1572447936955'}, vars:{}};
		return this.CTS1572447936955(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1572447936955 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572447936955: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572447936955: ended"); resolveP(res)});
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
	CTS1572447936955(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1572447936955*/
		    // Getting user status (whenever he is logged or not)
		    
		    const request = window["indexedDB"]["open"]("MyTestDatabase", 3);
		    request.onerror = (event)=> {
		        window.alert(this.translate.instant("brower_not_supported"));
		        page.local["notsupported"] = true;
		      };
		      
		      let indexPWA = window.location.pathname.indexOf("pwas");
		      let indexMobile = window.location.pathname.indexOf("mobile");
		      // if we started in standalone pwa mode
		      if(indexPWA != -1 && indexMobile == -1){
		          let indexHtml = window.location.pathname.indexOf("index.html");
		          let standalonePwa = window.location.pathname.substring(indexPWA + 5, indexHtml -1)
		          // get url base
		          const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
		          page.c8o.httpPublic.get(baseUrl + "/manifest.json")
		          .subscribe(
                    response => {
                        if(response["anonymous"] == true){
                            /*let data = {"i": standalonePwa};
                            let pagex = "viewerPage";
                            setTimeout(()=>{
                                page.routerProvider.setRoot(pagex, data, null)
                            }, 200);
                            resolve(false);*/
                            let data= {u:standalonePwa};
                            let pagex = "sharingPage";
                            setTimeout(()=>{
                                page.routerProvider.setRoot(pagex, data, null)
                            }, 200);
                            resolve(false);
                        }
                        else{
                            this.local.formId = standalonePwa;
                            this.local.page = "viewerPage";
                            page.c8o.httpInterface.getUserServiceStatus()
                            .then((res)=>{
                                if(res.user.length == 64 || res.user.authenticated == false){
                                    resolve(true);
                                }
                                else{
                                    let data = {"formId": page.local.formId};
                                    let pagex = "viewerPage";
                                    setTimeout(()=>{
                                        page.routerProvider.setRoot(pagex, data, null)
                                    }, 200);
                                    resolve(false);
                                }
                            })
                            .catch((err)=>{
                                resolve(true);
                            })
                        }
                        console.log(JSON.stringify(response));
                    },
                    error=>{
                        reject(error);
                    })
		      }
		      else{
		          this.show = false;
	                this.local.formId = (this.navParams.get('formId') != undefined && this.navParams.get('formId') != ":formId") ? this.navParams.get('formId') : null;
	                this.local.page = (this.navParams.get('page') != undefined && this.navParams.get('page') != ":page") ? this.navParams.get('page') : null;
	                this.local.edit = (this.navParams.get('edit') != undefined && this.navParams.get('edit') != ":edit") ? this.navParams.get('edit') : null;
	                this.local.published = (this.navParams.get('published') != undefined && this.navParams.get('published') != ":published") ? this.navParams.get('published') : null;
	                if(this.navParams.get('e') != undefined && this.navParams.get('e') != ":e"){
	                    this.local.e =  this.navParams.get('e');  
	                   }
	                   if(this.navParams.get('d') != undefined && this.navParams.get('d') != ":d"){
	                       this.local.d =  this.navParams.get('d');  
	                   }
	                    page.c8o.httpInterface.getUserServiceStatus()
	                    .then((res)=>{
	                        if(res.user.length == 64 || res.user.authenticated == false){
	                            resolve(true);
	                        }
	                        else{
	                            page.local.user = res.user;
	                            let data= {};
	                            let pagex = "selectorPage";
	                            if(this.local.page != undefined && this.local.page != ':page'){
	                                pagex = this.local.page;
	                                switch(pagex){
	                                case "editorPage":
	                                    if(this.local.formId != undefined){
	                                        data["formId"] = page.local.formId;
	                                    }
	                                    break;
	                                case "viewerPage":
	                                    if(this.local.formId != undefined){
	                                        data["formId"] = page.local.formId;
	                                    }
	                                    if(this.local.edit != undefined){
	                                        data["edit"] = page.local.edit;
	                                    }
	                                    break;
	                                case "selectorPage":
	                                    data["published"] = page.local.published;
	                                    break;
	                                    
	                                }
	                                
	                            }
	                            setTimeout(()=>{
	                                page.routerProvider.setRoot(pagex, data, null)
	                            }, 200);
	                            resolve(false);
	                        }
	                    })
	                    .catch((err)=>{
	                        resolve(true);
	                    })
		      }
                
                
        
		    
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
		/*End_c8o_function:CTS1572447936955*/
		});
	}

}
