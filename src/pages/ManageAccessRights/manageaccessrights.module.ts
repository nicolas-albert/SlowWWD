import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';

import { ManageAccessRights } from "./manageaccessrights";


@NgModule({
  declarations: [
	ManageAccessRights
  ],
  imports: [
  	TranslateModule.forChild(),
	IonicPageModule.forChild(ManageAccessRights)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ManageAccessRightsModule {}