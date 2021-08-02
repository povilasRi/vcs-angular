import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StarshipCrewListComponent } from './starship-crew-list/starship-crew-list.component';
import { StarshipCrewMemberRouteActivatorService } from './starship-crew-member/starship-crew-member-route-activator';
import { StarshipCrewMemberComponent } from './starship-crew-member/starship-crew-member.component';

const routes: Routes = [
  { path: 'crew-member-list', component: StarshipCrewListComponent },
  { path: '', redirectTo: 'crew-member-list', pathMatch: 'full' },
  {
    path: 'crew-member/:id',
    component: StarshipCrewMemberComponent,
    canActivate: [StarshipCrewMemberRouteActivatorService],
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
