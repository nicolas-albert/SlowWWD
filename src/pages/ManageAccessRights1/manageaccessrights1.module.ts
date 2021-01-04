import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { TagInputModule } from 'ngx-chips';

import { ManageAccessRights1 } from "./manageaccessrights1";


@NgModule({
  declarations: [
	ManageAccessRights1
  ],
  imports: [
	TagInputModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(ManageAccessRights1)
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ManageAccessRights1Module {}