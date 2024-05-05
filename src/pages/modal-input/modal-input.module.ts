import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalInputPage } from './modal-input';

@NgModule({
  declarations: [
    ModalInputPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalInputPage),
  ],
})
export class ModalInputPageModule {}
