export class EmployeeModel {
    name: string;
    functionEmployee: string;
    functionEmployeeId: string;
    client: string;
    re: string;
    id: number;

    constructor(name: string, functionEmployee: string, client: string, re: string,id: number, functionEmployeeId: string){
        this.name = name;
        this.functionEmployee = functionEmployee;
        this.client = client;
        this.re = re;
        this.id = id;
        this.functionEmployeeId = functionEmployeeId;
    }
}