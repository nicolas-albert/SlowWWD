import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { ThumbnailSelectionCustom } from "./thumbnailselectioncustom";


@NgModule({
  declarations: [
	ThumbnailSelectionCustom
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(ThumbnailSelectionCustom)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ThumbnailSelectionCustomModule {}