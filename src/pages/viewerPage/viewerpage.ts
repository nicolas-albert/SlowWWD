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
import { C8oSessionStatus } from 'c8osdkangular';
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';


/*Begin_c8o_PageImport*/
//import { Observable, Subject} from 'rxjs';
//import 'rxjs/add/observable/zip';

//import { Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { of, zip } from 'rxjs';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/zip';
import { map } from 'rxjs/operators/map';


import { Input, EventEmitter, Output } from '@angular/core';

import 'rxjs/add/observable/zip';

//Used by conditional
interface ValFieldObject{
    str: string;
    source: boolean;
    type: string;
    arr: Array<any>;
}
interface FieldObject {
    type: string;
    subject: string;
    operator: string;
    val1: ValFieldObject;
    val2: ValFieldObject;

}
interface FormObject {
    type: string;
    subject: string;
    operator: string;
    attribute: string;

}

/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'viewer/:formId/:edit/:i', defaultHistory: []})
@Component({selector: 'page-viewerpage', templateUrl: 'viewerpage.html', changeDetection: ChangeDetectionStrategy.Default})
export class viewerPage extends C8oPage  {
	
	@ViewChildren("divtext") public all_divtext : QueryList<any>;
	@ViewChild("divtext") public divtext;

	@ViewChildren("ElseBlock_1601481898679") public all_ElseBlock_1601481898679 : QueryList<any>;
	@ViewChild("ElseBlock_1601481898679") public ElseBlock_1601481898679;





	@ViewChildren("ElseBlock_1599133070874") public all_ElseBlock_1599133070874 : QueryList<any>;
	@ViewChild("ElseBlock_1599133070874") public ElseBlock_1599133070874;

	@ViewChildren("ElseBlock_1599139847651") public all_ElseBlock_1599139847651 : QueryList<any>;
	@ViewChild("ElseBlock_1599139847651") public ElseBlock_1599139847651;

	@ViewChildren("ElseBlock_1599061441923") public all_ElseBlock_1599061441923 : QueryList<any>;
	@ViewChild("ElseBlock_1599061441923") public ElseBlock_1599061441923;

	@ViewChildren("select") public all_select : QueryList<any>;
	@ViewChild("select") public select;








	@ViewChildren("Else_block1588585373861") public all_Else_block1588585373861 : QueryList<any>;
	@ViewChild("Else_block1588585373861") public Else_block1588585373861;






















	@ViewChildren("ElseBlock_1592514238339") public all_ElseBlock_1592514238339 : QueryList<any>;
	@ViewChild("ElseBlock_1592514238339") public ElseBlock_1592514238339;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "viewerPage";
	/*Begin_c8o_PageDeclaration*/
    public formsList: Array<object> = [];
    public formsSubmit = {};
    public link;
    public enabled = false;
    public results = {};
    public form;
    public epoch: string;
    public allfield = "";
    private el: HTMLElement;
    public edit: boolean = false;
    public redList = [];
    public formSubmittedStr = "";
    public submitFormStr = "";
    public sendFormStr = ""
    public idFiles; 
    public cpt = 0;
    public cptDelete = 0;
    public loading;
    public creating;
    
    
    
    /*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		this.menuId = 'Menu';
		
		
		/*Begin_c8o_PageConstructor*/ 
        this.global['__viewindeok']= null;
        this.global["__viewerTotal"] = 0;
        this.global["__viewerarr"] = [];
        this.global['__C8O_TODELETE'] = [];
        this.cpt = 0;
        this.epoch = (new Date()).getTime() + "";
        translate.get('allfield').subscribe((res: string) => {
         this.allfield = res;
        });
        this.idFiles = "files_" + this.epoch;
        this.global[this.idFiles] = [];
        
        this.local.multipleField = {radio_group: true, checkbox_group: true, checkbox: true};
        this.local.simpleField = {date: true, select: true, datetime: true, time: true, radio: true, text: true, barcode: true, slider: true};
        this.local.fileField = {file: true};
        this.local.camSignField = {img: true, signature:true};
        this.global[this.global.id] = [];
        
        this.local.multipleFieldGoToPage = {radio_group: true, checkbox_group: true, checkbox: true, select: true, radio: true};
        this.local.simpleFieldGoToPage = {date: true, datetime: true, time: true, text: true, barcode: true, slider: true};
        this.local.fileFieldGoToPage = {file: true};
        this.local.camSignFieldGoToPage = {img: true, signature:true};
        /*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
    
    getWidthbyId(id){
        console.log(id);
        try{
            return {'width':'calc(98%-'+ document.getElementById(id).clientWidth+'px);'}
        }
        catch(e){
            return {}
        }
    }
    
    public codeIsADigit(code){
        //return /^[+-]?[0-9]\d*([\.,])?$ /g.test(code);
        return /(^[-?$[0-9]\d*([\.,]\d*)?$)/g.test(code);
    }
    getProgress(){
        if(this.global["__viewerProgress"] == undefined || this.global["__viewerTotal"] == undefined){
            return 0
        }
        else{
            //console.log(Number(this.global["__viewerProgress"]));
            //console.log(Number(this.global["__viewerTotal"]));
            return ((Number(this.global["__viewerProgress"]) / Number(this.global["__viewerTotal"])) * 100);
        }

    }
    getTranslate(msgTosearch :string): Promise<any>{
        return new Promise((resolve, reject)=>{
            let translate = this.getInstance(TranslateService)
            translate.get(msgTosearch).subscribe((res: string) => {
                resolve(res);
            });
        });        
    }
    showProgress(){
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
              <div>
                <progress-bar [progress]="'0'"></progress-bar>
                <p>abc</p>
              </div>`
          });
        this.loading.present();
    }
    
    flatArray(): any{
        let arr = [];
        let cpt = 0;
         for(let bean in this.global[this.idFiles]){
             for(let file of this.global[this.idFiles][bean]){
                 if(file.deleted === undefined){
                     arr.push({file: file, bean: bean});
                     cpt = cpt + 1;
                 }
             }
         }
         return [arr, cpt];
    }
    //
    //this.global['__viewerTotal'] > 0 || this.global["__C8O_TODELETE"] >0
    //delete_attachment
    deleteRecursive(arr: any, index: number, total: number, id:any):Promise<any>{
        return new Promise((resolve)=>{
            if(total == 0 || arr == undefined){
                resolve();
            }
            else{
                let args = {
                        "docid":id,
                        "name": arr[index]["path"],
                        "index": index
                }
                this.router.c8o.callJsonObject("fs://c8oforms_response_fs.delete_attachment",args)
                .then((resp, parameters)=>{
                    this.cptDelete = this.cptDelete+1;
                    this.global['cptTotal'] = this.global['cptTotal'] + 1;
                    this.global['__C8O_TODELETE'][index]['deleted'] = true;
                    //console.log("Progress delete: " +this.cptDelete+ " / "+ total);
                    //this.global["__viewerProgressDelete"] = this.global["__viewerProgressDelete"] + this.cptDelete;
                    //this.global['__C8O_TODELETE'][parameters['index']]["deleted"]= true;
                    if(this.cptDelete == total){
                        //console.log("finished deletions");
                        resolve();
                    }
                    else{
                        setTimeout(() => {
                            this.deleteRecursive(arr, index + 1, total, id)
                            .then(()=>{
                                resolve();
                            });
                        }, 100);
                       

                    }
                    return null;
                })
                .fail((err)=>{
                    //console.log(err);
                    //this.cpt = this.cptDelete+1;
                    //console.log("Progress delete: " +this.cptDelete+ " / "+ total);
                    this.global['cptTotal'] = this.global['cptTotal'] + 1;
                    if(this.cpt == total){
                        //console.log("finishedErrores deletions");
                        resolve();
                    }
                    else{
                        this.postRecursive(arr, index + 1, total, id)
                        .then(()=>{
                            resolve();
                        });
                    }
                });
            }
            
        });
    }
    postRecursive(arr: any, index: number, total: number, id: any = null) : Promise<any>{
        return new Promise((resolve)=>{
            if(total == 0 || arr == undefined){
                resolve();
            }
            else{
                let ids = id != null ? id: this.local.user+'_'+this.local.edit+'_'+this.epoch;
                let args;
                if(window['cordova'] == undefined){
                    let type = (arr[index]["file"].type == undefined || arr[index]["file"].type == "") ? "application/octet-stream":arr[index]["file"].type;
                    let file: Blob = arr[index]["file"];
                    args = {
                            "docid":ids,
                            "name": arr[index]["bean"] + "_C80C80_" +arr[index]["file"]["name"]+"_C80C80_"+(new Date).getTime(),
                            "content_type": type,
                            "content":file,
                            "index":index
                    }
                }
                else{
                    let type = (arr[index]["file"].mediaType == undefined || arr[index]["file"].mediaType == "") ? "application/octet-stream":arr[index]["file"].mediaType;
                    args = {
                            "docid":ids,
                            "name": arr[index]["bean"] + "_C80C80_" +arr[index]["file"]["name"]+"_C80C80_"+(new Date).getTime(),
                            "content_type": type,
                            "content": new Blob(arr[index]["file"].data, {type: type}),
                            "index":index
                    }
                }
                
                this.router.c8o.callJsonObject("fs://c8oforms_response_fs.put_attachment",args)
                    .then((resp, parameters)=>{
                        this.cpt = this.cpt+1;
                        //console.log("Progress: " +this.cpt+ " / "+ total);
                        this.global['cptTotal'] = this.global['cptTotal'] + 1;
                        this.global["__viewerProgress"] = this.cpt;
                        this.global["__viewerProgressDelete"] = this.global["__viewerProgressDelete"] +this.cpt;
                        this.global['__viewerarr'][parameters['index']].file["ok"]= true;
                        this.global['__viewindeok'][index]= true;
                        if(this.cpt == total){
                            console.log("finished");
                            resolve();
                        }
                        else{
                            this.postRecursive(arr, index + 1, total, ids)
                            .then(()=>{
                                resolve();
                            });

                        }
                        return null;
                    })
                    .fail((err)=>{
                        //console.log(err);
                        this.cpt = this.cpt+1;
                        //console.log("Progress: " +this.cpt+ " / "+ total);
                        if(this.cpt == total){
                            console.log("finishedErrores");
                            resolve();
                        }
                        else{
                            this.postRecursive(arr, index + 1, total, ids)
                            .then(()=>{
                                resolve();
                            });
                        }
                    });
            }
            
        });
        
        
    }
    
    unsetred(name:string){
        this.redList[name] = false;
        this.tick();         
    }
    
    setRedSpecs(obj:any, first: any){
        for(let item of obj){
            let find;
            if(item.nativeElement.id.indexOf("_C8o#") != -1){
                find = this.redList[item.nativeElement.id.substring(0,item.nativeElement.id.indexOf("_C8o#"))][item.nativeElement.id.substring(item.nativeElement.id.indexOf("_C8o#")+5)];
            }
            else{
                find = this.redList[item.nativeElement.id];
            }
            if(find){
                item.nativeElement.classList.remove("animated");
                item.nativeElement.classList.remove("shake");
                if(!first){
                    item.nativeElement.scrollIntoView({block: "center", inline: "nearest", behavior:"smooth"});   
                    first = true;
                }
                setTimeout(() => {
                    item.nativeElement.classList.add("animated");
                    item.nativeElement.classList.add("shake");
                    
                }, 50);
            }
            
        }
    }
    
    
    
    /**
     * Browse into conditions to generate Javascript expressions for visibility
     * @param conditions (condition Object define in Fullsync doc)
     */
    public evaluateConditions(conditions, bool= null): string{
        let jsString: string = "";
        for(let conds of Object.keys(conditions)){
            switch(conds){
                case "visibleIf":
                    jsString += this.detectSubjectAndComplete(conditions[conds]["conds"], conditions[conds]["condVisible"]);
                break;
                case "goToPageIf":
                    if(bool){
                        let abc = this.detectSubjectAndComplete(conditions[conds]["conds"], conditions[conds]["cond"], true);
                    }
                    
                break;
            }
        }
        return jsString;
        
    }
    
    /**
     * Browse into conditions to generate Javascript expressions for navigation
     * @param conditions (condition Object define in Fullsync doc)
     */
    public evaluateConditionsNavigation(conditions, bool= null){
        let jsString: string = "";
        for(let conds of Object.keys(conditions)){
            switch(conds){
                case "goToPageIf":
                    if(bool){
                        let abc = this.detectSubjectAndComplete(conditions[conds]["conds"], conditions[conds]["cond"], true);
                    }
                    
                break;
            }
        }
       if(eval(jsString) == true){
           
       }
        
    }
    
    /**
     * Compute navigation conditions detecting type of conditions
     * @param conds Array<any> -- array of conditions 
     * @param operatorStr string -- string operator
     * @param line 
     * @param child
     */
    private detectTypeAndComplete(conds: Array<any>, item = null){
        // Iterating over conditions
        for(let cond of conds){
            if(cond.val1.type == "radio_group" || cond.val1.type == "checkbox_group" || cond.val1.type == "radio" || cond.val1.type == "checkbox" || cond.val1.type == "select"){
                if(cond.val2.vals != undefined){
                    if(cond.val1.type == "radio_group" || cond.val1.type == "checkbox_group"){
                        try {
                            let indexes = this.getElementByNameIntoFormSubmit(item.name);
                            for(let lin of item.lines){
                                let cpt = 0;
                                for(let child of item.children){
                                    try {
                                        // Get page to go
                                        let action = (cond.val2.vals[lin.id].filter((x=>{return x.value == child.id })))[0].action;
                                        // If there is a defined page to go
                                        if(action != "" ||action != undefined){
                                            // get Index of page to go
                                            let indexToGo = this.findIndexOfPageByPageTechName(action);
                                            // Create enabled object if does not exist yet
                                            if(this.local.pages[indexToGo].enabled == undefined || typeof(this.local.pages[indexToGo].enabled) == "boolean"){
                                                this.local.pages[indexToGo].enabled = {};
                                            }
                                            // update value of accesible page
                                            let selected;
                                            if(item.type == "radio_group"){
                                                selected = indexes.length > 1 ? this.formsSubmit[indexes[0]].children[indexes[1]].children[lin.title] == child.value : this.formsSubmit[indexes[0]].children[lin.title] == child.value
                                            }
                                            else{
                                                selected = indexes.length > 1 ? this.formsSubmit[indexes[0]].children[indexes[1]].children[lin.title][cpt].selected : this.formsSubmit[indexes[0]].children[lin.title][cpt].selected; 
                                            }
                                            this.local.pages[indexToGo].enabled[lin.id+"_" +child.id] = selected;
                                        }
                                    }
                                    catch(e){}
                                    cpt++;        
                                }
                            }
                        }
                        catch(e){}
                    }
                    // If cond.val1.type == "radio" || "checkbox"
                    else{
                        try{     
                            let cpt = 0;
                            let indexes = this.getElementByNameIntoFormSubmit(item.name);
                            // Foreach element of current item
                            for(let elem of item.children){
                                    // Get page to go
                                    let action = cond.val2.vals[elem.id];
                                    // If there is a defined page to go
                                    if(action != "" ||action != undefined){
                                        // get Index of page to go
                                        let indexToGo = this.findIndexOfPageByPageTechName(action);
                                        // Create enabled object if does not exist yet
                                        if(this.local.pages[indexToGo].enabled == undefined || typeof(this.local.pages[indexToGo].enabled) == "boolean"){
                                            this.local.pages[indexToGo].enabled = {};
                                        }
                                        // update value of accesible page
                                        let selected = indexes.length > 1 ? this.formsSubmit[indexes[0]].children[indexes[1]].children[cpt].selected : this.formsSubmit[indexes[0]].children[cpt].selected
                                        this.local.pages[indexToGo].enabled[elem.id] = selected;
                                    }
                                cpt++;
                            }
                        }
                        catch(e){}
                    }
                }
                
            }
            else if(this.isAfieldSimpleOrMultipleGo(cond) || this.isACamSign(cond)){
                try{
                    let action = cond.page;
                    if(action != "" ||action != undefined){
                     // get Index of page to go
                        let indexToGo = this.findIndexOfPageByPageTechName(action);
                        // Create enabled object if does not exist yet
                        if(this.local.pages[indexToGo].enabled == undefined || typeof(this.local.pages[indexToGo].enabled) == "boolean"){
                            this.local.pages[indexToGo].enabled = {};
                        }
                        // update value of accesible page
                        this.local.pages[indexToGo].enabled[item.id] = this.compute(cond);
                    }
                }
                catch(e){}
            }
            else if(this.isACamSign(cond)){
            }
        }
    }
    
    private findIndexOfPageByPageTechName(pageTechName: string): number{
        let cpt = 0;
        for(let page of this.local.pages){
            if(page.pageTechName == pageTechName){
                return cpt;
            }
            cpt ++;
        }
        return -1;
    }
    
    /**
     * Compute visibility conditions detecting type of conditions
     * @param conds Array<any> -- array of conditions
     * @param operatorStr string -- string operator
     */
    public detectSubjectAndComplete(conds: Array<any>, operatorStr: string, goToPage = null){
        // Javascript string to be built
        let jsString = "";
        // Operator between each condition
        const operator = this.getcondVisibleToSign(operatorStr);
        let cpt = 0;
        
        // Iterating over conditions
        for(let cond of conds){
            var status = "";
            try{
                // If subject of current condition are fields  
                if(this.isAfieldSimpleOrMultiple(cond)){
                    status = "field";
                    jsString+= cpt > 0 ? operator+ " " + this.compute(cond) : this.compute(cond);
                    cpt ++;
                }
                // If subject of current condition is the form
                else if(this.isAform(cond)){
                    status = "form";
                    // If its first condition of string don't prefix by operator, then call generateJsVisibleIfForm
                    jsString+= cpt > 0 ? operator+ " " + this.generateJsVisibleIfForm(cond) : this.generateJsVisibleIfForm(cond);
                    //console.log("form");
                    cpt ++;
                }
                else if(this.isAFile(cond)){
                    status = "field";
                    jsString+= cpt > 0 ? operator+ " " + this.compute(cond) : this.compute(cond);
                    cpt ++;
                }
                else if(this.isACamSign(cond)){
                    status = "field";
                    jsString+= cpt > 0 ? operator+ " " + this.compute(cond) : this.compute(cond);
                    cpt ++;
                }
                else{
                    status = "error";
                }
            }
            catch(e){
                console.log("errorr");
            }
            
        }
        if(jsString == "" && goToPage == null){
            jsString = "true";
        }
        return jsString;  
    }
    
    /**
     * detect if object is instance of field
     * @param object
     */
    private instanceOfField(object:any){
        return 'val1' in object
    }
    
    /**
     * detect if we are evaluating a valid field Simple or multiple
     * @param cond
     */
    private isAfieldSimpleOrMultiple(cond: FieldObject){
        try {
            return (cond.subject != undefined && cond.subject == "field" && cond.val1 != undefined && (cond.val1.str != "" || cond.val1.arr.length > 0) && cond.val2 != undefined && (cond.val2.str != "" || cond.val2.arr.length > 0) && cond.operator != undefined && cond.operator != "") 
        }
        catch(e){
            return (cond.subject != undefined && cond.subject == "field" && cond.val1 != undefined && (cond.val1.str != "" || cond.val1.arr.length > 0) && cond.operator != undefined && cond.operator != "" && (cond.operator == "is_filled" || cond.operator == "is_empty"));;
        }
    }
    /**
     * 
     * @param cond
     */
    private isAfieldSimpleOrMultipleGo(cond: FieldObject){
        try {
            return (cond.val1 != undefined && (cond.val1.str != "" || cond.val1.arr.length > 0) && cond.val2 != undefined && (cond.val2.str != "" || cond.val2.arr.length > 0) && cond.operator != undefined && cond.operator != "" && cond.type == "goToPageIf") 
        }
        catch(e){
            return (cond.val1 != undefined && (cond.val1.str != "" || cond.val1.arr.length > 0) && cond.operator != undefined && cond.operator != "" && (cond.operator == "is_filled" || cond.operator == "is_empty") && cond.type == "goToPageIf");;
        }
    }
    
    /**
     * detect if we are evaluating a valid form
     * @param cond
     */
    private isAform(cond: FormObject){
        try {
            return cond.subject != undefined && cond.subject == "form" && cond.attribute != undefined && cond.attribute != "" && cond.operator != undefined && cond.operator != "";
        }
        catch(e){
            return false;
        }
    }
    
    /**
     * detect if we are evaluating a valid file
     * @param cond
     */
    private isAFile(cond: FieldObject){
        try {
            return cond.subject != undefined && cond.subject == "field" && cond.val1 != undefined && cond.val1.str != undefined && cond.operator != "" && cond.val1.type == "file";
        }
        catch(e){
            return false;
        }
    }
    
    /**
     * detect if we are evaluating a valid camSign
     * @param cond
     */
    private isACamSign(cond: FieldObject){
        try {
            return cond.subject != undefined && cond.subject == "field" && cond.val1 != undefined && cond.val1.str != undefined && cond.operator != "" && (cond.val1.type == "signature" || cond.val1.type == "img");
        }
        catch(e){
            return false;
        }
    }
    
    /**
     * 
     * @param val ValFieldObject
     * @param val1 ValFieldObject
     */
    private compute(cond: FieldObject | FormObject){
        let result = true;
        if(this.instanceOfField(cond)){
            const field = <FieldObject>cond;
            const type1: string = this.getType(field.val1.type);
            const operator: string = field.operator;
            result = this[operator](field, type1);
        }
        else{
            const form = <FormObject>cond;
        }
        return result;
        
    }
    
    /**
     * getter to a simple field val
     * @param val
     */
    private getValSimple(val : ValFieldObject){
        return val.source ? this.getSimple(val) : val.str;
    }
    
    /**
     * getter to a multiple field val
     * @param val
     */
    private getValMultiple(val : ValFieldObject): Array<any>{
        let ret;
        let str 
        if(val.source){
            switch(val.type){
                case "checkbox":
                    str = this.getNameById(val.arr!= undefined ? val.arr[0].value : val.str); 
                    ret = val.source ? this.getFormCheckboxValueByName(str) :val.arr;
                break;
                case "radio_group":
                    str = this.getNameById(val.arr!= undefined ? val.arr[0].value : val.str); 
                    ret = val.source ? this.getFormRadioGroupValueByName(str) :val.arr;
                break;
                case "checkbox_group":
                    str = this.getNameById(val.arr!= undefined ? val.arr[0].value : val.str); 
                    ret = val.source ? this.getFormCheckboxGroupValueByName(str) :val.arr;
                break;
                    
            }
        }
        else{
            ret = val.arr.map((e)=>{return e.display});
        }
        
        return ret;
    }
    
    
    /**
     * equals operator 
     * @param field
     * @param type
     */
    private equals(field: FieldObject, type: string){
        if(type == "simple"){
            return this.getValSimple(field.val1) == this.getValSimple(field.val2);
        }
        else if(type == "multiple"){
            let arr1 = this.getValMultiple(field.val1);
            let arr2 = this.getValMultiple(field.val2)
            return arr1.length != arr2.length ? false : arr1.sort().every((value, index) => { return value ==  arr2[index]});
        }
    }
    
    /**
     * different operator
     * @param field
     * @param type
     */
    private different(field: FieldObject, type: string){
        if(type == "simple"){
            return this.getValSimple(field.val1) != this.getValSimple(field.val2);
        }
        else if(type == "multiple"){
            let arr1 = this.getValMultiple(field.val1);
            let arr2 = this.getValMultiple(field.val2)
            return !(arr1.length != arr2.length ? false : arr1.sort().every((value, index) => { return value ==  arr2[index]}));
        }
    }
    
    /**
     * greater operator
     * @param field
     * @param type
     */
    private greater(field: FieldObject, type: string){
        if(type == "simple"){
            try{
                let v1 = Number(+this.getValSimple(field.val1));
                let v2 = Number(+this.getValSimple(field.val2));
                if(v1 == NaN || v2 == NaN){
                    throw "errr";
                }
                else{
                    return v1 > v2;
                }
            }
            catch(e){
                return this.getValSimple(field.val1) > this.getValSimple(field.val2);
            }

            
        }
    }
    
    /**
     * minus operator
     * @param field
     * @param type
     */
    private minus(field: FieldObject, type: string){
        if(type == "simple"){
            try{
                let v1 = Number(+this.getValSimple(field.val1));
                let v2 = Number(+this.getValSimple(field.val2));
                if(v1 == NaN || v2 == NaN){
                    throw "errr";
                }
                else{
                    return v1 < v2;
                }
            }
            catch(e){
                return this.getValSimple(field.val1) < this.getValSimple(field.val2);
            }

            
        }
    }
    
    /**
     * greaterequals operator
     * @param field
     * @param type
     */
    private greaterequals(field: FieldObject, type: string){
        if(type == "simple"){
            try{
                let v1 = Number(+this.getValSimple(field.val1));
                let v2 = Number(+this.getValSimple(field.val2));
                if(v1 == NaN || v2 == NaN){
                    throw "errr";
                }
                else{
                    return v1 >= v2;
                }
            }
            catch(e){
                return this.getValSimple(field.val1) >= this.getValSimple(field.val2);
            }

            
        }
    }
    
    /**
     * minusequals operator
     * @param field
     * @param type
     */
    private minusequals(field: FieldObject, type: string){
        if(type == "simple"){
            try{
                let v1 = Number(+this.getValSimple(field.val1));
                let v2 = Number(+this.getValSimple(field.val2));
                if(v1 == NaN || v2 == NaN){
                    throw "errr";
                }
                else{
                    return v1 <= v2;
                }
            }
            catch(e){
                return this.getValSimple(field.val1) <= this.getValSimple(field.val2);
            }            
        }
    }
    
    /**
     * among_following operator
     * @param field
     * @param type
     */
    private among_following(field: FieldObject, type: string){
        if(type == "simple"){
            let v1 = this.getValSimple(field.val1);
            let v2 = this.getValMultiple(field.val2);
            return (v2.filter(w => w == v1)).length > 0;
        }
        else if(type == "multiple"){
            let v1 = this.getValMultiple(field.val1);
            let v2 = this.getValMultiple(field.val2)
            return v2.filter(Set.prototype.has, new Set(v1)).length > 0;
        
        }
    }
    
    /**
     * out_following operator
     * @param field
     * @param type
     */
    private out_following(field: FieldObject, type: string){
        if(type == "simple"){
            let v1 = this.getValSimple(field.val1);
            let v2 = this.getValMultiple(field.val2);
            return (v2.filter(w => w == v1)).length == 0;
        }
        else if(type == "multiple"){
            let v1 = this.getValMultiple(field.val1);
            let v2 = this.getValMultiple(field.val2) 
            return v2.filter(Set.prototype.has, new Set(v1)).length == 0;
        }
    }
    
    /**
     * contains operator
     * @param field
     * @param type
     */
    private contains(field: FieldObject, type: string){
        if(type == "simple"){
            let v1 = this.getValSimple(field.val1);
            let v2 = this.getValSimple(field.val2);
            return v1.indexOf(v2) != -1;
        }
    }
    
    /**
     * not_contains operator
     * @param field
     * @param type
     */
    private not_contains(field: FieldObject, type: string){
        if(type == "simple"){
            let v1 = this.getValSimple(field.val1);
            let v2 = this.getValSimple(field.val2);
            return v1.indexOf(v2) == -1;
        }
    }
    
    /**
     * contains_multiple_files operator
     * @param field
     */
    private contains_multiple_files(field: FieldObject, type: string){
        let v1 = this.getIdByName(field.val1.str);
        let id = this.global.id;
        return this.global[id] != undefined && this.global[id][v1] != undefined && this.global[id][v1].length > 1;
    }
    
    /**
     * contains_a_file operator
     * @param field
     */
    private contains_a_file(field: FieldObject, type: string){
        let v1 = this.getIdByName(field.val1.str);
        let id = this.global.id;
        return this.global[id] != undefined && this.global[id][v1] != undefined && this.global[id][v1].length == 1;
    }
    
    /**
     * does_not_contain_file operator
     * @param field
     */
    private does_not_contain_file(field: FieldObject, type: string){
        let v1 = this.getIdByName(field.val1.str);
        let id = this.global.id;
        return this.global[id] == undefined || this.global[id][v1] == undefined || this.global[id][v1].length == 0;
    }
    
    /**
     * is_filled operator
     * @param field
     */
    private is_filled(field: FieldObject){
        const val = this.getValSimple(field.val1);
        return val != "";
    }
    
    /**
     * is_empty operator
     * @param field
     */
    private is_empty(field: FieldObject){
        const val = this.getValSimple(field.val1);
        return val == "";
    }
    
    /**
     * Generate Javascript expression for a given FormObject
     * @param form FormObject -- Its a field Object
     */
    private generateJsVisibleIfForm(form: FormObject): string{
        // Javascript string to be built
        let jsString = "";
        jsString+= this.strOperatorToAssert(form.operator) + this.getAttributeForm(form.attribute);
        return jsString;
    }
    
    /**
     * 
     * @param str
     */
    public getAttributeForm(str): string{
        let stri = "";
        switch(str){
            case "anonymous":
                stri = "this.local.anonymous";
            break;
        }
        return stri;
    }
    
    
    /**
     * 
     * @param str
     */
    public strOperatorToAssert(str){
        let stri = "";
        switch(str){
            case "equals":
                stri = "";
            break;
            case "different":
                stri = "!";
            break;
        }
        return stri;
    }

    /**
     * 
     * @param str
     */
    public getcondVisibleToSign(str){
        let stri = "";
        switch(str){
            case "and":
                stri = "&&";
            break;
            case "or":
                stri = "||";
            break;
        }
        return stri;
    }
    /**
     * 
     * @param name
     */
    public getFormElementValueByName(name): string{
        for(let key of Object.keys(this.formsSubmit)){
            if(key == name){
                return this.formsSubmit[key].value;
            }
            else if(this.formsSubmit[key].type == "ion-card"){
                for(let keyChild of Object.keys(this.formsSubmit[key]["children"])){
                    if(keyChild == name){
                        let val = this.formsSubmit[key]["children"][keyChild].value;
                        if(val == undefined){
                            val =  "";
                        }
                        return val;
                        
                    }
                }
            }
        }
        return "";
    }
    
    /**
     * 
     * @param name
     */
    public getIdByName(name): string{
        for(let obj of this.formsList){
            if(obj["type"] == "ion-card"){
                let id = this.getIdByName(name);
                if(id != ""){
                    return id;
                }
            }
            else{
                if(obj["name"] == name){
                    return obj["id"];
                }
            }
        }
        return "";
    }
    
    /**
     * 
     * @param name
     */
    public getFormCheckboxValueByName(name): Array<string>{
        let arrayStr: Array<string> = [];
        for(let key of Object.keys(this.formsSubmit)){
            if(key == name){
                for(let i in this.formsSubmit[key].children){
                    if(this.formsSubmit[key].children[i]["selected"]){
                        arrayStr.push(this.formsSubmit[key].children[i].value);  
                    }
                }
            }
            else if(this.formsSubmit[key].type == "ion-card"){
                for(let keyChild of Object.keys(this.formsSubmit[key]["children"])){
                    if(keyChild == name){
                        for(let i in this.formsSubmit[key]["children"][keyChild].children){
                            if(this.formsSubmit[key]["children"][keyChild].children[i]["selected"]){
                                arrayStr.push(this.formsSubmit[key]["children"][keyChild].children[i].value);  
                            }
                        }
                    }
                }
            }
        }
        return arrayStr;
    }
    
    /**
     * 
     * @param name
     */
    public getFormRadioGroupValueByName(name): Array<string>{
        let arrayStr: Array<string> = [];
        for(let key of Object.keys(this.formsSubmit)){
            if(key == name){
                for(let i in this.formsSubmit[key].children){
                    if(this.formsSubmit[key].children[i] != ""){
                        arrayStr.push(i+"_"+this.formsSubmit[key].children[i]);  
                    }
                }
            }
            else if(this.formsSubmit[key].type == "ion-card"){
                for(let keyChild of Object.keys(this.formsSubmit[key]["children"])){
                    if(keyChild == name){
                        for(let i in this.formsSubmit[key]["children"][keyChild].children){
                            if(this.formsSubmit[key]["children"][keyChild].children[i] != ""){
                                arrayStr.push(i+"_"+this.formsSubmit[key]["children"][keyChild].children[i]);  
                            }
                        }
                    }
                }
            }
        }
        return arrayStr;
    }
    
    /**
     * 
     * @param name
     */
    public getFormCheckboxGroupValueByName(name): Array<string>{
        let arrayStr: Array<string> = [];
        for(let key of Object.keys(this.formsSubmit)){
            if(key == name){
                for(let i in this.formsSubmit[key].children){
                    for(let j in this.formsSubmit[key].children[i]){
                        if(this.formsSubmit[key].children[i][j]["selected"]){
                            arrayStr.push(i+"_"+this.formsSubmit[key].children[i][j].value);  
                        }
                    }
                }
            }
            //this.formsSubmit[key]["children"][keyChild]
            else if(this.formsSubmit[key].type == "ion-card"){
                for(let keyChild of Object.keys(this.formsSubmit[key]["children"])){
                    if(keyChild == name){
                        for(let i in this.formsSubmit[key]["children"][keyChild].children){
                            for(let j in this.formsSubmit[key]["children"][keyChild].children[i]){
                                if(this.formsSubmit[key]["children"][keyChild].children[i][j]["selected"]){
                                    arrayStr.push(i+"_"+this.formsSubmit[key]["children"][keyChild].children[i][j].value);  
                                }
                            }
                        }
                    }
                }
            }
        }
        return arrayStr;
    }

    /**
     * 
     * @param val
     */
    private getSimple(val: ValFieldObject ): string{
        const name = this.getNameById(val)
        return this.getFormElementValueByName(name);
    }
    
    /**
     * 
     * @param val
     */
    private getNameById(val: ValFieldObject | number): string{
        if(typeof(val) == 'number'){
            for(let elem of this.form.formulaire){
                if(elem.id == val){
                    return elem.name;
                }
                else if(elem.type == "ion-card"){
                    for(let child of elem["children"]){
                        if(child.id == val){
                            return child.name;
                        }
                    }
                }
            }
            return "";
        }
        else{
            for(let elem of this.form.formulaire){
                if(elem.id == val.str){
                    return elem.name;
                }
                else if(elem.type == "ion-card"){
                    for(let child of elem["children"]){
                        if(child.id == val.str){
                            return child.name;
                        }
                    }
                }
            }
            return "";
        }
        
    }

    
    
    /**
     * bind eval function
     * @param str
     */
    public eval(str){
        return eval(str);
    }
    
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
    
    /**
     * returns next available page index
     */
    public getNextPageIndex(){
        let b = JSON.parse(JSON.stringify(this.local.currentIndex));
        for (let i = b +1; i < this.local.pages.length; i++) {
            try{
                if(this.local.pages[i].enabled != undefined &&((this.local.pages[i].enabled == true) || (this.local.pages[i].enabled instanceof Object && Object.keys(this.local.pages[i].enabled).map((e)=> {return this.local.pages[i].enabled[e];}).indexOf(true) != -1))){
                    return i;
                }   
            }
            catch(e){
                if(this.local.pages[i].enabled == true){
                    return i;
                }  
            }  
         }
    }
    /**
     * returns previous available page index
     */
    public getPreviousPageIndex(){
        for (let i = this.local.currentIndex -1; i >= 0 ; i--) {
            try{
                if(this.local.pages[i].enabled != undefined &&((this.local.pages[i].enabled == true) || (this.local.pages[i].enabled instanceof Object && Object.keys(this.local.pages[i].enabled).map((e)=> {return this.local.pages[i].enabled[e];}).indexOf(true) != -1))){
                    return i;
                }   
            }
            catch(e){
                if(this.local.pages[i].enabled == true){
                    return i;
                }  
            }
         }
        return 0;
    }
    /**
     * search for next page to use
     */
    public isThereANextPage(){
        if(this.local.pages != undefined && (this.local.currentIndex < this.local.pages.length -1)){
            for (let i = this.local.currentIndex +1; i < this.local.pages.length; i++) {
                if(this.local.pages[i].enabled != undefined && ((this.local.pages[i].enabled == true) || (this.local.pages[i].enabled instanceof Object && Object.keys(this.local.pages[i].enabled).map((e)=> {return this.local.pages[i].enabled[e];}).indexOf(true) != -1))){
                    return true;
                }   
             }
            return false;
        }
        else{
            return false;
        }
        
    }
  
    /**
     * check for any existing condition and initial value of some objects
     * @param formList
     */
    public checkForAnyCondition(formList = this.formsList){
        if(this.local.initDone == undefined){
            this.local.initDone = {}; 
        }
        // for each element of form
        for(let e of formList){     
            let elem :any = e;
                try{
                    // search for conditions object
                    if(elem.conditions != undefined && elem.conditions.goToPageIf != undefined && elem.conditions.goToPageIf.conds != undefined){
                        if(true){
                            if(this.local.initDone[elem.id] == null){
                                this.detectTypeAndComplete(elem.conditions.goToPageIf.conds, elem);
                                this.local.initDone[elem.id] = true;
                            }
                        }
                    }
                    if(elem.type == "ion-card"){
                        this.checkForAnyCondition(elem.children);
                    }
                }
                catch(e){
                    console.log(e);
                }
            }
      }
    
    /**
     * returns path to some element from name
     * used by detectTypeAndComplete
     * @param name
     * @param index
     * @param formsSubmit
     */
    public getElementByNameIntoFormSubmit(name: string, index = null, formsSubmit = this.formsSubmit){
        for(let i in formsSubmit){
            if(formsSubmit[i].name == name){
                if(index == null){
                    return [i];
                }
                else{
                    return [index, i];
                }
            }
            else if(formsSubmit[i].type == "ion-card"){
                let idx = this.getElementByNameIntoFormSubmit(name, i, formsSubmit[i]["children"]);
                if(idx != null){
                    return idx;
                }
            }
        }
        return null;
    }
    /*End_c8o_PageFunction*/
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1586254439607({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1570712319541({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1588603040568({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1596620600722({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1588600997422({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1572275202786({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1586254439607
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586254439607(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586254439607: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586254439607: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586254439607: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586254439607: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586254439607"] = {};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424644097"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586254439607: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586254439607: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1570712319541
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1570712319541(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1570712319541: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1570712319541: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1570712319541: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1570712319541: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["getUrlParameters"] = stack["1570712319541"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getUrlParameters', actionFunction: 'CTS1570712319541'}, vars:{}};
		return this.CTS1570712319541(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		
		let self: any = stack["ifFormIdIsDefined"] = stack["1570701884872"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ifFormIdIsDefined', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
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
		
		let self: any = stack["IfEditingAResponse"] = stack["1572271164680"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfEditingAResponse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.edit != undefined`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["SyncFsResponses"] = stack["1576601220792"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SyncFsResponses', actionFunction: 'FullSyncSyncAction', BatchSize: get('BatchSize', `100`), Mode: get('Mode', `'continuous'`), requestable: get('requestable', `'C8Oforms.c8oforms_response_fs'`), Retry: get('Retry', `'true'`), BatchesLimit: get('BatchesLimit', `10`), Direction: get('Direction', `'bi-directional'`)}, vars:{}};
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
		let self: any = stack["GetResponseToEdit"] = stack["1576601220795"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetResponseToEdit', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `false`), requestable: get('requestable', `'C8Oforms.c8oforms_response_fs'`), _id: get('_id', `c8oPage.local.edit`)}, vars:{}};
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
		let self: any = stack["setLocal"] = stack["1576601220798"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setLocal', actionFunction: 'CTS1576601220798'}, vars:{}};
		return this.CTS1576601220798(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1586254658439"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1586254608477'}, vars:{}};
		return this.actionBeans.STS1586254608477(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1586254608477 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1576601220798 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["PublishEventInitalSyncFinished"] = stack["1601369388218"] = {};
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
		])
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncSyncAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586254675310"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1586254608477'}, vars:{}};
		return this.actionBeans.STS1586254608477(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["PublishEventInitalSyncFinished"] = stack["1601369420390"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1586254608477 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["SyncFsResponses"] = stack["1576601012769"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SyncFsResponses', actionFunction: 'FullSyncSyncAction', BatchSize: get('BatchSize', `100`), Mode: get('Mode', `'continuous'`), requestable: get('requestable', `'C8Oforms.c8oforms_response_fs'`), Retry: get('Retry', `'true'`), BatchesLimit: get('BatchesLimit', `10`), Direction: get('Direction', `'bi-directional'`)}, vars:{}};
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
		])
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1593622945986"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.user != undefined || c8oPage.local.user != ":i"`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["LoadFormanonymous"] = stack["1593622986245"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'LoadFormanonymous', actionFunction: 'CTS1593622986245'}, vars:{}};
		return this.CTS1593622986245(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1593701778492"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1593622986245 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1572269500185"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.selectorPage'`), animate: get('animate', `'true'`)}, vars:{}};
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
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1570712319541 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424644097"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1570712319541: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1570712319541: ended"); resolveP(res)});
		});
	}

	/**
	 * Function getUrlParameters
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1570712319541(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1570712319541*/
		    this.global.debug = {};
		    let formId = this.navParams.get('formId');
		    let edit = this.navParams.get('edit');
		    if(edit != undefined && edit != ":edit"){
		        this.local.edit = edit;
		    }
		    this.local.formId = formId;
		    // get predefined values
		    this.local.urlParams = new URLSearchParams(window.location.search);
		    
		    // end get predefined values
		    
		    if(formId != null && formId != ":formId"){
		        
		        resolve(true);
		    }
		    else{
		        resolve(false);
		    }		
		/*End_c8o_function:CTS1570712319541*/
		});
	}


	/**
	 * Function setLocal
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1576601220798(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576601220798*/
		page.local.respInit = props.out.resp;
		resolve();
		/*End_c8o_function:CTS1576601220798*/
		});
	}


	/**
	 * Function LoadFormanonymous
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1593622986245(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1593622986245*/
		    this.global.errorViewer = false; 
		    page.local.user = this.navParams.get('i');
		    page.c8o.callJson(".getAnonymousForm", "login", page.local.user,"__disableAutologin", true)
            .then((res: any)=>{
                page.local.sourceValue = {};
                let respInit = null;
                if(res.transaction != undefined && res.transaction.document != undefined && res.transaction.document.couchdb_output != undefined && res.transaction.document.couchdb_output.rows != undefined && res.transaction.document.couchdb_output.rows[0] != undefined){
                    let response = res.transaction.document.couchdb_output;
                    if(response.rows != undefined){
                        if(response.rows[0] != undefined){
                            //
                            
                            var myIdP = response.rows[0].value.doc._id;
                            const key = "_C8O_HIDDEN_" +  myIdP.substring(0, myIdP.indexOf("_anonymous"));
                            page.local.grp[key] = true;
                            page.local.formId = response.rows[0].value.doc._id;
                            
                            //
                            page["local"]["_rev"] = response.rows[0].value.doc['_rev'];
                            page["form"] = response.rows[0].value.doc;
                            page["formsList"] = response.rows[0].value.doc.formulaire;
                            page["link"] = response.rows[0].value.doc["wallpaper"]["link"];
                            try{
                                page["local"]["pages"] =  response.rows[0].value.doc["pages"]  
                                for(let i in page.local.pages){
                                    page["local"]["pages"][i]["enabled"] = true;
                                }
                                page["local"]["currentIndex"] = 0;
                            }
                            catch(e){
                                page["local"]["pages"] = undefined;
                                page["local"]["currentIndex"] = 0;
                            }
                            page.c8o.log.debug("CallViewLiveAndFillFormList: formsList object has been updated from live view");
                            
                            // load background image if we are in new support mode image
                            if(response.rows[0].value.doc["wallpaper"]["enabled"] && page["form"]["wallpaper"]["type"] != undefined){
                                page.local.url = page.c8o.endpointConvertigo + "/fullsync/c8oforms_fs/"+page.form["_id"]+"/wallpaper";
                                page["enabled"] = response.rows[0].value.doc["wallpaper"]["enabled"];
                                page.tick();
                                /*page.c8o.get_attachment(page["form"]["_id"], "wallpaper", "c8oforms_fs")
                                .then((res) => {
                                    page.local.url = page.c8o.endpointConvertigo + "/fullsync/c8oforms_fs/"+page.form["_id"]+"wallpaper";
                                    page["enabled"] = response.rows[0].value.doc["wallpaper"]["enabled"];
                                    page.tick();
                                }).catch((err) => {
                                    page.c8o.log.error("Error loading wallpaper from local base", err);
                                }); */
                            }
                            else{
                                page["enabled"] = response.rows[0].value.doc["wallpaper"]["enabled"];
                            }
                            let fillFormSubmit = (list, redList, formSubmit, response) => {
                                page.local.subKeyD = page.local.urlParams.get("_c8o_subkey");
                                page.local.subKeyD = page.local.subKeyD == null ? "," : page.local.subKeyD;
                                try  {
                                    for(let item of list){
                                        //checkAuthorizedPages(item);
                                        if(item["type"] == "ion-card"){
                                            redList[item["name"]] = {};
                                            formSubmit[item["name"]] = {"name":item["name"], "type": item["type"], "children":{}};
                                            //redList[item["name"]]["children"] = [];
                                            
                                            let res = response != undefined ? response[item["name"]]["children"] : null;
                                            fillFormSubmit(item["children"], redList[item["name"]]["children"], formSubmit[item["name"]]["children"], res);
                                        }
                                        else if(item["type"] == "text"){
                                            let urlParams = page.local.urlParams.get(item["name"]);
                                            let value = urlParams != null ? urlParams : respInit == null ? "": response[item["name"]]["value"]; 
                                            formSubmit[item["name"]] = {"name":item["name"], "type": item["type"], "label":item["config"]["label"], "value":value, "labelHtml":item["config"]["personalized"] ? item["config"]["html"] : item["config"]["label"]};
                                        }
                                        else if(item["type"] == "checkbox"){
                                            formSubmit[item["name"]] = {"name":item["name"], "type": item["type"], "label":item["config"]["label"], "children":[], "labelHtml":item["config"]["personalized"] ? item["config"]["html"] : item["config"]["label"]};
                                            let urlParams = page.local.urlParams.get(item["name"]);
                                            let array = urlParams != null ?urlParams.split(page.local.subKeyD) : [];
                                            for(let child in item["children"]){
                                                let selected;
                                                try {
                                                    let s = array.indexOf(item["children"][child].value) != -1;
                                                    selected = s == true ? s : respInit == null ? item["children"][child].selected : response[item["name"]]["children"][child]["selected"];
                                                }
                                                catch(e){
                                                    
                                                }
                                                
                                                formSubmit[item["name"]]["children"].push({"value": item["children"][child].value, "selected": selected, "other": item["children"][child].other});
                                            }
                                        }
                                        else if(item["type"] == "radio" || item["type"] == "select"){
                                            
                                            formSubmit[item["name"]] = {"name":item["name"], "type": item["type"], "label":item["config"]["label"], "children":[], "labelHtml":item["config"]["personalized"] ? item["config"]["html"] : item["config"]["label"]};
                                                
                                            let findName = "";
                                            let findVar = "";
                                            if(item["type"] == "select" && item["config"]["sourceEnabled"] == true){
                                                for(let w in item["actions"]){
                                                    if(item["actions"][w].enabled == true){
                                                        findVar = item["actions"][w]["vars"][0];
                                                        findName = w;
                                                    }
                                                }
                                            }
                                            if(findName != ""){
                                                formSubmit[item["name"]]["action"] = findName;
                                                formSubmit[item["name"]]["actionVar"] = findVar;
                                                //page.local["vals"+item.name] = 
                                                page.c8o.callJsonObject(findName, {
                                                    [findVar] : ""
                                                })
                                                .then((res=>{
                                                    let urlParams = page.local.urlParams.get(item["name"]);
                                                    page.local.sourceValue[item.name] = res["value"];
                                                    let defaultSelected ="";
                                                    for(let child of res["value"]){
                                                        if(child == urlParams){
                                                            defaultSelected = child;
                                                        }
                                                        formSubmit[item["name"]]["children"].push({"value": child, "selected": child == urlParams});
                                                    }
                                                    formSubmit[item["name"]]["value"] = defaultSelected;
                                                    return null;
                                                }))
                                            }
                                            else{
                                                let urlParams = page.local.urlParams.get(item["name"]);
                                                let indexFinded = false;
                                                let defaultSelected ="";
                                                
                                                if(urlParams != undefined){
                                                    for(let child in item["children"]){
                                                        if(item["children"][child]["value"] == urlParams){
                                                            indexFinded = true; 
                                                            defaultSelected = item["children"][child].value;
                                                            formSubmit[item["name"]]["children"].push({"value": item["children"][child].value, "selected": true});
                                                        }
                                                        else{
                                                            formSubmit[item["name"]]["children"].push({"value": item["children"][child].value, "selected": false});
                                                        }
                                                    }
                                                }
                                                if(!indexFinded){
                                                    for(let child in item["children"]){
                                                        let selected;
                                                        try {
                                                            selected = respInit == null ? item["children"][child].selected : response[item["name"]]["children"][child]["selected"];
                                                            if(selected){
                                                                defaultSelected = respInit == null ? item["children"][child].value : response[item["name"]]["children"][child]["value"];
                                                            }
                                                        }
                                                        catch(e){
                                                            
                                                        }
                                                        
                                                        formSubmit[item["name"]]["children"].push({"value": item["children"][child].value, "selected": selected});
                                                    }
                                                }
                                                formSubmit[item["name"]]["value"] = defaultSelected; 
                                            }
                                        }
                                        else if(item["type"] == "slider" || item["type"] == "datetime" || item["type"] == "time" || item["type"] == "barcode" || item["type"] == "img" || item["type"] == "file"|| item["type"] == "signature"){
                                            let urlParams = page.local.urlParams.get(item["name"]);
                                            let value;
                                            if(item["type"] == "slider"){
                                                let valConvert = (isNaN(+urlParams) == false && urlParams != "") ? +urlParams : null;
                                                value = valConvert != null ? valConvert : respInit == null ? "": response[item["name"]]["value"]; 
                                            }
                                            else{
                                                value = urlParams != null ? urlParams : respInit == null ? "": response[item["name"]]["value"]; 
                                            }
                                            
                                            formSubmit[item["name"]] = {"name":item["name"], "type": item["type"], "label":item["name"], "value":value, "labelHtml":item["config"]["personalized"] ? item["config"]["html"] : item["config"]["label"]};
                                        }
                                        else if(item["type"] == "radio_group"){
                                            
                                            formSubmit[item["name"]] = {"name":item["name"], "type": item["type"], "label":item["config"]["label"], children:{}, children_label:item["children"], "labelHtml":item["config"]["personalized"] ? item["config"]["html"] : item["config"]["label"]};
                                            for(let line of item.lines){
                                                let urlParams = page.local.urlParams.get(item["name"]+"_"+line.title);
                                                urlParams = item.children.filter(x=> x.value == urlParams).length > 0 ? urlParams : null;
                                                let value = urlParams != null ? urlParams : respInit == null ? "": response[item["name"]]["children"][line.title]; 
                                                formSubmit[item["name"]].children[line.title]= value;
                                            }
                                        }
                                        else if(item["type"] == "checkbox_group"){
                                            formSubmit[item["name"]] = {"name":item["name"], "type": item["type"], "label":item["config"]["label"], children:{}, "labelHtml":item["config"]["personalized"] ? item["config"]["html"] : item["config"]["label"]};
                                            
                                            for(let line of item.lines){
                                                formSubmit[item["name"]].children[line.title] = [];
                                                let urlParams = page.local.urlParams.get(item["name"]+"_"+line.title);
                                                let array = urlParams != null ?urlParams.split(page.local.subKeyD) : [];
                                                for(let child in item["children"]){
                                                   
                                                    
                                                    let selected;
                                                    try {
                                                        let s = array.indexOf(item["children"][child].value) != -1;
                                                        selected = s == true ? s : respInit == null ? item["children"][child].selected : response[item["name"]]["children"][line.title][child]["selected"];
                                                    }
                                                    catch(e){   
                                                    }   
                                                    formSubmit[item["name"]].children[line.title].push({"value": item["children"][child].value, "selected": selected});
                                                }
                                            }
                                        }
                                        
                                };
                                }
                                catch(e){
                                    console.log("error");
                                    console.log(e);
                                }
                                
                            }
                            
                            
                            fillFormSubmit(page["formsList"], page["redList"], page["formsSubmit"], respInit);
                            page["checkForAnyCondition"]();
                            
                            // do stuff to support upload files
                            if(page.global["__C8O_TODELETE"] == undefined){
                                page.global["__C8O_TODELETE"] = [];
                            }
                            let nullBefore = false;
                            if(page.global[page["idFiles"]].length == 0){
                                nullBefore = true
                            }
                            for(let item of page["formsList"]){
                                if( item['type'] == "file"){
                                    if(page.global[page["idFiles"]][item["id"]] == null){
                                        page.global[page["idFiles"]][item["id"]] = [];
                                    }
                                }
                                if(item["type"] =="ion-card"){
                                    for(let child of item["children"]){
                                        if(child['type'] == "file"){
                                            if(page.global[page["idFiles"]][child["id"]] == null){
                                                page.global[page["idFiles"]][child["id"]] = [];
                                            }
                                        }
                                    }
                                }
                            }
                            
                            
                            
                            if(respInit == null){
                                  resolve();        
                            }
                            else{
                                if(page.global["__C8O_TODELETE"] == undefined){
                                    page.global["__C8O_TODELETE"] = [];
                                }
                                let nullBefore = false;
                                if(page.global[page["idFiles"]].length == 0){
                                    nullBefore = true
                                }
                                for(let item of page["formsList"]){
                                    if( item['type'] == "file"){
                                        if(page.global[page["idFiles"]][item["id"]] == null){
                                            page.global[page["idFiles"]][item["id"]] = [];
                                        }
                                    }
                                    if(item["type"] =="ion-card"){
                                        for(let child of item["children"]){
                                            if(child['type'] == "file"){
                                                if(page.global[page["idFiles"]][child["id"]] == null){
                                                    page.global[page["idFiles"]][child["id"]] = [];
                                                }
                                            }
                                        }
                                    }
                                }
                                
                                    let att = response["_attachments"];
                                    for(let item in att){
                                        //first itemid
                                        let itemid = item.substring(0, item.indexOf('_C80C80_'));
                                        //second namefile
                                        let name = item.substring(item.indexOf('_C80C80_')+8,item.lastIndexOf('_C80C80_'));
                                        //synthax
                                        if(page.global[page["idFiles"]][itemid] == null){
                                            page.global[page["idFiles"]][itemid] = [];
                                        }
                                        if(nullBefore){
                                            page.global[page["idFiles"]][itemid].push({name:name,path:item, deleted:false});
                                        }
                                    }
                                    resolve();
                                
                                
                            }
                            
                        }
                    }
                    //document  =  res.transaction.document.couchdb_output.rows[0].value.doc
                }
                else{
                    if(res.transaction != undefined && res.transaction.document != undefined && res.transaction.document.error != undefined){
                        let errorSearch = "Max number of sessions";
                        if(res.transaction.document.error.substring(errorSearch) != -1){
                            this.local.errorViewer = true;
                            this.local.errorMsgViewer = page["translate"].instant("Max_number_of_sessions");
                        }
                        else{
                            this.local.errorViewer = true;
                            this.local.errorMsgViewer = page["translate"].instant("error_occured");
                        }
                    }
                    if(!this.global.pwa){
                        window.location.href = './';
                        resolve(true);
                    }
                    else{
                        this.local.errorViewer = true;
                        this.local.errorMsgViewer = page["translate"].instant("error_occured");
                        resolve(true);
                    }
                    return null;
                }
                return null;
              
            })
            .fail((e)=>{
                
                console.log(e);
                if(!this.global.pwa){
                    window.location.href = './';
                    resolve(true);
                }
                else{
                    this.local.errorViewer = true;
                    this.local.errorMsgViewer = page["translate"].instant("error_occured");
                    resolve(true);
                }
            })
            
            
            
            
            
            
            
            
            
            
            
		/*End_c8o_function:CTS1593622986245*/
		});
	}


	/**
	 * Function ATS1572275202786
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572275202786(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572275202786: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572275202786: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572275202786: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572275202786: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser"] = stack["1572275202786"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser', actionFunction: 'CTS1572275202786'}, vars:{}};
		return this.CTS1572275202786(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1572275202786 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572275202786: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572275202786: ended"); resolveP(res)});
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
	CTS1572275202786(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1572275202786*/
		    this.local.errorViewer = false;
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
		    /*page.local.formId = this.navParams.get('formId');
		    page.local.edit = this.navParams.get('edit');*/
		    // Getting user status (whenever he is logged or not)
		    page.local.formId = this.navParams.get('formId');
		    
		    page.local.published = page.local.formId != undefined ?page.local.formId.indexOf("published") != -1 ? true : false: false;
		    page.local.user = this.navParams.get('i');
		    // if we are in anonymous mode
		    if(page.local.user != undefined && page.local.user != ":i"){ 	        
		        page.local.grp = {};

                page.local.anonymous = true;
                resolve(true);
		        
                /*page.c8o.callJson(".login", "email", page.local.user, "password", page.local.user)
                .then((res: any)=>{
                    if(res != "ko"){
                        return page.c8o.callJson("fs://c8oforms_fs.sync"
                        );
                    }
                    else{
                        window.location.href = './';
                        resolve(false);
                        return null;
                    }
                  
                })
                .then((res)=>{
                    
                  return page.c8o.callJson("fs://c8oforms_fs.view",
                          "ddoc", "published_forms_anonymous",
                          "view", "all"
                      );
                })
                .then((res)=>{
                    const key = "_C8O_HIDDEN_" + res.rows[0].key.substring(0, res.rows[0].key.indexOf("_anonymous"));
                    page.local.grp = {};
                    page.local.grp[key] = true;
                   // page.local.user = res.user;
                    page.local.anonymous = true;
                    resolve(true);
                })
                .fail((e)=>{
                    console.log(e);
                    window.location.href = './';
                    resolve(false);
                });*/
		    }
		    else{
		        page.c8o.httpInterface.getUserServiceStatus()
	            .then((res)=>{
	                if(res.user.length == 64 || res.user.authenticated == false){
                        setTimeout(()=>{
                            page.routerProvider.setRoot("loginPage", {page:'viewerPage', formId:page.local.formId, edit:page.local.edit}, null); 
                        }, 200);
                        resolve(false);
                    }
                    else{
                        page.local.user = res.user;
                        resolve(true);
                    }
	                    
	            })
	            .catch((err)=>{
	                if(window.navigator.onLine == true){
    	                setTimeout(()=>{
    	                    page.routerProvider.setRoot("loginPage", {page:'viewerPage', formId:page.local.formId, edit:page.local.edit}, null); 
    	                }, 200);
    	                resolve(false);
	                }
	                else{
	                    // Offline mode
	                    page.local.user = page.c8o.session.user.name
	                    resolve(true);
    	            }
	            })
		    }
		    
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
		/*End_c8o_function:CTS1572275202786*/
		});
	}


	/**
	 * Function CheckNotEmpty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574876151956(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876151956*/
		    
		    
            if(page["redList"] != undefined){
                if(vars.item.config.mandatory == true){
                    if(event.value == ""){
                        vars.redList[vars.item.name] = true;
                        //this.tick();
                    }
                    else{
                        vars.redList[vars.item.name] = false;
                    }
                }
            }    		
		resolve();
		/*End_c8o_function:CTS1574876151956*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574876151968(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876151968*/
		    
		    if(page["redList"] != undefined){
		        if(vars.item.config.mandatory == true){
		            if((event.value != undefined ? event.value != "": event != "")){
		                vars.item1 = vars.item1 + event;
		                vars.redList = false;
		            }
		        }
		    }
		
		    //this.tick();
		resolve();
		/*End_c8o_function:CTS1574876151968*/
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
	CTS1574876151986(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876151986*/
            if(vars["enable"]){	
                page.local.val = event.target.value;
                resolve(true);
                if (!page["codeIsADigit"](event.target.value+event.key)) {
                    event.preventDefault();
                    resolve(false);
                    return false;
                }
                else{
                   resolve(true);
                }  
		    }
		    else{
		        resolve(true);
		    }
		
		
		    
	        
		
		/*End_c8o_function:CTS1574876151986*/
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
	CTS1574950702436(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574950702436*/
            if(vars["enable"]){	
		   
                
                resolve(true);
                if (!page["codeIsADigit"](event.clipboardData.getData('Text'))) {
                    event.preventDefault();
                    resolve(false);
                    return false;
                }
                else{
                   resolve(true);
                }  
		    }
		    else{
		        resolve(true);
		    }
		
		
		    
	        
		
		/*End_c8o_function:CTS1574950702436*/
		});
	}


	/**
	 * Function CheckNotEmpty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574876152019(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876152019*/
		    if(page["redList"] != undefined){
                if(vars.item.config.mandatory == true){
                    if(event.value == ""){
                        vars.redList[vars.item.name] = true;
                        //this.tick();
                    }
                    else{
                        vars.redList[vars.item.name] = false;
                    }
                }
            } 
		resolve();
		/*End_c8o_function:CTS1574876152019*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574876152028(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876152028*/
		if(vars.item.config.mandatory == true){
		    if(event.value != ""){
		        vars.redList = false;
		    }
		}
		    this.tick();
		resolve();
		/*End_c8o_function:CTS1574876152028*/
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
	CTS1574951903886(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574951903886*/
            if(vars["enable"]){	
                page.local.val = event.target.value;
                resolve(true);
                if (!page["codeIsADigit"](event.target.value+event.key)) {
                    event.preventDefault();
                    resolve(false);
                    return false;
                }
                else{
                   resolve(true);
                }  
		    }
		    else{
		        resolve(true);
		    }
		
		
		    
	        
		
		/*End_c8o_function:CTS1574951903886*/
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
	CTS1574951903898(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574951903898*/
            if(vars["enable"]){	
		   
                
                resolve(true);
                if (!page["codeIsADigit"](event.clipboardData.getData('Text'))) {
                    event.preventDefault();
                    resolve(false);
                    return false;
                }
                else{
                   resolve(true);
                }  
		    }
		    else{
		        resolve(true);
		    }
		
		
		    
	        
		
		/*End_c8o_function:CTS1574951903898*/
		});
	}


	/**
	 * Function CheckNotEmpty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574876152163(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876152163*/
		    
            if(page["redList"] != undefined){
                if(vars.item.config.mandatory == true){
                    if(event.value == ""){
                        vars.redList[vars.item.name] = true;
                        //this.tick();
                    }
                }
            }
		resolve();
		/*End_c8o_function:CTS1574876152163*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574876152175(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876152175*/
		    
		    if(page["redList"] != undefined){
		        if(vars.item.config.mandatory == true){
		            if((event.value != undefined ? event.value != "": event != "")){
		                vars.item1 = vars.item1 + event;
		                vars.redList = false;
		            }
		        }
		    }
		
		    //this.tick();
		resolve();
		/*End_c8o_function:CTS1574876152175*/
		});
	}


	/**
	 * Function CheckNotEmpty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574876152214(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876152214*/
		if(vars.item.config.mandatory == true){
		    if(event.value == ""){
		        vars.redList = true;
		        this.tick();
		    }
		}
		resolve();
		/*End_c8o_function:CTS1574876152214*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574876152223(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574876152223*/
		if(vars.item.config.mandatory == true){
		    if(event.value != ""){
		        vars.redList = false;
		    }
		}
		    this.tick();
		resolve();
		/*End_c8o_function:CTS1574876152223*/
		});
	}


	/**
	 * Function setCheckboxSelected
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588839517855(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588839517855*/
		vars.params['model']['children'][vars.j]['selected'] = true;
		resolve();
		/*End_c8o_function:CTS1588839517855*/
		});
	}


	/**
	 * Function setCheckboxSelected
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588839517939(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588839517939*/
		vars.params['model']['children'][vars.j]['selected'] = true;
		resolve();
		/*End_c8o_function:CTS1588839517939*/
		});
	}


	/**
	 * Function CorrectValues
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588840102217(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588840102217*/
		
		    for(let child in vars.item.children){
		        if(vars.item.children[child].value != vars.model.value){
		            vars.model.children[child].selected = false;
		        }
		        else{
		            vars.model.children[child].selected = true;
		        }
		    }
		    
//		    this.tick();
		resolve();
		/*End_c8o_function:CTS1588840102217*/
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
	CTS1588840102352(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588840102352*/
		vars.params.model.value = '__c8o__unique_other';
		resolve();
		/*End_c8o_function:CTS1588840102352*/
		});
	}


	/**
	 * Function setCheckboxSelected
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588840102385(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588840102385*/
		vars.params['model']['children'][vars.j]['selected'] = true;
		resolve();
		/*End_c8o_function:CTS1588840102385*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1570487990789(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1570487990789*/
		    page.local.sliderMoved = true; 
		if(vars.item.config.mandatory == true){
		    if(event.value != ""){
		        vars.redList = false;
		    }
		}
		    this.tick();
		resolve();
		/*End_c8o_function:CTS1570487990789*/
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
	CTS1599133954819(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599133954819*/
		    page.local["selectSearchableC8o"+props.stack.root.scope.params1599133889431.model["name"]] = true;
		    page.c8o.callJsonObject(props.stack.root.scope.params1599133889431.model.action, {
	            [props.stack.root.scope.params1599133889431.model.actionVar] : ""
	        })
	        .then((res=>{
	            let array = [];
	            if(!(res["value"] == undefined)){
	                if(typeof(res["value"]) == "string"){
	                    array.push(res["value"]);
	                }
	                else{
	                    for(let child of res["value"]){
	                        array.push(child);
	                    }
	                }
	                
	            }
	            this.local.sourceValue[props.stack.root.scope.params1599133889431.elems] = array;
	            vars.params.elems = array;
	            page["tick"]();
	            return null;
	        }))
	        resolve();
		/*End_c8o_function:CTS1599133954819*/
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
	CTS1599133954834(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599133954834*/
		    console.log(event);
		    if(event.relatedTarget == null){
		        page.local['selectSearchableC8o'+props.stack.root.scope.params1599133889431.model['name']] = false;
		    }
		    
		resolve();
		/*End_c8o_function:CTS1599133954834*/
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
	CTS1599136683020(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599136683020*/
        page.c8o.callJsonObject(props.stack.root.scope.params1599133889431.model.action, {
            [props.stack.root.scope.params1599133889431.model.actionVar] : event.target.value
        })
        .then((res=>{
            let array = [];
            if(!(res["value"] == undefined)){
                if(typeof(res["value"]) == "string"){
                    array.push(res["value"]);
                }
                else{
                    for(let child of res["value"]){
                        array.push(child);
                    }
                }
                
            }
            this.local.sourceValue[props.stack.root.scope.params1599133889431.elems] = array;
            vars.params.elems = array;
            page["tick"]();
            return null;
        }))
		resolve();
		/*End_c8o_function:CTS1599136683020*/
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
	CTS1599133954876(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599133954876*/
		    props.stack.root.scope.params1599133889431.model["children"].forEach((x)=>{x.selected = false});
		props.stack.root.scope.params1599133889431.model["children"][props.stack.root.scope.myIndex].selected = true;
		props.stack.root.scope.params1599133889431.model.value = props.stack.root.scope.item;
		page.local['selectSearchableC8o'+props.stack.root.scope.params1599133889431.model['name']] = false;
		props.stack.root.scope.params1599133889431.model.value
		resolve();
		/*End_c8o_function:CTS1599133954876*/
		});
	}


	/**
	 * Function ATS1573567027305
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1573567027305(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1573567027305: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1573567027305: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1573567027305: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1573567027305: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CorrectValues"] = stack["1573567027305"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CorrectValues', actionFunction: 'CTS1573567027305'}, vars:{}};
		return this.CTS1573567027305(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1596634526996"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1596618881610'}, vars:{item: get('item', `stack.root.scope.params1570521148238.item`), line: get('line', `null`), child: get('child', `parent.out`), canExec: get('canExec', `true`)}};
		return this.actionBeans.STS1596618881610(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1596618881610 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1573567027305 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1573567027305: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1573567027305: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CorrectValues
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573567027305(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573567027305*/
		    let id = "";
		    vars.item = props.stack.root.scope.params1570521148238.item;
		    vars.model = props.stack.root.scope.params1570521148238.model;
		    for(let child in vars.item.children){
		        if(vars.item.children[child].value != vars.model.value){
		            vars.model.children[child].selected = false;
		        }
		        else{
		            vars.model.children[child].selected = true;
		            id = vars.item.children[child];
		        }
		    }		    
//		    this.tick();
		resolve(id);
		/*End_c8o_function:CTS1573567027305*/
		});
	}


	/**
	 * Function CorrectValues
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573567027344(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573567027344*/
		
		    for(let child in vars.item.children){
		        if(vars.item.children[child].value != vars.model.value){
		            vars.model.children[child].selected = false;
		        }
		        else{
		            vars.model.children[child].selected = true;
		        }
		    }
		    
//		    this.tick();
		resolve();
		/*End_c8o_function:CTS1573567027344*/
		});
	}


	/**
	 * Function ATS1599148773099
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1599148773099(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1599148773099: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1599148773099: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1599148773099: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1599148773099: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1599148773099"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `scope.params1570521148238.disabled == true`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction1"] = stack["1599147955167"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction1', actionFunction: 'STS1586453262123'}, vars:{item: get('item', `scope.params1570521148238.item`)}};
		return this.actionBeans.STS1586453262123(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1586453262123 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1599148773099: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1599148773099: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1570476475409(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1570476475409*/
		if(vars.item.config.mandatory == true){
		    if(event.value != ""){
		        vars.redlist = false;
		    }
		}
		this.tick();
		resolve();
		/*End_c8o_function:CTS1570476475409*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1570476475424(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1570476475424*/
		if(vars.item.config.mandatory == true){
		    if(event.value != ""){
		        vars.redList = false;
		    }
		}
		    this.tick();
		resolve();
		/*End_c8o_function:CTS1570476475424*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571411661355(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571411661355*/
		if(vars.item.config.mandatory == true){
		    if(event.value != ""){
		        vars.redlist = false;
		    }
		}
		this.tick();
		resolve();
		/*End_c8o_function:CTS1571411661355*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571411661373(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571411661373*/
		if(vars.item.config.mandatory == true){
		    if(event.value != ""){
		        vars.redList = false;
		    }
		}
		    this.tick();
		resolve();
		/*End_c8o_function:CTS1571411661373*/
		});
	}


	/**
	 * Function ATS1571652709134
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1571652709134(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1571652709134: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1571652709134: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1571652709134: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1571652709134: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1571652709134"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'CTS1571652709134'}, vars:{disabled: get('disabled', `scope.params1570455192839.disabled == false`)}};
		return this.CTS1571652709134(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1571652774582"] = {};
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
		let self: any = stack["Camera"] = stack["1570464402076"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Camera', actionFunction: 'CameraAction', correctOrientation: get('correctOrientation', `true`), saveToPhotoAlbum: get('saveToPhotoAlbum', `false`), mediaType: null, quality: get('quality', `80`), arrowDir: null, targetHeight: get('targetHeight', `800`), sourceType: get('sourceType', `'CAMERA'`), allowEdit: get('allowEdit', `false`), encodingType: get('encodingType', `'JPEG'`), x: null, width: null, destinationType: get('destinationType', `'DATA_URL'`), y: null, cameraDirection: get('cameraDirection', `'BACK'`), targetWidth: get('targetWidth', `800`), height: null}, vars:{}};
		return this.actionBeans.CameraAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["setImgSrc"] = stack["1570464402079"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setImgSrc', actionFunction: 'CTS1570464402079'}, vars:{item: get('item', `scope.params1570455192839.item`), src: get('src', `out`), model: get('model', `scope.params1570455192839.model`), redList: get('redList', `scope.params1570455192839.redList`)}};
		return this.CTS1570464402079(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1598522674817"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1596618881610'}, vars:{item: get('item', `scope.params1570455192839.item`), line: get('line', `null`), child: get('child', `null`), canExec: get('canExec', `true`)}};
		return this.actionBeans.STS1596618881610(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1596618881610 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1570464402079 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CameraAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1571652709134 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1571652709134: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1571652709134: ended"); resolveP(res)});
		});
	}

	/**
	 * Function If
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571652709134(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571652709134*/
		if(vars.disabled == true){
		    resolve(true);
		}
		else{
	        resolve(false);
		}
		/*End_c8o_function:CTS1571652709134*/
		});
	}


	/**
	 * Function setImgSrc
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1570464402079(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1570464402079*/
	        vars.item.config.src = "data:image/jpeg;base64," + vars.src;
            vars.model.value   = vars.src;//data:image/jpeg;base64,
            vars.redList = false;
            resolve();
		/*End_c8o_function:CTS1570464402079*/
		});
	}


	/**
	 * Function CheckNotEmpty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605805836316(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605805836316*/
		    
            if(page["redList"] != undefined){
                if(vars.item.config.mandatory == true){
                    if(event.value == ""){
                        vars.redList[vars.item.name] = true;
                        //this.tick();
                    }
                }
            }
		resolve();
		/*End_c8o_function:CTS1605805836316*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605805836328(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605805836328*/
		    
		    if(page["redList"] != undefined){
		        if(vars.item.config.mandatory == true){
		            if((event.value != undefined ? event.value != "": event != "")){
		                vars.item1 = vars.item1 + event;
		                vars.redList = false;
		            }
		        }
		    }
		
		    //this.tick();
		resolve();
		/*End_c8o_function:CTS1605805836328*/
		});
	}


	/**
	 * Function ATS1605806257007
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605806257007(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605806257007: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605806257007: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605806257007: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605806257007: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1605806257007"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'CTS1605806257007'}, vars:{disabled: get('disabled', `scope.params1570487126259.disabled == false`)}};
		return this.CTS1605806257007(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1605806257013"] = {};
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
		let self: any = stack["ModalPage"] = stack["1605871469364"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{'model': stack.root.scope.params1570487126259.model}`), cssClass: get('cssClass', `'alwaysFullScreen'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.modalVideo'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605806257007 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605806257007: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605806257007: ended"); resolveP(res)});
		});
	}

	/**
	 * Function If
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605806257007(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605806257007*/
		if(vars.disabled == true){
		    resolve(true);
		}
		else{
	        resolve(false);
		}
		/*End_c8o_function:CTS1605806257007*/
		});
	}


	/**
	 * Function ATS1605880187050
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605880187050(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605880187050: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605880187050: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605880187050: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605880187050: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1605880187050"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'CTS1605880187050'}, vars:{disabled: get('disabled', `scope.params1570487126259.disabled == false`)}};
		return this.CTS1605880187050(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1605880187056"] = {};
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
		let self: any = stack["ModalPage"] = stack["1605880187059"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{'barcode':true, 'multiple': false}`), cssClass: get('cssClass', `'alwaysFullScreen'`), blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["InvokeSharedAction"] = stack["1605882154153"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606311206408'}, vars:{type: get('type', `'file'`), resultId: get('resultId', `''`), imgId: get('imgId', `''`), topic: get('topic', `''`), ref: get('ref', `''`), file: get('file', `c8oPage.global['barcoderesult']`)}};
		return this.actionBeans.STS1606311206408(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["save_result"] = stack["1605888208310"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'save_result', actionFunction: 'CTS1605888208310'}, vars:{model: get('model', `stack.root.scope.params1570487126259.model`)}};
		return this.CTS1605888208310(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605888208310 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606311206408 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1605880187050 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605880187050: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605880187050: ended"); resolveP(res)});
		});
	}

	/**
	 * Function If
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605880187050(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605880187050*/
		if(vars.disabled == true){
		    
		    resolve(true);
		}
		else{
	        resolve(false);
		}
		this.global["multiple"] = false;
		/*End_c8o_function:CTS1605880187050*/
		});
	}


	/**
	 * Function save_result
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605888208310(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605888208310*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		let out = props.out[1];
		if(out && out.text && vars.model['value'] !== undefined)
		    vars.model['value'] = out.text;
		resolve();
		/*End_c8o_function:CTS1605888208310*/
		});
	}


	/**
	 * Function ATS1582117588705
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1582117588705(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1582117588705: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1582117588705: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1582117588705: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1582117588705: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1582117588705"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `window['cordova'] != undefined`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1582121105713"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.id`), Property: get('Property', `'__tempITEMID'`)}, vars:{}};
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
		let self: any = stack["SetGlobal2"] = stack["1582121105716"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal2', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.name`), Property: get('Property', `'__tempITEMNAME'`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1582121105719"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.idFiles`), Property: get('Property', `'id'`)}, vars:{}};
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
		let self: any = stack["SetGlobal1"] = stack["1582121105722"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `true`), Property: get('Property', `'multiple'`)}, vars:{}};
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
		let self: any = stack["Chooser"] = stack["1582121105725"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Chooser', actionFunction: 'ChooserAction', mockedResponse: get('mockedResponse', `'https://www.convertigo.com/wp-content/uploads/2015/01/logoStudio.png'`), mimeType: null}, vars:{}};
		return this.actionBeans.ChooserAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["CustomAction"] = stack["1582121105728"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1582121105728'}, vars:{idItem: get('idItem', `scope.item1543865083865.id`)}};
		return this.CTS1582121105728(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1582121105728 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ChooserAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal1"] = stack["1582624194074"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.id`), Property: get('Property', `'__tempITEMID'`)}, vars:{}};
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
		let self: any = stack["SetGlobal2"] = stack["1582624194077"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal2', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.name`), Property: get('Property', `'__tempITEMNAME'`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1582624194080"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.idFiles`), Property: get('Property', `'id'`)}, vars:{}};
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
		let self: any = stack["SetGlobal1"] = stack["1582624194083"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `true`), Property: get('Property', `'multiple'`)}, vars:{}};
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
		
		let self: any = stack["IfElse"] = stack["1591967214564"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `window['mobileAndTabletCheck']()`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["Modal_Page"] = stack["1591967243867"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Modal_Page', actionFunction: 'ModalAction', data: get('data', `{id: c8oPage.idFiles, multiple:true}`), cssClass: get('cssClass', `'mobileModal'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["Modal_Page"] = stack["1582624194086"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Modal_Page', actionFunction: 'ModalAction', data: get('data', `{id: c8oPage.idFiles, multiple:true}`), cssClass: null, blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1582117588705: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1582117588705: ended"); resolveP(res)});
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
	CTS1582121105728(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1582121105728*/
		
		/*
		this.idFiles = this.global["id"];
        this.multiple = this.global["multiple"];
        this.idItem = this.global["__tempITEMID"];
        this.name = this.global["__tempITEMNAME"]; 
		*/
		    /*let blob = new Blob(props.out["data"], {type: props.out["mediaType"]});
		    let obj = {name:props.out["name"], blob: blob};
		    */
		    this.global[this.global["id"]][this.global["__tempITEMID"]] = this.global[this.global["id"]][this.global["__tempITEMID"]].concat(props.out);
            
		
		resolve();
		/*End_c8o_function:CTS1582121105728*/
		});
	}


	/**
	 * Function ATS1571666926300
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1571666926300(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1571666926300: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1571666926300: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1571666926300: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1571666926300: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1571666926300"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'CTS1571666926300'}, vars:{disabled: get('disabled', `scope.params1570521387467.disabled == false`)}};
		return this.CTS1571666926300(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1571666926306"] = {};
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
		let self: any = stack["CustomAction"] = stack["1570521491844"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1570521491844'}, vars:{i: get('i', `i`), itemID: get('itemID', `scope.params1570521387467.item.id`)}};
		return this.CTS1570521491844(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1570521491844 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1571666926300 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1571666926300: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1571666926300: ended"); resolveP(res)});
		});
	}

	/**
	 * Function If
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571666926300(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571666926300*/
		if(vars.disabled == true){
		    resolve(true);
		}
		else{
	        resolve(false);
		}
		/*End_c8o_function:CTS1571666926300*/
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
	CTS1570521491844(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1570521491844*/
		if(page["idFiles"] != undefined){
		    vars.i = props.stack.root.scope.i;
		    if(this.global[page["idFiles"]][vars.itemID][vars.i]["deleted"] !== undefined){
	            this.global["__C8O_TODELETE"].push(this.global[page["idFiles"]][vars.itemID][vars.i]);
	            this.global[page["idFiles"]][vars.itemID].splice(vars.i, 1);
	        }
	        else{
	            this.global[page["idFiles"]][vars.itemID].splice(vars.i, 1);
	        } 
		}
		
		resolve();
		/*End_c8o_function:CTS1570521491844*/
		});
	}


	/**
	 * Function ATS1573724391281
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1573724391281(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1573724391281: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1573724391281: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1573724391281: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1573724391281: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1573724391281"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'CTS1573724391281'}, vars:{disabled: get('disabled', `scope.params1570521387467.disabled == false`)}};
		return this.CTS1573724391281(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1573724391287"] = {};
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
		
		let self: any = stack["IfElse"] = stack["1582118354765"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `window.cordova != undefined`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1582120848734"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.id`), Property: get('Property', `'__tempITEMID'`)}, vars:{}};
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
		let self: any = stack["SetGlobal2"] = stack["1582120848737"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal2', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.name`), Property: get('Property', `'__tempITEMNAME'`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1582120848740"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.idFiles`), Property: get('Property', `'id'`)}, vars:{}};
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
		let self: any = stack["SetGlobal1"] = stack["1582120848743"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `false`), Property: get('Property', `'multiple'`)}, vars:{}};
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
		let self: any = stack["Chooser"] = stack["1582120848746"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Chooser', actionFunction: 'ChooserAction', mockedResponse: get('mockedResponse', `'https://www.convertigo.com/wp-content/uploads/2015/01/logoStudio.png'`), mimeType: null}, vars:{}};
		return this.actionBeans.ChooserAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["CustomAction"] = stack["1582120848749"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1582120848749'}, vars:{idItem: get('idItem', `scope.item1543865083865.id`)}};
		return this.CTS1582120848749(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1582120848749 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ChooserAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1573724391311"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.id`), Property: get('Property', `'__tempITEMID'`)}, vars:{}};
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
		let self: any = stack["SetGlobal2"] = stack["1573724391314"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal2', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.name`), Property: get('Property', `'__tempITEMNAME'`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1573724391323"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.idFiles`), Property: get('Property', `'id'`)}, vars:{}};
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
		let self: any = stack["SetGlobal1"] = stack["1573724391326"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `true`), Property: get('Property', `'multiple'`)}, vars:{}};
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
		
		let self: any = stack["IfElse"] = stack["1591967391619"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `window['mobileAndTabletCheck']()`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["Modal_Page"] = stack["1573724391329"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Modal_Page', actionFunction: 'ModalAction', data: get('data', `{id: c8oPage.idFiles, multiple:true}`), cssClass: get('cssClass', `'mobileModal'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["Modal_Page"] = stack["1591967405336"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Modal_Page', actionFunction: 'ModalAction', data: get('data', `{id: c8oPage.idFiles, multiple:true}`), cssClass: null, blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1573724391281 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1573724391281: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1573724391281: ended"); resolveP(res)});
		});
	}

	/**
	 * Function If
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573724391281(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573724391281*/
		if(vars.disabled == true){
		    resolve(true);
		}
		else{
	        resolve(false);
		}
		/*End_c8o_function:CTS1573724391281*/
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
	CTS1582120848749(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1582120848749*/
		
		/*
		this.idFiles = this.global["id"];
        this.multiple = this.global["multiple"];
        this.idItem = this.global["__tempITEMID"];
        this.name = this.global["__tempITEMNAME"]; 
		*/
		    /*let blob = new Blob(props.out["data"], {type: props.out["mediaType"]});
		    let obj = {name:props.out["name"], blob: blob};
		    */
		    this.global[this.global["id"]][this.global["__tempITEMID"]] = this.global[this.global["id"]][this.global["__tempITEMID"]].concat(props.out);
            
		
		resolve();
		/*End_c8o_function:CTS1582120848749*/
		});
	}


	/**
	 * Function ATS1571666998509
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1571666998509(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1571666998509: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1571666998509: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1571666998509: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1571666998509: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1571666998509"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'CTS1571666998509'}, vars:{disabled: get('disabled', `scope.params1570521387467.disabled == false`)}};
		return this.CTS1571666998509(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1571666998515"] = {};
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
		
		let self: any = stack["IfElse"] = stack["1582118400837"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `window.cordova != undefined`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1582119308087"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.id`), Property: get('Property', `'__tempITEMID'`)}, vars:{}};
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
		let self: any = stack["SetGlobal2"] = stack["1582119308090"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal2', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.name`), Property: get('Property', `'__tempITEMNAME'`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1582119308099"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.idFiles`), Property: get('Property', `'id'`)}, vars:{}};
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
		let self: any = stack["SetGlobal1"] = stack["1582119308102"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `false`), Property: get('Property', `'multiple'`)}, vars:{}};
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
		let self: any = stack["Chooser"] = stack["1582118424514"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Chooser', actionFunction: 'ChooserAction', mockedResponse: get('mockedResponse', `'https://www.convertigo.com/wp-content/uploads/2015/01/logoStudio.png'`), mimeType: null}, vars:{}};
		return this.actionBeans.ChooserAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		let self: any = stack["CustomAction"] = stack["1582118424517"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1582118424517'}, vars:{idItem: get('idItem', `scope.item1543865083865.id`)}};
		return this.CTS1582118424517(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1582118424517 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ChooserAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1582118431001"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.id`), Property: get('Property', `'__tempITEMID'`)}, vars:{}};
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
		let self: any = stack["SetGlobal2"] = stack["1582118431004"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal2', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.item.name`), Property: get('Property', `'__tempITEMNAME'`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1582118431013"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `scope.params1570521387467.idFiles`), Property: get('Property', `'id'`)}, vars:{}};
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
		let self: any = stack["SetGlobal1"] = stack["1582118431016"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `false`), Property: get('Property', `'multiple'`)}, vars:{}};
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
		
		let self: any = stack["IfElse"] = stack["1591967428611"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `window['mobileAndTabletCheck']()`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["Modal_Page"] = stack["1591967439563"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Modal_Page', actionFunction: 'ModalAction', data: get('data', `{id: c8oPage.idFiles, multiple:true}`), cssClass: get('cssClass', `'mobileModal'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["Modal_Page"] = stack["1591967442010"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Modal_Page', actionFunction: 'ModalAction', data: get('data', `{id: c8oPage.idFiles, multiple:true}`), cssClass: null, blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.dropFilePage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.actionBeans.ModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
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
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1571666998509 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1571666998509: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1571666998509: ended"); resolveP(res)});
		});
	}

	/**
	 * Function If
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571666998509(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571666998509*/
		if(vars.disabled == true){
		    resolve(true);
		}
		else{
	        resolve(false);
		}
		/*End_c8o_function:CTS1571666998509*/
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
	CTS1582118424517(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1582118424517*/
		
		/*
		this.idFiles = this.global["id"];
        this.multiple = this.global["multiple"];
        this.idItem = this.global["__tempITEMID"];
        this.name = this.global["__tempITEMNAME"]; 
		*/
		    /*let blob = new Blob(props.out["data"], {type: props.out["mediaType"]});
		    let obj = {name:props.out["name"], blob: blob};
		    */
		    this.global[this.global["id"]][this.global["__tempITEMID"]] = this.global[this.global["id"]][this.global["__tempITEMID"]].concat(props.out);
            
		
		resolve();
		/*End_c8o_function:CTS1582118424517*/
		});
	}


	/**
	 * Function ATS1571676268818
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1571676268818(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1571676268818: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1571676268818: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1571676268818: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1571676268818: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["borrowSignature"] = stack["1571676268818"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'borrowSignature', actionFunction: 'CTS1571676268818'}, vars:{params: get('params', `params1570477969257`)}};
		return this.CTS1571676268818(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1571676339145"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994873907'}, vars:{}};
		return this.actionBeans.STS1554994873907(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994873907 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1571676268818 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1571676268818: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1571676268818: ended"); resolveP(res)});
		});
	}

	/**
	 * Function borrowSignature
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571676268818(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571676268818*/
		    props.stack.root.scope.params1570477969257.model.value ="";
		resolve();
		/*End_c8o_function:CTS1571676268818*/
		});
	}


	/**
	 * Function CheckFilled
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592918840895(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592918840895*/
		if(vars.item.config.mandatory == true){
		    if(event.value != ""){
		        vars.redList = false;
		    }
		}
		    this.tick();
		resolve();
		/*End_c8o_function:CTS1592918840895*/
		});
	}


	/**
	 * Function ATS1588603040568
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588603040568(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588603040568: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588603040568: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588603040568: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588603040568: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588603040568"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588603040568: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588603040568: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1596620600722
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1596620600722(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1596620600722: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1596620600722: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1596620600722: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1596620600722: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["DefineStringify"] = stack["1596620600722"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DefineStringify', actionFunction: 'CTS1596620600722'}, vars:{}};
		return this.CTS1596620600722(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1596620600722 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1596620600722: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1596620600722: ended"); resolveP(res)});
		});
	}

	/**
	 * Function DefineStringify
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1596620600722(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596620600722*/
		if(this.local.stringify == undefined){
		    this.local.stringify = (e)=>{
		        return JSON.stringify(e);
		    }
		}
		resolve();
		/*End_c8o_function:CTS1596620600722*/
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
	CTS1588603023037(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588603023037*/
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
		/*End_c8o_function:CTS1588603023037*/
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
	 * Function CustomAction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592514849451(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592514849451*/
		page["local"]["currentIndex"] = this.getPreviousPageIndex();
		resolve();
		/*End_c8o_function:CTS1592514849451*/
		});
	}


	/**
	 * Function ATS1592831695091
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592831695091(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592831695091: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592831695091: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592831695091: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592831695091: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1592831695091"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1576328658272'}, vars:{indexPage: get('indexPage', `c8oPage.local.currentIndex`), pages: get('pages', `c8oPage.local.pages`), doAll: get('doAll', `false`)}};
		return this.actionBeans.STS1576328658272(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["CustomAction"] = stack["1592514345220"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1592514345220'}, vars:{next: get('next', `parent.out.nextPage`)}};
		return this.CTS1592514345220(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592514345220 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1576328658272 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592831695091: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592831695091: ended"); resolveP(res)});
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
	CTS1592514345220(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592514345220*/
		if(vars.next){
		    page["local"]["currentIndex"] = this.getNextPageIndex();
		}
		
		resolve();
		/*End_c8o_function:CTS1592514345220*/
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
	CTS1592514986410(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592514986410*/
		page["local"]["currentIndex"] = this.getPreviousPageIndex();
		resolve();
		/*End_c8o_function:CTS1592514986410*/
		});
	}


	/**
	 * Function ATS1604486146249
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1604486146249(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1604486146249: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1604486146249: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1604486146249: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1604486146249: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CallSequence"] = stack["1604486146249"] = {};
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
		let self: any = stack["RootPage"] = stack["1604486146252"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1604486146249: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1604486146249: ended"); resolveP(res)});
		});
	}
}
