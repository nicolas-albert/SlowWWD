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
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import * as ts from 'typescript';


/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'path-to-dropfilepage', defaultHistory: []})
@Component({selector: 'page-dropfilepage', templateUrl: 'dropfilepage.html', changeDetection: ChangeDetectionStrategy.Default})
export class dropFilePage extends C8oPage  {
	
	@ViewChildren("ElseBlock_1606503476909") public all_ElseBlock_1606503476909 : QueryList<any>;
	@ViewChild("ElseBlock_1606503476909") public ElseBlock_1606503476909;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "dropFilePage";
	/*Begin_c8o_PageDeclaration*/
	public fileSelected = false;
	public idSession = (new Date).getTime();
	public files = [];
	public idFiles ="";
	public multiple;
	public idItem;
	public name;
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		
		/*Begin_c8o_PageConstructor*/
		this.idFiles = this.global["id"];
		this.multiple = this.global["multiple"];
		this.idItem = this.global["__tempITEMID"];
		this.name = this.global["__tempITEMNAME"];
		this.local["barcoderesult"] = null;
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	
	async post() :Promise<any>{
        for(let file of this.files){
            let type = (file.type == undefined || file.type == "") ? "application/octet-stream":file.type;
            await this.router.c8o.callJson("fs://c8oformstemp.put_attachment",
                    "docid",'temp_'+this.idSession,
                    "name",file.name,
                    "content_type", type,
                    "content", file)
                    .async();
        }
	}
	
	public FileConvertSize(aSize){
	    
	    aSize = Math.abs(parseInt(aSize, 10));
	    var def = [[1, 'octets'], [1024, 'ko'], [1024*1024, 'Mo'], [1024*1024*1024, 'Go'], [1024*1024*1024*1024, 'To']];
	    for(var i=0; i < def.length; i++){
	        if(aSize < def[i][0]) return (aSize/((def[i-1][0]) as any)).toFixed(2)+' '+def[i-1][1];
	    }
	    
	}
	    
    async importAttachment(idForm, name, b64): Promise<any>{
        let b64Data = b64.split(',');
        if(b64Data.length == 2){
            let matches = /data:(.*);base64/.exec(b64Data[0]);
            let  contentType = (matches !== null) ? matches[1] : "image/jpeg";
            try{
                await this.c8o.callJson("fs://c8oforms_fs.put_attachment", 
                    "docid", idForm, "name", name, "content_type", contentType, "content", b64Data[1]).async();
            }
            catch(e){
                console.log("Can not add attachment named " + name + " to id " + idForm);
            }
        }
    };
	/*End_c8o_PageFunction*/
	
	

	/**
	 * Function CustomAction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1550842695975(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1550842695975*/
		this.files.splice(vars.i, 1);
		resolve();
		/*End_c8o_function:CTS1550842695975*/
		});
	}


	/**
	 * Function ATS1550844560851
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1550844560851(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1550844560851: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1550844560851: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1550844560851: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1550844560851: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["AddFIles"] = stack["1550844560851"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'AddFIles', actionFunction: 'CTS1550844560851'}, vars:{}};
		return this.CTS1550844560851(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1571672370193"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994873907'}, vars:{}};
		return this.actionBeans.STS1554994873907(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994873907 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1550844560851 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1550844560851: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1550844560851: ended"); resolveP(res)});
		});
	}

	/**
	 * Function AddFIles
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1550844560851(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1550844560851*/
		
		for(let file of event["srcElement"]["files"]){
		    this.files.push(file);
		}
		
		resolve();
		/*End_c8o_function:CTS1550844560851*/
		});
	}


	/**
	 * Function AddFIles
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1550827125213(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1550827125213*/
		
		for(let file of event["srcElement"]["files"]){
		    this.files.push(file);
		}
		
		resolve();
		/*End_c8o_function:CTS1550827125213*/
		});
	}


	/**
	 * Function ATS1551090330471
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1551090330471(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1551090330471: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1551090330471: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1551090330471: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1551090330471: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["AddFIles"] = stack["1551090330471"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'AddFIles', actionFunction: 'CTS1551090330471'}, vars:{}};
		return this.CTS1551090330471(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1571672387783"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994873907'}, vars:{}};
		return this.actionBeans.STS1554994873907(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994873907 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1551090330471 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1551090330471: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1551090330471: ended"); resolveP(res)});
		});
	}

	/**
	 * Function AddFIles
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1551090330471(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1551090330471*/
		
		for(let file of event["srcElement"]["files"]){
		    this.files.push(file);
		}
		
		resolve();
		/*End_c8o_function:CTS1551090330471*/
		});
	}


	/**
	 * Function ATS1574357702014
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1574357702014(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1574357702014: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1574357702014: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1574357702014: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1574357702014: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["AddFIles"] = stack["1574357702014"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'AddFIles', actionFunction: 'CTS1574357702014'}, vars:{}};
		return this.CTS1574357702014(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1574357702017"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994873907'}, vars:{}};
		return this.actionBeans.STS1554994873907(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994873907 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1574357702014 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1574357702014: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1574357702014: ended"); resolveP(res)});
		});
	}

	/**
	 * Function AddFIles
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574357702014(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574357702014*/
		
		for(let file of event["srcElement"]["files"]){
		    this.files.push(file);
		}
		
		resolve();
		/*End_c8o_function:CTS1574357702014*/
		});
	}


	/**
	 * Function allowDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1550842982423(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1550842982423*/
		    event.preventDefault();
		    if (event.dataTransfer.types) {
		        for (var i = 0; i < event.dataTransfer.types.length; i++) {
		            if (event.dataTransfer.types[i] == "Files") {
		                if(this.multiple || this.files.length == 0){
		                   
		                    document.getElementById("__C8oCOntent").classList.add("shadow2");
		                }
		                else{
		                    resolve(false);
		                    return false;   
		                }
		            }
		        }
		    }
		resolve();
		/*End_c8o_function:CTS1550842982423*/
		});
	}


	/**
	 * Function drop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1550842982429(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1550842982429*/
		    if(this.navParams.data["import"] == true){
		        event.preventDefault();
		        console.log(event["dataTransfer"]);
		        console.log(event["dataTransfer"].types);
		        console.log(event["dataTransfer"].files);
		        document.getElementById("__C8oCOntent").classList.remove("shadow2");
                
		        if(event["dataTransfer"].files != undefined){
		            for (let item of event["dataTransfer"].files){
		                if(item.name.endsWith(".c8oforms")){
		                    this.files.push(item);
		                }
		            }
		        }
		    }
		    else{
		        event.preventDefault();
	            document.getElementById("__C8oCOntent").classList.remove("shadow2");
	            if(this.multiple || this.files.length == 0){
	                for(let file of event["dataTransfer"]["files"]){
	                    this.files.push(file);
	                }
	            }
	            else{
	                return;
	            }
		    }
		    
		resolve();
		/*End_c8o_function:CTS1550842982429*/
		});
	}


	/**
	 * Function dragleave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1550843824571(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1550843824571*/
		    document.getElementById("__C8oCOntent").classList.remove("shadow2");

		/*End_c8o_function:CTS1550843824571*/
		});
	}


	/**
	 * Function ATS1571672728758
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1571672728758(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1571672728758: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1571672728758: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1571672728758: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1571672728758: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["postLocal"] = stack["1571672728758"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'postLocal', actionFunction: 'CTS1571672728758'}, vars:{}};
		return this.CTS1571672728758(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1571672728761"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `c8oPage.files.length > 0`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["PublishEvent"] = stack["1571672728764"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PublishEvent', actionFunction: 'PublishEventAction', data: get('data', `c8oPage.name`), topic: get('topic', `'updateRed'`)}, vars:{}};
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
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["CloseModal"] = stack["1571672728767"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1571672728758 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1571672728758: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1571672728758: ended"); resolveP(res)});
		});
	}

	/**
	 * Function postLocal
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571672728758(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571672728758*/
		    if(this.navParams.data["import"]== true){
		        for(let elem of this.files){
		            try{
		                const reader = new FileReader();

	                     // This fires after the blob has been read/loaded.
	                     reader.addEventListener('loadend', (e) => {
	                       const text = e.srcElement["result"];
	                       let form = JSON.parse(text);
	                       delete form._id;
	                       delete form._attachments;
	                       delete form.creator;
	                       form.creator = page.global.user;
	                       form._id = ""+new Date().getTime();
	                       if(form.c8o_view_type_published_form != undefined){
	                           delete form.c8o_view_type_published_form;
	                       }
	                       form.c8o_view_type_drafts_form = true;
	                       if(form.wallpaper && form.wallpaper.enabled == true && form.wallpaper.type && form.wallpaper.type != "color" && form.wallpaper.b64 === undefined){
	                           form.wallpaper.enabled = false;
	                       }
	                       if(form.thumbnail && form.thumbnail.enabled == true && form.thumbnail.type && form.thumbnail.type != "color" && form.thumbnail.b64 === undefined){
                               form.thumbnail.enabled = false;
                           }
	                       page.c8o.callJsonObject("fs://c8oforms_fs.post", form)
	                       .then((res)=>{
	                           new Promise(async (resolve1, reject1)=>{
	                               try{
	                                   if(res["id"] && form.wallpaper && form.wallpaper.enabled == true && form.wallpaper.b64)
	                                       await this.importAttachment(res["id"], "wallpaper", form.wallpaper.b64);
	                               }
	                               catch(e){
	                                   page.c8o.log.debug("Error: ", e);
	                               }
	                               try{
	                                   if(res["id"] && form.thumbnail && form.thumbnail.enabled == true && form.thumbnail.b64)
	                                       await this.importAttachment(res["id"], "thumbnail", form.thumbnail.b64);
    	                           }
                                   catch(e){
                                       page.c8o.log.debug("Error: ", e);
                                   }
	                               resolve1();
	                           })
	                           .then(()=>{
	                               resolve();
	                            })
	                            .catch(()=>{
	                                resolve();
	                            });
	                           return null;
	                       })
	                       .fail((err)=>{
	                           page.c8o.log.debug("Error: ", err);
	                       })
	                       
	                     });
	                     reader.readAsText(elem);
		            }
		            catch(e){
		                page.c8o.log.debug("Error: ", e);
		            }
		            
		        }
		    }
		    else if (this.navParams.data["pwa"] == true){
                this.global["pwafile"] = this.files.slice(0);
                    
            }
		    else if (this.navParams.data["barcode"] == true){
		        page.global["barcoderesult"] = this.files.slice(0);
		    }
		    else{
		        this.global[this.idFiles][this.idItem] = this.global[this.idFiles][this.idItem].concat(this.files.slice(0));
	                
		    }
		    resolve();
		/*End_c8o_function:CTS1571672728758*/
		});
	}

}
