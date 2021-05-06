import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { EChartsOption } from 'echarts';
import { GraphicService } from "./graphic.service";

@Component({
    selector: 'graphic',
    templateUrl: './graphic.component.html',
    styleUrls: ['./graphic.component.sass']
})

export class GraphicComponent implements OnInit {
    //https://api.covidactnow.org/v2/states.json?apiKey=d1965e729f6842649ddc41592d5f2068
    coutries: Array<any> = [];

    chartOption: any = {};

    constructor(private graphicService: GraphicService) {

    }

    ngOnInit(): void {
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

                            console.log('chartOption', this.chartOption);
                        }
                    }
                },
                err => console.log(err)
            )
    }
}

