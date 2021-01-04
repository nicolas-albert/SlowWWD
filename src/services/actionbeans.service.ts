import {Injectable}             from "@angular/core";
import {C8oPageBase,
        C8oCafUtils}            from 'c8ocaf';
import {Platform,
        ModalController,
        AlertController,
        PopoverController
}                               from "ionic-angular";
import { TranslateService }     from '@ngx-translate/core';

import { BrowserMultiFormatReader } from '@zxing/library';
import { sha256 } from 'js-sha256';
import { CameraOptions } from '@ionic-native/camera';
import { of, zip } from 'rxjs';
import { NotFoundException } from '@zxing/library';
import { Chooser } from '@ionic-native/chooser';
import { ViewController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import * as RandomVal from 'get-random-values';
import * as ts from 'typescript';
import { Camera } from '@ionic-native/camera';
import { CameraPopoverOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';


@Injectable()
export class ActionBeans{
    constructor(public translate: TranslateService){
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
	CTS1604330914949(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604330914949*/
		    let cpt  = 0;
		    let cpt2  = 0;
		    let cpt3 = 0;
		    let cpt4 = 0;
		    
		    let checkhasBeenProcessed = async () => {
    		    try{
    		        cpt3 ++;
    		        page.c8o.log.debug("[check pwa has build] n°"+cpt3+ " started");
    		        let viewPwa = await page.c8o.callJson("fs://c8oforms_fs.view", "ddoc","pwas", "view", "toBeDone").async();
    		        if(viewPwa.rows.length > 0){
    		            page.c8o.log.debug("[check pwa has build] n°"+cpt3+ " "+viewPwa.rows.length+" build(s) have not started");
    		            for(let elem of viewPwa.rows){
    		                let pingIt = await page.c8o.callJson("fs://c8oforms_fs.post", "_id", elem.id, "ping", "pong", "_use_policy", "merge").async();
    		                page.c8o.log.debug("[check pwa has build] n°"+cpt3+ " try to restart build " + elem.id);
    		            }
    		            page.c8o.log.debug("[check pwa has build] n°"+cpt3+ " we will wait 10000 ms before checking if every build had started");
    		            if(cpt3 < 6){
    		                setTimeout(() => {
    	                        checkhasBeenProcessed();
    	                    }, 10000)
    		            }
    		        }
    		        else{
    		            page.c8o.log.debug("[check pwa has build] n°"+cpt3+ " all build seems to have started correctly");
    		        }
    		       
    		    }
    		    catch(e){
    		        page.c8o.log.debug("[check pwa has build] has encontred an error", e);
    		    }
    		    
    		}
		    let checkhasBeenProcessedPublish = async () => {
                try{
                    cpt ++;
                    page.c8o.log.debug("[check publish done] n°"+cpt+ " started");
                    let viewPwa = await page.c8o.callJson("fs://c8oforms_fs.view", "ddoc","control_documents", "view", "control_documents_published").async();
                    if(viewPwa.rows.length > 0){
                        page.c8o.log.debug("[check publish done] n°"+cpt+ " "+viewPwa.rows.length+" publications(s) have not started");
                        for(let elem of viewPwa.rows){
                            let pingIt = await page.c8o.callJson("fs://c8oforms_fs.post", "_id", elem.id, "ping", "pong", "_use_policy", "merge").async();
                            page.c8o.log.debug("[check publish done] n°"+cpt+ " try to restart publication " + elem.id);
                        }
                        page.c8o.log.debug("[check publish done] n°"+cpt+ " we will wait 10000 ms before checking if every publications had started");
                        if(cpt < 6){
                            setTimeout(() => {
                                checkhasBeenProcessed();
                            }, 10000)
                        }
                    }
                    else{
                        page.c8o.log.debug("[check publish done] n°"+cpt+ " all publications seems to have started correctly");
                    }
                   
                }
                catch(e){
                    page.c8o.log.debug("[check publish done] has encontred an error", e);
                }
                
            }
		    
		    let checkhasBeenProcessedAnonymous = async () => {
                try{
                    cpt2 ++;
                    page.c8o.log.debug("[check anonymous has been enabled] n°"+cpt2+ " started");
                    let viewPwa = await page.c8o.callJson("fs://c8oforms_fs.view", "ddoc","control_documents", "view", "control_documents_create_user").async();
                    if(viewPwa.rows.length > 0){
                        page.c8o.log.debug("[check anonymous has been enabled] n°"+cpt2+ " "+viewPwa.rows.length+" anonymous have not started");
                        for(let elem of viewPwa.rows){
                            let pingIt = await page.c8o.callJson("fs://c8oforms_fs.post", "_id", elem.id, "ping", "pong", "_use_policy", "merge").async();
                            page.c8o.log.debug("[check anonymous has been enabled] n°"+cpt2+ " try to restart anonymous " + elem.id);
                        }
                        page.c8o.log.debug("[check anonymous has been enabled] n°"+cpt2+ " we will wait 10000 ms before checking if every anonymous had started");
                        if(cpt2 < 6){
                            setTimeout(() => {
                                checkhasBeenProcessedAnonymous();
                            }, 10000)
                        }
                    }
                    else{
                        page.c8o.log.debug("[check anonymous has been enabled]n°"+cpt2+ " all anonymous seems to have started correctly");
                    }
                   
                }
                catch(e){
                    page.c8o.log.debug("[check anonymous has been enabled] has encontred an error", e);
                }
                
            }
		    
		    
		    let checkhasBeenProcessedRemoveAnonymous = async () => {
                try{
                    cpt4 ++;
                    page.c8o.log.debug("[check anonymous has been disabled] n°"+cpt4+ " started");
                    let viewPwa = await page.c8o.callJson("fs://c8oforms_fs.view", "ddoc","control_documents", "view", "control_documents_delete_user").async();
                    if(viewPwa.rows.length > 0){
                        page.c8o.log.debug("[check anonymous has been disabled] n°"+cpt4+ " "+viewPwa.rows.length+" anonymous have not started");
                        for(let elem of viewPwa.rows){
                            let pingIt = await page.c8o.callJson("fs://c8oforms_fs.post", "_id", elem.id, "ping", "pong", "_use_policy", "merge").async();
                            page.c8o.log.debug("[check anonymous has been disabled] n°"+cpt4+ " try to restart anonymous " + elem.id);
                        }
                        page.c8o.log.debug("[check anonymous has been disabled] n°"+cpt4+ " we will wait 10000 ms before checking if every anonymous had started");
                        if(cpt < 6){
                            setTimeout(() => {
                                checkhasBeenProcessedAnonymous();
                            }, 10000)
                        }
                    }
                    else{
                        page.c8o.log.debug("[check anonymous has been disabled]n°"+cpt4+ " all anonymous seems to have started correctly");
                    }
                   
                }
                catch(e){
                    page.c8o.log.debug("[check anonymous has been disabled] has encontred an error", e);
                }
                
            }
		    
		    
		    page.c8o.log.debug("[check anonymous has been enabled] will wait 5000 ms before checking that pwa build has started");
    		setTimeout(() => {
                checkhasBeenProcessed();
                checkhasBeenProcessedAnonymous();
                checkhasBeenProcessedPublish();
                checkhasBeenProcessedRemoveAnonymous();
            }, 5000);
    		resolve();
		/*End_c8o_function:CTS1604330914949*/
		});
	}


	/**
	 * Function InitValsForFIles
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1576330045869(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576330045869*/
		    //Set globals
		    page.local["epoch2"] = (new Date()).getTime() + "";
		    const doStuff = ()=>{
                page.global['__viewindeok']= [];
                let flat = page["flatArray"]();
                page.global["__viewerTotal"] = flat[1];
                page.global["__viewerarr"] = flat[0];
                
                page["cpt"] = 0;
                
                // for any case we define adequat id an formId to use for pushing doc and if there is to push or delete files
                if(page.local.anonymous == true){
                    var array = new Uint32Array(2);
                    let result = RandomVal(array);
                    let random = result[0] * result[1];
                    let formId = page.local.formId.substring(0, page.local.formId.length -10);
                    page.local.myId = 'anonymous-'+ random +'_'+ formId + '_' + page["epoch"];
                    page.local.myFormId = formId;
                    page.local.myIsOnModeFile = page.global["__viewerTotal"] > 0;
                }
                else if(page["edit"] == true){
                    page.local.myId = page["navParams"]["data"]["edit"];
                    page.local.myFormId = page["form"]["_id"];
                    page.local.myIsOnModeFile = page.global["__viewerTotal"] > 0 ||  page.global["__C8O_TODELETE"].length >0;
                    let grpName = "_C8O_HIDDEN_" + page.local.myFormId;//((page["form"]["creator"].replace(/@/g,'_')).replace(/\./g,'-')) + page.local.myFormId;
                    page.local.grp[grpName] = true;
                    
                }
                else{
                    page.local.myId = page.local.user+'_'+page.local.formId+'_'+page["epoch"];
                    page.local.myFormId = page.local.formId;
                    page.local.myIsOnModeFile = page.global["__viewerTotal"] > 0;
                    page.local.grp = {};
                    let grpName = "_C8O_HIDDEN_" + page.local.myFormId;//((page["form"]["creator"].replace(/@/g,'_')).replace(/\./g,'-')) + page.local.myFormId;
                    page.local.grp[grpName] = true;
                }
                
                resolve();
            }
		    
		    doStuff();
		    
		    
            
		/*End_c8o_function:CTS1576330045869*/
		});
	}


	/**
	 * Function DoSyncAndUpdateGetOnPull
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1574431507993(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1574431507993*/
		    page.global.localform = {};
		   
		    /**
		     * DESCIBES PATH TO TITLE (SIMPLE) OF EACH ELEMENT
		    */
		    
		    const pathToTitle = {
		            "text" : {"location":"config.label"},
		            "ion-label": {"location":"config.text"},
		            "checkbox":{"location":"config.label"},
		            "checkbox_group":{"location":"config.label"},
		            "radio":{"location":"config.label"},
		            "radio_group":{"location":"config.label"},
		            "slider":{"location":"config.label"},
		            "select":{"location":"config.label"},
		            "datetime":{"location":"config.label"},
		            "time":{"location":"config.label"},
		            "img":{"location":"config.label"},
		            "barcode":{"location":"config.label"},
		            "file":{"location":"config.label"},
		            "signature":{"location":"config.label"},
		            "ion-card":{"location":"config.title.text"}
		            };
		            
		    /**
             * DESCIBES PATH TO TITLE (HTML) OF EACH ELEMENT THAT WE WANTS TO CREATE
            */
		    
		    const pathToCopy = {
                    "text" : {"location":"config.html"},
                    "ion-label": {"location":"config.html"},
                    "checkbox":{"location":"config.html"},
                    "checkbox_group":{"location":"config.html"},
                    "radio":{"location":"config.html"},
                    "radio_group":{"location":"config.html"},
                    "slider":{"location":"config.html"},
                    "select":{"location":"config.html"},
                    "datetime":{"location":"config.html"},
                    "time":{"location":"config.html"},
                    "img":{"location":"config.html"},
                    "barcode":{"location":"config.html"},
                    "file":{"location":"config.html"},
                    "signature":{"location":"config.html"},
                    "ion-card":{"location":"config.title.html"}
                    };
		  
		    /**
		     * GET VALUE THAT WE WANTS TO COPY
		    */
		    const getValueToCopy = (obj: Array<any>, path: string, i: number = 0): any =>{
		        const arr = path.split(".")
                const elem = obj[arr[i]];
                if(i === arr.length -1){
                    //finished
                    return elem;
                }
                else{
                    //call cursive
                   return getValueToCopy(elem, path, i + 1);
                }
            };
            
            /**
             * COPY VALUE TO NEW PATH
            */
            const copyValueToNewPath = (obj: Array<any>, path: string, value: string, i: any) :void =>{
                try{
                    if(eval("obj["+i+"]."+ pathToCopy[obj[i].type].location + "== undefined")){
                        eval("obj["+i+"]."+ pathToCopy[obj[i].type].location + "='"+ value+"'");
                    }
                }
                catch(e){
                    page.c8o.log.error("error", e);
                }
            }
            
            /**
             * UPDATE FORM TO SUPPORT PAGE
            */
		    const updateToPages = (obj: Array<any>): string => {
		        let pageTechName = "Page_" + new Date().getTime();
		        for(let i in obj){
		            try{
	                    obj[i]["config"]["page"] = pageTechName;
		            }
		            catch(e){
		                console.log("error during migration: \n",e);
		            }
		        }
		        return pageTechName;
		    };
		    
		    /**
             * UPDATE FORM TO CREATE HTML PATH 
            */
            const updateHtml = (obj: Array<any>): void => {
                for(let i in obj){
                    try{
                        var valToCopy = getValueToCopy(obj[i], pathToTitle[obj[i].type].location);
                        copyValueToNewPath(obj, pathToCopy[obj[i].type].location, valToCopy, i);
                    }
                    catch(e){
                        console.log("error during migration: \n",e);
                    }
                }
            };
            
            /**
             * UPDATE FORM TO SUPPORT CONDITIONS
            */
            const updateToConditions = (obj: Array<any>): void => {
                for(let i in obj){
                    try{
                        if(obj[i]["type"] == "radio_group" || obj[i]["type"] == "checkbox_group"){
                                for(let child of obj[i]["children"]){
                                    child["id"] = (Math.random() + "").substring(2);
                                }
                                for(let child of obj[i]["lines"]){
                                    child["id"] = (Math.random() + "").substring(2);
                                }
                        }
                        else if(obj[i]["type"] == "select" || obj[i]["type"] == "radio" || obj[i]["type"] == "checkbox"){
                            for(let child of obj[i]["children"]){
                                child["id"] = (Math.random() + "").substring(2);
                            }
                        }
                        else if(obj[i]["type"] == "ion-card"){
                            updateToConditions(obj[i]["children"]);
                        }
                    }
                    catch(e){
                        console.log("error during migration: \n",e);
                    }
                }
            };
		    
		    page.global["__helpersRadio"] = (arr)=>{
                for(let elem in arr){
                    if(arr[elem]["selected"]){
                        return arr[elem]["value"];
                    }
                }  
              };
              page.global["__helpersRadioGrp"] = (arr)=>{
                  let obj = 
                  {
                  "children":
                      {
                          
                      }
                  }
                  for(let elem in arr){
                      obj["children"][arr[elem]["title"]] = arr[elem]["selected"]
                  }
                  return obj;
                };
          // Calling sync continuous
          page["datetimeconfig"]['fr'] = false;
          page["datetimeconfig"]['en'] = false;
          page["datetimeconfig"]['es'] = false;
          
          page["datetimeconfig"][page.global.language] = true;
          let t = true;
          let done_call_action = false;
          
          let getForm = () => {
              page.c8o.callJsonObject("fs://c8oforms_fs.get",{docid:page.local.formId
              })
              .then((response: any, parameters)=>{
                  try{
                      let flag = false;
                      if(response["technicalVersion"] == undefined){
                          updateHtml(response.formulaire); 
                          let pageTechName = updateToPages(response.formulaire); 
                          response["technicalVersion"] = "1.0.2";
                          let desc = response.descform;
                          response["pages"] = [{name : "Page 1", pageTechName:pageTechName, desc:desc}];
                          flag = true;
                      }
                      else if(response["technicalVersion"] == "1.0.0") {
                          let pageTechName = updateToPages(response.formulaire); 
                          response["technicalVersion"] = "1.0.2";
                          let desc = response.descform;
                          response["pages"] = [{name : "Page 1", pageTechName:pageTechName, desc: desc}];
                          flag = true;
                      }
                      else if(response["technicalVersion"] == "1.0.1") {
                          let pageTechName = updateToPages(response.formulaire); 
                          response["technicalVersion"] = "1.0.2";
                          let desc = response.descform;
                          for(let i in response["pages"]){
                              response["pages"][i].desc = desc;
                          }
                          
                          flag = true;
                      }
                      else if(response["technicalVersion"] == "1.0.2") {
                          updateToConditions(response.formulaire);  
                          response["technicalVersion"] = "1.0.3";
                          flag = true;
                      }
                      page["formsList"] = response.formulaire;
                      page["form"] = response;                              
                      if(flag){
                          page['updateState']();
                      }
                      //search for actions that needs specific things
                      let exists_submit = false;
                      for(let item of page["form"]["formulaire"]){
                          if(item.type == "submit"){
                              exists_submit = true;
                              if(!done_call_action){
                                  page["actionBeans"]["STS1586453262123"](page, {}, {item:item, viewer:true}, null);
                                  done_call_action = true;
                              }
                          }
                      }
                      if(page['form']["actions"] != undefined){
                          for(let item of page['form']["actions"]){
                              if(item.type == "submit"){
                                  exists_submit = true;
                                  if(!done_call_action){
                                      page["actionBeans"]["STS1586453262123"](page, {}, {item:item, viewer:true}, null);
                                      done_call_action = true;
                                  }
                              }
                          }
                      }
                      
                      
                      page.local["exists_submit"] = exists_submit;
                      
                      page.ref.detectChanges();
                      resolve();
                      return null;
                  }
                  catch(e){
                      resolve();
                      return null;
                  }
                  
              })
          }
          getForm();
          page.c8o.callJsonObject("fs://c8oforms_fs.sync",{
              continuous: true,
              retry: true,
              batch_size: 100,
              batches_limit: 10,
              heartbeat: false,
              timeout: 25000
              })
              .then((response: any, parameters)=>{
                  // Calling live view*/
                  return null;
              })
              .progress((progress)=>{
                  if(progress.finished == true){
                      if(progress.pull){
                          getForm();
                      }
                      t = false;
                      /*this.icon.nativeElement.classList.remove("animated");
                      this.icon.nativeElement.classList.remove("jackInTheBox");
                      void this.icon.nativeElement;
                      setTimeout(() => {
                          t = false;
                          this.iconName = 'cloud-done';
                          this.icon.nativeElement.classList.add("animated");
                          this.icon.nativeElement.classList.add("jackInTheBox");
                          
                      }, 10);*/
                  }
              })
              .fail((err)=>{
                  page.c8o.log.error("Sync: " + JSON.stringify(err));
                  reject();
              }); 
		/*End_c8o_function:CTS1574431507993*/
		});
	}


	/**
	 * Function dragPage
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1592508984330(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1592508984330: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1592508984330: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1592508984330: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{i: get('i', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1592508984330: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["dragPage"] = stack["1592508984330"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["drag"] = stack["1592508984333"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'drag', actionFunction: 'CTS1592508984333'}, vars:{i: get('i', `params.i`)}};
		return this.CTS1592508984333(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1592508984333 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1592508984330: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1592508984330: ended"); resolveP(res)});
		});
	}

	/**
	 * Function addResolveOutput
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606311275976(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606311275976*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		resolve(vars.output);
		/*End_c8o_function:CTS1606311275976*/
		});
	}


	/**
	 * Function doSearchForm
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605199059317(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605199059317*/
		    if(page["query"] == undefined || page["query"] == ""){
		        new Promise(async(resolve2, reject2)=>{
		            
                    try{
                        if(page.local.searchTags == undefined){
                            page.local.searchTags = [];
                        }
                        if(page.local.searchSubTags == undefined){
                            page.local.searchSubTags = [];
                        }
                        let tag = [];
                        if(page.local.folder != "" && page.local.folder != undefined){
                            if(page.local.searchTags.indexOf(page.local.folder) == -1){
                                page.local.searchTags.push(page.local.folder);
                            }
                        }
                        page.local.folder = "";
                        
                        let params = {"selector":{}};
                        if(page.local.searchTags.length > 0){
                            params.selector["tag"] = {$in: page.local.searchTags}
                        }
                        if(page.local.searchSubTags.length > 0){
                            params.selector["subTag"] = {$in: page.local.searchSubTags}
                        }
                        if(page.local.published){
                            params.selector["c8o_view_type_published_form"] = true;
                        }
                        else{
                            params.selector["c8o_view_type_drafts_form"] = true;
                        }
                        
                        let resp = await page.c8o.callJsonObject("fs://c8oforms_fs.find", params).async();                        
                        let responseAfterView = resp.docs.map((doc)=>{
                            
                            // comes from ddoc = formsV2 view = out_folders + ddoc = published_formsV2 view = out_folders
                            var objToEmit = {"name": doc.name, "pwa_enabled": doc.pwa_enabled, "pwa_subPath": doc.pwa_subPath, "version": doc.version, "status": doc.status};
                            if(doc.thumbnail != undefined && doc.thumbnail.enabled){
                                if(doc.thumbnail.type != undefined && doc.thumbnail.type == "color"){
                                    objToEmit["color"] = doc.thumbnail.color;
                                }
                                else{
                                    objToEmit["thumbnail"] = true;
                                }
                                
                            }
                            else if(doc.wallpaper != undefined && doc.wallpaper.enabled){
                                if(doc.wallpaper.type != undefined && doc.wallpaper.type == "color"){
                                    objToEmit["color"] = doc.wallpaper.color;
                                }
                                else{
                                    objToEmit["wallpaper"] = true;
                                }
                            }
                            else{
                                objToEmit["random"] = doc.wallpaper.random;
                            }
                            

                            return {"id": doc._id, value: objToEmit}; 
                            //end difference from view
                            
                        });
                        page["list"] = responseAfterView;
                        page.local.count = page["list"].length;
                        resolve2()
                    }
                    catch(e){
                        
                    }
		        })
		        .then(()=>{
		            resolve();
		        })
		        .catch((e)=>{
		            resolve();
		        })
		        
		    }
		    else{
		        new Promise(async(resolve2, reject2)=>{
	                try{
	                    if(page.local.searchTags == undefined){
                            page.local.searchTags = [];
                        }
                        if(page.local.searchSubTags == undefined){
                            page.local.searchSubTags = [];
                        }
	                    let filterName = page.local.published ? "c8o_view_type_published_form" : "c8o_view_type_drafts_form";
	                    var filter = undefined;
	                    let filterString = "";
	                    if(page.local.published){
	                        filterString = "filter = function (doc) { try{return doc.c8o_view_type_published_form === true && doc.deleted !== true";
	                        
	                    }
	                    else{
	                        filterString = "filter = function (doc) { try{return doc.c8o_view_type_drafts_form === true && doc.deleted !== true";
	                    }
	                    if(page.local.folder != "" && page.local.folder != undefined){
                            if(page.local.searchTags.indexOf(page.local.folder) == -1){
                                page.local.searchTags.push(page.local.folder);
                            }
                        }
	                    page.local.folder ="";
	                    for(let i in page.local.searchTags){
	                        if(i=="0"){
	                            filterString += " && doc.tag != undefined && doc.tag.length > 0 && doc.tag.indexOf('"+page.local.searchTags[i]+"') > -1";
	                        }
	                        else{
	                            filterString += " || doc.tag.indexOf('"+page.local.searchTags[i]+"') > -1";
	                        }
	                        
	                    }
	                    for(let j in page.local.searchSubTags){
	                        if(j=="0"){
                                filterString += " && doc.subTag != undefined && doc.subTag.length > 0 && doc.subTag.indexOf('"+page.local.searchSubTags[j]+"') > -1";
                            }
	                        else{
	                            filterString += " || doc.subTag.indexOf('"+page.local.searchSubTags[j]+"') > -1";
	                        }
	                    }
	                    filterString += "}catch(e){}}";
	                    eval(filterString);
	                    let params = {filter: filter, fields:["name"], query: page["query"], highlighting: true, include_docs: true, mm: '0%'}
	                    let resp = await page.c8o.callJsonObject("fs://c8oforms_fs.search", params).async();
	                    let responseAfterView = resp.rows.map((emit)=>{
	                        let doc = emit.doc;
	                        // comes from ddoc = formsV2 view = out_folders + ddoc = published_formsV2 view = out_folders
	                        var objToEmit = {"name": doc.name, "pwa_enabled": doc.pwa_enabled, "pwa_subPath": doc.pwa_subPath, "version": doc.version, "status": doc.status};
	                        if(doc.thumbnail != undefined && doc.thumbnail.enabled){
	                            if(doc.thumbnail.type != undefined && doc.thumbnail.type == "color"){
	                                objToEmit["color"] = doc.thumbnail.color;
	                            }
	                            else{
	                                objToEmit["thumbnail"] = true;
	                            }
	                            
	                        }
	                        else if(doc.wallpaper != undefined && doc.wallpaper.enabled){
	                            if(doc.wallpaper.type != undefined && doc.wallpaper.type == "color"){
	                                objToEmit["color"] = doc.wallpaper.color;
	                            }
	                            else{
	                                objToEmit["wallpaper"] = true;
	                            }
	                        }
	                        else{
	                            objToEmit["random"] = doc.wallpaper.random;
	                        }
	                        
	                        //// difference from view
	                        if(emit.highlighting.name != undefined){
	                            objToEmit.name = emit.highlighting.name;
	                        }
	                        return {"id": emit.id, "score": emit.score, value: objToEmit}; 
	                        //end difference from view
	                        
	                    });
	                    page["list"] = responseAfterView;
	                    page.local.count = page["list"].length;
	                    resolve2()
	                }
	                catch(e){
	                    console.log("errr", e);
	                    resolve2();
	                }
	            })
	            .then(()=>{
	                resolve();
	            })
		    }
    		
		
		/*End_c8o_function:CTS1605199059317*/
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
	CTS1606828508628(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606828508628*/
		    page.global.settings = props.parent.out;
		resolve();
		/*End_c8o_function:CTS1606828508628*/
		});
	}


	/**
	 * Function callViewLiveAndFillFormList
	 *   Process a tick (Refresh define in caf)
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1567094239807(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1567094239807: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1567094239807: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1567094239807: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{keys: get('keys', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1567094239807: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["callViewLiveAndFillFormList"] = stack["1567094239807"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["DoCallViewLiveAndFillFormList"] = stack["1567094239810"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DoCallViewLiveAndFillFormList', actionFunction: 'CTS1567094239810'}, vars:{}};
		return this.CTS1567094239810(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1567094239810 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1567094239807: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1567094239807: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverGetLinkShare
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606753067983(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606753067983: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606753067983: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606753067983: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606753067983: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverGetLinkShare"] = stack["1606753067983"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doGetLinkShare"] = stack["1606753201534"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doGetLinkShare', actionFunction: 'CTS1606753201534'}, vars:{}};
		return this.CTS1606753201534(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1606753255842"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.translate.instant('copy_link')`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606753201534 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606753067983: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606753067983: ended"); resolveP(res)});
		});
	}

	/**
	 * Function SetGlobals
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606825446170(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606825446170*/
		    page.global.indexthumb = vars.selectedForm['thumbnail'] !== undefined ? vars.selectedForm['thumbnail']['index'] : 0;
		    page.global.enabledThumbTemp = vars.selectedForm['thumbnail'] !== undefined ? vars.selectedForm['thumbnail']['enabled']  !== undefined ? vars.selectedForm['thumbnail']['enabled'] : false : false;
		    page.global.thumbType =  vars.selectedForm['thumbnail'] !== undefined ?  vars.selectedForm.thumbnail.type : null;
		    page.global.imgIndex = vars.selectedForm._id;
		    page.global.thumbColor = vars.selectedForm['thumbnail'] !== undefined ? vars.selectedForm.thumbnail.color : null
		resolve();
		/*End_c8o_function:CTS1606825446170*/
		});
	}


	/**
	 * Function updateState
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1554990173781(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1554990173781*/
		    
		    try{
                let exists_submit = false;
                for(let item of page['formsList']){
                    if(item["type"] == "submit"){
                        exists_submit = true;
                    }
                }
                page.local['exists_submit'] = exists_submit;
            }
            catch(e){
                
            }
	        let params = {};
	        params["formulaire"] = page["formsList"];
	        params["actions"] = page["form"]["actions"];
	        params["pages"] = page["form"]["pages"];
            params["_use_policy"] =  "merge";
            params["_id"] = page["global"]["formSelected"] != undefined ? page["global"]["formSelected"]["_id"]: page["local"]["formId"];
            params["wallpaper"] = page["form"]["wallpaper"];
            params["name"] = page["form"]["name"]; 
            params['descform'] = page["form"]["descform"];
            params['namePosition'] = page["form"]["namePosition"];
            params['descformPosition'] = page["form"]["descformPosition"];
            page["form"]["respNameRequired"] == undefined ? page["form"]["respNameRequired"] = false : true;
            params["respNameRequired"] = page["form"]["respNameRequired"];
            params["creator"] = page['form']['creator'];
            params["tag"] = page["form"]["tag"];
            params["subTag"] = page["form"]["subTag"];
            params["technicalVersion"] = page["form"]["technicalVersion"];
            params["_use_merge_formulaire"] = "override"; 
            params["_use_merge_pages"] = "override"; 
            params["_use_merge_actions"] = "override"; 
	        page.c8o.callJsonObject("fs://c8oforms_fs.post", params)
	        .then((response: any, params: any)=>{
	            //page.tick();
	            resolve();
	            page.ref.detectChanges();
	            setTimeout(()=>{
	                page.ref.detectChanges();
	            }, 3000)
	            page.c8o.log.debug("updateState: " + JSON.stringify(response));
	          return null;
	        })
	        .fail((err: any)=>{
	            page.ref.detectChanges();
	            /*setTimeout(()=>{
                    page.ref.detectChanges();
                }, 3000)*/
	            resolve();
	            page.c8o.log.error("error updateState: ", err);
	        })
		/*End_c8o_function:CTS1554990173781*/
		});
	}

    /**
     * Function ChooserAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    ChooserAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            const chooserI : Chooser = page.getInstance(Chooser);
            let mimeType = props.mimeType != null ? props.mimeType : null;
            chooserI.getFile(mimeType)
            .then((file)=>{
                resolve(file);
            })
            .catch((error:any)=>{
                if(error == "cordova_not_available"){
                    page.router.c8o.log.debug("[MB] ChooserAction: cordova isn't available: using mocked response: " + props.mockedResponse);
                    resolve(props.mockedResponse);
                }
                else{
                    page.router.c8o.log.error("[MB] FileChooserAction :", error);
                    reject(error);
                }
            });
        });
    }

	/**
	 * Function deleteEntry
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1567086212041(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1567086212041*/
		    delete page.global.selectedItem[vars.id];
		    resolve();
		/*End_c8o_function:CTS1567086212041*/
		});
	}


	/**
	 * Function blobToBase64Function
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606829529555(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606829529555: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606829529555: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606829529555: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{blobData: get('blobData', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606829529555: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["blobToBase64Function"] = stack["1606829529555"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doBlobToBase64"] = stack["1606829547923"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doBlobToBase64', actionFunction: 'CTS1606829547923'}, vars:{blobData: get('blobData', `params.blobData`)}};
		return this.CTS1606829547923(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606829547923 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606829529555: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606829529555: ended"); resolveP(res)});
		});
	}
    /**
     * Function IterateAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     * @param doLoop, the doLoop callback function
     */
    IterateAction(page: C8oPageBase, props, vars, doLoop) : Promise<any> {
        
        const iterate = async () => {
            let arr = [];
            let obj = props.items;
            if (obj != null && obj !== undefined) {
                if (Array.isArray(obj)) {
                    arr = obj
                } else {
                    arr = Array.from(obj, (v, k) => k)
                }
            }
            for (let i = 0; i < arr.length; i++) {
                try {
                    await doLoop(page, arr[i], i)
                    page.c8o.log.trace("[MB] IterateAction : loop "+ (i+1) + " done")
                } catch (error) {
                    throw new Error(error.message ? error.message : error)
                }
            }
            return "done";
        }
        
        return new Promise((resolve, reject) => {
            Promise.resolve(iterate())
            .then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
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
	CTS1593708089557(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1593708089557*/
		
		page.local.submitActions2 = JSON.stringify(page.local["submitActions"]);
		page.local.grp2 = JSON.stringify(page.local.grp);
		page.local.filesToSeq = [];
		page.local.filesInfoToSeq = [];
		// post r
		let postRecursive = (arr: any, index: number, total: number, id: any = null) => {
		    return new Promise((resolve)=>{
		        if(total == 0 || arr == undefined){
	                resolve();
	            }
		        else{
	                let ids = id != null ? id: page.local.user+'_'+page.local.edit+'_'+page["epoch"];
	                let args;
	                let type = (arr[index]["file"].type == undefined || arr[index]["file"].type == "") ? "application/octet-stream":arr[index]["file"].type;
                    let file: Blob = arr[index]["file"];
	                let name = arr[index]["bean"] + "_C80C80_" +arr[index]["file"]["name"]+"_C80C80_"+(new Date).getTime()
	                if(name.indexOf("_C80C80_") != -1){
                        let id = name.substring(0, name.indexOf("_"));
                        for(let el of page["formsList"]){
                            if(el.id == id){
                                if(page["formsSubmit"][el.name]["value"] == undefined || page["formsSubmit"][el.name]["value"] == ""){
                                    page["formsSubmit"][el.name]["value"] = [];
                                }
                                page["formsSubmit"][el.name]["value"].push(name);
                                
                            }
                        }
                        //"1581416653460_C80C80_captureWebsocketPayDarty.PNG_C80C80_1581516753158".substring(0,"1581416653460_C80C80_captureWebsocketPayDarty.PNG_C80C80_1581516753158".indexOf("_"))
                    }
	                page.local.filesToSeq.push(file);
	                page.local.filesInfoToSeq.push({
                            "docid":ids,
                            "name": name,
                            "content_type": type,
                            "index":index
                    }) 
	                
	                page["cpt"]= page["cpt"]+1;
                    //console.log("Progress: " +page.cpt+ " / "+ total);
                    page.global['cptTotal'] = page.global['cptTotal'] + 1;
                    page.global["__viewerProgress"] = page["cpt"];
                    page.global["__viewerProgressDelete"] = page.global["__viewerProgressDelete"] +page["cpt"];
                    page.global['__viewerarr'][index].file["ok"]= true;
                    page.global['__viewindeok'][index]= true;
                    if(page["cpt"] == total){
                        console.log("finished");
                        resolve();
                    }
                    else{
                        postRecursive(arr, index + 1, total, ids)
                        .then(()=>{
                            resolve();
                        });

                    }
	                    
	                
		        }
		    });
		}
		
		let processSingature = ()=>{
		    if(page.local.objAtt != undefined){
		        for(let item in page.local.objAtt){
	                //let type = () ? "application/octet-stream":arr[index]["file"].mediaType;
	                page.local.filesToSeq.push(
	                        page.local.objAtt[item]["data"]
	                );  
	                page.local.filesInfoToSeq.push({
	                    "docid":page.local.myId,
                        "name": page.local.objAtt[item]["name"],
                        "content_type": page.local.objAtt[item]["content_type"]
                })
	            }
		    }
		}
		
		 page.global["totalcount"] =  page.global['__C8O_TODELETE'].length + page.global['__viewerarr'].length;
         page.global['cptTotal'] = 0;   
         page.local["submitting"] = true;
         postRecursive(page.global["__viewerarr"], 0, page.global["__viewerTotal"], page.local.myId)
         .then((res)=>{
             processSingature();
             page.local.formsSubmit2 = JSON.stringify(page["formsSubmit"]);
             page.local.filesInfoToSeq = JSON.stringify(page.local.filesInfoToSeq);
             resolve();
         })
		
		
		
		/*End_c8o_function:CTS1593708089557*/
		});
	}


	/**
	 * Function getSizeObject
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1567071335977(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1567071335977: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1567071335977: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1567071335977: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{obj: get('obj', `null`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1567071335977: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["getSizeObject"] = stack["1567071335977"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["getsizeobject"] = stack["1567071353635"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getsizeobject', actionFunction: 'CTS1567071353635'}, vars:{obj: get('obj', `params['obj']`)}};
		return this.CTS1567071353635(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1567071353635 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1567071335977: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1567071335977: ended"); resolveP(res)});
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
	STS1587563852086(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1587563852086: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1587563852086: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1587563852086: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{val: get('val', `''`), path: get('path', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1587563852086: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["setLocal"] = stack["1587563852086"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["setLocal"] = stack["1587563874086"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setLocal', actionFunction: 'CTS1587563874086'}, vars:{val: get('val', `params.val`), path: get('path', `params.path`)}};
		return this.CTS1587563874086(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1587563874086 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1587563852086: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1587563852086: ended"); resolveP(res)});
		});
	}
    /**
     * Function RootPageAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    RootPageAction(page: C8oPageBase, props, vars) : Promise<any> {
	    function toString(data) {
	        if (data) {
	            try {
	                return JSON.stringify(data);
	            } catch(e) {
	                return data.toString();
	            }
	        } else {
	           return "no data"; 
	        }
	    }
		
        return new Promise((resolve, reject) => {
            let q:string = props.page; // qname of page
            let p:string = q.substring(q.lastIndexOf('.')+1);
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.7.0.2", version) : version.localeCompare("7.7.0.2");
            let v:any = greater ? p : page.getPageByName(p);
            
            page.routerProvider.setRoot(v, props.data, {
                animate: props.animate == "true" ? true:false,
                duration: props.animate_duration
            })
            .then((res:any) => {
				page.c8o.log.debug("[MB] Page '"+p+"' rooted with data: " + toString(props.data));
                resolve(res)
            }).catch((error:any) => {
				page.c8o.log.debug("[MB] Could not root to page '"+p+"'");
                reject(error)
            })
        });
    }

	/**
	 * Function closeOptions
	 *   This functions is used to close an element selected on editor page
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1568216812347(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1568216812347: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1568216812347: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1568216812347: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{item: get('item', `null`), child: get('child', `false`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1568216812347: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["closeOptions"] = stack["1568216812347"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doCloseOptions"] = stack["1568216916523"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doCloseOptions', actionFunction: 'CTS1568216916523'}, vars:{item: get('item', `params.item`), child: get('child', `params.child`)}};
		return this.CTS1568216916523(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1568216916523 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1568216812347: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1568216812347: ended"); resolveP(res)});
		});
	}

	/**
	 * Function sublim
	 *   This function is used to open an element selected on editor page
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1568215700164(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1568215700164: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1568215700164: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1568215700164: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{item: get('item', `null`), child: get('child', `false`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1568215700164: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["sublim"] = stack["1568215700164"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doSublim"] = stack["1568215765371"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doSublim', actionFunction: 'CTS1568215765371'}, vars:{item: get('item', `params.item`), child: get('child', `params.child`)}};
		return this.CTS1568215765371(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1568215765371 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1568215700164: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1568215700164: ended"); resolveP(res)});
		});
	}

	/**
	 * Function doGetOffset
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606731785043(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606731785043*/
		resolve(new Date().getTimezoneOffset() * 60000 * -1);
		/*End_c8o_function:CTS1606731785043*/
		});
	}


	/**
	 * Function doBlobToBase64
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606829547923(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606829547923*/
		    var reader = new FileReader();
            reader.onloadend = ()=> {
                resolve(reader.result);
            };
            reader.readAsDataURL(vars.blobData);
		/*End_c8o_function:CTS1606829547923*/
		});
	}


	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606843501821(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606843501821*/
		//console.log(vars.selectedForm);
		    try{
		        if(vars.selectedForm._id == page.global.formSelected._id){
		            page.global.formSelected = null;	
	            }
		    }
		    catch(e){
		        
		    }
		    resolve();
		/*End_c8o_function:CTS1606843501821*/
		});
	}

    /**
     * Function OAuthLoginAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    OAuthLoginAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let clientid = props.clientid;
            let provider = props.provider;
            let tenantid = props.tenantid ? props.tenantid:"common";
            let scope, response_mode, response_type, callbackurl, oAuthUrl
            let loginRequestable
            let checkAccessTokenRequestable
            if (clientid && provider) {
                page.getInstance(Platform).ready().then(() => {                                         // Wait for CDV Plugins to be initialized                
                    switch(provider) {
                        case 'azure':
                            scope = props.scope ? props.scope :'openid' +                               // Scopes...
                                    '%20https%3A%2F%2Fgraph.microsoft.com%2FUser.Read' +
                                    '%20Files.ReadWrite'
                            response_mode = 'fragment&state=12345&nonce=678910'                         // Ask implicitflow
                            response_type = 'id_token+token'

                            if (props.callbackurl) {
                                callbackurl   = props.callbackurl 
                            } else {
                                callbackurl = window["cordova"] != undefined ?
                                        'https://login.live.com/oauth20_desktop.srf' :
                                        page.c8o.endpointConvertigo + "/projects/lib_OAuth/getToken.html"   // the call back URL to check (As declared in the app portal)
                            }
                                
                            oAuthUrl = 'https://login.microsoftonline.com/' + tenantid + '/oauth2/v2.0/authorize?' +     
                                'client_id=' + clientid +                                             
                                '&response_type='+ response_type +                                    
                                '&scope=' + scope +
                                '&response_mode=' + response_mode
                                
                            loginRequestable = props.loginRequestable ? props.loginRequestable : "lib_OAuth.loginAzureAdWithAccessToken"
                            checkAccessTokenRequestable = props.checkAccessTokenRequestable ? props.checkAccessTokenRequestable : "lib_OAuth.checkAccessToken"
                            break
                            
                        case "linkedin":
                            scope = props.scope ? props.scope : 'r_basicprofile'
                            response_type = 'code'
                                    
                            oAuthUrl = 'https://www.linkedin.com/oauth/v2/authorization?' +     
                                'client_id=' + clientid +                                             
                                '&response_type='+ response_type +                                    
                                '&scope=' + scope +
                                '&state=c8ocsrf'
                        
                            loginRequestable = props.loginRequestable ? props.loginRequestable : "lib_OAuth.loginLinkedInWithCode"
                            checkAccessTokenRequestable = props.checkAccessTokenRequestable ? props.checkAccessTokenRequestable : "lib_OAuth.checkAccessTokenLinkedIn"
                            if (props.callbackurl) {
                                callbackurl   = props.callbackurl 
                            } else {
                                callbackurl   = window["cordova"] != undefined ? 
                                    'https://www.convertigo.com/authorize':
                                    page.c8o.endpointConvertigo + "/projects/lib_OAuth/getTokenLinkedIn.html"
                            }
                            break

                        case "openid":
                            scope = props.scope ? props.scope : 'openid'
                            response_type = props.response_type ?  props.response_type:'id_token+token'
                                    
                            if (!props.authorization_endpoint) {
                                page.c8o.log.error("[MB] OAuth login, Authorization endpoint no set for OpenID provider")
                                reject("[MB] OAuth login, Authorization endpoint no set for OpenID provider")
                                return
                            }    

                            
                            if (!props.callbackurl) {
                                page.c8o.log.error("[MB] OAuth login, redirect URI  no set for OpenID provider")
                                reject("[MB] OAuth login, redirect URI  no set for OpenID provider")
                                return
                            }    
                            callbackurl = props.callbackurl
                            oAuthUrl = props.authorization_endpoint + '?' +
                                'client_id=' + clientid +                                             
                                '&response_type='+ response_type +                                    
                                '&scope=' + scope +
                                '&state=c8ocsrf' +
                                '&nonce=' + Date.now();
                        
                            loginRequestable = props.loginRequestable ? props.loginRequestable : "lib_OAuth.loginOpenID"
                            checkAccessTokenRequestable = props.checkAccessTokenRequestable ? props.checkAccessTokenRequestable : "lib_OAuth.checkAccessOpenID"
                            break
                            
                        default:
                            page.c8o.log.error("[MB] OAuth login, invalid provider type")
                    }
                        
                    page.routerProvider.doOAuthLogin(
                        oAuthUrl, 
                        callbackurl,
                        loginRequestable,                                                       // The server sequence to be launched to login
                        checkAccessTokenRequestable,                                            // The server sequence to be launched to check the access token
                    ).then((response: any )=>{
                        resolve( response )
                    })
                    .catch((error: any) => {
                        page.c8o.log.error("[MB] OAuth login, Login error" + error)
                        reject( error )
                    })
                })
            }
            else {
                page.c8o.log.error("[MB] OAuth login, Missing Parameters")
                reject("[MB] OAuth login, Missing Parameters")
            }
        });
    }


	/**
	 * Function popOverManageAccessRights
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606819651922(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606819651922: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606819651922: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606819651922: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606819651922: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverManageAccessRights"] = stack["1606819651922"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1606819669368"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{existingGrps: params.selectedForm}`), cssClass: get('cssClass', `'modalCSV'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.ManageAccessRights'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.ModalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606819651922: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606819651922: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setLocalDraggingToFalse
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600441295937(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600441295937*/
		page.local.dragging = false;
		page.local.draggingActions = false;
		page.local.draggingName = "";
//		console.log("dragend");
		resolve();
		/*End_c8o_function:CTS1600441295937*/
		});
	}


	/**
	 * Function setSpinner
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1586254399526(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1586254399526: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1586254399526: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1586254399526: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1586254399526: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["setSpinner"] = stack["1586254399526"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["setLocalSpinnerTrue"] = stack["1586254412312"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setLocalSpinnerTrue', actionFunction: 'CTS1586254412312'}, vars:{}};
		return this.CTS1586254412312(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1586254412312 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1586254399526: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1586254399526: ended"); resolveP(res)});
		});
	}

	/**
	 * Function dragElementTolist
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1568121437300(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1568121437300: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1568121437300: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1568121437300: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{type: get('type', `''`), cat: get('cat', `'visual'`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1568121437300: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["dragElementTolist"] = stack["1568121437300"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["drag"] = stack["1568121550604"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'drag', actionFunction: 'CTS1568121550604'}, vars:{type: get('type', `params.type`), cat: get('cat', `params.cat`)}};
		return this.CTS1568121550604(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1600439937016"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.STS1588860701071(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1568121550604 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1568121437300: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1568121437300: ended"); resolveP(res)});
		});
	}

	/**
	 * Function executeGoToPageIfCondition
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1596618881610(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1596618881610: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1596618881610: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1596618881610: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{item: get('item', `''`), line: get('line', `''`), child: get('child', `''`), canExec: get('canExec', `true`), j: get('j', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1596618881610: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["executeGoToPageIfCondition"] = stack["1596618881610"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["callExecuteCondition"] = stack["1596618928274"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'callExecuteCondition', actionFunction: 'CTS1596618928274'}, vars:{item: get('item', `params.item`), line: get('line', `params.line`), child: get('child', `params.child`), canExec: get('canExec', `params.canExec`), j: get('j', `params.j`)}};
		return this.CTS1596618928274(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1596618928274 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1596618881610: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1596618881610: ended"); resolveP(res)});
		});
	}
    /**
     * Function FullSyncPutAttachmentAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    FullSyncPutAttachmentAction(page: C8oPageBase, props, vars) : Promise<any> {
        let r:string = props.requestable.substring(props.requestable.indexOf('.') + 1);
        let v:string = 'put_attachment';
        let rvm:string = r + '.' + v;
        const params: Object = {};
        
        params["docid"] = props.docid;
        params["name"] = props.name;
        params["content_type"] = props.content_type;
        
        return new Promise((resolve, reject) => {
            if (typeof props.content == "string") {
                if (new RegExp('^[a-z]+://').test(props.content)) {
                    props.content = new URL(props.content);
                } else {
                    props.content = props.content.replace(new RegExp("^data:.*?base64,"), "");
                }
            }
            if (props.content instanceof URL) {
                props.content.search = "";
                let file: File = page.getInstance(File);
                let fileName = props.content.href.substring(props.content.href.lastIndexOf("/") + 1);
                let path =  props.content.href.substring(0,props.content.href.lastIndexOf("/") + 1);
                file.readAsArrayBuffer(path, fileName)
                .then((res)=>{
                    params["content"] = new Blob([new Uint8Array(res)], { type: props.content_type });
                   resolve();
                })
            } else {
                params["content"] = props.content;
                resolve();
            }
        }).then(() => {
            return new Promise((resolve, reject) => {
                delete props.requestable

                if(props.docid == null){
                    reject("[MB] FullSyncPutAttchmentAction: Missing property: Document ID, " + props.docid);
                }
                if(props.name == null){
                    reject("[MB] FullSyncPutAttchmentAction: Missing property: Name ," + props.name);
                }
                if(props.content_type == null){
                    reject("[MB] FullSyncPutAttchmentAction: Missing property: Content Type, " + props.content_type);
                }
                if(props.content == null){
                    reject("[MB] FullSyncPutAttchmentAction: Missing property: Content, " + props.content);
                }
                let md:boolean = props.noLoading;
                
                let args = [];
                let version:string = props.tplVersion ? props.tplVersion : '';
                let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.6.0.0", version) : version.localeCompare("7.6.0.0");
                if (greater) {
                    args.push("fs://" + rvm, params, null, 500, md)
                } else {
                    args.push("fs://" + rvm, params, null, 500)
                }
                
                page.getInstance(Platform).ready().then(() => {     // We may need the CBL plugin so wait for platform ready.
                    page.c8o.finalizeInit().then(()=>{              // To be sure that FullSync initialized properly on CBL
                        //page.call("fs://" + rvm, params, null, 500, md)
                        page['call'].apply(page, args)
                        .then((res:any) => {
                            resolve(res)
                            })
                            .catch((error:any) => {
                                reject(error)
                            })
                    })
                });
            })
        })
        
    }

    /**
     * Function PopoverAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    PopoverAction(page: C8oPageBase, props, vars) : Promise<any> {
        function toString(data) {
            if (data) {
                try {
                    return JSON.stringify(data);
                } catch(e) {
                    return data.toString();
                }
            } else {
               return "no data"; 
            }
        }
        
        return new Promise((resolve, reject) => {
            let q:string = props.page; // qname of page
            let p:string = q.substring(q.lastIndexOf('.')+1);
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.7.0.2", version) : version.localeCompare("7.7.0.2");
            let v:any = greater ? p : page.getPageByName(p);
            let data = props.data ? props.data: {} 
        
            let PopoverCtrl = page.getInstance(PopoverController)
            let pop = PopoverCtrl.create(v, data, {
                showBackdrop            : props.showBackdrop,
                enableBackdropDismiss   : props.enableBackdropDismiss,
                cssClass                : props.cssClass
            })
            
            pop.onDidDismiss((data) => {
                page.c8o.log.debug("[MB] Popover '"+p+"' dismissed: " + toString(data));
                resolve(data)
            })
            
            pop.present({ev: props.event}).then((data) => {
                page.c8o.log.debug("[MB] Popover Page '"+p+"' displayed: " + toString(data));
            })
        });
    }

	/**
	 * Function showToast
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1587565281898(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1587565281898: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1587565281898: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1587565281898: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{msg: get('msg', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1587565281898: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["showToast"] = stack["1587565281898"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["Toast"] = stack["1587565295866"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: get('cssClass', `'changeToast'`), closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `params.msg`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1587565281898: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1587565281898: ended"); resolveP(res)});
		});
	}

	/**
	 * Function syncAndInvokeViewer
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1586254608477(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1586254608477: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1586254608477: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1586254608477: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1586254608477: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["syncAndInvokeViewer"] = stack["1586254608477"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["SyncData"] = stack["1586254641632"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SyncData', actionFunction: 'FullSyncSyncAction', BatchSize: get('BatchSize', `100`), Mode: get('Mode', `'continuous'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), Retry: get('Retry', `'true'`), BatchesLimit: get('BatchesLimit', `10`), Direction: get('Direction', `'bi-directional'`)}, vars:{}};
		return this.FullSyncSyncAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1586254641635"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1571648311071'}, vars:{}};
		return this.STS1571648311071(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1586254641638"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1586254487958'}, vars:{}};
		return this.STS1586254487958(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1586254487958 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1571648311071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncSyncAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1586254608477: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1586254608477: ended"); resolveP(res)});
		});
	}

	/**
	 * Function disSelectEntry
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1567092392063(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1567092392063*/
		    page.global.selectedItem[vars.id] = false;
		    resolve();
		/*End_c8o_function:CTS1567092392063*/
		});
	}

    /**
     * Function ModalAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    ModalAction(page: C8oPageBase, props, vars) : Promise<any> {
        
        function toString(data) {
            if (data) {
                try {
                    return JSON.stringify(data);
                } catch(e) {
                    return data.toString();
                }
            } else {
               return "no data"; 
            }
        }
        
        return new Promise((resolve, reject) => {
            let q:string = props.page; // qname of page
            let p:string = q.substring(q.lastIndexOf('.')+1);
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.7.0.2", version) : version.localeCompare("7.7.0.2");
            let v:any = greater ? p : page.getPageByName(p);
            let data = props.data
        
            let Modal = page.getInstance(ModalController);
            let modal = Modal.create(v, data, {
                showBackdrop            : props.showBackdrop,
                enableBackdropDismiss   : props.enableBackdropDismiss,
                cssClass                : props.cssClass
            });
            
            let modals = page.router.sharedObject["ModalPages"];
            if (modals == undefined) {
                page.router.sharedObject["ModalPages"] = [];
            }
            
            modal.onDidDismiss((data) => {
                // case view not dismissed using CloseModal
                let index = page.router.sharedObject["ModalPages"].indexOf(modal);
                if (index != -1) {
                    page.router.sharedObject["ModalPages"] = page.router.sharedObject["ModalPages"].splice(index,1);
                }
                
                page.c8o.log.debug("[MB] Modal Page '"+p+"' dismissed: " + toString(data));
                if (props.blockWhileDisplayed) {
                    resolve(data)
                }
            })
            
            modal.present().then((data) => {
                page.router.sharedObject["ModalPages"].push(modal);
                
                page.c8o.log.debug("[MB] Modal Page '"+p+"' displayed: " + toString(data));
                if (!props.blockWhileDisplayed) {
                    resolve();
                }
            })
        });
    }

	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606828781296(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606828781296*/
		
		    new Promise(async (resolve1, reject1)=>{
		        let text = vars.selectedForm;
	            delete text["_rev"];
	            delete text["_attachments"];
	            let wallpaper, thumbnail = null;
	            
	            try{
	                if(text.wallpaper && text.wallpaper.enabled == true){
	                    wallpaper = await page.c8o.callJson("fs://c8oforms_fs.get_attachment", "docid", text._id, "name", "wallpaper").async();
	                    if(wallpaper && (wallpaper instanceof Blob)){
	                        //manual call to blobToBase64Function STS1606829529555
	                        text.wallpaper.b64 = await page["actionBeans"].STS1606829529555(page, {}, {blobData: wallpaper}, event);
	                        //text.wallpaper.b64 = await this.blobToBase64(wallpaper);
	                    }
	                
	                }
	            }
	            catch(e){
	                page.c8o.log.debug("No Wallpaper attachment", e);
	            }
	            
	            try{
	                if(text.thumbnail && text.thumbnail.enabled == true){
	                    thumbnail = await page.c8o.callJson("fs://c8oforms_fs.get_attachment", "docid", text._id, "name", "thumbnail").async();
	                    if(thumbnail && (thumbnail instanceof Blob)){
	                      //manual call to blobToBase64Function STS1606829529555
	                        text.thumbnail.b64 = await page["actionBeans"].STS1606829529555(page, {}, {blobData: thumbnail}, event);
	                        //text.thumbnail.b64 = await this.blobToBase64(thumbnail);
	                    }
	                }
                }
                catch(e){
                    page.c8o.log.debug("No thumbnail attachment", e);
                }

                let filename = (text.name+".c8oforms").replace(/\s/g, '_');
	            var element = document.createElement('a');
	            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(text)));
	            element.setAttribute('download', filename);

	            element.style.display = 'none';
	            document.body.appendChild(element);

	            element.click();

	            document.body.removeChild(element);
	            
	            resolve1();
		    })
		    .then(()=>{
		       resolve();
		    })
		    .catch(()=>{
		        resolve();
		    });
		/*End_c8o_function:CTS1606828781296*/
		});
	}


	/**
	 * Function popOverGetLinkSharePublic
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606815237125(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606815237125: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606815237125: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606815237125: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606815237125: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverGetLinkSharePublic"] = stack["1606815237125"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["prepareArgs"] = stack["1606815263956"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606815263956'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606815263956(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["PostData"] = stack["1606815263959"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: null, RootKey: null, noLoading: get('noLoading', `false`), _use_policy: get('_use_policy', `'override'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `parent.out.idDoc`)}, vars:{formId: get('formId', `out.id`), formRev: get('formRev', `parent.out.rev`), _id: get('_id', `parent.out.idDoc`), userName: get('userName', `parent.out.userName`)}};
		return this.FullSyncPostAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1606815263980"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.translate.instant('shareLinkCopied')`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606815263956 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606815237125: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606815237125: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CheckListenerHasBeenExecuted
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1604330825068(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1604330825068: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1604330825068: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1604330825068: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1604330825068: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["CheckListenerHasBeenExecuted"] = stack["1604330825068"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1604330914949"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1604330914949'}, vars:{}};
		return this.CTS1604330914949(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1604330914949 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1604330825068: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1604330825068: ended"); resolveP(res)});
		});
	}

	/**
	 * Function doCloseOptions
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1568216916523(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1568216916523*/
		    if(!vars.child){
		        page["idselected"] ="";
		    }
		    page["idselectedC"] ="";
		    event.preventDefault();
		    event.stopPropagation();
	        page.tick();
	        resolve(false);
		/*End_c8o_function:CTS1568216916523*/
		});
	}


	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606820446374(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606820446374*/
		    let _id = vars.selectedForm._id;
		    page.c8o.callJson("fs://c8oforms_fs.get", "docid", _id, "attachments", true)
            .then((res)=>{
                console.log('res get', res);
                res["_id"] = "" + new Date().getTime();
                res["name"] += "_" + page["translate"]["instant"]('copy');
                delete res["_rev"];
                return page.c8o.callJsonObject("fs://c8oforms_fs.post", res);
            })
            .then((res)=>{
                const msg = page["translate"]["instant"]("form_copied_succes");
                resolve({msg:msg});
                page.c8o.log.debug("duplicate form successfully");
                page.tick();
               return null;
            })
            .fail((err)=>{
                const msg = page["translate"]["instant"]("error_copy_form");
                resolve({msg:msg});
                page.c8o.log.error("error duplicating form",err);
            });
		/*End_c8o_function:CTS1606820446374*/
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
	CTS1587563874086(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1587563874086*/
		page["local"][vars["path"]] = vars["val"];
		resolve();
		/*End_c8o_function:CTS1587563874086*/
		});
	}

    /**
     * Function logAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    LogAction(page: C8oPageBase, props, vars) : Promise<any> {
        page.c8o.log[props.level](props.message);
        return Promise.resolve();
    }
    /**
     * Function ifAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    IfAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let ok = (props.condition) ? true : false;
            if (props.negate) {
                ok = !ok;
            }
            if (ok) {
                resolve(true);
            } else {
                throw new Error('c8oSkipError');
            }
        })
    }
    

	/**
	 * Function deleteEntry
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1567067074796(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1567067074796*/
		    delete vars['that'].global.selectedItem[vars.id];
		    resolve();
		/*End_c8o_function:CTS1567067074796*/
		});
	}


	/**
	 * Function dragEnd
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1600441248536(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1600441248536: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1600441248536: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1600441248536: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1600441248536: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["dragEnd"] = stack["1600441248536"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["setLocalDraggingToFalse"] = stack["1600441295937"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setLocalDraggingToFalse', actionFunction: 'CTS1600441295937'}, vars:{}};
		return this.CTS1600441295937(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1600441345856"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.STS1588860701071(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1600441295937 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1600441248536: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1600441248536: ended"); resolveP(res)});
		});
	}
    /**
     * Function CameraAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    CameraAction(page: C8oPageBase, props, vars) : Promise<any> {
        const svgClose = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" /></svg>';
        const svgOpenFolder = "<svg width='25px' xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 192v-72a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H408a40 40 0 0140 40v40' fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path d='M479.9 226.55L463.68 392a40 40 0 01-39.93 40H88.25a40 40 0 01-39.93-40L32.1 226.55A32 32 0 0164 192h384.1a32 32 0 0131.8 34.55z' fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>";
        const svgCheckmark = "<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M416 128L192 384l-96-96'/></svg>";
        const svgReturn = "<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M112 352l-64-64 64-64'/><path d='M64 288h294c58.76 0 106-49.33 106-108v-20' fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>";
        const svgCameraRotate = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M124 158v-22h-24v22M335.76 285.22v-13.31a80 80 0 00-131-61.6M176 258.78v13.31a80 80 0 00130.73 61.8" /><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M196 272l-20-20-20 20M356 272l-20 20-20-20" /></svg>';
        const svgCamera = "<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z' fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><circle cx='256' cy='272' r='80' fill='none' stroke='white' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M124 158v-22h-24v22'/></svg>";;
        const svgFlashOn = "<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z' fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>";
        const svgFlashOff = "<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path fill='white' d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM294.34 84.28l-22.08 120.84a16 16 0 006.17 15.71 16.49 16.49 0 009.93 3.17h94.12l-38.37 47.42a4 4 0 00.28 5.34l17.07 17.07a4 4 0 005.94-.31l60.8-75.16a16.37 16.37 0 003.3-14.36 16 16 0 00-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 00302.73 23l-92.58 114.46a4 4 0 00.28 5.35l17.07 17.06a4 4 0 005.94-.31zM217.78 427.57l22-120.71a16 16 0 00-6.19-15.7 16.54 16.54 0 00-9.92-3.16h-94.1l38.36-47.42a4 4 0 00-.28-5.34l-17.07-17.07a4 4 0 00-5.93.31L83.8 293.64A16.37 16.37 0 0080.5 308 16 16 0 0096 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0032.5 14.53l92.61-114.46a4 4 0 00-.28-5.35l-17.07-17.06a4 4 0 00-5.94.31z'/></svg>"
        var HIGHEST_POSSIBLE_Z_INDEX = '2147483647';
        var flashMode = false;
        var isABoringBrowser = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1 && navigator.userAgent.indexOf('FxiOS') == -1;
        var btLeft, btMiddle, btRight, btSet, parent, facingMode, btUpright, btSetUp;
        var merge = (d, s) => {
            var k, v;
            for (k in s) {
                v = s[k];
                if (typeof v == 'object') {
                    merge(d[k], v);
                } else {
                    d[k] = v;
                }
            }
            return d;
        };
        
        var initFrame = () => {
            var btStyle = {
                    "background": "transparent",
                    width: '4em',
                    "padding": 0,
                    
                };
            
            btLeft = document.createElement('button');
            btMiddle = document.createElement('button');
            btRight = document.createElement('button');
            btUpright = document.createElement('button');
            btSet = document.createElement('div');
            btSetUp = document.createElement('div');
            parent = document.createElement('div');
            
            merge(parent, {
                className: 'cordova-camera-capture',
                style: {
                    position: 'relative',
                    zIndex: HIGHEST_POSSIBLE_Z_INDEX,
                    width: '100%',
                    height: '100%',
                    'background-color': 'black'
                }
            });
            
            merge(btSet.style, {
                position: 'absolute',
                bottom: '0',
                width: '100%',
                'text-align': 'center',
                "background-color":"#00000040"
            });
            merge(btSetUp.style, {
                position: 'absolute',
                top: '0',
                width: '100%',
                'text-align': 'center',
                "background-color":"transparent"
            });
            
            merge(btLeft.style, btStyle);
            btLeft.style.float = 'left';
            btSet.appendChild(btLeft);
            
            merge(btMiddle.style, btStyle);
            btSet.appendChild(btMiddle);
            
            btRight.innerHTML = svgClose;
            merge(btRight.style, btStyle);
            btRight.style.float = 'right';
            btSet.appendChild(btRight);
            
            
            
            merge(btUpright.style, btStyle);
            btUpright.style.float = 'right';
            btUpright.style.visibility = 'hidden';
            parent.appendChild(btSet);
            btSetUp.appendChild(btUpright);
            parent.appendChild(btSetUp);
            
        };
        
        var resize = (img, imgWidth, imgHeight, opts) => {
            var targetWidth = opts['targetWidth'];
            var targetHeight = opts['targetHeight'];
            var canvas = document.createElement('canvas');
            var ratio = imgWidth * 1.0 / imgHeight;
            
            if (targetWidth != undefined && targetHeight != undefined) {
                var tratio = targetWidth * 1.0 / targetHeight;
                
                if (tratio > ratio) {
                    targetWidth = targetHeight * ratio;
                } else {
                    targetHeight = targetWidth / ratio;
                }
            } else if (targetWidth != undefined) {
                targetHeight = targetWidth / ratio;
            } else if (targetHeight != undefined) {
                targetWidth = targetHeight * ratio;
            } else {
                targetWidth = imgWidth;
                targetHeight = imgHeight;
            }
            
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            canvas.getContext('2d').drawImage(img, 0, 0, targetWidth, targetHeight);

            // convert image stored in canvas to base64 encoded image
            var imageData = canvas.toDataURL(opts['encodingType'] == 0 ? 'image/jpeg' : 'image/png');
            if (opts['destinationType'] == 0) {
                imageData = imageData.substring(imageData.indexOf(',') + 1);                        
            }
            
            return imageData;
        };
        
        var takePicture = (success, error, opts) => {
            if (opts && opts['sourceType'] === 1) {
                capture(success, error, opts);
            } else {
                selectPicture(success, error, opts);
            }
        };
        
        var selectPicture = (success, error, opts) => {
            initFrame();
            
            var input = document.createElement('input');
            var label = document.createElement('label');
            
            input.setAttribute('id', '' + new Date().getTime());
            label.setAttribute('for', input.getAttribute('id'));
            
            btMiddle.appendChild(label);
            label.innerHTML = svgOpenFolder;
            label.style.display = 'inline-block';
            
            input.style.display = 'none';
            input.type = 'file';
            input.name = 'files[]';
            
            btLeft.style.visibility = 'hidden';
            
            var image = document.createElement('img');
            merge(image.style, {
                width: '100%',
                height: '100%',
                'object-fit': 'contain'
            });
            parent.insertBefore(image, btSet);
            
            input.onchange = (inputEvent: any) => {
                var reader = new FileReader();
                reader.onload = (readerEvent: any) => {
                    btLeft.style.visibility = 'visible';
                    btLeft.appendChild(label);
                    btMiddle.innerHTML = svgCheckmark;
                    image.src = readerEvent.target.result;
                    
                    btMiddle.onclick = () => {
                        var imageData = resize(image, image.naturalWidth, image.naturalHeight, opts);                            
                        parent.parentNode.removeChild(parent);
                        success(imageData);
                    }
                };

                reader.readAsDataURL(inputEvent.target.files[0]);
            };
            
            btRight.onclick = () => {
                parent.parentNode.removeChild(parent);
                error('cancel');
            }
            
            parent.appendChild(input);
            document.body.appendChild(parent);            
        };

        var capture = (success, error, opts) => {
            var localMediaStream, i;            
            var camera = [];
            var camera_i = 0;

            initFrame();
            
            var video = document.createElement('video');
            
            merge(video, {
                autoplay: true,
                muted: true,
                playsinline: true,
                width: -1,
                height: -1,
                style: {
                    width: '100%',
                    height: '100%',
                    "objectFit":"cover",
                }
            });
            
            // for ios safari support (seems to be set only with set attribute...)
            video.setAttribute('webkit-playsinline', 'true');
            video.setAttribute('playsinline', 'true');
            
            parent.insertBefore(video, btSet);
            
            var stop = () => {
                // stop video stream, remove video and button.
                // Note that MediaStream.stop() is deprecated as of Chrome 47.
                if (localMediaStream.stop) {
                    localMediaStream.stop();
                } else {
                    localMediaStream.getTracks().forEach((track) => {
                        track.stop();
                    });
                }
            }
            
            btLeft.onclick = () => {
                if (video.paused) {
                    video.play();
                    successCallback(localMediaStream);
                } else {
                    stop();
                    facingMode =  (facingMode == 'user' ? 'environment' : 'user');
                    if(facingMode == "user"){
                        merge(video.style,{
                            "transform": "rotateY(180deg)",
                            "webkitTransform":"rotateY(180deg)", /* Safari and Chrome */
                            "MozTransform":"rotateY(180deg)", /* Firefox */
                        })
                    }
                    else{
                        merge(video.style,{
                            "transform": "unset",
                            "webkitTransform":"unset", /* Safari and Chrome */
                            "MozTransform":"unset", /* Firefox */
                        })
                    }
                    navigator.mediaDevices.getUserMedia({video: {facingMode: facingMode}, audio: false}).then(successCallback).catch(error);
                    video.play();
                }
            }
            
            btMiddle.onclick = ()=> {
                if (video.paused) {
                    var imageData = resize(video, video.videoWidth, video.videoHeight, opts);
                    stop();
                    parent.parentNode.removeChild(parent);
                    success(imageData);
                } else {
                    btLeft.innerHTML = svgReturn;
                    btLeft.style.visibility = 'visible';
                    btMiddle.innerHTML = svgCheckmark;
                    video.pause();
                }
            }
            
            btRight.onclick = ()=> {
                stop();
                parent.parentNode.removeChild(parent);
                error('cancel');
            }
            
            var navigator: any = window.navigator;
            
            var successCallback = (stream) => {
                if (camera.length > 1 || isABoringBrowser) {
                    btLeft.innerHTML = svgCameraRotate;
                    btLeft.style.visibility = 'visible';
                } else {
                    btLeft.style.visibility = 'hidden';
                }
                btMiddle.innerHTML = svgCamera;
                
                localMediaStream = stream;
                video.srcObject = stream;
                
                if (parent.parentElement == null) {
                    document.body.appendChild(parent);
                }
                if(!isABoringBrowser){
                    const track = stream.getVideoTracks()[0];
                    try{
                        var imageCapture = new window["ImageCapture"](track);

                        imageCapture.getPhotoCapabilities()
                        .then(photoCapabilities => {
                            if(photoCapabilities.fillLightMode != undefined){
                                let arrayFlash = photoCapabilities.fillLightMode.filter((x)=>{return x == "off" || x == "flash"});
                                if(arrayFlash.length == 2){
                                    btUpright.style.visibility = 'visible';
                                    btUpright.innerHTML = svgFlashOff;
                                    btUpright.onclick = ()=>{
                                        flashMode = !flashMode;
                                        if(flashMode){
                                            btUpright.innerHTML = svgFlashOn;
                                        }
                                        else{
                                            btUpright.innerHTML = svgFlashOff;
                                        }
                                        track.applyConstraints({
                                            advanced: [{torch: flashMode}]
                                          });
                                    }
                                }
                                else{
                                    btUpright.style.visibility = 'hidden';  
                                }
                            }
                            else{
                                btUpright.style.visibility = 'hidden';  
                            }
                            
                        })
                        .catch((e)=>{
                                 btUpright.style.visibility = 'hidden';
                        })
                    }
                    catch(e){
                        console.log("error", e);
                    }
                }
                

            };

            if (navigator.mediaDevices) {
                navigator.mediaDevices.enumerateDevices().then((di)=> {
                    var search = opts['cameraDirection'] == 1 ? 'front' : 'back';
                    camera = di.filter(e=>e.kind === "videoinput");
                    // user == "front, environment == back
                    facingMode = opts['cameraDirection'] == 1 ? 'user' : 'environment';
                    if(facingMode == "user"){
                        merge(video.style,{
                            "transform": "rotateY(180deg)",
                            "webkitTransform":"rotateY(180deg)", /* Safari and Chrome */
                            "MozTransform":"rotateY(180deg)", /* Firefox */
                        })
                    }
                    else{
                        merge(video.style,{
                            "transform": "unset",
                            "webkitTransform":"unset", /* Safari and Chrome */
                            "MozTransform":"unset", /* Firefox */
                        })
                    }
                    if (camera.length > 0) {
                        navigator.mediaDevices.getUserMedia({video: {facingMode: facingMode}, audio: false}).then(successCallback).catch(error);
                    } else {
                        console.log('Device does not have camera, switch to the file picker');
                        selectPicture(success, error, opts);
                    }
                });
            } else {
                console.log('Browser does not support camera, switch to the file picker');
                selectPicture(success, error, opts);
            }
        };
        
        return new Promise((resolve, reject)=> {
            const camera : Camera = page.getInstance(Camera);
            const options : CameraOptions = {};
            const cameraPopoverOptions = {};
        
            // Getting parameters
            options["quality"] = props.quality;
            if (props.allowEdit != null) {
                options["allowEdit"] = props.allowEdit;
            }
            
            if (props.correctOrientation != null) {
                options["correctOrientation"] = props.correctOrientation;
            }
            
            if (props.saveToPhotoAlbum != null) {
                options["saveToPhotoAlbum"] = props.saveToPhotoAlbum;
            }
            
            if (props.targetHeight != undefined) {
                options["targetHeight"] = props.targetHeight;
            }
            
            if (props.targetWidth != undefined) {
                options["targetWidth"] = props.targetWidth;
            }
            
            switch(props.cameraDirection) {
                case "BACK":
                    options["cameraDirection"] = 0;
                    break;
                case "FRONT":
                    options["cameraDirection"] = 1;
                    break;
                default:
                    options["cameraDirection"] = 0;
                    break;
            }
            switch(props.destinationType) {
                case "DATA_URL":
                    options["destinationType"] = 0;
                    break;
                case "FILE_URI":
                    options["destinationType"] = 1;
                    break;
                case "NATIVE_URI":
                    options["destinationType"] = 3;
                    break;
               case "FILE_URL":
                    options["destinationType"] = 1;
                    break; 
                default:
                    options["destinationType"] = 1;
                    break;
            }
            switch(props.encodingType) {
                case "JPEG":
                    options["encodingType"] = 0;
                    break;
                case "PNG":
                    options["encodingType"] = 1;
                    break;
                default:
                    options["encodingType"] = 0;
                    break;
            }
            switch(props.mediaType) {
                case "PICTURE":
                    options["mediaType"] = 0;
                    break;
                case "VIDEO":
                    options["mediaType"] = 1;
                    break;
                case "ALLMEDIA":
                    options["mediaType"] = 3;
                    break;
            }
            switch(props.sourceType) {
                case "PHOTOLIBRARY":
                    options["sourceType"] = 0;
                    break;
                case "CAMERA":
                    options["sourceType"] = 1;
                    break;
                case "SAVEDPHOTOALBUM":
                    options["sourceType"] = 2;
                    break;
                default:
                    options["sourceType"] = 1;
                    break;
            }
            //CameraPopoverOptions
            if(props.x != null){
                cameraPopoverOptions["x"] = props.x;
            }
            if(props.y != null){
                cameraPopoverOptions["y"] = props.y;
            }
            if(props.width != null){
                cameraPopoverOptions["width"] = props.width;
            }
            if(props.height != null){
                cameraPopoverOptions["height"] = props.height;
            }
            switch (props.arrowDir) {
                case "ARROW_UP":
                    cameraPopoverOptions["sourceType"] = 1;
                    options["cameraPopoverOptions"] = cameraPopoverOptions;
                    break;
                case "ARROW_DOWN":
                    cameraPopoverOptions["sourceType"] = 2;
                    options["cameraPopoverOptions"] = cameraPopoverOptions;
                    break;
                case "ARROW_LEFT":
                    cameraPopoverOptions["sourceType"] = 4;
                    options["cameraPopoverOptions"] = cameraPopoverOptions;
                    break;
                case "ARROW_RIGHT":
                    cameraPopoverOptions["sourceType"] = 8;
                    options["cameraPopoverOptions"] = cameraPopoverOptions;
                    break;
                case "ARROW_ANY":
                    cameraPopoverOptions["sourceType"] = 15;
                    options["cameraPopoverOptions"] = cameraPopoverOptions;
                    break;
            }
            
            // Action
            camera.getPicture(options)
                .then((imageData) => {
                    page.router.c8o.log.debug("[MB] CameraAction: ", imageData.substring(0, Math.min(150, imageData.length)));
                    if (props.destinationType == "FILE_URL") {
                        resolve(new URL(imageData));
                    } else {
                        resolve(imageData);
                    }
                    
                })
                .catch((e) => {
                    if(e == "cordova_not_available") {
                        var bodyBg = document.body.style['background-color'];
                        document.body.style['background-color'] = 'black';
                        
                        takePicture((picture) =>{
                            document.body.style['background-color'] = bodyBg;
                            resolve(picture);
                        }, (e) => {
                            document.body.style['background-color'] = bodyBg;
                            console.log("ko " + e);
                            reject(e);
                        }, options);
                    } else {
                        page.router.c8o.log.error("[MB] CameraAction: ", e);
                        reject(e); 
                    }
                }
            );
        });
    }


	/**
	 * Function removeSpinner
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1586254487958(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1586254487958: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1586254487958: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1586254487958: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1586254487958: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["removeSpinner"] = stack["1586254487958"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["setLocalSpinnerFalse"] = stack["1586254487961"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setLocalSpinnerFalse', actionFunction: 'CTS1586254487961'}, vars:{}};
		return this.CTS1586254487961(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1586254487961 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1586254487958: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1586254487958: ended"); resolveP(res)});
		});
	}

	/**
	 * Function getViewAndParametersForSelector
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1604669954453(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1604669954453: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1604669954453: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1604669954453: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1604669954453: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["getViewAndParametersForSelector"] = stack["1604669954453"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["GetUserSettings"] = stack["1604669979375"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetUserSettings', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `true`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `'C8Oreserved_' +c8oPage.c8o.session.user.name`)}, vars:{}};
		return this.FullSyncGetAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1604669979381"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `true`), path: get('path', `'retryGetUser'`)}};
		return this.STS1587563852086(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1587563852086 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["defineSettingsAndPage"] = stack["1604669979390"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'defineSettingsAndPage', actionFunction: 'CTS1604669979390'}, vars:{}};
		return this.CTS1604669979390(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1604669979393"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567094239807'}, vars:{keys: get('keys', `null`)}};
		return this.STS1567094239807(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1567094239807 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1604669979390 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["QueryView"] = stack["1604669979399"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'QueryView', actionFunction: 'FullSyncViewAction', reduce: get('reduce', `false`), startkey: null, group_level: null, attachments: null, __live: get('__live', `'idUUUU'`), keys: null, noLoading: get('noLoading', `true`), fsview: get('fsview', `'C8Oforms.c8oforms_fs.notifs.new'`), skip: null, descending: get('descending', `'true'`), include_docs: get('include_docs', `'false'`), endkey: null, stale: null, marker: get('marker', `'viewNotifsNew'`), binary: null, limit: get('limit', `500`), conflicts: null, inclusive_end: null, key: null, group: null}, vars:{}};
		return this.FullSyncViewAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncViewAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["QueryView1"] = stack["1606926301639"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'QueryView1', actionFunction: 'FullSyncViewAction', reduce: get('reduce', `false`), startkey: null, group_level: null, attachments: null, __live: get('__live', `'liveTemplates'`), keys: null, noLoading: get('noLoading', `true`), fsview: get('fsview', `'C8Oforms.c8oforms_fs.templatesV2.byLang'`), skip: null, descending: null, include_docs: get('include_docs', `'false'`), endkey: null, stale: null, marker: get('marker', `'getTemplates'`), binary: null, limit: get('limit', `500`), conflicts: null, inclusive_end: null, key: get('key', `parent.out.language`), group: null}, vars:{}};
		return this.FullSyncViewAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncViewAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1604669954453: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1604669954453: ended"); resolveP(res)});
		});
	}

	/**
	 * Function addNewElement
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604399236805(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604399236805*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		if(vars.type && vars.type != ""){
		    if(vars.type != "submit"){
		        if(page['idselected'] && page['idselected'] != ""){
		            let index = page['getElementIndexById'](page['idselected']);
		            if(index && +index>=0){
		                let type = page['formsList'][index].type;
	                    if(type == "ion-card" && vars.type != "group" && page.local.currentPage == page['formsList'][index].config.page){
	                        page["addElement"](vars.type, [index, page['formsList'][index].children.length]);
	                    }else{
	                        page["addElement"](vars.type);
	                    }
		            }else{
		                page["addElement"](vars.type);
		            }
		        }else{
		            page["addElement"](vars.type);
		        }
		    }else{
		        page["addElement"](vars.type, null, null, true);
		        let actionsTab = document.querySelector('ion-icon.icon-md-greyButton[name="settings"]');
                if(actionsTab){
                    actionsTab.parentElement.click();
                }
		    }
		    
		}
		resolve();
		/*End_c8o_function:CTS1604399236805*/
		});
	}


	/**
	 * Function doDragStart
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1600334305218(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600334305218*/
            event.dataTransfer.setData("__c8oformsdrag_source", "true");
            event.dataTransfer.setData(vars.item.type, "true");
            event.dataTransfer.setData("type", vars.item.type);
            event.dataTransfer.setData("dropEffect", "copy");
            const dataI = page["getBadge"](vars.item.id, vars.item.name);
            event.dataTransfer.setData("text/html", dataI);
            page.local.draggingSource = true;
            resolve();
		/*End_c8o_function:CTS1600334305218*/
		});
	}


	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606729318396(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606729318396*/
		let version = 1;
		let doc = vars.selectedForm;
		let final = ()=>{
		    let rev = doc["_rev"];
	        let id = doc["_id"];
	        let prefix ="control_document_publish_"
	        let makeid= (length) => {
	            var result           = '';
	            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	            var charactersLength = characters.length;
	            for ( var i = 0; i < length; i++ ) {
	               result += characters.charAt(Math.floor(Math.random() * charactersLength));
	            }
	            return result;
	         }
	        let suffix = "" + Date.now();
	        let idCOntrolDocument = prefix + makeid(10) + suffix;
	        resolve({"idDoc":idCOntrolDocument, "rev": rev, "id": id, version:version});
		}
        page.c8o.callJson("fs://c8oforms_fs.get", "docid", "published_"+doc["_id"])
        .then((res)=>{
           
            if(res['version'] != null){
                version = +res['version'] + 1;
            }
            final();
            return null;
        })
        .fail((res)=>{
            final();
        })
		
        if(page.global["changes_published"] == undefined){
            page.global["changes_published"] = [];
        }
        page.global["changes_published"].push( "published_" + doc["_id"]);
        
		/*End_c8o_function:CTS1606729318396*/
		});
	}


	/**
	 * Function popOverAddToFav
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606826327707(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606826327707: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606826327707: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606826327707: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`), index: get('index', `''`), that: get('that', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606826327707: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverAddToFav"] = stack["1606826327707"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["prepareArgs"] = stack["1606826346616"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606826346616'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`), index: get('index', `params.selectedForm`), that: get('that', `params.selectedForm`)}};
		return this.CTS1606826346616(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1606826346619"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567086142984'}, vars:{arrayDocId: get('arrayDocId', `parent.out.obj`), that: get('that', `parent.out.that`)}};
		return this.STS1567086142984(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1567086142984 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606826346616 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606826327707: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606826327707: ended"); resolveP(res)});
		});
	}

	/**
	 * Function tick
	 *   Process a tick (Refresh define in caf)
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1554994873907(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1554994873907: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1554994873907: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1554994873907: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1554994873907: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["tick"] = stack["1554994873907"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["tick"] = stack["1554994951979"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'tick', actionFunction: 'CTS1554994951979'}, vars:{}};
		return this.CTS1554994951979(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1554994951979 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1554994873907: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1554994873907: ended"); resolveP(res)});
		});
	}

	/**
	 * Function CallViewLiveAndFillFormList
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1571648363916(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1571648363916*/
		 // Calling view live
            let key;
            let respInit;
            if(page.local["formId"]!= null){
                key = page.local["formId"];
                if(page.local["respInit"] != null){
                    respInit = page.local["respInit"];
                    page["edit"] = true;
                }
            }

            page.c8o.callJsonObject("fs://c8oforms_fs.view",{
                "ddoc": "forms",
                "view": "view",
                "__live": "view",
                 "key": key
                })
                .then((response: any, parameters)=>{
                    page.local.sourceValue = {};
                    if(!page.local["submitting"]){
                    // will be call now and after each database update
                    if(response.rows != undefined){
                        if(response.rows[0] != undefined){
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
                            if(response.rows[0].value.doc["wallpaper"]["enabled"] && page["form"]["wallpaper"]["type"] != undefined && page["form"]["wallpaper"]["type"] != 'color'){
                                page.c8o.get_attachment(page["form"]["_id"], "wallpaper", "c8oforms_fs")
                                .then((res) => {
                                    var urlCreator = window["URL"] || window["webkitURL"];
                                    page.local.url = urlCreator.createObjectURL(res);
                                    page["enabled"] = response.rows[0].value.doc["wallpaper"]["enabled"];
                                    page.tick();
                                }).catch((err) => {
                                    page.c8o.log.error("Error loading wallpaper from local base", err);
                                }); 
                            }
                            else{
                                page["enabled"] = response.rows[0].value.doc["wallpaper"]["enabled"];
                            }
                        
                            const checkAuthorizedPages = (item: any) => {
                                if(item.config.page != undefined && item.config.page != ""){
                                    if(item.conditions != undefined && item.conditions.goToPageIf != undefined){
                                        for(let el of item.conditions.goToPageIf.conds){
                                            if((el.val2.source == false && (el.val2.str != "" || Object.keys(el.val2.vals).length > 0)) && el.operator != undefined && el.operator != "" && el.page != undefined && el.page != ""){
                                                //this is a valid goToPage condition so enable it 
                                                for(let i in page.local.pages){
                                                    if(+i == page.local.currentIndex){
                                                        page.local.pages[+i].enabled = true;
                                                    }
                                                    else{
                                                        page.local.pages[+i].enabled = false;
                                                    }
                                                }
                                            }
                                        }
                                        
                                    }
                                }
                            };
                            
                            let fillFormSubmit = (list, redList, formSubmit, response) => {
                                page.local.subKeyD = page.local.urlParams.get("_c8o_subkey");
                                page.local.subKeyD = page.local.subKeyD == null ? "," : page.local.subKeyD;
                                try  {
                                    for(let item of list){
                                        //checkAuthorizedPages(item);
                                        if(item["type"] == "ion-card"){
                                            redList[item["name"]] = {};
                                            formSubmit[item["name"]] = {"name":item["name"], "type": item["type"], "children":{}, "label":item["config"]["title"]["text"], "labelHtml":item["config"]["title"]["personalized"] ? item["config"]["title"]["html"] : item["config"]["title"]["text"]};
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
                                page.c8o.callJson("fs://c8oforms_response_fs.get", "docid", page.local.edit, "attachments", true)
                                .then((res)=>{
                                    let att = res["_attachments"];
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
                                    return null;
                                })
                                .fail((err)=>{
                                    resolve();
                                })
                            }
                            
                        }
                        else{
                            reject();
                        }
                     }
                    else{
                        reject();
                    }
                    return null;
                    }
                })
                .fail((err)=>{
                    page.c8o.log.error("CallViewLiveAndFillFormList: " + JSON.stringify(err.message));
                    reject();
                });
		/*End_c8o_function:CTS1571648363916*/
		});
	}

    /**
     * Function FullSyncPostAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    FullSyncPostAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let r:string = props.requestable.substring(props.requestable.indexOf('.')+1);
            let v:string = 'post'
            let rvm:string = r + '.' + v
            let rootKey = props.RootKey
            let policy = props._use_policy
            let id     = props._id
            let group  = props.c8oGrp
            
            let data = {}
        
            let _data = {}
            _data = C8oCafUtils.merge(_data, props)
            _data = C8oCafUtils.merge(_data, vars)
            
            delete _data["requestable"]
            delete _data["RootKey"]
            
            if (rootKey != undefined) {
                data[rootKey] = C8oCafUtils.merge({}, _data)
                data["_use_policy"] = policy
                if (id != null) {
                    data["_id"] = id
                }
                if (group != null) {
                    data["c8oGrp"] = group
                }
                delete data[rootKey]._use_policy
                delete data[rootKey]._id
                delete data[rootKey].c8oGrp
                
                delete data[rootKey]["stack"]
                delete data[rootKey]["noLoading"]
                delete data[rootKey]["tplVersion"]
                delete data[rootKey]["actionName"]
                delete data[rootKey]["actionFunction"]
            } else {
                data = C8oCafUtils.merge({}, _data)
                if (id == null) {
                   delete data["_id"];
                }
                if (group == null) {
                    delete data["c8oGrp"]
                }
                
                delete data["stack"]
                delete data["noLoading"]
                delete data["tplVersion"]
                delete data["actionName"]
                delete data["actionFunction"]
            }
        
            let md:boolean = props.noLoading;
            
            let args = [];
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.6.0.0", version) : version.localeCompare("7.6.0.0");
            if (greater) {
                args.push("fs://" + rvm, data, null, 500, md)
            } else {
                args.push("fs://" + rvm, data, null, 500)
            }
                
            page.getInstance(Platform).ready().then(() => {     // We may need the CBL plugin so wait for platform ready.
                page.c8o.finalizeInit().then(()=>{              // To be sure that FullSync initialized properly on CBL
                    //page.call("fs://" + rvm, data, null, 500, md)
                    page['call'].apply(page, args)
                    .then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
                })
            });
        });
    }


	/**
	 * Function cancelLive
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1567095732829(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1567095732829: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1567095732829: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1567095732829: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1567095732829: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["cancelLive"] = stack["1567095732829"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1567095747345"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1567095747345'}, vars:{}};
		return this.CTS1567095747345(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1567095747345 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1567095732829: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1567095732829: ended"); resolveP(res)});
		});
	}

	/**
	 * Function replaceEmptyFunction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606731053716(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606731053716: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606731053716: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606731053716: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{name: get('name', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606731053716: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["replaceEmptyFunction"] = stack["1606731053716"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doReplaceEmpty"] = stack["1606731208673"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doReplaceEmpty', actionFunction: 'CTS1606731208673'}, vars:{name: get('name', `params.name`)}};
		return this.CTS1606731208673(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606731208673 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606731053716: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606731053716: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverCreatePwa
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606752424750(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606752424750: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606752424750: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606752424750: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606752424750: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverCreatePwa"] = stack["1606752424750"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1606752472849"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{form:params.selectedForm}`), cssClass: get('cssClass', `'modalCSV'`), blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.CreatePwa'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.ModalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606752424750: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606752424750: ended"); resolveP(res)});
		});
	}

	/**
	 * Function callExecuteCondition
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1596618928274(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1596618928274*/
    	    if(vars.canExec){
    	        page["detectTypeAndComplete"](vars.item.conditions.goToPageIf.conds, vars.item);
    	    }
    	    /*page.local.showT = true;
    	    setTimeout(()=> {
    	        page.local.showT = false;
    	    }, 10000)*/
		    resolve();
		/*End_c8o_function:CTS1596618928274*/
		});
	}

	/*
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    CloseModalAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let modals = page.router.sharedObject["ModalPages"];
            if (modals != undefined) {
                let view = page.router.sharedObject["ModalPages"].pop();
                if (view != undefined) {
                    view.dismiss(props.data).then(() => {
                        page.c8o.log.debug("[MB] Modal Page closed");
                        resolve();
                    });
                } else {
                    page.c8o.log.debug("[MB] Invalid Modal Page");
                    resolve();
                }
            } else {
                page.c8o.log.debug("[MB] No Modal Page");
                resolve();
            }
        });
    }
    

	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606826346616(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606826346616*/
		    let idx = vars.index;
		    let that = vars.that;
		    let obj = {};
		    obj[idx] = true;
		    resolve({obj: obj, that: that});
		/*End_c8o_function:CTS1606826346616*/
		});
	}


	/**
	 * Function checkAndRegister
	 *   Check is a field is empty and reject the changes or register this change
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1554977978587(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1554977978587: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1554977978587: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1554977978587: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{noCondition: get('noCondition', `false`), path: get('path', `''`), allowDuplicate: get('allowDuplicate', `true`), path2: get('path2', `''`), isNumber: get('isNumber', `false`), isSlider: get('isSlider', `false`), ngmodelChange: get('ngmodelChange', `false`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1554977978587: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["checkAndRegister"] = stack["1554977978587"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["checkAndRegister"] = stack["1554979006057"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'checkAndRegister', actionFunction: 'CTS1554979006057'}, vars:{}};
		return this.CTS1554979006057(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["If"] = stack["1554993950538"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["ifSlider"] = stack["1557407563796"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ifSlider', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isSlider`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["minGreaterMax"] = stack["1556809159712"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'minGreaterMax', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isSlider == "min>max"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557481298965"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'minGreaterMax'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1556809283427"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["minGreaterDef"] = stack["1557407275003"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'minGreaterDef', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isSlider == "min>def"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557481320666"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'minGreaterDef'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1557407275006"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["maxLowerMin"] = stack["1557413020315"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'maxLowerMin', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isSlider == "max<min"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557481385627"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'maxLowerMin'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1557413020318"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["maxLowerDef"] = stack["1557413023551"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'maxLowerDef', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isSlider == "max<def"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557481401851"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'maxLowerDef'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1557413023554"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["defLowerMin"] = stack["1557413026140"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'defLowerMin', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isSlider == "def<min"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557481417236"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'defLowerMin'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1557413026143"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["defGreaterMax"] = stack["1557413028480"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'defGreaterMax', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isSlider == "def>max"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557481433612"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'defGreaterMax'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1557413028483"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["empty"] = stack["1557913217676"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'empty', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isSlider == "empty"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557913217679"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'emptyField'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1557913217682"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["ifAllowDuplicate"] = stack["1555597503644"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ifAllowDuplicate', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.allowDuplicate && stack['checkAndRegister'].in.vars.isSlider == false`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["ifNumberZero"] = stack["1557914796082"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ifNumberZero', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isNumber == "zero"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557914796160"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'greaterThanZero'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1557914796163"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["ifNotZero"] = stack["1557933753466"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ifNotZero', actionFunction: 'IfAction', condition: get('condition', `stack['checkAndRegister'].in.vars.isNumber != "zero"`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1557926433252"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'emptyField'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1557926433258"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["ifNotAllowDuplicate"] = stack["1555597630956"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ifNotAllowDuplicate', actionFunction: 'IfAction', condition: get('condition', `!stack['checkAndRegister'].in.vars.allowDuplicate && stack['checkAndRegister'].in.vars.isSlider == false`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1555597630959"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554994860699'}, vars:{msgTosearch: get('msgTosearch', `'nameAlreadyexits'`)}};
		return this.STS1554994860699(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1555597630965"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554994860699 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["Else"] = stack["1554995118603"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Else', actionFunction: 'IfAction', condition: get('condition', `!parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1554995160146"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1554989913269'}, vars:{}};
		return this.STS1554989913269(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1554989913269 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1554979006057 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1554977978587: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1554977978587: ended"); resolveP(res)});
		});
	}
    /**
     * Function FullSyncGetAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    FullSyncGetAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let r:string = props.requestable.substring(props.requestable.indexOf('.') + 1);
            let v:string = 'get';
            let m:string = props.marker;
            let rvm:string = r + '.' + v + ((m != '' && m!= null) ? '#' + m : '');
            let data = {};
            let md:boolean = props.noLoading;
            data['docid'] = props['_id'];
            if (props['__live']) {
                data['__live'] = props['__live']; 
            }
            
            C8oCafUtils.merge(data, vars);
           
            let args = [];
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.6.0.0", version) : version.localeCompare("7.6.0.0");
            if (greater) {
                args.push("fs://" + rvm, data, null, 500, md)
            } else {
                args.push("fs://" + rvm, data, null, 500)
            }
            
            page.getInstance(Platform).ready().then(() => {     // We may need the CBL plugin so wait for platform ready.
                page.c8o.finalizeInit().then(()=>{              // To be sure that FullSync initialized properly on CBL
                    //page.call("fs://" + rvm, data, null, 500, md)
                    page['call'].apply(page, args)
                    .then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
                })
            });
        });
    }


	/**
	 * Function popOverEditView
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606727065524(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606727065524: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606727065524: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606727065524: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606727065524: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverEditView"] = stack["1606727065524"] = {};
		self.in = {props: props, vars: params};
		
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1606727210910"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `params.selectedForm`), Property: get('Property', `'formSelected'`)}, vars:{}};
		return this.SetGlobalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1606727210913"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: params.selectedForm._id}`), page: get('page', `'C8Oforms.MobileApplication.Application.editorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.RootPageAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606727065524: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606727065524: ended"); resolveP(res)});
		});
	}

	/**
	 * Function checkAndAdd
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586263158364(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586263158364*/
		    const label_color = "#202124";
		    // push function to push a new option
		    let push = (val) => {
		        if(vars.isOther){
		            vars.item['children'].push({"value":"", "selected":false,"label_color": label_color,"position": 'unset', "other": true, "id":(Math.random() + "").substring(2)});
		        }
		        else{
		            vars.item['children'].push({"value":vars.defaultValue + " " +val, "selected":false,"label_color":label_color,"position": 'unset', "id":(Math.random() + "").substring(2)});
		        }
		        
		    }
		    // main function to add an option
		    let doAdd = () => {
		        let localNumbers = [];
                page["getlocalNumbersSorted"](vars.item, localNumbers, vars.defaultValue);
                let val = page["getNextValueDispo"](localNumbers);
                push(val);
                page["updateState"]();
                page["tick"]();
                resolve(false);
		    }
		    // in case of adding an other option check if we can add it
		    let tobedone;
		    if(vars.isOther){
		        tobedone = true;
	            for(let i in vars.item['children']){
	                if(vars.item['children'][i]["other"] == true){
	                    tobedone = false;
	                }
	            }
		    }
		    // if we are adding an option 'other and have permission, or if we are adding a normal option do it
            if(tobedone || vars.isOther == false){
                doAdd();
                resolve(false);
            }
            // else toast 
            else{
                resolve(true);
            }
		/*End_c8o_function:CTS1586263158364*/
		});
	}


	/**
	 * Function deleteForm
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1567065814961(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1567065814961: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1567065814961: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1567065814961: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{arrayDocId: get('arrayDocId', `[]`), that: get('that', `null`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1567065814961: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["deleteForm"] = stack["1567065814961"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1567071463149"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567071335977'}, vars:{obj: get('obj', `params['arrayDocId']`)}};
		return this.STS1567071335977(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Translate"] = stack["1572363977300"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Translate', actionFunction: 'CTS1572363977300'}, vars:{arrDocId: get('arrDocId', `params['arrayDocId']`)}};
		return this.CTS1572363977300(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Alert"] = stack["1567067561742"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Alert', actionFunction: 'AlertAction', css1: get('css1', `'yesnobt'`), css2: get('css2', `'yesnobt'`), button2: get('button2', `parent.out['msg3']`), button3: null, value2: get('value2', `true`), value1: get('value1', `false`), value3: null, title: get('title', `parent.out['msg2']`), message: get('message', `parent.out['msg1']`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), cancel3: null, cancel2: null, subTitle: get('subTitle', `''`), cssClass: get('cssClass', `'alertcustom'`), cancel1: get('cancel1', `'cancel'`), button1: get('button1', `parent.out['msg4']`), css3: null}, vars:{}};
		return this.AlertAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["If"] = stack["1567067854580"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		
		const doLoop = (c8oPage : C8oPageBase, item : any, index : number) : Promise<any> => {
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					c8oPage.c8o.log.trace("[MB] doLoop: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] doLoop: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] doLoop: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		return new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1567066120495"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `params.arrayDocId[item] == true`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["DeleteData"] = stack["1567066209078"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DeleteData', actionFunction: 'FullSyncDeleteAction', rev: null, marker: null, docid: get('docid', `params['that'].list[item].id`), noLoading: get('noLoading', `false`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`)}, vars:{}};
		return this.FullSyncDeleteAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["deleteEntry"] = stack["1567067074796"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'deleteEntry', actionFunction: 'CTS1567067074796'}, vars:{id: get('id', `item`), that: get('that', `params['that']`)}};
		return this.CTS1567067074796(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1567067074796 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncDeleteAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		
		let self: any = stack["IterateAction"] = stack["1567066016238"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IterateAction', actionFunction: 'IterateAction', items: get('items', `Object.keys(params['arrayDocId'])`)}, vars:{}};
		return this.IterateAction(page, self.in.props, {...stack["root"].in, ...self.in.vars}, doLoop)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] IterateAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] AlertAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1572363977300 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1567071335977 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1567065814961: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1567065814961: ended"); resolveP(res)});
		});
	}
    /**
     * Function CallSequenceAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    CallSequenceAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            if (props.timeout) {
                setTimeout(() => {
                    reject("Connection timeout. Maybe no connection or network too slow.");
                }, props.timeout);
            }
            let r:string = props.requestable; let m:string = props.marker;
            let rm:string = r + (m != '' ? '#':'')+ m;
            let td:number = props.threshold || 500;
            let md:boolean = props.noLoading;
            let parameters = {__localCache_priority: props.cachePolicy, __localCache_ttl: props.cacheTtl};
            
            let args = [];
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.6.0.0", version) : version.localeCompare("7.6.0.0");
            if (greater) {
                if (typeof page["compare"]!== "undefined" && page["compare"]("7.7.0.11", version)) {
                    parameters["__disableAutologin"] = props.noAutoLogin;
                }
                args.push(rm,C8oCafUtils.merge(parameters,vars),null,td, md)
            } else {
                args.push(rm,C8oCafUtils.merge(parameters,vars),null,td)
            }
            //page.call(rm,C8oCafUtils.merge({__localCache_priority: props.cachePolicy, __localCache_ttl: props.cacheTtl},vars),null,td, md)
            page['call'].apply(page, args)
            .then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
         });
    }

	/**
	 * Function searchForm
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1605199050514(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1605199050514: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1605199050514: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1605199050514: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1605199050514: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["searchForm"] = stack["1605199050514"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doSearchForm"] = stack["1605199059317"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doSearchForm', actionFunction: 'CTS1605199059317'}, vars:{}};
		return this.CTS1605199059317(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1605199059317 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1605199050514: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1605199050514: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ZXing_sa_forms
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606311206408(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606311206408: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606311206408: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606311206408: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{type: get('type', `'file'`), file: get('file', `''`), imgId: get('imgId', `''`), videoId: get('videoId', `'video'`), resultId: get('resultId', `''`), topic: get('topic', `''`), isOutputEvent: get('isOutputEvent', `true`), isOutputGlobal: get('isOutputGlobal', `true`), ref: get('ref', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606311206408: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["ZXing_sa_forms"] = stack["1606311206408"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["initZxing"] = stack["1606311275940"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'initZxing', actionFunction: 'CTS1606311275940'}, vars:{type: get('type', `params.type`), file: get('file', `params.file`), imgId: get('imgId', `params.imgId`), videoId: get('videoId', `params.videoId`), resultId: get('resultId', `params.resultId`), isOutputEvent: get('isOutputEvent', `params.isOutputEvent`), topic: get('topic', `params.topic`), isOutputGlobal: get('isOutputGlobal', `params.isOutputGlobal`), ref: get('ref', `params.ref`)}};
		return this.CTS1606311275940(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["Toast"] = stack["1606327094066"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.translate.instant('error_occured')`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["If_OutputEvent"] = stack["1606311275958"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If_OutputEvent', actionFunction: 'IfAction', condition: get('condition', `params.isOutputEvent == true && params.topic && params.topic != '' && !parent.out.error`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["PublishEvent"] = stack["1606311275961"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PublishEvent', actionFunction: 'PublishEventAction', data: get('data', `stack['initZxing'].out`), topic: get('topic', `params.topic`)}, vars:{}};
		return this.PublishEventAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] PublishEventAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["addResolveOutput"] = stack["1606311275976"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'addResolveOutput', actionFunction: 'CTS1606311275976'}, vars:{output: get('output', `stack['initZxing'].out`)}};
		return this.CTS1606311275976(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606311275976 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606311275940 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606311206408: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606311206408: ended"); resolveP(res)});
		});
	}

	/**
	 * Function ProcessSubmitFormViewerPageFINISH
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1576513234915(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1576513234915: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1576513234915: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1576513234915: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1576513234915: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["ProcessSubmitFormViewerPageFINISH"] = stack["1576513234915"] = {};
		self.in = {props: props, vars: params};
		
		return Promise.all([
		new Promise((resolve, reject) => {
		
		let self: any = stack["IfAnonymous"] = stack["1576513270790"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfAnonymous', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.anonymous`), negate: get('negate', `false`)}, vars:{}};
		return this.IfElseAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["setLocalFinished"] = stack["1576513270799"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'setLocalFinished', actionFunction: 'CTS1576513270799'}, vars:{}};
		return this.CTS1576513270799(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1576513270799 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1576513270805"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.selectorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.RootPageAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["ShowToast"] = stack["1576513270808"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ShowToast', actionFunction: 'ToastAction', duration: get('duration', `5000`), cssClass: get('cssClass', `'changeToast'`), closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.formSubmittedStr`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1576513234915: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1576513234915: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverVisualizeView
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606728678097(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606728678097: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606728678097: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606728678097: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606728678097: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverVisualizeView"] = stack["1606728678097"] = {};
		self.in = {props: props, vars: params};
		
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["SetGlobal"] = stack["1606728697835"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobal', actionFunction: 'SetGlobalAction', Value: get('Value', `params.selectedForm`), Property: get('Property', `'formSelected'`)}, vars:{}};
		return this.SetGlobalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] SetGlobalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1606728697838"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: params.selectedForm._id}`), page: get('page', `'C8Oforms.MobileApplication.Application.viewerPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.RootPageAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606728678097: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606728678097: ended"); resolveP(res)});
		});
	}

	/**
	 * Function Translate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1572363977300(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1572363977300*/
		    let length = (Object.keys(vars.arrDocId)).length;
		    let deleteTrans: string = "";
		    if(length < 2){
		        deleteTrans = "deletetranslationUnique";
		    }
		    else{
		        deleteTrans = "deletetranslationMultiple";
		    }
		    let getTranslate = (msgTosearch :string)  =>{
		        return new Promise((resolve, reject)=>{
		            let translate = page.getInstance(TranslateService)
		            translate.get(msgTosearch).subscribe((res: string) => {
		                resolve(res);
		            });
		        });        
		    }
		    let msg1: any ="";
		    let msg2: any ="";
		    let msg3: any ="";
		    let msg4: any ="";
		    getTranslate(deleteTrans)
		    .then((res1)=>{
		        msg1 =res1;
		        getTranslate("Suppression")
	            .then((res2)=>{
	                msg2 =res2;
	                getTranslate("oui")
	                .then((res3)=>{
	                    msg3 =res3;
	                    getTranslate("non")
	                    .then((res4)=>{
	                        msg4 =res4;
	                        resolve({msg1: msg1, msg2: msg2, msg3: msg3, msg4: msg4});
	                    })
	                })
	            }) 
		    })
		
		/*End_c8o_function:CTS1572363977300*/
		});
	}


	/**
	 * Function tick
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1554994951979(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1554994951979*/
		page.tick();
		resolve();
		/*End_c8o_function:CTS1554994951979*/
		});
	}


	/**
	 * Function doSublim
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1568215765371(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1568215765371*/
		    try{
		        let property = vars.child ? "idselectedC" : "idselected";
	            if(vars.child){
	                page[property] = vars.item["id"];
	                document.getElementById('@prefixc8oitem'+vars.child.name+'@prefixc8otype'+vars.child.type).scrollIntoView({behavior: "smooth",block: "end"});
	                
	            }
	            else{
	                
	                page[property] = vars.item["id"];
	                page["idselectedC"] ="";
	                document.getElementById('@prefixc8oitem'+vars.item.name+'@prefixc8otype'+vars.item.type).scrollIntoView({behavior: "smooth",block: "end"});
	            }
		    }
		    catch(e){
		        
		    }
		resolve();
		/*End_c8o_function:CTS1568215765371*/
		});
	}


	/**
	 * Function addElementonDblClick
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1604399476887(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1604399476887: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1604399476887: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1604399476887: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{type: get('type', `''`), toast: get('toast', `false`), message: get('message', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1604399476887: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["addElementonDblClick"] = stack["1604399476887"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["addNewElement"] = stack["1604399236805"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'addNewElement', actionFunction: 'CTS1604399236805'}, vars:{type: get('type', `params.type`)}};
		return this.CTS1604399236805(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["If"] = stack["1604400353004"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `params.toast == true`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["concatTranslate"] = stack["1604405047671"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'concatTranslate', actionFunction: 'CTS1604405047671'}, vars:{message: get('message', `params.message`)}};
		return this.CTS1604405047671(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1604399011248"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: get('cssClass', `'changeToast'`), closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `parent.out`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1604405047671 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1604399236805 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1604399476887: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1604399476887: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverManageAccessRightsResponses
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606819826094(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606819826094: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606819826094: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606819826094: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606819826094: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverManageAccessRightsResponses"] = stack["1606819826094"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1606819846009"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{existingGrps: params.selectedForm, 'resp':true}`), cssClass: get('cssClass', `'modalCSV'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.ManageAccessRights'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.ModalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606819826094: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606819826094: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverDeleteView
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606843476348(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606843476348: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606843476348: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606843476348: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606843476348: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverDeleteView"] = stack["1606843476348"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["showAlertConfirmation"] = stack["1606843501812"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'showAlertConfirmation', actionFunction: 'AlertAction', css1: null, css2: null, button2: get('button2', `'OK'`), button3: null, value2: get('value2', `'1'`), value1: get('value1', `'0'`), value3: null, title: null, message: get('message', `''`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), cancel3: null, cancel2: null, subTitle: get('subTitle', `c8oPage.translate.instant('confirm_deletion') + ' ' + params.selectedForm.name`), cssClass: get('cssClass', `'alertCustomCss'`), cancel1: get('cancel1', `'cancel'`), button1: get('button1', `'CANCEL'`), css3: null}, vars:{}};
		return this.AlertAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["IfConfirmed"] = stack["1606843501815"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfConfirmed', actionFunction: 'IfAction', condition: get('condition', `parent.out == 1`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["prepareArgs"] = stack["1606843501821"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606843501821'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606843501821(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606843501821 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["DeleteData"] = stack["1607962912376"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DeleteData', actionFunction: 'FullSyncDeleteAction', rev: null, marker: null, docid: get('docid', `params.selectedForm._id`), noLoading: get('noLoading', `true`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`)}, vars:{}};
		return this.FullSyncDeleteAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncDeleteAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1607964173047"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `params.selectedForm.pwa_enabled == true`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["DeleteData1"] = stack["1607963318159"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DeleteData1', actionFunction: 'FullSyncDeleteAction', rev: null, marker: null, docid: get('docid', `params.selectedForm._id+'_pwa_document'`), noLoading: get('noLoading', `true`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`)}, vars:{}};
		return this.FullSyncDeleteAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncDeleteAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] AlertAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		let self: any = stack["Toast"] = stack["1606843501809"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.translate.instant('error_del_form')`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606843476348: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606843476348: ended"); resolveP(res)});
		});
	}

	/**
	 * Function isVisibleFunction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606750399163(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606750399163: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606750399163: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606750399163: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606750399163: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["isVisibleFunction"] = stack["1606750399163"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doIsVisibleFunction"] = stack["1606750438163"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doIsVisibleFunction', actionFunction: 'CTS1606750438163'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606750438163(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606750438163 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606750399163: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606750399163: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverCopy
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606820276458(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606820276458: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606820276458: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606820276458: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606820276458: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverCopy"] = stack["1606820276458"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["prepareArgs"] = stack["1606820446374"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606820446374'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606820446374(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1606820446380"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `stack['prepareArgs'].out.msg`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606820446374 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606820276458: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606820276458: ended"); resolveP(res)});
		});
	}

	/**
	 * Function dragStartAction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1600334272427(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1600334272427: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1600334272427: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1600334272427: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{item: get('item', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1600334272427: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["dragStartAction"] = stack["1600334272427"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doDragStart"] = stack["1600334305218"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doDragStart', actionFunction: 'CTS1600334305218'}, vars:{item: get('item', `params.item`)}};
		return this.CTS1600334305218(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1600952275883"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.STS1588860701071(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1600334305218 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1600334272427: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1600334272427: ended"); resolveP(res)});
		});
	}

	/**
	 * Function setLocalSpinnerFalse
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586254487961(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586254487961*/
		page.local.spinner = false;
		if(page.constructor.name === "editorPage"){
            page.ref.detectChanges();
        }
		//page.tick();
		resolve();
		/*End_c8o_function:CTS1586254487961*/
		});
	}


	/**
	 * Function getTranslate
	 *   Get i118n translations
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1554994860699(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1554994860699: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1554994860699: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1554994860699: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{msgTosearch: get('msgTosearch', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1554994860699: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["getTranslate"] = stack["1554994860699"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["getTranslate"] = stack["1554994950427"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'getTranslate', actionFunction: 'CTS1554994950427'}, vars:{}};
		return this.CTS1554994950427(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1554994950427 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1554994860699: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1554994860699: ended"); resolveP(res)});
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
	CTS1567095747345(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1567095747345*/
		    page.c8o.cancelLive("view2");
		resolve();
		/*End_c8o_function:CTS1567095747345*/
		});
	}


	/**
	 * Function PostAttachment
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1581498508095(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1581498508095*/
		    if(page.local["objAtt"] != undefined){

		        let push = (arr, index)=>{
                    page.router.c8o.callJsonObject("fs://c8oforms_response_fs.put_attachment",arr[index])
                    .then((res, params)=>{
                        if(!(array.length -1 == index)){
                            push(arr, index+1);
                        }
                        else{
                            resolve();
                        }
                        return null;
                    })
                    .fail((err)=>{
                        page.c8o.log.error("Error: ProcessSubmitFormViewerPage => PostAttachment", err);
                    });
            }
            let array = [];
            for(let item in page.local.objAtt){
                //let type = () ? "application/octet-stream":arr[index]["file"].mediaType;
                array.push({
                        "docid":page.local.myId,
                        "name": page.local.objAtt[item]["name"],
                        "content_type": page.local.objAtt[item]["content_type"],
                        "content": page.local.objAtt[item]["data"]
                });                  
            }
            push(array, 0);
		    }
		    else{
		        resolve();
		    }		 
		/*End_c8o_function:CTS1581498508095*/
		});
	}


	/**
	 * Function doIsVisibleFunction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606750438163(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606750438163*/
	        try{
	            if(vars.selectedForm['~c8oAcl'] == page.global.user){
	                resolve(true);
	            }
	            else{
	                var formGrp = Object
	                .keys(this['navParams']['data'].selectedForm.c8oGrp)
	                .filter(k => this['navParams']['data'].selectedForm.c8oGrp[k])
	                
	                var userGrp = Object
	                .keys(page.global.settings.groups)
	                .filter(k => page.global.settings.groups[k]);
	                
	                resolve((formGrp.filter(e => userGrp.indexOf(e) !== -1)).length > 0);
	            }
	        }
	        catch(e){
	            resolve(false);
	        }
		/*End_c8o_function:CTS1606750438163*/
		});
	}


	/**
	 * Function addAnyOption
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1586263120266(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1586263120266: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1586263120266: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1586263120266: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{item: get('item', `''`), defaultValue: get('defaultValue', `''`), isOther: get('isOther', `false`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1586263120266: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["addAnyOption"] = stack["1586263120266"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["checkAndAdd"] = stack["1586263158364"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'checkAndAdd', actionFunction: 'CTS1586263158364'}, vars:{item: get('item', `params.item`), defaultValue: get('defaultValue', `params.defaultValue`), isOther: get('isOther', `params.isOther`)}};
		return this.CTS1586263158364(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["IfaddToToast"] = stack["1586263388509"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfaddToToast', actionFunction: 'IfAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1586263388512"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.translate.instant('canOnlyAddOnce')`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1586263158364 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1586263120266: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1586263120266: ended"); resolveP(res)});
		});
	}

	/**
	 * Function updateState
	 *   Update the state of a field
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1554989913269(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1554989913269: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1554989913269: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1554989913269: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1554989913269: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["updateState"] = stack["1554989913269"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["updateState"] = stack["1554990173781"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'updateState', actionFunction: 'CTS1554990173781'}, vars:{}};
		return this.CTS1554990173781(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1554990173781 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1554989913269: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1554989913269: ended"); resolveP(res)});
		});
	}
    /**
     * Function CallFullSyncAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    CallFullSyncAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let r:string = props.requestable.substring(props.requestable.indexOf('.')+1);
            let v:string = props.verb;
            let m:string = props.marker;
            let rvm:string = r + '.' + v + (m != '' ? '#':'')+ m;
            let md:boolean = props.noLoading;
        
            let args = [];
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.6.0.0", version) : version.localeCompare("7.6.0.0");
            if (greater) {
                args.push("fs://" + rvm,C8oCafUtils.merge({},vars),null,500, md)
            } else {
                args.push("fs://" + rvm,C8oCafUtils.merge({},vars),null,500)
            }
            //page.call("fs://" + rvm,C8oCafUtils.merge({},vars),null,500, md)
            page['call'].apply(page, args)
            .then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
        });
    }
    

	/**
	 * Function getOffsetFunction
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606731751926(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606731751926: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606731751926: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606731751926: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606731751926: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["getOffsetFunction"] = stack["1606731751926"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doGetOffset"] = stack["1606731785043"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doGetOffset', actionFunction: 'CTS1606731785043'}, vars:{}};
		return this.CTS1606731785043(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606731785043 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606731751926: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606731751926: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverManageLabels
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606819977341(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606819977341: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606819977341: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606819977341: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606819977341: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverManageLabels"] = stack["1606819977341"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1606819998384"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{form: params.selectedForm}`), cssClass: get('cssClass', `'modalCSV'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.labelsPage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.ModalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606819977341: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606819977341: ended"); resolveP(res)});
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
	CTS1592831642675(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592831642675*/
		resolve({"nextPage":true});
		/*End_c8o_function:CTS1592831642675*/
		});
	}


	/**
	 * Function drag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1568121550604(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1568121550604*/
		    page.c8o.log.debug("dragstart: " + vars.type)
		    
		    event.dataTransfer.setData(vars.type, "true");
		    event.dataTransfer.setData("type", vars.type);
		    event.dataTransfer.setData("origin", "new");
		    event.dataTransfer.setData("dropEffect", "copy");
		    switch(vars.cat){
		        case 'visual':
		            page.local.dragging = true;
		            event.dataTransfer.setData("__c8oformsdrag", "true");
		            break;
		        case 'action':
		            page.local.draggingActions = true;
		            event.dataTransfer.setData("__c8oformsdragActions", "true");
		            break;
		        default:
		            page.local.dragging = true;
		            event.dataTransfer.setData("__c8oformsdrag", "true");
		            break;
		    }
		    
		    page.local.draggingName = "genericName"
		    resolve();
		/*End_c8o_function:CTS1568121550604*/
		});
	}

    /**
     * Function AlertAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    AlertAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject)=> {
            let num = 0;
            let alertCtrl = page.getInstance(AlertController);
            let objAlert = {buttons:[]};
            if(props.title != null){
                objAlert['title'] = props.title;
            }
            if(props.subTitle != null){
                objAlert['subTitle'] = props.subTitle;
            }
            if(props.cssClass != null){
                objAlert['cssClass'] = props.cssClass;
            }
            if(props.message != null){
                objAlert['message'] = props.message;
            }
            if(props.enableBackdropDismiss != null){
                objAlert['enableBackdropDismiss'] = props.enableBackdropDismiss;
            }
            if(props.button1 != null){
                objAlert['buttons'][num] = {};
                objAlert['buttons'][num]['text'] = props.button1;
                if(props.value1 != null){
                    objAlert['buttons'][num]['handler'] = ()=>{resolve(props.value1)};
                }
                if(props.cancel1 != null){
                    objAlert['buttons'][num]['role'] = props.cancel1;
                }
                if(props.css1 != null){
                    objAlert['buttons'][num]['cssClass'] = props.css1;
                }
                num += 1;
            }
            if(props.button2 != null){
                objAlert['buttons'][num] = {};
                objAlert['buttons'][num]['text'] = props.button2;
                if(props.value2 != null){
                    objAlert['buttons'][num]['handler'] = ()=>{resolve(props.value2)};
                }
                if(props.cancel2 != null){
                    objAlert['buttons'][num]['role'] = props.cancel2;
                }
                if(props.css2 != null){
                    objAlert['buttons'][num]['cssClass'] = props.css2;
                }
                num +=1;
            }
            if(props.button3 != null){
                objAlert['buttons'][num] = {};
                objAlert['buttons'][num]['text'] = props.button3;
                if(props.value3 != null){
                    objAlert['buttons'][num]['handler'] = ()=>{resolve(props.value3)};
                }
                if(props.cancel3 != null){
                    objAlert['buttons'][num]['role'] = props.cancel3;
                }
                if(props.css3 != null){
                    objAlert['buttons'][num]['cssClass'] = props.css3;
                }
            }
 
            let alert = alertCtrl.create(objAlert);
            alert.present();
        });
    }

	/**
	 * Function initZxing
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606311275940(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606311275940*/
		    
	    page.local.resolve = resolve;
	    page.local.reject = reject;
	    page.local.cameras = [];
	    page.local.facingMode = "environment";
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		
		page.global['zxing:codeReader'] = new BrowserMultiFormatReader();
        page.global['zxing:codeReader'].reset();
        
        if(vars.type == 'file'){
            let file = null;
            if(event && event.target && event.target.files){
                file = event.target.files[0];
            }
            else if(Array.isArray(vars.file)){
                file = vars.file[0];
            }
            if(file != null){
                var reader = new FileReader();
                reader.onload = function() {
                    if(reader["result"]){
                        if(vars.imgId && vars.imgId != ""){
                            vars.imgId.src = reader["result"];
                        }
                        page.global['zxing:codeReader'].decodeFromImage(undefined, reader["result"].toString())
                        .then(result => {
                            page.c8o.log.debug('Success: ' + result["text"]);
                            if(vars.resultId && vars.resultId != ""){
                                if(vars.resultId instanceof Object){
                                    vars.resultId.value =  result["text"];
                                }
                                else {
                                    (<HTMLInputElement>document.querySelector("#" + vars.resultId + " input")).value = result["text"];
                                }
                            }
                            if(vars.isOutputGlobal === true){
                                page.global['zxing:'+vars.topic + vars.ref] = result;
                                page.global['zxing:'+vars.ref] = vars.ref;
                            }
                            delete page.global['zxing:codeReader'];
                            result["ref"] = vars.ref;
                            resolve(result);
                        })
                        .catch(err => {
                            delete page.global['zxing:codeReader'];
                            if(err && !(err instanceof NotFoundException)){
                                page.c8o.log.warn('>>> Error: ' + err);
                                resolve({error: err});
                            }
                        });

                    } else {
                        delete page.global['zxing:codeReader'];
                        resolve({error: 'Can not read file'});
                    }
                }
                reader.readAsDataURL(file);
            } else {
                delete page.global['zxing:codeReader'];
                page.c8o.log.warn('Error: No file');
                resolve({error: 'No file'});
            }
        } else {
            /**
             * detect if there is any camera and if we have permission to use it
             */
            page.local.detectIfPermissionsAndFillCameras = () => {
                return new Promise((resolve, reject)=>{
                    page.global['zxing:codeReader'].getVideoInputDevices()
                    .then((videoInputDevices) => {
                        for(let v of videoInputDevices){
                            if(v.deviceId != ""){
                                page.local.cameras.push({"deviceId": v.deviceId, "facingMode": (v.label.indexOf("front") != -1 ? "user" : "environment")})
                            }
                        }
                        if(videoInputDevices.length == 0){
                            // in this case there is no camera existing in the targeted device
                            reject({"error": "not any camera available"});
                        }
                        else if(page.local.cameras.length == 0){
                            // in this case we can't acces to any camera on the device
                            resolve(false)
                        }
                        else{
                            // at least one camera were detected and available to use
                            resolve(true);
                        }
                    });
                });
            };
            
            /**
             * force to ask for permissons using new facingMode api just to ask but not to use it then
             */
            page.local.TriggerPermissions = ()=>{
                return new Promise((resolve, reject)=>{
                    navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"}, audio: false})
                    .then((stream)=>{
                        //stops the stream immediatly
                        if (stream.stop) {
                            stream.stop();
                        } else {
                            stream.getTracks().forEach((track) => {
                                track.stop();
                            });
                        }
                        resolve(true);
                    })
                    .catch((e)=>{
                        // no permissions
                        reject(e);
                    });
                });
            }
            
            /**
             * Starts Xzing process
             * @param type can be "user" | "environment"
             */
            page.local.startXzing = (type)=>{
                const videoId = !vars.videoId || vars.videoId == "" ? 'video' : vars.videoId;
                // version 0.12.4
                
                // fin camera choosen and use other if not founded
                var selectedDeviceId;
                let cameraChoosen = (page.local.cameras.filter((x)=>{return x.facingMode === type}))[0];
                if(cameraChoosen != undefined){
                    selectedDeviceId = cameraChoosen.deviceId;
                }
                else{
                    selectedDeviceId = page.local.cameras[0].deviceId;
                }
                
                page.global['zxing:codeReader'].decodeFromInputVideoDevice(selectedDeviceId, videoId)
                .then((result) => {
                    page.c8o.log.debug('Success: ' + result["text"]);
                    if(vars.resultId && vars.resultId != ""){
                        if(vars.resultId instanceof Object){
                            vars.resultId.value =  result["text"];
                        }
                        else {
                            (<HTMLInputElement>document.querySelector("#" + vars.resultId + " input")).value = result["text"];
                        }
                    }
                    page.global['zxing:codeReader'].reset();
                    delete page.global['zxing:codeReader'];
                    if(vars.isOutputGlobal === true){
                        page.global['zxing:'+vars.topic + vars.ref] = result;
                        page.global['zxing:'+vars.ref] = vars.ref;
                    }
                    result["ref"] = vars.ref;
                    resolve(result);
                })
                .catch((err) => {
                    delete page.global['zxing:codeReader'];
                    if(err && !(err instanceof NotFoundException)){
                        page.c8o.log.warn('>>> Error: ' + err);
                        resolve({error: err});
                    }
                })
            };
            
            /**
             * resetXzingProcess
             */
            page.local.resetXzing = () =>{
                if(page.global['zxing:codeReader'] !== undefined){
                    page.global['zxing:codeReader'].reset();
                }
            }
            
            /**
             * recursive ExecFlow to have camera working
             */
            page.local.startFlowExec = ()=>{
                page.local.detectIfPermissionsAndFillCameras()
                .then((ok)=>{
                    if(ok){
                        page.local.startXzing(page.local.facingMode)
                    }
                    else{
                        page.local.TriggerPermissions()
                        .then((r)=>{
                            page.local.startFlowExec();
                        })
                        .catch((e)=>{
                            reject(e);
                        })
                    }
                })
                .catch((e)=>{
                  reject(e);  
                })
            }
            // execution
            page.local.startFlowExec();
                
        }
        
            
        
		/*End_c8o_function:CTS1606311275940*/
		});
	}


	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1567086837762(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1567086837762*/
		    let cancel = false;
		    for(let item of props.stack['GetData'].out.favorites){
		        if(item == vars.that["list"][vars.id].id){
		            //already into favorite
		           cancel = true;
		            resolve(false);
		        }
		    }
		    if(!cancel){
		        if(props.stack['GetData'].out.favorites == ""){
		            props.stack['GetData'].out.favorites = [];
		        }
		        props.stack['GetData'].out.favorites.push(vars.that["list"][vars.id].id);
	            resolve(true);
		    }
		    
		 
		 
		/*End_c8o_function:CTS1567086837762*/
		});
	}

    /**
     * Function FullSyncViewAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    FullSyncViewAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            // fsview is in the form project.database.designdoc.view
            let tokens = props.fsview.split('.');
            
            let r:string = tokens[1];
            let v:string = "view";
            let m:string = props.marker;
            let rvm:string = r + '.' + v + ((m != '' && m!= null) ? '#' + m : '');
            let ddoc:string = tokens[2];
            let view:string = tokens[3];
            
            let options = {ddoc:"", view:""};
            
            for (let key in props) {
                if (key != "marker" && key!= "fsview") {
                    if (props[key] != null) {
                        if (props[key] == "true") {
                            options[key] = true;
                        } else if (props[key] == "false") { 
                            options[key] = false;
                        } else {
                            options[key] = props[key];
                        }
                    }
                }
            }
            
            options.ddoc = ddoc;
            options.view = view;
            
            C8oCafUtils.merge(options, vars);
            let md:boolean = props.noLoading;
            
            let args = [];
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.6.0.0", version) : version.localeCompare("7.6.0.0");
            if (greater) {
                args.push("fs://" + rvm, options, null, 500, md)
            } else {
                args.push("fs://" + rvm, options, null, 500)
            }
            
            page.getInstance(Platform).ready().then(() => {     // We may need the CBL plugin so wait for platform ready.
                page.c8o.finalizeInit().then(()=>{              // To be sure that FullSync initialized properly on CBL
                    //page.call("fs://" + rvm, options, null, 500, md)
                    page['call'].apply(page, args)
                    .then((res:any) => {resolve(res)}).catch((error:any) => {
                        page.c8o.log.error("An error occured while executing view '" + ddoc + "/" + view +
                                "'. One of the most common causes is that the view was not found in local database because data has not been synchronized.")
                        reject(error)
                    })
                })
            });
        });
    }


	/**
	 * Function DoCallViewLiveAndFillFormList
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1567094239810(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1567094239810*/
		    new Promise(async(resolveAsync)=>{            
		        page.local.count = 0;
		        let countFolders = 0;
		        let countOut = 0;
		        let view = page.local["view"] != undefined ? page.local["view"] : "formulaires";
	            let ddoc = page.local["ddoc"] != undefined ? page.local["ddoc"] : (page.local.published ? "published_formsV2":"formsV2");
	            page["local"].response2Array = [];
	            page["list"] = [];
	            page.local.hash = undefined;
	            page.local.hashFolders = undefined;
	            page.local.count = undefined;
	            
                // if we are inside a folder
                if(page.local.folder != ""){
                    let requestObjectIntoFolders = {
                            "ddoc": page.local["ddoc"],
                            "view": "in_folders",
                            "__live": "viewLiveInFolders",
                            "descending": true,
                            "endkey":[page.local.folder],
                            "startkey":[page.local.folder, {}]
                    };
                    page.c8o.callJsonObject("fs://c8oforms_fs.view", requestObjectIntoFolders)
                    .then((response: any)=>{
                        const newHash = sha256(JSON.stringify(response));
                        if(page.local.hash != newHash){
                            page["list"] = response.rows;
                            page.local.hash = newHash;
                            countOut = response.rows.length;
                            page.local.count = countFolders + countOut;
                        }
                        page.local.alreadyFinished = true;
                        page.local.spinner = false;
                        return null;
                    })
                    .fail((error)=>{
                        const obj : any = {};
                        obj["message"] = page["translate"].instant("error_occured");
                        obj["duration"] = 3000;
                        obj["position"] = "bottom";
                        //obj["cssClass"] = "";
                        this.ToastAction(page, obj, null);
                    })
                    
                }
                // if we are not into a folder
                else{
                 // view for documents inside of folder
                    let requestObjectFolders = {
                            "ddoc": page.local["ddoc"],
                            "view": "folders",
                            "__live": "viewLiveFolders",
                            "descending": true,
                            "reduce": true,
                            "group": true
                    };
                    page.c8o.callJsonObject("fs://c8oforms_fs.view", requestObjectFolders)
                    .then((response: any)=>{
                        const newHash = sha256(JSON.stringify(response));
                        if(page.local.hashFolders != newHash){
                            page["local"].response2Array = response.rows;
                            page.local.hashFolders = newHash;
                            countFolders = response.rows.length;
                            page.local.count = countFolders + countOut;
                        }
                        page.local.alreadyFinished = true;
                        page.local.spinner = false;
                        return null;
                    })
                    .fail((error)=>{
                        const obj : any = {};
                        obj["message"] = page["translate"].instant("error_occured");
                        obj["duration"] = 3000;
                        obj["position"] = "bottom";
                        //obj["cssClass"] = "";
                        this.ToastAction(page, obj, null);
                    });
                    // view for documents outside of folder
                    let requestObject = {
                            "ddoc": page.local["ddoc"],
                            "view": "out_folders",
                            "__live": "viewLiveOut",
                            "descending": true
                    };
                    page.c8o.callJsonObject("fs://c8oforms_fs.view", requestObject)
                    .then((response: any)=>{
                        const newHash = sha256(JSON.stringify(response));
                        if(page.local.hash != newHash){
                            page["list"] = response.rows;
                            page.local.hash = newHash;
                            countOut = response.rows.length;
                            page.local.count = countFolders + countOut;
                        }
                        page.local.alreadyFinished = true;
                        page.local.spinner = false;
                        return null;
                    })
                    .fail((error)=>{
                        const obj : any = {};
                        obj["message"] = page["translate"].instant("error_occured");
                        obj["duration"] = 3000;
                        obj["position"] = "bottom";
                        //obj["cssClass"] = "";
                        this.ToastAction(page, obj, null);
                    })
                }
	            
		    });
		    
		    
		    
		    
		    
		    
		
		/*End_c8o_function:CTS1567094239810*/
		});
	}


	/**
	 * Function getsizeobject
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1567071353635(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1567071353635*/
		    let obj = vars.obj;
		        if(obj != null){
		            let count = 0;
		            for(let item in obj){
		                if(obj[item]){
		                    count ++;
		                }
		            }
		            return resolve(count);;
		        }
		        else{
		            resolve(0);
		        }
		        
		    
		
		/*End_c8o_function:CTS1567071353635*/
		});
	}

    /**
     * Function PushPageAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    PushPageAction(page: C8oPageBase, props, vars) : Promise<any> {
	    function toString(data) {
	        if (data) {
	            try {
	                return JSON.stringify(data);
	            } catch(e) {
	                return data.toString();
	            }
	        } else {
	           return "no data"; 
	        }
	    }
		
        return new Promise((resolve, reject) => {
            let q:string = props.page; // qname of page
            let p:string = q.substring(q.lastIndexOf('.')+1);
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.7.0.2", version) : version.localeCompare("7.7.0.2");
            let v:any = greater ? p : page.getPageByName(p);
            page.routerProvider.push(v, props.data, { 
                animate: props.animate == "true" ? true:false,
                duration: props.animate_duration
            })
            .then((res:any) => {
				page.c8o.log.debug("[MB] Page '"+p+"' pushed with data: " + toString(props.data));
                resolve(res)
            }).catch((error:any) => {
				page.c8o.log.debug("[MB] Could not push page '"+p+"'");
                reject(error)
            })
        });
    }

	/**
	 * Function setLocalSpinnerTrue
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586254412312(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586254412312*/
		page.local.spinner = true;
		if(page.constructor.name === "editorPage"){
            page.ref.detectChanges();
        }
		resolve();
		/*End_c8o_function:CTS1586254412312*/
		});
	}


	/**
	 * Function setLocalFinished
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1576513270799(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576513270799*/
		page.local.finished = true;
		resolve();
		/*End_c8o_function:CTS1576513270799*/
		});
	}

	/*
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    ClosePopoverAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let view = page.getInstance(ViewController)
                view.dismiss().then(() => {
                    page.c8o.log.debug("[MB] popover Page closed");
                    resolve();
                });
            } catch (e) {
                page.c8o.log.warn("[MB] Unable to close popover", e.message);
                resolve();
            }
      	});
    }


	/**
	 * Function computeData
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1586453338364(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1586453338364*/
		    
		    
		page.local["_seq"+vars.item.id] = true;
		if(props.parent.out.projects != undefined && props.parent.out.projects.length > 0){
		    let prefix = "";
		    if(vars.viewer == true){
		        prefix = "_visibleV";
		    }else{
		        prefix = "_visible";
		    }
		    for(let i in props.parent.out.projects){
		        page.local[prefix+i]  = false;
		        const projectName = props.parent.out.projects[i]["name"];
		        for(let j in props.parent.out.projects[i]["sequences"]){
		            const sequenceName = props.parent.out.projects[i]["sequences"][j]["name"];
		            if(vars.item.actions[projectName+'.'+sequenceName]!= undefined && vars.item.actions[projectName+'.'+sequenceName]["enabled"] == true){
		                page.local[prefix+i]  = true; 
		            }
		        }
		        if(page.local[prefix+i]  == null){
		            page.local[prefix+i]  = false; 
		        }		        
		    }
		}
		page.local.tree = props.parent.out.projects;
		
		
		resolve();
		/*End_c8o_function:CTS1586453338364*/
		});
	}

    /**
     * Function ToastAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    ToastAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject)=>{
            const obj : any = {};
            obj["message"] = props.message;
            obj["duration"] = props.duration;
            obj["position"] = props.position;
            
            if(props.cssClass != null){
                obj["cssClass"] = props.cssClass
            }
            if(props.showCloseButton != null){
                obj["showCloseButton"] = props.showCloseButton
            }
            if(props.closeButtonText != null){
                obj["closeButtonText"] = props.closeButtonText
            }
            if(props.dismissOnPageChange != null){
                obj["dismissOnPageChange"] = props.dismissOnPageChange
            }
            
            let toast = page.routerProvider.toastCtrl.create(obj);
            toast.present();
            toast.onDidDismiss(() => {
                resolve();
              });
            
       })        
}


	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606815661486(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606815661486*/
        let doc = vars.selectedForm;
		let publicUser = doc.publicUser;
		//let id = doc._id;
		
        let prefix ="control_document_delete_user_"
        let makeid= (length) => {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
        let suffix = "" + Date.now();
        let idCOntrolDocument = prefix + makeid(10) + suffix;
        let userName = sha256(doc["_id"]+"_"+ doc["version"]);
        let prefix2: string = window.location.href.substring(0, window.location.href.indexOf("#/"));
        let url = prefix2 + "#/s/" + userName;
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = url;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        //el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
        resolve({"idDoc":idCOntrolDocument, "id":doc["_id"], "rev":doc["_rev"], userName: userName});
		
		/*End_c8o_function:CTS1606815661486*/
		});
	}


	/**
	 * Function doCreateFormFromTemplate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606992914229(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606992914229*/
		new Promise(async(resolve2) => {
		        try{
		            // get Template
		            let template: any = await page.c8o.callJson("fs://c8oforms_fs.get", "docid", vars.id)
		            
		            // delete somes entries
		            delete template.c8o_view_type_template;
		            delete template.id;
		            delete template._id;
		            delete template._rev;
		            
		            //add some entries
		            template.c8o_view_type_drafts_form = true;
		            template._id = page["getTime"]()
		            template.creator = page.local.user;
		            
		            // publish it
		            let publish: any = await page.c8o.callJsonObject("fs://c8oforms_fs.post", template);
		            resolve2(template._id);
		        }
		        catch(e){
		            reject(e);
		        }
		    
		})
		.then((id) => {
		    resolve(id);
		})
		.catch((e) => {
		    reject(e);
		})
		
		/*End_c8o_function:CTS1606992914229*/
		});
	}


	/**
	 * Function popOverThumnail
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606825399935(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606825399935: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606825399935: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606825399935: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606825399935: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverThumnail"] = stack["1606825399935"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["SetGlobals"] = stack["1606825446170"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetGlobals', actionFunction: 'CTS1606825446170'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606825446170(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["ModalPage"] = stack["1606826098273"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{selectedForm: params.selectedForm}`), cssClass: get('cssClass', `'modalCSV'`), blockWhileDisplayed: get('blockWhileDisplayed', `false`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.thumbnailSelection'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.ModalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606825446170 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606825399935: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606825399935: ended"); resolveP(res)});
		});
	}
    /**
     * Function PublishEvent
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    PublishEventAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let topic:string = props.topic;
            if (topic == undefined) {
                reject("topic must be set");
            }
            if (topic.length == 0) {
                reject("topic must not be empty");
            }
            
            let data = props.data;
            if (data == undefined) {
                data = {};
            }
            //console.log("publishing: topic:"+topic+", data:"+data);
            page.getInstance(Events).publish(topic,data);
            resolve(true);
        });
    }


	/**
	 * Function getTranslate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1554994950427(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1554994950427*/
        page["translate"]["get"](vars.msgTosearch)
        .subscribe((res: string) => {
            resolve(res);
        });
		/*End_c8o_function:CTS1554994950427*/
		});
	}


	/**
	 * Function ProcessSubmitFormViewerPage
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1576328658272(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1576328658272: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1576328658272: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1576328658272: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{indexPage: get('indexPage', `page.local.currentIndex`), pages: get('pages', `page.local.pages`), doAll: get('doAll', `true`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1576328658272: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["ProcessSubmitFormViewerPage"] = stack["1576328658272"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["CheckMandatoryAndUniqueColumn"] = stack["1576329582936"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CheckMandatoryAndUniqueColumn', actionFunction: 'CTS1576329582936'}, vars:{indexPage: get('indexPage', `params.indexPage`), pages: get('pages', `params.pages`), doAll: get('doAll', `params.doAll`)}};
		return this.CTS1576329582936(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		
		let self: any = stack["ifFormFillesCorrectly"] = stack["1576329798941"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ifFormFillesCorrectly', actionFunction: 'IfElseAction', condition: get('condition', `parent.out.animate != true && parent.out.ok != true`), negate: get('negate', `false`)}, vars:{}};
		return this.IfElseAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["showAlertConfirmation"] = stack["1576329916201"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'showAlertConfirmation', actionFunction: 'AlertAction', css1: get('css1', `'yesnobt'`), css2: get('css2', `'yesnobt'`), button2: get('button2', `c8oPage.translate.instant('oui')`), button3: null, value2: get('value2', `'1'`), value1: get('value1', `'0'`), value3: null, title: get('title', `c8oPage.submitFormStr`), message: get('message', `''`), enableBackdropDismiss: get('enableBackdropDismiss', `true`), cancel3: null, cancel2: null, subTitle: get('subTitle', `c8oPage.sendFormStr`), cssClass: get('cssClass', `'alertCustom c8o-alert-create-form'`), cancel1: get('cancel1', `'cancel'`), button1: get('button1', `c8oPage.translate.instant('non')`), css3: null}, vars:{}};
		return this.AlertAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["IfConfirmed"] = stack["1576329916204"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfConfirmed', actionFunction: 'IfAction', condition: get('condition', `parent.out == 1`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InitValsForFIles"] = stack["1576330045869"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InitValsForFIles', actionFunction: 'CTS1576330045869'}, vars:{}};
		return this.CTS1576330045869(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		
		let self: any = stack["IfElse"] = stack["1593706558809"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.anonymous`), negate: get('negate', `false`)}, vars:{}};
		return this.IfElseAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["CustomAction"] = stack["1593708089557"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1593708089557'}, vars:{}};
		return this.CTS1593708089557(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["CallSequence"] = stack["1593706618921"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.submitResponseAnonymous'`), timeout: null, noAutoLogin: get('noAutoLogin', `true`)}, vars:{login: get('login', `c8oPage.local.user`), resp: get('resp', `c8oPage.local.formsSubmit2`), grp: get('grp', `c8oPage.local.grp2`), myId: get('myId', `c8oPage.local.myId`), formId: get('formId', `c8oPage.local.myFormId`), timestamp: get('timestamp', `c8oPage.local.epoch2`), formRev: get('formRev', `c8oPage.local._rev`), version: get('version', `c8oPage.form.version != undefined ? c8oPage.form.version : 'test'`), actions: get('actions', `c8oPage.local.submitActions2`), files: get('files', `c8oPage.local.filesToSeq`), filesInfo: get('filesInfo', `c8oPage.local.filesInfoToSeq`)}};
		return this.CallSequenceAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1593718391476"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1576513234915'}, vars:{}};
		return this.STS1576513234915(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1576513234915 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1593708089557 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["PostData"] = stack["1576330746736"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: get('c8oGrp', `c8oPage.local.grp`), RootKey: null, noLoading: get('noLoading', `false`), _use_policy: get('_use_policy', `'merge'`), requestable: get('requestable', `'C8Oforms.c8oforms_response_fs'`), _id: get('_id', `c8oPage.local.myId`)}, vars:{resp: get('resp', `c8oPage.formsSubmit`), formId: get('formId', `c8oPage.local.myFormId`), timestamp: get('timestamp', `c8oPage.local.epoch2`), formRev: get('formRev', `c8oPage.local._rev`), version: get('version', `c8oPage.form.version != undefined ? c8oPage.form.version : 'test'`), actions: get('actions', `page['local']['submitActions']`), finished: get('finished', `!c8oPage.local.myIsOnModeFile`)}};
		return this.FullSyncPostAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["PostAttachment"] = stack["1581498508095"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostAttachment', actionFunction: 'CTS1581498508095'}, vars:{}};
		return this.CTS1581498508095(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		
		let self: any = stack["IfThereIsFileToSubmitOrDelete"] = stack["1576330886405"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfThereIsFileToSubmitOrDelete', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.local.myIsOnModeFile`), negate: get('negate', `false`)}, vars:{}};
		return this.IfElseAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["Modal_Page"] = stack["1576331215971"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Modal_Page', actionFunction: 'ModalAction', data: null, cssClass: get('cssClass', `'update-profile-modal'`), blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.progressPage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.ModalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1576513364135"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1576513234915'}, vars:{}};
		return this.STS1576513234915(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1576513234915 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["PostAttachment"] = stack["1576331215977"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostAttachment', actionFunction: 'CTS1576331215977'}, vars:{}};
		return this.CTS1576331215977(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1576331215977 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1576513320747"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1576513234915'}, vars:{}};
		return this.STS1576513234915(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1576513234915 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1581498508095 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1576330045869 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] AlertAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1592831596052"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `stack['CheckMandatoryAndUniqueColumn'].out.animate == true`), negate: get('negate', `false`)}, vars:{}};
		return this.IfElseAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["SetRedAndAnimate"] = stack["1576329825047"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SetRedAndAnimate', actionFunction: 'CTS1576329825047'}, vars:{}};
		return this.CTS1576329825047(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1576329825047 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1592831642675"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1592831642675'}, vars:{}};
		return this.CTS1592831642675(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1592831642675 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1576329582936 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1576328658272: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1576328658272: ended"); resolveP(res)});
		});
	}
    /**
     * Function SetGlobalAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    SetGlobalAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            page.router.sharedObject[props.Property] = props.Value
            resolve(props.Value)
        })
    }
    

	/**
	 * Function disSelectEntry
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1567086311384(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1567086311384*/
		    page.global.selectedItem[vars.id] = false;
		    resolve();
		/*End_c8o_function:CTS1567086311384*/
		});
	}


	/**
	 * Function detectChanges
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1588860701071(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1588860701071: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1588860701071: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1588860701071: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1588860701071: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["detectChanges"] = stack["1588860701071"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["detectChanges"] = stack["1588860707612"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'detectChanges', actionFunction: 'CTS1588860707612'}, vars:{}};
		return this.CTS1588860707612(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1588860707612 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1588860701071: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1588860701071: ended"); resolveP(res)});
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
	CTS1605185450612(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605185450612*/
            page.local.random = "assets/images/svg/imgplaceholder/placeholder" + (Math.floor(Math.random() * Math.floor(3)))+".svg";
            page.local.createN = {name: "Page 1", pageTechName: "Page"+new Date().getTime() }
            resolve(page.local.user);
		/*End_c8o_function:CTS1605185450612*/
		});
	}


	/**
	 * Function popOverVizualiseResponses
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606729949504(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606729949504: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606729949504: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606729949504: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606729949504: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverVizualiseResponses"] = stack["1606729949504"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["PushPage"] = stack["1606729974394"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PushPage', actionFunction: 'PushPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: params.selectedForm._id}`), page: get('page', `'C8Oforms.MobileApplication.Application.dataPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.PushPageAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] PushPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606729949504: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606729949504: ended"); resolveP(res)});
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
	CTS1579010211825(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1579010211825*/
		    page.global.settings = props.parent.out;
		resolve();
		/*End_c8o_function:CTS1579010211825*/
		});
	}


	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606821725701(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606821725701*/
		    let _id = vars.selectedForm._id;
		    page.c8o.callJson("fs://c8oforms_fs.get", "docid", _id, "attachments", true)
            .then((res)=>{
                res["_id"] = "" + new Date().getTime();
                res["name"] += "_" + page["translate"]["instant"]('copy');
                res["c8o_view_type_drafts_form"] = true;
                delete res["_rev"];
                delete res["parentId"];
                delete res["parentRev"]
                delete res["version"]
                delete res["~c8oAcl"];
                delete res["pwa_enabled"];
                delete res["status"];
                delete res["pwa_subPath"];
                delete res["sharedAnonymous"];
                delete res["c8o_view_type_published_form"];
                return page.c8o.callJsonObject("fs://c8oforms_fs.post", res);
            })
            .then((res)=>{
                const msg = page["translate"]["instant"]("form_copied_succes");
                resolve({msg:msg});
                page.c8o.log.debug("duplicate form successfully");
                page.tick();
               return null;
            })
            .fail((err)=>{
                const msg = page["translate"]["instant"]("error_copy_form");
                resolve({msg:msg});
                page.c8o.log.error("error duplicating form",err);
            });
		/*End_c8o_function:CTS1606821725701*/
		});
	}


	/**
	 * Function PostAttachment
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1576331215977(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576331215977*/
		    if(page["edit"] == true){
		        page.global["totalcount"] =  page.global['__C8O_TODELETE'].length + page.global['__viewerarr'].length;
		        page.global['cptTotal'] = 0;   
		        page.local["submitting"] = true;
		        if(page.global["__viewerarr"] == undefined){
		            page.global["__viewerarr"] == [];
		        }
		        page.global["__viewerProgressDelete"] = 0;
		        page.global["viewerTotalDelAdd"] =  page.global["__C8O_TODELETE"].length + page.global["__viewerTotal"];
		        page["deleteRecursive"](page.global["__C8O_TODELETE"], 0, page.global["__C8O_TODELETE"].length, page.local.myId)
		        .then(()=>{
		            page["postRecursive"](page.global["__viewerarr"], 0, page.global["__viewerTotal"],page.local.myId)
		            .then(()=>{
		                page.global["totalcount"] = 1;
		                page.global['cptTotal'] = 1;
		                page.c8o.callJsonObject("fs://.get", {"docid":page.local.myId, "_attachments":true})
		                .then((res)=>{
		                    console.log("ok@",res);
		                    return null;
		                })
		                .fail((err)=>{
		                    console.log("err",err);
		                })
		                
		               resolve(); 
		            });
		        });
		    }
		    else{
		        //page.local.myId
		        page.global["totalcount"] =  page.global['__C8O_TODELETE'].length + page.global['__viewerarr'].length;
		        page.global['cptTotal'] = 0;   
		        page.local["submitting"] = true;
		        page["postRecursive"](page.global["__viewerarr"], 0, page.global["__viewerTotal"], page.local.myId)
	            .then(()=>{
	                page.c8o.callJsonObject("fs://c8oforms_response_fs.get", {"docid":page.local.myId, "_attachments":true})
	                .then((res)=>{
                        console.log("ok@",res);
                        for(let i in res["_attachments"]){
                            if(i.indexOf("_C80C80_") != -1){
                                let id = i.substring(0, i.indexOf("_"));
                                for(let el of page["formsList"]){
                                    if(el.id == id){
                                        if(page["formsSubmit"][el.name]["value"] == undefined || page["formsSubmit"][el.name]["value"] == ""){
                                            page["formsSubmit"][el.name]["value"] = [];
                                        }
                                        page["formsSubmit"][el.name]["value"].push(i);
                                        
                                    }
                                }
                                //"1581416653460_C80C80_captureWebsocketPayDarty.PNG_C80C80_1581516753158".substring(0,"1581416653460_C80C80_captureWebsocketPayDarty.PNG_C80C80_1581516753158".indexOf("_"))
                            }
                        }
                        
                        page.c8o.callJson("fs://c8oforms_response_fs.post", "_id",page.local.myId,"_use_policy","merge", "resp", page["formsSubmit"], "finished", true)
                        .then((res)=>{
                            console.log("@@res", res);
                            return null;
                        })
                        .fail((err)=>{
                            console.log("@err", err);
                        })
                        return null; 
                    })
                    .fail((err)=>{
                        console.log("err",err);
                    })
	                page.global["totalcount"] = 1;
	                page.global['cptTotal'] = 1;
	                
	               resolve(); 
	            });
		    }
                
		 
		/*End_c8o_function:CTS1576331215977*/
		});
	}


	/**
	 * Function doReplaceEmpty
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606731208673(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606731208673*/
		resolve(vars.name.replace(/ /g, '_'));
		/*End_c8o_function:CTS1606731208673*/
		});
	}


	/**
	 * Function syncAndUpdateGetOnPull
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1574429452233(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1574429452233: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1574429452233: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1574429452233: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1574429452233: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["syncAndUpdateGetOnPull"] = stack["1574429452233"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["DoSyncAndUpdateGetOnPull"] = stack["1574431507993"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'DoSyncAndUpdateGetOnPull', actionFunction: 'CTS1574431507993'}, vars:{}};
		return this.CTS1574431507993(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1574431507993 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1574429452233: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1574429452233: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverCopyTo
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606821705396(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606821705396: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606821705396: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606821705396: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606821705396: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverCopyTo"] = stack["1606821705396"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["prepareArgs"] = stack["1606821725701"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606821725701'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606821725701(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1606821725707"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `stack['prepareArgs'].out.msg`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606821725701 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606821705396: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606821705396: ended"); resolveP(res)});
		});
	}

	/**
	 * Function detectChangesDoble
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1588862475826(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1588862475826: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1588862475826: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1588862475826: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1588862475826: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["detectChangesDoble"] = stack["1588862475826"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["detectChanges"] = stack["1588862475829"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'detectChanges', actionFunction: 'CTS1588862475829'}, vars:{}};
		return this.CTS1588862475829(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1588862475829 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1588862475826: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1588862475826: ended"); resolveP(res)});
		});
	}

	/**
	 * Function callViewLiveAndFillFormListViewer
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1571648311071(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1571648311071: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1571648311071: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1571648311071: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{}, ...vars};
		
		page.c8o.log.debug("[MB] STS1571648311071: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["callViewLiveAndFillFormListViewer"] = stack["1571648311071"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["CallViewLiveAndFillFormList"] = stack["1571648363916"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallViewLiveAndFillFormList', actionFunction: 'CTS1571648363916'}, vars:{}};
		return this.CTS1571648363916(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
				return new Promise((resolve, reject) => {
		
		let self: any = stack["IfElse"] = stack["1604420874457"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfElse', actionFunction: 'IfElseAction', condition: get('condition', `c8oPage.global.pwa == true`), negate: get('negate', `false`)}, vars:{}};
		return this.IfElseAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1604422025567"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `c8oPage.translate.instant('error_not_found')`), path: get('path', `'errorMsgViewer'`)}};
		return this.STS1587563852086(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1587563852086 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction1"] = stack["1604422039642"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction1', actionFunction: 'STS1587563852086'}, vars:{val: get('val', `true`), path: get('path', `'errorViewer'`)}};
		return this.STS1587563852086(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1587563852086 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["RootPage"] = stack["1574090799651"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: null, page: get('page', `'C8Oforms.MobileApplication.Application.selectorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.RootPageAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1571648363916 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1571648311071: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1571648311071: ended"); resolveP(res)});
		});
	}


	/**
	 * Function popOverPublishDoc
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606729290054(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606729290054: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606729290054: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606729290054: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606729290054: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverPublishDoc"] = stack["1606729290054"] = {};
		self.in = {props: props, vars: params};
		
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["prepareArgs"] = stack["1606729318396"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606729318396'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606729318396(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["PostData"] = stack["1606729318399"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: null, RootKey: null, noLoading: get('noLoading', `false`), _use_policy: get('_use_policy', `'override'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `parent.out.idDoc`)}, vars:{formId: get('formId', `parent.out.id`), formRev: get('formRev', `parent.out.rev`), version: get('version', `parent.out.version`)}};
		return this.FullSyncPostAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1606729318417"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1604330825068'}, vars:{}};
		return this.STS1604330825068(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1604330825068 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606729318396 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["Toast"] = stack["1607092390204"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: get('cssClass', `'changeToast'`), closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.translate.instant('pub_form_success0') + ' ' +params.selectedForm.name + ' ' + c8oPage.translate.instant('pub_form_inProcess')`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606729290054: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606729290054: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverExport
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606828765731(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606828765731: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606828765731: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606828765731: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606828765731: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverExport"] = stack["1606828765731"] = {};
		self.in = {props: props, vars: params};
		
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["prepareArgs"] = stack["1606828781296"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606828781296'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606828781296(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606828781296 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["IfGenrerateSharedAcionSourceToBeCallableFromCustomAction"] = stack["1606829687017"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IfGenrerateSharedAcionSourceToBeCallableFromCustomAction', actionFunction: 'IfAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1606829720120"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1606829529555'}, vars:{}};
		return this.STS1606829529555(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1606829529555 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606828765731: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606828765731: ended"); resolveP(res)});
		});
	}

	/**
	 * Function popOverRemoveFromFav
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606828487741(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606828487741: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606828487741: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606828487741: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606828487741: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverRemoveFromFav"] = stack["1606828487741"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["prepareArgs"] = stack["1606828508610"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606828508610'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606828508610(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["GetData1"] = stack["1606828508625"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData1', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `false`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `'C8Oreserved_' + c8oPage.global.user`)}, vars:{}};
		return this.FullSyncGetAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["CustomAction"] = stack["1606828508628"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1606828508628'}, vars:{}};
		return this.CTS1606828508628(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606828508628 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606828508610 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606828487741: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606828487741: ended"); resolveP(res)});
		});
	}

	/**
	 * Function createFormFromTemplate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606992860587(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606992860587: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606992860587: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606992860587: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{id: get('id', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606992860587: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["createFormFromTemplate"] = stack["1606992860587"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["doCreateFormFromTemplate"] = stack["1606992914229"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'doCreateFormFromTemplate', actionFunction: 'CTS1606992914229'}, vars:{id: get('id', `params.id`)}};
		return this.CTS1606992914229(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["RootPage1"] = stack["1606994135427"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage1', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: parent.out}`), page: get('page', `'C8Oforms.MobileApplication.Application.editorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.RootPageAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606992914229 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606992860587: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606992860587: ended"); resolveP(res)});
		});
	}

	/**
	 * Function detectChanges
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588860707612(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588860707612*/
		page.ref.detectChanges();
		resolve();
		/*End_c8o_function:CTS1588860707612*/
		});
	}


	/**
	 * Function computeData
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1599053087928(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599053087928*/
		    
		    
		page.local["_seq"+vars.item.id] = true;
		if(props.parent.out.projects != undefined && props.parent.out.projects.length > 0){
		    let prefix = "";
		    if(vars.viewer == true){
		        prefix = "_sourceV";
		    }else{
		        prefix = "_source";
		    }
		    for(let i in props.parent.out.projects){
		        page.local[prefix+i]  = false;
		        const projectName = props.parent.out.projects[i]["name"];
		        for(let j in props.parent.out.projects[i]["sequences"]){
		            const sequenceName = props.parent.out.projects[i]["sequences"][j]["name"];
		            if(vars.item.actions != undefined && vars.item.actions[projectName+'.'+sequenceName]!= undefined && vars.item.actions[projectName+'.'+sequenceName]["enabled"] == true){
		                page.local[prefix+i]  = true; 
		            }
		        }
		        if(page.local[prefix+i]  == null){
		            page.local[prefix+i]  = false; 
		        }		        
		    }
		}
		page.local.treeSource = props.parent.out.projects;
		
		
		resolve();
		/*End_c8o_function:CTS1599053087928*/
		});
	}


	/**
	 * Function checkAndRegister
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1554979006057(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1554979006057*/
		    
		    /** example admitting that path = 'obj.name'
             * This is done because, if we do not add a space to the initial value,
             * angular doesn't refresh properly UI. 
            let val = obj.name;
            obj.name = obj.name + " ";
            page.tick()
            obj.name = val;
            page.tick 
            **/
		    
		    // If vars.isNumber is false
		    if(!vars.isNumber){
		        let obj = vars.obj;
		        let evalString;
		        if(vars.ngmodelChange){
		            evalString = vars["path"] + " = event";
		        }
		        else{
		            evalString = vars["path"] + " = event.srcElement.value";
		        }
	            
	            // If the current field is not empty or if we explicitly say that there is no condition in the noCondition variable
	            // In the next step we check if we allow for duplicated in the fields
	            // If we don't allow it, we go into the if statement then we check in the item's children if there are any duplicate
	            if((event.srcElement != undefined ? event.srcElement.value != "" : event != "") || vars.noCondition ){
	                // if not we don't allow duplicates
	                if(!vars.allowDuplicate){
	                    let obj2 = vars.obj2;
	                    let duplicate = false;
	                    // Check for duplicates
	                    if(obj.children != undefined){
	                        for(let val of obj.children){
	                            if(event.srcElement.value == val.value)
	                                duplicate = true;
	                        } 
	                    }
	                    // If there are any duplicates we put the old value to the field
	                    // And we resolve(true) to display the correct messages (checkAndRegister next steps)
	                    if(duplicate){
	                        let val = eval(ts.transpile(vars["path2"]));
	                        eval(ts.transpile(vars["path2"] + " = " + vars["path2"] + " + ' ' "));
	                        page.tick();
	                        eval(ts.transpile(vars["path2"] + " = val"));
	                        page.tick();
	                        resolve(true);
	                    }
	                    else{
	                        if(vars.ngmodelChange){
	                            evalString = vars["path"] + " = event";
	                        }
	                        else{
	                            evalString = vars["path"] + " = event.srcElement.value";
	                        }
	                        eval(ts.transpile(evalString));
	                        resolve(false);
	                    }                        
	                }
	                else{
	                    eval(ts.transpile(evalString));
	                    resolve(false);
	                }               
	            }
	            else{               
	                if(!vars.allowDuplicate){
	                    // In case that the field is empty we just put the last value back in the field
	                    let obj2 = vars["obj2"];
	                    let val = eval(ts.transpile(vars["path2"]));
	                    eval(ts.transpile(vars["path2"] + " = " + vars["path2"] + " + ' ' "));
	                    page.tick();
	                    eval(ts.transpile(vars["path2"] + " = val"));
	                    page.tick();
	                    // Set this to true to match appropriate if condition in next steps
	                    vars.allowDuplicate = true;
	                    resolve(true);
	                    
	                }
	                else{
	                    let val = eval(ts.transpile(vars["path"]));
	                    eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
	                    page.tick();
	                    eval(ts.transpile(vars["path"] + " = val"));
	                    page.tick();
	                    resolve(true);
	                }                
	            }
		    }
		    else{
		        let obj = vars["obj"];
		        
		        let evalString;
		        if(vars.ngmodelChange){
		            evalString = vars["path"] + " = event";
		        }
		        else{
		            evalString = vars["path"] + " = event.srcElement.value";
		        }
		        // If the field is within a Slider
		        if(vars.isSlider){
		            console.log("test");
		            // In this case, we need to check few things :
		            // minimum is not greater than max
		            // maximum is greater than defaultvalue and defaultvalue greater than minimum
		            let min = +obj.config.min;
		            let max = +obj.config.max;
		            let defaultValue = +obj.config.defaultvalue;
		            switch(vars["path"]){
		                case "obj.config.min": {
		                    // In case we are calling from 'Minimum'
		                    // First we check that the value is not empty
		                    // If not we check that min < max AND min < defaultValue
		                    // If everything is Ok we go to the last else
		                    // If not, we display a custom message triggered by changing the value of isSlider
		                    min = +event.srcElement.value;
		                    if(event.srcElement.value == ""){
                                let oldVal = eval(ts.transpile(vars["path"]));
                                
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isSlider = "empty";
                                resolve(true);
                            }
		                    else if(min > max){
		                        
		                        let oldVal = eval(ts.transpile(vars["path"]));
	                            eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
	                            page.tick();
	                            eval(ts.transpile(vars["path"] + " = +oldVal"));
	                            page.tick();
	                            vars.isSlider = "min>max";
	                            resolve(true);
		                    }
		                    else if(min > defaultValue){
                                
                                let oldVal = eval(ts.transpile(vars["path"]));
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isSlider = "min>def";
                                resolve(true);
                            }
		                    else{
		                        if(vars.ngmodelChange){
		                            evalString = vars["path"] + " = event";
		                        }
		                        else{
		                            evalString = vars["path"] + " = event.srcElement.value";
		                        }
	                            eval(ts.transpile(evalString));
	                            resolve(false);
		                    }		                    
		                    break;
		                }
		                case "obj.config.max": {
		                    // Same case as 'Minimum' but for the 'Maximum'
		                    // First we check that the value is not empty
                            // If not we check that max > min AND max > defaultValue
                            // If everything is Ok we go to the last else
                            // If not, we display a custom message triggered by changing the value of isSlider
		                    
		                    max = +event.srcElement.value;
		                    if(event.srcElement.value == ""){
                                let oldVal = eval(ts.transpile(vars["path"]));
                                
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isSlider = "empty";
                                resolve(true);
                            }
		                    else if(max < min){
		                        let oldVal = eval(ts.transpile(vars["path"]));
		                        
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isSlider = "max<min";
                                resolve(true);
		                    }
		                    else if(max < defaultValue){
		                        let oldVal = eval(ts.transpile(vars["path"]));
		                        
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isSlider = "max<def";
                                resolve(true);
		                    }
		                    else{
		                        evalString = vars["path"] + " = event.srcElement.value";
                                eval(ts.transpile(evalString));
                                resolve(false);
		                    }
		                    
                            break;
                        }
		                case "obj.config.defaultvalue": {
		                    // Same case as 'Minimum' but for the 'DefaultValue'
		                    // First we check that the value is not empty
                            // If not we check that defaultValue > min AND defaultValue < max 
                            // If everything is Ok we go to the last else
                            // If not, we display a custom message triggered by changing the value of isSlider
		                    defaultValue = +event.srcElement.value;
		                    
		                    if(event.srcElement.value == ""){
		                        let oldVal = eval(ts.transpile(vars["path"]));
                                
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isSlider = "empty";
                                resolve(true);
		                    }
		                    else if(defaultValue < min){
                                let oldVal = eval(ts.transpile(vars["path"]));
                                
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isSlider = "def<min";
                                resolve(true);
                            }
                            else if(defaultValue > max){
                                let oldVal = eval(ts.transpile(vars["path"]));
                                
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isSlider = "def>max";
                                resolve(true);
                            }
                            else{
                                evalString = vars["path"] + " = event.srcElement.value";
                                eval(ts.transpile(evalString));
                                resolve(false);
                            }
                            break;
                        }
		            }
		        }
		        else{
		             // If the field is just a number, not in a Slider
    		         // If the field is not empty we proceed
    	                if(event.srcElement.value != ""){
    	                    let inputVal = event.srcElement.value;
    	                    if(inputVal > 0){
    	                        // If the value is greater than 0, it's good so we just keep the value
    	                        eval(ts.transpile(evalString));
    	                        resolve(false);
    	                    }
    	                    else if(event.srcElement.value == 0){
    	                        let oldVal = eval(ts.transpile(vars["path"]));
                                eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
                                page.tick();
                                eval(ts.transpile(vars["path"] + " = +oldVal"));
                                page.tick();
                                vars.isNumber = "zero";
                                resolve(true);
    	                    }
    	                    else{
    	                        // If not, we have to put the old value and warn the user that it's not allowed
    	                        let oldVal = eval(ts.transpile(vars["path"]));
    	                        eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
    	                        page.tick();
    	                        eval(ts.transpile(vars["path"] + " = +oldVal"));
    	                        page.tick();
    	                        resolve(true);
    	                    }
    	                }
    	                else{
    	                    // If it's empty we just warn the user that it's not allowed in the next steps
    	                    let oldVal = eval(ts.transpile(vars["path"]));
    	                    eval(ts.transpile(vars["path"] + " = " + vars["path"] + " + ' ' "));
    	                    page.tick();
    	                    eval(ts.transpile(vars["path"] + " = +oldVal"));
    	                    page.tick();
    	                    resolve(true);
    	                }
    	            }
		        }
		/*End_c8o_function:CTS1554979006057*/
		});
	}


	/**
	 * Function detectChanges
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1588862475829(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1588862475829*/
		page.ref.detectChanges();
		setTimeout(()=>{
            page.ref.detectChanges();
        }, 0)
		resolve();
		/*End_c8o_function:CTS1588862475829*/
		});
	}


	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606828508610(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606828508610*/
		    
		    let obj;
		    page.c8o.callJsonObject("fs://c8oforms_fs.get", {
                "docid":'C8Oreserved_' + page.global.user
            })
            .then((res)=>{
                let i = res["favorites"].indexOf(vars.selectedForm._id);
                res["favorites"].splice(i,1);
                obj = res;
                obj['_use_policy'] = "override";
                return page.c8o.callJsonObject("fs://c8oforms_fs.post", obj)
            })
            .then((res)=>{
                resolve();
                return null;
            })
            .fail((err)=>{
                console.log(err);
            });
           
		
		    
		/*End_c8o_function:CTS1606828508610*/
		});
	}

    /**
     * Function IfElseAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    IfElseAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let ok = (props.condition) ? true : false;
            if (props.negate) {
                ok = !ok;
            }
            if (ok) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    }
    
    /**
     * Function FullSyncDeleteAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    FullSyncDeleteAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let r:string = props.requestable.substring(props.requestable.indexOf('.') + 1);
            let v:string = 'delete';
            let m:string = props.marker;
            let rvm:string = r + '.' + v + ((m != '' && m!= null) ? '#' + m : '');
            let data = {};
            let md:boolean = props.noLoading;
            data['docid'] = props['docid'];
            if(data['rev'] != null){
                data['rev'] = props['rev'];
            }
            
            C8oCafUtils.merge(data, vars);
            
            let args = [];
            let version:string = props.tplVersion ? props.tplVersion : '';
            let greater: any = typeof page["compare"]!== "undefined" ? page["compare"]("7.6.0.0", version) : version.localeCompare("7.6.0.0");
            if (greater) {
                args.push("fs://" + rvm, data, null, 500, md)
            } else {
                args.push("fs://" + rvm, data, null, 500)
            }
            
            page.getInstance(Platform).ready().then(() => {     // We may need the CBL plugin so wait for platform ready.
                page.c8o.finalizeInit().then(()=>{              // To be sure that FullSync initialized properly on CBL
                    //page.call("fs://" + rvm, data, null, 500, md)
                    page['call'].apply(page, args)
                    .then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
                })
            });
        });
    }


	/**
	 * Function CheckMandatoryAndUniqueColumn
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1576329582936(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576329582936*/
		    
		    //this.local.pages[this.local.currentIndex]['pageTechName'] == item.config.page
		let currentIndex = vars.indexPage;
		let pages = vars.pages;
		let doAll = vars.doAll;
		let submit = true;
		let submitDoble = true;
		page.local.redListTwoSameColumn = {};
		
		const checkNotEmptyCheckboxGroup = (arg1: any, itemName: string)=>{
		    for(let line in arg1){
                let ok = false;
                for(let things of arg1[line]){
                    if(things.selected){
                        ok = true;
                    }
                }
                if(!ok){
                    page["redList"][itemName] = true;
                    submit = false; 
                }
            }
		};
		
		const checkNotEmptyRadioGroup = (arg1: any, itemName: string)=>{
		    for(let line in arg1){
                if(arg1[line] == ""){
                    page["redList"][itemName] = true;
                    submit = false; 
                }
                else if(arg1[line] == "__c8o__unique_other"){
                    arg1[line] = page.local[itemName+'_other'];
                }
            }
        };
        
        const checkNotEmptyCheckbox = (arg1: any, itemName: string)=>{
            let ok = false;
            for(let child in arg1){
                if(arg1[child]["selected"] == true){
                    ok = true;
                }
            }
            if(!ok){
                submit = false;
                page["redList"][itemName] = true;
            }
        };
        
        const checkNotEmptyFile = (arg1) => {
            if(page.global[page["idFiles"]][arg1["id"]].length == 0){
                page["redList"][arg1["name"]] = true;
                submit = false; 
            }
        }

        const checkJustOneByColumnRadioGroup = (arg1: any, itemName: string)=>{
            for(let i in arg1){
                let current = arg1[i];
                let find = Object.keys(arg1).map(key => arg1[key]).filter(res => res == current && res != "").length > 1;
                if(find == true){
                  page.local.redListTwoSameColumn[itemName] = true;
                  submitDoble = false;
                  break;
                }
            }
        };
        
        
        const checkJustOneByColumnCheckboxGroup = (arg1: any, itemName: string, formsSubmit)=>{
            for(let i in arg1){
                let find = Object.keys(formsSubmit[itemName]["children"]).map(k =>formsSubmit[itemName]["children"][k][i]).filter(obj => obj.selected).length > 1;
                if(find == true){
                  page.local.redListTwoSameColumn[itemName] = true;
                  submitDoble = false;
                  break;
                }
            } 
        };
        
        const checkMandatoryAndJustOnebyColumn = (currentList, formsSubmit, pages, currentIndex)=>{
            for(let item in currentList){
                // Reassign each value as virgin
                page["redList"][currentList[item]["name"]] = false;
                let doThis = false;
                if(currentIndex != undefined){
                    if(pages[currentIndex]['pageTechName'] == currentList[item]["config"]["page"]){
                        doThis = true;
                    }
                    
                }
                else{
                    doThis = true;
                }
                if(doThis){
                    // Process just one by column
                    if(currentList[item]["config"] != undefined && currentList[item]["config"]["different"] == true){
                        
                        switch (formsSubmit[currentList[item]["name"]]["type"]) {
                            case 'radio_group':
                                checkJustOneByColumnRadioGroup(formsSubmit[currentList[item]["name"]]["children"], currentList[item]["name"]);
                                break;
                            case 'checkbox_group':
                                checkJustOneByColumnCheckboxGroup(currentList[item]["children"], currentList[item]["name"], formsSubmit);
                                break;
                            default:
                                break;
                        }
                    
                    }
                    // Process check mandatory
                    if(currentList[item]["config"] != undefined && currentList[item]["config"]["mandatory"] == true){
                        if(formsSubmit[currentList[item]["name"]]["value"] === "" || formsSubmit[currentList[item]["name"]]["value"] === undefined){
                            
                            switch (currentList[item]["type"]) {
                                case 'radio_group':
                                    checkNotEmptyRadioGroup(formsSubmit[currentList[item]["name"]]["children"], currentList[item]["name"]);
                                    break;
                                case 'checkbox_group':
                                    checkNotEmptyCheckboxGroup(formsSubmit[currentList[item]["name"]]["children"], currentList[item]["name"]);
                                    break;
                                case 'file':
                                    checkNotEmptyFile(currentList[item]);
                                    break;
                                case "checkbox":
                                    checkNotEmptyCheckbox(formsSubmit[currentList[item]["name"]]["children"], currentList[item]["name"]);
                                    break;
                                default:
                                    page["redList"][currentList[item]["name"]] = true;
                                    submit = false;
                                    break;
                        }
                            
                        }
                    }
                    // Recursive call for cards
                    else if(currentList[item]["type"] == "ion-card"){
                        checkMandatoryAndJustOnebyColumn(currentList[item]["children"], formsSubmit[currentList[item]["name"]]["children"], pages, currentIndex);
                    }   
                }
                
            }
        }
        
            
		

        let putAttachments = (formSubmit) => {
            for(let item in formSubmit){
                if(formSubmit[item]["type"] == "signature" || formSubmit[item]["type"] == "img"){
                    if(formSubmit[item]["value"] != ""){
                        if(page.local.objAtt == null){
                            page.local.objAtt = {};
                        }
                        page.local.objAtt[formSubmit[item]["name"]]  = {
                                    "content_type": (formSubmit[item]["type"] == "signature" ? 'image/png' : 'image/jpg'),
                                   "data": (formSubmit[item]["type"] == "img" ? formSubmit[item]["value"] : formSubmit[item]["value"].substring(22)),
                                   "name":formSubmit[item]["name"]
                                }
                        }
                    
                }
                else if(formSubmit[item]["type"] == "radio" && formSubmit[item]["value"] == "__c8o__unique_other"){
                    formSubmit[item]["children"][formSubmit[item]["children"].length -1].value = page.local[formSubmit[item].name+"_other"];
                    formSubmit[item]["value"] = page.local[formSubmit[item].name+"_other"];
                    formSubmit[item]["children"][formSubmit[item]["children"].length -1].other = true;
                    //page.local[formSubmit[item].name+"_other"]
                }
                else if(formSubmit[item]["type"] == "ion-card"){
                    putAttachments(formSubmit[item]["children"]);
                }
                }   
            }
        
       let getPathById = (id, form = (<any>page).form.formulaire, index = [])=>{
            for(let elem of form){
                if(elem.id == id){
                    index.push(elem.name)
                    return index;
                }
                else if(elem.type == "ion-card"){
                    return getPathById(id, elem.children, [elem.name]);
                }
            }
        }
        let searchForActions = () => {
            page["local"]["submitActions"] = {}
            if(page["form"]["actions"] != undefined){
                for(let elem of page["form"]["actions"]){
                    if(elem["cat"] == "action"){
                        if(page["local"]["submitActions"][elem["type"]] == null){
                            page["local"]["submitActions"][elem["type"]] = []
                        }
                        page["local"]["submitActions"][elem["type"]].push(elem);
                        const regex = /[$$]{2}\w+[$$]{2}/gm
                        for(let action in elem.actions){
                            if(elem.actions[action].enabled == true){
                                for(let va in elem.actions[action]["vars"]){
                                    
                                    let str = elem.actions[action]["vars"][va].str;
                                    if(str == undefined){
                                        str = "";
                                    }
                                    var arrayFound = str.match(regex);
                                    
                                    if(arrayFound!= undefined && arrayFound.length > 0){
                                        for(let elements of arrayFound){
                                            let iStart = str.indexOf(elements);
                                            let iEnd = iStart + elements.length;
                                            let id = elements.substring(2, elements.length -2);
    
                                            let path = getPathById(id);
                                            let currentVal = "";
                                            if(path.length == 1){
                                                currentVal = page["formsSubmit"][path[0]].value;
                                            }
                                            else if(path.length == 2){
                                                currentVal = page["formsSubmit"][path[0]].children[path[1]].value;
                                            }
                                            str = str.substring(0, iStart) + currentVal + str.substring(iEnd);
                                            
                                        }
                                        elem.actions[action]["vars"][va] = str;
                                    }
                                    else{
                                        elem.actions[action]["vars"][va] = elem.actions[action]["vars"][va].str != undefined ? elem.actions[action]["vars"][va].str : "";
                                    }
                                }
                            }
                            
                        }
                    }
                }
            }
        }
       

 /**
  let searchForActions = () => {
            page["local"]["submitActions"] = {}
            for(let elem of page["formsList"]){
                if(elem["cat"] == "action"){
                    if(page["local"]["submitActions"][elem["type"]] == null){
                        page["local"]["submitActions"][elem["type"]] = []
                    }
                    page["local"]["submitActions"][elem["type"]].push(elem);
                    
                    for(let action in elem.actions){
                        for(let va in elem.actions[action]["vars"]){
                            
                            if(elem.actions[action]["vars"][va].source == true){
                                let path = getPathById(elem.actions[action]["vars"][va].str);
                                if(path.length == 1){
                                    elem.actions[action]["vars"][va] = page["formsSubmit"][path[0]].value;
                                }
                                else if(path.length == 2){
                                    elem.actions[action]["vars"][va] = page["formsSubmit"][path[0]].children[path[1]].value;
                                }
                            }
                            else{
                                elem.actions[action]["vars"][va] = elem.actions[action]["vars"][va].str != undefined ? elem.actions[action]["vars"][va].str : "";
                            }
                            /*if(page["formsSubmit"][va.substring(6)] != undefined){
                                elem.actions[action]["vars"][va]  = page["formsSubmit"][va.substring(6)]["value"];
                            } /*endcomment
                        }
                    }
                }
            }
        }
  
 **/       
        
        // call the function
        checkMandatoryAndJustOnebyColumn(page["formsList"], page["formsSubmit"], pages, currentIndex);
        if(doAll == true){
            putAttachments(page["formsSubmit"]);
            searchForActions();
        }
		
		page.tick();
		if(submit && submitDoble){
		    if(doAll == true){
		        let translate = page.getInstance(TranslateService);
	            let obs1 = translate.get('formSubmitted');
	            let obs2 = translate.get('submitForm');
	            let obs3 = translate.get('sendForm');
	            zip(obs1, obs2, obs3).subscribe((res)=>{
	                page["formSubmittedStr"] = res[0];
	                page["submitFormStr"] = res[1];
	                page["sendFormStr"] = res[2];
	                resolve({"animate":false});
	            });
		    }
		    else{
		        resolve({"ok": true});
		    }
		    
		  
		  
		}
		else{
		    resolve({"animate":true, "submit":submit, "submitDoble":submitDoble});
		}
		/*End_c8o_function:CTS1576329582936*/
		});
	}

    /**
     * Function CloseLoadingAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    CloseLoadingAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if (page.global["_c8o_loaders"] != undefined) {
                    page.global["_c8o_loaders"].dismiss();
                    delete page.global["_c8o_loaders"];
                }
                resolve();
            }
            catch(err) {
                reject(err)
            }
        });
    }

	/**
	 * Function popOverDisableSharePublic
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606815643143(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606815643143: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606815643143: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606815643143: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606815643143: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverDisableSharePublic"] = stack["1606815643143"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["prepareArgs"] = stack["1606815661486"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1606815661486'}, vars:{selectedForm: get('selectedForm', `params.selectedForm`)}};
		return this.CTS1606815661486(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["PostData"] = stack["1606815661489"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: null, RootKey: null, noLoading: get('noLoading', `false`), _use_policy: get('_use_policy', `'override'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `parent.out.idDoc`)}, vars:{formId: get('formId', `out.id`), formRev: get('formRev', `parent.out.rev`), _id: get('_id', `parent.out.idDoc`), userName: get('userName', `parent.out.userName`)}};
		return this.FullSyncPostAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["Toast"] = stack["1606815661510"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'Toast', actionFunction: 'ToastAction', duration: get('duration', `3000`), cssClass: null, closeButtonText: null, dismissOnPageChange: get('dismissOnPageChange', `false`), showCloseButton: get('showCloseButton', `false`), position: get('position', `'bottom'`), message: get('message', `c8oPage.translate.instant('shareLinkDisabled')`)}, vars:{}};
		return this.ToastAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ToastAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1606815661513"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1604330825068'}, vars:{}};
		return this.STS1604330825068(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1604330825068 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1606815661486 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606815643143: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606815643143: ended"); resolveP(res)});
		});
	}

	/**
	 * Function createNewForm
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1605185431262(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1605185431262: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1605185431262: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1605185431262: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{creating: get('creating', `null`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1605185431262: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["createNewForm"] = stack["1605185431262"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["ShowAlertCustom"] = stack["1605185450606"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ShowAlertCustom', actionFunction: 'CTS1605185450606'}, vars:{}};
		return this.CTS1605185450606(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["If"] = stack["1605185450609"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `parent.out != false && parent.out.title != ''`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["CustomAction"] = stack["1605185450612"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1605185450612'}, vars:{}};
		return this.CTS1605185450612(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["PostData"] = stack["1605185450615"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: null, RootKey: null, noLoading: get('noLoading', `false`), _use_policy: get('_use_policy', `'merge'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `c8oPage.getTime()`)}, vars:{formulaire: get('formulaire', `[]`), wallpaper: get('wallpaper', `{'link':null, 'enabled': false, 'index': null, 'random': c8oPage.local.random}`), thumbnail: get('thumbnail', `{'enabled': false, 'index': null, 'random': c8oPage.local.random}`), name: get('name', `stack['ShowAlertCustom'].out.title`), descform: get('descform', `''`), namePosition: get('namePosition', `'text-center'`), descformPosition: get('descformPosition', `'text-left'`), creator: get('creator', `parent.out`), pages: get('pages', `[c8oPage.local.createN]`), actions: get('actions', `[]`), c8o_view_type_drafts_form: get('c8o_view_type_drafts_form', `true`)}};
		return this.FullSyncPostAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["GetData"] = stack["1605185450639"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `false`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `parent.out.id`)}, vars:{}};
		return this.FullSyncGetAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["RootPage1"] = stack["1605185450651"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'RootPage1', actionFunction: 'RootPageAction', animate_duration: get('animate_duration', `250`), data: get('data', `{formId: parent.out._id}`), page: get('page', `'C8Oforms.MobileApplication.Application.editorPage'`), animate: get('animate', `'true'`)}, vars:{}};
		return this.RootPageAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] RootPageAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1605185450612 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1605185450606 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1605185431262: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1605185431262: ended"); resolveP(res)});
		});
	}

	/**
	 * Function sharedTapOnActionSubmit
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1586453262123(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1586453262123: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1586453262123: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1586453262123: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{item: get('item', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1586453262123: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["sharedTapOnActionSubmit"] = stack["1586453262123"] = {};
		self.in = {props: props, vars: params};
		
		return Promise.all([
		new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1586453559548"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `params.item.type == 'submit'`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["CallSequence"] = stack["1586453338361"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.GetSequences'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{projectFilter: get('projectFilter', `''`), sequenceFilter: get('sequenceFilter', `'^forms_'`)}};
		return this.CallSequenceAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["computeData"] = stack["1586453338364"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'computeData', actionFunction: 'CTS1586453338364'}, vars:{item: get('item', `params.item`)}};
		return this.CTS1586453338364(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1594394456114"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.STS1588860701071(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1586453338364 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["If1"] = stack["1599053087922"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If1', actionFunction: 'IfAction', condition: get('condition', `params.item.type == 'select'`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["CallSequence"] = stack["1599053087925"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CallSequence', actionFunction: 'CallSequenceAction', cacheTtl: get('cacheTtl', `3000`), marker: get('marker', `''`), noLoading: get('noLoading', `false`), cachePolicy: null, threshold: null, requestable: get('requestable', `'C8Oforms.GetSequences'`), timeout: null, noAutoLogin: get('noAutoLogin', `false`)}, vars:{projectFilter: get('projectFilter', `''`), sequenceFilter: get('sequenceFilter', `'^formssource_'`)}};
		return this.CallSequenceAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["computeData"] = stack["1599053087928"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'computeData', actionFunction: 'CTS1599053087928'}, vars:{item: get('item', `params.item`)}};
		return this.CTS1599053087928(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["InvokeSharedAction"] = stack["1599053087934"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1588860701071'}, vars:{}};
		return this.STS1588860701071(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] STS1588860701071 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1599053087928 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CallSequenceAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1586453262123: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1586453262123: ended"); resolveP(res)});
		});
	}

	/**
	 * Function SetRedAndAnimate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1576329825047(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1576329825047*/
		    let first = false;
		    /* if(this.redList['respNameRequired']){
		        this.divResponseName.nativeElement.classList.remove("animated");
                this.divResponseName.nativeElement.classList.remove("shake");
                if(!first){
                    this.divResponseName.nativeElement.scrollIntoView({block: "center", inline: "nearest", behavior:"smooth"});   
                    first = true;
                }
                setTimeout(() => {
                    this.divResponseName.nativeElement.classList.add("animated");
                    this.divResponseName.nativeElement.classList.add("shake");
                    
                }, 50);
		    }*/
		    
		    //this.setRedSpecs(this.all_divtext['_results'], first);
            //this.setRedSpecs(this.all_divimg['_results'], first);
		    let shake = (item: any)=>{
		        item.nativeElement.classList.remove("animate__animated");
                item.nativeElement.classList.remove("animate__shakeX");
                if(!first){
                    item.nativeElement.scrollIntoView({block: "center", inline: "nearest", behavior:"smooth"});   
                    first = true;
                }
                setTimeout(() => {
                    item.nativeElement.classList.add("animate__animated");
                    item.nativeElement.classList.add("animate__shakeX");
                    
                }, 50);
		    }
		    
		    for(let item of page["all_divtext"]['_results']){
		        let find;
		        let findDobleColumn;
		        if(item.nativeElement.id.indexOf("_C8o#") != -1){
		            find = page["redList"][item.nativeElement.id.substring(0,item.nativeElement.id.indexOf("_C8o#"))][item.nativeElement.id.substring(item.nativeElement.id.indexOf("_C8o#")+5)];
		            findDobleColumn = page.local.redListTwoSameColumn[item.nativeElement.id.substring(0,item.nativeElement.id.indexOf("_C8o#"))][item.nativeElement.id.substring(item.nativeElement.id.indexOf("_C8o#")+5)];
		        }
		        else{
		            find = page["redList"][item.nativeElement.id];
		            findDobleColumn = page.local.redListTwoSameColumn[item.nativeElement.id];
		        }
                if(find && findDobleColumn){
                    shake(item);
                }
                else if(find){
                    shake(item);
                }
                else if(findDobleColumn){
                    shake(item);
                }
                
            }
		   
		resolve();
		/*End_c8o_function:CTS1576329825047*/
		});
	}


	/**
	 * Function ShowAlertCustom
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1605185450606(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1605185450606*/
		const alertCtrl: AlertController = page.getInstance(AlertController);
		const translate: TranslateService = page.getInstance(TranslateService);
		const prompt = alertCtrl.create({
		      title: page["translate"].instant("creating_form"),
		      message: page["translate"].instant("enter_name"),
		      cssClass: 'c8o-alert-create-form',
		      inputs: [
		        {
		          name: 'title',
		          placeholder: page["translate"].instant("label_title")
		        },
		      ],
		      buttons: [
		        {
		          text: page["translate"].instant("Cancel"),
		          handler: (data) => {
		            resolve(false);
		          }
		        },
		        {
		          text: page["translate"].instant("Save"),
		          handler: (data) => {
		              page["creating"] = data["title"];
		              resolve({"title": data["title"]});
		          }
		        }
		      ]
		    });
		    prompt.present();
		/*End_c8o_function:CTS1605185450606*/
		});
	}


	/**
	 * Function doGetLinkShare
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606753201534(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606753201534*/
		    let selectedForm = vars.selectedForm;
            let prefix: string = window.location.href.substring(0, window.location.href.indexOf("#/"));
            let url = prefix + "#/viewer/" + selectedForm._id + "/:edit/:i";
            var el = document.createElement('textarea');
            // Set value (string to be copied)
            el.value = url;
            // Set non-editable to avoid focus and move outside of view
            el.setAttribute('readonly', '');
            //el.style = {position: 'absolute', left: '-9999px'};
            document.body.appendChild(el);
            // Select text inside element
            el.select();
            // Copy text to clipboard
            document.execCommand('copy');
            // Remove temporary element
            document.body.removeChild(el);
		resolve();
		/*End_c8o_function:CTS1606753201534*/
		});
	}


	/**
	 * Function addtoFavorites
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1567086142984(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1567086142984: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1567086142984: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1567086142984: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{arrayDocId: get('arrayDocId', `[]`), that: get('that', `null`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1567086142984: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["addtoFavorites"] = stack["1567086142984"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1567086212020"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'InvokeSharedAction', actionFunction: 'STS1567071335977'}, vars:{obj: get('obj', `params['arrayDocId']`)}};
		return this.STS1567071335977(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		let self: any = stack["GetData"] = stack["1567086266205"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `false`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `'C8Oreserved_' + c8oPage.global.user`)}, vars:{}};
		return this.FullSyncGetAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		
		const doLoop = (c8oPage : C8oPageBase, item : any, index : number) : Promise<any> => {
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					c8oPage.c8o.log.trace("[MB] doLoop: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] doLoop: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] doLoop: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		return new Promise((resolve, reject) => {
		let self: any = stack["If"] = stack["1567086212035"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'If', actionFunction: 'IfAction', condition: get('condition', `params.arrayDocId[item] == true`), negate: get('negate', `false`)}, vars:{}};
		return this.IfAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["prepareArgs"] = stack["1567086837762"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'prepareArgs', actionFunction: 'CTS1567086837762'}, vars:{id: get('id', `item`)}};
		return this.CTS1567086837762(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		
		let self: any = stack["ifNotInfavorite"] = stack["1567092363526"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ifNotInfavorite', actionFunction: 'IfElseAction', condition: get('condition', `parent.out`), negate: get('negate', `false`)}, vars:{}};
		return this.IfElseAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["PostData"] = stack["1567086266208"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'PostData', actionFunction: 'FullSyncPostAction', c8oGrp: null, RootKey: null, noLoading: get('noLoading', `false`), _use_policy: get('_use_policy', `'merge'`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `'C8Oreserved_' +c8oPage.global['user']`)}, vars:{favorites: get('favorites', `stack['GetData'].out.favorites`)}};
		return this.FullSyncPostAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["disSelectEntry"] = stack["1567086311384"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'disSelectEntry', actionFunction: 'CTS1567086311384'}, vars:{id: get('id', `item`)}};
		return this.CTS1567086311384(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1567086311384 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		,
		new Promise((resolve, reject) => {
		let self: any = stack["GetData1"] = stack["1579010211822"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'GetData1', actionFunction: 'FullSyncGetAction', __live: null, marker: null, noLoading: get('noLoading', `false`), requestable: get('requestable', `'C8Oforms.c8oforms_fs'`), _id: get('_id', `'C8Oreserved_' +c8oPage.global.user`)}, vars:{}};
		return this.FullSyncGetAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		let self: any = stack["CustomAction"] = stack["1579010211825"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1579010211825'}, vars:{}};
		return this.CTS1579010211825(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1579010211825 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		])
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncPostAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		} else if (res == false) {
		return new Promise((resolve, reject) => {
		let self: any = stack["disSelectEntry"] = stack["1567092392063"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'disSelectEntry', actionFunction: 'CTS1567092392063'}, vars:{id: get('id', `item`)}};
		return this.CTS1567092392063(page, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...params, ...self.in.vars}, event)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1567092392063 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfElseAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] CTS1567086837762 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {if ("c8oSkipError" === error.message) {resolve(false);} else {page.c8o.log.debug("[MB] IfAction : ", error.message);throw new Error(error);}})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}
		
		let self: any = stack["IterateAction"] = stack["1567086212029"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'IterateAction', actionFunction: 'IterateAction', items: get('items', `Object.keys(params['arrayDocId'])`)}, vars:{}};
		return this.IterateAction(page, self.in.props, {...stack["root"].in, ...self.in.vars}, doLoop)
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] IterateAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] FullSyncGetAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {page.c8o.log.debug("[MB] STS1567071335977 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1567086142984: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1567086142984: ended"); resolveP(res)});
		});
	}

	/**
	 * Function defineSettingsAndPage
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604669979390(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604669979390*/
		    //define ddoc names
		    const ddocPublished = "published_formsV2";
		    const ddocDrafts = "formsV2";
		    //define settings
		    page.global.settings = props.parent.out;
		    // get value of navparams published
		    let navParamsPublished = page["navParams"].get('published');
		    if(navParamsPublished != undefined && navParamsPublished != ":published"){
		        let bool = navParamsPublished == true || navParamsPublished == "true";
                page.local.published = ((page.global.settings.editing_rights != undefined && page.global.settings.editing_rights == "true") || page.global.settings.editing_rights == undefined) ? bool : true;
            }
            else{
                let bool = props.parent.out["published_First"] == true || props.parent.out["published_First"] == "true";
                page.local.published = ((page.global.settings.editing_rights != undefined && page.global.settings.editing_rights == "true") || page.global.settings.editing_rights == undefined) ? bool : true;
                let url : string = window.location.href;
                page.c8o.log.debug("set new url: \nprevious was: "+url);
                var index;
                if(url.indexOf("selector/:published") != -1){
                    index =  url.indexOf("selector/:published") + 9;
                    url = url.substring(0, index) + page.local.published + url.substring(index+10);
                }
                else if(url.indexOf("selector/%3Apublished") != -1){
                    index =  url.indexOf("selector/%3Apublished") + 9;
                    url = url.substring(0, index) + page.local.published + url.substring(index+12);
                }
                window.location.href = url;
                page.c8o.log.debug("set new url: \nprevious was: "+url +" \nindex is: "+index+ " \nnew url is: "+url);
               
            }
		    //cancel all view lives for this page
		    page.c8o.cancelLive("viewLiveOut");
		    page.c8o.cancelLive("viewLiveFolders");
		    // define ddoc switch type of page
            if(page.local.published == true || page.local.published == "true"){
                page.local["ddoc"] = ddocPublished;
            }
            else{
                if((page.global.settings.editing_rights != undefined && page.global.settings.editing_rights == "true") || page.global.settings.editing_rights == undefined){
                    page.local["ddoc"] = ddocDrafts;
                }
                else{
                    page.local["ddoc"] = ddocPublished;
                }
                
            }
		    if(props.parent.out["language"] == undefined){
		        console.log(props.parent.out);
		        let localLang = navigator.language.substring(0,2);
		        if(!(localLang == "en" || localLang == "fr" || localLang == "es" || localLang == "it")){
		            localLang = "en";
		        }
		        page.c8o.callJson("fs://c8oforms_fs.post", "_id", props.parent.out._id, "language", localLang, "_use_policy", "merge")
		        .then((res)=>{
		            console.log(res);
		            return null;
		        })
		        .fail((e)=>{
		            console.log(e);
		        });
		    }
    		resolve();
		/*End_c8o_function:CTS1604669979390*/
		});
	}


	/**
	 * Function popOverDownloadCsv
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	STS1606730370814(page: C8oPageBase, props, vars, event: any): Promise<any> {
		let c8oPage : C8oPageBase = page;
		let hasStack = props["stack"] != undefined;
		let stack = hasStack ? props["stack"] : {root: {scope: {}, in: {}, out: event}};
		let scope = stack["root"].scope;
		let parent = props["parent"];
		let out = event;
		let self;
		
		let get = function(keyName, keyVal) {
			let val=undefined;
			try {
				val= keyVal === '' ? keyVal : eval('('+ keyVal + ')');
				if (val == undefined) {
					page.c8o.log.trace("[MB] STS1606730370814: key="+ keyName +" value=undefined");
				} else {
					page.c8o.log.trace("[MB] STS1606730370814: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				page.c8o.log.warn("[MB] STS1606730370814: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		let params = { ...{selectedForm: get('selectedForm', `''`), name: get('name', `''`), offset: get('offset', `''`)}, ...vars};
		
		page.c8o.log.debug("[MB] STS1606730370814: started");
		return new Promise((resolveP, rejectP)=>{
		parent = self = stack["popOverDownloadCsv"] = stack["1606730370814"] = {};
		self.in = {props: props, vars: params};
		
		return new Promise((resolve, reject) => {
		let self: any = stack["ModalPage"] = stack["1606730395678"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'ModalPage', actionFunction: 'ModalAction', data: get('data', `{id:params.selectedForm._id, name:params.name, offset:params.offset, version: params.selectedForm.version}`), cssClass: get('cssClass', `'modalCSV'`), blockWhileDisplayed: get('blockWhileDisplayed', `true`), showBackdrop: get('showBackdrop', `true`), page: get('page', `'C8Oforms.MobileApplication.Application.exportCsvPage'`), enableBackdropDismiss: get('enableBackdropDismiss', `true`)}, vars:{}};
		return this.ModalAction(page, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
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
		}, (error: any) => {page.c8o.log.debug("[MB] ModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {page.c8o.log.debug("[MB] STS1606730370814: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {page.c8o.log.debug("[MB] STS1606730370814: ended"); resolveP(res)});
		});
	}

	/**
	 * Function drag
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1592508984333(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1592508984333*/
		    page.c8o.log.debug("dragstart page at index: " + vars.i)
		    event.dataTransfer.setData("__pagec8oformsdrag", "true");
		    event.dataTransfer.setData("index", vars.i);
		    event.dataTransfer.setData("dropEffect", "move");
		    resolve();
		/*End_c8o_function:CTS1592508984333*/
		});
	}


	/**
	 * Function prepareArgs
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1606815263956(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1606815263956*/
        let doc = vars.selectedForm;
		let publicUser = doc.publicUser;
		//let id = doc._id;
		
        let prefix ="control_document_create_user_"
        let makeid= (length) => {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
        let suffix = "" + Date.now();
        let idCOntrolDocument = prefix + makeid(10) + suffix;
        let userName = sha256(doc["_id"]);
        let prefix2: string = window.location.href.substring(0, window.location.href.indexOf("#/"));
        let url = prefix2 + "#/s/" + userName;
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = url;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        //el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
        resolve({"idDoc":idCOntrolDocument, "id":doc["_id"], "rev":doc["_rev"], userName: userName});
		
		/*End_c8o_function:CTS1606815263956*/
		});
	}


	/**
	 * Function concatTranslate
	 *   
	 * 
	 * @param page  , the current page
	 * @param props , the object which holds properties key-value pairs
	 * @param vars  , the object which holds variables key-value pairs
	 * @param event , the current event object
	 */
	CTS1604405047671(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1604405047671*/
		page.c8o.log.debug('[MB] '+ props.actionFunction +': '+ props.actionName);
		let msg = vars.message;
		if(msg && typeof msg === 'object' && msg.constructor === Array && msg.length > 0){
		    let message = "";
		    for(let i=0; i < msg.length;i++){
		        message += page['translate'].instant(msg[i]) + ' ';
		    }
		    resolve(message);
		}else {
		    resolve("Element added");
		}
		/*End_c8o_function:CTS1604405047671*/
		});
	}

    /**
     * Function FullSyncSyncAction
     *   
     * @param page  , the current page
     * @param props , the object which holds properties key-value pairs
     * @param vars  , the object which holds variables key-value pairs
     */
    FullSyncSyncAction(page: C8oPageBase, props, vars) : Promise<any> {
        return new Promise((resolve, reject) => {
            let dir:string = "sync"
            if (props.Direction === "push")  dir = "replicate_push"
            if (props.Direction === "pull")  dir = "replicate_pull"
            let r:string = props.requestable.substring(props.requestable.indexOf('.')+1);
            let v:string = dir;
            let rvm:string = r + '.' + v
            page.getInstance(Platform).ready().then(() => {     // We may need the CBL plugin so wait for platform ready.
                page.c8o.finalizeInit().then(()=>{              // To be sure that FullSync initialized properly on CBL
                    // Is this the first sync on this database ?
                    page.c8o.callJsonObject("fs://" + r + ".get", {
                        docid: "_local/c8o"
                    })
                    .then ((response:any, parameters: any) => {
                        // If this is not a first sync, we do not have to wait for a complete sync before executing
                        // next action, so resolve immediately.
                        page.c8o.log.info("Got a _local/c8o doc ==> Not a first sync, so execute next actions immediately")
                        resolve()
                        return null
                    })
                    .fail((error:any) => {
                        page.c8o.log.info("no _local/c8o doc ==> This is first sync, waiting for full replication before executing next actions...")
                        if (window["cordova"])
                            if (navigator["connection"]["type"] == 'none') {
                                page.c8o.log.error("No network, the app needs the network to initialize at least the first time.")
                                reject("No Network")
                            }
                    })
                    
                    page.c8o.callJsonObject("fs://" + rvm,C8oCafUtils.merge({
                        "continuous": props.Mode == "continuous" ? true:false,
                        "retry": props.Retry == "true" ? true:false,
                        "batch_size": props.BatchSize,
                        "batches_limit": props.BatchesLimit,
                        "heartbeat": props.Mode == "continuous" ? false:10000,
                        "timeout": props.Mode == "continuous" ? 25000:false
                    },vars))
                    .progress((progress: any)=>{
                        page.router.sharedObject.FullSyncSyncAction = {  progress: progress }
                        if(page != undefined && page.didleave == false){
                            page.tick();
                        }
                        return null
                    })
                    .then((response:any, parameters: any) => {
                        // Replication is completed , so mark it as it is.
                        page.c8o.callJsonObject("fs://" + r + ".post", {
                            _id: "_local/c8o",
                            status: "completed",
                            "_use_policy":"override"
                        })
                        .then((resp)=>{
                            return null;
                        })
                        .fail((err)=>{
                            page.c8o.log.error("Failed to override _local/c8o", err); 
                        });
                        resolve(response)
                        return null
                    })
                    .fail((error:any) => {
                        reject(error)
                    })
                    
                })
            })
        });
    }


}
