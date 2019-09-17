import { Component, OnInit} from '@angular/core';
import { MemberService } from './shared/member.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IMember } from './shared/index';

declare let toastr

@Component({
    template: `
    <div>
        <h1>Primary Members</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let member of members" class="col-md-6">
                <member-thumbnail (click)="handleThumbnailClick(member.name)" [member]="member"></member-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class MembersListComponent implements OnInit {
    members:IMember

    constructor(private memberService: MemberService, private toastr: ToastrService, private route:ActivatedRoute){
        
    }

    ngOnInit(){
        this.members = this.route.snapshot.data['members']
    }

    handleThumbnailClick(members: string){
        this.toastr.success(members)
    }
}
