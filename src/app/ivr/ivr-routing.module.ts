import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BridgeComponent } from './bridge/bridge.component';
import { DnisComponent } from './dnis/dnis.component';
import { DynamicMessagingComponent } from './dynamic-messaging/dynamic-messaging.component';
import { ExitToMapComponent } from './exit-to-map/exit-to-map.component';
import { FlagsAdminComponent } from './flags-admin/flags-admin.component';
import { GetCampaignComponent } from './get-campaign/get-campaign.component';
import { IvrExitRulesComponent } from './ivr-exit-rules/ivr-exit-rules.component';
import { MessageAdministrationComponent } from './message-administration/message-administration.component';
import { OfficeLocatorComponent } from './office-locator/office-locator.component';
import { PayPerViewComponent } from './pay-per-view/pay-per-view.component';
import { TechnicianAdministrationComponent } from './technician-administration/technician-administration.component';

const routes: Routes = [
  {path:'bridge',component : BridgeComponent},
  {path:'dynamic-messaging',component : DynamicMessagingComponent},
  {path:'dnis',component : DnisComponent},
  {path:'exit-to-map',component : ExitToMapComponent},
  {path:'flags-admin',component : FlagsAdminComponent},
  {path:'get-campaign',component : GetCampaignComponent},
  {path:'ivr-exit-rules',component : IvrExitRulesComponent},
  {path:'message-admin',component : MessageAdministrationComponent},
  {path:'office-locator',component : OfficeLocatorComponent},
  {path:'pay-per-view',component : PayPerViewComponent},
  {path:'tech-admin',component : TechnicianAdministrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IvrRoutingModule { }
