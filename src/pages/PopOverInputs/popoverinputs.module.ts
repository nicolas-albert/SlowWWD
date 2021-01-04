import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { PopOverInputs } from "./popoverinputs";


@NgModule({
  declarations: [
	PopOverInputs
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(PopOverInputs)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class PopOverInputsModule {}