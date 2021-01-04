import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { WallpaperSelectionTemplates } from "./wallpaperselectiontemplates";


@NgModule({
  declarations: [
	WallpaperSelectionTemplates
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(WallpaperSelectionTemplates)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class WallpaperSelectionTemplatesModule {}