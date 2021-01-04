import { NgModule } 			from '@angular/core';
import { TranslateModule } 		from '@ngx-translate/core';
import { IonicPageModule } 		from 'ionic-angular';
import { Chooser } from '@ionic-native/chooser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Camera } from '@ionic-native/camera';
import { FormsModule } from '@angular/forms';
import { TooltipsModule } from 'ionic-tooltips';
import { SignatureModule } from '../../components/SignatureComponent/SignatureModule';
import { File } from '@ionic-native/file';

import { editorPage } from "./editorpage";


@NgModule({
  declarations: [
	editorPage
  ],
  imports: [
	EditorModule,
	TooltipsModule,
	SignatureModule,

  	TranslateModule.forChild(),
	IonicPageModule.forChild(editorPage)
  ],
  entryComponents: [
  ],
  providers: [
	Chooser,
	Camera,
	File,

  ]
})
export class editorPageModule {}