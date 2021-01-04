import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { ColorPickerModule } from 'ngx-color-picker';

import { colorPage } from "./colorpage";


@NgModule({
  declarations: [
	colorPage
  ],
  imports: [
	ColorPickerModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(colorPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class colorPageModule {}