import React, { useEffect, useState } from 'react'
import * as echarts from "echarts"

export default function Chart2(props) {

    const [selected, setSelected] = useState(1);

    useEffect(() => {
        let chartdata = props.trend.list;
        let chartdate = props.trend.updateDate;
        let input = props.topOverseasInput;
        let option1 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    tyep: "cross"
                },
                formatter: '{a0}:{c0}</br>{a1}:{c1}'
            },
            legend: {
                left: 'left'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',

                splitLine: { show: false },
                data: chartdate
            },
            yAxis: {
                type: 'value',
                minorSplitLine: {
                    show: true
                }
            },
            series: [
                {
                    name: chartdata[10].name,
                    data: chartdata[10].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                },
                {
                    name: chartdata[12].name,
                    data: chartdata[12].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                }
            ]
        };
        let option2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    tyep: "cross"
                },
                formatter: '{a0}:{c0}</br>{a1}:{c1}'
            },
            legend: {
                left: 'left'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',

                splitLine: { show: false },
                data: chartdate
            },
            yAxis: {
                type: 'value',
                minorSplitLine: {
                    show: true
                }
            },
            series: [
                {
                    name: chartdata[9].name,
                    data: chartdata[9].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                },
            ]
        };
        let option3 = {
            dataset: [
                {
                    dimensions: ['name', 'value'],
                    source: input
                },
                {
                    transform: {
                        type: 'sort',
                        config: { dimension: 'value', order: 'desc' }
                    }
                }
            ],
            xAxis: {
                type: 'category',
                axisLabel: { interval: 0, rotate: 0 }
            },
            yAxis: {},
            series: {
                type: 'bar',
                encode: { x: 'name', y: 'value' },
                datasetIndex: 1
            }

        };
        let chart2 = echarts.init(document.getElementById("target2"));
        switch (selected) {
            case 1:
                chart2.setOption(option1, true);
                break;
            case 2:
                chart2.setOption(option2, true);
                break;
            case 3:
                chart2.setOption(option3, true);
                break;
            default:
                break;
        }


    }, [props, selected])


    return (
        <div>
            <div id='chart2'>
                {
                    selected === 1 && <div className='header'>新增本土趋势</div>
                }
                {
                    selected === 2 && <div className='header'>境外输入新增趋势</div>
                }
                {
                    selected === 3 && <div className='header'>境外输入省级TOP10</div>
                }

                <div id='target2'>
                </div>
            </div>
            <div id='chart2_btn'>
                <div className={selected === 1 ? 'chart2_btn_item chart2_btn_selected' : 'chart2_btn_item'} onClick={() => { setSelected(1) }}>新增本土趋势</div>
                <div className={selected === 2 ? 'chart2_btn_item chart2_btn_selected' : 'chart2_btn_item'} onClick={() => { setSelected(2) }}>境外输入新增趋势</div>
                <div className={selected === 3 ? 'chart2_btn_item chart2_btn_selected' : 'chart2_btn_item'} onClick={() => { setSelected(3) }}>境外输入省级TOP10</div>
            </div>
        </div>

    )
}
