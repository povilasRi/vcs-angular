import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [AuthRoutingModule, CommonModule, FormsModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [AuthService],
})
export class AuthModule {}
