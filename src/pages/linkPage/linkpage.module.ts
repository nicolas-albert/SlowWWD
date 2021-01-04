import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { linkPage } from "./linkpage";


@NgModule({
  declarations: [
	linkPage
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(linkPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class linkPageModule {}