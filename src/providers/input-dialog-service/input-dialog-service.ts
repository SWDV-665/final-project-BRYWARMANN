import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { CalendarServiceProvider } from '../../providers/calendar-service/calendar-service';
import { ModalController } from 'ionic-angular';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: CalendarServiceProvider, public modalCtrl: ModalController) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompt(type) {
    if (type === "task") {
      const modal = this.modalCtrl.create("ModalInputPage");
      modal.present();
    } else {
      const modal = this.modalCtrl.create("ModalInputEventPage");
      modal.present();
    }

  }
/* This isn't quite working  yet 
  showEditPrompt(item, index, type) {
    if (type === "task") {
      const modal = this.modalCtrl.create("ModalInputPage", {data: this.dataService.tasks[index]});
      modal.present();
    }
  } */

}
