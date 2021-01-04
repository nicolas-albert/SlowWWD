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
import * as RandomVal from 'get-random-values';
import { sha256 } from 'js-sha256';
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { C8oSessionStatus } from 'c8osdkangular';


/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'path-to-popoverpageselector', defaultHistory: []})
@Component({selector: 'page-popoverpageselector', templateUrl: 'popoverpageselector.html', changeDetection: ChangeDetectionStrategy.Default})
export class popOverPageSelector extends C8oPage  {
	
	@ViewChildren("ElseBlock_1594297430140") public all_ElseBlock_1594297430140 : QueryList<any>;
	@ViewChild("ElseBlock_1594297430140") public ElseBlock_1594297430140;

	@ViewChildren("ElseBlock_1606815129027") public all_ElseBlock_1606815129027 : QueryList<any>;
	@ViewChild("ElseBlock_1606815129027") public ElseBlock_1606815129027;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "popOverPageSelector";
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
	upperFirst(str: string){
	   return  str[0].toUpperCase() + str.slice(1);	    
	}
	
	public replaceEmpty(str){
	    return str.replace(/ /g, '_');
	}
	public isVisible(){
	    try{
	        if(this['navParams']['data']['selectedForm']['~c8oAcl'] == this.global.user){
	            return true
	        }
	        else{
	            var formGrp = Object
	            .keys(this['navParams']['data'].selectedForm.c8oGrp)
	            .filter(k => this['navParams']['data'].selectedForm.c8oGrp[k])
	            
	            var userGrp = Object
	            .keys(this.global.settings.groups)
	            .filter(k => this.global.settings.groups[k]);
	            
	            return (formGrp.filter(e => userGrp.indexOf(e) !== -1)).length > 0;
	        }
	    }
	    catch(e){
	        return false;
	    }
	    
	    
	    
	}
	
	public blobToBase64(blobData){
	    return new Promise( async (resolve, reject) => {
	        var reader = new FileReader();
	        reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.readAsDataURL(blobData);
	    });
	}
	/*End_c8o_PageFunction*/
	
	
	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1576682866944({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1606727297010
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606727297010(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606727297010: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606727297010: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606727297010: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606727297010: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1606727297010"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606727065524'}, vars:{selectedForm: get('selectedForm', `c8oPage.navParams.data.selectedForm`)}};
		return this.actionBeans.STS1606727065524(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1606727210916"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ClosePopover', actionFunction: 'ClosePopoverAction'}, vars:{}};
		return this.actionBeans.ClosePopoverAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ClosePopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606727065524 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606727297010: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606727297010: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1606728735390
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606728735390(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606728735390: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606728735390: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606728735390: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606728735390: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1606728735390"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606728678097'}, vars:{selectedForm: get('selectedForm', `c8oPage.navParams.data.selectedForm`)}};
		return this.actionBeans.STS1606728678097(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1606728763646"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ClosePopover', actionFunction: 'ClosePopoverAction'}, vars:{}};
		return this.actionBeans.ClosePopoverAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ClosePopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606728678097 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606728735390: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606728735390: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1606729477447
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606729477447(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606729477447: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606729477447: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606729477447: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606729477447: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1606729477447"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606729290054'}, vars:{selectedForm: get('selectedForm', `c8oPage.navParams.data.selectedForm`)}};
		return this.actionBeans.STS1606729290054(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1606729508786"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ClosePopover', actionFunction: 'ClosePopoverAction'}, vars:{}};
		return this.actionBeans.ClosePopoverAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ClosePopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606729290054 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606729477447: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606729477447: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1606730033022
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606730033022(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606730033022: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606730033022: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606730033022: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606730033022: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1606730033022"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606729949504'}, vars:{selectedForm: get('selectedForm', `c8oPage.navParams.data.selectedForm`)}};
		return this.actionBeans.STS1606729949504(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1606730073904"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ClosePopover', actionFunction: 'ClosePopoverAction'}, vars:{}};
		return this.actionBeans.ClosePopoverAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ClosePopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606729949504 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606730033022: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606730033022: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1606731395074
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606731395074(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606731395074: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606731395074: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606731395074: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606731395074: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["invokeReplaceEmpty"] = stack["1606731395074"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'invokeReplaceEmpty', actionFunction: 'STS1606731053716'}, vars:{name: get('name', `c8oPage.navParams.data.selectedForm.name`)}};
		return this.actionBeans.STS1606731053716(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeGetOffset"] = stack["1606731828288"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeGetOffset', actionFunction: 'STS1606731751926'}, vars:{}};
		return this.actionBeans.STS1606731751926(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1606730952228"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606730370814'}, vars:{selectedForm: get('selectedForm', `c8oPage.navParams.data.selectedForm`), name: get('name', `stack['invokeReplaceEmpty'].out`), offset: get('offset', `stack['InvokeGetOffset'].out`)}};
		return this.actionBeans.STS1606730370814(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1606731874517"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ClosePopover', actionFunction: 'ClosePopoverAction'}, vars:{}};
		return this.actionBeans.ClosePopoverAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ClosePopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606730370814 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606731751926 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606731053716 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606731395074: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606731395074: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1606829749824
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606829749824(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606829749824: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606829749824: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606829749824: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606829749824: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1606829749824"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606828765731'}, vars:{selectedForm: get('selectedForm', `c8oPage.navParams.data.selectedForm`)}};
		return this.actionBeans.STS1606828765731(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1606844004989"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ClosePopover', actionFunction: 'ClosePopoverAction'}, vars:{}};
		return this.actionBeans.ClosePopoverAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ClosePopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606828765731 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606829749824: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606829749824: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1576682866944
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1576682866944(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1576682866944: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1576682866944: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1576682866944: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1576682866944: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser1"] = stack["1576682866944"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser1', actionFunction: 'CTS1576682866944'}, vars:{}};
		return this.CTS1576682866944(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1576682866944 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1576682866944: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1576682866944: ended"); resolveP(res)});
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
	CTS1576682866944(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576682866944*/
		    // Getting user status (whenever he is logged or not)
		    if(page.c8o.session.status == C8oSessionStatus.Connected || page.c8o.session.status == C8oSessionStatus.HasBeenConnected){
                resolve(true);
            }
		    page.c8o.httpInterface.getUserServiceStatus()
		    .then((res)=>{
		        if(res.user.length == 64 || res.user.authenticated == false){
		            setTimeout(()=>{
	                    page.routerProvider.setRoot("loginPage", {}, null); 
	                }, 200);
                    resolve(false);
                }
                else{
                    
                    resolve(true);
                }
		    })
		    .catch((err)=>{
		        setTimeout(()=>{
		            page.routerProvider.setRoot("loginPage", {}, null); 
		        }, 200);
		        resolve(false);
		    })
              
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
		/*End_c8o_function:CTS1576682866944*/
		});
	}

}
