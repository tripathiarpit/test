import { CustomMaterialModule } from './module/custom-material/custom-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LoaderModule} from './component/loader/loader-module';
import { ClientModule } from './component/events/client.module';
import { CreateUserComponent } from './component/user/create-user/create-user.component';
import {CreateUserModule} from './component/user/create-user.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClientModule,
    CustomMaterialModule,
    LoaderModule,
      CreateUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
