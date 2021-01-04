import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { sharingPage } from "./sharingpage";


@NgModule({
  declarations: [
	sharingPage
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(sharingPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class sharingPageModule {}