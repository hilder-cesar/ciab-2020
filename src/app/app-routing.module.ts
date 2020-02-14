import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// containers
import { HomeComponent } from './modules/public/containers/home/home.component';
import { CiabComponent } from './modules/public/containers/ciab/ciab.component';
import { CongressoComponent } from './modules/public/containers/congresso/congresso.component';
import { ExposicaoComponent } from './modules/public/containers/exposicao/exposicao.component';
import { FintechComponent } from './modules/public/containers/fintech/fintech.component';
import { InformationsComponent } from './modules/public/containers/informations/informations.component';
import { PublicationsComponent } from './modules/public/containers/publications/publications.component';
import { PressComponent } from './modules/public/containers/press/press.component';
import { SponsorExhibitComponent } from './modules/public/containers/sponsor-exhibit/sponsor-exhibit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ciab', component: CiabComponent },
  { path: 'congresso', component: CongressoComponent },
  { path: 'exposicao', component: ExposicaoComponent },
  { path: 'fintech', component: FintechComponent },
  { path: 'informacoes', component: InformationsComponent },
  { path: 'publicacoes', component: PublicationsComponent },
  { path: 'imprensa', component: PressComponent },
  { path: 'patrocinar-expor', component: SponsorExhibitComponent },
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
