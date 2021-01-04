import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { popOverPageSelector } from "./popoverpageselector";


@NgModule({
  declarations: [
	popOverPageSelector
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(popOverPageSelector)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class popOverPageSelectorModule {}