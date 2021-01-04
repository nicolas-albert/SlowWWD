import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { resetPasswordPage } from "./resetpasswordpage";


@NgModule({
  declarations: [
	resetPasswordPage
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(resetPasswordPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class resetPasswordPageModule {}