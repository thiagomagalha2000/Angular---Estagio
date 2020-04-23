import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyFirstCompnent } from './myfirst.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyThirdComponent } from './my-second/my-third/my-third.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from 'node_modules/@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompnent,
    MySecondComponent,
    MyThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    /*
    MATERIAL DESIGN
    https://material.angular.io/components/button/examples
    */
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }