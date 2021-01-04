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

@IonicPage({priority: 'low', segment: 'path-to-thumbnailselectiontemplates', defaultHistory: []})
@Component({selector: 'page-thumbnailselectiontemplates', templateUrl: 'thumbnailselectiontemplates.html', changeDetection: ChangeDetectionStrategy.Default})
export class ThumbnailSelectionTemplates extends C8oPage  {
	
	@ViewChildren("imgTpl") public all_imgTpl : QueryList<any>;
	@ViewChild("imgTpl") public imgTpl;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "ThumbnailSelectionTemplates";
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
	
	

	/**
	 * Function SaveProperties
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1594652578533(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1594652578533*/
		    if(this.global.transmit == undefined){
	            this.global.transmit = {};
	        }
		if(this.global.urls[event.realIndex] != undefined){
		    let url = this.global.urls[event.realIndex];
		    this.global.transmit = {url:url, realIndex: event.realIndex};
	        resolve();
		}
		else{
		    let url = this.global.urls[0];
		    this.global.transmit = {url:url, realIndex: event.realIndex};
            resolve();
		}
		/*End_c8o_function:CTS1594652578533*/
		});
	}

}
