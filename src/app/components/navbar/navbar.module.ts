import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        NavbarComponent
    ]
})

export class NavbarModule {

}