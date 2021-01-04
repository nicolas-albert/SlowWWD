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

@IonicPage({priority: 'low', segment: 'path-to-conditionalpage', defaultHistory: []})
@Component({selector: 'page-conditionalpage', templateUrl: 'conditionalpage.html', changeDetection: ChangeDetectionStrategy.Default})
export class ConditionalPage extends C8oPage  {
	public static nbInstance = 0;

	@ViewChildren("ElseBlock_1595491981726") public all_ElseBlock_1595491981726 : QueryList<any>;
	@ViewChild("ElseBlock_1595491981726") public ElseBlock_1595491981726;

	@ViewChildren("ElseBlock_1594993065876") public all_ElseBlock_1594993065876 : QueryList<any>;
	@ViewChild("ElseBlock_1594993065876") public ElseBlock_1594993065876;

	@ViewChildren("ngxTag") public all_ngxTag : QueryList<any>;
	@ViewChild("ngxTag") public ngxTag;

	@ViewChildren("ElseBlock_1595424926188") public all_ElseBlock_1595424926188 : QueryList<any>;
	@ViewChild("ElseBlock_1595424926188") public ElseBlock_1595424926188;

	@ViewChildren("ElseBlock_1595246658893") public all_ElseBlock_1595246658893 : QueryList<any>;
	@ViewChild("ElseBlock_1595246658893") public ElseBlock_1595246658893;


	@ViewChildren("ElseBlock_1596025160695") public all_ElseBlock_1596025160695 : QueryList<any>;
	@ViewChild("ElseBlock_1596025160695") public ElseBlock_1596025160695;


	@ViewChildren("divtext") public all_divtext : QueryList<any>;
	@ViewChild("divtext") public divtext;





	@ViewChildren("ElseBlock_1596036552699") public all_ElseBlock_1596036552699 : QueryList<any>;
	@ViewChild("ElseBlock_1596036552699") public ElseBlock_1596036552699;



	@ViewChildren("ElseBlock_1596117684818") public all_ElseBlock_1596117684818 : QueryList<any>;
	@ViewChild("ElseBlock_1596117684818") public ElseBlock_1596117684818;

	@ViewChildren("ElseBlock_1595862191603") public all_ElseBlock_1595862191603 : QueryList<any>;
	@ViewChild("ElseBlock_1595862191603") public ElseBlock_1595862191603;










	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "ConditionalPage";
	/*Begin_c8o_PageDeclaration*/
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		ConditionalPage.nbInstance++;
		if (ConditionalPage.nbInstance == 1) {
			this.events.subscribe('ngxTagInputNgModelChange', (data) => {this.ETS1595430806693(data)});
			this.events.subscribe('ngxTagInputRemoved', (data) => {this.ETS1595431922588(data)});
			this.events.subscribe('ngxTagInputAdded', (data) => {this.ETS1595432012773(data)});
		} else {
			this.events.unsubscribe('ngxTagInputNgModelChange');
			this.events.subscribe('ngxTagInputNgModelChange', (data) => {this.ETS1595430806693(data)});
			this.events.unsubscribe('ngxTagInputRemoved');
			this.events.subscribe('ngxTagInputRemoved', (data) => {this.ETS1595431922588(data)});
			this.events.unsubscribe('ngxTagInputAdded');
			this.events.subscribe('ngxTagInputAdded', (data) => {this.ETS1595432012773(data)});
		}
		
		
		
		/*Begin_c8o_PageConstructor*/
		this.local.visible = [];
		this.local.multipleField = {radio_group: true, checkbox_group: true, checkbox: true};
        this.local.simpleField = {date: true, select: true, datetime: true, time: true, radio: true, text: true, barcode: true, slider: true};
        this.local.fileField = {file: true};
        this.local.camSignField = {img: true, signature:true};


        this.local.multipleFieldGoToPage = {radio_group: true, checkbox_group: true, checkbox: true, select: true, radio: true};
        this.local.simpleFieldGoToPage = {date: true, datetime: true, time: true, text: true, barcode: true, slider: true};
        this.local.fileFieldGoToPage = {file: true};
        this.local.camSignFieldGoToPage = {img: true, signature:true};
        
        this.local.showVisible = false;
		this.local.condVisible = "and";
		this.local.showGoToPage = false;
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	/**
	 * returns type of field (simple, multiple, file, or camSign)
	 * @param type
	 */
	public getType(type: string): string{
	    if(this.local.multipleField[type] == true){
	        return "multiple";
	    }
	    else if(this.local.simpleField[type] == true){
	        return "simple";
	    }
	    else if(this.local.fileField[type] == true){
	        return "file";
	    }
        else if(this.local.camSignField[type] == true){
            return "camSign"; 
        }
        else{
            return "";
        }
	    
	}
	public getGoToPageType(type: string): string{
        if(this.local.multipleFieldGoToPage[type] == true){
            return "multiple";
        }
        else if(this.local.simpleFieldGoToPage[type] == true){
            return "simple";
        }
        else if(this.local.fileFieldGoToPage[type] == true){
            return "file";
        }
        else if(this.local.camSignFieldGoToPage[type] == true){
            return "camSign"; 
        }
        else{
            return "";
        }
        
    }
	/**
	 * convert a string to an array
	 * @param e
	 */
	public strToArr(e){
	    if(typeof(e)== "string"){
	        return [e];
	    }
	    else{
	       return e; 
	    }
	}
	
	/**
	 * 
	 * @param name
	 */
	public getItemNameById(field: any){
	    if(field.source == true){
	        for(let key of Object.keys(this.navParams.data.form.formulaire)){
	            if(this.navParams.data.form.formulaire[key].id == field.str){
	                //console.log(this.navParams.data.form.formulaire[key]);
	                return this.navParams.data.form.formulaire[key].name;
	            }
	            else if(this.navParams.data.form.formulaire[key].type == "ion-card"){
	                for(let keyChild of Object.keys(this.navParams.data.form.formulaire[key]["children"])){
	                    if(this.navParams.data.form.formulaire[key]["children"][keyChild].id == field.str){
	                        return this.navParams.data.form.formulaire[key]["children"][keyChild].name;
	                    }
	                }
	            }
	        }
	    }
	    else{
	        return field.str;
	    }
	    
        return "";
	}
	
	public getItemNameByIdStr(str: any){
	    for(let key of Object.keys(this.navParams.data.form.formulaire)){
                if(this.navParams.data.form.formulaire[key].id == str){
                    return this.navParams.data.form.formulaire[key].name;
                }
                else if(this.navParams.data.form.formulaire[key].type == "ion-card"){
                    for(let keyChild of Object.keys(this.navParams.data.form.formulaire[key]["children"])){
                        if(this.navParams.data.form.formulaire[key]["children"][keyChild].id == str){
                            return this.navParams.data.form.formulaire[key]["children"][keyChild].name;
                        }
                    }
                }
            }
        
        
        return "";
    }
	
	public getPageNameByTech(str){
	    for(let page of this.navParams.data.form.pages){
	        if(page.pageTechName == str){
	            return page.name;
	        }
	    }
	}
	
	isTotalyFilled(cond){
	    try{
	        if(cond.subject != undefined && cond.subject == "field" && cond.val1 != undefined && (cond.val1.str != "" || (cond.val1.arr != undefined && cond.val1.arr.length > 0)) && cond.val2 != undefined && (cond.val2.str != "" || (cond.val2.arr != undefined && cond.val2.arr.length > 0)) && cond.operator != undefined && cond.operator != ""){
                return true;  
              } 
              else if(cond.subject != undefined && cond.subject == "field" && cond.val1 != undefined && (cond.val1.str != "" || (cond.val1.arr != undefined && cond.val1.arr.length > 0)) && cond.operator != undefined && cond.operator != "" && (cond.operator == "is_filled" || cond.operator == "is_empty")){
                 return true; 
              }
              else if(cond.val1 != undefined && (cond.val1.str != "" || (cond.val1.arr != undefined && cond.val1.arr.length > 0)) && cond.val2 != undefined && (cond.val2.str != "" || (cond.val2.arr != undefined && cond.val2.arr.length > 0)) && cond.operator != undefined && cond.operator != "" && cond.type == "goToPageIf"){
                  return true;
              }
              else if((cond.val1 != undefined && (cond.val1.str != "" || (cond.val1.arr != undefined && cond.val1.arr.length > 0)) && cond.operator != undefined && cond.operator != "" && (cond.operator == "is_filled" || cond.operator == "is_empty"))){
                  return true;
              }
              else if(cond.subject != undefined && cond.subject == "form" && cond.attribute != undefined && cond.attribute != "" && cond.operator != undefined && cond.operator != ""){
                  return true;
              }
              else if(cond.subject != undefined && cond.subject == "field" && cond.val1 != undefined && cond.val1.str != undefined && cond.operator != "" && cond.val1.type == "file"){
                  return true;
              }
              else if(cond.subject != undefined && cond.subject == "field" && cond.val1 != undefined && cond.val1.str != undefined && cond.operator != "" && (cond.val1.type == "signature" || cond.val1.type == "img")){
                  
              }
              else{
                  return false;
              }
	    }
	    catch(e){
	        return false;
	    }
	}
	
	public lengthOk(obj: any){
        try{
            return Object.keys(obj).length > 0;
        }
        catch(e){
            return false;
        }
       
    }
	/*End_c8o_PageFunction*/
	
	ngOnDestroy() {
		ConditionalPage.nbInstance--;
		if (ConditionalPage.nbInstance <= 0) {
			this.events.unsubscribe('ngxTagInputNgModelChange');
			this.events.unsubscribe('ngxTagInputRemoved');
			this.events.unsubscribe('ngxTagInputAdded');
			ConditionalPage.nbInstance = 0;
		}
		super.ngOnDestroy();
	}
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1595257902664({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
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
	CTS1595235564097(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595235564097*/
		switch(event){
		case "field":
		    for(const e of ["attribute", "operator"]){
                delete vars.current[e];
            }
		    for(const e of ["val1", "val2", "operator"]){
		        if(e == "operator"){
		            vars.current[e] = ""
		        }
		        else{
		           vars.current[e] = {str:"", source:false};  
		        }
            }
            
		    break;
		case "form":
		    for(const e of ["val1", "val2", "operator"]){
                delete vars.current[e];
            }
		    for(const e of ["attribute", "operator"]){
		        vars.current[e] = "";
		    }
		    break;
		}
		resolve();
		/*End_c8o_function:CTS1595235564097*/
		});
	}


	/**
	 * Function ATS1595231678514
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1595231678514(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1595231678514: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1595231678514: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1595231678514: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1595231678514: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["Popover"] = stack["1595231678514"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: get('data', `{form: c8oPage.navParams.data.form, self: c8oPage.navParams.data.self, var:'val1', current: stack.root.scope.params1595231667236.current}`), cssClass: null, showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.PopOverInputs'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1595231678517"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1595231678517'}, vars:{}};
		return this.CTS1595231678517(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1595231678517 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1595231678514: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1595231678514: ended"); resolveP(res)});
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
	CTS1595231678517(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595231678517*/
		resolve();
		/*End_c8o_function:CTS1595231678517*/
		});
	}


	/**
	 * Function SetVal2Properly
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1596111344187(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596111344187*/
		let previous = vars.previousOperator;
		let actual = event;
		let simple = ["equals", "different", "greater", "minus", "greaterequals", "minusequals"];
		let multiple = ["among_following", "out_following", "contains", "not_contains"];
		//get previous state was simple
		let previousState = (simple.indexOf(previous) != -1) ? "simple": (multiple.indexOf(previous) != -1)  ? "multiple": "nothing";
		//get actual state was simple
		let actualState = (simple.indexOf(actual) != -1) ? "simple": (multiple.indexOf(actual) != -1)  ? "multiple": "nothing";
		// if previous and actual state are not the same we have to perform an operation
		if(previousState != actualState){
		    // in case of simple becoming a multiple remove str
		    if(previousState == "simple" && actualState == "multiple"){
		        try{
		            props.stack.root.scope.params1595231667236.current.val2.str = "";
		        }
		        catch(e){
		            
		        }
		        
		    }
		    // in case of a a mutliple becoming a simple remove array
		    else if(previousState == "multiple" && actualState == "simple"){
		        delete props.stack.root.scope.params1595231667236.current.val2.arr;		
		    }
		}
		// if actual state is nothing set val 2 to zero
		if(actualState == "nothing"){
		    props.stack.root.scope.params1595231667236.current.val2.str = "";
		    delete props.stack.root.scope.params1595231667236.current.val2.arr;       
		}
		// save new operator
		props.stack.root.scope.params1595231667236.current.operator = event;
		
		resolve();
		/*End_c8o_function:CTS1596111344187*/
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
	 * Function ATS1595428717248
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1595428717248(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1595428717248: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1595428717248: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1595428717248: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1595428717248: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["Popover"] = stack["1595428717248"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: get('data', `{form: c8oPage.navParams.data.form, self: c8oPage.navParams.data.self, var:'val2', current: stack.root.scope.params1595423161001.current,type: 'multiple', suj: 'arr'}`), cssClass: null, showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.PopOverInputs'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["DoNothing"] = stack["1595428717251"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DoNothing', actionFunction: 'CTS1595428717251'}, vars:{}};
		return this.CTS1595428717251(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1595428717251 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1595428717248: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1595428717248: ended"); resolveP(res)});
		});
	}

	/**
	 * Function DoNothing
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1595428717251(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595428717251*/
		resolve();
		/*End_c8o_function:CTS1595428717251*/
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
	CTS1595423295768(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595423295768*/
		if(vars.el.source == true){
		    vars.el.str = (<any>page).getItemNameById(vars.el)
		    vars.el.source = false;
		}
		   
		    //this.global.visibleVal.source = false;
		    resolve();
		/*End_c8o_function:CTS1595423295768*/
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
	CTS1596011963335(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596011963335*/
		props.stack.root.scope.params1595423161001.current.val2.str = event;
		resolve();
		/*End_c8o_function:CTS1596011963335*/
		});
	}


	/**
	 * Function ATS1595423295792
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1595423295792(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1595423295792: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1595423295792: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1595423295792: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1595423295792: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["Popover"] = stack["1595423295792"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: get('data', `{form: c8oPage.navParams.data.form, self: c8oPage.navParams.data.self, var:'val2', current: stack.root.scope.params1595423161001.current,type: stack.root.scope.params1595423161001.type}`), cssClass: null, showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.PopOverInputs'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["DoNothing"] = stack["1595423295795"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DoNothing', actionFunction: 'CTS1595423295795'}, vars:{}};
		return this.CTS1595423295795(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1595423295795 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1595423295792: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1595423295792: ended"); resolveP(res)});
		});
	}

	/**
	 * Function DoNothing
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1595423295795(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595423295795*/
		resolve();
		/*End_c8o_function:CTS1595423295795*/
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
	CTS1595237218870(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595237218870*/
		
		const length = this.local.visible.length;
		if(length == 1){
		    this.local.visible.push({
                type:"visibleIf",
                subject:""
            });
		}
		this.local.visible.splice(vars.i, 1);
		
		resolve();
		/*End_c8o_function:CTS1595237218870*/
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
	CTS1595233702207(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595233702207*/
		//this.local.visible.push({visibleVal:{str:"", source:false}, visibleVal2: {str:"", source:false}, operator : "", visible: {element:""}});
		    this.local.visible.push({
                type:"visibleIf",
                subject:""
            });
		console.log(this.local.visible);
		resolve();
		/*End_c8o_function:CTS1595233702207*/
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
	CTS1595249678327(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595249678327*/
		this.local.showVisible = !this.local.showVisible;
		resolve();
		/*End_c8o_function:CTS1595249678327*/
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
	CTS1595491495664(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595491495664*/
		    this.local.showVisible = true;
		this.local.showGoToPage = false;
		resolve();
		/*End_c8o_function:CTS1595491495664*/
		});
	}


	/**
	 * Function ATS1596187732450
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1596187732450(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1596187732450: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1596187732450: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1596187732450: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1596187732450: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1596187732450"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `{}`), path: get('path', `'gridAndCheckboxStyleOnScroll'`)}};
		return this.actionBeans.STS1587563852086(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1587563852086 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1596187732450: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1596187732450: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setStyleOnscroll
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1596188538859(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596188538859*/
		if(event.currentTarget.scrollLeft > 0){
		    page.local["gridAndCheckboxStyleOnScroll"][vars.name] = true;
		    /*(event.currentTarget.querySelector('.class1588257810818')).style.boxShadow = "5px 0 5px -1px #ffffff";
	        (event.currentTarget.querySelector('.class1588257810845')).style.boxShadow = "5px 0 5px -1px #ffffff";*/
		}
		else{
		    page.local["gridAndCheckboxStyleOnScroll"][vars.name] = false;
            /*(event.currentTarget.querySelector('.class1588257810818')).style.boxShadow = "unset";
            (event.currentTarget.querySelector('.class1588257810845')).style.boxShadow = "unset";*/
		}
		
		resolve();
		/*End_c8o_function:CTS1596188538859*/
		});
	}


	/**
	 * Function SetVal2Properly
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1596446314389(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596446314389*/
		let previous = vars.previousOperator;
		let actual = event;
		let simple = ["equals", "different", "greater", "minus", "greaterequals", "minusequals"];
		let multiple = ["among_following", "out_following", "contains", "not_contains"];
		//get previous state was simple
		let previousState = (simple.indexOf(previous) != -1) ? "simple": (multiple.indexOf(previous) != -1)  ? "multiple": "nothing";
		//get actual state was simple
		let actualState = (simple.indexOf(actual) != -1) ? "simple": (multiple.indexOf(actual) != -1)  ? "multiple": "nothing";
		// if previous and actual state are not the same we have to perform an operation
		if(previousState != actualState){
		    // in case of simple becoming a multiple remove str
		    if(previousState == "simple" && actualState == "multiple"){
		        try{
		            props.stack.root.scope.params1595924991979.current.val2.str = "";
		        }
		        catch(e){
		            
		        }
		        
		    }
		    // in case of a a mutliple becoming a simple remove array
		    else if(previousState == "multiple" && actualState == "simple"){
		        delete props.stack.root.scope.params1595924991979.current.val2.arr;		
		    }
		}
		// if actual state is nothing set val 2 to zero
		if(actualState == "nothing"){
		    props.stack.root.scope.params1595924991979.current.val2.str = "";
		    delete props.stack.root.scope.params1595924991979.current.val2.arr;       
		}
		// save new operator
		props.stack.root.scope.params1595924991979.current.operator = event;
		
		resolve();
		/*End_c8o_function:CTS1596446314389*/
		});
	}


	/**
	 * Function ATS1596119862068
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1596119862068(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1596119862068: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1596119862068: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1596119862068: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1596119862068: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["DoNothing"] = stack["1596119862068"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DoNothing', actionFunction: 'CTS1596119862068'}, vars:{}};
		return this.CTS1596119862068(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ModalPage"] = stack["1596120249889"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `parent.out`), cssClass: null, blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.PreviewMultiple'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
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
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1596119862068 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1596119862068: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1596119862068: ended"); resolveP(res)});
		});
	}

	/**
	 * Function DoNothing
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1596119862068(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596119862068*/
		    let item;
		if(page["navParams"].data.j == undefined){
		    item = page["navParams"].data.form.formulaire[page["navParams"].data.i];
		}
		else{
		    item = page["navParams"].data.form.formulaire[page["navParams"].data.i]["children"][page["navParams"].data.j];
		}
		
		resolve({item: item, current: props.stack.root.scope.params1596119585918.current});
		/*End_c8o_function:CTS1596119862068*/
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
	CTS1596446314689(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596446314689*/
		let val1;
		/*if(page["navParams"].data.j == undefined){
		    val1 = {
                str: page["navParams"].data.form.formulaire[page["navParams"].data.i].name,
                "source": true,
                "type":page["navParams"].data.form.formulaire[page["navParams"].data.i].type,              
            };
		}
		else{
		    val1 = {
	                str: page["navParams"].data.form.formulaire[page["navParams"].data.i]["children"][page["navParams"].data.j].name,
	                "source": true,
	                "type":page["navParams"].data.form.formulaire[page["navParams"].data.i]["children"][page["navParams"].data.j].type,
	            };
		}*/
		val1 = {
		        str: this.local.item.id,
		         source: true,
		         type: this.local.item.type
		};
		 
         
		const length = this.local.goToPage.length;
		if(length == 1){
		    this.local.goToPage.push({
                type:"goToPageIf",
                subject:"",
                val1:val1,
                val2:{
                    str: "",
                    "source": false,
                    "type":"",
                    vals:{}
                    
                }
            });
		}
		this.local.goToPage.splice(vars.i, 1);
		
		resolve();
		/*End_c8o_function:CTS1596446314689*/
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
	CTS1595862191534(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595862191534*/
		//this.local.visible.push({visibleVal:{str:"", source:false}, visibleVal2: {str:"", source:false}, operator : "", visible: {element:""}});
		    let val1 = {
                str: this.local.item.id,
                source: true,
                type: this.local.item.type
            };
		
    		this.local.goToPage.push({
                    type:"goToPageIf",
                    val1:val1,
                    val2:{
                        str: "",
                        source: false,
                        type: "",
                        vals: this.local.template
                        //arr:
                    }
                });
    		console.log(this.local.visible);
    		resolve();
		/*End_c8o_function:CTS1595862191534*/
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
	CTS1595862191597(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595862191597*/
		this.local.showGoToPage = !this.local.showGoToPage;
		resolve();
		/*End_c8o_function:CTS1595862191597*/
		});
	}


	/**
	 * Function SetVal2Properly
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1596547270362(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596547270362*/
		let previous = vars.previousOperator;
		let actual = event;
		let simple = ["equals", "different", "greater", "minus", "greaterequals", "minusequals"];
		let multiple = ["among_following", "out_following", "contains", "not_contains"];
		//get previous state was simple
		let previousState = (simple.indexOf(previous) != -1) ? "simple": (multiple.indexOf(previous) != -1)  ? "multiple": "nothing";
		//get actual state was simple
		let actualState = (simple.indexOf(actual) != -1) ? "simple": (multiple.indexOf(actual) != -1)  ? "multiple": "nothing";
		// if previous and actual state are not the same we have to perform an operation
		if(previousState != actualState){
		    // in case of simple becoming a multiple remove str
		    if(previousState == "simple" && actualState == "multiple"){
		        try{
		            props.stack.root.scope.params1596115004349.current.val2.str = "";
		        }
		        catch(e){
		            
		        }
		        
		    }
		    // in case of a a mutliple becoming a simple remove array
		    else if(previousState == "multiple" && actualState == "simple"){
		        delete props.stack.root.scope.params1596115004349.current.val2.arr;		
		    }
		}
		// if actual state is nothing set val 2 to zero
		if(actualState == "nothing"){
		    props.stack.root.scope.params1596115004349.current.val2.str = "";
		    delete props.stack.root.scope.params1596115004349.current.val2.arr;       
		}
		// save new operator
		props.stack.root.scope.params1596115004349.current.operator = event;
		
		resolve();
		/*End_c8o_function:CTS1596547270362*/
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
	CTS1596547270662(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596547270662*/
		let val1;
		if(page["navParams"].data.j == undefined){
		    val1 = {
                str: page["navParams"].data.form.formulaire[page["navParams"].data.i].name,
                "source": true,
                "type":page["navParams"].data.form.formulaire[page["navParams"].data.i].type,              
            };
		}
		else{
		    val1 = {
	                str: page["navParams"].data.form.formulaire[page["navParams"].data.i]["children"][page["navParams"].data.j].name,
	                "source": true,
	                "type":page["navParams"].data.form.formulaire[page["navParams"].data.i]["children"][page["navParams"].data.j].type,
	            };
		}
		const length = this.local.goToPage.length;
		if(length == 1){
		    this.local.goToPage.push({
                type:"goToPageIf",
                subject:"",
                val1:val1,
                val2:{
                    str: "",
                    "source": false,
                    "type":"",
                    
                }
            });
		}
		this.local.goToPage.splice(vars.i, 1);
		
		resolve();
		/*End_c8o_function:CTS1596547270662*/
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
	CTS1595862191645(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595862191645*/
		    this.local.showVisible = false;
		if(this.local.showGoToPage == false){
		    this.local.showGoToPage = true;
		}
		if(this.local.goToPage.length == 0){
		    this.local.goToPage.push({subject:this.local.goToPageSubject})
		}
		resolve();
		/*End_c8o_function:CTS1595862191645*/
		});
	}


	/**
	 * Function ATS1596110338327
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1596110338327(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1596110338327: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1596110338327: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1596110338327: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1596110338327: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1596110338327"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1596110338327'}, vars:{values: get('values', `'value'`)}};
		return this.CTS1596110338327(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1595257870431"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1596110338327 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1596110338327: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1596110338327: ended"); resolveP(res)});
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
	CTS1596110338327(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596110338327*/
		let i =this.navParams.data.i;
		let j = this.navParams.data.j;
		let condVisible =  this.local.condVisible;
		let visible = this.local.visible;
		let goToPage = this.local.goToPage;
		
		// if variable i is set
		if(i!= undefined){
		    // if we are not into a card item
		    if(j == undefined){
		        //save visible conditions
		        this.navParams.data.form.formulaire[i].conditions.visibleIf.conds = visible;
		        this.navParams.data.form.formulaire[i].conditions.visibleIf.condVisible = condVisible;
		        //save go to page conditions
		        this.navParams.data.form.formulaire[i].conditions.goToPageIf.conds = goToPage;
		    }
		    // if we are into a card item
		    else{
		        //save visible conditions
		        this.navParams.data.form.formulaire[i].children[j].conditions.visibleIf.conds = visible;
                this.navParams.data.form.formulaire[i].children[j].conditions.visibleIf.condVisible = condVisible;
                //save go to page conditions
                this.navParams.data.form.formulaire[i].children[j].conditions.goToPageIf.conds = goToPage;
		    }
		    
		}
		resolve();
		/*End_c8o_function:CTS1596110338327*/
		});
	}


	/**
	 * Function ATS1595257902664
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1595257902664(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1595257902664: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1595257902664: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1595257902664: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1595257902664: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setDefs"] = stack["1595257902664"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setDefs', actionFunction: 'CTS1595257902664'}, vars:{}};
		return this.CTS1595257902664(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1595257902664 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1595257902664: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1595257902664: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setDefs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1595257902664(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595257902664*/
		
		    const returnTemplate = (item)=>{
		        let template = {};
		        for(let cond of item.conditions.goToPageIf.conds){
		            if(item.type == "checkbox_group" || item.type == "radio_group"){
		                template = {};
		                for(let line of item.lines){
		                    template[line.id] = [];
		                    for(let child in item["children"]){
		                        let action = cond.val2.vals != undefined ? cond.val2.vals[line.id] != undefined ?  cond.val2.vals[line.id].filter(e=>{return e.value == item["children"][child].id}) : []:[];
		                        action = action.length > 0 ? action[0].action : null;
		                        template[line.id].push({"value": item["children"][child].id, "action":action});
		                    }
		                }
		            }
		            else if(item.type == "checkbox" || item.type == "radio"){
                        template = {};
                        for(let child of item.children){
                            let action = cond.val2.vals != undefined ? cond.val2.vals[child.id] != undefined ? cond.val2.vals[child.id]  : "" :"";
                            template[child.id] = action;
                        }
                    }
		        }
		        this.local.template = template;
		            return template;
		    };		    
		    
		    // used for CheckBoxGroup
		    this.local.gridAndCheckboxStyleOnScroll = [];
		    let item;
            if(page["navParams"].data.j == undefined){
                item = page["navParams"].data.form.formulaire[page["navParams"].data.i];
            }
            else{
                item = page["navParams"].data.form.formulaire[page["navParams"].data.i]["children"][page["navParams"].data.j];
            }
            this.local.item = item;
            
            // if condition object doesn't exists we create it 
            if(item.conditions == undefined){
                item.conditions = {
                        "visibleIf":{
                            conds:[{
                                type:"visibleIf",
                                subject:""
                            }],
                            condVisible:"and"
                          },
                          "goToPageIf":{
                              conds:[{
                                  type:"goToPageIf",
                                  val1:{
                                      str: item.id,
                                      source: true,
                                      type: item.type
                                  },
                                  val2:{
                                      str: "",
                                      source: false,
                                      type: ""
                                  }
                              }],
                            condVisible:"and"
                          }
                      }; 
            };
            
            // set visisble if settings
            this.local.condVisible = item.conditions.visibleIf.condVisible; 
            this.local.visible = item.conditions.visibleIf.conds;
            this.local.val2Visible = [];
            for(let j in this.local.visible){
                if(this.local.visible[j].val2 != undefined && this.local.visible[j].val2.source){
                    if(this.local.visible[j].val2.arr != undefined){
                        for(let i in this.local.visible[j].val2.arr){
                            this.local.visible[j].val2.arr[i].display = this.getItemNameByIdStr(this.local.visible[j].val2.arr[i].value);
                        }
                    }
                }
            }
            // set go to page if settings
            this.local.condGoToPage = item.conditions.goToPageIf.condVisible;
            this.local.goToPageSelf = {
                    str: item.id,
                    source: true,
                    type: item.type
            };
            this.local.goToPage = item.conditions.goToPageIf.conds;
            this.local.goToPage[0].val2.vals = returnTemplate(item);
            
            
            
            
            
            
            
            
            
            
            
            
        /*    
            if(item["type"] == "checkbox_group"){
                this.local.templateValue = {};
                for(let line of item.lines){
                    this.local.templateValue[line.id] = [];
                    for(let child in item["children"]){
                        this.local.templateValue[line.id].push({"value": item["children"][child].id});
                    }
                }
            }  
            else if(item["type"] == "radio_group"){
                this.local.templateValue = {};
               
                this.local.templateValue = {"name":item["name"], "type": item["type"], "label":item["config"]["label"], children:{}, children_label:item["children"], "labelHtml":item["config"]["personalized"] ? item["config"]["html"] : item["config"]["label"]};
             
                for(let line of item.lines){
                    let value = "";
                    this.local.templateValue.children[line.title]= value;
                }
            }
	        
		
		if(this.navParams.data.j == undefined){
		    if(this.navParams.data.form.formulaire[this.navParams.data.i].conditions == undefined ){
                this.navParams.data.form.formulaire[this.navParams.data.i].conditions = {
                        "visibleIf":{
                            conds:[{
                                type:"visibleIf",
                                subject:""
                            }],
                            condVisible:"and"
                          },
                          "goToPageIf":{
                              conds:[{
                                  type:"goToPageIf",
                                  val1:{
                                      str: this.navParams.data.form.formulaire[this.navParams.data.i].name,
                                      source: true,
                                      type: this.navParams.data.form.formulaire[this.navParams.data.i].type
                                  },
                                  val2:{
                                      str: "",
                                      source: false,
                                      type: "",
                                      vals:this.local.templateValue != undefined ? JSON.parse(JSON.stringify(updateCondsGoto(this.navParams.data.form.formulaire[this.navParams.data.i].conditions.goToPageIf.conds, item.type, item, true))): []
                                  }
                              }],
                            condVisible:"and"
                          }
                      }; 
            }  
		    this.local.condVisible = this.navParams.data.form.formulaire[this.navParams.data.i].conditions.visibleIf.condVisible; 
	        this.local.visible = this.navParams.data.form.formulaire[this.navParams.data.i].conditions.visibleIf.conds;
	        this.local.val2Visible = []
	        for(let j in this.local.visible){
	            
	            if(this.local.visible[j].val2 != undefined && this.local.visible[j].val2.source){
	                if(this.local.visible[j].val2.arr != undefined){
	                    for(let i in this.local.visible[j].val2.arr){
	                        this.local.visible[j].val2.arr[i].display = this.getItemNameByIdStr(this.local.visible[j].val2.arr[i].value)
	                    }
	                }
	            }
	        }
	        
	        
	        this.local.condGoToPage = this.navParams.data.form.formulaire[this.navParams.data.i].conditions.goToPageIf.condVisible;
	        
	        this.local.goToPageSelf = {
	                str: this.navParams.data.form.formulaire[this.navParams.data.i].name,
	                source: true,
	                type: this.navParams.data.form.formulaire[this.navParams.data.i].type
	        }
	        updateCondsGoto(this.navParams.data.form.formulaire[this.navParams.data.i].conditions.goToPageIf.conds, item.type, item);
	        this.local.goToPage = this.navParams.data.form.formulaire[this.navParams.data.i].conditions.goToPageIf.conds;
		}
		else {
		    if(this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].conditions == undefined){
		    this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].conditions = {
                    "visibleIf":{
                        conds:[{
                            type:"visibleIf",
                            subject:""
                        }],
                        condVisible:"and"
                      },
                      "goToPageIf":{
                        conds:[{
                            type:"goToPageIf",
                            val1:{
                                str: this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].name,
                                source: true,
                                type: this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].type
                            },
                            val2:{
                                str: "",
                                source: false,
                                type: "",
                                vals: this.local.templateValue != undefined ? JSON.parse(JSON.stringify(updateCondsGoto(this.navParams.data.form.formulaire[this.navParams.data.i].conditions.goToPageIf.conds, item.type, item, true))): []          
                            }
                        }],
                        condVisible:"and"
                      }
                  }; 
		    
		    }
		    this.local.condVisible = this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].conditions.visibleIf.condVisible; 
            this.local.visible =this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].conditions.visibleIf.conds;
            this.local.condGoToPage = this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].conditions.goToPageIf.condVisible;
            this.local.goToPage = this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].conditions.goToPageIf.conds;
            this.local.goToPageSelf = {
                    str: this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].name,
                    source: true,
                    type: this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].type
            }
            updateCondsGoto(this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].conditions.goToPageIf.conds, item.type, item);
            this.local.goToPage = this.navParams.data.form.formulaire[this.navParams.data.i].children[this.navParams.data.j].conditions.goToPageIf.conds
		}*/
		 resolve();
		    
		/*End_c8o_function:CTS1595257902664*/
		});
	}


	/**
	 * Function ETS1595430806693
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1595430806693(data) {
		this.c8o.log.debug("[MB] ETS1595430806693: 'ngxTagInputNgModelChange' received");
		this.ATS1595430806696({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1595430806696
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1595430806696(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1595430806696: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1595430806696: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1595430806696: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1595430806696: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setTags"] = stack["1595430806696"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setTags', actionFunction: 'CTS1595430806696'}, vars:{}};
		return this.CTS1595430806696(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1595430806696 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1595430806696: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1595430806696: ended"); resolveP(res)});
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
	CTS1595430806696(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595430806696*/
		    const visible = "cond_visible_";
            const goToPage = "cond_goToPage_";
            if(event.ref.indexOf(visible) != -1){
                let arrTmp = [];
                for(let elem of event["event"]){
                    if(elem instanceof Object){
                        arrTmp.push(elem);
                    }
                    else{
                        arrTmp.push(elem);
                    }
                }
                this.local.visible[+(event.ref.substring(visible.length))].val2.arr = arrTmp;
            }
            else if(event.ref.indexOf(goToPage) != -1){
                let arrTmp = [];
                for(let elem of event["event"]){
                    if(elem instanceof Object){
                        arrTmp.push(elem);
                    }
                    else{
                        arrTmp.push(elem);
                    }
                }
                this.local.goToPage[+(event.ref.substring(goToPage.length))].val2.arr = arrTmp;
            }
            resolve();		    
		/*End_c8o_function:CTS1595430806696*/
		});
	}


	/**
	 * Function ETS1595431922588
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1595431922588(data) {
		this.c8o.log.debug("[MB] ETS1595431922588: 'ngxTagInputRemoved' received");
		this.ATS1595431922591({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1595431922591
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1595431922591(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1595431922591: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1595431922591: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1595431922591: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1595431922591: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setTags"] = stack["1595431922591"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setTags', actionFunction: 'CTS1595431922591'}, vars:{}};
		return this.CTS1595431922591(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1595431922591 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1595431922591: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1595431922591: ended"); resolveP(res)});
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
	CTS1595431922591(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595431922591*/
		    const visible = "cond_visible_";
            const goToPage = "cond_goToPage_";
            if(event.ref.indexOf(visible) != -1){
                this.local.visible[+(event.ref.substring(visible.length))].val2.source = false;
            }
            else if(event.ref.indexOf(goToPage) != -1){
                this.local.goToPage[+(event.ref.substring(goToPage.length))].val2.source = false;
            }
            resolve();		    
		/*End_c8o_function:CTS1595431922591*/
		});
	}


	/**
	 * Function ETS1595432012773
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1595432012773(data) {
		this.c8o.log.debug("[MB] ETS1595432012773: 'ngxTagInputAdded' received");
		this.ATS1595432012790({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1595432012790
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1595432012790(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1595432012790: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1595432012790: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1595432012790: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1595432012790: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setTags"] = stack["1595432012790"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setTags', actionFunction: 'CTS1595432012790'}, vars:{}};
		return this.CTS1595432012790(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1595432012790 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1595432012790: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1595432012790: ended"); resolveP(res)});
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
	CTS1595432012790(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1595432012790*/
	        const visible = "cond_visible_";
	        const goToPage = "cond_goToPage_";
	        if(event.ref.indexOf(visible) != -1){
	            this.local.visible[+(event.ref.substring(visible.length))].val2.source = false;
	        }
	        else if(event.ref.indexOf(goToPage) != -1){
	            this.local.goToPage[+(event.ref.substring(goToPage.length))].val2.source = false;
	        }
		    resolve();		    
		/*End_c8o_function:CTS1595432012790*/
		});
	}

}
