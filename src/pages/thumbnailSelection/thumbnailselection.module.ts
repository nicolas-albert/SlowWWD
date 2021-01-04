import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { File } from '@ionic-native/file';

import { thumbnailSelection } from "./thumbnailselection";


@NgModule({
  declarations: [
	thumbnailSelection
  ],
  imports: [
	SuperTabsModule.forRoot(),

  	TranslateModule.forChild(),
	IonicPageModule.forChild(thumbnailSelection)
  ],
  entryComponents: [
  ],
  providers: [
	File,

  ]
})
export class thumbnailSelectionModule {}