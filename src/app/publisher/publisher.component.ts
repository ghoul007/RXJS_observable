import { ISubscription } from "rxjs/Subscription";
import { SubjectSubscription } from "rxjs/SubjectSubscription";
import { PublisherService } from "../publisher.service";
import { AfterViewInit, Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-publisher",
  templateUrl: "./publisher.component.html",
  styleUrls: ["./publisher.component.css"]
})
export class PublisherComponent implements OnDestroy {
  constructor(private publishService: PublisherService) {}
  private pubSubServiceSubscription_: ISubscription;
  channel = "channel1";
  count: number = 0;

  send() {
    this.publishService.publisher(this.channel, "test2");
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.publishService.subscribe(this.channel, event => ++this.count);
  }

  public ngOnDestroy(): void {
    this.pubSubServiceSubscription_.unsubscribe();
  }
}
