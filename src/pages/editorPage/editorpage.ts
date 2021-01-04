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
import * as namer from 'color-namer';
import { C8oSessionStatus } from 'c8osdkangular';


/*Begin_c8o_PageImport*/
import { Slides } from 'ionic-angular';
import {ToastController } from 'ionic-angular';
import { retry, catchError } from "rxjs/operators";
/*import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
//class FileSelectDirective
@Directive({ selector: '[ng2FileSelect]' })*/
/*End_c8o_PageImport*/

@IonicPage({priority: 'low', segment: 'editor/:formId', defaultHistory: []})
@Component({selector: 'page-editorpage', templateUrl: 'editorpage.html', changeDetection: ChangeDetectionStrategy.Default})
export class editorPage extends C8oPage  {
	public static nbInstance = 0;

	@ViewChildren("ElseBlock_1592486432827") public all_ElseBlock_1592486432827 : QueryList<any>;
	@ViewChild("ElseBlock_1592486432827") public ElseBlock_1592486432827;

	@ViewChildren("ElseBlock_1599816949560") public all_ElseBlock_1599816949560 : QueryList<any>;
	@ViewChild("ElseBlock_1599816949560") public ElseBlock_1599816949560;

	@ViewChildren("card") public all_card : QueryList<any>;
	@ViewChild("card") public card;

	@ViewChildren("ElseBlock_1601460967553") public all_ElseBlock_1601460967553 : QueryList<any>;
	@ViewChild("ElseBlock_1601460967553") public ElseBlock_1601460967553;

	@ViewChildren("ElseBlock_1600439522169") public all_ElseBlock_1600439522169 : QueryList<any>;
	@ViewChild("ElseBlock_1600439522169") public ElseBlock_1600439522169;


	@ViewChildren("ElseBlock_1601461901566") public all_ElseBlock_1601461901566 : QueryList<any>;
	@ViewChild("ElseBlock_1601461901566") public ElseBlock_1601461901566;

	@ViewChildren("ElseBlock_1600444878574") public all_ElseBlock_1600444878574 : QueryList<any>;
	@ViewChild("ElseBlock_1600444878574") public ElseBlock_1600444878574;

	@ViewChildren("ElseBlock_1602247084138") public all_ElseBlock_1602247084138 : QueryList<any>;
	@ViewChild("ElseBlock_1602247084138") public ElseBlock_1602247084138;


	@ViewChildren("ElseBlock_1588838776418") public all_ElseBlock_1588838776418 : QueryList<any>;
	@ViewChild("ElseBlock_1588838776418") public ElseBlock_1588838776418;

	@ViewChildren("divtext") public all_divtext : QueryList<any>;
	@ViewChild("divtext") public divtext;


	@ViewChildren("ElseBlock_1601481898679") public all_ElseBlock_1601481898679 : QueryList<any>;
	@ViewChild("ElseBlock_1601481898679") public ElseBlock_1601481898679;



	@ViewChildren("elseBlock_1587560901071") public all_elseBlock_1587560901071 : QueryList<any>;
	@ViewChild("elseBlock_1587560901071") public elseBlock_1587560901071;








	@ViewChildren("checkedCheckbox") public all_checkedCheckbox : QueryList<any>;
	@ViewChild("checkedCheckbox") public checkedCheckbox;








	@ViewChildren("ElseBlock_1599050997049") public all_ElseBlock_1599050997049 : QueryList<any>;
	@ViewChild("ElseBlock_1599050997049") public ElseBlock_1599050997049;



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

























	@ViewChildren("ElseBlock_1599832112358") public all_ElseBlock_1599832112358 : QueryList<any>;
	@ViewChild("ElseBlock_1599832112358") public ElseBlock_1599832112358;

	@ViewChildren("ElseBlock_1599838491298") public all_ElseBlock_1599838491298 : QueryList<any>;
	@ViewChild("ElseBlock_1599838491298") public ElseBlock_1599838491298;

	@ViewChildren("ElseBlock_1600159691271") public all_ElseBlock_1600159691271 : QueryList<any>;
	@ViewChild("ElseBlock_1600159691271") public ElseBlock_1600159691271;

	@ViewChildren("ElseBlock_1604671394145") public all_ElseBlock_1604671394145 : QueryList<any>;
	@ViewChild("ElseBlock_1604671394145") public ElseBlock_1604671394145;

	@ViewChildren("ElseBlock_1588774125548") public all_ElseBlock_1588774125548 : QueryList<any>;
	@ViewChild("ElseBlock_1588774125548") public ElseBlock_1588774125548;

	@ViewChildren("ElseBlock_1600851201107") public all_ElseBlock_1600851201107 : QueryList<any>;
	@ViewChild("ElseBlock_1600851201107") public ElseBlock_1600851201107;

	@ViewChildren("ElseBlock_1588772409885") public all_ElseBlock_1588772409885 : QueryList<any>;
	@ViewChild("ElseBlock_1588772409885") public ElseBlock_1588772409885;



	@ViewChildren("ElseBlock_1588777173082") public all_ElseBlock_1588777173082 : QueryList<any>;
	@ViewChild("ElseBlock_1588777173082") public ElseBlock_1588777173082;

	@ViewChildren("ElseBlock_1600444290610") public all_ElseBlock_1600444290610 : QueryList<any>;
	@ViewChild("ElseBlock_1600444290610") public ElseBlock_1600444290610;




















	@ViewChildren("ElseBlock_1600443742681") public all_ElseBlock_1600443742681 : QueryList<any>;
	@ViewChild("ElseBlock_1600443742681") public ElseBlock_1600443742681;



















	@ViewChildren("ElseBlock_1600939400489") public all_ElseBlock_1600939400489 : QueryList<any>;
	@ViewChild("ElseBlock_1600939400489") public ElseBlock_1600939400489;

	@ViewChildren("ElseBlock_1599818211975") public all_ElseBlock_1599818211975 : QueryList<any>;
	@ViewChild("ElseBlock_1599818211975") public ElseBlock_1599818211975;





	@ViewChildren("ElseBlock_1599818725700") public all_ElseBlock_1599818725700 : QueryList<any>;
	@ViewChild("ElseBlock_1599818725700") public ElseBlock_1599818725700;




	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "editorPage";
	/*Begin_c8o_PageDeclaration*/
	@ViewChild(Slides) public slides: Slides;
	public formsList: Array<object> = [];
	public elemIndex: number = 0;
	public form: any;
	public idselected = "";
	public idselectedC = "";
    public urls = [];
    public center = "";
    public datetimeconfig = [];
    public iconName ='cloud-done';
    public creating= "";
    public projectLang ="";
 	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		editorPage.nbInstance++;
		if (editorPage.nbInstance == 1) {
			this.events.subscribe('updateWallpaper', (data) => {this.ETS1569836726967(data)});
			this.events.subscribe('tinyMceNgModelChange', (data) => {this.ETS1584548844921(data)});
		} else {
			this.events.unsubscribe('updateWallpaper');
			this.events.subscribe('updateWallpaper', (data) => {this.ETS1569836726967(data)});
			this.events.unsubscribe('tinyMceNgModelChange');
			this.events.subscribe('tinyMceNgModelChange', (data) => {this.ETS1584548844921(data)});
		}
		
		
		
		/*Begin_c8o_PageConstructor*/
		this.local.height = {"min-height": window.document.body.scrollHeight+'px !important'};
		/*this.imgCache = [];
		Object.defineProperty(this, 'imgCache', {
		    set: function(value) {
		        this.imgCache = value;
		      console.log('Set:')
		    }
		  });*/
		this.local.index = 0;
		this.ref.detach();
		this.local.gridAndCheckboxStyleOnScroll = {};
		this.local.refreshing = false;
		this.getTranslate("Projects")
		.then((res:any)=>{
		    this.projectLang = res
		})
		.catch((err)=>{
		    this.projectLang = "Projects";
		})  
		
		this.global.urls = [];
		for (var i = 1; i < 23; i++) {
            this.global.urls.push("assets/images/jpg/img"+i+".jpg");
        }
        this.global["center"] = "";
        window.onresize = (e) =>{
            this.ref.detectChanges();
        }
        /** settings for action definition **/
        this.local.tagName = "span";
        this.local.tagId = "id";
        let err = (e)=>{console.log("err", e)}
        this.local.typeUrl = {
                title: 'assets/images/svg/component/icn_title.svg',
                text: 'assets/images/svg/component/icn_input_txt.svg',
                label: 'assets/images/svg/component/icn_label.svg',
                checkbox: 'assets/images/svg/component/icn_checkbox.svg',
                checkbox_group: 'assets/images/svg/component/icn_checkbox_group.svg',
                radio: 'assets/images/svg/component/icn_radio_btn.svg',
                radio_group: 'assets/images/svg/component/icn_radio_btn_group.svg',
                slider: 'assets/images/svg/component/icn_slider.svg',
                select:'assets/images/svg/component/icn_select.svg',
                datetime: 'assets/images/svg/component/icn_calendar.svg',
                time: 'assets/images/svg/component/icn_time.svg',
                img: 'assets/images/svg/component/icn_camera.svg',
                barcode: 'assets/images/svg/component/icn_codebar.svg',
                file: 'assets/images/svg/component/icn_import.svg',
                signature: 'assets/images/svg/component/icn_sign.svg'
            };
        try{
            this.c8o.httpPublic.get("assets/components/objectActions.json")
            .pipe(retry(3))
            .subscribe(
                    (data: any) => {
                        this.local.objectActions = data;
                        console.log("objectActions", data)
                    },
                    (err:any)=>{
                        console.log("err", err);
                    }
            );
        }
        catch(e){
            
        }
        try{
            this.c8o.httpPublic.get("assets/components/objectComponents.json")
            .pipe(retry(3))
            .subscribe(
                    (data: any) => {
                        this.local.objectComponents = data;
                        console.log("objectComponents", data)
                    },
                    (err:any)=>{
                        console.log("err", err);
                    }
            );
        }
        catch(e){
            
        }
        try{
            this.c8o.httpPublic.get("assets/components/Palette.json")
            .pipe(retry(3))
            .subscribe(
                    (data: any) => {
                        this.local.Palette = data;
                        console.log("Palette", data)
                    },
                    (err:any)=>{
                        console.log("err", err);
                    }
            );
        }
        catch(e){
            
        }
        
        
        this.local.objectComponents = "";
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	
	public getMetaFromPalette(type){
	    for(let elem of this.local.Palette){
	        for(let object of elem.objects){
	            if(object.type === type){
	                return object;
	            }
	        }
	    }
	}
	public removeUnderscores(str){
	    return str.replace(/_/gi, ' ');
	    
	}
	
	/**
     * Update Fullsync database from main's object(formsList) state, (using a shared Action)
     * @returns promise
     */
    updateState() {
        return new Promise((resolve)=>{
            // calling sharedAction UpdateState
            this.actionBeans.STS1554989913269(this, {...{stack: null, parent: parent, out: null}, ...{}}, {...{}, ...{}}, event)
            .then((res)=>{
                resolve();
            })
            .catch((error:any) => {
                this.c8o.log.error("updateState", error);
                resolve();
            })
        });     
    }
    
    /**
     * An helper that returns a translation (i18n), done before use of translate.getInstant (using a shared Action)
     * @param msgTosearch: string
     * @returns Promise<string>
     */
    getTranslate(msgTosearch :string){
        return new Promise((resolve, reject)=>{
            // calling sharedAction getTranslate
            const self = {in:{props:{tplVersion: '7.8.0.2', actionName: 'placeholder', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: msgTosearch}}};
            this.actionBeans.STS1554994860699(this, {...{stack: null, parent: parent, out: null}, ...self.in.props}, {...{}, ...self.in.vars}, event)
            .then((res)=>{
                resolve(res);
            })
            .catch((error:any) => {
                this.c8o.log.error("getTranslate", error);
                reject(error);
            })
        });        
    }
	
    /**
     * An helper that show a toast, (using a shared Action)
     * @param msg: string
     */
    public showToast(msg:string){
        const self: any = {in: {props:{tplVersion: '7.8.0.2', actionName: 'InvokeSharedAction', actionFunction: 'STS1587565281898'}, vars:{msg:msg}}};
        this.actionBeans.STS1587565281898(this, {...{stack: null, parent: parent, out: null}, ...self.in.props}, {...{}, ...self.in.vars}, event)
        .catch((error:any) => {
            this.c8o.log.error("showToast: ", error)
        })
    }
	
    /**
     * Check if there is already an element other into a (checkbox || radioList) element;
     * @param children
     * @returns boolean
     */
	checkOtherInChild(children): boolean {
        for(let i in children){
            if(children[i]["other"] == true){
                return false;
            } 
        }
        return true;
	}
	
	/**
	 * An helper that returns the number of milliseconds* since the Unix Epoch.
	 * @returns string
	 */	
	getTime():string{
        return new Date().getTime() + "";
    }
	
	/**
	 * override base class method in order to call this.ref.detectChanges();  when image changes
	 * @param id
	 * @param attachmentName
	 * @param placeholderURL
	 * @param databaseName
	 */
	public getAttachmentUrl(id: string, attachmentName: string, placeholderURL: string, databaseName?: string): Object {
	    
	    if (id != null && attachmentName && databaseName) {

            databaseName = databaseName.indexOf(".") != -1 ? databaseName.split('.')[1] :  databaseName;
            // If no place holder has been defined, define one White 1x1 pixel.
            placeholderURL = placeholderURL ? placeholderURL : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
            if (this["imgCache"][id + "/" + attachmentName] == undefined) {
                this["imgCache"][id + "/" + attachmentName] = placeholderURL
                this.c8o.get_attachment(id, attachmentName, databaseName).then((response) => {
                    this["imgCache"][id + "/" + attachmentName] = this.router.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(response));
                    this.ref.detectChanges();
                }).catch((err) => {
                    // this.c8o.log.error("Error getting attachment name: " + attachmentName, err)
                });
            }
            return this["imgCache"][id + "/" + attachmentName]
        } else {
            if (!this["imgCache"]["c8o__errorslogs"]) {
                this["imgCache"]["c8o__errorslogs"] = true;
                this.c8o.log.error("[MB] getAttachmentUrl Missing parameters...");
            }
            return "";
        }
	}
	
	
	public checkNotEmptyAndNameNotExists(event:any, vars: any, msgTosearch: string){
	    let cancel = false;
	    //Check that value is not empty
	    if(event.srcElement.value != ""){
            for(let val of vars.item.children){
                if(event.srcElement.value == val.value){
                       cancel = true;
                   } 
            }
            if(!cancel){
                vars.child.value = event.srcElement.value;
                this.updateState();
                this.tick();
                return;
            }
            else{
                let translate = this.getInstance(TranslateService)
                translate.get(msgTosearch).subscribe((res: string) => {
                    let toastCtrl = this.getInstance(ToastController);
                    let toast = toastCtrl.create({
                        message: res,
                        duration: 3000,
                        cssClass:"changeToast"
                    })
                    toast.present();
                });
                let a = vars.child.value;
                vars.child.value = vars.child.value + " ";
                this.tick();
                vars.child.value= a;
                this.tick();
                return;
            }
        }
        else{
            let valInit = vars.child.value;
            vars.child.value = vars.child.value + " ";
            this.tick();
            vars.child.value= valInit;
            this.tick();
            return;
        }
	}
	
	getNextValueDispo(localNumbers: Array<number>):number{
	    let val = 1;
	    let uniqueVal = false;
	    let smallest = localNumbers[0];
	    if(localNumbers.length == 0){
            val = 1;
        }
	    else if(localNumbers.length == 1){
            val = localNumbers[localNumbers.length -1] + 1;
            uniqueVal = true;
        }
        else{
            val = localNumbers[localNumbers.length -1];   
        }
	    if((smallest -1) > 0){
	        val = smallest -1;
	    }
	    else{
	        localNumbers.some((child, index) => {
	            if(child + 1 != localNumbers[index+1]){
	                val = child + 1;
	                return true;
	            }
	            else{
	                return false;   
	            }
	        });    
	    }
        return val;
	}
	getlocalNumbersSorted(items, localNumbers, defaultlabel, emplacement = "children", path = "value"){
	    items[emplacement].forEach((child, index) => {
            if(child[path].indexOf(defaultlabel)!= -1){
                let whil = true;
                let cpt = 0;
                while(whil){
                    whil = this.checkStringIsANumber(child[path], cpt +1);
                    cpt++;
                }
                cpt--;
                if(cpt != 0){
                    localNumbers[index] = +child[path].substring(child[path].length - cpt);
                }
            }
        });
        
        localNumbers = localNumbers.sort((a,b)=> {
            return a - b;
        });
	}
	checkStringIsANumber(str: string, level: number): boolean{
	    if(isNaN(+(str.substring(str.length - level, str.length)))){
            return false;
        }
	    else{
	        return true;
	    }
	}
	
	/* Allow to switch highlight container position*/
	public switchHighlights(newEl, highLightContener = "currentHighlight"){
		//this.c8o.log.debug("switchhoghlights function called");
	    //Check that element to highlight is different from the on that is already highlighted
	    if(newEl.id != this.local[highLightContener]){
	        // get older element and remove highlight from it
	    	//this.c8o.log.debug("Current element highlighted is " + this.local["currentHighlight"]);
	    	//this.c8o.log.debug("the new  element to be  highlighted is " + newEl.id);
	        const oldElem = document.getElementById(this.local[highLightContener]);
            if(oldElem != null){
                if(this.local.dragging == true){
                    oldElem.style["border-color"] = "#95a5a6";
                    oldElem.style["border-style"] = "dashed";
                }
                else{
                    oldElem.style["border-color"] = null;
                    oldElem.style["border-style"] = null;
                }
            }
            // set highlight on new element
            newEl.style["border-color"] = '#bc0000';
            newEl.style["border-style"] = "dashed";
            // register new element as old element
            this.local[highLightContener] = newEl.id;
	    }
	    else{
	        //register new element as old element
	        this.local[highLightContener] = newEl.id;
	    }  
	}
	
	/* Recursive search for parent container*/
	recursive(el:any, origin:string){
	    if(el == undefined){
	        this.c8o.log.debug("id context not found");
	    }
	    else if(el.id.indexOf("@prefixc8oitem") != -1 || el.id.indexOf("@prefixc8obeforeItem") != -1 || el.id.indexOf('@prefixc8oafterItem') != -1){
	        if(origin == "item"){
	            let start = el.id.indexOf("@prefixc8otype");
	            if(start == -1){
	               this.c8o.log.error("Error: Can't drop since object has no property type"); 
	               return;
	            }
	            else{
	                start = start + 14;
	                const target = el.id.substring(start);
	            }
	            
	        }
	        else{
	            this.switchHighlights(el);   
	        }
	    }
	    else{
	        this.recursive(el.parentElement, origin);
	    }
	}
		
	isElementIndexSwappable(dir, id){
	    return (dir == 'down')?(this.formsList[this.getElementIndexById(id)+1] !== undefined):(this.formsList[this.getElementIndexById(id)-1] !== undefined);
	}
	
	getElementIndexById(id, id2=null, id3=null){
	    for(let i= 0; i< this.formsList.length; i++){
            if(this.formsList[i]["id"] == id){
            	if(id2!= null)
            	{
            		for(let j= 0; i< this.formsList[i]["children"].length; j++){
            			if(this.formsList[i]["children"][j]["id"] == id2){
            				if(id3!= null){
            					for(let k= 0; k< this.formsList[i]["children"][j]["children"].length; k++){
            						if(this.formsList[i]["children"][j]["children"][k]["id"] == id3){
            							return k;
            						}
            					}
            				}
            				else{
            					return j;
            				}
            			}
            		}
            	}
            	else{
            		return i;
            	}
            		
            }
        }
	}
	
	
	moveElement(indexDest, indexOrigin){
	    let toCard = false;
	    let fromCard = false;
	    let same = false;
	    
	    if(indexDest[1] != null){
	        toCard = true;
	        //this.c8o.log.debug("MoveElement: to an ion-card, or radiolist");
	    }
	    if(indexOrigin[1] != null){
	        fromCard = true;
	        //this.c8o.log.debug("MoveElement: from an ion-card");
	    }
	    

        // Check names
        let objDest;
        let name;
        if(toCard){
            objDest = this.formsList[indexDest[0]]["children"];
        }
        else{
            objDest = this.formsList;
        }
        if(fromCard){
            name = this.formsList[indexOrigin[0]]["children"][indexOrigin[1]]["name"];
        }
        else{
            name = this.formsList[indexOrigin[0]]["name"];
        }
        if((fromCard && toCard) || (!fromCard && !toCard)){}
        else{
            for(let item of objDest){
                if(item.name == name){
                    this.getTranslate("nameAlreadyexitsTarget")
                    .then((res:any)=>{
                        this.showToast(res);
                    })
                    this.updateState();
                    return;
                }
            }
        }
        
	    
	    //If element comes from and go to a card 
	    if(toCard && fromCard){
	        //if we stay in the same card
	        if(indexDest[0] == indexOrigin[0]){
	            // if indexDest bigger than indexOrigin
	            if(indexDest[1] > indexOrigin[1]){
	                //copy element
	                let elemToMove = this.formsList[indexOrigin[0]]["children"][indexOrigin[1]];
	                elemToMove["config"]["page"] = this.local.currentPage;
	                //paste element
	                this.formsList[indexDest[0]]["children"].splice(indexDest[1],0, elemToMove);
	                //delete element from its first position
	                this.formsList[indexOrigin[0]]["children"].splice(indexOrigin[1],1);
	            }
	            // if indexDest smaller than indexOrigin
	            else{
	              //copy element
                  let elemToMove = this.formsList[indexOrigin[0]]["children"][indexOrigin[1]];
                  elemToMove["config"]["page"] = this.local.currentPage;
                  //delete element from its first position
                  this.formsList[indexOrigin[0]]["children"].splice(indexOrigin[1],1);
                  //paste element
                  this.formsList[indexDest[0]]["children"].splice(indexDest[1],0, elemToMove);
                    
	            }
	        }
	        else{
	          //copy element
                let elemToMove = this.formsList[indexOrigin[0]]["children"][indexOrigin[1]];
                elemToMove["config"]["page"] = this.local.currentPage;
                //paste element
                this.formsList[indexDest[0]]["children"].splice(indexDest[1],0, elemToMove);
                //delete element from its first position
                this.formsList[indexOrigin[0]]["children"].splice(indexOrigin[1],1);
	        }
	    }
	    else if(!toCard && !fromCard){
                // if indexDest bigger than indexOrigin
                if(indexDest[0] > indexOrigin[0]){
                    //copy element
                    let elemToMove = this.formsList[indexOrigin[0]];
                    elemToMove["config"]["page"] = this.local.currentPage;
                    //paste element
                    this.formsList.splice(indexDest[0],0, elemToMove);
                    //delete element from its first position
                    this.formsList.splice(indexOrigin[0],1);
                }
                // if indexDest smaller than indexOrigin
                else{
                  //copy element
                  let elemToMove = this.formsList[indexOrigin[0]];
                  elemToMove["config"]["page"] = this.local.currentPage;
                  //delete element from its first position
                  this.formsList.splice(indexOrigin[0],1);
                  //paste element
                  this.formsList.splice(indexDest[0],0, elemToMove);
                    
                }
            
        }
	    else if(fromCard && !toCard){
	     // if indexDest bigger than indexOrigin
            if(indexDest[0] > indexOrigin[0]){
    	      //copy element
                let elemToMove = this.formsList[indexOrigin[0]]["children"][indexOrigin[1]];
                elemToMove["config"]["page"] = this.local.currentPage;
                //paste element
                this.formsList.splice(indexDest[0],0, elemToMove);
                elemToMove["config"]["page"] = this.local.currentPage;
                //delete element from its first position
                this.formsList[indexOrigin[0]]["children"].splice(indexOrigin[1],1);
            }
            else{
              //copy element
                let elemToMove = this.formsList[indexOrigin[0]]["children"][indexOrigin[1]];
                elemToMove["config"]["page"] = this.local.currentPage;
                //delete element from its first position
                this.formsList[indexOrigin[0]]["children"].splice(indexOrigin[1],1);
                //paste element
                this.formsList.splice(indexDest[0],0, elemToMove);
            }
        }
	    else if (!fromCard && toCard){
	      //copy element
            let elemToMove = this.formsList[indexOrigin[0]];
            elemToMove["config"]["page"] = this.local.currentPage;
            //paste element
            this.formsList[indexDest[0]]["children"].splice(indexDest[1],0, elemToMove);
            //delete element from its first position
            this.formsList.splice(indexOrigin[0],1);
        }
	    this.updateState();
	}
	
	getObjfromFormList(objB = null): any{
	    let obj = [];
	    //if(objB == null){
	       objB = this.formsList;
	    //}
	    objB.forEach((item, index)=>{
            if(item["type"] == "ion-card"){
                obj.push(item["name"]);
                item["children"].forEach((child, index2)=>{
                    obj.push(child["name"]);
                });
                
            }
            else{
                obj.push(item["name"]);
            }
        });
        return obj;

	}
	
	getlocalNumbersSorted2(item, localNumbers, defaultlabel){
        for(let i in item){
            if(item[i].indexOf(defaultlabel)!= -1){
                let whil = true;
                let cpt = 0;
                while(whil){
                    whil = this.checkStringIsANumber(item[i], cpt +1);
                    cpt++;
                }
                cpt--;
                if(cpt != 0){
                    localNumbers[i] = +item[i].substring(item[i].length - cpt);
                }
            }
        }
        
        localNumbers = localNumbers.sort((a,b)=> {
            return a - b;
        });
    }
	
	getNameDispo(prefix:string, obj = null, manual = null):string{
	    /*let localNumbers = [];
        let defualtLabel = "Checkbox";
        this.getlocalNumbersSorted(vars.item, localNumbers, defualtLabel);
        let val = this.getNextValueDispo(localNumbers);
        */
	    if(manual != true) {
	        if(obj == null){
	            obj = this.getObjfromFormList();
	        }
	        else{
	            obj = this.getObjfromFormList(obj);
	        }
	    }
        let localNumbers = [];
        this.getlocalNumbersSorted2(obj, localNumbers, prefix);
        let val = this.getNextValueDispo(localNumbers);
        return prefix+ val;
	}
	
	addElement(typ, index = null, into= false, action = false){
        if(this.formsList == undefined){
            this.formsList = [];
        }
        const id = new Date().getTime();
        let objToInsert;
        let objx = null;
        if(index != undefined){
            if(index.length == 2){
                objx= this.formsList[index[0]]["children"];
            }
        }        
        switch (typ) {
        case "description":
            objToInsert =
                    {
                        "type": "description",
                        "config": {     
                                "html":"",
                                "personalized": true,
                                "page":this.local.currentPage
                        },
                        "id": id,
                        "name": this.getNameDispo("description", objx)
                    };
            break;
            case "text":
                objToInsert = {
                        "type": typ,
                        "config": {
                            "mandatory": false,
                            "placeholder": this.local.placeholder_label,
                            "label": this.local.question,
                            "label_color": "#202124",
                            "color":"#202124",
                            "position": 'stacked',
                            "type": 'text',
                            "clearInput": false,
                            "short": true,
                            "disabled":false,
                            "html":"",
                            "personalized": false,
                            "page":this.local.currentPage
                        
                        },
                        "id": id,
                        "name": this.getNameDispo("inputText",objx)
                    };
                break;
                
            case "img":
                objToInsert = {
                            "type": typ,
                            "config": {
                                "src": "assets/images/category.png",
                                "alt": "NO IMAGE",
                                "width": "128",
                                "height": "128",
                                "mandatory": false,
                                "label": this.local.question,
                                "position": 'stacked',
                                "disabled": false,
                                "label_color": "#202124",
                                "color":"#202124",
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                            },
                            "id": id,
                            "name": this.getNameDispo("camera", objx)
                        };
                break;
                
            case "checkbox":
                objToInsert = {
                            "type": typ,
                            "children":[{"value":"Checkbox 1", "selected":true,"label_color":"#202124","position": 'unset', "id":(Math.random() + "").substring(2)},{"value":"Checkbox 2","selected":true,"label_color":"#202124","position": 'unset',"id":(Math.random() + "").substring(2)}],
                            "config": {
                                "label": this.local.question,
                                "position": 'stacked',
                                "mandatory": false,
                                "checked": false,
                                "disabled": false,
                                "label_color": "#202124",
                                "color":"#202124",
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                                
                            },
                            "id": id,
                            "name": this.getNameDispo("checkbox", objx)
                        };
                break;
            case "checkbox_group":
                objToInsert =
                        {
                            "type": "checkbox_group",
                            children:[{"value":"Option 1","selected":false,"id":(Math.random() + "").substring(2)},{"value":"Option 2","selected":false,"id":(Math.random() + "").substring(2)}],
                            
                            lines:[{"title":"Line 1","value":[],"id":(Math.random() + "").substring(2)}, {"title":"Line 2","value":[],"id":(Math.random() + "").substring(2)}, {"title":"Line 3","value":[],"id":(Math.random() + "").substring(2)}],
                            "id": id,
                            "name": this.getNameDispo("checkboxGroup", objx),
                            config:{
                                "mandatory": false,
                                "label": this.local.question,
                                "label_color": "#202124",
                                "color":"#202124",
                                "position": 'stacked',
                                "disabled": false,
                                "different":false,
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                            }
                        };
                break;
                
            case "group":
                objToInsert =
                        {
                            "type": "ion-card",
                            "config": {
                                "title":{
                                    "text":this.local.title,
                                    "position":"text-center",
                                    "label_color": "#202124",
                                    "color":"#202124",
                                    "size":"H3",
                                    "html":"",
                                    "personalized": false
                                },
                                "page":this.local.currentPage
                                
                            },
                            "children":[],
                            "id": id,
                            "name": this.getNameDispo("group", objx)
                        };
                break;
                case "title":
                objToInsert =
                        {
                            "type": "ion-title",
                            "config": {     
                                    "text":this.local.title,
                                    "position":"text-center",
                                    "label_color": "#202124",
                                    "color":"#202124",
                                    "size":"H3",
                                    "html":"",
                                    "personalized": false,
                                    "page":this.local.currentPage
                            },
                            "id": id,
                            "name": this.getNameDispo("title", objx)
                        };
                break;
                
                case "label":
                objToInsert =
                        {
                            "type": "ion-label",
                            "config": {     
                                    "text":this.local.placeholder_label2,
                                    "label_color": "#202124",
                                    "color":"#202124",
                                     "position": 'unset',
                                     "disabled":false,
                                     "html":"",
                                     "personalized": false,
                                     "page":this.local.currentPage
                            },
                            "id": id,
                            "name": this.getNameDispo("label", objx)
                        };
                break;
                
                case "radio":
                objToInsert =
                        {
                            "type": "radio",
                            children:[{"value":"Option 1", "selected":true,"label_color":"#202124","position": 'unset',"id":(Math.random() + "").substring(2)},{"value":"Option 2","selected":false,"label_color":"#202124","position": 'unset',"id":(Math.random() + "").substring(2)}],
                            "id": id,
                            "name": this.getNameDispo("radiolist", objx),
                            config:{
                                "mandatory": false,
                                "label": this.local.question,
                                "label_color": "#202124",
                                "color":"#202124",
                                "position": 'stacked',
                                "disabled": false,
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                            }
                        };
                break;
                case "radio_group":
                    objToInsert =
                            {
                                "type": "radio_group",
                                children:[{"value":"Option 1","id":(Math.random() + "").substring(2)},{"value":"Option 2","id":(Math.random() + "").substring(2)}],
                                lines:[{"title":"Line 1","value":"","id":(Math.random() + "").substring(2)}, {"title":"Line 2","value":"","id":(Math.random() + "").substring(2)}, {"title":"Line 3","value":"","id":(Math.random() + "").substring(2)}],
                                "id": id,
                                "name": this.getNameDispo("radioGroup", objx),
                                config:{
                                    "mandatory": false,
                                    "label": this.local.question,
                                    "label_color": "#202124",
                                    "color":"#202124",
                                    "position": 'stacked',
                                    "disabled": false,
                                    "different":false,
                                    "html":"",
                                    "personalized": false,
                                    "page":this.local.currentPage
                                }
                            };
                    break;
                
                case "radiobt":
                objToInsert =
                        {
                            "type": "radiobt",
                            "config": {
                                "value":"value1",
                                "disabled":false,
                                "checked":false,
                                "text":"Label1",
                                "label_color": "#202124",
                                "color":"#202124",
                                "position": 'unset',
                                "mandatory": false,
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage

                            },
                            "id": id,
                            "name": this.getNameDispo("radiobt", objx)
                        };
                break;
                case "datetime":
                objToInsert =
                        {
                            "type": "datetime",
                            "config": {
                                "day_names":['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'],
                                "display_format":"DD/MM/YYYY",
                                "max_datetime":"2050-01-01",
                                "min_datetime":"1970-01-01",
                                "month_names":['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                "picker_format":"DD/MM/YYYY",
                                "placeholder":"Datetime",
                                "mandatory": false,
                                "label": this.local.question,
                                "label_color": "#202124",
                                "color":"#202124",
                                "position": 'stacked',
                                "disabled": false,
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                            },
                            "id": id,
                            "name": this.getNameDispo("datetime", objx)
                        };
                break;
                case "time":
                    objToInsert =
                            {
                                "type": "time",
                                "config": {
                                    "display_format":"HH:mm:ss",
                                    "picker_format":"HH:mm:ss",
                                    "placeholder":"Time",
                                    "mandatory": false,
                                    "label": this.local.question,
                                    "label_color": "#202124",
                                    "color":"#202124",
                                    "position": 'stacked',
                                    "disabled": false,
                                    "html":"",
                                    "personalized": false,
                                    "page":this.local.currentPage

                                },
                                "id": id,
                                "name": this.getNameDispo("time", objx)
                            };
                    break;
                case "textarea":
                objToInsert =
                        {
                            "type": "textarea",
                            "config": {
                                "placeholder":this.local.placeholder,
                                "mandatory": false,
                                "label": "Nom",
                                "label_color": "#202124",
                                "color":"#202124",
                                "position": "stacked",
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                                

                            },
                            "id": id,
                            "name": this.getNameDispo("textarea", objx)
                        };
                break;
                case "signature":
                objToInsert =
                        {
                            "type": "signature",
                            "config": {
                                "mandatory": false,
                                "label": this.local.question,
                                "position": 'stacked',
                                "disabled": false,
                                "label_color": "#202124",
                                "color":"#202124",
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                            },
                            "id": id,
                            "name": this.getNameDispo("signature", objx)
                        };
                break;
                case "barcode":
                objToInsert =
                        {
                            "type": "barcode",
                            "config": {
                                "value":"",
                                "placeholder":this.local.placeholder_label,
                                "text":"Barcode",
                                "mandatory": false,
                                "label": this.local.question,
                                "label_color": "#202124",
                                "color":"#202124",
                                "position": 'stacked',
                                "disabled": false,
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                            },
                            "id": id,
                            "name": this.getNameDispo("barcode", objx)
                        };
                break;
                case "slider":
                objToInsert =
                        {
                            "type": "slider",
                            "config": {
                                "debounce":0,
                                "defaultvalue":0,
                                "max": 100,
                                "min":0,
                                "pin": false,
                                "snaps":false,
                                "step":1,
                                "mandatory": false,
                                "label": this.local.question,
                                "position": 'stacked',
                                "disabled": false,
                                "label_color": "#202124",
                                "color":"#202124",
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                            },
                            "id": id,
                            "name": this.getNameDispo("slider", objx)
                        };
                break;
                case "select":
                objToInsert =
                        {
                            "type": "select",
                            "config": {
                                "mandatory": false,
                                "cancelText":"Cancel",
                                "okText":"OK",
                                "type":"popover",
                                "placeholder":this.local.placeholder_resp,
                                "label": this.local.question,
                                "label_color": "#202124",
                                "color":"#202124",
                                "position": 'stacked',
                                "disabled": false,
                                "html":"",
                                "personalized": false,
                                "page":this.local.currentPage
                            },
                            actions: {},
                            children:[{"value":"Option 1", "selected":false,"id":(Math.random() + "").substring(2)},{"value":"Option 2","selected":false,"id":(Math.random() + "").substring(2)}],
                            "id": id,
                            "name": this.getNameDispo("select", objx)
                        };
                break;
                case "file":
                    objToInsert =
                            {
                                "type": "file",
                                "config": {
                                    "mandatory": false,
                                    "multiple": false,
                                    "placeholder": this.local.placeholderFile,
                                    "label": this.local.question,
                                    "label_color": "#202124",
                                    "color":"#202124",
                                    "position": 'stacked',
                                    "disabled": false,
                                    "html":"",
                                    "personalized": false,
                                    "page":this.local.currentPage
                                },
                                "id": id,
                                "name": this.getNameDispo("file", objx)
                            };
                    break;
                case "submit":
                    objToInsert =
                            {
                                "cat":"action",
                                "type": "submit",
                                "actions":{},
                                "config":{
                                    "page":this.local.currentPage},
                                "id": id,
                                "name": this.getNameDispo("submit", objx)
                            };
                    break;
                
            default:
                break;
        }
        if(!action){
            if(index != null && objToInsert != null){
                if(index[1] != null){
                    if(index[2]!= null){
                        this.formsList[index[0]]["children"][index[1]]["children"].splice(index[2], 0, objToInsert);
                    }
                    else{
                        this.formsList[index[0]]["children"].splice(index[1], 0, objToInsert);
                    }
                }
                else{
                    this.formsList.splice(index, 0, objToInsert);
                }
            }
            else{
                this.formsList.push(objToInsert);
            }
        }
        else{
            if(this.form.actions == undefined){
                this.form.actions = [];
            }
            this.form.actions.push(objToInsert);
        }
       
        // After having modifying Object, update its state with fs base
        this.updateState();
        
    }
	
	delElementIndex(i,j= null, k=null){
		if(k != null){
			this.formsList[this.getElementIndexById(i.id)]["children"][this.getElementIndexById(i.id,j.id)]["children"].splice(this.getElementIndexById(i.id,j.id,k.id),1);
		}
		else if(j != null){
			this.formsList[this.getElementIndexById(i.id)]["children"].splice(this.getElementIndexById(i.id,j.id),1);
		}
		else{
			this.formsList.splice(this.getElementIndexById(i.id), 1);
		}
		this.updateState();
		
	}
	
	swapElement(from, to){
        this.formsList.splice(to, 0, this.formsList.splice(from, 1)[0])
        // After having modifying Object, update its state with fs base
        this.updateState();
	}
	
	getArrayElem(el){
	    if(el instanceof Array){
	        return el;
	    }
	    else if(el != undefined){
	        return [el];
	    }
	    else{
	        return [];
	    }
	}
	getCommentAtIndex(el, i){
	    if(el instanceof Array){
            return el[i];
        }
	    else{
	        return el;
	    }
	}
	
	public getHtmlComment(str: string){
	    if(str != undefined){
	        var htmlObject = document.createElement('div');
	        htmlObject.innerHTML = str;
	        var lang = (window.localStorage.getItem("lang") == undefined || window.localStorage.getItem("lang") == "undefined" || window.localStorage.getItem("lang") == "") ? "en" : window.localStorage.getItem("lang") ;
	        var innerHtml;
	        try{
	            innerHtml = htmlObject.getElementsByClassName(lang).item(0).innerHTML;
	        }
	        catch(e){
	            innerHtml = str;
	        }
	        return innerHtml;
	    }
	    return str;
	    
	}
	public lengthOk(obj: any){
	    try{
	        return Object.keys(obj).length > 0;
	    }
	    catch(e){
	        return false;
	    }
	   
	}
	
	public getItemNameById(field: any){
	    try{
	        if(field.source == true){
	            for(let key of Object.keys(this.form.formulaire)){
	                if(this.form.formulaire[key].id == field.str){
	                    //console.log(this.navParams.data.form.formulaire[key]);
	                    return this.form.formulaire[key].name;
	                }
	                else if(this.form.formulaire[key].type == "ion-card"){
	                    for(let keyChild of Object.keys(this.form.formulaire[key]["children"])){
	                        if(this.form.formulaire[key]["children"][keyChild].id == field.str){
	                            return this.form.formulaire[key]["children"][keyChild].name;
	                        }
	                    }
	                }
	            }
	        }
	        else{
	            return field.str != undefined ? field.str : "";
	        }
	        
	        return "";
	    }
	    catch(e){
	        return "";
	    }
        
    }
	
	
	public findAvailableActions(actions){
	    //params1586443759128.item.actions[item.name + '.' + child.name] != undefined ? params1586443759128.item.actions[item.name + '.' + child.name]['enabled'] : false
	    if(actions != undefined && Object.keys(actions).length > 0){
	        for(let elem in actions){
	            if(actions[elem]["enabled"] == true || actions[elem]["enabled"] == "true"){
	                return false;
	            }
	        }	        
	    }
	    return true;
	            
	}
	getEnabled(actions){
	    for(let elem in actions){
	        if(actions[elem].enabled == true){
	            return elem;
	        }
	    }
	}
	public getSequenceByName(sequence, name){
	    for(let i in sequence){
	        if(sequence[i].name == name){
	            return i;
	        }
	    }
	}
	public getCommentByName(actions){
	    try{
	        let str = this.getEnabled(actions);
	        let name = str.split(".")[0]
	        
	        for(let i in this.local.tree){
	            if(this.local.tree[i].name == name){
	                let iSeq = this.getSequenceByName(this.local.tree[i].sequences, str.split(".")[1])
	                return this.local.tree[i].sequences[iSeq]["variables"].comment[this.local.index]
	            }
	        }
	    }
	    catch(e){
	        return ""
	    }
	    
	}
	public getTypeByActions(actions){
	    try{
	        let str = this.getEnabled(actions);
	        let name = str.split(".")[0]
	        
	        for(let i in this.local.tree){
	            if(this.local.tree[i].name == name){
	                let iSeq = this.getSequenceByName(this.local.tree[i].sequences, str.split(".")[1])
	                return this.local.tree[i].sequences[iSeq]["variables"].type[this.local.index]
	            }
	        } 
	    }
	    catch(e){
	        return "";
	    }
    }
	
	public getKeyIndex(entry){
	    // entry: props.stack.root.scope.params1586443759128.item.actions
	    //params1586443759128.item.actions[this.getEnabled(params1586443759128.item.actions)]['vars'][baby]
	    
	    try{
	        let name = this["getEnabled"](entry);
	        let keyIndex = (Object.keys(entry[name]['vars'])[this.local.index]);
	        return entry[name]['vars'][keyIndex];
	    }
	    catch(e){
	        return "";
	    }
	}
	
	public keyIndex(entry){
	    let name = this["getEnabled"](entry);
	    return (Object.keys(entry[name]['vars'])[this.local.index]);
	}
	
	getElementNameById(id){
	    for(let elem of this.form.formulaire){
	        if(elem.type == "ion-card"){
	            for(let child of elem.children){
	                if(+id == child.id){
	                    return child.name;
	                } 
	            }
	        }
	        else{
	            if(+id == elem.id){
	                return elem.name;
	            }
	        }
	    }
	    return "";
	}
	
	public getBadge(id, name){
	    return '<'+ this.local.tagName +' '+this.local.tagId+'="'+id+'" class="styleBadge badge badge-md badge-md-convertigo" color="convertigo" contenteditable="false">'+name+'</'+ this.local.tagName +'>';
	}
	
	public transform$toHtml(str): string{
	    try{
	        const regex = /[$$]{2}\w+[$$]{2}/gm
	            let arrayFound = str.match(regex);
	            if(arrayFound!= undefined && arrayFound.length > 0){
	                for(let elem of arrayFound){
	                    let iStart = str.indexOf(elem);
	                    let iEnd = iStart + elem.length;
	                    let id = elem.substring(2, elem.length -2);
	                    let val = this.getElementNameById(id);
	                    if(val != ""){
	                        str = str.substring(0, iStart) + this.getBadge(id, val) + str.substring(iEnd);
	                    }
	                }
	                return str;
	            }
	            else{
	                if(str == undefined){
	                    return "";
	                }
	                else{
	                    return str;    
	                }
	                
	            }
	    }
	    catch(e){
	        this.c8o.log.error("An error occurend into transform$toHtml: \n see: \n "+ JSON.stringify(e));
	        return "";
	    }
	}
	
	public transformHtmlto$(html): string{
	    try{
	        let continueV = true;
	        while(continueV){
	            let startIndex = html.indexOf('<'+this.local.tagName+' '+this.local.tagId+'=');
	            let endIndex = html.indexOf('</'+this.local.tagName+'>', startIndex) + (3 + this.local.tagName.length); 
	            if(startIndex != -1 && endIndex != -1){
	                let myEl = html.substring(startIndex, endIndex);
	                const parser = new DOMParser();
	                const xmlDoc = parser.parseFromString(myEl, "application/xml");
	                let id = (document.evaluate( '//'+this.local.tagName+'/@'+this.local.tagId, xmlDoc, null, XPathResult.STRING_TYPE, null )).stringValue;
	                html = html.substring(0, startIndex) + "$$"+id+"$$" + html.substring(endIndex);
	            }
	            else{
	                continueV = false;
	            }
	        }
	        return html;
	    }
	    catch(e){
	        this.c8o.log.error("An error occurend into transformHtmlto$: \n see: \n "+ JSON.stringify(e));
	        return "";
	    }
	}
	/*End_c8o_PageFunction*/
	
	ngOnDestroy() {
		editorPage.nbInstance--;
		if (editorPage.nbInstance <= 0) {
			this.events.unsubscribe('updateWallpaper');
			this.events.unsubscribe('tinyMceNgModelChange');
			editorPage.nbInstance = 0;
		}
		super.ngOnDestroy();
	}
	
	
	ionViewWillEnter() {
		super.ionViewWillEnter();
		this.getInstance(Platform).ready().then(()=>{
			this.ATS1588603040568({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1596620600722({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1588600997422({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587630584220({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1586424184507({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1570713732469({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587564387268({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587564387283({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587564387298({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587564387313({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587564387328({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587564387343({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587564387358({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587629648504({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587629707364({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587629733712({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587629760959({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587629801668({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587629833951({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587629837581({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587568761679({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587630014353({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587630549302({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587630549305({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587630549308({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587630549311({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1587630549314({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
			this.ATS1592406284664({root: {scope:{}, in:{}, out:'ionViewWillEnter'}});
		});
	}


	ionViewCanEnter() {
		super.ionViewCanEnter();
		return new Promise((resolve, reject)=>{
			this.getInstance(Platform).ready().then(()=>{
				Promise.all([
					this.ATS1584094766592({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
,					this.ATS1572275058039({root: {scope:{}, in:{}, out:'ionViewCanEnter'}})
				])
				.then((resp)=>{
					let ret = resp.find((item) => {return item === false;});
					resolve(ret === false ? false : true);
				});
			});
		});
	}



	/**
	 * Function ATS1607084906752
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1607084906752(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1607084906752: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1607084906752: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1607084906752: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1607084906752: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1607084906752"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.spinner == false`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["SetGlobal"] = stack["1607084906755"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `c8oPage.form['wallpaper']['index']`), Property: get('Property', `'indexwall'`)}, vars:{}};
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
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal1"] = stack["1607084906758"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `c8oPage.form['wallpaper']['enabled'] != undefined ? c8oPage.form['wallpaper']['enabled'] : false`), Property: get('Property', `'enabledTemp'`)}, vars:{}};
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
		,
		new Promise((resolve, reject) => {
		let self: any = stack["wallType"] = stack["1607084906761"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'wallType', actionFunction: 'SetGlobalAction', Value: get('Value', `c8oPage.form.wallpaper.type`), Property: get('Property', `'wallType'`)}, vars:{}};
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
		,
		new Promise((resolve, reject) => {
		let self: any = stack["wallType1"] = stack["1607084906764"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'wallType1', actionFunction: 'SetGlobalAction', Value: get('Value', `c8oPage.form._id`), Property: get('Property', `'imgIndex'`)}, vars:{}};
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
		,
		new Promise((resolve, reject) => {
		let self: any = stack["wallType2"] = stack["1607084906767"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'wallType2', actionFunction: 'SetGlobalAction', Value: get('Value', `c8oPage.form.wallpaper.color`), Property: get('Property', `'wallColor'`)}, vars:{}};
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
		])
		}, (error: any) => {this.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		this.c8o.log.debug("For 'IfElse' condition is not verified. No Else handler, skipping and resolve false");
		resolve(false)
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1607084906752: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
				return new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1607084906743"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.spinner == false`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["ModalPage"] = stack["1607084906746"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: null, cssClass: get('cssClass', `'mymodal'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.wallPaperSelection'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
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
		this.c8o.log.debug("For 'IfElse' condition is not verified. No Else handler, skipping and resolve false");
		resolve(false)
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1607084906752: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1607084906752: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1607093103115
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1607093103115(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1607093103115: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1607093103115: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1607093103115: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1607093103115: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1607093103115"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606843476348'}, vars:{selectedForm: get('selectedForm', `c8oPage.form`)}};
		return this.actionBeans.STS1606843476348(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["RootPage"] = stack["1607094345069"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1606843476348 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1607093103115: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1607093103115: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1607084913978
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1607084913978(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1607084913978: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1607084913978: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1607084913978: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1607084913978: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1607084913978"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554977978587'}, vars:{noCondition: get('noCondition', `false`), path: get('path', `'obj.form.name'`), obj: get('obj', `this`)}};
		return this.actionBeans.STS1554977978587(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1607084913990"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554977978587 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1607084913978: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1607084913978: ended"); resolveP(res)});
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
	CTS1607084914026(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1607084914026*/
		this.local.hideHeader = true;
		this.ref.detectChanges();
		setTimeout(()=>{
		    this.ref.detectChanges();
		}, 1000)
		resolve();
		/*End_c8o_function:CTS1607084914026*/
		});
	}


	/**
	 * Function dragleave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1607085877743(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1607085877743*/
			this.c8o.log.debug("Dragleave called to supress highlighting");
		    const oldElem = document.getElementById(this.local["currentHighlight"]);
	        if(oldElem != null){
	            oldElem.style["border-color"] = null;
	            oldElem.style["border-style"] = null;
	        }
	        this.local["currentHighlight"] = "";
		/*End_c8o_function:CTS1607085877743*/
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
	CTS1600679672785(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600679672785*/
		this.local.hideHeader = false;
		this.ref.detectChanges();
		resolve();
		/*End_c8o_function:CTS1600679672785*/
		});
	}


	/**
	 * Function ATS1592491040182
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592491040182(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592491040182: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592491040182: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592491040182: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592491040182: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1592491040182"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1592491040182'}, vars:{}};
		return this.CTS1592491040182(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["Alert"] = stack["1592490477371"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Alert', actionFunction: 'AlertAction', css1: null, css2: null, button2: get('button2', `c8oPage.local.yes`), button3: null, value2: get('value2', `'yes'`), value1: get('value1', `'no'`), value3: null, title: get('title', `c8oPage.local.deletePageConfirm`), message: null, enableBackdropDismiss: get('enableBackdropDismiss', `true`), cancel3: null, cancel2: null, subTitle: null, cssClass: null, cancel1: get('cancel1', `'cancel'`), button1: get('button1', `c8oPage.local.no`), css3: null}, vars:{}};
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
		let self: any = stack["CustomAction"] = stack["1592490887611"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1592490887611'}, vars:{}};
		return this.CTS1592490887611(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592491500995"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592490887611 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] AlertAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592491040182 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592491040182: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592491040182: ended"); resolveP(res)});
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
	CTS1592491040182(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592491040182*/
		page.local["yes"] = this.translate.instant('oui');
        page.local["no"] = this.translate.instant('non');
        page.local["deletePageConfirm"] = this.translate.instant('deletePageConfirm');
		resolve();
		/*End_c8o_function:CTS1592491040182*/
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
	CTS1592490887611(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592490887611*/
		if(props.out == "yes"){
		    for(let i in page["formsList"]){
		        if(page["formsList"][i]["config"]["page"] == page.local["currentPage"]){
		            page["formsList"].splice(i, 1);
		        }
		    }
		    let countPage = Object.keys(page["form"]["pages"]).length -1;
		    for(let i in page["form"]["pages"]){
		        if(page["form"]["pages"][i]["pageTechName"] == page.local["currentPage"]){
		            page["form"]["pages"].splice(i, 1);
		            if(page["form"]["pages"].length == 0){
		                page["form"]["pages"].push({"name":"Page 1", "pageTechName": "Page"+new Date().getTime(), desc:''})
		            }
		            if(+i == 0){
		                page.local["currentPage"] = page["form"]["pages"][i]["pageTechName"];
		            }
		            else{
		                if(+i == countPage){
	                        page.local.currentIndex = +i -1;
	                    }
		                page.local["currentPage"] = page["form"]["pages"][(+i -1)+""]["pageTechName"];
		            }
		        }
		        
		    }
		    
		}
		resolve();
		/*End_c8o_function:CTS1592490887611*/
		});
	}


	/**
	 * Function ATS1592509318186
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592509318186(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592509318186: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592509318186: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592509318186: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592509318186: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["allowDrop"] = stack["1592509318186"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'allowDrop', actionFunction: 'CTS1592509318186'}, vars:{}};
		return this.CTS1592509318186(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1592512588892"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out === true`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1592512588895"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592509318186 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592509318186: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592509318186: ended"); resolveP(res)});
		});
	}

	/**
	 * Function allowDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592509318186(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592509318186*/
		    if(event.dataTransfer.types.includes("__pagec8oformsdrag")){
	            if(page.local.styleDragOverPAge != props.stack.root.scope.i){
	                page.local.styleDragOverPAge =  props.stack.root.scope.i;
	                event.preventDefault();
	                resolve(true);    
	            }
	            else{
	                event.preventDefault();
	                resolve();
	            }
	            
	        }
	        else{
	            resolve();
	        }
		/*End_c8o_function:CTS1592509318186*/
		});
	}


	/**
	 * Function ATS1592511224333
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592511224333(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592511224333: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592511224333: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592511224333: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592511224333: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["drop"] = stack["1592511224333"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'drop', actionFunction: 'CTS1592511224333'}, vars:{}};
		return this.CTS1592511224333(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592511224339"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592511224342"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592511224333 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592511224333: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592511224333: ended"); resolveP(res)});
		});
	}

	/**
	 * Function drop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592511224333(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592511224333*/
		event.preventDefault();
		this.c8o.log.debug("Dropped into before level0");
		const origin = event.dataTransfer.getData("index");
		const dest = props.stack.root.scope.i;
		page.local.styleDragOverPAge = null;
		
		let diff = ((+origin+1) - (+dest + 1)) > 0 ? 1 : 0;
		this['form']['pages'].splice(+dest, 0, this['form']['pages'][origin]);
		this['form']['pages'].splice(+origin + diff, 1);
		console.log(props);
		resolve();
		/*End_c8o_function:CTS1592511224333*/
		});
	}


	/**
	 * Function ATS1592486697059
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592486697059(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592486697059: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592486697059: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592486697059: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592486697059: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1592486697059"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1592486697059'}, vars:{}};
		return this.CTS1592486697059(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592487129419"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592486697059 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592486697059: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592486697059: ended"); resolveP(res)});
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
	CTS1592486697059(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592486697059*/
		page.local.currentPage = props.stack.root.scope.item.pageTechName;
		page.local.currentIndex = props.stack.root.scope.i;
		resolve();
		/*End_c8o_function:CTS1592486697059*/
		});
	}


	/**
	 * Function ATS1592509507322
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592509507322(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592509507322: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592509507322: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592509507322: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592509507322: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["allowDrop"] = stack["1592509507322"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'allowDrop', actionFunction: 'CTS1592509507322'}, vars:{}};
		return this.CTS1592509507322(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1592512231067"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out === true`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1592512248475"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592509507322 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592509507322: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592509507322: ended"); resolveP(res)});
		});
	}

	/**
	 * Function allowDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592509507322(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592509507322*/
		if(event.dataTransfer.types.includes("__pagec8oformsdrag")){
		    if(page.local.styleDragOverPAge != props.stack.root.scope.i){
		        page.local.styleDragOverPAge =  props.stack.root.scope.i;
	            event.preventDefault();
	            resolve(true);    
		    }
		    else{
		        event.preventDefault();
		        resolve();
		    }
		    
		}
		else if(event.dataTransfer.types.includes("__c8oformsdrag")){
		    page.local.currentPage = props.stack.root.scope.item.pageTechName;
		    page.local.currentIndex = props.stack.root.scope.i;
		    resolve(true);
		}
		else{
		    resolve();
		}
		
		/*End_c8o_function:CTS1592509507322*/
		});
	}


	/**
	 * Function ATS1592509507328
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592509507328(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592509507328: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592509507328: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592509507328: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592509507328: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["drop"] = stack["1592509507328"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'drop', actionFunction: 'CTS1592509507328'}, vars:{}};
		return this.CTS1592509507328(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592510473357"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592510475627"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592509507328 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592509507328: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592509507328: ended"); resolveP(res)});
		});
	}

	/**
	 * Function drop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592509507328(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592509507328*/
		event.preventDefault();
		this.c8o.log.debug("Dropped into before level0");
		const origin = event.dataTransfer.getData("index");
		const dest = props.stack.root.scope.i;
		page.local.styleDragOverPAge = null;
		
		let diff = ((+origin+1) - (+dest + 1)) > 0 ? 1 : 0;
		this['form']['pages'].splice(+dest, 0, this['form']['pages'][origin]);
		this['form']['pages'].splice(+origin + diff, 1);
		console.log(props);
		resolve();
		/*End_c8o_function:CTS1592509507328*/
		});
	}


	/**
	 * Function ATS1592511839008
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592511839008(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592511839008: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592511839008: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592511839008: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592511839008: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["allowDrop"] = stack["1592511839008"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'allowDrop', actionFunction: 'CTS1592511839008'}, vars:{}};
		return this.CTS1592511839008(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592512271991"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592511839008 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592511839008: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592511839008: ended"); resolveP(res)});
		});
	}

	/**
	 * Function allowDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592511839008(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592511839008*/
		page.local.styleDragOverPAge =  null;
		resolve();
		/*End_c8o_function:CTS1592511839008*/
		});
	}


	/**
	 * Function ATS1600790001481
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600790001481(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600790001481: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600790001481: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600790001481: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600790001481: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1600790001481"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1600790001481'}, vars:{}};
		return this.CTS1600790001481(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600790001484"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600790001481 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600790001481: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600790001481: ended"); resolveP(res)});
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
	CTS1600790001481(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600790001481*/
		page.local.currentPage = 'actions';
		page.local.currentIndex = this.form.pages.length+1;
		resolve();
		/*End_c8o_function:CTS1600790001481*/
		});
	}


	/**
	 * Function ATS1600790001490
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600790001490(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600790001490: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600790001490: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600790001490: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600790001490: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["allowDrop"] = stack["1600790001490"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'allowDrop', actionFunction: 'CTS1600790001490'}, vars:{}};
		return this.CTS1600790001490(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1600790001493"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out === true`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1600790001496"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600790001490 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600790001490: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600790001490: ended"); resolveP(res)});
		});
	}

	/**
	 * Function allowDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600790001490(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600790001490*/
		if(event.dataTransfer.types.includes("__pagec8oformsdrag")){
                if(page.local.styleDragOverPAge != this['form']['pages'].length+1){
                    page.local.styleDragOverPAge =  this['form']['pages'].length+1;
                    event.preventDefault();
                    resolve(true);    
                }
                else{
                    event.preventDefault();
                    resolve();
                }
                
            }
		else if(event.dataTransfer.types.includes("__c8oformsdragactions")){
            //page.local.currentPage = this['form']['pages'][this['form']['pages'].length+1].pageTechName;
            page.local.currentPage = 'actions';
            page.local.currentIndex = this['form']['pages'].length+1;
            resolve(true);
        }
        else{
            resolve();
        }
            
		
		/*End_c8o_function:CTS1600790001490*/
		});
	}


	/**
	 * Function ATS1600790001508
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600790001508(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600790001508: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600790001508: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600790001508: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600790001508: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["drop"] = stack["1600790001508"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'drop', actionFunction: 'CTS1600790001508'}, vars:{}};
		return this.CTS1600790001508(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600790001514"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600790001517"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600790001508 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600790001508: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600790001508: ended"); resolveP(res)});
		});
	}

	/**
	 * Function drop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600790001508(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600790001508*/
		event.preventDefault();
		this.c8o.log.debug("Dropped into before level0");
		const origin = event.dataTransfer.getData("index");
		const dest = this['form']['pages'].length +1;
		page.local.styleDragOverPAge = null;
		
		let diff = ((+origin+1) - (+dest + 1)) > 0 ? 1 : 0;
		this['form']['pages'].splice(+dest, 0, this['form']['pages'][origin]);
		this['form']['pages'].splice(+origin + diff, 1);
		console.log(props);
		resolve();
		/*End_c8o_function:CTS1600790001508*/
		});
	}


	/**
	 * Function ATS1600790019863
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600790019863(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600790019863: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600790019863: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600790019863: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600790019863: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1600790019863"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1600790019863'}, vars:{}};
		return this.CTS1600790019863(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600790019866"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600790019863 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600790019863: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600790019863: ended"); resolveP(res)});
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
	CTS1600790019863(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600790019863*/
		 /*   let label = "Page ";
		    let cpt = 1;
		for(let elem in page['form']['pages']){
		    if(page['form']['pages'][elem].name == label+i)
		}*/
		
		let list = page['form']['pages'].map(x=> x.name);
		let name = this.getNameDispo("Page ", list, true);
		page['form']['pages'].push({name:name, pageTechName: "Page"+new Date().getTime(), desc:''});
		resolve();
		/*End_c8o_function:CTS1600790019863*/
		});
	}


	/**
	 * Function ATS1600790019884
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600790019884(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600790019884: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600790019884: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600790019884: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600790019884: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["drop"] = stack["1600790019884"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'drop', actionFunction: 'CTS1600790019884'}, vars:{}};
		return this.CTS1600790019884(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600790019887"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600790019890"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600790019884 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600790019884: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600790019884: ended"); resolveP(res)});
		});
	}

	/**
	 * Function drop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600790019884(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600790019884*/
		event.preventDefault();
		this.c8o.log.debug("Dropped into before level0");
		const origin = event.dataTransfer.getData("index");
		const dest = this['form']['pages'].length +1;
		page.local.styleDragOverPAge = null;
		
		let diff = ((+origin+1) - (+dest + 1)) > 0 ? 1 : 0;
		this['form']['pages'].splice(+dest, 0, this['form']['pages'][origin]);
		this['form']['pages'].splice(+origin + diff, 1);
		console.log(props);
		resolve();
		/*End_c8o_function:CTS1600790019884*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592826883017(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592826883017*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1592826883017*/
		});
	}


	/**
	 * Function ATS1592827273107
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592827273107(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592827273107: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592827273107: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592827273107: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592827273107: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1592827273107"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1592827273107'}, vars:{}};
		return this.CTS1592827273107(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592827925539"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1592827942315"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1592827273107 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592827273107: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592827273107: ended"); resolveP(res)});
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
	CTS1592827273107(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592827273107*/
		    let currentIndex = this.local['currentIndex'];
    		let beforeVal = this.form.pages[currentIndex];
    		let bad = false;
    		for(let i in this.form.pages){
    		    if((this.form.pages[+i].name == event.srcElement.value && +i != currentIndex) || ""+ event.srcElement.value.trim() == ""){
    		        console.log("badValue");
    		        this.form.pages[currentIndex].name = beforeVal.name + " ";
    		        this.form.pages[currentIndex].name = beforeVal.name;
    		        bad = true;
    		        resolve({"badValue":true})
    		        this.getTranslate("nameAlreadyexits")
                    .then((res:any)=>{
                        this.showToast(res);
                    });
    		    }
    		}
    		if(!bad){
    		    this.form.pages[currentIndex].name = event.srcElement.value;
    		    resolve({"badValue":false})
    		}
		/*End_c8o_function:CTS1592827273107*/
		});
	}


	/**
	 * Function ATS1584094766592
	 *   Do not delete or disable !!
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1584094766592(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1584094766592: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1584094766592: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1584094766592: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1584094766592: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["initialization"] = stack["1584094766592"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'initialization', actionFunction: 'CTS1584094766592'}, vars:{}};
		return this.CTS1584094766592(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1584094766592 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1584094766592: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1584094766592: ended"); resolveP(res)});
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
	CTS1584094766592(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1584094766592*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		resolve();
		/*End_c8o_function:CTS1584094766592*/
		});
	}


	/**
	 * Function closeDescription
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600425767145(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600425767145*/
		this.idselected = "";
		this.tick();
		resolve();
		/*End_c8o_function:CTS1600425767145*/
		});
	}


	/**
	 * Function setIdSelectedSettings
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1584610224781(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1584610224781*/
		this.idselected = "settings";
		this.tick();
		console.log("CTS1584564023677: \n this.idselected == " + this.idselected +"\n" + "this.tick done")
		resolve();
		/*End_c8o_function:CTS1584610224781*/
		});
	}


	/**
	 * Function setIdSelectedSettings
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1585232046049(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1585232046049*/
		this.idselected = "settings";
		this.tick();
		console.log("CTS1584564023677: \n this.idselected == " + this.idselected +"\n" + "this.tick done")
		resolve();
		/*End_c8o_function:CTS1585232046049*/
		});
	}


	/**
	 * Function allowDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600442667549(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600442667549*/
		if(vars.card == true){
		    if(event.dataTransfer.types.includes("__c8oformsdrag")){
                if(event.dataTransfer.types.includes("group")){
                    //this.c8o.log.debug("dropping  card into another card is not authorized");
                }
                else if(event.dataTransfer.types.includes("ion-card")){
                    //this.c8o.log.debug("dropping  card into another card is not authorized");
                }
                else{
                    event.preventDefault();
                    page["recursive"](event.target, "before");
                }
            }

		}
		else{
		    if(event.dataTransfer.types.includes("__c8oformsdrag")){    
	            event.preventDefault();
	            page["recursive"](event.target, "before");
	        }  
		}
		resolve();
		/*End_c8o_function:CTS1600442667549*/
		});
	}


	/**
	 * Function drop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600442667555(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600442667555*/
		if(vars.card){
		    if(vars.index.length > 1){
		        event.preventDefault();
		        const origin = event.dataTransfer.getData("origin");
		        switch(origin){
		        case "new":
		            page["addElement"](event.dataTransfer.getData("type"), vars.index);
		            break;
		        case "moved":
		            let idx = event.dataTransfer.getData("index");
		            let arr = [];
		            if(idx.length > 1){
		                arr[0] = +idx.substring(0,1);
		                arr[1] = +idx.substring(2,3);
		                if(idx.length == 5){
		                    arr[2] = +idx.substring(4,5)
		                }
		            }
		            else{
		                arr[0] = +idx;
		            }
		            page["moveElement"](vars.index,arr);
		            break;
		        case "copied":
		            break;
		        }
		        const oldElem = document.getElementById(page.local["currentHighlight"]);
		        if(oldElem != null){
		            oldElem.style["border-color"] = null;
		            oldElem.style["border-style"] = null;
		        }
		    }
		    else{
		        event.preventDefault();
	            //page.c8o.log.debug("Dropped into before level1 into a card");
	            const origin = event.dataTransfer.getData("origin");
	            switch(origin){
	            case "new":
	                this.c8o.log.debug("Origin is new");
	                let array = [vars.index,0];
	                if(page["formsList"][vars.index]["children"].length > 0){
	                    array[1] = page["formsList"][vars.index]["children"].length
	                }
	                page["addElement"](event.dataTransfer.getData("type"), array);
	                break;
	            case "moved":
	                page.c8o.log.debug("Origin is moved");
	                let arr0 = [vars.index,0];
	                let arr;
	                if(event.dataTransfer.getData("index").indexOf(",") != -1){
	                    if(event.dataTransfer.getData("index").length == 5){
	                        arr = [+event.dataTransfer.getData("index").substring(0,1), +event.dataTransfer.getData("index").substring(2,3), +event.dataTransfer.getData("index").substring(4,5)];
	                    }
	                    else{
	                        arr = [+event.dataTransfer.getData("index").substring(0,1), +event.dataTransfer.getData("index").substring(2,3)];
	                    }
	                }
	                else{
	                    arr = [+event.dataTransfer.getData("index")];
	                }
	                if(page["formsList"][vars.index]["children"].length > 0){
	                    arr0[1] = page["formsList"][vars.index]["children"].length;
	                }          
	                page["moveElement"](arr0, arr);
	                break;
	            case "copied":
	                this.c8o.log.debug("Object has been copied");
	                break;
	            }
	            const oldElem = document.getElementById(page.local["currentHighlight"]);
	            if(oldElem != null){
	                oldElem.style["border-color"] = null;
	                oldElem.style["border-style"] = null;
	            }
		    }
		}
		else{
		    event.preventDefault();
	        //this.c8o.log.debug("Dropped into before level0");
	        const origin = event.dataTransfer.getData("origin");
	        switch(origin){
	        case "new":
	            //this.c8o.log.debug("Origin is new");
	            page["addElement"](event.dataTransfer.getData("type"), vars.index);
	            break;
	        case "moved":
	            //this.c8o.log.debug("Origin is moved");
	            let arr;
	            if(event.dataTransfer.getData("index").indexOf(",") != -1){
	                if(event.dataTransfer.getData("index").length == 5){
	                    arr = [+event.dataTransfer.getData("index").substring(0,1), +event.dataTransfer.getData("index").substring(2,3),+event.dataTransfer.getData("index").substring(4,5)];
	                }
	                else{
	                    arr = [+event.dataTransfer.getData("index").substring(0,1), +event.dataTransfer.getData("index").substring(2,3)];
	                }
	            }
	            else{
	                arr = [+event.dataTransfer.getData("index")];
	            }
	            page["moveElement"](vars.index, arr);
	            break;
	        case "copied":
	            //this.c8o.log.debug("Object has been copied");
	            
	            break;
	        }
	        
	        
	        const oldElem = document.getElementById(page.local["currentHighlight"]);
	        if(oldElem != null){
	            oldElem.style["border-color"] = null;
	            oldElem.style["border-style"] = null;
	        }
		}
		page.local.dragging = false;
        page.local.draggingName = "";
		resolve();
		/*End_c8o_function:CTS1600442667555*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588774562405(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588774562405*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588774562405*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602175501350(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602175501350*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602175501350*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602175501356(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602175501356*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602175501356*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588774562465(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588774562465*/
		this.updateState();
		resolve();

		/*End_c8o_function:CTS1588774562465*/
		});
	}


	/**
	 * Function ATS1573824877808
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1573824877808(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1573824877808: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1573824877808: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1573824877808: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1573824877808: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["Popover"] = stack["1573824877808"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Popover', actionFunction: 'PopoverAction', data: get('data', `{item:stack.root.scope.params1573746896372.item, path: stack.root.scope.params1573746896372.path}`), cssClass: null, showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.colorPage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), event: get('event', `(event == undefined ? $event : event)`)}, vars:{}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["getPickerColor"] = stack["1602848534863"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getPickerColor', actionFunction: 'CTS1602848534863'}, vars:{}};
		return this.CTS1602848534863(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1574089347602"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1602848534863 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] PopoverAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1573824877808: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1573824877808: ended"); resolveP(res)});
		});
	}

	/**
	 * Function getPickerColor
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602848534863(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602848534863*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		page.global.colorPicker=(page.global.colorPicker !== undefined)?page.global.colorPicker:"#ffffff";
		event.target.value=page.local.namer(page.global.colorPicker).ntc[0].name;
		props.stack.root.scope.params1573746896372.item.config.label_color=page.global.colorPicker;
		resolve();
		/*End_c8o_function:CTS1602848534863*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588774562615(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588774562615*/
		this.updateState();
		resolve();
		/*End_c8o_function:CTS1588774562615*/
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
	CTS1585216552059(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1585216552059*/
		page.local[vars.id] = event;
		resolve();
		/*End_c8o_function:CTS1585216552059*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573739129244(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573739129244*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1573739129244*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602175898841(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602175898841*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602175898841*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602175898847(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602175898847*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602175898847*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588773504317(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588773504317*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588773504317*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176130989(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176130989*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602176130989*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176130995(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176130995*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602176130995*/
		});
	}


	/**
	 * Function ATS1588773504563
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588773504563(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588773504563: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588773504563: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588773504563: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588773504563: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588773504563"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588773504566"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588773504563: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588773504563: ended"); resolveP(res)});
		});
	}

	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588774234295(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588774234295*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588774234295*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176257814(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176257814*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602176257814*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176257820(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176257820*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602176257820*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588774234340(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588774234340*/
		this.updateState();
		resolve();

		/*End_c8o_function:CTS1588774234340*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588778407083(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588778407083*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588778407083*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588778407140(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588778407140*/
		page.c8o.log.debug(event ? event.toString():'no event')



		this.updateState();

		resolve();

		/*End_c8o_function:CTS1588778407140*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588778407275(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588778407275*/
		this.updateState();
		resolve();
		/*End_c8o_function:CTS1588778407275*/
		});
	}


	/**
	 * Function addElementToList
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588778408256(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588778408256*/
		if(event.srcElement.id.indexOf("c8o_child2") != -1){
			 page.c8o.log.debug("dargstart concerns child2");
		}
		else{
				page.c8o.log.debug("dragstart at level1, index of target to move is "+vars.index);
				event.dataTransfer.setData("__c8oformsdrag", true);
				event.dataTransfer.setData(vars.item.type, true);
				event.dataTransfer.setData("origin", "moved");
				event.dataTransfer.setData("index", vars.index);
				event.dataTransfer.setData("dropEffect", "copy");
				resolve();
			}

		/*End_c8o_function:CTS1588778408256*/
		});
	}


	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519279840(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519279840*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519279840*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519279852(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519279852*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519279852*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519279870(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519279870*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519279870*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519279876(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519279876*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519279876*/
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
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519362736(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519362736*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519362736*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519362748(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519362748*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519362748*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519362766(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519362766*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519362766*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519362772(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519362772*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519362772*/
		});
	}


	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519370418(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519370418*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519370418*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519370430(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519370430*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519370430*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519370448(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519370448*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519370448*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519370454(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519370454*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519370454*/
		});
	}


	/**
	 * Function addElementToList
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588839628074(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588839628074*/
		if(vars !=  undefined){
		    if(vars.item != undefined){
		        event.dataTransfer.setData("__c8oformsdrag", true);
		        event.dataTransfer.setData(vars.item.type, true);
		        event.dataTransfer.setData("origin", "moved");
		        event.dataTransfer.setData("index", vars.index);
		        event.dataTransfer.setData("dropEffect", "copy");
		    }
		}
		resolve();
		/*End_c8o_function:CTS1588839628074*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588839628188(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588839628188*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588839628188*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176314529(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176314529*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602176314529*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176314535(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176314535*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602176314535*/
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
	CTS1588839628239(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588839628239*/
		page.c8o.log.debug(event ? event.toString():'no event');
		vars.item.children.splice(vars.j, 1);
		this.updateState();
		this.tick();
		resolve();
		/*End_c8o_function:CTS1588839628239*/
		});
	}


	/**
	 * Function addElementToList
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588839628263(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588839628263*/
		if(vars !=  undefined){
		    if(vars.item != undefined){
		        event.dataTransfer.setData("__c8oformsdrag", true);
		        event.dataTransfer.setData(vars.item.type, true);
		        event.dataTransfer.setData("origin", "moved");
		        event.dataTransfer.setData("index", vars.index);
		        event.dataTransfer.setData("dropEffect", "copy");
		    }
		}
		resolve();
		/*End_c8o_function:CTS1588839628263*/
		});
	}


	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588839628296(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588839628296*/
            //vars.child.selected = true;
		    //vars.child.selected = !vars.child.selected;
		    console.log(vars);
            this.updateState();
            resolve();
		/*End_c8o_function:CTS1588839628296*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176330785(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176330785*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602176330785*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176330791(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176330791*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602176330791*/
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
	CTS1588839628389(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588839628389*/
		page.c8o.log.debug(event ? event.toString():'no event');
		vars.item.children.splice(vars.j, 1);
		this.updateState();
		this.tick();
		resolve();
		/*End_c8o_function:CTS1588839628389*/
		});
	}


	/**
	 * Function ATS1601916807930
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1601916807930(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1601916807930: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1601916807930: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1601916807930: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1601916807930: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1601916807930"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1601916807933"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1601916807930: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1601916807930: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519379160(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519379160*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519379160*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519379172(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519379172*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519379172*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519379190(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519379190*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519379190*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519379196(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519379196*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519379196*/
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
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588840079455(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588840079455*/
		    let wasSelected  = vars.child.selected;
		    for(let elem of vars.item.children){
		        elem.selected = false;
		    }
            vars.child.selected = !wasSelected;
            page["updateState"]();
            //this.tick();
		resolve();
		/*End_c8o_function:CTS1588840079455*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588840079533(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588840079533*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588840079533*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181025995(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181025995*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181025995*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181026001(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181026001*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181026001*/
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
	CTS1588840079566(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588840079566*/
		vars.item.children.splice(vars.j, 1);
		this.updateState();
		this.tick();
		resolve();
		/*End_c8o_function:CTS1588840079566*/
		});
	}


	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588840079620(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588840079620*/
		    for(let elem of vars.item.children){
		        elem.selected = false;
		    }
            vars.child.selected = true;
            this.updateState();
            this.tick();
		resolve();
		/*End_c8o_function:CTS1588840079620*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181037052(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181037052*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181037052*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181037058(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181037058*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181037058*/
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
	CTS1588840079719(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588840079719*/
		vars.item.children.splice(vars.j, 1);
		this.updateState();
		this.tick();
		resolve();
		/*End_c8o_function:CTS1588840079719*/
		});
	}


	/**
	 * Function ATS1588840079788
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588840079788(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588840079788: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588840079788: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588840079788: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588840079788: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588840079788"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588840079791"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588840079788: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588840079788: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519388852(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519388852*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519388852*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519388864(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519388864*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519388864*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519388882(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519388882*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519388882*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519388888(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519388888*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519388888*/
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
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573739358351(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573739358351*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1573739358351*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181145696(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181145696*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181145696*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181145702(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181145702*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181145702*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573739363988(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573739363988*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1573739363988*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181154464(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181154464*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181154464*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181154470(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181154470*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181154470*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602778117658(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602778117658*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602778117658*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602778117673(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602778117673*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602778117673*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602778117679(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602778117679*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602778117679*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573739374474(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573739374474*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1573739374474*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181170963(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181170963*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181170963*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181170969(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181170969*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181170969*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602778715628(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602778715628*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602778715628*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602778715643(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602778715643*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602778715643*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602778715649(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602778715649*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602778715649*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573739380467(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573739380467*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1573739380467*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181187223(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181187223*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181187223*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181187229(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181187229*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181187229*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571326059523(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571326059523*/
		page.c8o.log.debug(event ? event.toString():'no event')







		this.updateState();



		resolve();



		/*End_c8o_function:CTS1571326059523*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571326059559(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571326059559*/
		page.c8o.log.debug(event ? event.toString():'no event')







		this.updateState();



		resolve();



		/*End_c8o_function:CTS1571326059559*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571326170644(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571326170644*/
		page.c8o.log.debug(event ? event.toString():'no event')







		this.updateState();



		resolve();



		/*End_c8o_function:CTS1571326170644*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571326170680(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571326170680*/
		page.c8o.log.debug(event ? event.toString():'no event')







		this.updateState();



		resolve();



		/*End_c8o_function:CTS1571326170680*/
		});
	}


	/**
	 * Function triggerSave
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571323946951(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571323946951*/
		page.c8o.log.debug(event ? event.toString():'no event')
		this.updateState();
		resolve();
		/*End_c8o_function:CTS1571323946951*/
		});
	}


	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519398690(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519398690*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519398690*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519398702(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519398702*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519398702*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519398720(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519398720*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519398720*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519398726(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519398726*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519398726*/
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
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571404352219(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571404352219*/
		    let wasSelected = vars.child.selected;
		    for(let elem of vars.item.children){
		        elem.selected = false;
		    }
            vars.child.selected = !wasSelected;
            page["updateState"]();
		resolve();
		/*End_c8o_function:CTS1571404352219*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573739405407(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573739405407*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1573739405407*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181246977(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181246977*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181246977*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181246983(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181246983*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181246983*/
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
	CTS1571404487964(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571404487964*/
		vars.item.children.splice(vars.j, 1);
		this.updateState();
		this.tick();
		resolve();
		/*End_c8o_function:CTS1571404487964*/
		});
	}


	/**
	 * Function AddOption
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571404645803(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571404645803*/
		    let localNumbers = [];
	        let defualtLabel = "Option";
	        this.getlocalNumbersSorted(vars.item, localNumbers, defualtLabel);
	        let val = this.getNextValueDispo(localNumbers);
            vars.item['children'].push({"value":defualtLabel+ " " +val, "selected":false,"label_color":"primary","position": 'unset',"id":(Math.random() + "").substring(2)});
            this.updateState();
            this.tick();
    		resolve();
		/*End_c8o_function:CTS1571404645803*/
		});
	}


	/**
	 * Function changeArrow
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1599051499005(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599051499005*/
		page.local['_source'+vars.i] = !page.local['_source'+vars.i];
		this.tick();
		resolve();
		/*End_c8o_function:CTS1599051499005*/
		});
	}


	/**
	 * Function changeArrow
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1599051499062(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599051499062*/
		//if(vars.itemModel.actions[vars.item.name + '.' + vars.child.name] == undefined || vars.itemModel.actions[vars.item.name + '.' + vars.child.name]["enabled"] == undefined){
		    console.log("vars.itemModel.actions[vars.item.name + '.' + vars.child.name] == undefined, set value to true");
		    let va = {};
		    if(typeof(vars.item.sequences[vars.i].variables.name) != "string"){
		        for(let el of vars.item.sequences[vars.i].variables.name){
	                va[el] = {};
	            }
		    }
		    else{
		        va = [vars.item.sequences[vars.i].variables.name]; 
		    }
		    
		    vars.itemModel.actions[vars.item.name + '.' + vars.child.name] = {"enabled":true, vars:va};
		/*}
		else{
		    console.log("vars.itemModel.actions[vars.item.name + '.' + vars.child.name] is defined , previous value was \n " +vars.itemModel.actions[vars.item.name + '.' + vars.child.name] + "\n new value is: \n " + !vars.itemModel.actions[vars.item.name + '.' + vars.child.name]);
		    vars.itemModel.actions[vars.item.name + '.' + vars.child.name]["enabled"] = !vars.itemModel.actions[vars.item.name + '.' + vars.child.name]["enabled"]; 
		    
		}*/
		for(let elem in vars.itemModel.actions){
		    if(elem != vars.item.name + '.' + vars.child.name){
		        vars.itemModel.actions[elem].enabled = false
		    }
		}
		page["updateState"]();
		page["actionBeans"]["STS1586453262123"](page, {}, {item:vars.itemModel, viewer:true}, null);

		resolve();
		/*End_c8o_function:CTS1599051499062*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1573739415992(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1573739415992*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1573739415992*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181269151(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181269151*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181269151*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181269157(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181269157*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181269157*/
		});
	}


	/**
	 * Function ATS1571405872900
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1571405872900(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1571405872900: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1571405872900: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1571405872900: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1571405872900: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1571405872900"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1571405872903"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1571405872900: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1571405872900: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519406220(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519406220*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519406220*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519406232(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519406232*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519406232*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519406250(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519406250*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519406250*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519406256(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519406256*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519406256*/
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
	 * Function ATS1588847587820
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588847587820(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588847587820: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588847587820: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588847587820: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588847587820: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588847587820"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588847587823"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588847587820: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588847587820: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519413265(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519413265*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519413265*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519413277(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519413277*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519413277*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519413295(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519413295*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519413295*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519413301(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519413301*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519413301*/
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
	 * Function ATS1588851494925
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851494925(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851494925: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851494925: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851494925: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851494925: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588851494925"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588851494928"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851494925: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851494925: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519420116(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519420116*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519420116*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519420128(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519420128*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519420128*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519420146(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519420146*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519420146*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519420152(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519420152*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519420152*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851525045(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851525045*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588851525045*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181322079(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181322079*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181322079*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181322085(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181322085*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181322085*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851525126(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851525126*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588851525126*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181331077(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181331077*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181331077*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181331083(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181331083*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181331083*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851525207(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851525207*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588851525207*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181343698(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181343698*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181343698*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181343704(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181343704*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181343704*/
		});
	}


	/**
	 * Function ATS1588851525261
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851525261(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851525261: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851525261: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851525261: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851525261: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588851525261"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588851525264"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851525261: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851525261: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519427284(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519427284*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519427284*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519427296(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519427296*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519427296*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519427314(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519427314*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519427314*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519427320(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519427320*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519427320*/
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
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605803151878(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605803151878*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1605803151878*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605803151893(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605803151893*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1605803151893*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605803151899(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605803151899*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1605803151899*/
		});
	}


	/**
	 * Function ATS1605803152139
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1605803152139(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1605803152139: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1605803152139: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1605803152139: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1605803152139: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1605803152139"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1605803152142"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1605803152139: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1605803152139: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519434666(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519434666*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519434666*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519434678(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519434678*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519434678*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519434696(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519434696*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519434696*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519434702(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519434702*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519434702*/
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
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851559170(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851559170*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588851559170*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181394624(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181394624*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181394624*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181394630(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181394630*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181394630*/
		});
	}


	/**
	 * Function ATS1588851559218
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851559218(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851559218: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851559218: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851559218: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851559218: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588851559218"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588851559221"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851559218: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851559218: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519440349(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519440349*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519440349*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519440361(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519440361*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519440361*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519440379(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519440379*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519440379*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519440385(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519440385*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519440385*/
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
	 * Function ATS1588851573284
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851573284(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851573284: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851573284: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851573284: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851573284: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588851573284"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588851573287"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851573284: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851573284: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519448490(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519448490*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519448490*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519448502(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519448502*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519448502*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519448520(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519448520*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519448520*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519448526(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519448526*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519448526*/
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
	 * Function ATS1588851473471
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851473471(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851473471: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851473471: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851473471: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851473471: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1588851473471"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1588851473471'}, vars:{item: get('item', `scope.params1575550725099.item`), index: get('index', `j`)}};
		return this.CTS1588851473471(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction1"] = stack["1588851473474"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction1', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1588851473471 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851473471: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851473471: ended"); resolveP(res)});
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
	CTS1588851473471(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851473471*/
		console.log(vars);
		console.log(event);
		console.log(props);
		/*
		  for(let item of vars.item.lines){
            if
        }
		*/
		resolve();
		/*End_c8o_function:CTS1588851473471*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851473492(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851473492*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588851473492*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181087528(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181087528*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181087528*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181087534(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181087534*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181087534*/
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
	CTS1588851473525(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851473525*/
		vars.item.lines.splice(vars.j, 1);
		page["updateState"]();
		this.tick();
		resolve();
		/*End_c8o_function:CTS1588851473525*/
		});
	}


	/**
	 * Function AddOption
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851473561(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851473561*/
		    let localNumbers = [];
	        let defaultLabel = "Line";
	        page["getlocalNumbersSorted"](vars.item, localNumbers, defaultLabel, "lines", "title");
	        let val = page["getNextValueDispo"](localNumbers);
            vars.item['lines'].push({"title":defaultLabel+ " " +val, "value":"", "id":(Math.random() + "").substring(2)});
            page["updateState"]();
            this.tick();
    		resolve();
		/*End_c8o_function:CTS1588851473561*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851473723(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851473723*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588851473723*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181097856(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181097856*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602181097856*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602181097862(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602181097862*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602181097862*/
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
	CTS1588851473756(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851473756*/
		vars.item.children.splice(vars.j, 1);
		page["updateState"]();
		page["tick"]();
		resolve();
		/*End_c8o_function:CTS1588851473756*/
		});
	}


	/**
	 * Function AddOption
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851473792(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851473792*/
		    let localNumbers = [];
	        let defualtLabel = "Option";
	        this.getlocalNumbersSorted(vars.item, localNumbers, defualtLabel);
	        let val = this.getNextValueDispo(localNumbers);
            vars.item['children'].push({"value":defualtLabel+ " " +val, "id":(Math.random() + "").substring(2)});
            this.updateState();
            this.tick();
    		resolve();
		/*End_c8o_function:CTS1588851473792*/
		});
	}


	/**
	 * Function ATS1588851473882
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851473882(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851473882: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851473882: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851473882: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851473882: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588851473882"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588851473885"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851473882: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851473882: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1588851473918
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851473918(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851473918: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851473918: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851473918: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851473918: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588851473918"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588851473921"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851473918: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851473918: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519456111(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519456111*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519456111*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519456123(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519456123*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519456123*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519456141(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519456141*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519456141*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519456147(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519456147*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519456147*/
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
	 * Function ATS1588851455387
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851455387(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851455387: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851455387: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851455387: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851455387: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1588851455387"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1588851455387'}, vars:{item: get('item', `scope.params1575900730250.item`), index: get('index', `j`)}};
		return this.CTS1588851455387(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction1"] = stack["1588851455390"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction1', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1588851455387 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851455387: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851455387: ended"); resolveP(res)});
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
	CTS1588851455387(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851455387*/
		console.log(vars);
		console.log(event);
		console.log(props);
		/*
		  for(let item of vars.item.lines){
            if
        }
		*/
		resolve();
		/*End_c8o_function:CTS1588851455387*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851455408(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851455408*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588851455408*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176366056(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176366056*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602176366056*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176366062(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176366062*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602176366062*/
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
	CTS1588851455441(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851455441*/
		vars.item.lines.splice(vars.j, 1);
		page["updateState"]();
		this.tick();
		resolve();
		/*End_c8o_function:CTS1588851455441*/
		});
	}


	/**
	 * Function AddOption
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851455477(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851455477*/
		    let localNumbers = [];
	        let defaultLabel = "Line";
	        page["getlocalNumbersSorted"](vars.item, localNumbers, defaultLabel, "lines", "title");
	        let val = page["getNextValueDispo"](localNumbers);
            vars.item['lines'].push({"title":defaultLabel+ " " +val, "value":[],"id":(Math.random() + "").substring(2)});
            page["updateState"]();
            this.tick();
    		resolve();
		/*End_c8o_function:CTS1588851455477*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851455615(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851455615*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1588851455615*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176379019(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176379019*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602176379019*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602176379025(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602176379025*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602176379025*/
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
	CTS1588851455648(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851455648*/
		vars.item.children.splice(vars.j, 1);
		page["updateState"]();
		page["tick"]();
		resolve();
		/*End_c8o_function:CTS1588851455648*/
		});
	}


	/**
	 * Function AddOption
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588851455684(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588851455684*/
		    let localNumbers = [];
	        let defaultLabel = "Option";
	        this.getlocalNumbersSorted(vars.item, localNumbers, defaultLabel);
	        let val = this.getNextValueDispo(localNumbers);
            vars.item['children'].push({"value":defaultLabel+ " " +val, "selected":false, "id":(Math.random() + "").substring(2)});
            this.updateState();
            this.tick();
    		resolve();
		/*End_c8o_function:CTS1588851455684*/
		});
	}


	/**
	 * Function ATS1588851455774
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851455774(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851455774: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851455774: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851455774: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851455774: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588851455774"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588851455777"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851455774: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851455774: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1588851455810
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1588851455810(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1588851455810: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1588851455810: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1588851455810: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1588851455810: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1588851455810"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1588851455813"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1588851455810: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1588851455810: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519466491(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519466491*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602519466491*/
		});
	}


	/**
	 * Function refuseDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519466503(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519466503*/
		if(event.dataTransfer.types.includes("__c8oformsdrag")){
					event.preventDefault();
					//this.recursive(event.target, "before");
			}
		resolve();
		/*End_c8o_function:CTS1602519466503*/
		});
	}


	/**
	 * Function cantDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519466521(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519466521*/
	    page.local.canDrag = "false";
		page.tick();
//		console.log('MOUSEENTER !!');
		resolve();
		/*End_c8o_function:CTS1602519466521*/
		});
	}


	/**
	 * Function canDrag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602519466527(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602519466527*/
	    page.local.canDrag = "true";
		page.tick();
//		console.log('MOUSELEAVE !!');
		resolve();
		/*End_c8o_function:CTS1602519466527*/
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
	CTS1600689954723(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600689954723*/
		this.local["showItemid"] = vars.item;
		this.ref.detectChanges();
		resolve();
		/*End_c8o_function:CTS1600689954723*/
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
	CTS1600689954732(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600689954732*/
		this.local["showItemid"] = "";
        this.ref.detectChanges();
		resolve();
		/*End_c8o_function:CTS1600689954732*/
		});
	}


	/**
	 * Function ATS1600431617770
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600431617770(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600431617770: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600431617770: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600431617770: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600431617770: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["cloneElement"] = stack["1600431617770"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'cloneElement', actionFunction: 'CTS1600431617770'}, vars:{elm: get('elm', `child`)}};
		return this.CTS1600431617770(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600431617776"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600431617770 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600431617770: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600431617770: ended"); resolveP(res)});
		});
	}

	/**
	 * Function cloneElement
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600431617770(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600431617770*/
		let clone =  JSON.parse(JSON.stringify(props.stack.root.scope.child));
		let oldId = clone.id;
		let ionType = clone.type;
		let typesfreindly = {"ion-card": "group", "ion-label":"label","ion-title":"title", "inputText": "text", "checkbox":"checkbox", "radio": "radiolist", "slider":"slider","select":"select", "img":"camera" }
		let typeToClone = typesfreindly[clone.type] != undefined ? typesfreindly[clone.type]: clone.type;
		clone.name = this.getNameDispo(typeToClone, null);
		clone.id = new Date().getTime();
		props.stack.root.scope["params1571758206225"]["item"]["children"]["push"](clone);
		resolve();
		/*End_c8o_function:CTS1600431617770*/
		});
	}


	/**
	 * Function ATS1600431648943
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600431648943(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600431648943: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600431648943: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600431648943: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600431648943: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1600431648943"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1600431648943'}, vars:{}};
		return this.CTS1600431648943(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["Alert"] = stack["1600431648946"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Alert', actionFunction: 'AlertAction', css1: null, css2: null, button2: get('button2', `c8oPage.local.oui`), button3: null, value2: get('value2', `'1'`), value1: get('value1', `'0'`), value3: null, title: get('title', `c8oPage.local.delete_item`), message: get('message', `''`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), cancel3: null, cancel2: null, subTitle: get('subTitle', `c8oPage.local.deletetranslation`), cssClass: null, cancel1: get('cancel1', `'cancel'`), button1: get('button1', `c8oPage.local.non`), css3: null}, vars:{}};
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
		let self: any = stack["If"] = stack["1600431648949"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out == 1`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["deleteItem"] = stack["1600431648952"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'deleteItem', actionFunction: 'CTS1600431648952'}, vars:{}};
		return this.CTS1600431648952(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600431648952 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] AlertAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600431648943 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600431648943: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600431648943: ended"); resolveP(res)});
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
	CTS1600431648943(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600431648943*/
		let trans = page.getInstance(TranslateService);
		trans.get('deletetranslation').subscribe((res: string) => {
		    page.local.deletetranslation = res;
		});
		
        trans.get('delete_item').subscribe((res: string) => {
            page.local.delete_item = res;
        });
        trans.get('oui').subscribe((res: string) => {
            page.local.oui = res;
        });
        trans.get('non').subscribe((res: string) => {
            page.local.non = res;
        });
		resolve();
		/*End_c8o_function:CTS1600431648943*/
		});
	}


	/**
	 * Function deleteItem
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600431648952(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600431648952*/
		    //page["delElementIndex"](props.stack.root.scope["i"], props.stack.root.scope["j"]);
		    page["delElementIndex"](props.stack.root.scope["params1571758206225"]["item"],props.stack.root.scope["child"]);
		    resolve();
		/*End_c8o_function:CTS1600431648952*/
		});
	}


	/**
	 * Function ATS1600431671960
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600431671960(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600431671960: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600431671960: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600431671960: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600431671960: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1600431671960"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{form: c8oPage.form, self:stack.root.scope.child.name, i:stack.root.scope.params1571758206225.indexItem, j: stack.root.scope.j}`), cssClass: get('cssClass', `'hugeModal'`), blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.ConditionalPage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1600431671963"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600431671960: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600431671960: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1599833398483
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1599833398483(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1599833398483: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1599833398483: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1599833398483: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1599833398483: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1599833398483"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{tree: c8oPage.local.tree, item: stack.root.scope.params1586443759128.item}`), cssClass: null, blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.modalActions'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
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
		let self: any = stack["CustomAction"] = stack["1599834113614"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1599834113614'}, vars:{}};
		return this.CTS1599834113614(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1599834113614 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1599833398483: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1599833398483: ended"); resolveP(res)});
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
	CTS1599834113614(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599834113614*/
		if(this.global.elems != undefined){
		    props.stack.root.scope.params1586443759128.item;
	        try{
	            for(let elem in props.stack.root.scope.params1586443759128.item.actions){
	                props.stack.root.scope.params1586443759128.item.actions[elem].enabled = false;
	            }
	        }
	        catch(e){
	            
	        }
	        
	        if(props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name] != undefined){
	            for(let i in  props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name].vars){
	                if(this.global.elems["vars"][i] != undefined){
	                    this.global.elems["vars"][i] =  props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name].vars[i];
	                }
	            }
	        } 
	        if(props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name] == undefined){
	            props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name] = {};
	        }
	        props.stack.root.scope.params1586443759128.item.actions[""+this.global.elems.name].enabled = true;
	        props.stack.root.scope.params1586443759128.item.actions[""+this.global.elems.name].vars = this.global.elems["vars"];
		}
		this.global.elems = undefined;
		page["updateState"]();
		resolve();
		/*End_c8o_function:CTS1599834113614*/
		});
	}


	/**
	 * Function ATS1600938849869
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600938849869(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600938849869: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600938849869: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600938849869: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600938849869: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1600938849869"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{tree: c8oPage.local.tree, item: stack.root.scope.params1586443759128.item}`), cssClass: null, blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.modalActions'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
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
		let self: any = stack["CustomAction"] = stack["1600938849872"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1600938849872'}, vars:{}};
		return this.CTS1600938849872(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600938849872 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600938849869: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600938849869: ended"); resolveP(res)});
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
	CTS1600938849872(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600938849872*/
		if(this.global.elems != undefined){
		    props.stack.root.scope.params1586443759128.item;
	        try{
	            for(let elem in props.stack.root.scope.params1586443759128.item.actions){
	                props.stack.root.scope.params1586443759128.item.actions[elem].enabled = false;
	            }
	        }
	        catch(e){
	            
	        }
	        
	        if(props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name] != undefined){
	            for(let i in  props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name].vars){
	                if(this.global.elems["vars"][i] != undefined){
	                    this.global.elems["vars"][i] =  props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name].vars[i];
	                }
	            }
	        } 
	        if(props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name] == undefined){
	            props.stack.root.scope.params1586443759128.item.actions[this.global.elems.name] = {};
	        }
	        props.stack.root.scope.params1586443759128.item.actions[""+this.global.elems.name].enabled = true;
	        props.stack.root.scope.params1586443759128.item.actions[""+this.global.elems.name].vars = this.global.elems["vars"];
		}
		this.global.elems = undefined;
		page["updateState"]();
		resolve();
		/*End_c8o_function:CTS1600938849872*/
		});
	}


	/**
	 * Function ATS1599838491319
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1599838491319(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1599838491319: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1599838491319: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1599838491319: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1599838491319: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1599838491319"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1599838491319'}, vars:{}};
		return this.CTS1599838491319(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1599838491322"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588862475826'}, vars:{}};
		return this.actionBeans.STS1588862475826(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588862475826 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1599838491319 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1599838491319: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1599838491319: ended"); resolveP(res)});
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
	CTS1599838491319(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599838491319*/
		//page.local.currentPage = props.stack.root.scope.item.pageTechName;
		page.local.index = props.stack.root.scope.z;
		resolve();
		/*End_c8o_function:CTS1599838491319*/
		});
	}


	/**
	 * Function ATS1600952081692
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600952081692(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600952081692: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600952081692: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600952081692: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600952081692: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1600952081692"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1600952081692'}, vars:{}};
		return this.CTS1600952081692(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600952907649"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600952081692 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600952081692: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600952081692: ended"); resolveP(res)});
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
	CTS1600952081692(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600952081692*/
		page.local.draggingSource = false;
		resolve();
		/*End_c8o_function:CTS1600952081692*/
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
	CTS1600261533934(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600261533934*/
		if(event.target.innerHTML != undefined){
		    let initalHtml = event.target.innerHTML;
		    var parser = new DOMParser();
		    let doc = parser.parseFromString(initalHtml, "text/html");
		    for(var i = 0; i < doc.body.children.length; i++){
		        if(doc.body.children[i].id == undefined || doc.body.children[i].id == ""){
		            doc.body.removeChild(doc.body.children[i])
		        }
		    }
		    
		    let html = page["transformHtmlto$"](doc.body.innerHTML);
		    const name = page["getEnabled"](props.stack.root.scope.params1586443759128.item.actions);
            const keyIndex = (Object.keys(props.stack.root.scope.params1586443759128.item.actions[name]['vars'])[this.local.index]);
            if(keyIndex == undefined){
                let myName = this.local.tree.filter(x => x.name == name.split(".")[0])[0].sequences.filter(x => x.name == name.split(".")[1])[0].variables.name[this.local.index];
                props.stack.root.scope.params1586443759128.item.actions[name]['vars'][myName] = {"source": false, str:""};
            }
            if(props.stack.root.scope.params1586443759128.item.actions[name]['vars'][keyIndex]['source'] == false || props.stack.root.scope.params1586443759128.item.actions[name]['vars'][keyIndex]['source'] == undefined){
                props.stack.root.scope.params1586443759128.item.actions[name]['vars'][keyIndex]['str'] = html;
            }
		    resolve();
		}
		/*End_c8o_function:CTS1600261533934*/
		});
	}


	/**
	 * Function CheckAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1602514782083(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1602514782083*/
		if(event.srcElement.value != ""){
		    for(let item of this.formsList){
		        if(item["name"] == event.srcElement.value){
		            this.getTranslate("nameAlreadyexits")
		            .then((res:any)=>{
		                this.showToast(res);
		            });
		            let a = vars.item.name;
		            vars.item.name = vars.item.name + " ";
		            this.tick();
		            vars.item.name= a;
		            this.tick();
		            return;
		            
		        }
		        else if(item["type"] == "ion-card"){
		            for(let child of item["children"]){
		                if(child["name"] == event.srcElement.value){
		                    this.getTranslate("nameAlreadyexits")
		                    .then((res:any)=>{
		                        this.showToast(res);
		                    });
		                    let a = vars.item.name;
		                    vars.item.name = vars.item.name + " ";
		                    this.tick();
		                    vars.item.name= a;
		                    this.tick();
		                    return;
		                    
		                }
		            }
		        }
		    }
			vars.item.name = event.srcElement.value;

			this.updateState();

			this.tick();

		}
		else{

			//event.srcElement.value = this.form._id;

			let a = vars.item.name;
			vars.item.name = vars.item.name + " ";
			this.tick();
			vars.item.name= a;
			this.tick();
		}
		resolve();
		/*End_c8o_function:CTS1602514782083*/
		});
	}


	/**
	 * Function addElementToList
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1568026824268(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1568026824268*/
		    setTimeout(()=>{
	            page.local.dragging = true;
	            this.ref.detectChanges();
	        }, 100);
		
		    if(event.srcElement.id.indexOf("c8o_child1") != -1 ){
	            this.c8o.log.debug("dargstart concerns child1");
	        }
	        else if(event.srcElement.id.indexOf("c8o_child2") != -1){
	             this.c8o.log.debug("dargstart concerns child2");
	        }
	        else{
	            this.c8o.log.debug("dragstart at level0, index of target to move is "+vars.index);
	            event.dataTransfer.setData("__c8oformsdrag", true);
	            event.dataTransfer.setData(vars.item.type, true);
	            event.dataTransfer.setData("origin", "moved");
	            event.dataTransfer.setData("index", vars.index);
	            event.dataTransfer.setData("dropEffect", "copy");
	            resolve();
	        }
		/*End_c8o_function:CTS1568026824268*/
		});
	}


	/**
	 * Function ATS1600428520691
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600428520691(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600428520691: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600428520691: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600428520691: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600428520691: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["cloneElement"] = stack["1600428520691"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'cloneElement', actionFunction: 'CTS1600428520691'}, vars:{elm: get('elm', `scope.item1568026815190`)}};
		return this.CTS1600428520691(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600428520697"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600428520691 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600428520691: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600428520691: ended"); resolveP(res)});
		});
	}

	/**
	 * Function cloneElement
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600428520691(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600428520691*/
		page.c8o.log.debug(JSON.stringify(vars.elm));
		let clone =  JSON.parse(JSON.stringify(vars.elm));
		let oldId = clone.id;
		let typesfreindly = {"ion-card": "group", "ion-label":"label","ion-title":"title", "inputText": "text", "checkbox":"checkbox", "radio": "radiolist", "slider":"slider","select":"select", "img":"camera" }
        let typeToClone = typesfreindly[clone.type] != undefined ? typesfreindly[clone.type]: clone.type;
        clone.name = this.getNameDispo(typeToClone, null);
		
		clone.id = new Date().getTime();
		this.formsList.splice(this.getElementIndexById(oldId), 0, clone);
		resolve();
		/*End_c8o_function:CTS1600428520691*/
		});
	}


	/**
	 * Function ATS1600428554619
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600428554619(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600428554619: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600428554619: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600428554619: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600428554619: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["cloneElement"] = stack["1600428554619"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'cloneElement', actionFunction: 'CTS1600428554619'}, vars:{elm: get('elm', `scope.item1568026815190`)}};
		return this.CTS1600428554619(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600428554625"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600428554619 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600428554619: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600428554619: ended"); resolveP(res)});
		});
	}

	/**
	 * Function cloneElement
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600428554619(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600428554619*/
		    let alertCtrl = page.getInstance(AlertController)
		    let alert = alertCtrl.create();
		    alert.setTitle(this.translate.instant("copy_elem_to"));
		    
		    for(let elem of page["form"]["pages"]){
		        if(page.local.currentPage != elem.pageTechName){
		            alert.addInput({
	                      type: 'checkbox',
	                      label: elem.name,
	                      value: elem.pageTechName,
	                      checked: false
	                    });
		        }
		        
		    }

		    alert.addButton('Cancel');
		    alert.addButton({
		      text: 'Okay',
		      handler: data => {		        
		        page.c8o.log.debug(JSON.stringify(vars.elm));
		        let clone =  JSON.parse(JSON.stringify(vars.elm));
		        let oldId = clone.id;
		        let typesfreindly = {"ion-card": "group", "ion-label":"label","ion-title":"title", "inputText": "text", "checkbox":"checkbox", "radio": "radiolist", "slider":"slider","select":"select", "img":"camera" }
		        let typeToClone = typesfreindly[clone.type] != undefined ? typesfreindly[clone.type]: clone.type;
		        
		        
		        for(let elem of data){
		            let cloneR = JSON.parse(JSON.stringify(clone));
		            cloneR.name = this.getNameDispo(typeToClone, null);
		            cloneR.id = new Date().getTime();
		            cloneR.config.page = elem;
		            this.formsList.push(cloneR);
		        }
		       
		        resolve();
		      }
		    });
		    alert.present();
		/*End_c8o_function:CTS1600428554619*/
		});
	}


	/**
	 * Function ATS1600428597558
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600428597558(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600428597558: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600428597558: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600428597558: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600428597558: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1600428597558"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1600428597558'}, vars:{}};
		return this.CTS1600428597558(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["Alert"] = stack["1600428597561"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Alert', actionFunction: 'AlertAction', css1: null, css2: null, button2: get('button2', `c8oPage.local.oui`), button3: null, value2: get('value2', `'1'`), value1: get('value1', `'0'`), value3: null, title: get('title', `c8oPage.local.delete_item`), message: get('message', `''`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), cancel3: null, cancel2: null, subTitle: get('subTitle', `c8oPage.local.deletetranslation`), cssClass: null, cancel1: get('cancel1', `'cancel'`), button1: get('button1', `c8oPage.local.non`), css3: null}, vars:{}};
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
		let self: any = stack["If"] = stack["1600428597564"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out == 1`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["deleteItem"] = stack["1600428597567"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'deleteItem', actionFunction: 'CTS1600428597567'}, vars:{i: get('i', `scope.item1568026815190`)}};
		return this.CTS1600428597567(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600428597567 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] AlertAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600428597558 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600428597558: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600428597558: ended"); resolveP(res)});
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
	CTS1600428597558(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600428597558*/
		let trans = page.getInstance(TranslateService);
		trans.get('deletetranslationUnique').subscribe((res: string) => {
		    page.local.deletetranslation = res;
		});
		
        trans.get('delete_item').subscribe((res: string) => {
            page.local.delete_item = res;
        });
        trans.get('oui').subscribe((res: string) => {
            page.local.oui = res;
        });
        trans.get('non').subscribe((res: string) => {
            page.local.non = res;
        });
		resolve();
		/*End_c8o_function:CTS1600428597558*/
		});
	}


	/**
	 * Function deleteItem
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600428597567(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600428597567*/
		    this.delElementIndex(vars.i);
		    resolve();
		/*End_c8o_function:CTS1600428597567*/
		});
	}


	/**
	 * Function ATS1600428609167
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600428609167(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600428609167: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600428609167: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600428609167: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600428609167: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1600428609167"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{form: c8oPage.form, self:stack.root.scope.item.name, i:stack.root.scope.i}`), cssClass: get('cssClass', `'hugeModal'`), blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.ConditionalPage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
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
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1600428609170"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1600428609173"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1600428609173'}, vars:{}};
		return this.CTS1600428609173(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600428609173 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {this.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600428609167: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600428609167: ended"); resolveP(res)});
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
	CTS1600428609173(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600428609173*/
		console.log("has called invoke upsate state");
		console.log(this.form);
		console.log(props);
		
		resolve();
		/*End_c8o_function:CTS1600428609173*/
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
	 * Function addElementToList
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588774165957(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588774165957*/
		
		setTimeout(()=>{
		    page.local.dragging = true;
		    this.ref.detectChanges();
		}, 100);
		if(event.srcElement.id.indexOf("c8o_child1") != -1 ){
		    this.c8o.log.debug("dargstart concerns child1");
		}
		else if(event.srcElement.id.indexOf("c8o_child2") != -1){
			 this.c8o.log.debug("dargstart concerns child2");
		}
		else{
		    this.c8o.log.debug("dragstart at level0, index of target to move is "+vars.index);
	        event.dataTransfer.setData("__c8oformsdrag", true);
			event.dataTransfer.setData(vars.item.type, true);
	        event.dataTransfer.setData("origin", "moved");
	        event.dataTransfer.setData("index", vars.index);
	        event.dataTransfer.setData("dropEffect", "copy");
	        resolve();
		}
		
		/*End_c8o_function:CTS1588774165957*/
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
	CTS1600689655350(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600689655350*/
		this.local["showItemid"] = vars.item;
		this.ref.detectChanges();
		resolve();
		/*End_c8o_function:CTS1600689655350*/
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
	CTS1600689658316(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600689658316*/
		this.local["showItemid"] = "";
        this.ref.detectChanges();
		resolve();
		/*End_c8o_function:CTS1600689658316*/
		});
	}


	/**
	 * Function ATS1600853371850
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600853371850(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600853371850: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600853371850: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600853371850: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600853371850: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1600853371850"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1600853371850'}, vars:{}};
		return this.CTS1600853371850(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["Alert"] = stack["1600853371853"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Alert', actionFunction: 'AlertAction', css1: null, css2: null, button2: get('button2', `c8oPage.local.oui`), button3: null, value2: get('value2', `'1'`), value1: get('value1', `'0'`), value3: null, title: get('title', `c8oPage.local.delete_item`), message: get('message', `''`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), cancel3: null, cancel2: null, subTitle: get('subTitle', `c8oPage.local.deletetranslation`), cssClass: null, cancel1: get('cancel1', `'cancel'`), button1: get('button1', `c8oPage.local.non`), css3: null}, vars:{}};
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
		let self: any = stack["If"] = stack["1600853371856"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out == 1`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["deleteItem"] = stack["1600853371859"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'deleteItem', actionFunction: 'CTS1600853371859'}, vars:{i: get('i', `stack.root.scope.t`)}};
		return this.CTS1600853371859(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600853641442"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.actionBeans.STS1554989913269(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["InvokeSharedAction"] = stack["1600853665374"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.actionBeans.STS1588860701071(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600853371859 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] AlertAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600853371850 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600853371850: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600853371850: ended"); resolveP(res)});
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
	CTS1600853371850(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600853371850*/
		let trans = page.getInstance(TranslateService);
		trans.get('deletetranslationUnique').subscribe((res: string) => {
		    page.local.deletetranslation = res;
		});
		
        trans.get('delete_item').subscribe((res: string) => {
            page.local.delete_item = res;
        });
        trans.get('oui').subscribe((res: string) => {
            page.local.oui = res;
        });
        trans.get('non').subscribe((res: string) => {
            page.local.non = res;
        });
		resolve();
		/*End_c8o_function:CTS1600853371850*/
		});
	}


	/**
	 * Function deleteItem
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600853371859(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600853371859*/
		    //this.delElementIndex(vars.i);
		    this.form.actions.splice(vars.i, 1);
		    this.idselected = "";
		    resolve();
		/*End_c8o_function:CTS1600853371859*/
		});
	}


	/**
	 * Function allowDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600852657085(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600852657085*/
		    if(event.dataTransfer.types.includes("__c8oformsdragactions")){    
                event.preventDefault();
                var newEl = document.getElementById("mainId");
                newEl.style["border-color"] = '#bc0000';
                newEl.style["border-style"] = "dashed";
                /*if(event.target.id == "mainId"){
                    this.switchHighlights(event.target, "currentHighlightAction")
                    resolve();
                }
                else{
                    this.switchHighlights(document.getElementById("mainId"), "currentHighlightAction")
                    resolve();
                }*/
                
		    }
		resolve();
		/*End_c8o_function:CTS1600852657085*/
		});
	}


	/**
	 * Function drop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600852754793(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600852754793*/
		    if(event.dataTransfer.types.includes("__c8oformsdragactions")){ 
                event.preventDefault();
                const origin = event.dataTransfer.getData("origin");
                switch(origin){
                case "new":
                    page["addElement"](event.dataTransfer.getData("type"), null, false, true);
                    break;
                }
                const oldElem = document.getElementById(page.local["currentHighlightActions"]);
                if(oldElem != null){
                    oldElem.style["border-color"] = null;
                    oldElem.style["border-style"] = null;
                }
        		page.local.draggingActions = false;
                page.local.draggingName = "";
		    }
		resolve();
		/*End_c8o_function:CTS1600852754793*/
		});
	}


	/**
	 * Function allowDrop
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600861921183(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600861921183*/
		    if(event.dataTransfer.types.includes("__c8oformsdragactions")){    
                event.preventDefault();
                var newEl = document.getElementById("mainId");
                newEl.style["border-color"] = '#e3e6e6';
                newEl.style["border-style"] = "dashed";
                /*if(event.target.id == "mainId"){
                    this.switchHighlights(event.target, "currentHighlightAction")
                    resolve();
                }
                else{
                    this.switchHighlights(document.getElementById("mainId"), "currentHighlightAction")
                    resolve();
                }*/
                
		    }
		resolve();
		/*End_c8o_function:CTS1600861921183*/
		});
	}


	/**
	 * Function ATS1587630584220
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587630584220(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587630584220: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587630584220: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587630584220: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587630584220: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction_"] = stack["1587630584220"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction_', actionFunction: 'STS1574429452233'}, vars:{}};
		return this.actionBeans.STS1574429452233(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["currentIndex"] = stack["1592562640215"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'currentIndex', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `0`), path: get('path', `'currentIndex'`)}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1592562640224"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1587563852086 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["currentPage"] = stack["1592486100630"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'currentPage', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `c8oPage['form']['pages'][0]['pageTechName']`), path: get('path', `'currentPage'`)}};
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
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1587630584223"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1587563852086 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["PublishEventInitalSyncFinished"] = stack["1601369445620"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1574429452233 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587630584220: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587630584220: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1586424184507
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1586424184507(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1586424184507: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1586424184507: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1586424184507: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1586424184507: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424184507"] = {};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1586424184507: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1586424184507: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1570713732469
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1570713732469(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1570713732469: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1570713732469: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1570713732469: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1570713732469: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["ImportNamerLib"] = stack["1570713732469"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ImportNamerLib', actionFunction: 'CTS1570713732469'}, vars:{}};
		return this.CTS1570713732469(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1570713732469 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1570713732469: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1570713732469: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ImportNamerLib
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1570713732469(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1570713732469*/
		    page.local.namer = namer;
		    resolve();
		/*End_c8o_function:CTS1570713732469*/
		});
	}


	/**
	 * Function ATS1587564387268
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587564387268(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587564387268: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587564387268: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587564387268: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587564387268: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["placeholder"] = stack["1587564387268"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholder', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'placeholder'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["placeholder"] = stack["1587564387274"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholder', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `parent.out`), path: get('path', `'placeholder'`)}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587564387268: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587564387268: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587564387283
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587564387283(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587564387283: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587564387283: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587564387283: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587564387283: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["question_label"] = stack["1587564387283"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'question_label', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'question_label'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["question"] = stack["1587564387289"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'question', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `parent.out`), path: get('path', `'question'`)}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587564387283: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587564387283: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587564387298
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587564387298(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587564387298: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587564387298: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587564387298: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587564387298: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["textTitle"] = stack["1587564387298"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'textTitle', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'textTitle'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["textTitle"] = stack["1587564387304"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'textTitle', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `parent.out`), path: get('path', `'textTitle'`)}};
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
		,
		new Promise((resolve, reject) => {
		let self: any = stack["title"] = stack["1588670681428"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'title', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `parent.out`), path: get('path', `'title'`)}};
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
		])
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587564387298: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587564387298: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587564387313
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587564387313(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587564387313: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587564387313: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587564387313: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587564387313: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["placeholderFile"] = stack["1587564387313"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholderFile', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'placeholderFile'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["placeholderFile"] = stack["1587564387319"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholderFile', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `parent.out`), path: get('path', `'placeholderFile'`)}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587564387313: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587564387313: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587564387328
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587564387328(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587564387328: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587564387328: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587564387328: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587564387328: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["placeholder_label"] = stack["1587564387328"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholder_label', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'placeholder_label'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["placeholder_label"] = stack["1587564387334"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholder_label', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `parent.out`), path: get('path', `'placeholder_label'`)}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587564387328: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587564387328: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587564387343
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587564387343(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587564387343: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587564387343: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587564387343: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587564387343: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["placeholder_resp"] = stack["1587564387343"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholder_resp', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'placeholder_resp'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["placeholder_resp"] = stack["1587564387349"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholder_resp', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `parent.out`), path: get('path', `'placeholder_resp'`)}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587564387343: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587564387343: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587564387358
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587564387358(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587564387358: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587564387358: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587564387358: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587564387358: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["placeholder_label2"] = stack["1587564387358"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholder_label2', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'placeholder_label2'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["placeholder_label2"] = stack["1587564387364"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'placeholder_label2', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `parent.out`), path: get('path', `'placeholder_label2'`)}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587564387358: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587564387358: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587629648504
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587629648504(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587629648504: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587629648504: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587629648504: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587629648504: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["titleform"] = stack["1587629648504"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'titleform', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'titleform'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SetGlobal"] = stack["1587629682615"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'titleform'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587629648504: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587629648504: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587629707364
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587629707364(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587629707364: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587629707364: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587629707364: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587629707364: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["descform"] = stack["1587629707364"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'descform', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'descform'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SetGlobal"] = stack["1587629707370"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'descform'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587629707364: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587629707364: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587629733712
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587629733712(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587629733712: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587629733712: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587629733712: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587629733712: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["text"] = stack["1587629733712"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'text', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'text'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SetGlobal"] = stack["1587629733718"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'text'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587629733712: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587629733712: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587629760959
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587629760959(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587629760959: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587629760959: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587629760959: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587629760959: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["addcheckbox"] = stack["1587629760959"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'addcheckbox', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'addcheckbox'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SetGlobal"] = stack["1587629760965"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'addcheckbox'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587629760959: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587629760959: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587629801668
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587629801668(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587629801668: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587629801668: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587629801668: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587629801668: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["left"] = stack["1587629801668"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'left', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'left'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SetGlobal"] = stack["1587629801674"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'left'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587629801668: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587629801668: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587629833951
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587629833951(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587629833951: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587629833951: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587629833951: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587629833951: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["right"] = stack["1587629833951"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'right', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'right'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SetGlobal"] = stack["1587629833957"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'right'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587629833951: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587629833951: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587629837581
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587629837581(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587629837581: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587629837581: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587629837581: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587629837581: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["center"] = stack["1587629837581"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'center', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'center'`)}};
		return this.actionBeans.STS1554994860699(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["SetGlobal"] = stack["1587629837587"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `parent.out`), Property: get('Property', `'center'`)}, vars:{}};
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587629837581: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587629837581: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587568761679
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587568761679(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587568761679: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587568761679: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587568761679: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587568761679: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["IfGenerateSharedAction"] = stack["1587568761679"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfGenerateSharedAction', actionFunction: 'IfAction', condition: get('condition', `false`), negate: get('negate', `false`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1587568774640"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1587565281898'}, vars:{}};
		return this.actionBeans.STS1587565281898(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] STS1587565281898 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587568761679: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587568761679: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587630014353
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587630014353(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587630014353: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587630014353: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587630014353: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587630014353: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["debug"] = stack["1587630014353"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'debug', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `{}`), path: get('path', `'debug'`)}};
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
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587630014353: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587630014353: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587630549302
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587630549302(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587630549302: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587630549302: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587630549302: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587630549302: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1587630549302"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `true`), Property: get('Property', `'common'`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587630549302: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587630549302: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587630549305
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587630549305(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587630549305: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587630549305: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587630549305: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587630549305: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal1"] = stack["1587630549305"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal1', actionFunction: 'SetGlobalAction', Value: get('Value', `true`), Property: get('Property', `'forms'`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587630549305: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587630549305: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587630549308
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587630549308(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587630549308: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587630549308: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587630549308: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587630549308: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal11"] = stack["1587630549308"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal11', actionFunction: 'SetGlobalAction', Value: get('Value', `true`), Property: get('Property', `'others'`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587630549308: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587630549308: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587630549311
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587630549311(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587630549311: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587630549311: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587630549311: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587630549311: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["edit"] = stack["1587630549311"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'edit', actionFunction: 'SetGlobalAction', Value: get('Value', `false`), Property: get('Property', `'editFormTitle'`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587630549311: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587630549311: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1587630549314
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1587630549314(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1587630549314: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1587630549314: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1587630549314: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1587630549314: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal111"] = stack["1587630549314"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal111', actionFunction: 'SetGlobalAction', Value: get('Value', `true`), Property: get('Property', `'actions'`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1587630549314: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1587630549314: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1592406284664
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1592406284664(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1592406284664: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1592406284664: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1592406284664: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1592406284664: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal2"] = stack["1592406284664"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal2', actionFunction: 'SetGlobalAction', Value: get('Value', `true`), Property: get('Property', `'organization'`)}, vars:{}};
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
		let self: any = stack["InvokeSharedAction"] = stack["1586424305779"] = {};
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
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1592406284664: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1592406284664: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ATS1572275058039
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1572275058039(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1572275058039: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1572275058039: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1572275058039: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1572275058039: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CheckUser"] = stack["1572275058039"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckUser', actionFunction: 'CTS1572275058039'}, vars:{}};
		return this.CTS1572275058039(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1572275058039 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1572275058039: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1572275058039: ended"); resolveP(res)});
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
	CTS1572275058039(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1572275058039*/
		
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
                this.local.formId = this.navParams.get('formId');
                if(page.c8o.session.status == C8oSessionStatus.Connected || page.c8o.session.status == C8oSessionStatus.HasBeenConnected){
                    if(this.local.formId != null && this.local.formId != ':formId'){
                        resolve(true);
                    }
                    else{
                        setTimeout(()=>{
                            page.routerProvider.setRoot("selectorPage", {}, null); 
                        }, 200);
                        resolve(false);
                    }
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
                                  page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
                              }, 200);
                              resolve(false);
                          }
                          else{
                              page.local.user = res.user;
                              if(this.local.formId != null && this.local.formId != ':formId'){
                                  resolve(true);
                              }
                              else{
                                  setTimeout(()=>{
                                      page.routerProvider.setRoot("selectorPage", {}, null); 
                                  }, 200);
                                  resolve(false);
                              }
                          }
                      })
                      .catch((err)=>{
                          if(window.navigator.onLine == true){
                              setTimeout(()=>{
                                  page.routerProvider.setRoot("loginPage", {page:'editorPage', formId:page.local.formId}, null); 
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
            }
		/*End_c8o_function:CTS1572275058039*/
		});
	}


	/**
	 * Function ETS1569836726967
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1569836726967(data) {
		this.c8o.log.debug("[MB] ETS1569836726967: 'updateWallpaper' received");
		this.ATS1569836909474({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1569836909474
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1569836909474(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1569836909474: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1569836909474: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1569836909474: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1569836909474: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SaveProperties"] = stack["1569836909474"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SaveProperties', actionFunction: 'CTS1569836909474'}, vars:{arg: get('arg', `parent.out`)}};
		return this.CTS1569836909474(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		let self: any = stack["If"] = stack["1586187215644"] = {};
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
		let self: any = stack["PutAttachment"] = stack["1586187179434"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PutAttachment', actionFunction: 'FullSyncPutAttachmentAction', content_type: get('content_type', `stack['SaveProperties'].out.type`), docid: get('docid', `c8oPage.form._id`), noLoading: get('noLoading', `true`), name: get('name', `'wallpaper'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), content: get('content', `stack['SaveProperties'].out.content`)}, vars:{}};
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
		let self: any = stack["refreshWallpaper"] = stack["1586187894779"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'refreshWallpaper', actionFunction: 'CTS1586187894779'}, vars:{}};
		return this.CTS1586187894779(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1586187894779 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] FullSyncPutAttachmentAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {this.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1569836909474 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1569836909474: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1569836909474: ended"); resolveP(res)});
		});
	}

	/**
	 * Function SaveProperties
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1569836909474(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1569836909474*/
		    let args = vars.arg;
		    this.form["wallpaper"]["enabled"] = args.enabledTemp;
		    if(args.colorPicker){
		        this.form["wallpaper"]["type"] = 'color';
		        this.form["wallpaper"]["color"] = args.colorPicker;
		    }else{
		        this.form["wallpaper"]["link"] = undefined;
	            this.form["wallpaper"]["index"]= args.realIndex;
	            this.form["wallpaper"]["type"] = args.fromDevice ? 'custom' : 'library';
		    }
		    this.updateState()
		    .then(()=>{
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
		    })
		    
		    
		    
		/*End_c8o_function:CTS1569836909474*/
		});
	}


	/**
	 * Function refreshWallpaper
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586187894779(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586187894779*/
		    this.resetImageCache();
		resolve();
		/*End_c8o_function:CTS1586187894779*/
		});
	}


	/**
	 * Function ETS1584548844921
	 *   
	 * 
	 * @param data , the event data object
	 */
	ETS1584548844921(data) {
		this.c8o.log.debug("[MB] ETS1584548844921: 'tinyMceNgModelChange' received");
		this.ATS1600955654740({root: {scope:{}, in:{}, out:data}});
	}

	/**
	 * Function ATS1600955654740
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1600955654740(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1600955654740: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1600955654740: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1600955654740: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1600955654740: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["controllerTiny1"] = stack["1600955654740"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'controllerTiny1', actionFunction: 'CTS1600955654740'}, vars:{}};
		return this.CTS1600955654740(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1600955654740 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1600955654740: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1600955654740: ended"); resolveP(res)});
		});
	}

	/**
	 * Function controllerTiny1
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600955654740(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600955654740*/
		
		    
		  //{refName: ''actionsVar'', thingIndex: params1586443759128.thingIndex, enabled: this.getEnabled(params1586443759128.item.actions), keyIndex: this.keyIndex(params1586443759128.item.actions)}
            
            page.c8o.log.debug("ref: " + props.parent.out.ref);
            if(props.parent.out.ref == "description"){
                this.form.pages[this.local.currentIndex].desc = props.parent.out.event;
                this.updateState();
            }
            else if(props.parent.out.ref.refName != undefined && props.parent.out.ref.refName == "actionsVar"){
                this.form.actions[props.parent.out.ref.thingIndex].actions[props.parent.out.ref.enabled]['vars'][props.parent.out.ref.keyIndex].str = props.parent.out.event;
                this.updateState();
            }
            else if(props.parent.out.ref.refName != undefined && props.parent.out.ref.refName == "actionsVar2"){
                let html = this.transformHtmlto$(props.parent.out.event);
                this.form.actions[props.parent.out.ref.thingIndex].actions[props.parent.out.ref.enabled]['vars'][props.parent.out.ref.keyIndex].str = html;
                this.updateState();
               
            }
            else if(props.parent.out.ref.config.title != undefined){
                props.parent.out.ref.config.title.html = props.parent.out.event;
                this.updateState();
                this.tick();
            }
            else{
                props.parent.out.ref.config.html = props.parent.out.event;
                this.updateState();
                this.tick();
            }
            resolve();
		
		/*End_c8o_function:CTS1600955654740*/
		});
	}

}
