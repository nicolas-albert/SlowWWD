import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { TagInputModule } from 'ngx-chips';

import { labelsPage } from "./labelspage";


@NgModule({
  declarations: [
	labelsPage
  ],
  imports: [
	TagInputModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(labelsPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class labelsPageModule {}