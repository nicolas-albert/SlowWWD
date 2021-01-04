import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { TagInputModule } from 'ngx-chips';

import { ConditionalPage } from "./conditionalpage";


@NgModule({
  declarations: [
	ConditionalPage
  ],
  imports: [
	TagInputModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(ConditionalPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ConditionalPageModule {}