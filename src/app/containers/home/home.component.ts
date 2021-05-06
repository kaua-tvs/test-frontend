import { Component, ElementRef, ViewChild } from "@angular/core";
import { EmployeeModel } from "src/app/shared/models/employee.models";
import { Validation } from "src/app/util/Validation";
import { CreateComponent } from "./modals/create/create.component";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})

export class HomeComponent {
    @ViewChild('create') create: ElementRef | any;
    @ViewChild('update') update: ElementRef | any;

    employee: EmployeeModel| any;
    msgAlertCreate: string = '';
    employeeList: Array<EmployeeModel> = new Array<EmployeeModel>();

    constructor(){
    }

    submitCreate(employee: EmployeeModel) {
        this.msgAlertCreate = Validation.hasRe(employee.re, this.employeeList);
        if (!this.msgAlertCreate) {
            employee.id = this.employeeList.length + 1;
            this.employeeList.push(employee);
            this.update.cleanForm();
            document.getElementById('btn-close')?.click();
        }
    }

    submitUpdate(employee: EmployeeModel){
        if (!this.msgAlertCreate) {
            this.employeeList.forEach(f => {
                if(f.id === employee.id){
                    f.client = employee.client;
                    f.name = employee.name;
                    f.functionEmployee = employee.functionEmployee;
                    f.re = employee.re;
                }
            });
            this.create.cleanForm();
            document.getElementById('btn-close')?.click();
        }
    }

    showFormUpdate(id: number){
        this.employee = {};
        if(id){
            this.getEmployeeOnList(id);
            setTimeout(() => {
                if(this.employee){
                    document.getElementById('openUpdate')?.click();
                }    
            }, 1);
            
        }
    }

    deleteEmployee(obj: any){
        if(obj){
            this.getEmployeeOnList(obj.id);
            const index = this.employeeList.findIndex(({id}) => id === obj.id);
            this.employeeList.splice(index, 1);
        }
    }

    private getEmployeeOnList(id: number){
        const employee = this.employeeList.find(employee => employee.id === id);
        if(employee){
            this.employee = employee || {};
            return;
        }
    }
}