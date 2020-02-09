import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// containers
import { HomeComponent } from './modules/public/containers/home/home.component';
import { CiabComponent } from './modules/public/containers/ciab/ciab.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ciab', component: CiabComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
