import { Component } from '@angular/core';

@Component({
  selector: 'members-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class MembersAppComponent {
  title ='app';
}
