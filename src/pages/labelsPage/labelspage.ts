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

@IonicPage({priority: 'low', segment: 'path-to-labelspage', defaultHistory: []})
@Component({selector: 'page-labelspage', templateUrl: 'labelspage.html', changeDetection: ChangeDetectionStrategy.Default})
export class labelsPage extends C8oPage  {
	public static nbInstance = 0;

	@ViewChildren("ngxTag") public all_ngxTag : QueryList<any>;
	@ViewChild("ngxTag") public ngxTag;



	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "labelsPage";
	/*Begin_c8o_PageDeclaration*/
	public tags = [];
	public subTags = [];
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		labelsPage.nbInstance++;
		if (labelsPage.nbInstance == 1) {
			this.events.subscribe('ngxTagInputNgModelChange', (data) => {this.ETS1582202921564(data)});
		} else {
			this.events.unsubscribe('ngxTagInputNgModelChange');
			this.events.subscribe('ngxTagInputNgModelChange', (data) => {this.ETS1582202921564(data)});
		}
		
		
		
		/*Begin_c8o_PageConstructor*/
		if(this['navParams']['data']['form']["tag"] != undefined){
		    //legacy before ddoc V2
		    if(typeof(this['navParams']['data']['form']["tag"]) === "string"){
		        this.local.tag = Array.from(JSON.parse(this['navParams']['data']['form']["tag"]));
		    }
		    else{
		        this.local.tag = this['navParams']['data']['form']["tag"]
		    }
		}
		else{
		    this.local.tag = [];
		}
		if(this['navParams']['data']['form']["subTag"] != undefined){
            //legacy before ddoc V2
            if(typeof(this['navParams']['data']['form']["subTag"]) === "string"){
                this.local.subTag = Array.from(JSON.parse(this['navParams']['data']['form']["subTag"]));
            }
            else{
                this.local.subTag = this['navParams']['data']['form']["subTag"]
            }
        }
        else{
            this.local.subTag = [];
        }
		this.tags = this.local.tag;
		this.subTags = this.local.subTag;
        /*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	/*End_c8o_PageFunction*/
	
	ngOnDestroy() {
		labelsPage.nbInstance--;
		if (labelsPage.nbInstance <= 0) {
			this.events.unsubscribe('ngxTagInputNgModelChange');
			labelsPage.nbInstance = 0;
		}
		super.ngOnDestroy();
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
	 * Function ETS1582202921564
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1582202921564(data) {
		this.c8o.log.debug("[MB] ETS1582202921564: 'ngxTagInputNgModelChange' received");
		this.ATS1582202937193({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1582202937193
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1582202937193(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1582202937193: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1582202937193: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1582202937193: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1582202937193: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setTags"] = stack["1582202937193"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setTags', actionFunction: 'CTS1582202937193'}, vars:{}};
		return this.CTS1582202937193(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1582202937193 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1582202937193: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1582202937193: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setTags
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1582202937193(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1582202937193*/
		    if(event.ref == 'tags' || event.ref == 'subTags'){
		        let arrTmp = [];
	            for(let elem of event["event"]){
	                if(elem instanceof Object){
	                    arrTmp.push(elem["value"]);
	                }
	                else{
	                    arrTmp.push(elem);
	                }
	            }
	            page[event['ref']] = arrTmp;
		    }
		    resolve();
		    
		    
		/*End_c8o_function:CTS1582202937193*/
		});
	}


	/**
	 * Function ATS1586173508963
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586173508963(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586173508963: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586173508963: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586173508963: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586173508963: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SaveProperties"] = stack["1586173508963"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SaveProperties', actionFunction: 'CTS1586173508963'}, vars:{}};
		return this.CTS1586173508963(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["CloseModal"] = stack["1586173508966"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1586173508963 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586173508963: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586173508963: ended"); resolveP(res)});
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
	CTS1586173508963(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586173508963*/
		//this['navParams']['data']['form']["subTag"]
		page.c8o.callJsonObject("fs://c8oforms_fs.post", {
		    "_id":this['navParams']['data']['form']["_id"],
		    "_use_policy":"merge",
		    "_use_merge_tag":"override",
		    "_use_merge_subTag":"override",
		    "tag":this.tags,
		    "subTag":this.subTags
		})
		.then((res)=>{
		    resolve();
		    return null;
		})
		.fail((err)=>{
		    page.c8o.log.error("ERROR: labelsPage => SaveProperties", err);
		    resolve();
		})
		/*End_c8o_function:CTS1586173508963*/
		});
	}

}
