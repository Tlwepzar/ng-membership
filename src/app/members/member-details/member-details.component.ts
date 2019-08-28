import { Component } from '@angular/core'
import {  MemberService} from '../shared/member.service'
import { ActivatedRoute } from '@angular/router'
import { IMember, IBeneficiary } from '../shared/index';

@Component({
    templateUrl: 'member-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .member-image { height: 100px; }
    a {cursor:pointer;}
    `]
})
export class MemberDetailsComponent {
    member: IMember
    addMode:boolean

    constructor (private memberService: MemberService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.member = this.memberService.getMember(+this.route.snapshot.params['id']);
    }

    addBeneficiary() {
        this.addMode = true
    }

    saveNewBeneficiary(beneficiary:IBeneficiary){
        const nextId = Math.max.apply(null, this.member.beneficiary.map(s => s.id));
        beneficiary.id = nextId + 1
        this.member.beneficiary.push(beneficiary)
        this.memberService.updateMember(this.member)
        this.addMode = false
    }

    cancelAddBeneficiary(){
        this.addMode = false
    }
}