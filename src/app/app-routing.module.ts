import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CprComponent } from './cpr/cpr.component';
import { IvrComponent } from './ivr/ivr.component';

const routes: Routes = [
  {
    path: '',
    component: IvrComponent,
    loadChildren: () => import('./ivr/ivr.module')
    .then(mod=>mod.IvrModule)
  },
  {
    path: 'IVR',
    component: IvrComponent,
    loadChildren: () => import('./ivr/ivr.module')
    .then(mod=>mod.IvrModule)
  },
  {
    path: 'CPR',
    component: CprComponent,
    loadChildren: () => import('./cpr/cpr.module')
    .then(mod=>mod.CprModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
