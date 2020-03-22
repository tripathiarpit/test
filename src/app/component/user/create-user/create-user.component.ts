import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  pageTitle: string;
  personalInfoFormGroup: FormGroup;
  personalAddressFormGroup: FormGroup;

  countryList: [];
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.pageTitle = 'Create New User';
    this.personalInfoFormGroup = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.personalAddressFormGroup = this._formBuilder.group({
      address1: ['', Validators.required],
      address2: [''],
      phone: ['', Validators.required],
      city: ['' , Validators.required],
      state: ['' , Validators.required],
      email: ['' , [Validators.required, Validators.email]],
      pin: ['' , Validators.required],
      mobile: [''],
    });
  }
}
