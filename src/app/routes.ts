import { Routes } from '@angular/router';

import {
    HomeComponent,
    MembersListComponent,
    MemberDetailsComponent,
    CreateMemberComponent,
    MemberRouteActivator,
    MemberListResolver,
    CreateBeneficiaryComponent
} from './members/index'

import { Error404Component } from './errors/404.component';
export const appRoutes:Routes = [
    { path: 'members/create', component: CreateMemberComponent, canDeactivate: ['canDeactivateCreateMember'] },
    { path: 'home', component: HomeComponent},
    { path: 'members', component: MembersListComponent, resolve: {members:MemberListResolver} },
    { path: 'members/:id', component: MemberDetailsComponent, canActivate: [MemberRouteActivator] },
    { path: 'members/beneficiary/new', component: CreateBeneficiaryComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    { path: 'user', loadChildren: '/Users/tshepang/Documents/Angular/ng-membership/src/app/members/user/user.module#UserModule'},
   
]
