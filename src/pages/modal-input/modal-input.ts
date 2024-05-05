import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, AlertController } from 'ionic-angular';
import { CalendarServiceProvider } from '../../providers/calendar-service/calendar-service';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the ModalInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-input',
  templateUrl: 'modal-input.html',
})
export class ModalInputPage {

  private formData: FormGroup;
  public isToggled: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public dataService: CalendarServiceProvider, public platform: Platform, public alertCtrl: AlertController, public localNotification: LocalNotifications ) {
    this.isToggled = false;
  }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      details: new FormControl(),
      location: new FormControl(),
      notification: new FormControl,
      type: new FormControl()
    });

  }
  closeModal() {
    this.viewCtrl.dismiss();
  }

  onSubmit(type) {
    console.log(this.formData.value);
    console.log('Saved click');
    this.dataService.addItem(this.formData.value, type);

    /* Cordova Notification Plugin */

    if (this.isToggled = true) {
      this.localNotification.schedule({
        text: this.formData.value.name + ", " + this.formData.value.details,
        trigger: {at: this.formData.value.startDate},
        led: 'FF0000',
        sound: null,
      });
      console.log("Notification has been successfully set.")
    }
    this.isToggled = false;

    this.viewCtrl.dismiss();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalInputPage');
  }

}
