import * as events from 'events';
import { Subject } from 'rxjs/Rx';
import { UserService } from "./user.service";
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  users: any = [];
  eventEmit : Subject<events> =  new Subject();



  constructor(private _serviceUser: UserService) {}
  ngOnInit() {
    this._serviceUser.getUsers().then(res => {
      console.log(res);
    });

    this._serviceUser
      .getUsersPromiseRace()
      .then(val => console.log(val))
      .catch(error => {
        console.log("error", error);
      });

    this._serviceUser
      .getUsersPromiseAll()
      .then(val => console.log('****all****',val))
      .catch(error => {
        console.log("error", error);
      });
    this._serviceUser
    .getFromPromise()
    .subscribe(res => {
      console.log(res);
    });
    this._serviceUser
    .getUserFromPromise()
    .subscribe(res => {
      console.log("==>",res);
    });
    /**
     * From Observable
     */
    this._serviceUser.getUserObservable()
    .subscribe(res => {
      console.log("observable==>",res);
    });
    
    /**
     * example of subject Observable
     */
    this.eventEmit.subscribe(res=> console.log(res))

  }
}
