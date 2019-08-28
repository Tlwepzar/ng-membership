import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { MemberService } from './shared/member.service';
import { map } from 'rxjs/operators'

@Injectable()

export class MemberListResolver implements Resolve<any> {
    constructor(private memberService:MemberService){
        
    }
    resolve() {
        return this.memberService.getMembers().pipe(map(members => members))
    }
}