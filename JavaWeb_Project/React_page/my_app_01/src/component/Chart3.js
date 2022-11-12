import React, { useEffect, useState } from 'react'
import * as echarts from "echarts"


export default function Chart3(props) {

    const [selected, setSelected] = useState(1);

    useEffect(() => {
        let chartdata = props.trend.list;
        let chartdate = props.trend.updateDate;
        let list=props.allForeignTrend.list;
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
                    name: chartdata[4].name,
                    data: chartdata[4].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                },
                {
                    name: chartdata[9].name,
                    data: chartdata[9].data,
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
                formatter: '{a0}:{c0}</br>{a1}:{c1}</br>{a2}:{c2}'
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
                    name: chartdata[0].name,
                    data: chartdata[0].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                }, {
                    name: chartdata[1].name,
                    data: chartdata[1].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                }, {
                    name: list[0].name,
                    data: list[0].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                },
            ]
        };
        let option3 = {
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
                    name: list[1].name,
                    data: list[1].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                },{
                    name: list[2].name,
                    data: list[2].data,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                },
            ]
        };

        let a=list[1].data.map((i,index)=>{return(i/list[0].data[index]).toFixed(2)})
        let b=list[2].data.map((i,index)=>{return(i/list[0].data[index]).toFixed(2)})
        let option4 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    tyep: "cross"
                },
                formatter: '{a0}:{c0}%</br>{a1}:{c1}%'
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
                    name: "治愈率",
                    data: a,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                },{
                    name: "死亡率",
                    data: b,
                    type: 'line',
                    showSymbol: false,
                    smooth: true
                },
            ]
        };
        let chart3 = echarts.init(document.getElementById("target3"));
        switch (selected) {
            case 1:
                chart3.setOption(option1, true);
                break;
            case 2:
                chart3.setOption(option2, true);
                break;
            case 3:
                chart3.setOption(option3, true);
                break;
            case 4:
                chart3.setOption(option4, true);
                break;
            default:
                break;
        }
    }, [props, selected])



    return (
        <div>
            <div id='chart3'>
                {
                    selected === 1 && <div className='header'>全国 总新增确诊/新增境外输入确诊 趋势</div>
                }
                {
                    selected === 2 && <div className='header'>全国 现有确诊/疑似/累计确诊 趋势</div>
                }
                {
                    selected === 3 && <div className='header'>全国 累计治愈/死亡 趋势</div>
                }
                {
                    selected === 4 && <div className='header'>全国 治愈率/死亡率 趋势</div>
                }
                <div id='target3'>
                </div>
            </div>
            <div id='chart3_btn'>
                <div className={selected === 1 ? 'chart3_btn_item chart2_btn_selected' : 'chart3_btn_item'} onClick={() => { setSelected(1) }}>全国疫情新增趋势</div>
                <div className={selected === 2 ? 'chart3_btn_item chart2_btn_selected' : 'chart3_btn_item'} onClick={() => { setSelected(2) }}>全国确诊疑似趋势</div>
                <div className={selected === 3 ? 'chart3_btn_item chart2_btn_selected' : 'chart3_btn_item'} onClick={() => { setSelected(3) }}>全国累计治愈死亡</div>
                <div className={selected === 4 ? 'chart3_btn_item chart2_btn_selected' : 'chart3_btn_item'} onClick={() => { setSelected(4) }}>治愈率死亡率</div>
            </div>
        </div>
    )
}
