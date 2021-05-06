import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EmployeeModel } from "src/app/shared/models/employee.models";
import { Validation } from "src/app/util/Validation";

@Component({
    selector: 'update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.sass']
})

export class UpdateComponent {

    @Output() submitForm: EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>();
    @ViewChild('content') content: ElementRef | any;
    @Input() msgAlert: string = '';
    @Input() employee_selected: any;
    @Input() mockFunctionEmployee: Array<any> = [];
    form: FormGroup;
    closeResult: string = '';

    constructor(private formBuilder: FormBuilder, private modalService: NgbModal) {
        this.form = this.formBuilder.group({
            id: new FormControl(''),
            name: new FormControl('', [Validators.required]),
            functionEmployee: new FormControl('', [Validators.required]),
            functionEmployeeId: new FormControl('', [Validators.required]),
            client: new FormControl('', [Validators.required]),
            re: new FormControl({value: '', disabled: true})
        });
    }

    update() {

        if (this.form.valid) {
            this.msgAlert = '';
            const employeeList: EmployeeModel = {
                client: this.form.controls.client.value,
                functionEmployee: this.mockFunctionEmployee.find(f => f.id === parseInt(this.form.controls.functionEmployeeId.value)).name,
                functionEmployeeId: this.mockFunctionEmployee.find(f => f.id === parseInt(this.form.controls.functionEmployeeId.value)).id,
                name: this.form.controls.name.value,
                re: this.employee_selected.re,
                id: this.form.controls.id.value
            };
            console.log('update',employeeList)
            this.submitForm.emit(employeeList);
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
                this.msgAlert += `O Campo ${this.getNameForMessage(m)} precisa ser preenchido. \r\n`;
            }
        });
    }

    removeChar(event: any) {
        event.target.value = Validation.removeChar(event.target.value);
    }

    open() {
        this.form.reset();
        this.mountForm();
        this.msgAlert = '';
        let size = 'md';

        this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', size: size, centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //to do
        });
    }

    mountForm() {
        this.form.controls.id.setValue(this.employee_selected.id);
        this.form.controls.name.setValue(this.employee_selected.name);
        this.form.controls.client.setValue(this.employee_selected.client);
        this.form.controls.functionEmployee.setValue(this.employee_selected.functionEmployee);
        this.form.controls.functionEmployeeId.setValue(this.employee_selected.functionEmployeeId);
        this.form.controls.re.setValue(this.employee_selected.re);
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