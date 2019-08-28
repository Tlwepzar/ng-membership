import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { map } from 'rxjs/operators'
import { MemberService } from './shared';

@Injectable()

export class MemberListResolver implements Resolve<any> {
    constructor(private memberService:MemberService){
        
    }
    resolve() {
        return this.memberService.getMembers().pipe(map(members => members))
    }
}