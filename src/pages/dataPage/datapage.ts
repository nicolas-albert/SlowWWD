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
import { C8oFullSyncChangeListener } from 'c8osdkangular';
import { C8oSessionStatus } from 'c8osdkangular';


/*Begin_c8o_PageImport*/
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'datapage/:formId/:version', defaultHistory: []})
@Component({selector: 'page-datapage', templateUrl: 'datapage.html', changeDetection: ChangeDetectionStrategy.Default})
export class dataPage extends C8oPage  {
	

	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "dataPage";
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
	public processResults(){
	    let length = this.local.index.length;
        let currentIndex = this.local.currentIndex;
        this.local.flatObj = [];
        this.local.show = [];
        this.local.currentResponses = this.local.versions[this.local.index[this.local.currentIndex]];
        let i  = 0;
        this.local.table = [];
        const iterrateOverChildrens = (firstElem: any, j: number, pathToSearch: string) => {
            for(let elem in firstElem[pathToSearch]){
                if(firstElem[pathToSearch][elem].type == "text" || firstElem[pathToSearch][elem].type == "datetime" || firstElem[pathToSearch][elem].type == "time" || firstElem[pathToSearch][elem].type == "barcode" || firstElem[pathToSearch][elem].type == "signature" || firstElem[pathToSearch][elem].type == "img" || firstElem[pathToSearch][elem].type == "file"){
                    if(i == 0){
                        this.local.flatObj[j] = {"label":firstElem[pathToSearch][elem].label,"labelHtml": firstElem[pathToSearch][elem].labelHtml, "type":firstElem[pathToSearch][elem].type, value: [], "name": firstElem[pathToSearch][elem]["name"]};
                        this.local.show[firstElem[pathToSearch][elem]["name"]] = false;
                        
                        }
                        if(firstElem[pathToSearch][elem].value != ""){
                            if(firstElem[pathToSearch][elem].type == "file"){
                                let e = firstElem[pathToSearch][elem];
                                let first = true;
                                if(firstElem[pathToSearch][elem]["value"] instanceof Array){
                                    for(let thing of firstElem[pathToSearch][elem]["value"]){​​​​​​​​​​​​​​​​​​​​​​​​​​​
                                        let url = this.c8o.endpointConvertigo+"/fullsync/c8oforms_response_fs/" + firstElem["_id"] + "/" + thing
                                        console.log("thing: ",thing);
                                        let file_name = thing.split("_C80C80_")[1];
                                       
                                        if(first){                                                
                                            e["value"] =  '<ul> <li><a download="'+file_name+'" href="'+url+'" target="_blank">'+file_name+'</a> </li>';
                                            first = false;
                                        }
                                        else{
                                            e["value"] = e["value"]  + '<li><a download="'+file_name+'" href="'+url+'" target="_blank">'+file_name+'</a></li>';
                                        }
                                        
                                    }
                                    if(e["value"] != undefined && e["value"] != ""){
                                        e["value"] = e["value"]  + "</ul>"
                                    }
                                }
                                this.local.flatObj[j]["value"]["push"](e);
                            }
                            else{
                                this.local.flatObj[j]["value"]["push"](firstElem[pathToSearch][elem]);    
                            }
                        }    
                    }
                else if(firstElem[pathToSearch][elem].type == "checkbox" || firstElem[pathToSearch][elem].type == "radio" || firstElem[pathToSearch][elem].type == "select"){
                    if(i == 0){
                        this.local.flatObj[j] = {"label":firstElem[pathToSearch][elem].label, "labelHtml": firstElem[pathToSearch][elem].labelHtml, "type":firstElem[pathToSearch][elem].type, value: [], sets:[], "name": firstElem[pathToSearch][elem]["name"]};   
                    }
                    for(let k in firstElem[pathToSearch][elem]["children"]){
                        if(i == 0){
                            if(this.local.flatObj[j]["value"][k] == undefined){
                                this.local.flatObj[j]["value"][k] = 0;    
                            }
                            if(firstElem[pathToSearch][elem]["children"][k].other == true){
                                this.local.flatObj[j]["sets"][k] = this.translate.instant('Other')
                            }
                            else{
                                this.local.flatObj[j]["sets"][k] = firstElem[pathToSearch][elem]["children"][k]["value"].length > 12 ? firstElem[pathToSearch][elem]["children"][k]["value"].substring(0, 12) + "..." : firstElem[pathToSearch][elem]["children"][k]["value"];
                            }
                             
                        }
                        if(firstElem[pathToSearch][elem]["children"][k]["selected"] == true){
                            this.local.flatObj[j]["value"][k] ++
                        } 
                    }
                }
                else if(firstElem[pathToSearch][elem].type == "checkbox_group"){
                    if(i == 0){
                        this.local.flatObj[j] = {"label":firstElem[pathToSearch][elem].label, "labelHtml": firstElem[pathToSearch][elem].labelHtml, "type":firstElem[pathToSearch][elem].type, value: [], sets:[], "name": firstElem[pathToSearch][elem]["name"], color:[]};   
                    }
                    let m = 0;
                    for(let k in firstElem[pathToSearch][elem]["children"]){
                        //k == Line1 ... etc
                        if(this.local.flatObj[j]["sets"][m] == undefined){
                            this.local.flatObj[j]["color"] = [{backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)']},{backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)']},{backgroundColor: ['rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)']},{backgroundColor: ['rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)']},{backgroundColor: ['rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)']},{backgroundColor: ['rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)']},{backgroundColor: ['rgba(255,99,132,1)']},{backgroundColor: ['rgba(54, 162, 235, 1)']},{backgroundColor: ['rgba(255, 206, 86, 1)']},{backgroundColor: ['rgba(75, 192, 192, 1)']},{backgroundColor: ['rgba(153, 102, 255, 1)']},{backgroundColor: ['rgba(255, 159, 64, 1)']}];
                        }
                        this.local.flatObj[j]["sets"][m] = k.length > 12 ? k.substring (0, 12) + "..." : k;
                        for(let l in firstElem[pathToSearch][elem]["children"][k]){
                            if(this.local.flatObj[j]["value"][+l] == undefined){
                                this.local.flatObj[j]["value"][+l] = [];
                            }
                            if(this.local.flatObj[j]["value"][+l]["label"] == undefined){
                                this.local.flatObj[j]["value"][+l]["label"] = firstElem[pathToSearch][elem]["children"][k][l]["value"].length > 12 ? firstElem[pathToSearch][elem]["children"][k][l]["value"].substring(0,12) + "..." : firstElem[pathToSearch][elem]["children"][k][l]["value"];
                            }
                            if(this.local.flatObj[j]["value"][+l]["data"] == undefined){
                                this.local.flatObj[j]["value"][+l]["data"] = []; 
                            }
                            if(this.local.flatObj[j]["value"][+l]["data"][m] == undefined){
                                this.local.flatObj[j]["value"][+l]["data"][m] = 0;
                            }
                            if(firstElem[pathToSearch][elem]["children"][k][l]["selected"] == true){
                                this.local.flatObj[j]["value"][+l]["data"][m] ++;    
                            }
                        }
                        m++;
                    }
                }
                else if(firstElem[pathToSearch][elem].type == "radio_group"){
                    if(i == 0){
                        this.local.flatObj[j] = {"label":firstElem[pathToSearch][elem].label, "labelHtml": firstElem[pathToSearch][elem].labelHtml, "type":firstElem[pathToSearch][elem].type, value: [], sets:[], "name": firstElem[pathToSearch][elem]["name"], color:[]};   
                    }
                    let m = 0;
                    for(let k in firstElem[pathToSearch][elem]["children"]){
                        //k == Line1 ... etc
                        if(this.local.flatObj[j]["sets"][m] == undefined){
                            this.local.flatObj[j]["color"] = [{backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)']},{backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)','rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)']},{backgroundColor: ['rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)','rgba(255, 206, 86, 1)']},{backgroundColor: ['rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)','rgba(75, 192, 192, 1)']},{backgroundColor: ['rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)','rgba(153, 102, 255, 1)']},{backgroundColor: ['rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)','rgba(255, 159, 64, 1)']},{backgroundColor: ['rgba(255,99,132,1)']},{backgroundColor: ['rgba(54, 162, 235, 1)']},{backgroundColor: ['rgba(255, 206, 86, 1)']},{backgroundColor: ['rgba(75, 192, 192, 1)']},{backgroundColor: ['rgba(153, 102, 255, 1)']},{backgroundColor: ['rgba(255, 159, 64, 1)']}];
                        }
                        this.local.flatObj[j]["sets"][m] = k.substring(0, 12) + "...";
                        for(let l in firstElem[pathToSearch][elem]["children_label"]){
                            /*
                            "children": {
                                "Line 1": "Option 1",
                                "Line 2": "Option 2",
                                "Line 3": "Option 1"
                              },
                              "children_label": [
                                {
                                  "value": "Option 1"
                                },
                                {
                                  "value": "Option 2"
                                }
                              ]
                            */
                            if(this.local.flatObj[j]["value"][+l] == undefined){
                                this.local.flatObj[j]["value"][+l] = [];
                            }
                            if(this.local.flatObj[j]["value"][+l]["label"] == undefined){
                                this.local.flatObj[j]["value"][+l]["label"] = firstElem[pathToSearch][elem]["children_label"][+l]["value"].length > 12 ? firstElem[pathToSearch][elem]["children_label"][+l]["value"].substring(0, 12) + "..." : firstElem[pathToSearch][elem]["children_label"][+l]["value"];
                            }
                            if(this.local.flatObj[j]["value"][+l]["data"] == undefined){
                                this.local.flatObj[j]["value"][+l]["data"] = []; 
                            }
                            if(this.local.flatObj[j]["value"][+l]["data"][m] == undefined){
                                this.local.flatObj[j]["value"][+l]["data"][m] = 0;
                            }
                            if(firstElem[pathToSearch][elem]["children_label"][l].value == firstElem[pathToSearch][elem]["children"][k]){
                                this.local.flatObj[j]["value"][+l]["data"][m] ++;    
                            }   
                        }
                        m++;
                    }
                }
                else if(firstElem[pathToSearch][elem].type == "slider"){
                    if(i == 0){
                        this.local.flatObj[j] = {"label":firstElem[pathToSearch][elem].label, "labelHtml": firstElem[pathToSearch][elem].labelHtml, "type":firstElem[pathToSearch][elem].type, value: [], sets:[], "name": firstElem[pathToSearch][elem]["name"]};   
                    }
                    // val == firstElem[pathToSearch][elem]["value"]
                    if(firstElem[pathToSearch][elem]["value"] !== "" ){
                        if(this.local.table == undefined){
                            this.local.table = [];    
                        }
                        if(this.local.table[j] == undefined){
                            this.local.table[j] = {};    
                        }
                        if(this.local.table[j][firstElem[pathToSearch][elem]["value"]] == undefined){
                            this.local.table[j][firstElem[pathToSearch][elem]["value"]] = this.local.flatObj[j]["value"].push({data:[1], label:firstElem[pathToSearch][elem]["value"]}) -1;
                        }
                        else{
                            let index = this.local.table[j][firstElem[pathToSearch][elem]["value"]];
                            let count = this.local.flatObj[j]["value"][index]["data"][0];
                            this.local.flatObj[j]["value"][index]["data"] = [count +1];   //
                        }
                    }
                }
                else if(firstElem[pathToSearch][elem].type == "ion-card"){
                    j = iterrateOverChildrens(firstElem[pathToSearch][elem], j, "children");
                }
                j++;
            }
            return j;
        };
        let flatenize = (Obj: any) => {
            
            for(let firstElem of Obj){
                this.local.countResponses = Obj.length;
                let j = 0;
                iterrateOverChildrens(firstElem, j, "resp")
                i++;
            }
        };
        if(this.local.currentResponses != undefined){
            flatenize(this.local.currentResponses);
            this.local.noresponse = false;
            this.tick();
        }
        else{
            this.local.noresponse = true;
        }
	}
	/*End_c8o_PageFunction*/
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1586424841956({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1580226984294({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1580226984303({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1580149618534({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1593771018486
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1593771018486(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1593771018486: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1593771018486: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1593771018486: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1593771018486: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["showAlertConfirmation"] = stack["1593771018486"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'showAlertConfirmation', actionFunction: 'AlertAction', css1: get('css1', `'yesnobt'`), css2: get('css2', `'yesnobt'`), button2: get('button2', `c8oPage.translate.instant('oui')`), button3: null, value2: get('value2', `'1'`), value1: get('value1', `'0'`), value3: null, title: get('title', `c8oPage.translate.instant('Supprimer')`), message: get('message', `''`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), cancel3: null, cancel2: null, subTitle: get('subTitle', `c8oPage.translate.instant('delete_for_version') + ' ?'`), cssClass: get('cssClass', `'alertCustom c8o-alert-create-form'`), cancel1: get('cancel1', `'cancel'`), button1: get('button1', `c8oPage.translate.instant('non')`), css3: null}, vars:{}};
		return this.actionBeans.AlertAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["IfConfirmed"] = stack["1593771018489"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfConfirmed', actionFunction: 'IfAction', condition: get('condition', `parent.out == 1`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["CustomAction"] = stack["1593771177871"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1593771177871'}, vars:{}};
		return this.CTS1593771177871(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1593771177871 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] AlertAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1593771018486: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1593771018486: ended"); resolveP(res)});
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
	CTS1593771177871(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1593771177871*/
		for(let elem of this.local.versions[this.local.index[this.local.currentIndex]]){
		    
		    this.c8o.callJson("fs://c8oforms_response_fs.delete", "docid", elem._id)
		    .then((res)=>{
	              console.log("res");
	                console.log(res);
		        return null;
		    })
		    .fail((err)=>{
		        console.log("err");
		        console.log(err);
		    })
		}
		    resolve();
		/*End_c8o_function:CTS1593771177871*/
		});
	}


	/**
	 * Function moveBackward
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1580305791430(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580305791430*/
		let length = page.local.index.length;
		let currentIndex = page.local.currentIndex;
		if(currentIndex == 0){
		    //then we can't move backward
		}
		else{
		    page.local.currentIndex = page.local.currentIndex - 1;
		    this.processResults();
		}
		resolve();
		/*End_c8o_function:CTS1580305791430*/
		});
	}


	/**
	 * Function moveForward
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1580306549141(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580306549141*/
		let last = page.local.index.length -1;
		let currentIndex = page.local.currentIndex;
		if(currentIndex == last){
		    //then we can't move forward
		}
		else{
		    page.local.currentIndex = page.local.currentIndex + 1;
		    this.processResults();
		}
		resolve();
		/*End_c8o_function:CTS1580306549141*/
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
	CTS1580319336558(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580319336558*/
		this.local.show[vars.name] = true;
		this.tick();
		resolve();
		/*End_c8o_function:CTS1580319336558*/
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
	CTS1580319471805(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580319471805*/
		this.local.show[vars.name] = false;
		this.tick();
		resolve();
		/*End_c8o_function:CTS1580319471805*/
		});
	}


	/**
	 * Function ATS1586424841956
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586424841956(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586424841956: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586424841956: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586424841956: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586424841956: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424841956"] = {};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424830437"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586424841956: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586424841956: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1580226984294
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1580226984294(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1580226984294: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1580226984294: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1580226984294: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1580226984294: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SyncDataResponses"] = stack["1580226984294"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SyncDataResponses', actionFunction: 'FullSyncSyncAction', BatchSize: get('BatchSize', `100`), Mode: get('Mode', `'continuous'`), requestable: get('requestable', `'C8Oforms.c8oforms_response_fs'`), Retry: get('Retry', `'true'`), BatchesLimit: get('BatchesLimit', `10`), Direction: get('Direction', `'bi-directional'`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["sync"] = stack["1580301887001"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'sync', actionFunction: 'CTS1580301887001'}, vars:{}};
		return this.CTS1580301887001(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424833202"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1580301887001 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncSyncAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424830437"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1580226984294: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1580226984294: ended"); resolveP(res)});
		});
	}

	/**
	 * Function sync
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1580301887001(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580301887001*/
		    
		    page.local.versions = {};
		    page.local.index = [];
		    page.local.currentIndex = 0;
		    let parameters = {
		            "ddoc":"Design_document",
		            "view":"getResponseByVersion",
		            "__live": "dataPageView",
		            "startkey":  page.local.formId,
		            "endkey":  page.local.formId + "\ufff0",
		            "group": true
		            };
		    
		    
		    page.c8o.callJsonObject("fs://c8oforms_response_fs.view", parameters)
		    .then((response: any, params)=>{
		        page.local.versions = {};
		        page.local.index = [];
	            page.local.currentIndex = 0;
		        let count = -1;
		        for (let elem of response["rows"]){
		            let version_number = elem.key.substring(elem.key.length -1);
		            version_number == "t"? "test": version_number;
		            page.local.versions[version_number] = elem.value;
		            page.local.index.push(version_number);
		            count ++;
		        }
		        this.local.currentIndex = count;
		        this.local.flatObj
		        this.processResults();
		        resolve();
		        return null;
		    })
		    .fail((error)=>{
		        page.c8o.log.error("Error: dataPage => sync",error);
		    })
		    let params = {"docid": this.local.formId};
		    page.c8o.callJsonObject("fs://c8oforms_fs.get", params)
		    .then((resp:any, parameters:any)=>{
		        this.local.formName = resp.name;
		        return null;
		    })
		    .fail((error)=>{
		        page.c8o.log.error("Error: dataPage => sync",error);
		    })
		    
		/*End_c8o_function:CTS1580301887001*/
		});
	}


	/**
	 * Function ATS1580226984303
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1580226984303(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1580226984303: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1580226984303: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1580226984303: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1580226984303: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SyncData"] = stack["1580226984303"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SyncData', actionFunction: 'FullSyncSyncAction', BatchSize: get('BatchSize', `100`), Mode: get('Mode', `'continuous'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), Retry: get('Retry', `'true'`), BatchesLimit: get('BatchesLimit', `10`), Direction: get('Direction', `'bi-directional'`)}, vars:{}};
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
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncSyncAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424830437"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1580226984303: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1580226984303: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1580149618534
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1580149618534(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1580149618534: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1580149618534: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1580149618534: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1580149618534: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser1"] = stack["1580149618534"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser1', actionFunction: 'CTS1580149618534'}, vars:{}};
		return this.CTS1580149618534(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1580149618534 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1580149618534: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1580149618534: ended"); resolveP(res)});
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
	CTS1580149618534(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1580149618534*/
		    this.local.offset = new Date().getTimezoneOffset() * 60000 * -1;
		    if(page.c8o.session.status == C8oSessionStatus.Connected || page.c8o.session.status == C8oSessionStatus.HasBeenConnected){
                resolve(true);
            }
		    const request = window["indexedDB"]["open"]("MyTestDatabase", 3);
            request.onerror = (event)=> {
                resolve(false);
                setTimeout(()=>{
                    page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
                }, 200);
                return;
              };
              request.onsuccess = (event)=> {
		    page.local.formId = this.navParams.get('formId');
		    // Getting user status (whenever he is logged or not)
		    page.c8o.httpInterface.getUserServiceStatus()
		    .then((res)=>{
		        if(res.user.length == 64 || res.user.authenticated == false){
		            setTimeout(()=>{
	                    page.routerProvider.setRoot("loginPage", {page:'dataPage'}, null); 
	                }, 200);
                    resolve(false);
                }
                else{
                    page.local.user = res.user;
                    resolve(true);
                }
		    })
		    .catch((err)=>{
		        setTimeout(()=>{
		            page.routerProvider.setRoot("loginPage", {page:'historyPage'}, null); 
		        }, 200);
		        resolve(false);
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
		/*End_c8o_function:CTS1580149618534*/
		});
	}

}
