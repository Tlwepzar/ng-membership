import { Component, OnInit,Input } from '@angular/core';
import { IBeneficiary } from '../shared/index';

@Component({
    selector: 'beneficiary-list',
    templateUrl: './beneficiary-list.component.html'
})

export class BeneficiaryListComponent implements OnInit {
    @Input() beneficiary:IBeneficiary[]
    
    constructor() { }

    ngOnInit() { }
}