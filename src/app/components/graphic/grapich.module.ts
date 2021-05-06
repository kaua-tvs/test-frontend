import { NgModule } from "@angular/core";
import { GraphicComponent } from "./graphic.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgxEchartsModule } from "ngx-echarts";
import { GraphicService } from "./graphic.service";
@NgModule({
    declarations: [
        GraphicComponent
    ],
    imports: [
        BrowserModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
        }),
    ],
    exports: [
        GraphicComponent
    ],
    providers: [GraphicService]
})

export class GraphicModule {}