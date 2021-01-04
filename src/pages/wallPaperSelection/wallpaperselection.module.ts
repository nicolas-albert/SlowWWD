import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { wallPaperSelection } from "./wallpaperselection";


@NgModule({
  declarations: [
	wallPaperSelection
  ],
  imports: [
	SuperTabsModule.forRoot(),

  	TranslateModule.forChild(),
	IonicPageModule.forChild(wallPaperSelection)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class wallPaperSelectionModule {}