import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `    
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}} {{event?.surname}}</h2>
    <div>Identity Number: {{event?.identityNo}} </div>
    <div>Joined Date: {{event?.date}} </div>
    <div [hidden]="!event?.location?.address">
        <span> Location: {{event?.location?.address}}</span>
        <span class="pad-left"> {{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
    </div>
    <h2 [ngStyle]="getStartTimeStyle()">{{event?.status}}</h2>
</div>
`,
styles: [`
.thumbnail { min-height: 205px; }
.well div { color: grey; }
`]
})
export class EventThumbnailComponent {
    @Input() event:IEvent;
    getStartTimeStyle():any {
        if (this.event && this.event.status === 'active')
            return { color: '#003300', 'font-weight': 'bold'}
        else if (this.event && this.event.status === 'Inactive')
            return { color: '#FF7B2E', 'font-weight': 'bold'} 
        return{}
    }
}
