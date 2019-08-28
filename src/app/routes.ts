import {Routes} from '@angular/core';

import {
    MembersListComponent,
    MemberDetailsComponent,
    CreateMemberComponent,
    MemberRouteActivator,
    MemberListResolver,
    CreateBeneficiaryComponent
} from './members/index'

import { Error404Component } from './errors/404.component';
export const appRoutes:Routes = [
    { path: 'members/new', component: CreateMemberComponent, canDeactivate: ['canDeactivateCreateMember'] },
    { path: 'members', component: MembersListComponent, resolve: {Members:MemberListResolver} },
    { path: 'members/:id', component: MemberDetailsComponent, canActivate: [MemberRouteActivator] },
    { path: 'members/session/new', component: CreateBeneficiaryComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/members', pathMatch: 'full' },
    { path: 'user', loadChildren: '/Users/tshepang/Documents/VSC_Projects/source/membership-system-ng/src/app/Members/user/user.module#UserModule'},
   
]
