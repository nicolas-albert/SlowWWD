import { Component, ViewChild}                              from '@angular/core';
import { ChangeDetectorRef, Injector}                       from '@angular/core';
import { enableProdMode}                                    from '@angular/core';
import { SwUpdate }                                         from '@angular/service-worker';

import { AlertController }                                  from 'ionic-angular';
import { Platform, Nav, App, Events, LoadingController}     from 'ionic-angular';
import { StatusBar }                                        from '@ionic-native/status-bar';
import { TranslateService }                                 from '@ngx-translate/core';

// Convertigo CAF Imports
import { C8oRouter }                                        from 'c8ocaf';
import { C8oRoute, C8oRouteOptions, C8oRouteListener}       from 'c8ocaf'
import { C8oPage, C8oPageBase, C8oCafUtils}                 from "c8ocaf";
import { C8o, C8oSettings, C8oLogLevel,C8oProgress }        from "c8osdkangular";
import { C8oNetworkStatus }                                 from "c8osdkangular";

import { ActionBeans }                                      from '../services/actionbeans.service';

/*
	You can customize your application class by writing code between the :

   		Begin_c8o_XXXX and
   		End_c8o_XXXX
   		
   	Comments.
   	
   	Any code placed outside these these comments will be lost when the application is generated
*/
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import * as ts from 'typescript';


/*Begin_c8o_AppImport*/
import { ToastController } from 'ionic-angular';
import { C8oFullSyncChangeListener } from "c8osdkangular";
enableProdMode();
/*End_c8o_AppImport*/

 




@Component({
    templateUrl: 'app.html'
})
export class MyApp extends C8oPageBase {
    @ViewChild(Nav) nav: Nav;
    rootPage : any = 'loginPage';
    pages : Array<{title: string, titleKey: string, icon: string, iconPos: string, component: any, name: string, includedInAutoMenu?: boolean}>;
    pagesKeyValue: any;
    public actionBeans: ActionBeans;
    public events : Events;
    
	@ViewChildren("ElseBlock_1602690082828") public all_ElseBlock_1602690082828 : QueryList<any>;
	@ViewChild("ElseBlock_1602690082828") public ElseBlock_1602690082828;


    
	/*Begin_c8o_AppDeclaration*/
    
	/*End_c8o_AppDeclaration*/

    constructor(platform: Platform, statusBar: StatusBar, c8o: C8o, router: C8oRouter, loader: LoadingController, private app: App, private translate: TranslateService, ref: ChangeDetectorRef, injector: Injector) {
        
        super(injector, router, loader, ref);
        
        this.actionBeans = this.getInstance(ActionBeans);
        this.events = this.getInstance(Events);
        
        /**
         * declaring page to show in Menu
         */
        this.pages = [ { title: "Title for editor", titleKey: "Title_for_editor", icon: "", iconPos: "", component: "editorPage", name: "editorPage", includedInAutoMenu: true}, { title: "Login", titleKey: "Login", icon: "", iconPos: "", component: this.rootPage, name: "loginPage", includedInAutoMenu: false}, { title: "Visualisateur", titleKey: "Visualisateur", icon: "", iconPos: "", component: "viewerPage", name: "viewerPage", includedInAutoMenu: true}, { title: "Selection de formulaires", titleKey: "Selection_de_formulaires", icon: "", iconPos: "", component: "selectorPage", name: "selectorPage", includedInAutoMenu: true}, { title: "Settings", titleKey: "Settings", icon: "settings", iconPos: "", component: "settingsPage", name: "settingsPage", includedInAutoMenu: true}, { title: "Title for dropFilePage", titleKey: "Title_for_dropFilePage", icon: "", iconPos: "", component: "dropFilePage", name: "dropFilePage", includedInAutoMenu: true}, { title: "Title for progressPage", titleKey: "Title_for_progressPage", icon: "", iconPos: "", component: "progressPage", name: "progressPage", includedInAutoMenu: true}, { title: "Title for popOverPageSelector", titleKey: "Title_for_popOverPageSelector", icon: "", iconPos: "", component: "popOverPageSelector", name: "popOverPageSelector", includedInAutoMenu: true}, { title: "Title for wallPaperSelection", titleKey: "Title_for_wallPaperSelection", icon: "", iconPos: "", component: "wallPaperSelection", name: "wallPaperSelection", includedInAutoMenu: true}, { title: "Title for wallPaperSelection1", titleKey: "Title_for_wallPaperSelection1", icon: "", iconPos: "", component: "thumbnailSelection", name: "thumbnailSelection", includedInAutoMenu: true}, { title: "Title for colorPage", titleKey: "Title_for_colorPage", icon: "", iconPos: "", component: "colorPage", name: "colorPage", includedInAutoMenu: true}, { title: "share", titleKey: "share", icon: "", iconPos: "", component: "sharingPage", name: "sharingPage", includedInAutoMenu: false}, { title: "Title for labelsPage", titleKey: "Title_for_labelsPage", icon: "", iconPos: "", component: "labelsPage", name: "labelsPage", includedInAutoMenu: true}, { title: "Title for dataPage", titleKey: "Title_for_dataPage", icon: "", iconPos: "", component: "dataPage", name: "dataPage", includedInAutoMenu: true}, { title: "Title for linkPage", titleKey: "Title_for_linkPage", icon: "", iconPos: "", component: "linkPage", name: "linkPage", includedInAutoMenu: true}, { title: "Title for resetPasswordPage", titleKey: "Title_for_resetPasswordPage", icon: "", iconPos: "", component: "resetPasswordPage", name: "resetPasswordPage", includedInAutoMenu: true}, { title: "Title for which_question", titleKey: "Title_for_which_question", icon: "", iconPos: "", component: "which_question", name: "which_question", includedInAutoMenu: true}, { title: "Title for WallpaperSelectionCustom", titleKey: "Title_for_WallpaperSelectionCustom", icon: "", iconPos: "", component: "wallpaperSelectionCustom", name: "wallpaperSelectionCustom", includedInAutoMenu: true}, { title: "Title for WallpaperSelectionTemplates", titleKey: "Title_for_WallpaperSelectionTemplates", icon: "", iconPos: "", component: "WallpaperSelectionTemplates", name: "WallpaperSelectionTemplates", includedInAutoMenu: true}, { title: "Title for wallpaperSelectionCustom1", titleKey: "Title_for_wallpaperSelectionCustom1", icon: "", iconPos: "", component: "wallpaperSelectionColorPicker", name: "wallpaperSelectionColorPicker", includedInAutoMenu: true}, { title: "Title for WallpaperSelectionTemplates1", titleKey: "Title_for_WallpaperSelectionTemplates1", icon: "", iconPos: "", component: "ThumbnailSelectionTemplates", name: "ThumbnailSelectionTemplates", includedInAutoMenu: true}, { title: "Title for wallpaperSelectionCustom1", titleKey: "Title_for_wallpaperSelectionCustom1", icon: "", iconPos: "", component: "ThumbnailSelectionCustom", name: "ThumbnailSelectionCustom", includedInAutoMenu: true}, { title: "Title for wallpaperSelectionColorPicker1", titleKey: "Title_for_wallpaperSelectionColorPicker1", icon: "", iconPos: "", component: "ThumbnailSelectionColorPicker", name: "ThumbnailSelectionColorPicker", includedInAutoMenu: true}, { title: "Title for ManageAccessRights", titleKey: "Title_for_ManageAccessRights", icon: "", iconPos: "", component: "ManageAccessRights", name: "ManageAccessRights", includedInAutoMenu: true}, { title: "Title for ConditionalPage", titleKey: "Title_for_ConditionalPage", icon: "", iconPos: "", component: "ConditionalPage", name: "ConditionalPage", includedInAutoMenu: true}, { title: "Title for PopOverInputs", titleKey: "Title_for_PopOverInputs", icon: "", iconPos: "", component: "PopOverInputs", name: "PopOverInputs", includedInAutoMenu: true}, { title: "Title for ConditionalPage1", titleKey: "Title_for_ConditionalPage1", icon: "", iconPos: "", component: "PreviewMultiple", name: "PreviewMultiple", includedInAutoMenu: true}, { title: "Title for ManageAccessRights1", titleKey: "Title_for_ManageAccessRights1", icon: "", iconPos: "", component: "ManageAccessRights1", name: "ManageAccessRights1", includedInAutoMenu: true}, { title: "Title for modalActions", titleKey: "Title_for_modalActions", icon: "", iconPos: "", component: "modalActions", name: "modalActions", includedInAutoMenu: true}, { title: "Title for NetworkStatus", titleKey: "Title_for_NetworkStatus", icon: "", iconPos: "", component: "NetworkStatus", name: "NetworkStatus", includedInAutoMenu: true}, { title: "Title for exportCsvPage", titleKey: "Title_for_exportCsvPage", icon: "", iconPos: "", component: "exportCsvPage", name: "exportCsvPage", includedInAutoMenu: true}, { title: "Title for CreatePwa", titleKey: "Title_for_CreatePwa", icon: "", iconPos: "", component: "CreatePwa", name: "CreatePwa", includedInAutoMenu: true}, { title: "Title for PopOverNotifs", titleKey: "Title_for_PopOverNotifs", icon: "", iconPos: "", component: "PopOverNotifs", name: "PopOverNotifs", includedInAutoMenu: true}, { title: "Title for modalVideo", titleKey: "Title_for_modalVideo", icon: "", iconPos: "", component: "modalVideo", name: "modalVideo", includedInAutoMenu: true}];
        this.pagesKeyValue = {editorPage:null,loginPage:this.rootPage,viewerPage:null,selectorPage:null,settingsPage:null,dropFilePage:null,progressPage:null,popOverPageSelector:null,wallPaperSelection:null,thumbnailSelection:null,colorPage:null,sharingPage:null,labelsPage:null,dataPage:null,linkPage:null,resetPasswordPage:null,which_question:null,wallpaperSelectionCustom:null,WallpaperSelectionTemplates:null,wallpaperSelectionColorPicker:null,ThumbnailSelectionTemplates:null,ThumbnailSelectionCustom:null,ThumbnailSelectionColorPicker:null,ManageAccessRights:null,ConditionalPage:null,PopOverInputs:null,PreviewMultiple:null,ManageAccessRights1:null,modalActions:null,NetworkStatus:null,exportCsvPage:null,CreatePwa:null,PopOverNotifs:null,modalVideo:null}
        this.router.pagesArray = this.pages;
        this.router.pagesKeyValue = this.pagesKeyValue;


        /* ============================================================================================================
           Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================
         * Thanks to Convertigo CAF router we can manage call and navigation :
         *
         * Create a C8orouteOptions in order to define basic and repetitive routes options that will be used in C8oRoute
         * We can define actions such as beforeCall that allow us to run code before the C8o Call
         */

        let tableOptions = new C8oRouteOptions()
            .setBeforeCall(() => {
                //Do what ever has to be done...
            })
            .setAfterCall(()=>{
                //Do what ever has to be done...
            })
            .setDidEnter((page: C8oPage, c8o: C8o) => {
                c8o.log.trace("DidEnter was called from the new routing table and with page : " + page.constructor.name)
            })
            .setDidLeave((page: C8oPage, c8o: C8o) => {
                c8o.log.trace("DidLeave was called from the new routing table and with page : " + page.constructor.name)
            })
            .setTargetAnimate(true)
            .setTargetDuration(250);

        /**
         * The generated Routing Table
         */
          
        

        /**
         *  Define a C8oSettings Object in order to declare settings to be used in the C8oInit method
         */
        let settings: C8oSettings = new C8oSettings();
        settings
            .setLogRemote(true)
            .setLogC8o(true)
            .setLogLevelLocal(C8oLogLevel.DEBUG)
            .setKeepSessionAlive(true);
        /*Begin_c8o_AppSettings*/
        //settings.setNormalizeParameters(true);
        const localStorage = window.localStorage.getItem("c8oforms_log_level");
        const logLevel = localStorage != undefined && localStorage != '' ? localStorage : 'WARN';
        settings.setEnablePrefixBase(true)
        .setLogLevelLocal(C8oLogLevel[logLevel]);
        
        this.global["platform"] = {"name":[""]};
        this.global['visibleoptions'] = [];
        this.global["settings"] = {"editing_rights": false};
        /*End_c8o_AppSettings*/
        
        /**
         * Then we assign C8oSettings to our c8o Object with the init method
         */
        settings.addHeader("x-convertigo-mb", "7.9.0");
		this.c8o.init(settings);

        
        /* ============================================================================================================
             End of Convertigo Angular Framework (CAF) initialization...
           ============================================================================================================*/
        		this.events.subscribe('anyInitalSyncFinished', (data) => {this.ETS1601368537502(data)});
		this.c8o.handleSessionLost().subscribe((data) => {this.ETS1587480742427(data)});

        
		/*Begin_c8o_AppConstructor*/
		/*End_c8o_AppConstructor*/
		   
        platform.ready().then(() => {
            statusBar.styleDefault();
            /**
             * Then we finalize initialization
             */
            this.c8o.finalizeInit().then(()=>{
                this.resetImageCache();
                
                /*Begin_c8o_AppInitialization*/
                let indexPWA = window.location.pathname.indexOf("pwas");
                let indexMobile = window.location.pathname.indexOf("mobile");
                // if we started in standalone pwa mode
                if(indexPWA != -1 && indexMobile == -1){
                    this.global.pwa = true;
                    let indexHtml = window.location.pathname.indexOf("index.html");
                    let standalonePwa = window.location.pathname.substring(indexPWA + 5, indexHtml -1)
                  // get url base
                  const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
                  this.c8o.httpPublic.get(baseUrl + "/manifest.json")
                    .subscribe(
                      response => {
                          if(response["theme_color"] != undefined){
                              statusBar.backgroundColorByHexString(response["theme_color"]);
                          }
                          else{
                              statusBar.backgroundColorByHexString("#0cbbe7");
                          }
                          
                      },
                      error=>{
                          statusBar.backgroundColorByHexString("#0cbbe7");
                      })
                }
                else{
                    statusBar.backgroundColorByHexString("#0cbbe7");
                }
                window["mobileAndTabletCheck"] = function() {
                    let check = false;
                    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window["opera"]);
                    return check;
                  };

                window["__c8o__translate"] = this.translate;
                
                c8o.logC8o = true; //dz,dnz
                /* Uncomment the following lines to enable the i18n feature.
                 * You should add a json per language in the assets/i18n folder. */
               /* this.translate.use('es');
                this.translate.use('it');
                this.translate.use('fr');*/
                
                let localLang = window.localStorage.getItem("lang");
                if(localLang !=  undefined && localLang != "undefined"){
                    this.translate.setDefaultLang(localLang);
                    this.translate.use(localLang);
                }
                else{
                    try {
                       
                        let navLang = navigator.language;
                        if(navLang.indexOf("fr") == 0){
                            localLang = "fr";
                            this.translate.setDefaultLang('fr');  
                        }
                        else if(navLang.indexOf("en") == 0){
                            localLang = "en";
                            this.translate.setDefaultLang('en');  
                        }
                        else if(navLang.indexOf("es") == 0){
                            localLang = "es";
                            this.translate.setDefaultLang('es');  
                        }
                        else{
                            localLang = "en";
                            this.translate.setDefaultLang('en'); 
                        }
                        
                    }
                    catch(e){
                        localLang = "en";
                        this.translate.setDefaultLang('en'); 
                    }
                   this.global["__secretL"] = localLang;
                    
                }
                this.global["platform"] = {};
                this.global["platform"]["width"] = platform.width();
                this.global["platform"]["info"] = platform.platforms();
                this.global["platform"]["name"] = [""]
                this.global.platform.name = {};
                if(platform.platforms()[0] == "android" || platform.platforms()[0] == "cordova" || platform.platforms()[0] == "mobile" || platform.platforms()[0] == "ios" ){
                    this.global["platform"]["name"][0] =  "mobile";
                    this.global["mobilePlat"] = true;
                }
                
                //this.global["platform"]["name"][0] =  "web";
                platform.resize.subscribe((ev) => {
                    this.global["platform"]["width"] = window.innerWidth;
                    this.global["platform"]["info"] = platform.platforms();
                   // this.global["platform"]["name"] = [""]
                    if(platform.platforms()[0] == "android" || platform.platforms()[0] == "cordova" || platform.platforms()[0] == "mobile" || platform.platforms()[0] == "ios" ){
                        this.global["platform"]["name"][0] =  "mobile";
                        this.global["mobilePlat"] = true;
                    }
                    this.tick();
                  });
                /* Uncomment the following lines to enable the custom status bar color. */
                // statusBar.overlaysWebView(false);
                // statusBar.backgroundColorByHexString("#000000");
                // statusBar.styleBlackOpaque();
                
                /* Uncomment the following lines to enable the Service Worker Update. */
                let updates = this.getInstance(SwUpdate);
                let alertCtrl = this.getInstance(AlertController);
                let fu = ()=>{
                   this.c8o.log._debug("[SW] checking for updates each 60000 ms")
                   updates.checkForUpdate()
                  .then((res)=>{
                      this.c8o.log._debug("[SW] updates checked")
                  })
                  .catch((e)=>{
                      this.c8o.log._error("[SW] updates error")
                      console.log(JSON.stringify(e));
                  });
                }
                fu()
                setInterval(fu, 60000)
                
                updates.available.subscribe(event => {
                   this.c8o.log._debug("[SW] update available");
                   this.c8o.log._debug('new version is '+ event.current);
                   const prompt = alertCtrl.create({
                      title: this.translate.instant("convertigo_update_service"),
                      message: this.translate.instant("new_version_available"),
                      buttons: [
                      {
                         text: this.translate.instant("Restart_app"),
                         handler: data => {
                             this.c8o.log._debug("update available we will reload app");
                             updates.activateUpdate().then(() => document.location.reload());
                         }
                      }
                     ]
                   });
                   prompt.present();
                });
			/*End_c8o_AppInitialization*/
            });

        });

    }
    
    instance() {
        return this;
    }
    
	getRootNav() {
		let rootNavs = this.app.getRootNavs();
		return rootNavs.length > 0 ? rootNavs[0]:null;
	}
	
    openPage(page) {
		let rootNav = this.getRootNav();
		if (rootNav) {
			rootNav.setRoot(page.name);
		}
    }
	
    openPageWithName(name) {
		let rootNav = this.getRootNav();
		if (rootNav) {
			rootNav.setRoot(name);
		}
    }
    
    getPagesIncludedInAutoMenu(){
        let arrayIncluded: Array<any> = [];
        for (let p of this.pages){
            if (p["includedInAutoMenu"]) {
                arrayIncluded.push(p);
            }
        }
        return arrayIncluded;
    }
    
	/*Begin_c8o_AppFunction*/
	/*End_c8o_AppFunction*/
    
    

	/**
	 * Function ATS1573639773110
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1573639773110(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1573639773110: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1573639773110: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1573639773110: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1573639773110: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction1"] = stack["1573639773110"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction1', actionFunction: 'CTS1573639773110'}, vars:{}};
		return this.CTS1573639773110(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["RootPage"] = stack["1573639773119"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: parent.out}`), page: get('page', `'C8Oforms.MobileApplication.Application.editorPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1573639773110 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1573639773110: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1573639773110: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CustomAction1
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573639773110(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573639773110*/
		 resolve(this.nav._views[0].getNavParams().data.formId);
		
		/*End_c8o_function:CTS1573639773110*/
		});
	}


	/**
	 * Function ATS1573640264523
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1573640264523(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1573640264523: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1573640264523: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1573640264523: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1573640264523: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction1"] = stack["1573640264523"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction1', actionFunction: 'CTS1573640264523'}, vars:{}};
		return this.CTS1573640264523(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["RootPage"] = stack["1573640264526"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: parent.out}`), page: get('page', `'C8Oforms.MobileApplication.Application.viewerPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1573640264523 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1573640264523: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1573640264523: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CustomAction1
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573640264523(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573640264523*/
		 resolve(this.nav._views[0].getNavParams().data.formId);
		
		/*End_c8o_function:CTS1573640264523*/
		});
	}


	/**
	 * Function ATS1572448634081
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572448634081(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572448634081: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572448634081: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572448634081: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572448634081: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallSequence"] = stack["1572448634081"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.Logout'`), timeout: null, noAutoLogin: get('noAutoLogin', `true`)}, vars:{}};
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
		let self: any = stack["RootPage"] = stack["1572448634087"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.loginPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572448634081: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572448634081: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1573640687188
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1573640687188(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1573640687188: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1573640687188: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1573640687188: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1573640687188: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction1"] = stack["1573640687188"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction1', actionFunction: 'CTS1573640687188'}, vars:{}};
		return this.CTS1573640687188(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["RootPage"] = stack["1573640687191"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: parent.out}`), page: get('page', `'C8Oforms.MobileApplication.Application.viewerPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1573640687188 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1573640687188: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1573640687188: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CustomAction1
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573640687188(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573640687188*/
		 resolve(this.nav._views[0].getNavParams().data.formId);
		
		/*End_c8o_function:CTS1573640687188*/
		});
	}


	/**
	 * Function ATS1604485779699
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1604485779699(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1604485779699: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1604485779699: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1604485779699: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1604485779699: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallSequence"] = stack["1604485779699"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.Logout'`), timeout: null, noAutoLogin: get('noAutoLogin', `true`)}, vars:{}};
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
		let self: any = stack["RootPage"] = stack["1604485779702"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.loginPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1604485779699: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1604485779699: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1572449137246
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572449137246(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572449137246: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572449137246: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572449137246: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572449137246: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallSequence"] = stack["1572449137246"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.Logout'`), timeout: null, noAutoLogin: get('noAutoLogin', `true`)}, vars:{}};
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
		let self: any = stack["RootPage"] = stack["1572449137252"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.loginPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572449137246: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572449137246: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1572449144508
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572449144508(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572449144508: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572449144508: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572449144508: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572449144508: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallSequence"] = stack["1572449144508"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.Logout'`), timeout: null, noAutoLogin: get('noAutoLogin', `true`)}, vars:{}};
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
		let self: any = stack["RootPage"] = stack["1572449144514"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.loginPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572449144508: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572449144508: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1572449149445
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572449149445(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572449149445: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572449149445: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572449149445: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572449149445: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallSequence"] = stack["1572449149445"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.Logout'`), timeout: null, noAutoLogin: get('noAutoLogin', `true`)}, vars:{__disableAutologin: get('__disableAutologin', `true`)}};
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
		let self: any = stack["RootPage"] = stack["1572449149451"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.loginPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572449149445: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572449149445: ended"); resolveP(res)});
		});
	}ngOnDestroy() {
		this.events.unsubscribe('anyInitalSyncFinished');
		this.c8o.handleSessionLost().unsubscribe();
		super.ngOnDestroy();
	}
	

	/**
	 * Function ETS1601368537502
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1601368537502(data) {
		this.c8o.log.debug("[MB] ETS1601368537502: 'anyInitalSyncFinished' received");
		this.ATS1601368580350({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1601368580350
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1601368580350(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1601368580350: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1601368580350: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1601368580350: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1601368580350: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["GetData"] = stack["1601368580350"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `true`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `'C8Oreserved_' +c8oPage.c8o.session.user.name`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1601368670890"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'settings'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1601368580350: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1601368580350: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ETS1587480742427
	 *   
	 * 
	 * @param data , the event data
	 */
	ETS1587480742427(data) {
		this.c8o.log.debug("[MB] ETS1587480742427: 'onSessionLost' received");
		this.ATS1587480764144({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1587480764144
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587480764144(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587480764144: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587480764144: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587480764144: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587480764144: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1587480764144"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.loginPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587480764144: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587480764144: ended"); resolveP(res)});
		});
	}
}