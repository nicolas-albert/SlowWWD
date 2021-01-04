import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { loginPage } from "./loginpage";


@NgModule({
  declarations: [
	loginPage
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(loginPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class loginPageModule {}