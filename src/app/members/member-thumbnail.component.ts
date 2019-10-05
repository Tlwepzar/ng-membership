import { Component, Input} from '@angular/core'
import { IMember } from './shared/index'

@Component({
    selector: 'member-thumbnail',
    template: `
    <div [routerLink]="['/members', member.id]" class="well hoverwell thumbnail">
    <h2> {{member?.name}} {{member?.surname}} </h2>
    <div><strong>Membership Number:</strong> {{member?.memberNo}}</div>
    <div><strong>Joined Date:</strong> {{member?.date | date}} </div>
    <h5 [ngStyle]="getMembershipStatus()"><strong>Membership Status: </strong>{{member?.status}}</h5>
    <div [hidden]="!member?.location?.address">
        <span><strong>Location:</strong> {{member?.location?.address}}</span>
        <span class="pad-left"> {{member?.location?.city}}, {{member?.location?.country}}, {{member?.location?.zipCode}} </span>
    </div>
    <div *ngIf="member?.onlineUrl"><strong>
        Online URL:</strong> {{member?.onlineUrl}}
    </div>
</div>`,
styles: [`
.thumbnail { height: 220px; }
.well div { color: grey; }
`]
})
export class MemberThumbnailComponent {
    @Input() member:IMember;
    getMembershipStatus():any {
        if (this.member && this.member.status === 'active')
            return { color: 'rgb(49, 155, 58)', 'font-weight': 'bold'}
        else if (this.member && this.member.status === 'Inactive')
            return { color: 'rgb(214, 21, 21)', 'font-weight': 'bold'} 
        else if (this.member && this.member.status === 'processing')
            return { color: 'rgb(235, 117, 6)', 'font-weight': 'bold'} 
        return{}
    }
}
