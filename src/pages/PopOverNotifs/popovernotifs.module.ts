import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { PopOverNotifs } from "./popovernotifs";


@NgModule({
  declarations: [
	PopOverNotifs
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(PopOverNotifs)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class PopOverNotifsModule {}