import { Component, Inject, OnInit } from '@angular/core';
import { LOGO_URL } from "../global";
@Component({
  selector: "app-test-global",
  templateUrl: "./test-global.component.html",
  styleUrls: ["./test-global.component.css"]
})
export class TestGlobalComponent implements OnInit {
  logoUrl: string;

  constructor(@Inject(LOGO_URL) private logoUrl_) {
    this.logoUrl = logoUrl_;
  }

  ngOnInit() {}
}
