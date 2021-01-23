import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material.module';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { NgAttributeComponent } from './ng-attribute/ng-attribute.component';
import { NgClassAttComponent } from './ng-class-att/ng-class-att.component';
import { NotFoundComponent } from './not-found/not-found.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    NgAttributeComponent,
    NgClassAttComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
