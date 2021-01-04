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

@IonicPage({priority: 'low', segment: 'path-to-popovernotifs', defaultHistory: []})
@Component({selector: 'page-popovernotifs', templateUrl: 'popovernotifs.html', changeDetection: ChangeDetectionStrategy.Default})
export class PopOverNotifs extends C8oPage  {
	

	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "PopOverNotifs";
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
	getDate(d){
	    let date = new Date(+d);
	    let dateNow = new Date();
	    var diffDays  = (dateNow.getTime() - date.getTime()) /(1000 * 3600 * 24); 
	    let options;
	    if(diffDays > 7){
	        options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour:'2-digit',minute:'2-digit',second:'2-digit' };
	    }
	    else{
	        options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'  };
	    }
	    return date.toLocaleDateString(this.global.settings.language, options);
	}
	/*End_c8o_PageFunction*/
	
	
	ionViewWillLeave() {
		super.ionViewWillLeave();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1603918690180({root: {scope:{}, in:{}, out:'ionViewWillLeave'}});
		});
	}



	/**
	 * Function ATS1603918690180
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603918690180(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1603918690180: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603918690180: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603918690180: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603918690180: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1603918690180"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1603918690180'}, vars:{}};
		return this.CTS1603918690180(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1603918690180 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603918690180: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603918690180: ended"); resolveP(res)});
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
	CTS1603918690180(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603918690180*/
		    new Promise(async (resolve2)=>{
		        if(page.listen(['fs://c8oforms_fs.view#viewNotifsNew']).rows != undefined && page.listen(['fs://c8oforms_fs.view#viewNotifsNew']).rows.length >0){
		            for(let elems of page.listen(['fs://c8oforms_fs.view#viewNotifsNew']).rows){
		                try{
		                    await this.c8o.callJson("fs://c8oforms_fs.post", "_use_policy", "merge", "new", false, "_id", elems.id).async();
		                }
		                catch(e){
		                    console.log(e);
		                }
		               
		            }
		        }
		        resolve2();
		    })
		    .then(()=>{
		        resolve();
		    })
		
		
		/*End_c8o_function:CTS1603918690180*/
		});
	}

}
