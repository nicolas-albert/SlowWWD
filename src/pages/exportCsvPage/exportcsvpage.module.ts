import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { exportCsvPage } from "./exportcsvpage";


@NgModule({
  declarations: [
	exportCsvPage
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(exportCsvPage)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class exportCsvPageModule {}