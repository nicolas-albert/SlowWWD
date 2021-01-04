import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { TooltipsModule } from 'ionic-tooltips';

import { PreviewMultiple } from "./previewmultiple";


@NgModule({
  declarations: [
	PreviewMultiple
  ],
  imports: [
	TooltipsModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(PreviewMultiple)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class PreviewMultipleModule {}