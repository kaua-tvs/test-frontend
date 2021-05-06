import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EmployeeModel } from "src/app/shared/models/employee.models";
import { Validation } from "src/app/util/Validation";

@Component({
    selector: 'create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.sass']
})

export class CreateComponent {

    @Output() submitForm: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();
    @ViewChild('content') content: ElementRef | any;
    @Input() msgAlert: string = '';
    @Input() mockFunctionEmployee: Array<any> = [];
    form: FormGroup;
    closeResult = '';

    constructor(private formBuilder: FormBuilder, private modalService: NgbModal) {
        this.form = this.formBuilder.group({
            name: new FormControl('', [Validators.required]),
            functionEmployee: new FormControl('', [Validators.required]),
            client: new FormControl('', [Validators.required]),
            re: new FormControl('', [Validators.required])
        });
    }

    create() {

        if (this.form.valid) {
            this.msgAlert = '';

            const employee: EmployeeModel = {
                client: this.form.controls.client.value,
                functionEmployee: this.mockFunctionEmployee.find(f => f.id === parseInt(this.form.controls.functionEmployee.value)).name,
                functionEmployeeId: this.mockFunctionEmployee.find(f => f.id === parseInt(this.form.controls.functionEmployee.value)).id,
                name: this.form.controls.name.value,
                re: this.form.controls.re.value,
                id: 0
            };
            this.submitForm.emit(employee);
            
        } else {
            this.checkFieldInvalid();
        }
    }

    cleanForm() {
        this.form.reset();
    }

    checkFieldInvalid() {
        ['client', 'functionEmployee', 'name', 're'].map((m: string) => {
            if (!this.form.get(m)?.valid) {
                this.msgAlert += `O Campo ${this.getNameForMessage(m)} precisa ser preenchido. <br/>`;
            }
        });
    }

    removeChar(event: any){
        event.target.value = Validation.removeChar(event.target.value);
    }

    open() {
        this.form.reset();
    
        let size = 'md';

        this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', size: size, centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //to do
        });
    }

    private getNameForMessage(property: string) {
        switch (property) {
            case "client":
                return "Cliente";

            case "functionEmployee":
                return "Cargo";

            case "name":
                return "Nome do Funcionario";

            case "re":
                return "Registro do Empregado";

            default:
                return "";
        }
    }
}