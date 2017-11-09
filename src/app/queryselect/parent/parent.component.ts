import { ChildComponent } from "./child/child.component";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) childComponent: QueryList<ChildComponent>;
  list: Array<number> = [];
  lastVal: number;

  constructor(private changeDetection: ChangeDetectorRef) {}

  add() {
    this.list.push(this.list.length);
  }

  remove() {
    this.list.pop();
  }

  shuffle(): void {
    // simple assignment shuffle
    this.list = this.list.sort(() => (4 * Math.random() > 2 ? 1 : -1));
  }

  public ngAfterViewInit(): void {
    this.childComponent.changes.subscribe(res => {
      this.lastVal = (res.last || {}).val;
      this.changeDetection.detectChanges();
    });
  }
}
