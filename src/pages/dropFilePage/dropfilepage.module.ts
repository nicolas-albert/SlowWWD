import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { dropFilePage } from "./dropfilepage";


@NgModule({
  declarations: [
	dropFilePage
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(dropFilePage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class dropFilePageModule {}