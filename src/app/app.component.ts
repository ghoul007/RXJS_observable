import { UserService } from "./user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  users: any = [];
  constructor(private _serviceUser: UserService) {}
  ngOnInit() {

    this._serviceUser.getUsers().then(res => {
      console.log(res);
    });

    this._serviceUser.getUsersRace().then(
      val => console.log(val)).catch(error => {
        console.log('error', error);
      });
 


  }
}
