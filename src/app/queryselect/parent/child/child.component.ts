import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ChildComponent   {
  @Input() val: number;
}
