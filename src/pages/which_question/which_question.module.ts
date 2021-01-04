import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { which_question } from "./which_question";


@NgModule({
  declarations: [
	which_question
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(which_question)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class which_questionModule {}