import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { wallpaperSelectionCustom } from "./wallpaperselectioncustom";


@NgModule({
  declarations: [
	wallpaperSelectionCustom
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(wallpaperSelectionCustom)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class wallpaperSelectionCustomModule {}