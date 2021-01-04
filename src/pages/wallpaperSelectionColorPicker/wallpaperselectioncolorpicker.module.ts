import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { ColorPickerModule } from 'ngx-color-picker';

import { wallpaperSelectionColorPicker } from "./wallpaperselectioncolorpicker";


@NgModule({
  declarations: [
	wallpaperSelectionColorPicker
  ],
  imports: [
	ColorPickerModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(wallpaperSelectionColorPicker)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class wallpaperSelectionColorPickerModule {}