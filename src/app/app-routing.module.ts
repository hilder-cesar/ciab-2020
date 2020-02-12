import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// containers
import { HomeComponent } from './modules/public/containers/home/home.component';
import { CiabComponent } from './modules/public/containers/ciab/ciab.component';
import { CongressoComponent } from './modules/public/containers/congresso/congresso.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ciab', component: CiabComponent },
  { path: 'congresso', component: CongressoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

const routerOptions: ExtraOptions = {
  scrollOffset: () => {
    return window.innerWidth < 1200 ? [0, 78] : [0, 124];
  }
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
