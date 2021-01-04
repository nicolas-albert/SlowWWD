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

@IonicPage({priority: 'low', segment: 'path-to-popoverinputs', defaultHistory: []})
@Component({selector: 'page-popoverinputs', templateUrl: 'popoverinputs.html', changeDetection: ChangeDetectionStrategy.Default})
export class PopOverInputs extends C8oPage  {
	

	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "PopOverInputs";
	/*Begin_c8o_PageDeclaration*/
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		
		/*Begin_c8o_PageConstructor*/
		this.local.exclude = {"ion-label": true, "ion-title": true};
		this.local.multiple = {radio_group: true, checkbox_group: true, checkbox: true};
		this.local.simple = {date: true, select: true, datetime: true, time: true, radio: true, text: true, barcode: true, slider: true};
		this.local.pages = [];
		this.constructPageName();
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	constructPageName(){
	    for(let i in this.navParams.data.form.pages){
	        this.local.pages.push({name: this.navParams.data.form.pages[i].name, child:[]});
	        for(let item of this.navParams.data.form.formulaire){
	            if(item.config.page == this.navParams.data.form.pages[i].pageTechName){
	                if(item.cat == "action"){
	                    //do nothing
	                }
	                else if(item.type == "ion-card"){
	                    // recursive
	                    for(let childs of item.children){
	                        if(!(this.local.exclude[childs.type] == true)){
	                            if(this.navParams.data.type != undefined && this.navParams.data.type != ''){
    	                            if(this.local[this.navParams.data.type][childs.type] == true){
    	                                this.local.pages[i].child.push({name:childs.name, id:childs.id, type: childs.type});
    	                            }
	                            }
	                            else{
	                                this.local.pages[i].child.push({name:childs.name, id:childs.id, type: childs.type});
	                            }
	                            
	                        }
	                    }
	                }
	                else{
	                    if(!(this.local.exclude[item.type] == true)){
	                        if(this.navParams.data.type != undefined && this.navParams.data.type != ''){
	                            if(this.local[this.navParams.data.type][item.type] == true){
	                                this.local.pages[i].child.push({name:item.name, id:item.id, type: item.type});
	                            }
	                        }
	                        else{
	                            this.local.pages[i].child.push({name:item.name, id:item.id, type: item.type});
	                        }
	                        
	                    }
	                } 
	            }
	        }
	    }
	}
	constructList(){
	    for(let item of this.navParams.data.form.formulaire){
	        if(item.type == "action"){
	            //do nothing
	        }
	        else if(item.type == "ion-card"){
	            // recursive
	        }
	        else{
	            this.local
	        }
	        
	    }
	}
	/*End_c8o_PageFunction*/
	
	

	/**
	 * Function ATS1594992838293
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1594992838293(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1594992838293: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1594992838293: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1594992838293: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1594992838293: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1594992838293"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1594992838293'}, vars:{item: get('item', `item.name`), child: get('child', `child.name`)}};
		return this.CTS1594992838293(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["ClosePopover"] = stack["1594992266081"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1594992838293 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1594992838293: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1594992838293: ended"); resolveP(res)});
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
	CTS1594992838293(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1594992838293*/
		    if(this.navParams.data.suj == undefined){
		        this.navParams.data.current[this.navParams.data.var] = {str:props.stack.root.scope.child.id, source:true, type:props.stack.root.scope.child.type}
		    }
		    else{
		        this.navParams.data.current[this.navParams.data.var] = {str:"", source:true, type:props.stack.root.scope.child.type, arr:[{value:props.stack.root.scope.child.id, display:props.stack.root.scope.child.name}]}
		    }
		    
		resolve();
		/*End_c8o_function:CTS1594992838293*/
		});
	}

}
