import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarshipCrewListComponent } from './starship-crew-list/starship-crew-list.component';
import { CommonModule } from '@angular/common';
import { StarshipCrewMemberComponent } from './starship-crew-member/starship-crew-member.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastsContainer } from './shared/toast-container.component';
import { TopMenuNavComponent } from './layout/top-menu-nav/top-menu-nav.component';
import { AppRoutingModule } from './routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './login/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    StarshipCrewListComponent,
    StarshipCrewMemberComponent,
    HeaderComponent,
    FooterComponent,
    ToastsContainer,
    TopMenuNavComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
