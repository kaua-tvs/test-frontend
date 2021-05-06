import { EmployeeModel } from "../shared/models/employee.models";

export class Validation {
    static removeChar (value: string){
        if(value){
            value = value.replace(/\D/gi, '');
        }

        return value;
    }

    static hasRe(newRe: string, listDbMock: Array<EmployeeModel>){
        let error = '';

        if(listDbMock && newRe){
            listDbMock.map(({re}) => {
                if(re === newRe){
                    error = 'O RE informado é existente, por favor colocar outro RE.';
                }
            });
        }   

        return error ;
    }
}