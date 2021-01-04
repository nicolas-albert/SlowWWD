import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { TagInputModule } from 'ngx-chips';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipsModule } from 'ionic-tooltips';
import { File } from '@ionic-native/file';

import { selectorPage } from "./selectorpage";


@NgModule({
  declarations: [
	selectorPage
  ],
  imports: [
	TagInputModule,
	QRCodeModule,
	TooltipsModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(selectorPage)
  ],
  entryComponents: [
  ],
  providers: [
	File,

  ]
})
export class selectorPageModule {}