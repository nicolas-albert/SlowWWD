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

@IonicPage({priority: 'low', segment: 'path-to-manageaccessrights', defaultHistory: []})
@Component({selector: 'page-manageaccessrights', templateUrl: 'manageaccessrights.html', changeDetection: ChangeDetectionStrategy.Default})
export class ManageAccessRights extends C8oPage  {
	
	@ViewChildren("ElseBlock_1591884082936") public all_ElseBlock_1591884082936 : QueryList<any>;
	@ViewChild("ElseBlock_1591884082936") public ElseBlock_1591884082936;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "ManageAccessRights";
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
			this.ATS1591962058419({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
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
	CTS1591889064754(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1591889064754*/
		    
		        

		        // set val to the value of the searchbar
		        const val = event.target.value;

		        // if the value is an empty string don't filter the items
		        page.local["group"] = {};
		        if (val && val.trim() != '') {
		            for(let item in page.local["_group"]){
		                if((item.toLowerCase().indexOf(val.toLowerCase()) > -1)){
		                    page.local["group"][item] = page.local["_group"][item]
		                }
		            }
		        }
		        else{
		            page.local["group"] = page.local["_group"];
		        }
		      
		resolve();
		/*End_c8o_function:CTS1591889064754*/
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
	CTS1592313514785(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592313514785*/
		for(let i in this.local._group){
		    this.local._group[i] = event["value"];
		}
		resolve();
		/*End_c8o_function:CTS1592313514785*/
		});
	}


	/**
	 * Function ATS1591962058419
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1591962058419(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1591962058419: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1591962058419: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1591962058419: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1591962058419: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1591962058419"] = {};
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
		let self: any = stack["CallSequence"] = stack["1591801294473"] = {};
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
		let self: any = stack["SetValue"] = stack["1591801527704"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetValue', actionFunction: 'CTS1591801527704'}, vars:{}};
		return this.CTS1591801527704(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1591962090453"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1591801527704 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1586254399526 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1591962058419: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1591962058419: ended"); resolveP(res)});
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
	CTS1591801527704(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1591801527704*/
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
		        let existingGrps = page['navParams']['data']['existingGrps']['c8oGrp'] != undefined ? page['navParams']['data']['existingGrps']['c8oGrp'] : [];
		        for(let elem of grp){
		            page.local["group"][elem] = existingGrps[elem] != undefined ?existingGrps[elem] : false;
		        }
		        page.local["_group"] = JSON.parse(JSON.stringify(page.local["group"]));
		    }
		    
            
		    
		    
		resolve();
		/*End_c8o_function:CTS1591801527704*/
		});
	}


	/**
	 * Function ATS1591882841545
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1591882841545(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1591882841545: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1591882841545: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1591882841545: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1591882841545: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SaveProperties"] = stack["1591882841545"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SaveProperties', actionFunction: 'CTS1591882841545'}, vars:{}};
		return this.CTS1591882841545(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["CloseModal"] = stack["1591882841548"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1591882841545 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1591882841545: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1591882841545: ended"); resolveP(res)});
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
	CTS1591882841545(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1591882841545*/
		    
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
		    
            
            
		/*End_c8o_function:CTS1591882841545*/
		});
	}

}
