import { Component } from '@angular/core'
import { AuthService } from '../members/user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size 15px;}
    img { height: 50px; }
    #searchForm {margin-right: 100px;}
    #searchButton {margin-left: 20px;}
    @media (max-width:1200px) {#searchForm {displya:none}}
    li > a.active { color: #CCFF00; }
    `
    ]
})
export class NavBarComponent {
    constructor(public auth:AuthService){
        
    }
}