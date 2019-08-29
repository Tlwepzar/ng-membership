import { Component, Input} from '@angular/core'
import { IMember } from './shared/index'

@Component({
    selector: 'member-thumbnail',
    templateUrl: 'member-thumbnail.component.html',
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
