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

@IonicPage({priority: 'low', segment: 'path-to-modalactions', defaultHistory: []})
@Component({selector: 'page-modalactions', templateUrl: 'modalactions.html', changeDetection: ChangeDetectionStrategy.Default})
export class modalActions extends C8oPage  {
	
	@ViewChildren("ElseBlock_1599825036551") public all_ElseBlock_1599825036551 : QueryList<any>;
	@ViewChild("ElseBlock_1599825036551") public ElseBlock_1599825036551;


	public events : Events;
	public actionBeans: ActionBeans;
	public static nameStatic: string = "modalActions";
	/*Begin_c8o_PageDeclaration*/
	/*End_c8o_PageDeclaration*/

	constructor(routerProvider : C8oRouter, navParams: NavParams, loadingCtrl: LoadingController, sanitizer: DomSanitizer, ref: ChangeDetectorRef, injector: Injector, menuCtrl: MenuController, public translate: TranslateService){
		super(routerProvider, navParams, loadingCtrl, sanitizer, ref, injector, menuCtrl);
		this.events = this.getInstance(Events);
		this.actionBeans = this.getInstance(ActionBeans);
		
		
		
		/*Begin_c8o_PageConstructor*/
		
		//{tree: this.local.tree, item: params1586443759128.item}
		
		//this.local.tree = [{"name":"lib_Actions_C8Oforms","comment":"<div class=\"en\">Default actions provided with <i>Convertigo Form Builder</i></div>\r\n<div class=\"fr\">Actions par défaut fournies avec <i>Convertigo Form Builder</i></div>\r\n<div class=\"es\">Acciones predeterminadas proporcionadas con <i>Convertigo Form Builder</i></div>\r\n<div class=\"it\">Azioni predefinite fornite con <i>Convertigo Form Builder</i></div>","sequences":[{"name":"forms_insert_response_db","comment":"Save responses to an external Database (demo).","variables":{"name":["forms_db_type","forms_db_name","forms_db_destination"],"comment":["Database type. Supports \"fs\" or \"mysql\"","Database name created to store form responses","Can be used to override SQL symbols"],"type":["new variable","new variable","new variable"]}},{"name":"forms_notify_response_by_mail","comment":"<div class=\"en\">Sends a <b>mail</b> when a new response is submitted</div>\r\n<div class=\"fr\">Envoie un <b>e-mail</b> lorsqu'une nouvelle réponse est soumise</div>\r\n<div class=\"es\">Envía un <b>correo</b> cuando se envía una nueva respuesta</div>\r\n<div class=\"it\">Invia una <b>mail</b> quando viene inviata una nuova risposta</div>","variables":{"name":["forms_mail_recipients_to","forms_mail_recipients_cc","forms_mail_recipients_bcc","forms_mail_notify_sender","forms_mail_notify_owner","forms_mail_sender","forms_mail_body","forms_mail_subject","forms_mail_logo","forms_mail_body_title"],"comment":["<div class=\"en\">\"To\" Mail recipients separated by comma or semicolon. || <i>(mandatory)</i></div>\r\n<div class=\"fr\">\"À\" Destinataires du courrier séparés par une virgule ou un point-virgule. || <i>(obligatoire)</i></div>\r\n<div class=\"es\">\"To\" Destinatarios de correo separados por coma o punto y coma. || <i>(obligatorio)</i></div>\r\n<div class=\"it\">\"To\" Destinatari di posta separati da virgola o punto e virgola. || <i>(obbligatorio)</i></div>","<div class=\"en\">\"Cc\" Mail recipients separated by comma or semicolon. || <i>(optional)</i></div>\r\n<div class=\"fr\">\"Cc\" Destinataires du courrier séparés par une virgule ou un point-virgule. || <i>(optionnel)</i></div>\r\n<div class=\"es\">\"Cc\" Destinatarios de correo separados por coma o punto y coma. || <i>(opcional)</i></div>\r\n<div class=\"it\">\"Cc\" Destinatari di posta separati da virgola o punto e virgola. || <i>(facoltativo)</i></div>","<div class=\"en\">\"Bcc\" Mail recipients separated by comma or semicolon. || <i>(optional)</i></div>\r\n<div class=\"fr\">\"Bcc\" Destinataires du courrier séparés par une virgule ou un point-virgule. || <i>(optionnel)</i></div>\r\n<div class=\"es\">\"Bcc\" Destinatarios de correo separados por coma o punto y coma. || <i>(opcional)</i></div>\r\n<div class=\"it\">\"Bcc\" Destinatari di posta separati da virgola o punto e virgola. || <i>(facoltativo)</i></div>","<div class=\"en\">This setting allows you to activate the notification to the person who replied to the form. || <i>(optional)</i> <b> boolean</b> (<b>true</b> or <b>false</b>). <small>Default value is <b>false</b></small></div>\r\n<div class=\"fr\">Ce paramétre vous permets d'activer la notification à la personne qui a répondu au formulaire. || <i>(optionnel)</i> <b> booléen</b> (<b>true</b> ou <b>false</b>). <small>La valeur par défaut est <b>false</b></small></div>\r\n<div class=\"es\">Esta configuración le permite activar la notificación a la persona que respondió al formulario. || <i>(opcional)</i> <b> booleano</b> (<b>true</b> o <b>false</b>). <small>El valor predeterminado es <b>false</b></small></div>\r\n<div class=\"it\">Questa impostazione ti consente di attivare la notifica alla persona che ha risposto al modulo. || <i>(facoltativo)</i> <b> booleano</b> (<b>true</b> o <b>false</b>). <small>Il valore predefinito è <b>false</b></small></div>","<div class=\"en\">This setting allows you to enable notification to the owner of the form. || <i>(optional)</i> <b> boolean</b> (<b>true</b> or <b>false</b>). <small>Default value is <b>false</b></small></div>\r\n<div class=\"fr\">Ce paramétre vous permets d'activer la notification au propriétaire du formulaire. || <i>(optionnel)</i> <b> booléen</b> (<b>true</b> ou <b>false</b>). <small>La valeur par défaut est <b>false</b></small></div>\r\n<div class=\"es\">Esta configuración le permite habilitar la notificación al propietario del formulario. || <i>(opcional)</i> <b> booleano</b> (<b>true</b> o <b>false</b>). <small>El valor predeterminado es <b>false</b></small></div>\r\n<div class=\"it\">Questa impostazione consente di abilitare la notifica al proprietario del modulo. || <i>(facoltativo)</i> <b> booleano</b> (<b>true</b> o <b>false</b>). <small>Il valore predefinito è <b>false</b></small></div>","<div class=\"en\">Email of sender for anonymous forms. If empty, we try to retrieve mail address from C8oForms account. || <i>(optional)</i></div>\r\n<div class=\"fr\">Courriel de l'expéditeur pour les formulaires anonymes. S'il est vide, nous essayons de récupérer l'adresse e-mail du compte C8oForms. || <i>(optionnel)</i></div>\r\n<div class=\"es\">Correo electrónico del remitente para formularios anónimos. Si está vacío, intentamos recuperar la dirección de correo de la cuenta de C8oForms. || <i>(opcional)</i></div>\r\n<div class=\"it\">Email del mittente per moduli anonimi. Se vuoto, proviamo a recuperare l'indirizzo e-mail dall'account C8oForms. || <i>(facoltativo)</i></div>","<div class=\"en\">Email body (short string). || <i>(optional)</i></div>\r\n<div class=\"fr\">Corps de l'e-mail (chaîne courte). || <i>(optionnel)</i></div>\r\n<div class=\"es\">Cuerpo del correo electrónico (cadena corta). || <i>(opcional)</i></div>\r\n<div class=\"it\">Corpo dell'email (stringa breve). || <i>(facoltativo)</i></div>","<div class=\"en\">Email subject (short string). || <i>(optional)</i></div>\r\n<div class=\"fr\">Objet de l'e-mail (chaîne courte). || <i>(optionnel)</i></div>\r\n<div class=\"es\">Asunto del correo electrónico (cadena corta). || <i>(opcional)</i></div>\r\n<div class=\"it\">Oggetto dell'email (stringa breve). || <i>(facoltativo)</i></div>","<div class=\"en\">URL to a logo. || <i>(optional)</i></div>\r\n<div class=\"fr\">URL vers un logo. || <i>(optionnel)</i></div>\r\n<div class=\"es\">URL a un logotipo. || <i>(opcional)</i></div>\r\n<div class=\"it\">OURL di un logo. || <i>(facoltativo)</i> </div>","<div class=\"en\">Mail body title (short string). || <i>(optional)</i></div>\r\n<div class=\"fr\">Titre du corps du message (chaîne courte). || <i>(optionnel)</i></div>\r\n<div class=\"es\">Título del cuerpo del correo (cadena corta). || <i>(opcional)</i></div>\r\n<div class=\"it\">Titolo del corpo della posta (stringa corta). || <i>(facoltativo)</i></div>"],"type":["new variable","new variable","new variable","new variable","new variable","new variable","new variable","new variable","new variable","new variable"]}},{"name":"forms_notify_response_by_mail1","comment":"<div class=\"en\">Sends a <b>mail</b> when a new response is submitted</div>\r\n<div class=\"fr\">Envoie un <b>e-mail</b> lorsqu'une nouvelle réponse est soumise</div>\r\n<div class=\"es\">Envía un <b>correo</b> cuando se envía una nueva respuesta</div>\r\n<div class=\"it\">Invia una <b>mail</b> quando viene inviata una nuova risposta</div>","variables":{"name":["forms_mail_recipients_to","forms_mail_recipients_cc","forms_mail_recipients_bcc","forms_mail_notify_sender","forms_mail_notify_owner","forms_mail_sender","forms_mail_body","forms_mail_subject","forms_mail_logo","forms_mail_body_title"],"comment":["<div class=\"en\">\"To\" Mail recipients separated by comma or semicolon. || <i>(mandatory)</i></div>\r\n<div class=\"fr\">\"À\" Destinataires du courrier séparés par une virgule ou un point-virgule. || <i>(obligatoire)</i></div>\r\n<div class=\"es\">\"To\" Destinatarios de correo separados por coma o punto y coma. || <i>(obligatorio)</i></div>\r\n<div class=\"it\">\"To\" Destinatari di posta separati da virgola o punto e virgola. || <i>(obbligatorio)</i></div>","<div class=\"en\">\"Cc\" Mail recipients separated by comma or semicolon. || <i>(optional)</i></div>\r\n<div class=\"fr\">\"Cc\" Destinataires du courrier séparés par une virgule ou un point-virgule. || <i>(optionnel)</i></div>\r\n<div class=\"es\">\"Cc\" Destinatarios de correo separados por coma o punto y coma. || <i>(opcional)</i></div>\r\n<div class=\"it\">\"Cc\" Destinatari di posta separati da virgola o punto e virgola. || <i>(facoltativo)</i></div>","<div class=\"en\">\"Bcc\" Mail recipients separated by comma or semicolon. || <i>(optional)</i></div>\r\n<div class=\"fr\">\"Bcc\" Destinataires du courrier séparés par une virgule ou un point-virgule. || <i>(optionnel)</i></div>\r\n<div class=\"es\">\"Bcc\" Destinatarios de correo separados por coma o punto y coma. || <i>(opcional)</i></div>\r\n<div class=\"it\">\"Bcc\" Destinatari di posta separati da virgola o punto e virgola. || <i>(facoltativo)</i></div>","<div class=\"en\">This setting allows you to activate the notification to the person who replied to the form. || <i>(optional)</i> <b> boolean</b> (<b>true</b> or <b>false</b>). <small>Default value is <b>false</b></small></div>\r\n<div class=\"fr\">Ce paramétre vous permets d'activer la notification à la personne qui a répondu au formulaire. || <i>(optionnel)</i> <b> booléen</b> (<b>true</b> ou <b>false</b>). <small>La valeur par défaut est <b>false</b></small></div>\r\n<div class=\"es\">Esta configuración le permite activar la notificación a la persona que respondió al formulario. || <i>(opcional)</i> <b> booleano</b> (<b>true</b> o <b>false</b>). <small>El valor predeterminado es <b>false</b></small></div>\r\n<div class=\"it\">Questa impostazione ti consente di attivare la notifica alla persona che ha risposto al modulo. || <i>(facoltativo)</i> <b> booleano</b> (<b>true</b> o <b>false</b>). <small>Il valore predefinito è <b>false</b></small></div>","<div class=\"en\">This setting allows you to enable notification to the owner of the form. || <i>(optional)</i> <b> boolean</b> (<b>true</b> or <b>false</b>). <small>Default value is <b>false</b></small></div>\r\n<div class=\"fr\">Ce paramétre vous permets d'activer la notification au propriétaire du formulaire. || <i>(optionnel)</i> <b> booléen</b> (<b>true</b> ou <b>false</b>). <small>La valeur par défaut est <b>false</b></small></div>\r\n<div class=\"es\">Esta configuración le permite habilitar la notificación al propietario del formulario. || <i>(opcional)</i> <b> booleano</b> (<b>true</b> o <b>false</b>). <small>El valor predeterminado es <b>false</b></small></div>\r\n<div class=\"it\">Questa impostazione consente di abilitare la notifica al proprietario del modulo. || <i>(facoltativo)</i> <b> booleano</b> (<b>true</b> o <b>false</b>). <small>Il valore predefinito è <b>false</b></small></div>","<div class=\"en\">Email of sender for anonymous forms. If empty, we try to retrieve mail address from C8oForms account. || <i>(optional)</i></div>\r\n<div class=\"fr\">Courriel de l'expéditeur pour les formulaires anonymes. S'il est vide, nous essayons de récupérer l'adresse e-mail du compte C8oForms. || <i>(optionnel)</i></div>\r\n<div class=\"es\">Correo electrónico del remitente para formularios anónimos. Si está vacío, intentamos recuperar la dirección de correo de la cuenta de C8oForms. || <i>(opcional)</i></div>\r\n<div class=\"it\">Email del mittente per moduli anonimi. Se vuoto, proviamo a recuperare l'indirizzo e-mail dall'account C8oForms. || <i>(facoltativo)</i></div>","<div class=\"en\">Email body (short string). || <i>(optional)</i></div>\r\n<div class=\"fr\">Corps de l'e-mail (chaîne courte). || <i>(optionnel)</i></div>\r\n<div class=\"es\">Cuerpo del correo electrónico (cadena corta). || <i>(opcional)</i></div>\r\n<div class=\"it\">Corpo dell'email (stringa breve). || <i>(facoltativo)</i></div>","<div class=\"en\">Email subject (short string). || <i>(optional)</i></div>\r\n<div class=\"fr\">Objet de l'e-mail (chaîne courte). || <i>(optionnel)</i></div>\r\n<div class=\"es\">Asunto del correo electrónico (cadena corta). || <i>(opcional)</i></div>\r\n<div class=\"it\">Oggetto dell'email (stringa breve). || <i>(facoltativo)</i></div>","<div class=\"en\">URL to a logo. || <i>(optional)</i></div>\r\n<div class=\"fr\">URL vers un logo. || <i>(optionnel)</i></div>\r\n<div class=\"es\">URL a un logotipo. || <i>(opcional)</i></div>\r\n<div class=\"it\">OURL di un logo. || <i>(facoltativo)</i> </div>","<div class=\"en\">Mail body title (short string). || <i>(optional)</i></div>\r\n<div class=\"fr\">Titre du corps du message (chaîne courte). || <i>(optionnel)</i></div>\r\n<div class=\"es\">Título del cuerpo del correo (cadena corta). || <i>(opcional)</i></div>\r\n<div class=\"it\">Titolo del corpo della posta (stringa corta). || <i>(facoltativo)</i></div>"],"type":["new variable","new variable","new variable","new variable","new variable","new variable","html","new variable","new variable","new variable"]}}]},{"name":"test","comment":"Convertigo Mobile builder Project","sequences":[{"name":"forms_insert_response_db","comment":"Save responses to an external Database (demo).","variables":{"name":["forms_db_type","forms_db_name","forms_db_destination"],"comment":["Database type. Supports \"fs\" or \"mysql\"","Database name created to store form responses","Can be used to override SQL symbols"],"type":["new variable","new variable","new variable"]}}]}];
		this.local.tree = this.navParams.data["tree"];
		this.local.item = this.navParams.data["item"];
		this.local.index = 0;
		this.local.styleDragOverPAge = null;
		/*End_c8o_PageConstructor*/
		
    }
	
	instance() {
		return this;
	}
	
	/*Begin_c8o_PageFunction*/
	public removeUnderscores(str){
        return str.replace(/_/gi, ' ');
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
	objKeys(elem){
	    return Object.keys(elem);
	}
	/*End_c8o_PageFunction*/
	
	

	/**
	 * Function ATS1599825036572
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1599825036572(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1599825036572: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1599825036572: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1599825036572: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1599825036572: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["CustomAction"] = stack["1599825036572"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CustomAction', actionFunction: 'CTS1599825036572'}, vars:{}};
		return this.CTS1599825036572(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return new Promise((resolve, reject) => {
		let self: any = stack["InvokeSharedAction"] = stack["1599825036575"] = {};
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
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1599825036572 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1599825036572: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1599825036572: ended"); resolveP(res)});
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
	CTS1599825036572(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599825036572*/
		page.local.currentPage = props.stack.root.scope.item.pageTechName;
		page.local.index = props.stack.root.scope.i;
		resolve();
		/*End_c8o_function:CTS1599825036572*/
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
	CTS1600876689647(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1600876689647*/
		    page.local.indexSequence = vars.i;
		    resolve();
		/*End_c8o_function:CTS1600876689647*/
		});
	}


	/**
	 * Function ATS1599830132457
	 *   
	 * 
	 * @param stack , the object which holds actions stack
	 */
	ATS1599830132457(stack): Promise<any> {
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
					c8oPage.c8o.log.trace("[MB] ATS1599830132457: key="+ keyName +" value=undefined");
				} else {
					c8oPage.c8o.log.trace("[MB] ATS1599830132457: key="+ keyName +" value="+ val);
				}
			} catch(e) {
				let sKeyVal = keyVal == null ? "null" : (keyVal == undefined ? "undefined" : keyVal);
				c8oPage.c8o.log.warn("[MB] ATS1599830132457: For "+ keyName +":"+ sKeyVal + ", "+ e.message);
			}
			return val;
		}
		
		parent = stack["root"];
		event = stack["root"].out;
		scope = stack["root"].scope;
		out = event;
		
		this.c8o.log.debug("[MB] ATS1599830132457: started");
		return new Promise((resolveP, rejectP)=>{
		new Promise((resolve, reject) => {
		let self: any = stack["SaveProperties"] = stack["1599830132457"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'SaveProperties', actionFunction: 'CTS1599830132457'}, vars:{}};
		return this.CTS1599830132457(this, {...{stack: stack, parent: parent, out: out}, ...self.in.props}, {...stack["root"].in, ...self.in.vars}, event)
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return new Promise((resolve, reject) => {
		let self: any = stack["CloseModal"] = stack["1599830132460"] = {};
		self.in = {props:{tplVersion: '7.8.0.3', actionName: 'CloseModal', actionFunction: 'CloseModalAction', data: null}, vars:{}};
		return this.actionBeans.CloseModalAction(this, self.in.props, {...stack["root"].in, ...self.in.vars})
		.catch((error:any) => {
		parent = self;
		parent.out = error;
		out = parent.out;
		return Promise.reject(error);
		})
		.then((res:any) => {
		parent = self;
		parent.out = res;
		out = parent.out;
		return Promise.resolve(res);
		}, (error: any) => {this.c8o.log.debug("[MB] CloseModalAction : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		}, (error: any) => {this.c8o.log.debug("[MB] CTS1599830132457 : ", error.message);throw new Error(error);})
		.then((res:any) => {resolve(res)}).catch((error:any) => {reject(error)})
		})
		.catch((error:any) => {this.c8o.log.debug("[MB] ATS1599830132457: An error occured : ",error.message); resolveP(false);})
		.then((res:any) => {this.c8o.log.debug("[MB] ATS1599830132457: ended"); resolveP(res)});
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
	CTS1599830132457(page: C8oPageBase, props, vars, event: any) : Promise<any> {
		return new Promise((resolve, reject) => {
		/*Begin_c8o_function:CTS1599830132457*/
		    try {
    		    const projectName = this.local.tree[this.local.index].name;
                let elemChoosen = this.local.tree[this.local.index].sequences[this.local.indexSequence];
                const sequenceName = elemChoosen.name;
                let va = {};
                for(let el of elemChoosen.variables.name){
                    va[el] = {};
                }
                this.global.elems = {name:projectName+"."+sequenceName, "enabled":true, vars:va};
                console.log(this.global.elems);
		    }
		    catch(e){
		        
		    }
		    
            resolve();
            
		/*End_c8o_function:CTS1599830132457*/
		});
	}

}
