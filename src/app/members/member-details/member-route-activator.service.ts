import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core'
import { MemberService } from '../shared/member.service'

@Injectable()
export class MemberRouteActivator implements CanActivate {
    constructor(private memberService: MemberService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const memberExists = !!this.memberService.getMember(+route.params['id'])

        if (!memberExists)
            this.router.navigate(['/404'])
        return memberExists
    }
}
