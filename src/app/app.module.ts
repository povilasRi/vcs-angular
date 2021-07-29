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

@NgModule({
  declarations: [
    AppComponent,
    StarshipCrewListComponent,
    StarshipCrewMemberComponent,
    HeaderComponent,
    FooterComponent,
    ToastsContainer,
  ],
  imports: [BrowserModule, CommonModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
