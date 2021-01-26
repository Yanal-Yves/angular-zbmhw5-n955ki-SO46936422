import { Component } from "@angular/core";
import { Moment } from "moment";
import { CustomMomentDateAdapter } from "./custom-moment-date-adapter";

/** @title Basic datepicker */
@Component({
  selector: "datepicker-overview-example",
  templateUrl: "datepicker-overview-example.html"
})
export class DatepickerOverviewExample {
  public selectedDate = "No date has been selected yet.";
  public timezone = CustomMomentDateAdapter.TIMEZONE;

  public dateChangedHandler(event: any): void {
    const date: Moment = event.target.value;
    this.selectedDate = date.format();
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
