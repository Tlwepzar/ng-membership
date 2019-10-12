import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  MembersListComponent,
  MemberThumbnailComponent,
  MemberService,
  CreateMemberComponent,
  MemberListResolver,
  MemberDetailsComponent,
  MemberRouteActivator,
  CreateBeneficiaryComponent,
  BeneficiaryListComponent,
  DurationPipe,
} from './members/index'

import { MembersAppComponent } from './members-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { 
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr, 
  SimpleModalComponent, 
  ModalTriggerDirective } from './common/index';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';
import { AuthService } from './members/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './members/home.component';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomeComponent,
    MembersAppComponent,
    MembersListComponent,
    MemberThumbnailComponent,
    MemberDetailsComponent,
    NavBarComponent,
    CreateMemberComponent,
    Error404Component,
    CreateBeneficiaryComponent,
    BeneficiaryListComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
  ],
  providers: [
    MemberService, 
    { provide: TOASTR_TOKEN, useValue: toastr}, 
    { provide: JQ_TOKEN, useValue: jQuery}, 
    MemberRouteActivator,
    AuthService,
    {
    provide: 'canDeactivateCreateMember',
    useValue: checkDirtyState
    },
    MemberListResolver,
],
  bootstrap: [MembersAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateMemberComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this member, do you really want to cancel?')
  return true
}
