import { Component, Input, Output, memberEmitter } from '@angular/core'
import { IMember } from './shared/index'

@Component({
    selector: 'member-thumbnail',
    template: `    
    <div [routerLink]="['/members', member.id]" class="well hoverwell thumbnail">
    <h2>{{member?.name}} {{member?.surname}}</h2>
    <div><strong>Membership Number:</strong> {{member?.memberNo}}</div>
    <div><strong>Joined Date:</strong> {{member?.date | date}} </div>
    <div [hidden]="!member?.location?.address">
        <span><strong>Location:</strong> {{member?.location?.address}}</span>
        <span class="pad-left"> {{member?.location?.city}}, {{member?.location?.country}}</span>
    </div>
    <div *ngIf="member?.onlineUrl"><strong>
        Online URL:</strong> {{member?.onlineUrl}}
    </div>
    <h2 [ngStyle]="getStartTimeStyle()">{{member?.status}}</h2>
</div>
`,
styles: [`
.thumbnail { min-height: 205px; }
.well div { color: grey; }
`]
})
export class MemberThumbnailComponent {
    @Input() member:IMember;
    getStartTimeStyle():any {
        if (this.member && this.member.status === 'active')
            return { color: '#003300', 'font-weight': 'bold'}
        else if (this.member && this.member.status === 'Inactive')
            return { color: '#FF7B2E', 'font-weight': 'bold'} 
        return{}
    }
}
