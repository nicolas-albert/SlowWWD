import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { modalActions } from "./modalactions";


@NgModule({
  declarations: [
	modalActions
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(modalActions)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class modalActionsModule {}