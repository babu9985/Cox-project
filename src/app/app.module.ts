import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialRouting } from './angular-material-routing';
import { IvrComponent } from './ivr/ivr.component';
import { CprComponent } from './cpr/cpr.component';

@NgModule({
  declarations: [
    AppComponent,
    IvrComponent,
    CprComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialRouting,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
