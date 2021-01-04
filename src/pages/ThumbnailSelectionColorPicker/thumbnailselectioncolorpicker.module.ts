import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { ColorPickerModule } from 'ngx-color-picker';

import { ThumbnailSelectionColorPicker } from "./thumbnailselectioncolorpicker";


@NgModule({
  declarations: [
	ThumbnailSelectionColorPicker
  ],
  imports: [
	ColorPickerModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(ThumbnailSelectionColorPicker)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ThumbnailSelectionColorPickerModule {}