import { Component, OnInit,Input } from '@angular/core';
import { IBeneficiary } from '../shared/index';

@Component({
    selector: 'beneficiary-list',
    templateUrl: './beneficiary-list.component.html',
    styles: [`
    .row { float: left;}
    .col-md-4 { width:auto; margin-left: 10px }
    `]
})

export class BeneficiaryListComponent implements OnInit {
    @Input() beneficiary:IBeneficiary[]
    
    constructor() { }

    ngOnInit() { }
}