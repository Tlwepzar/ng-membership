import { Component } from '@angular/core'
import { AuthService } from '../members/user/auth.service';
import { IBeneficiary, MemberService } from '../members';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size 15px; }
    img { height: 50px; }
    #searchForm {margin-right: 50px;}
    #searchButton {margin-left: 20px;}
    @media (max-width:1200px) {#searchForm {displya:none}}
    li > a.active { color: rgb(0, 0, 0); }
    `
    ]
})
export class NavBarComponent {
    searchTerm: string = "";
    foundBeneficiaries: IBeneficiary[];
     
    constructor(public auth:AuthService, private memberService:MemberService){
        
    }

    searchBeneficiaries(searchTerm){
        this.memberService.searchBeneficiaries(searchTerm).subscribe(beneficiaries => {
            this.foundBeneficiaries = beneficiaries;
            console.log(this.foundBeneficiaries);
        })
    }
}