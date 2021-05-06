import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { GraphicModule } from "../../components/graphic/grapich.module";
import { TableCustomModule } from "../../components/table-custom/table-custom.module";
import { CreateComponent } from "./create/create.component";
import { HomeComponent } from "./home.component";
import { UpdateComponent } from "./update/update.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        HomeComponent,
        CreateComponent,
        UpdateComponent,
    ],
    imports: [
        TableCustomModule,
        GraphicModule,
        ReactiveFormsModule,
        BrowserModule,
        NgbModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule { }