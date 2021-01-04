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

@IonicPage({priority: 'low', segment: 'path-to-previewmultiple', defaultHistory: []})
@Component({selector: 'page-previewmultiple', templateUrl: 'previewmultiple.html', changeDetection: ChangeDetectionStrategy.Default})
export class PreviewMultiple extends C8oPage  {
	
	@ViewChildren("divtext") public all_divtext : QueryList<any>;
	@ViewChild("divtext") public divtext;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "PreviewMultiple";
	/*Begin_c8o_PageDeclaration*/
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		
		/*Begin_c8o_PageConstructor*/
		this.local.gridAndCheckboxStyleOnScroll =[];
		this.local.value = {};
		let item = this.navParams.data.item;
		if(item["type"] == "checkbox_group"){
		    this.local.value[item["name"]] = {"name":item["name"], "type": item["type"], "label":item["config"]["label"], children:{}, "labelHtml":item["config"]["personalized"] ? item["config"]["html"] : item["config"]["label"]};
            
            for(let line of item.lines){
                this.local.value[item["name"]].children[line.title] = [];
                for(let child in item["children"]){
                    let selected;
                    try {
                        selected =  item["children"][child].selected;
                    }
                    catch(e){   
                    }   
                    this.local.value[item["name"]].children[line.title].push({"value": item["children"][child].value, "selected": selected});
                }
            }
        }
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
	/*End_c8o_PageFunction*/
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1588600997422({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
		});
	}


	ionViewDidEnter() {
		super.ionViewDidEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1596119915975({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
		});
	}



	/**
	 * Function ATS1588600997422
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588600997422(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588600997422: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588600997422: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588600997422: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588600997422: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588600997422"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588600997422: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588600997422: ended"); resolveP(res)});
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
	CTS1588597563598(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588597563598*/
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
		/*End_c8o_function:CTS1588597563598*/
		});
	}


	/**
	 * Function ATS1596119915960
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1596119915960(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1596119915960: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1596119915960: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1596119915960: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1596119915960: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1596119915960"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1596119915960'}, vars:{values: get('values', `'value'`)}};
		return this.CTS1596119915960(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1596119915963"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1596119915960 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1596119915960: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1596119915960: ended"); resolveP(res)});
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
	CTS1596119915960(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596119915960*/
		console.log(page);
		/*End_c8o_function:CTS1596119915960*/
		});
	}


	/**
	 * Function ATS1596119915975
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1596119915975(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1596119915975: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1596119915975: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1596119915975: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1596119915975: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1596119915975"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1596119915975'}, vars:{}};
		return this.CTS1596119915975(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1596119915975 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1596119915975: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1596119915975: ended"); resolveP(res)});
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
	CTS1596119915975(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596119915975*/
		    this.local.gridAndCheckboxStyleOnScroll =[];
		console.log(page);
		console.log(props);
		 resolve();
		    
		/*End_c8o_function:CTS1596119915975*/
		});
	}

}
