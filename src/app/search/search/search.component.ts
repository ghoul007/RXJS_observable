import { ApiService } from "../../api.service";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  results: Array<string> = [];
  queryField: FormControl = new FormControl();
  constructor(private apiService_: ApiService) {
    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(query => this.apiService_.search(query))
      .subscribe(result => this.results.push(result));
  }

    public ngOnInit(): void {
    }
}
