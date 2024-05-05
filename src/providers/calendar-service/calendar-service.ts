import { Injectable } from '@angular/core';

/*
  Generated class for the CalendarServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalendarServiceProvider {

  tasks = [];

  events = [];

  completed = []

  constructor() {
    console.log('Hello CalendarServiceProvider Provider');
  }

  removeItem(index, type) {
    if (type == "task") {
      this.tasks.splice(index, 1);
    } else {
      this.events.splice(index, 1);
    }
  }

  addItem(item, type) {
    if (type == "task") {
      this.tasks.push(item);
    } else {
      this.events.push(item);
    }
  }

  editItem(item, index, type) {
    if (type == "task") {
      this.tasks[index] = item;
    } else {
      this.events[index] = item;
    }
  }

  completeItem(item, index, type) {
    if (type == "task") {
      let temp = this.tasks.splice(index, 1);
      this.completed.push(temp[0]);
      console.log("Task has been successfully moved.")
    } else {
      let temp = this.events.splice(index, 1);
      this.completed.push(temp[0]);
      console.log("Event has been successfully moved.")
    }
  }
}
