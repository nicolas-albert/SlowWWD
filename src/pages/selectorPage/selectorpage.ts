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
import { QRCodeModule } from 'angularx-qrcode';
import { C8oSessionStatus } from 'c8osdkangular';


/*Begin_c8o_PageImport*/
import {C8oFullSyncChangeListener } from "c8osdkangular";
import { ToastController } from 'ionic-angular';
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'selector/:published/:folder/:sub/:grid', defaultHistory: []})
@Component({selector: 'page-selectorpage', templateUrl: 'selectorpage.html', changeDetection: ChangeDetectionStrategy.Default})
export class selectorPage extends C8oPage  {
	public static nbInstance = 0;

	@ViewChildren("ElseBlock_1603096168918") public all_ElseBlock_1603096168918 : QueryList<any>;
	@ViewChild("ElseBlock_1603096168918") public ElseBlock_1603096168918;

	@ViewChildren("ElseBlock_1603096127001") public all_ElseBlock_1603096127001 : QueryList<any>;
	@ViewChild("ElseBlock_1603096127001") public ElseBlock_1603096127001;

	@ViewChildren("ngxTag") public all_ngxTag : QueryList<any>;
	@ViewChild("ngxTag") public ngxTag;


	@ViewChildren("ElseBlock_1606649912084") public all_ElseBlock_1606649912084 : QueryList<any>;
	@ViewChild("ElseBlock_1606649912084") public ElseBlock_1606649912084;

	@ViewChildren("ElseBlock_1604012902946") public all_ElseBlock_1604012902946 : QueryList<any>;
	@ViewChild("ElseBlock_1604012902946") public ElseBlock_1604012902946;

	@ViewChildren("QRCode") public all_QRCode : QueryList<any>;
	@ViewChild("QRCode") public QRCode;

	@ViewChildren("ElseBlock_1604595169223Thumbnail") public all_ElseBlock_1604595169223Thumbnail : QueryList<any>;
	@ViewChild("ElseBlock_1604595169223Thumbnail") public ElseBlock_1604595169223Thumbnail;

	@ViewChildren("ElseBlock_1604595693051WallPaper") public all_ElseBlock_1604595693051WallPaper : QueryList<any>;
	@ViewChild("ElseBlock_1604595693051WallPaper") public ElseBlock_1604595693051WallPaper;

	@ViewChildren("ElseBlock1604595755153Random") public all_ElseBlock1604595755153Random : QueryList<any>;
	@ViewChild("ElseBlock1604595755153Random") public ElseBlock1604595755153Random;

	@ViewChildren("ElseBlock_1604598151040Color") public all_ElseBlock_1604598151040Color : QueryList<any>;
	@ViewChild("ElseBlock_1604598151040Color") public ElseBlock_1604598151040Color;




	@ViewChildren("ElseBlock_1606645547640") public all_ElseBlock_1606645547640 : QueryList<any>;
	@ViewChild("ElseBlock_1606645547640") public ElseBlock_1606645547640;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "selectorPage";
	/*Begin_c8o_PageDeclaration*/
	public list = [];
	public listResponses = [];
	public creating ="";
	public query = "";
	public created = new Date().getTime();
	public form:any;
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		this.menuId = 'MenuSelector';
		selectorPage.nbInstance++;
		if (selectorPage.nbInstance == 1) {
			this.events.subscribe('updateThumbnail', (data) => {this.ETS1594641752198(data)});
			this.events.subscribe('toastPWA', (data) => {this.ETS1604007513115(data)});
			this.events.subscribe('ngxTagInputNgModelChange', (data) => {this.ETS1605260781973(data)});
		} else {
			this.events.unsubscribe('updateThumbnail');
			this.events.subscribe('updateThumbnail', (data) => {this.ETS1594641752198(data)});
			this.events.unsubscribe('toastPWA');
			this.events.subscribe('toastPWA', (data) => {this.ETS1604007513115(data)});
			this.events.unsubscribe('ngxTagInputNgModelChange');
			this.events.subscribe('ngxTagInputNgModelChange', (data) => {this.ETS1605260781973(data)});
		}
		
		
		
		/*Begin_c8o_PageConstructor*/
		this.local.searchTags = [];
        this.local.searchSubTags = [];
		this.global.platform.name['0'] = ""
		    this.global.visibleoptions = [];
		this.global["visibleoptions1"] = [];
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	public stringi(str){
	    try{
	        return JSON.stringify(str);
	    }
	    catch(e){
	        return 'catched'
	    }
	}
	
	version(rev: string):string{
	    let index = rev.indexOf("-");
	    return rev.substring(0,index);
	    
	}
	getSizeObject(obj): number{
	    if(obj != null){
	        let count = 0;
	        for(let item in obj){
	            if(obj[item]){
	                count ++;
	            }
	        }
	        return count;
	    }
	    else{
	        return 0;
	    }
	    
	}
	
	getSizeObjectFormated(obj){
	    let count = this.getSizeObject(obj);
	    return ((count <= 9) ? "0"+ count : count);
	}
	
	getTranslate(msgTosearch :string): Promise<any>{
        return new Promise((resolve, reject)=>{
            let translate = this.getInstance(TranslateService)
            translate.get(msgTosearch).subscribe((res: string) => {
                resolve(res);
            });
        });        
    }
	
	
	getTime(){
		return new Date().getTime() + "";
	}
	
	formatTime(date: any){
	    return new Date(+date).toLocaleString();
	}
	
	getcolorfromEl(id){
	    var el = document.getElementById(id)
	    if(el != null){
	        let rgb = this.getAverageRGB(el);
	        let hex = this.rgbToHex(rgb);
	        return this.getContrastYIQ(hex);
	    }
	}
	
	rgbToHex (rgb) { 
	    var hex = Number(rgb).toString(16);
	    if (hex.length < 2) {
	         hex = "0" + hex;
	    }
	    return hex;
	  }
	
	getContrastYIQ(hexcolor){
	    var r = parseInt(hexcolor.substr(0,2),16);
	    var g = parseInt(hexcolor.substr(2,2),16);
	    var b = parseInt(hexcolor.substr(4,2),16);
	    var yiq = ((r*299)+(g*587)+(b*114))/1000;
	    console.log((yiq >= 128) ? 'black' : 'white');
	    return (yiq >= 128) ? 'black' : 'white';
	}
	
	getAverageRGB(imgEl) {

	    var blockSize = 5, // only visit every 5 pixels
	        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
	        canvas = document.createElement('canvas'),
	        context = canvas.getContext && canvas.getContext('2d'),
	        data, width, height,
	        i = -4,
	        length,
	        rgb = {r:0,g:0,b:0},
	        count = 0;

	    if (!context) {
	        return defaultRGB;
	    }

	    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
	    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

	        var src = imgEl.src;
	        imgEl = new Image;
	        imgEl.setAttribute('crossOrigin', 'anonymous'); 
	        imgEl.src = src;
	    
	    context.drawImage(imgEl, 0, 0);
	    
	    //context.canvas.baseURI = this.router.c8o.endpoint;
	    try {
	        data = context.getImageData(0, 0, width, height);
	    } catch(e) {
	        /* security error, img on diff domain */
	        return defaultRGB;
	    }

	    length = data.data.length;

	    while ( (i += blockSize * 4) < length ) {
	        ++count;
	        rgb.r += data.data[i];
	        rgb.g += data.data[i+1];
	        rgb.b += data.data[i+2];
	    }

	    // ~~ used to floor values
	    rgb.r = ~~(rgb.r/count);
	    rgb.g = ~~(rgb.g/count);
	    rgb.b = ~~(rgb.b/count);

	    return rgb;

	}
	
	updateState() {
        return new Promise((resolve)=>{
            let params = {};
            params["_use_policy"] =  "merge";
            params["thumbnail"] = "";
        });     
    }
	/*End_c8o_PageFunction*/
	
	ngOnDestroy() {
		selectorPage.nbInstance--;
		if (selectorPage.nbInstance <= 0) {
			this.events.unsubscribe('updateThumbnail');
			this.events.unsubscribe('toastPWA');
			this.events.unsubscribe('ngxTagInputNgModelChange');
			selectorPage.nbInstance = 0;
		}
		super.ngOnDestroy();
	}
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1586424006177({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1572276678583({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1580999445423({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1572276678586({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1576601694760({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1586340638874({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1604669061121({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1604670004971({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
		});
	}


	ionViewWillLeave() {
		super.ionViewWillLeave();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1572359989055({root: {scope:{}, in:{}, out:'ionViewWillLeave'}});
			this.ATS1586345349876({root: {scope:{}, in:{}, out:'ionViewWillLeave'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1577113262452({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
,					this.ATS1572276511116({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1606995382489
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606995382489(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606995382489: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606995382489: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606995382489: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606995382489: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["QueryView"] = stack["1606995382489"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'QueryView', actionFunction: 'FullSyncViewAction', reduce: get('reduce', `false`), startkey: null, group_level: null, attachments: null, __live: get('__live', `'liveRefresh'`), keys: null, noLoading: get('noLoading', `true`), fsview: get('fsview', `'C8Oforms.c8oforms_fs.notifs.all'`), skip: null, descending: get('descending', `'true'`), include_docs: get('include_docs', `'false'`), endkey: null, stale: null, marker: get('marker', `'viewNotifsAll'`), binary: null, limit: get('limit', `500`), conflicts: null, inclusive_end: null, key: null, group: null}, vars:{}};
		return this.actionBeans.FullSyncViewAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["Popover"] = stack["1606995382492"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: null, cssClass: get('cssClass', `'popOverNotifs'`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.PopOverNotifs'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
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
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncViewAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606995382489: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606995382489: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1603918107963
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1603918107963(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1603918107963: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1603918107963: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1603918107963: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1603918107963: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["QueryView"] = stack["1603918107963"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'QueryView', actionFunction: 'FullSyncViewAction', reduce: get('reduce', `false`), startkey: null, group_level: null, attachments: null, __live: get('__live', `'liveRefresh'`), keys: null, noLoading: get('noLoading', `false`), fsview: get('fsview', `'C8Oforms.c8oforms_fs.notifs.all'`), skip: null, descending: get('descending', `'true'`), include_docs: get('include_docs', `'false'`), endkey: null, stale: null, marker: get('marker', `'viewNotifsAll'`), binary: null, limit: get('limit', `500`), conflicts: null, inclusive_end: null, key: null, group: null}, vars:{}};
		return this.actionBeans.FullSyncViewAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["Popover"] = stack["1603905390576"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: null, cssClass: null, showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.PopOverNotifs'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
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
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncViewAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1603918107963: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1603918107963: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1602516409044
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1602516409044(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1602516409044: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1602516409044: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1602516409044: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1602516409044: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetPublishedFalse"] = stack["1602516409044"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetPublishedFalse', actionFunction: 'CTS1602516409044'}, vars:{}};
		return this.CTS1602516409044(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1602516409047"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1602516409050"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{keys: get('keys', `null`)}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1602516409044 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1602516409044: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1602516409044: ended"); resolveP(res)});
		});
	}

	/**
	 * Function SetPublishedFalse
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602516409044(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602516409044*/
		
	    if(page.local.published != false){
	        page.local.spinner = true;
            page.local.published = false;
            page.c8o.cancelLive("viewLiveFolders");
            page.c8o.cancelLive("viewLiveOut");
            page.c8o.cancelLive("viewLiveInFolders");
            page.local.folder = "";
            const ddocPublished = "formsV2";
            page.local["ddoc"] = ddocPublished;
            resolve(true);
            let url : string = window.location.href;
            let strToReplace = window.location.hash.split("/")[2];
            let index = url.indexOf(strToReplace);
            url = url.substring(0, index) + page.local.published + url.substring(index + strToReplace.length);
            let strToReplace2 = window.location.hash.split("/")[3];
            let index2 = url.indexOf(strToReplace2);
            url = url.substring(0, index2) + encodeURI(":folder") + url.substring(index2 + strToReplace2.length);
            window.location.href = url;
            
        }
	    else{
	        resolve(false);
	    }
		
		
		    /*page.local.tag = false;
		if(this.local.published != false){
		    page.local.spinner = true;
		    page.c8o.cancelLive("viewLiveSelector");
		    page.local["ddoc"] = "forms";
		    this.local.published = false; 
		    let url : string = window.location.href;
            let strToReplace = window.location.hash.split("/")[2];
		    let index = url.indexOf(strToReplace);
            url = url.substring(0, index) + page.local.published + url.substring(index + strToReplace.length);
            window.location.href = url;
            resolve(true);
		}
		else{
		    resolve(false);
		}*/
		
		
		/*End_c8o_function:CTS1602516409044*/
		});
	}


	/**
	 * Function ATS1602522452374
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1602522452374(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1602522452374: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1602522452374: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1602522452374: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1602522452374: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetPublishedTrue"] = stack["1602522452374"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetPublishedTrue', actionFunction: 'CTS1602522452374'}, vars:{}};
		return this.CTS1602522452374(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1602522452377"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1602522452380"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{keys: get('keys', `null`)}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1602522452374 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1602522452374: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1602522452374: ended"); resolveP(res)});
		});
	}

	/**
	 * Function SetPublishedTrue
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602522452374(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602522452374*/
		    if(page.local.published == false){
		        page.local.spinner = true;
		        page.local.published = true;
		        page.c8o.cancelLive("viewLiveFolders");
		        page.c8o.cancelLive("viewLiveOut");
		        page.c8o.cancelLive("viewLiveInFolders");
		        page.local.folder = "";
		        const ddocPublished = "published_formsV2";
		        page.local["ddoc"] = ddocPublished;
		        resolve(true);
		        let url : string = window.location.href;
	            let strToReplace = window.location.hash.split("/")[2];
	            let index = url.indexOf(strToReplace);
	            url = url.substring(0, index) + page.local.published + url.substring(index+strToReplace.length);
	            let strToReplace2 = window.location.hash.split("/")[3];
	            let index2 = url.indexOf(strToReplace2);
	            url = url.substring(0, index2) + encodeURI(":folder") + url.substring(index2 + strToReplace2.length);
	            window.location.href = url;
		    }
		    else{
		        resolve(false);
		    }
		   /* page.local.tag = false;
		    page.local.fav = false;
		if(this.local.published == false){
		    page.local.spinner = true;
		    page.c8o.cancelLive("viewLiveSelector");
		    this.local.published = true; 
		    page.local["ddoc"] = "published_forms";
		    let url : string = window.location.href;
            let strToReplace = window.location.hash.split("/")[2];
            let index = url.indexOf(strToReplace);
            url = url.substring(0, index) + page.local.published + url.substring(index+strToReplace.length);
            window.location.href = url;
		    resolve(true);
		}
		else{
		    resolve(false);
		}
		*/
		
		/*End_c8o_function:CTS1602522452374*/
		});
	}


	/**
	 * Function ATS1572278831637
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572278831637(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572278831637: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572278831637: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572278831637: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572278831637: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["EvaluateIsEmpty"] = stack["1572278831637"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'EvaluateIsEmpty', actionFunction: 'CTS1572278831637'}, vars:{}};
		return this.CTS1572278831637(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1572279032900"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605199379069"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1572279048437"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1572278831637 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572278831637: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572278831637: ended"); resolveP(res)});
		});
	}

	/**
	 * Function EvaluateIsEmpty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1572278831637(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1572278831637*/
		    if(event != ""){
	            page.c8o.cancelLive("viewLiveOut");
	            page.c8o.cancelLive("viewLiveFolders");
	            page.c8o.cancelLive("viewLiveInFolders");
	            resolve(true);
	        }
	        else if((page.local.searchTags != undefined && page.local.searchTags.length > 1) || (page.local.searchSubTags != undefined && page.local.searchSubTags.length > 0)){
	        resolve(true);
	        }
	        else{
	            if(page.local.searchTags != undefined && page.local.searchTags.length == 1){
	                this.local.folder = page.local.searchTags[0];
	                page.local.searchTags = [];
                    page.local.searchSuTags = [];
	            }
	            resolve(false);
	        }
		
		
		/*End_c8o_function:CTS1572278831637*/
		});
	}


	/**
	 * Function StopPropagationAndShowAdvancedSearch
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605176566731(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605176566731*/
		event.stopPropagation();
		if(this.local.searchTags == undefined){
		    this.local.searchTags = [];
		}
		if(this.local.searchTags.indexOf(this.local.folder) == -1 && this.local.folder != undefined && this.local.folder != ''){
		    this.local.searchTags.push(this.local.folder)
		}
		this.local.showAdvancedSearch = true;
		resolve();
		/*End_c8o_function:CTS1605176566731*/
		});
	}


	/**
	 * Function StopPropagationToPreventFromClosingThis
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605176642473(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605176642473*/
		event.stopPropagation();
		resolve();
		/*End_c8o_function:CTS1605176642473*/
		});
	}


	/**
	 * Function saveTemp
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605287378515(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605287378515*/
		    page.local["_query"] = event;
		    resolve();
		/*End_c8o_function:CTS1605287378515*/
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
	 * Function ATS1605287109317
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605287109317(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605287109317: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605287109317: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605287109317: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605287109317: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["ApplyParams"] = stack["1605287109317"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ApplyParams', actionFunction: 'CTS1605287109317'}, vars:{}};
		return this.CTS1605287109317(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1605199210558"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["setshowAdvancedSearchFalse"] = stack["1605202141497"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setshowAdvancedSearchFalse', actionFunction: 'CTS1605202141497'}, vars:{}};
		return this.CTS1605202141497(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605202141497 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605287109317 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605287109317: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605287109317: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ApplyParams
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605287109317(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605287109317*/
		    if(page.local["_searchSubTags"] != undefined){
		        page.local.searchSubTags = page.local["_searchSubTags"];
		    }
		    if(page.local["_searchTags"] != undefined){
		        page.local.searchTags = page.local["_searchTags"];
            }
		    if(page.local["_query"] != undefined){
		        page["query"] = page.local["_query"];
		    }
		    
		resolve();
		/*End_c8o_function:CTS1605287109317*/
		});
	}


	/**
	 * Function setshowAdvancedSearchFalse
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605202141497(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605202141497*/
		    page.local.showAdvancedSearch = false;
		resolve();
		/*End_c8o_function:CTS1605202141497*/
		});
	}


	/**
	 * Function ATS1605274732095
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605274732095(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605274732095: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605274732095: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605274732095: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605274732095: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setNoFolder"] = stack["1605274732095"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setNoFolder', actionFunction: 'CTS1605274732095'}, vars:{}};
		return this.CTS1605274732095(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1605274732098"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605274732095 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605274732095: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605274732095: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setNoFolder
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605274732095(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605274732095*/
		    page.local.folder = "";
            let arrayHash = window.location.hash.split("/");
            arrayHash.splice(3,1, ":folder");
            let url = window.location.origin + window.location.pathname + arrayHash.join("/");
            window.location.href = url;
		resolve();
		/*End_c8o_function:CTS1605274732095*/
		});
	}


	/**
	 * Function ATS1605275009414
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605275009414(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605275009414: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605275009414: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605275009414: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605275009414: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setQueryempty"] = stack["1605275009414"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setQueryempty', actionFunction: 'CTS1605275009414'}, vars:{}};
		return this.CTS1605275009414(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1605275009417"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605275009414 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605275009414: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605275009414: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setQueryempty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605275009414(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605275009414*/
		page["query"] = "";
		resolve();
		/*End_c8o_function:CTS1605275009414*/
		});
	}


	/**
	 * Function ATS1605276146203
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605276146203(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605276146203: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605276146203: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605276146203: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605276146203: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setQueryempty"] = stack["1605276146203"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setQueryempty', actionFunction: 'CTS1605276146203'}, vars:{}};
		return this.CTS1605276146203(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605277651778"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605277651781"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605277651787"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605276146203 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605276146203: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605276146203: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setQueryempty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605276146203(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605276146203*/
		    page["query"] = "";
		    //still in research mode
	        if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
	            resolve(true);    
	        }
	        else{
	            // in view mode
	            if(page.local.searchTags.length == 1){
	                this.local.folder = page.local.searchTags[0];
	            }
	            else{
	                this.local.folder = "";
	            }
	            resolve(false);
	        }
		resolve();
		/*End_c8o_function:CTS1605276146203*/
		});
	}


	/**
	 * Function ATS1605276368359
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605276368359(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605276368359: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605276368359: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605276368359: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605276368359: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1605276368359"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605276368359'}, vars:{}};
		return this.CTS1605276368359(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605276897902"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605276924415"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605276368362"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605276368359 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605276368359: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605276368359: ended"); resolveP(res)});
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
	CTS1605276368359(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605276368359*/
		page.local.searchTags.splice(props.stack.root.scope.i90, 1);

		//still in research mode
		if(page.local.searchTags.length > 1){
		    resolve(true);    
		}
		else{
		    //still in research mode
		    if(page["query"] != ""){
		        resolve(true);   
		    }
		    // in view mode
		    else{
		        if(page.local.searchTags.length == 1){
		            this.local.folder = page.local.searchTags[0];
		        }
		        else{
		            this.local.folder = "";
		        }
		        resolve(false);
		    }
		}
		
		/*End_c8o_function:CTS1605276368359*/
		});
	}


	/**
	 * Function ATS1605281268543
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605281268543(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605281268543: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605281268543: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605281268543: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605281268543: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1605281268543"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605281268543'}, vars:{}};
		return this.CTS1605281268543(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605281268546"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605281268549"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605281268555"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605281268543 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605281268543: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605281268543: ended"); resolveP(res)});
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
	CTS1605281268543(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605281268543*/
		page.local.searchTags.splice(props.stack.root.scope.i90, 1);

		//still in research mode
        if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || (page["query"] != "" && page["query"] != undefined)){
            resolve(true);    
        }
        else{
            // in view mode
            if(page.local.searchTags.length == 1){
                this.local.folder = page.local.searchTags[0];
            }
            else{
                this.local.folder = "";
            }
            resolve(false);
        }
		
		/*End_c8o_function:CTS1605281268543*/
		});
	}


	/**
	 * Function ATS1605281976823
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605281976823(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605281976823: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605281976823: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605281976823: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605281976823: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1605281976823"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605281976823'}, vars:{}};
		return this.CTS1605281976823(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605281976826"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605281976829"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605281976835"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605281976823 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605281976823: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605281976823: ended"); resolveP(res)});
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
	CTS1605281976823(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605281976823*/
		page.local.searchSubTags.splice(props.stack.root.scope.i91, 1);

		//still in research mode
		if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
		    resolve(true);    
		}
		else{
            // in view mode
            if(page.local.searchTags.length == 1){
                this.local.folder = page.local.searchTags[0];
            }
            else{
                this.local.folder = "";
            }
            resolve(false);
		}
		
		/*End_c8o_function:CTS1605281976823*/
		});
	}


	/**
	 * Function ATS1605283919725
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605283919725(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605283919725: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605283919725: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605283919725: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605283919725: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1605283919725"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605283919725'}, vars:{}};
		return this.CTS1605283919725(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605283919728"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605283919731"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605283919737"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605283919725 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605283919725: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605283919725: ended"); resolveP(res)});
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
	CTS1605283919725(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605283919725*/
		page.local.searchTags.splice(props.stack.root.scope.i90, 1);

		//still in research mode
        if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
            resolve(true);    
        }
        else{
            // in view mode
            if(page.local.searchTags.length == 1){
                this.local.folder = page.local.searchTags[0];
            }
            else{
                this.local.folder = "";
            }
            resolve(false);
        }
		
		/*End_c8o_function:CTS1605283919725*/
		});
	}


	/**
	 * Function ATS1605284046599
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605284046599(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605284046599: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605284046599: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605284046599: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605284046599: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1605284046599"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605284046599'}, vars:{}};
		return this.CTS1605284046599(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605284046602"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605284046605"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605284046611"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605284046599 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605284046599: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605284046599: ended"); resolveP(res)});
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
	CTS1605284046599(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605284046599*/
		page.local.searchSubTags.splice(props.stack.root.scope.i91, 1);

		//still in research mode
		if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
		    resolve(true);    
		}
		else{
            // in view mode
            if(page.local.searchTags.length == 1){
                this.local.folder = page.local.searchTags[0];
            }
            else{
                this.local.folder = "";
            }
            resolve(false);
		}
		
		/*End_c8o_function:CTS1605284046599*/
		});
	}


	/**
	 * Function ATS1605284284687
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605284284687(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605284284687: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605284284687: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605284284687: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605284284687: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setQueryempty"] = stack["1605284284687"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setQueryempty', actionFunction: 'CTS1605284284687'}, vars:{}};
		return this.CTS1605284284687(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605284284690"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605284284693"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605284284699"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605284284687 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605284284687: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605284284687: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setQueryempty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605284284687(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605284284687*/
		    page["query"] = "";
		    //still in research mode
	        if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
	            resolve(true);    
	        }
	        else{
	            // in view mode
	            if(page.local.searchTags.length == 1){
	                this.local.folder = page.local.searchTags[0];
	            }
	            else{
	                this.local.folder = "";
	            }
	            resolve(false);
	        }
		resolve();
		/*End_c8o_function:CTS1605284284687*/
		});
	}


	/**
	 * Function ATS1605284354426
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605284354426(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605284354426: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605284354426: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605284354426: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605284354426: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1605284354426"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605284354426'}, vars:{}};
		return this.CTS1605284354426(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605284354429"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605284354432"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605284354438"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605284354426 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605284354426: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605284354426: ended"); resolveP(res)});
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
	CTS1605284354426(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605284354426*/
		page.local.searchSubTags.splice(props.stack.root.scope.i91, 1);

		//still in research mode
		if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
		    resolve(true);    
		}
		else{
            // in view mode
            if(page.local.searchTags.length == 1){
                this.local.folder = page.local.searchTags[0];
            }
            else{
                this.local.folder = "";
            }
            resolve(false);
		}
		
		/*End_c8o_function:CTS1605284354426*/
		});
	}


	/**
	 * Function ATS1605285201054
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605285201054(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605285201054: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605285201054: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605285201054: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605285201054: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setQueryempty"] = stack["1605285201054"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setQueryempty', actionFunction: 'CTS1605285201054'}, vars:{}};
		return this.CTS1605285201054(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605285201057"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605285201060"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605285201066"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605285201054 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605285201054: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605285201054: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setQueryempty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605285201054(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605285201054*/
		    page["query"] = "";
		    //still in research mode
	        if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
	            resolve(true);    
	        }
	        else{
	            // in view mode
	            if(page.local.searchTags.length == 1){
	                this.local.folder = page.local.searchTags[0];
	            }
	            else{
	                this.local.folder = "";
	            }
	            resolve(false);
	        }
		resolve();
		/*End_c8o_function:CTS1605285201054*/
		});
	}


	/**
	 * Function ATS1605285044658
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605285044658(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605285044658: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605285044658: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605285044658: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605285044658: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1605285044658"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605285044658'}, vars:{}};
		return this.CTS1605285044658(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605285044661"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605285044664"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605285044670"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605285044658 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605285044658: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605285044658: ended"); resolveP(res)});
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
	CTS1605285044658(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605285044658*/
		page.local.searchTags.splice(props.stack.root.scope.i90, 1);

		//still in research mode
        if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
            resolve(true);    
        }
        else{
            // in view mode
            if(page.local.searchTags.length == 1){
                this.local.folder = page.local.searchTags[0];
            }
            else{
                this.local.folder = "";
            }
            resolve(false);
        }
		
		/*End_c8o_function:CTS1605285044658*/
		});
	}


	/**
	 * Function ATS1605285044697
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605285044697(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605285044697: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605285044697: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605285044697: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605285044697: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1605285044697"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605285044697'}, vars:{}};
		return this.CTS1605285044697(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfElse"] = stack["1605285044700"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605285044703"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1605199050514'}, vars:{}};
		return this.actionBeans.STS1605199050514(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1605199050514 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605285044709"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605285044697 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605285044697: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605285044697: ended"); resolveP(res)});
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
	CTS1605285044697(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605285044697*/
		page.local.searchSubTags.splice(props.stack.root.scope.i91, 1);

		//still in research mode
		if(page.local.searchTags.length > 1 || page.local.searchSubTags.length > 0 || page["query"] != ""){
		    resolve(true);    
		}
		else{
            // in view mode
            if(page.local.searchTags.length == 1){
                this.local.folder = page.local.searchTags[0];
            }
            else{
                this.local.folder = "";
            }
            resolve(false);
		}
		
		/*End_c8o_function:CTS1605285044697*/
		});
	}


	/**
	 * Function ATS1606650173145
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606650173145(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606650173145: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606650173145: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606650173145: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606650173145: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal1"] = stack["1606650173145"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `!c8oPage.global.grid`), Property: get('Property', `'grid'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["If"] = stack["1606995106338"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `!c8oPage.global.grid`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1606995130668"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `false`), Property: get('Property', `'qr'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606650173145: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606650173145: ended"); resolveP(res)});
		});
	}

	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1580912621029(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580912621029*/
		    this.global["visibleoptions0"][vars["visible"]] = true;
		    resolve();
		/*End_c8o_function:CTS1580912621029*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1580912621038(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580912621038*/
		    this.global["visibleoptions0"][vars["visible"]] = false;
		    resolve();
		/*End_c8o_function:CTS1580912621038*/
		});
	}


	/**
	 * Function ATS1604916261979
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1604916261979(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1604916261979: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1604916261979: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1604916261979: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1604916261979: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setKey"] = stack["1604916261979"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setKey', actionFunction: 'CTS1604916261979'}, vars:{}};
		return this.CTS1604916261979(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1604916235850"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{}};
		return this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1604916261979 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1604916261979: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1604916261979: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setKey
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604916261979(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604916261979*/
		page.local.folder = props.stack.root.scope.item1.key;
		let url : string = window.location.href;
        let strToReplace = window.location.hash.split("/")[3];
        let index = url.indexOf(strToReplace);
        url = url.substring(0, index) + page.local.folder + url.substring(index + strToReplace.length);
        window.location.href = url;
		resolve();
		/*End_c8o_function:CTS1604916261979*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1580912621068(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580912621068*/
		    if(this.global.platform.name['0'] == 'mobile'){
		        this.global["visibleoptions"]= {};
		        this.global["visibleoptions"][vars["visible"]] = true;
		    }
		    else{
		        if(!this.global.selectedItem[vars["visible"]]){
	                this.global["visibleoptions"][vars["visible"]] = true;
	            } 
		    }
		        
		    
		    resolve();
		/*End_c8o_function:CTS1580912621068*/
		});
	}


	/**
	 * Function ATS1606574815659
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1606574815659(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1606574815659: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1606574815659: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1606574815659: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1606574815659: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["GetData"] = stack["1606574815659"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `true`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `c8oPage.list[stack.root.scope.params1586272511108.i].id`)}, vars:{}};
		return this.actionBeans.FullSyncGetAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["isVisible"] = stack["1606750680341"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'isVisible', actionFunction: 'STS1606750399163'}, vars:{selectedForm: get('selectedForm', `stack['GetData'].out`)}};
		return this.actionBeans.STS1606750399163(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["IfDesktopElse"] = stack["1606661446327"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfDesktopElse', actionFunction: 'IfElseAction', condition: get('condition', `!c8oPage.global.mobilePlat`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["Popover"] = stack["1606574815662"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: get('data', `{'index':stack.root.scope.params1586272511108.i, 'selectedForm': stack['GetData'].out, that: c8oPage, 'isVisible': stack['isVisible'].out}`), cssClass: null, showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.popOverPageSelector'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
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
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["ShowActionSheet"] = stack["1606661503679"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ShowActionSheet', actionFunction: 'CTS1606661503679'}, vars:{index: get('index', `stack.root.scope.params1586272511108.i`), selectedForm: get('selectedForm', `stack['GetData'].out`), isVisible: get('isVisible', ` stack['isVisible'].out`)}};
		return this.CTS1606661503679(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1606661503679 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606750399163 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1606574815659: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1606574815659: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ShowActionSheet
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606661503679(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606661503679*/
		    const upperFirst = (str)=>{
		        return str[0].toUpperCase() + str.slice(1);
		    }
		    let actionSheetCtrl = this.getInstance(ActionSheetController)
		    let buttons = [];
		    // equivalent to editView
		    if(page.local.published == false){
		        buttons.push({
		            text: this.translate.instant('Editer'),
		            icon: 'build',
		            handler: () =>{
		                page["actionBeans"].STS1606727065524(page, {}, {selectedForm: vars.selectedForm}, event);
		            }
		        })
		    }
		    // equivalent to visualizeView
		    buttons.push({
                text: this.translate.instant('Visualiser'),
                icon: 'eye',
                handler: () =>{
                    page["actionBeans"].STS1606728678097(page, {}, {selectedForm: vars.selectedForm}, event);
                }
            })
            // equivalent to publishDoc
            if(page.local.published == false){
                buttons.push({
                    text: this.translate.instant('Publier'),
                    icon: 'share-alt',
                    handler: () =>{
                        page["actionBeans"].STS1606729290054(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                })
            }
            
            // equivalent to VizualiseResponses
            if(page.local.published == true){
                buttons.push({
                    text: this.translate.instant('vizu_response'),
                    icon: 'stats',
                    handler: () =>{
                        page["actionBeans"].STS1606729949504(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                })
            }
            
            // equivalent to DownloadCsv
            if(page.local.published == true && vars.isVisible){
                buttons.push({
                    text: this.translate.instant('respCsv'),
                    icon: 'custom-csv',
                    handler: async () => {
                       const name = await page["actionBeans"].STS1606731053716(page, {}, {name: vars.selectedForm.name}, event);
                       const offset = await page["actionBeans"].STS1606731751926(page, {}, {}, event);
                       page["actionBeans"].STS1606730370814(page, {}, {selectedForm: vars.selectedForm, name: name, offset: offset}, event);
                    }
                })
            }
            
            // equivalent to CreatePwa
            if(page.local.published == true && vars.isVisible){
                buttons.push({
                    text: this.translate.instant('create_or_update_pwa_short'),
                    icon: 'custom-pwa',
                    handler: () => {
                      page["actionBeans"].STS1606752424750(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                })
            }
            
            // equivalent to GetLInkShare
            if(page.local.published == true){
                buttons.push({
                    text: this.translate.instant('linkShare'),
                    icon: 'link',
                    handler: () => {
                      page["actionBeans"].STS1606753067983(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                })
            }
            // equivalent to GetLinkSharePublic
            if(page.local.published == true && vars.isVisible){
                buttons.push({
                    //this.upperFirst(translate.instant('linkShareAnonymous'))
                    text: vars.selectedForm.sharedAnonymous == true || vars.selectedForm.sharedAnonymous == "true" ? upperFirst(this.translate.instant('linkShareAnonymous')): upperFirst(this.translate.instant('linkShareActive')+ ' ' + this.translate.instant('linkShareAnonymous')),
                    icon: 'link',
                    handler: () => {
                      page["actionBeans"].STS1606815237125(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                })
            }
            // equivalent to DisableSharePublic
            if(page.local.published && (vars.selectedForm.sharedAnonymous == true || vars.selectedForm.sharedAnonymous == 'true') && vars.isVisible){
                buttons.push({
                    //this.upperFirst(translate.instant('linkShareAnonymous'))
                    text: this.translate.instant('linkShareDisable'),
                    icon: 'link',
                    handler: () => {
                      page["actionBeans"].STS1606815643143(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                }) 
            }
            // equivalent to ManageAccessRights
            if((page.local.published && vars.isVisible) || (!page.local.published)){
                buttons.push({
                    //this.upperFirst(translate.instant('linkShareAnonymous'))
                    text: this.translate.instant('manage_acces_right'),
                    icon: 'key',
                    handler: () => {
                      page["actionBeans"].STS1606819651922(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                }) 
            }
            // equivalent to ManageAccessRightsResponses
            if((page.local.published && vars.isVisible) || (!page.local.published)){
                buttons.push({
                    //this.upperFirst(translate.instant('linkShareAnonymous'))
                    text: this.translate.instant('manage_acces_right_resp'),
                    icon: 'key',
                    handler: () => {
                      page["actionBeans"].STS1606819826094(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                }) 
            }
            // equivalent to ManageLabels
            buttons.push({
                //this.upperFirst(translate.instant('linkShareAnonymous'))
                text: this.translate.instant('manage_labels'),
                icon: 'folder-open',
                handler: () => {
                  page["actionBeans"].STS1606819977341(page, {}, {selectedForm: vars.selectedForm}, event);
                }
            }) 
            // equivalent to copy
            if(!page.local.published){
                buttons.push({
                    text: this.translate.instant('duplicate_form'),
                    icon: 'copy',
                    handler: () => {
                      page["actionBeans"].STS1606820276458(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                }) 
            }
            // equivalent to copyTo
            if(page.local.published && ((page.global.settings.editing_rights != undefined && page.global.settings.editing_rights == 'true') || page.global.settings.editing_rights == undefined)){
                buttons.push({
                    text: this.translate.instant('duplicate_form_to'),
                    icon: 'copy',
                    handler: () => {
                      page["actionBeans"].STS1606821705396(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                }) 
            }
            // equivalent to Thumbnail
            if(!page.local.published){
                buttons.push({
                    text: this.translate.instant('thumb_bg_label'),
                    icon: 'image',
                    handler: () => {
                      page["actionBeans"].STS1606825399935(page, {}, {selectedForm: vars.selectedForm}, event);
                    }
                }) 
            }
            // equivalent to AddToFav
            if(!page.local.published && page.global.settings.favorites.indexOf(vars.selectedForm._id) == -1){
                buttons.push({
                    text: this.translate.instant('Ajouter_aux_Favoris'),
                    icon: 'star',
                    handler: () => {
                      page["actionBeans"].STS1606826327707(page, {}, {selectedForm: vars.selectedForm, index: vars.index, that:page}, event);
                    }
                }) 
            }
            // equivalent to AddToFav1
            if(!page.local.published && page.global.settings.favorites.indexOf(vars.selectedForm._id) != -1){
                buttons.push({
                    text: this.translate.instant('Remove_aux_Favoris'),
                    icon: 'star',
                    handler: () => {
                      page["actionBeans"].STS1606828487741(page, {}, {selectedForm: vars.selectedForm, index: vars.index, that:page}, event);
                    }
                }) 
            }
            // equivalent to exporter
            buttons.push({
                text: this.translate.instant('Exporter_form'),
                icon: 'download',
                handler: () => {
                  page["actionBeans"].STS1606828765731(page, {}, {selectedForm: vars.selectedForm, index: vars.index, that:page}, event);
                }
            }) 
            // equivalent to DeleteView
            buttons.push({
                text: this.translate.instant('Supprimer'),
                icon: 'trash',
                handler: () => {
                  page["actionBeans"].STS1606843476348(page, {}, {selectedForm: vars.selectedForm, index: vars.index, that:page}, event);
                }
            }) 
            
		    
            buttons.push({
                text: this.translate.instant('Cancel'),
                role: 'cancel',
                handler:() => {
                }
            })
		    let actionSheet = actionSheetCtrl.create({
		        title: vars.selectedForm.name,
		        buttons
		      });

		      actionSheet.present();
		/*End_c8o_function:CTS1606661503679*/
		});
	}


	/**
	 * Function ATS1586272535807
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586272535807(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586272535807: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586272535807: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586272535807: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586272535807: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		
		let self: any = stack["IfPublishedElse"] = stack["1586272535807"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfPublishedElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.published`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootViewerPage"] = stack["1586272535810"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootViewerPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: c8oPage.list[stack.root.scope.params1586272511108.i].id}`), page: get('page', `'C8Oforms.MobileApplication.Application.viewerPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.actionBeans.RootPageAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootEditorPage"] = stack["1586272535816"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootEditorPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: c8oPage.list[stack.root.scope.params1586272511108.i].id}`), page: get('page', `'C8Oforms.MobileApplication.Application.editorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.actionBeans.RootPageAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586272535807: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586272535807: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1600099089483
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600099089483(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600099089483: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600099089483: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600099089483: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600099089483: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["initQRCode"] = stack["1600099089483"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'initQRCode', actionFunction: 'CTS1600099089483'}, vars:{}};
		return this.CTS1600099089483(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600099089483 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600099089483: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600099089483: ended"); resolveP(res)});
		});
	}

	/**
	 * Function initQRCode
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600099089483(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600099089483*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		resolve();
		/*End_c8o_function:CTS1600099089483*/
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
	CTS1603969447339(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1603969447339*/
		    event.stopPropagation()
		    window.open(window.location.href.substring(0, window.location.href.indexOf("mobile/index.html"))+page["list"][props.stack.root.scope.params1586272511108.i]['value'].pwa_subPath)
		    resolve();
		/*End_c8o_function:CTS1603969447339*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586272535867(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586272535867*/
		try{
		    if(!this.global.selectedItem[vars["visible"]] && !this.global.mobilePlat){
                this.global["visibleoptions"][vars["visible"]] = true;
                let docOptions = document.getElementById('idcardO'+vars.visible);
                let docCard = document.getElementById('idcard'+vars.visible);
                docOptions.style.visibility = "visible";
                docCard.style["background-color"] = "#f9f9f9";
            }
		}
		catch(e){
		    
		}
		resolve();
		/*End_c8o_function:CTS1586272535867*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586272535876(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586272535876*/
		try{
		    if(!this.global.selectedItem[vars["visible"]] && !this.global.mobilePlat){
		        this.global["visibleoptions"][vars["visible"]] = false;
                let docOptions = document.getElementById('idcardO'+vars.visible);
                let docCard = document.getElementById('idcard'+vars.visible);
                docOptions.style.visibility = "hidden";
                docCard.style["background-color"] = "#ffffff";
            }
		}
		catch(e){
		    
		}
		resolve();
		/*End_c8o_function:CTS1586272535876*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586272535906(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586272535906*/
		    this.global.selectedItem[props.stack.root.scope.params1586272511108.i] = true;
		    event.preventDefault();
		    //event.stopPropagation();
		    resolve();
		/*End_c8o_function:CTS1586272535906*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604681919414(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604681919414*/
		    this.global["visibleoptions1"][vars["visible"]] = true;
		    resolve();
		/*End_c8o_function:CTS1604681919414*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604681919423(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604681919423*/
		    this.global["visibleoptions1"][vars["visible"]] = false;
		    resolve();
		/*End_c8o_function:CTS1604681919423*/
		});
	}


	/**
	 * Function ATS1604681432260
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1604681432260(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1604681432260: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1604681432260: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1604681432260: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1604681432260: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		
		let self: any = stack["IfPublishedElse"] = stack["1604681432260"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfPublishedElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.published`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1604681432263"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: c8oPage.list[stack.root.scope.params1586351141705.i].id}`), page: get('page', `'C8Oforms.MobileApplication.Application.viewerPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.actionBeans.RootPageAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1604681432269"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: c8oPage.list[stack.root.scope.params1586351141705.i].id}`), page: get('page', `'C8Oforms.MobileApplication.Application.editorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.actionBeans.RootPageAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1604681432260: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1604681432260: ended"); resolveP(res)});
		});
	}

	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604681991120(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604681991120*/
		    this.global["visibleoptions1"][vars["visible"]] = true;
		    resolve();
		/*End_c8o_function:CTS1604681991120*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604681991129(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604681991129*/
		    this.global["visibleoptions1"][vars["visible"]] = false;
		    resolve();
		/*End_c8o_function:CTS1604681991129*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604681878738(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604681878738*/
		    this.global["visibleoptions1"][vars["visible"]] = true;
		    resolve();
		/*End_c8o_function:CTS1604681878738*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604681878747(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604681878747*/
		    this.global["visibleoptions1"][vars["visible"]] = false;
		    resolve();
		/*End_c8o_function:CTS1604681878747*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604681432422(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604681432422*/
		    this.global["visibleoptions1"][vars["visible"]] = true;
		    resolve();
		/*End_c8o_function:CTS1604681432422*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604681432431(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604681432431*/
		    this.global["visibleoptions1"][vars["visible"]] = false;
		    resolve();
		/*End_c8o_function:CTS1604681432431*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586351172083(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586351172083*/
		    if(!this.global.selectedItem[vars["visible"]]){
		        this.global["visibleoptions"][vars["visible"]] = true;
		    }
		    resolve();
		/*End_c8o_function:CTS1586351172083*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586351172092(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586351172092*/
		    if(!this.global.selectedItem[vars["visible"]]){
		        this.global["visibleoptions"][vars["visible"]] = false;
            }
		    resolve();
		/*End_c8o_function:CTS1586351172092*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586351172152(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586351172152*/
		    if(!this.global.selectedItem[vars["visible"]]){
		        this.global["visibleoptions"][vars["visible"]] = true;
		    }
		    resolve();
		/*End_c8o_function:CTS1586351172152*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586351172161(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586351172161*/
		    if(!this.global.selectedItem[vars["visible"]]){
		        this.global["visibleoptions"][vars["visible"]] = false;
            }
		    resolve();
		/*End_c8o_function:CTS1586351172161*/
		});
	}


	/**
	 * Function ATS1586351172179
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586351172179(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586351172179: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586351172179: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586351172179: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586351172179: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		
		let self: any = stack["IfPublishedElse"] = stack["1586351172179"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfPublishedElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.published`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1586351172182"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: c8oPage.list[stack.root.scope.params1586351141705.i].id}`), page: get('page', `'C8Oforms.MobileApplication.Application.viewerPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.actionBeans.RootPageAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1586351172188"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: c8oPage.list[stack.root.scope.params1586351141705.i].id}`), page: get('page', `'C8Oforms.MobileApplication.Application.editorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.actionBeans.RootPageAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586351172179: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586351172179: ended"); resolveP(res)});
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
	CTS1604675076662(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604675076662*/
		    event.stopPropagation()
		    window.open(window.location.href.substring(0, window.location.href.indexOf("mobile/index.html"))+page["list"][props.stack.root.scope.params1586351141705.i]['value']['doc'].pwa_subPath)
		    resolve();
		/*End_c8o_function:CTS1604675076662*/
		});
	}


	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586351172224(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586351172224*/
		    if(!this.global.selectedItem[vars["visible"]]){
		        this.global["visibleoptions"][vars["visible"]] = true;
		    }
		    resolve();
		/*End_c8o_function:CTS1586351172224*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586351172233(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586351172233*/
		    if(!this.global.selectedItem[vars["visible"]]){
		        this.global["visibleoptions"][vars["visible"]] = false;
            }
		    resolve();
		/*End_c8o_function:CTS1586351172233*/
		});
	}


	/**
	 * Function ATS1586351172251
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586351172251(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586351172251: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586351172251: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586351172251: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586351172251: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		
		let self: any = stack["IfPublishedElse"] = stack["1586351172251"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfPublishedElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.published`), negate: get('negate', `false`)}, vars:{}};
		return this.actionBeans.IfElseAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		if (res == true) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1586351172254"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: c8oPage.list[stack.root.scope.params1586351141705.i].id}`), page: get('page', `'C8Oforms.MobileApplication.Application.viewerPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.actionBeans.RootPageAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1586351172260"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: c8oPage.list[stack.root.scope.params1586351141705.i].id}`), page: get('page', `'C8Oforms.MobileApplication.Application.editorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.actionBeans.RootPageAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586351172251: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586351172251: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1604677407612
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1604677407612(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1604677407612: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1604677407612: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1604677407612: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1604677407612: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["GetData"] = stack["1604677407612"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `true`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `c8oPage.list[stack.root.scope.params1586351141705.i].id`)}, vars:{}};
		return this.actionBeans.FullSyncGetAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["Popover"] = stack["1604677407615"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: get('data', `{'index':stack.root.scope.params1586351141705.i, 'selectedForm': parent.out, that: c8oPage}`), cssClass: null, showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.popOverPageSelector'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
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
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1604677407612: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1604677407612: ended"); resolveP(res)});
		});
	}

	/**
	 * Function showoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586351172287(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586351172287*/
		    if(!this.global.selectedItem[vars["visible"]]){
		        this.global["visibleoptions"][vars["visible"]] = true;
		    }
		    resolve();
		/*End_c8o_function:CTS1586351172287*/
		});
	}


	/**
	 * Function removeoptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586351172296(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586351172296*/
		    if(!this.global.selectedItem[vars["visible"]]){
		        this.global["visibleoptions"][vars["visible"]] = false;
            }
		    resolve();
		/*End_c8o_function:CTS1586351172296*/
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
	CTS1605176478429(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605176478429*/
		if(this.local.showAdvancedSearch == true){
		    this.local.showAdvancedSearch = false;
		}
		resolve();
		/*End_c8o_function:CTS1605176478429*/
		});
	}


	/**
	 * Function ATS1586424006177
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586424006177(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586424006177: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586424006177: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586424006177: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586424006177: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424006177"] = {};
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
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] STS1586254399526 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424113962"] = {};
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
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586424006177: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586424006177: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1572276678583
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572276678583(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572276678583: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572276678583: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572276678583: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572276678583: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1572276678583"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `{}`), Property: get('Property', `'visibleoptions'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424113962"] = {};
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
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572276678583: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572276678583: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1580999445423
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1580999445423(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1580999445423: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1580999445423: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1580999445423: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1580999445423: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal2"] = stack["1580999445423"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal2', actionFunction: 'SetGlobalAction', Value: get('Value', `{}`), Property: get('Property', `'visibleoptions0'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424113962"] = {};
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
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1580999445423: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1580999445423: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1572276678586
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572276678586(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572276678586: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572276678586: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572276678586: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572276678586: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal11"] = stack["1572276678586"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal11', actionFunction: 'SetGlobalAction', Value: get('Value', `{}`), Property: get('Property', `'selectedItem'`)}, vars:{}};
		return this.actionBeans.SetGlobalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424113962"] = {};
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
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572276678586: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572276678586: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1576601694760
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1576601694760(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1576601694760: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1576601694760: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1576601694760: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1576601694760: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["defineSettings"] = stack["1576601694760"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'defineSettings', actionFunction: 'CTS1576601694760'}, vars:{}};
		return this.CTS1576601694760(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1576601694760 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424113962"] = {};
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
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1576601694760: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1576601694760: ended"); resolveP(res)});
		});
	}

	/**
	 * Function defineSettings
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1576601694760(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576601694760*/
		page.local["ddoc"] = "published_forms";
		//this.local.published = true;
		if(this.global["language"] == "fr" || this.global["language"] == "it" || this.global["language"] == "es" || this.global["language"] == "en"){
		    localStorage.setItem('lang', this.global["language"]);
		}
		
		
		
		if(page["local"]["changeListener"] == undefined){
		    page["local"]["changeListener"] = new C8oFullSyncChangeListener((changes:Array<any>)=>{
	            if(this.global["changes_published"] != undefined && this.global["changes_published"].length > 0){
	                for(let elem of changes["changes"]){
	                    for(let i in this.global["changes_published"]){
	                        if(elem.id == this.global["changes_published"][i]){
	                            this.c8o.callJson("fs://c8oforms_fs.get", "docid", elem.id)
	                            .then((res)=>{
	                                this.global["changes_published"].pop(i);
	                                const msg = this.translate.instant("pub_form_success0") +"\"" +  res["name"] + "\"" + this.translate.instant("pub_form_success1");
	                                let _tc = this.getInstance(ToastController);
	                                let options = {
	                                        message: msg,
	                                        duration: 3000,
	                                        cssClass: "changeToast"
	                                       };

	                                _tc.create(options).present();
	                                return null;
	                            })
	                            .fail((err)=>{
	                                page.c8o.log.error(err);
	                            })
	                            
	                            
	                        }
	                    }
	                }
	            }
                for(let j in changes){
                    for(let i in changes[j]){
                        if(page["imgCache"][changes[j][i]["id"] +"/wallpaper"] != undefined || page["imgCache"][changes[j][i]["id"] +"/thumbnail"] != undefined){
                            delete page["imgCache"][changes[j][i]["id"] +"/wallpaper"];
                            delete page["imgCache"][changes[j][i]["id"] +"/thumbnail"];
                            page.c8o.log.debug("deleted img cache for id " +changes[j][i]["id"]);
                            this.tick();
                        }
                    }
                }
                
	            
	        });
		}
		
        this.c8o.addFullSyncChangeListener("c8oforms_fs", page["local"]["changeListener"], {return_docs: true});
		resolve();
		/*End_c8o_function:CTS1576601694760*/
		});
	}


	/**
	 * Function ATS1586340638874
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586340638874(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586340638874: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586340638874: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586340638874: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586340638874: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["addEventListener"] = stack["1586340638874"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'addEventListener', actionFunction: 'CTS1586340638874'}, vars:{}};
		return this.CTS1586340638874(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1586340638874 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424113962"] = {};
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
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586340638874: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586340638874: ended"); resolveP(res)});
		});
	}

	/**
	 * Function addEventListener
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586340638874(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586340638874*/
		    
		    // variables
            const stack = props.stack;
            const out = {keys: null};
            // declare function to call shared action manually
            page.local.manualCallShared = ()=>{
                this.actionBeans.STS1567094239807(this,{...{stack: stack, parent: parent, out: out}, ...props}, {...stack["root"].in, ...out}, event)
                .then((result)=>{
                })
                .catch((error)=>{
                    page.c8o.log.error("shared Action manual error", error)
                });
            };
            
		    // declare function for event subscriber
            page.local.func = (event)=>{
                if(event.ref == '_tags' || event.ref == '_subTags'){
                    page.c8o.log.debug("event ngxTagInputNgModelChange from selectorPage, instance: " + this["created"]);
                    let arrTmp = [];
                    for(let elem of event["event"]){
                        if(elem instanceof Object){
                            arrTmp.push(elem["value"]);
                        }
                        else{
                            arrTmp.push(elem);
                        }
                    }
                    this.local[event['ref'].substring(1)] = arrTmp;
                    page.local.manualCallShared();
                }
                
            };

    		// get instance of Events    
    		const events = this.getInstance(Events);
            
    		// call event subscriber
    		events.subscribe('ngxTagInputNgModelChange', page.local.func);
		
		/**
		
		parent = self;
        parent.out = res;
        out = parent.out;
        return new Promise((resolve, reject) => {
        let self: any = stack["InvokeSharedAction"] = {};
        self.in = {props:{tplVersion: '7.8.0.0', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{keys: get('keys', `null`)}};
        
        this.actionBeans.STS1567094239807(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
        
		
		**/
		resolve();
		/*End_c8o_function:CTS1586340638874*/
		});
	}


	/**
	 * Function ATS1604669061121
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1604669061121(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1604669061121: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1604669061121: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1604669061121: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1604669061121: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SyncData1"] = stack["1604669061121"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SyncData1', actionFunction: 'FullSyncSyncAction', BatchSize: get('BatchSize', `100`), Mode: get('Mode', `'continuous'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), Retry: get('Retry', `'true'`), BatchesLimit: get('BatchesLimit', `10`), Direction: get('Direction', `'bi-directional'`)}, vars:{}};
		return this.actionBeans.FullSyncSyncAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["PublishEventInitalSyncFinished"] = stack["1604669061139"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PublishEventInitalSyncFinished', actionFunction: 'PublishEventAction', data: null, topic: get('topic', `'anyInitalSyncFinished'`)}, vars:{}};
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
		,
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction1"] = stack["1604670072767"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction1', actionFunction: 'STS1604669954453'}, vars:{}};
		return this.actionBeans.STS1604669954453(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1604670366191"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1604669954453 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncSyncAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424113962"] = {};
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
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1604669061121: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1604669061121: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1604670004971
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1604670004971(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1604670004971: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1604670004971: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1604670004971: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1604670004971: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction1"] = stack["1604670004971"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction1', actionFunction: 'STS1604669954453'}, vars:{}};
		return this.actionBeans.STS1604669954453(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1604669954453 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424113962"] = {};
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
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1604670004971: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1604670004971: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1572276511116
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572276511116(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572276511116: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572276511116: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572276511116: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572276511116: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser1"] = stack["1572276511116"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser1', actionFunction: 'CTS1572276511116'}, vars:{}};
		return this.CTS1572276511116(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1572276511116 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572276511116: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572276511116: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckUser1
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1572276511116(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1572276511116*/
		    let indexPWA = window.location.pathname.indexOf("pwas");
            let indexMobile = window.location.pathname.indexOf("mobile");
              // if we started in standalone pwa mode
            if(indexPWA != -1 && indexMobile == -1){
                resolve(false);
                setTimeout(()=>{
                    page.routerProvider.setRoot("loginPage", {}, null); 
                }, 200);
            }
            else{
    		    this.local = {};
    		    page.local.editing_rights = false;
    		    page.c8o.promiseFinInit.then((res)=>{
    		        if(page.c8o.session.status == C8oSessionStatus.Connected || page.c8o.session.status == C8oSessionStatus.HasBeenConnected){
    		            page.global.user = page.c8o.session.user.name;
                        page.local.user = page.c8o.session.user.name;
                        resolve(true);
                        /*page.c8o.callJson('fs://c8oforms_fs.get', '_id', 'C8Oreserved_' +this.c8o.session.user.name)
                        .then((res)=>{
                            /*if(props.parent.out["editing_rights"] != undefined && (props.parent.out["editing_rights"] == false || props.parent.out["editing_rights"] == "false")){
                                page.local.editing_rights = false;
                            }
                            console.log(res);
                            return null;
                        })*/
    	                
    	            }
    		    })
    		    const request = window["indexedDB"]["open"]("MyTestDatabase", 3);
                request.onerror = (event)=> {
                    resolve(false);
                    setTimeout(()=>{
                        page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
                    }, 200);
                    return;
                  };
                  request.onsuccess = (event)=> {
                      page.local.folder = (this.navParams.get('folder') == undefined || this.navParams.get('folder') == ":folder" ) ? "": this.navParams.get('folder');
                      page.local.sub = (this.navParams.get('sub') == undefined || this.navParams.get('sub') == ":sub" ) ? "": this.navParams.get('sub');
                      
                      if(this.navParams.get('grid') == "{false" || this.navParams.get('grid') == false){
                          this.global.grid = false;
                      }
                      else{
                          this.global.grid = true;
                      }
        		    // Getting user status (whenever he is logged or not)
        		    //page.local.published = this.navParams.get('published');
        		    if(this.navParams.get('published') == undefined || this.navParams.get('published') == ":published"){
        		        //page.local.published = false;
        		    }
        		    else{
        		        if(this.navParams.get('published') == false || this.navParams.get('published') == "false"){
        		            page.local.published = false;
        		        }
        		        else if(this.navParams.get('published') == true || this.navParams.get('published') == "true"){
        		            page.local.published = true;
        	                page.local.ddoc = "published_forms";
        	                
        		        }
        		        else {
        		            page.local.published = false;
        		        }
        		        
        		    }
        		    page.c8o.httpInterface.getUserServiceStatus()
        		    .then((res)=>{
        		        if(res.user.length == 64 || res.user.authenticated == false){
        		            setTimeout(()=>{
                                page.routerProvider.setRoot("loginPage", {published:page.local.published, page: "selectorPage"}, null); 
                            }, 200);
                            resolve(false);
                        }
                        else{
                            page.global.user = res.user;
                            page.local.user = res.user;
                            resolve(true);
                        }
        		    })
        		    .catch((err)=>{
        		        if(window.navigator.onLine == true){
            		        setTimeout(()=>{
            		            page.routerProvider.setRoot("loginPage", {published:page.local.published, page: "selectorPage"}, null); 
            		        }, 200);
            		        resolve(false);
        		        }
        		        else{
        		            // Offline mode
        		            page.local.user = page.c8o.session.user.name;
        		            resolve(true);
        		        }
        		    })
                  };
                  
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
            }
		/*End_c8o_function:CTS1572276511116*/
		});
	}


	/**
	 * Function DeselectAll
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606647086137(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606647086137*/
		    for(let item in this.global.selectedItem){
		        this.global.selectedItem[item] = false;
		        this.global['visibleoptions'][item] = false;
		    }
		    resolve();
		/*End_c8o_function:CTS1606647086137*/
		});
	}


	/**
	 * Function DeselectAll
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606645599258(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606645599258*/
		    for(let item in this.global.selectedItem){
		        this.global.selectedItem[item] = false;
		        this.global['visibleoptions'][item] = false;
		    }
		    resolve();
		/*End_c8o_function:CTS1606645599258*/
		});
	}


	/**
	 * Function ATS1572359989055
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572359989055(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572359989055: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572359989055: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572359989055: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572359989055: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["Close_Loading"] = stack["1572359989055"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Close_Loading', actionFunction: 'CloseLoadingAction'}, vars:{}};
		return this.actionBeans.CloseLoadingAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] CloseLoadingAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572359989055: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572359989055: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1586345349876
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586345349876(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586345349876: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586345349876: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586345349876: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586345349876: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["removeEventListener"] = stack["1586345349876"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'removeEventListener', actionFunction: 'CTS1586345349876'}, vars:{}};
		return this.CTS1586345349876(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1586345349876 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586345349876: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586345349876: ended"); resolveP(res)});
		});
	}

	/**
	 * Function removeEventListener
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586345349876(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586345349876*/
		    
		    page.c8o.removeFullSyncChangeListener("c8oforms_fs", page["local"]["changeListener"]);
    		page.c8o.log.debug("removing event ngxTagInputNgModelChange from selectorPage, instance: " + this["created"]);
    		const events = this.getInstance(Events);
    		events.unsubscribe('ngxTagInputNgModelChange', page.local.func);
		/*End_c8o_function:CTS1586345349876*/
		});
	}


	/**
	 * Function ETS1594641752198
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1594641752198(data) {
		this.c8o.log.debug("[MB] ETS1594641752198: 'updateThumbnail' received");
		this.ATS1594826886510({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1594826886510
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1594826886510(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1594826886510: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1594826886510: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1594826886510: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1594826886510: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["GetData"] = stack["1594826886510"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `true`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `parent.out._id`)}, vars:{}};
		return this.actionBeans.FullSyncGetAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["If"] = stack["1594828661218"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `stack['GetData'].out.formulaire`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["PostData"] = stack["1594829724364"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: null, RootKey: get('RootKey', `'thumbnail'`), noLoading: get('noLoading', `true`), _use_policy: get('_use_policy', `'merge'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `stack['root'].out._id`)}, vars:{index: get('index', `stack['root'].out.realIndex`), enabled: get('enabled', `stack['root'].out.enabledThumbTemp`), type: get('type', `stack['root'].out.fromDevice == 'color' ? 'color' : (stack['root'].out.fromDevice ? 'custom' : 'library')`), random: get('random', `stack['GetData'].out.wallpaper.random`), color: get('color', `stack['root'].out.colorPicker`)}};
		return this.actionBeans.FullSyncPostAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["checkAttachment"] = stack["1594831107305"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'checkAttachment', actionFunction: 'CTS1594831107305'}, vars:{arg: get('arg', `stack['root'].out`)}};
		return this.CTS1594831107305(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1594831107311"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out.put_attach == true`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["PutAttachment"] = stack["1594831107314"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PutAttachment', actionFunction: 'FullSyncPutAttachmentAction', content_type: get('content_type', `stack['checkAttachment'].out.type`), docid: get('docid', `stack['root'].out._id`), noLoading: get('noLoading', `true`), name: get('name', `'thumbnail'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), content: get('content', `stack['checkAttachment'].out.content`)}, vars:{}};
		return this.actionBeans.FullSyncPutAttachmentAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["refreshThumbnail"] = stack["1594831107317"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'refreshThumbnail', actionFunction: 'CTS1594831107317'}, vars:{}};
		return this.CTS1594831107317(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1594831107317 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncPutAttachmentAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1594831107305 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1594826886510: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1594826886510: ended"); resolveP(res)});
		});
	}

	/**
	 * Function checkAttachment
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1594831107305(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1594831107305*/
		    let args = vars.arg;
	        if(args.fromDevice === false){
                this.c8o.httpPublic.get(args.url, {responseType: 'blob' })
                .subscribe(resp => {
                    resolve({"put_attach": true, "content": resp,"type": resp.type });
                });
            }
	        else if(args.fromDevice === true){
	            resolve({"put_attach": true, "content": page.global.filePrev, "type" : page.global.filePrevType });
	        }
	        else {
                resolve({"put_attach": false});
            }
		/*End_c8o_function:CTS1594831107305*/
		});
	}


	/**
	 * Function refreshThumbnail
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1594831107317(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1594831107317*/
		    this.resetImageCache();
		resolve();
		/*End_c8o_function:CTS1594831107317*/
		});
	}


	/**
	 * Function ETS1604007513115
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1604007513115(data) {
		this.c8o.log.debug("[MB] ETS1604007513115: 'toastPWA' received");
		this.ATS1604007345722({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1604007345722
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1604007345722(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1604007345722: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1604007345722: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1604007345722: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1604007345722: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["Toast"] = stack["1604007345722"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `10000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.translate.instant('notify_when_ready')`)}, vars:{}};
		return this.actionBeans.ToastAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1604007345722: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1604007345722: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ETS1605260781973
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1605260781973(data) {
		this.c8o.log.debug("[MB] ETS1605260781973: 'ngxTagInputNgModelChange' received");
		this.ATS1605260781976({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1605260781976
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605260781976(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605260781976: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605260781976: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605260781976: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605260781976: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["setTags"] = stack["1605260781976"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setTags', actionFunction: 'CTS1605260781976'}, vars:{}};
		return this.CTS1605260781976(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605260781976 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605260781976: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605260781976: ended"); resolveP(res)});
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
	CTS1605260781976(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605260781976*/
		    if(event.ref == 'searchTags' || event.ref == 'searchSubTags'){
		        let arrTmp = [];
	            for(let elem of event["event"]){
	                if(elem instanceof Object){
	                    arrTmp.push(elem["value"]);
	                }
	                else{
	                    arrTmp.push(elem);
	                }
	            }
	            page.local["_"+event['ref']] = arrTmp;
		    }
		    resolve();
		    
		    
		/*End_c8o_function:CTS1605260781976*/
		});
	}

}
