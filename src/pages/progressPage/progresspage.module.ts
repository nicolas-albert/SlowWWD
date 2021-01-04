import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { ProgressBarModule } from 'angular-progress-bar';

import { progressPage } from "./progresspage";


@NgModule({
  declarations: [
	progressPage
  ],
  imports: [
	ProgressBarModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(progressPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class progressPageModule {}