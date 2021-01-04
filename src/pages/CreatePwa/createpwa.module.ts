import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { CreatePwa } from "./createpwa";


@NgModule({
  declarations: [
	CreatePwa
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(CreatePwa)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class CreatePwaModule {}