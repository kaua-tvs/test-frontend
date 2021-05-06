import { Component, EventEmitter, Input, Output } from "@angular/core";
import { EmployeeModel } from "src/app/shared/models/employee.models";

@Component({
    selector: 'table-custom',
    templateUrl: './table-custom.component.html',
    styleUrls: ['./table-custom.component.sass']
})

export class TableCustomComponent {
    @Input() listEmployee: Array<EmployeeModel> = new Array<EmployeeModel>();
    @Output() deleteEmployee: EventEmitter<object> = new EventEmitter<object>();
    @Output() updateEmployee: EventEmitter<number> = new EventEmitter<number>();

    delete(index: number, id: number){
        this.deleteEmployee.emit({id: id, index: index});
    }

    update(id: number){
        this.updateEmployee.emit(id);
    }
}