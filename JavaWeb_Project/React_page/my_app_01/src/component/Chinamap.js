import React, { useEffect, useState } from 'react'
import * as echarts from "echarts"
import "./echarts_chinamap"


export default function Chinamap(props) {


    const [select, setSelect] = useState(true);

    useEffect(() => {
        const mapdat = [];
        if (select) {
            for (let k = 0; k < props.caseList.length; k++) {
                mapdat.push({ name: props.caseList[k].area, value: props.caseList[k].curConfirm });
            }
        } else {
            for (let k = 0; k < props.caseList.length; k++) {
                mapdat.push({ name: props.caseList[k].area, value: props.caseList[k].confirmedRelative });
            }
        }

        let mychart = echarts.init(document.getElementById("map"));
        const option = {
            grid: {
                containLabel: true
            },
            tooltip: {

                formatter: '省份：{b}</br>人数：{c}'
            },

            dataRange: {
                x: "left",
                y: "bottom",
                splitList: [
                    { start: 0, end: 0, lable: "0", color: "#ffffff" },
                    { start: 1, end: 9, lable: "1-9", color: "#ffcccc" },
                    { start: 10, end: 99, lable: "10-99", color: "#ff9999" },
                    { start: 100, end: 999, lable: "100-999", color: "#ff6666" },
                    { start: 1000, end: 9999, lable: "1000-9999", color: "#ff3333" },
                    { start: 10000, lable: ">10000", color: "#ff0000" }
                ]
            },
            series: [{
                type: "map",
                map: "china",
                emphasis: {
                    label: {
                        fontSize: "15px",
                        fontWeight: "700",
                        show: true
                    }
                },
                label: {
                    fontSize: "10px",
                    fontWeight: "700",
                    show: true
                },
                data: mapdat
            }]
        };
        mychart.setOption(option);
    }, [props.caseList, select]);

    return (
        <div id='chart1'>
            <div className='map_btn'>
                <div className={select ? "selectitem selected" : 'selectitem'} onClick={() => { setSelect(true) }}>现有确诊</div>
                <div className={!select ? "selectitem selected" : 'selectitem'} onClick={() => { setSelect(false) }}>新增确诊</div>
            </div>
            <div id='map'></div>
        </div>
    )
}
