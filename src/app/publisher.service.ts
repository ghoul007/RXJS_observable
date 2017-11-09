import { SubjectSubscriber } from "rxjs/Subject";

import { Observable, Subject } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/filter";

@Injectable()
export class PublisherService {
  private publisherSubscriber: Subject<any> = new Subject();
  element: Observable<any>;

  constructor() {
    this.element = this.publisherSubscriber.asObservable();
  }

  publisher(channel, e) {
    this.publisherSubscriber.next({ channel: channel, event: e });
  }

  subscribe(channel, e: ((value: any) => void)) {
    console.log("this.element", this.element);
    return this.element
      .filter(emission => emission.channel === channel)
      .map(emission => emission.event)
      .subscribe( f => {
        console.log("channel", e, f);
      });
  }
}
