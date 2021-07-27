import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvrRoutingModule } from './ivr-routing.module';
import { BridgeComponent } from './bridge/bridge.component';
import { DynamicMessagingComponent } from './dynamic-messaging/dynamic-messaging.component';
import { DnisComponent } from './dnis/dnis.component';
import { ExitToMapComponent } from './exit-to-map/exit-to-map.component';
import { FlagsAdminComponent } from './flags-admin/flags-admin.component';
import { GetCampaignComponent } from './get-campaign/get-campaign.component';
import { IvrExitRulesComponent } from './ivr-exit-rules/ivr-exit-rules.component';
import { MessageAdministrationComponent } from './message-administration/message-administration.component';
import { OfficeLocatorComponent } from './office-locator/office-locator.component';
import { PayPerViewComponent } from './pay-per-view/pay-per-view.component';
import { TechnicianAdministrationComponent } from './technician-administration/technician-administration.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [BridgeComponent, DynamicMessagingComponent, DnisComponent, ExitToMapComponent, FlagsAdminComponent, GetCampaignComponent, IvrExitRulesComponent, MessageAdministrationComponent, OfficeLocatorComponent, PayPerViewComponent, TechnicianAdministrationComponent],
  imports: [
    CommonModule,
    IvrRoutingModule,
    MatTableModule
  ]
})
export class IvrModule { }
