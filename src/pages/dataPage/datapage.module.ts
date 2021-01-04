import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { dataPage } from "./datapage";


@NgModule({
  declarations: [
	dataPage
  ],
  imports: [
	ChartsModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(dataPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class dataPageModule {}