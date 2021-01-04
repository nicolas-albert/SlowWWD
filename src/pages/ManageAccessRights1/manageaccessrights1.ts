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

@IonicPage({priority: 'low', segment: 'path-to-manageaccessrights1', defaultHistory: []})
@Component({selector: 'page-manageaccessrights1', templateUrl: 'manageaccessrights1.html', changeDetection: ChangeDetectionStrategy.Default})
export class ManageAccessRights1 extends C8oPage  {
	
	@ViewChildren("ngxTag") public all_ngxTag : QueryList<any>;
	@ViewChild("ngxTag") public ngxTag;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "ManageAccessRights1";
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
	public ObjectKeys(obj:any){
	    if(obj != undefined){
	        return Object.keys(obj);
	    }
	    else{
	        return []
	        }
	    
	}
	/*End_c8o_PageFunction*/
	
	
	ionViewDidEnter() {
		super.ionViewDidEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1599471880449({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1577113262452({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1577113262452
	 *   Do not delete or disable !!
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1577113262452(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1577113262452: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1577113262452: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1577113262452: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1577113262452: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["initialization"] = stack["1577113262452"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'initialization', actionFunction: 'CTS1577113262452'}, vars:{}};
		return this.CTS1577113262452(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1577113262452 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1577113262452: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1577113262452: ended"); resolveP(res)});
		});
	}

	/**
	 * Function initialization
	 *   Do not delete or disable !!
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1577113262452(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1577113262452*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		resolve();
		/*End_c8o_function:CTS1577113262452*/
		});
	}


	/**
	 * Function ATS1599471880449
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1599471880449(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1599471880449: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1599471880449: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1599471880449: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1599471880449: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1599471880449"] = {};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["CallSequence"] = stack["1599471880452"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `true`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.GroupsOf'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{user: get('user', `c8oPage.global.user`)}};
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
		let self: any = stack["SetValue"] = stack["1599471880458"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetValue', actionFunction: 'CTS1599471880458'}, vars:{}};
		return this.CTS1599471880458(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1599471880461"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1599471880458 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1586254399526 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1599471880449: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1599471880449: ended"); resolveP(res)});
		});
	}

	/**
	 * Function SetValue
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1599471880458(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599471880458*/
		    page.local.share_mail = page["navParams"]["data"]["share_mail"];
		    let grp = [];
		    page.local["group"] = {};
		    if(props.stack["CallSequence"]["out"]["sequence"]["document"]["group"] != undefined){
		        if(!(props.stack["CallSequence"]["out"]["sequence"]["document"]["group"] instanceof Array)){
		             grp = [props.stack["CallSequence"]["out"]["sequence"]["document"]["group"]];
		        } 
		        else{
	                grp = props.stack["CallSequence"]["out"]["sequence"]["document"]["group"];
	            }
		        grp.sort((a, b)=> {
		            return a.toLowerCase().localeCompare(b.toLowerCase());
		        });
		        let array = []
		        for(let elem of grp){
		            if(elem.indexOf("_C8O_HIDDEN_") == -1){
		                let display = elem.indexOf("ad:")!= -1 ? elem.substring(3): elem;
		                display = "groupe: " + display;
		                let value = elem;
		                array.push({display:display, value: value});
		            }
		        }
		        let existingGrps = page['navParams']['data']['existingGrps']['c8oGrp'] != undefined ? page['navParams']['data']['existingGrps']['c8oGrp'] : [];
		        page.local.existingGrps = array;
		        for(let elem of grp){
		            page.local["group"][elem] = existingGrps[elem] != undefined ?existingGrps[elem] : false;
		        }
		        page.local["_group"] = JSON.parse(JSON.stringify(page.local["group"]));
		    }
		    
            
		    
		    
		resolve();
		/*End_c8o_function:CTS1599471880458*/
		});
	}


	/**
	 * Function ATS1599471880500
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1599471880500(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1599471880500: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1599471880500: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1599471880500: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1599471880500: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SaveProperties"] = stack["1599471880500"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SaveProperties', actionFunction: 'CTS1599471880500'}, vars:{}};
		return this.CTS1599471880500(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["CloseModal"] = stack["1599471880503"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1599471880500 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1599471880500: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1599471880500: ended"); resolveP(res)});
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
	CTS1599471880500(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599471880500*/
		    
		    if(this['navParams']['data']['resp'] != true){
		        // if no changes detected
		        if(JSON.stringify(this.local._group) === JSON.stringify(this.local.group)){
		            resolve();
		        }
		        else{
		            let grp = {};
		            for(let i in this.local["_group"]){
		                if(this.local["_group"][i] != this.local["group"][i]){
		                    grp[i] =  this.local["_group"][i];
		                }
		            }
		            page.c8o.callJsonObject("fs://c8oforms_fs.post",{
	                    "c8oGrp": grp,
	                    "_use_policy": "merge",
	                    "_id": page["navParams"]["data"]["existingGrps"]["_id"]
	                })
	                .then((res)=>{
	                    resolve();
	                    return null;
	                })
	                .fail((res)=>{
	                    resolve();
	                    console.log(res);
	                })
		        }
		        
		    }
		    else{
		        if(JSON.stringify(this.local._group) === JSON.stringify(this.local.group)){
                    resolve();
                }
                else{
                    let grp = {};
                    for(let i in this.local["_group"]){
                        if(this.local["_group"][i] != this.local["group"][i]){
                            grp[i] =  this.local["_group"][i];
                        }
                    }
    		        page.c8o.callJsonObject("fs://c8oforms_fs.post",{
                        "c8oGrp": grp,
                        "_use_policy": "merge",
                        "_id": page["navParams"]["data"]["existingGrps"]["_id"]
                    })
                    .then((res)=>{
                        resolve();
                        return null;
                    })
                    .fail((res)=>{
                        resolve();
                        console.log(res);
                    })
                    
    		        page.c8o.callJsonObject("fs://c8oforms_fs.post",{
    	                "groups": grp,
    	                "id": page["navParams"]["data"]["existingGrps"]["_id"],
    	                "_id":"control_document_set_users_in_group_"+ new Date().getTime()
    	            })
    	            .then((res)=>{
    	                resolve();
    	                return null;
    	            })
    	            .fail((res)=>{
    	                resolve();
    	                console.log(res);
    	            })
                }
		    }
		    
            
            
		/*End_c8o_function:CTS1599471880500*/
		});
	}

}
