import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CalendarServiceProvider } from '../../providers/calendar-service/calendar-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  date = new Date().toLocaleDateString();

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: CalendarServiceProvider, public inputService: InputDialogServiceProvider) {

  }

  loadItem(type) {
    if (type == "task") {
      return this.dataService.tasks;
    } else if (type == "event") {
      return this.dataService.events;
    } else {
      return this.dataService.completed;
    }
  }

  removeItem(item, index, type) {
    console.log("Removing Event/Task");
    const toast = this.toastCtrl.create({
      message: 'Removing Event/Task...',
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index, type);
  }

  addItem(type) {
    console.log("Adding Event/Task");
    this.inputService.showPrompt(type);
  }

  completeItem(item, index, type) {
    console.log("Completing {{type}}");
    const toast = this.toastCtrl.create({
      message: 'Congrats!',
      duration: 3000
    });
    toast.present();
    this.dataService.completeItem(item, index, type);
  }
  
  /* this isn't quite working yet
  editItem(item, index, type) {
    console.log("Editing Event/Task");
    this.inputService.showEditPrompt(item, index, type);
  } */


}
