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

@IonicPage({priority: 'low', segment: 'l/:d/:e', defaultHistory: []})
@Component({selector: 'page-linkpage', templateUrl: 'linkpage.html', changeDetection: ChangeDetectionStrategy.Default})
export class linkPage extends C8oPage  {
	

	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "linkPage";
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
	
	
	ionViewDidEnter() {
		super.ionViewDidEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1606299548266({root: {scope:{}, in:{}, out:'ionViewDidEnter'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1581417402947({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1581417402947
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1581417402947(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1581417402947: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1581417402947: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1581417402947: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1581417402947: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser"] = stack["1581417402947"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser', actionFunction: 'CTS1581417402947'}, vars:{}};
		return this.CTS1581417402947(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1581417402947 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1581417402947: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1581417402947: ended"); resolveP(res)});
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
	CTS1581417402947(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1581417402947*/
		    const request = window["indexedDB"]["open"]("MyTestDatabase", 3);
            request.onerror = (event)=> {
                resolve(false);
                setTimeout(()=>{
                    page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
                }, 200);
                return;
              };
              request.onsuccess = (event)=> {
                  page.c8o.httpInterface.getUserServiceStatus()
                  .then((res)=>{
                      if(res.authenticated){
                          page.local.user = res.user;
                          page.local.data = this.navParams.get("d");
                          page.local.data2 = this.navParams.get("e");
                          
                          window.location.href = page.c8o.endpoint + "/.bin?__sequence=downloadFile&filename=" + encodeURI(this.navParams.get("e")) + "&documentName=" + encodeURI(this.navParams.get("d"));
                          //window.location.href = page.c8o.endpointConvertigo + "/fullsync/c8oforms_response_fs/" + this.local.data + "/"+ this.local.data2;
                          resolve(true);
                      }
                      else{
                          setTimeout(()=>{
                              page.routerProvider.setRoot("loginPage", {page:'linkPage', d:this.navParams.get("d"), e:this.navParams.get("e")}, null); 
                          }, 200);
                          resolve(false);
                      }
                  })
                  .catch((err)=>{
                      setTimeout(()=>{
                          page.routerProvider.setRoot("loginPage", {page:'linkPage', d:this.navParams.get("d"), e:this.navParams.get("e")}, null); 
                       }, 200);
                      resolve(false);
                  })
                  
                  resolve(true);
              };
		    // Getting user status (whenever he is logged or not)
		   
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
		/*End_c8o_function:CTS1581417402947*/
		});
	}


	/**
	 * Function ATS1606299548266
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606299548266(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606299548266: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606299548266: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606299548266: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606299548266: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1606299548266"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1606299548266'}, vars:{}};
		return this.CTS1606299548266(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1606299548266 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606299548266: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606299548266: ended"); resolveP(res)});
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
	CTS1606299548266(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606299548266*/
		    window.location.href = page.c8o.endpoint + "/.bin?__sequence=downloadFile&filename=" + encodeURI(page.local.data2) + "&documentName=" + encodeURI(page.local.data);
		    
		    /*
		    let separator = "_C80C80_";
            let index1 = this.local.data2.indexOf(separator) + separator.length;
            var name = this.local.data2.substring(index1);
            let index2 = name.indexOf(separator);
            name = name.substring(0, index2);
            
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.download = name;
            a.href = page.c8o.endpointConvertigo + "/fullsync/c8oforms_response_fs/" + this.local.data + "/"+ this.local.data2;
            a.click();
            debugger;*/
            
		resolve();
		/*End_c8o_function:CTS1606299548266*/
		});
	}

}
