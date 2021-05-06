import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TableCustomComponent } from "./table-custom.component";

@NgModule({
    declarations: [
        TableCustomComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        TableCustomComponent
    ]
})

export class TableCustomModule {}