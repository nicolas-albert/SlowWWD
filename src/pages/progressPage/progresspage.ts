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

@IonicPage({priority: 'low', segment: 'path-to-progresspage', defaultHistory: []})
@Component({selector: 'page-progresspage', templateUrl: 'progresspage.html', changeDetection: ChangeDetectionStrategy.Default})
export class progressPage extends C8oPage  {
	

	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "progressPage";
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
	
	getProgress(){
	    if( this.global["totalcount"] == undefined || this.global['cptTotal'] == undefined){
	        return 0;
	    }
	    else{
	        return (Number(this.global['cptTotal'] / this.global["totalcount"] * 100));
	    }
        /*if(this.global["__viewerProgressDelete"] == undefined || this.global["viewerTotalDelAdd"] == undefined){
            return 0
        }
        else{
            //console.log(Number(this.global["__viewerProgress"]));
            //console.log(Number(this.global["__viewerTotal"]));
            return ((Number(this.global["__viewerProgressDelete"]) / Number(this.global["viewerTotalDelAdd"])) * 100);
        }
	    /*
	    if(this.global["__viewerProgress"] == undefined || this.global["__viewerTotal"] == undefined){
	        return 0
	    }
	    else{
	        //console.log(Number(this.global["__viewerProgress"]));
	        //console.log(Number(this.global["__viewerTotal"]));
	        return ((Number(this.global["__viewerProgress"]) / Number(this.global["__viewerTotal"])) * 100);
	    }*/

	}
	/*End_c8o_PageFunction*/
	
	
}
