import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { NetworkStatus } from "./networkstatus";


@NgModule({
  declarations: [
	NetworkStatus
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(NetworkStatus)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class NetworkStatusModule {}