import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMember, restrictedWords, IBeneficiary  } from '../shared/index';

@Component({
    selector: 'create-session',
    templateUrl: 'create-session.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder {color:#999}
    .error ::-moz-placeholder {color:#999}
    .error :-moz-placeholder {color:#999}
    .error :-ms-input-placeholder {color:#999}
    #cancel {margin-left: 220px;}
    `
    ]
})

export class CreateBeneficiaryComponent implements OnInit {
    constructor() { }

    @Output() saveNewBeneficiary = new EventEmitter()
    @Output() cancelAddBeneficiary = new EventEmitter()

    newBeneficiaryForm:FormGroup
    name: FormControl
    surname: FormControl
    identityNo: FormControl
    relationship: FormControl

    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.surname = new FormControl('', [Validators.required, Validators.maxLength(20), restrictedWords(['father', 'mother'])])
        this.identityNo = new FormControl('', Validators.required)
        this.relationship  = new FormControl('', Validators.required)

        this.newBeneficiaryForm = new FormGroup({
            name: this.name,
            surname: this.surname,
            identityNo: this.identityNo,
            relationship: this.relationship,
        })
    }

    saveBeneficiary(formValues){
        let beneficiary: IBeneficiary = {
            id: undefined,
            name: formValues.name,
            surname: formValues.name,
            identityNo: +formValues.duration,
            relationship: formValues.relationship,
        }

        this.saveNewBeneficiary.emit(beneficiary)
        console.log(beneficiary);
    }

    cancel(){
        this.cancelAddBeneficiary.emit()
    }
}