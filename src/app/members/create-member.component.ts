import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MemberService } from './shared';

@Component({
    templateUrl:'create-member.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    button { width:45%; }
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder {color:#999}
    .error ::-moz-placeholder {color:#999}
    .error :-moz-placeholder {color:#999}
    .error :-ms-input-placeholder {color:#999}
    .btn-primary { margin-right:10%; }
    `
    ]

})
export class CreateMemberComponent {
    newMember
    isDirty:boolean = true
    constructor(private router: Router, private memberService:MemberService){

    }

    saveMember(formValues){
        this.memberService.saveMember(formValues)
        console.log(formValues);
        this.isDirty = false
        this.router.navigate(['./members'])
    }

    cancel() {
        this.router.navigate(['./members'])
    }
}