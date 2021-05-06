export class EmployeeModel {
    name: string;
    functionEmployee: string;
    client: string;
    re: string;
    id: number;

    constructor(name: string, functionEmployee: string, client: string, re: string,id: number){
        this.name = name;
        this.functionEmployee = functionEmployee;
        this.client = client;
        this.re = re;
        this.id = id;
    }
}