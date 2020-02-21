import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// containers
import { HomeComponent } from './modules/public/containers/home/home.component';
import { CiabComponent } from './modules/public/containers/ciab/ciab.component';
import { CongressComponent } from './modules/public/containers/congress/congress.component';
import { ExposureComponent } from './modules/public/containers/exposure/exposure.component';
import { FintechComponent } from './modules/public/containers/fintech/fintech.component';
import { InformationsComponent } from './modules/public/containers/informations/informations.component';
import { PublicationsComponent } from './modules/public/containers/publications/publications.component';
import { PressComponent } from './modules/public/containers/press/press.component';
import { KeynoteSpeakersComponent } from './modules/public/containers/keynote-speakers/keynote-speakers.component';
import { ScheduleComponent } from './modules/public/containers/schedule/schedule.component';
import { SponsorExhibitComponent } from './modules/public/containers/sponsor-exhibit/sponsor-exhibit.component';
import { SubscriptionComponent } from './modules/public/containers/subscription/subscription.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ciab', component: CiabComponent },
  { path: 'congresso', component: CongressComponent },
  { path: 'exposicao', component: ExposureComponent },
  { path: 'fintech', component: FintechComponent },
  { path: 'informacoes', component: InformationsComponent },
  { path: 'publicacoes', component: PublicationsComponent },
  { path: 'imprensa', component: PressComponent },
  { path: 'patrocinar-expor', component: SponsorExhibitComponent },
  { path: 'keynote-speakers', component: KeynoteSpeakersComponent },
  { path: 'programacao', component: ScheduleComponent },
  { path: 'inscricao', component: SubscriptionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export function scrollOffset(): [number, number] {
  return window.innerWidth < 1200 ? [0, 78] : [0, 124];
}

const routerOptions: ExtraOptions = {
  scrollOffset
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
