import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { Chooser } from '@ionic-native/chooser';
import { Camera } from '@ionic-native/camera';
import { TooltipsModule } from 'ionic-tooltips';
import { SignatureModule } from '../../components/SignatureComponent/SignatureModule';

import { viewerPage } from "./viewerpage";


@NgModule({
  declarations: [
	viewerPage
  ],
  imports: [
	TooltipsModule,
	SignatureModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(viewerPage)
  ],
  entryComponents: [
  ],
  providers: [
	Chooser,
	Camera,

  ]
})
export class viewerPageModule {}