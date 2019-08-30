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
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';
import { AuthService } from './members/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MembersAppComponent,
    MembersListComponent,
    MemberThumbnailComponent,
    MemberDetailsComponent,
    NavBarComponent,
    CreateMemberComponent,
    Error404Component,
    CreateBeneficiaryComponent,
    BeneficiaryListComponent,
    DurationPipe,
  ],
  providers: [
    MemberService, 
    ToastrService, 
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
