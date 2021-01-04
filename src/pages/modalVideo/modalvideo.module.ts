import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { modalVideo } from "./modalvideo";


@NgModule({
  declarations: [
	modalVideo
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(modalVideo)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class modalVideoModule {}