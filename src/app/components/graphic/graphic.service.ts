import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class GraphicService {

    private readonly url_covid_brasil = environment.server.url_cases_covid_countries_brazil;

    constructor(private httpClient: HttpClient){

    }

    get_json_register_covid() :Observable<any>{
        return this.httpClient.get(this.url_covid_brasil);
    }
}