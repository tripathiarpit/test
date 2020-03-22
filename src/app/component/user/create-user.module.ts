import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateUserComponent} from './create-user/create-user.component';
import {CustomMaterialModule} from '../../module/custom-material/custom-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageTitleModule} from '../page-title/page-title.module';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
      CustomMaterialModule,
      FormsModule,
      ReactiveFormsModule,
    PageTitleModule,

  ]
})
export class CreateUserModule { }
