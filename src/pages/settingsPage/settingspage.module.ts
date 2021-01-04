import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { settingsPage } from "./settingspage";


@NgModule({
  declarations: [
	settingsPage
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(settingsPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class settingsPageModule {}