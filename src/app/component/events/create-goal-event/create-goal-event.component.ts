import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-goal-event',
  templateUrl: './create-goal-event.component.html',
  styleUrls: ['./create-goal-event.component.css']
})
export class CreateGoalEventComponent implements OnInit {

  pageTitle: string;
  eventInfoFormGroup: FormGroup;
  eventAddressFormGroup: FormGroup;
  minDate = new Date();
  constructor(private _formBuilder: FormBuilder,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.pageTitle = 'Create New Event';
    this.eventInfoFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      eventType: ['', Validators.required]
    });
    this.eventAddressFormGroup = this._formBuilder.group({
      address1: ['', Validators.required],
      city: ['' , Validators.required],
      pin: ['' , Validators.required],
      sDate: ['', Validators.required],
      eDate: ['', Validators.required],
    }, {validator: this.checkDates});
  }
  checkDates(group: FormGroup) {
    if (group.controls.sDate.value > group.controls.eDate.value) {
      return { notValid: true };
    }
    return { notValid: false };
  }
  chckError() {
    console.log(this.eventAddressFormGroup.controls.sDate.value);
    let xx = 99;
  }
}
