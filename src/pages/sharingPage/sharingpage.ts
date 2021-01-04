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
import { C8oSessionStatus } from 'c8osdkangular';
import * as ts from 'typescript';


/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 's/:u', defaultHistory: []})
@Component({selector: 'page-sharingpage', templateUrl: 'sharingpage.html', changeDetection: ChangeDetectionStrategy.Default})
export class sharingPage extends C8oPage  {
	

	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "sharingPage";
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
	/*End_c8o_PageFunction*/
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1576512980443({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1576167355909({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1576167355909
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1576167355909(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1576167355909: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1576167355909: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1576167355909: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1576167355909: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser"] = stack["1576167355909"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser', actionFunction: 'CTS1576167355909'}, vars:{}};
		return this.CTS1576167355909(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1576167355909 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1576167355909: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1576167355909: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckUser
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1576167355909(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576167355909*/
		   
		    const request = window["indexedDB"]["open"]("MyTestDatabase", 3);
            request.onerror = (event)=> {
                resolve(false);
                setTimeout(()=>{
                    page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
                }, 200);
                return;
              };
              request.onsuccess = (event)=> {
                  page.local.userId= this.navParams.get('u');
                 /* let prefix: string = window.location.href.substring(0, window.location.href.indexOf("#/"));
                  window.location.href = prefix+ "#/viewer/:formId/:edit/"+page.local.userId;*/
                  
                  resolve(true);
              };
		    // Getting user status (whenever he is logged or not)
		   /* page.c8o.httpInterface.getUserServiceStatus()
		    .then((res)=>{
		        if(res.authenticated){
		            page.local.user = res.user;
		            resolve(true);
		        }
		        else{
		            setTimeout(()=>{
		                page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
		            }, 200);
		            resolve(false);
		        }
		    })
		    .catch((err)=>{
		        setTimeout(()=>{
		            page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
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
		/*End_c8o_function:CTS1576167355909*/
		});
	}


	/**
	 * Function ATS1576512980443
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1576512980443(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1576512980443: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1576512980443: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1576512980443: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1576512980443: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1576512980443"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1576512980443'}, vars:{}};
		return this.CTS1576512980443(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1576512980443 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1576512980443: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1576512980443: ended"); resolveP(res)});
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
	CTS1576512980443(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576512980443*/
		    page.routerProvider.setRoot("viewerPage", {i:page.local.userId}, null); 
		    /*let prefix: string = window.location.href.substring(0, window.location.href.indexOf("#/"));
		    window.location.href = prefix+ "#/viewer/" + ":id/:edit/"+page.local.userId;
		    /*page.c8o.callJson(".Logout", "__disableAutologin", true)
            .then((res)=>{
                console.log("logout ok", res);
                return page.c8o.callJson(".Login", "email", page.local.userId, "password", page.local.userId)
            })
            .then((res)=>{
              return page.c8o.callJson("fs://c8oforms_fs.sync"
                  );
            })
            .then((res)=>{
              return page.c8o.callJson("fs://c8oforms_fs.view",
                      "ddoc", "published_forms_anonymous",
                      "view", "all"
                  );
            })
            .then((res)=>{
                if(res.rows[0] != undefined){
                    let prefix: string = window.location.href.substring(0, window.location.href.indexOf("#/"));
                    window.location.href = prefix+ "#/viewer/" + res.rows[0].id+"/:edit/"+page.local.userId;
                    resolve(true);
                }
                else{
                    window.location.href = './';
                    resolve(false);
                }
                return null;
            })
            .fail((e)=>{
                console.log(e);
                window.location.href = './';
                resolve(false);
            });*/
		resolve();
		/*End_c8o_function:CTS1576512980443*/
		});
	}

}
