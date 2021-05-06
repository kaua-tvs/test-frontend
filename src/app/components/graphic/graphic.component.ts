import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { EChartsOption } from 'echarts';
import { GraphicService } from "./graphic.service";

@Component({
    selector: 'graphic',
    templateUrl: './graphic.component.html',
    styleUrls: ['./graphic.component.sass']
})

export class GraphicComponent implements OnInit {
    chartOption: any = {};

    constructor(private graphicService: GraphicService) {

    }

    ngOnInit(): void {
       this.get_json_register_covid();
    }

    private get_json_register_covid(){
        this.graphicService.get_json_register_covid()
        .subscribe(
            suc => {
                if (suc) {
                    if (suc.length > 0) {
                        this.chartOption = {
                            xAxis: {
                                type: 'category',
                                data: [],
                            },
                            yAxis: {
                                type: 'value',
                            },
                            series:[
                                {
                                    data: [],
                                    type: 'line'
                                }
                            ]
                        };
                        suc.map((map: any) => {
                            this.chartOption.xAxis.data.push(map._id);
                            this.chartOption.series[0].data.push(map.obitosAcumulado);
                            
                        });
                    }
                }
            },
            err => console.log('Error service get_json_register_covid')
        );
    }
}

