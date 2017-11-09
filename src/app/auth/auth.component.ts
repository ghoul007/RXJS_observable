import { AuthService, logstate } from "../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  loginIn: boolean;
  constructor(private authService: AuthService) {
    authService.auth.subscribe(res => {
      this.loginIn = res === logstate.login;
    });
    // AuthService
  }
  ngOnInit() {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
