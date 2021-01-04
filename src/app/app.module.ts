import { NgModule, ErrorHandler }		                                      from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS }                    from '@angular/common/http';
import { BrowserModule }                                                      from '@angular/platform-browser';
import { BrowserAnimationsModule }                                            from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   								  from '@angular/forms';
import { ServiceWorkerModule }                                                from '@angular/service-worker';

import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig }           from 'ionic-angular';
import { StatusBar }                                                          from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader }                                   from '@ngx-translate/core';
import { TranslateHttpLoader }                                                from '@ngx-translate/http-loader';
import { Chooser } from '@ionic-native/chooser';
import { TagInputModule } from 'ngx-chips';
import { ColorPickerModule } from 'ngx-color-picker';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Camera } from '@ionic-native/camera';
import { QRCodeModule } from 'angularx-qrcode';
import { File } from '@ionic-native/file';


import { C8o, HttpXsrfInterceptor }                                           from "c8osdkangular";
import { C8oRouter } 			                                              from 'c8ocaf';
import { ActionBeans }                                                        from '../services/actionbeans.service';

import { MyApp } 				                                              from './app.component';



/**
 * Deep links to your pages so that the app can rout directly to the page url
 */
export const deepLinkConfig: DeepLinkConfig = {
  links: []
};


/**
 * Customize the ngx-translate loader for assets/i18n
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
	TagInputModule,
	ColorPickerModule,
	EditorModule,
	QRCodeModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
	}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
    IonicModule.forRoot(MyApp, {preloadModules: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
	Chooser,
	Camera,
	File,

    StatusBar,
    C8o,
    C8oRouter,
    ActionBeans,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpXsrfInterceptor,
        multi: true
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}