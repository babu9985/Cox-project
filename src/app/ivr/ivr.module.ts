import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvrRoutingModule } from './ivr-routing.module';
import {AngularMaterialRouting} from '../angular-material-routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IvrRoutingModule,
    AngularMaterialRouting
   
  ]
})
export class IvrModule { }
