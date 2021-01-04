import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { ThumbnailSelectionTemplates } from "./thumbnailselectiontemplates";


@NgModule({
  declarations: [
	ThumbnailSelectionTemplates
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(ThumbnailSelectionTemplates)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ThumbnailSelectionTemplatesModule {}