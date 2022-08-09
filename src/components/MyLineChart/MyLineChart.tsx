import React, {FC, useMemo} from 'react';
import {Line, LineConfig} from "@ant-design/plots";

interface IProps {
    data: any[]
}

const MyLineChart: FC<IProps> = ({data}) => {
    const chartData = useMemo(() => {
        return data.map((item) => {
            return {date: item[0], price: item[1]}
        })
    }, [data])

    const minMax: { min: number, max: number } = useMemo(() => {
        const allPrice: number[] = [...data.map((item) => item[1])]

        const min: number = +(Math.min(...allPrice) * 0.9).toFixed(2)
        const max: number = +(Math.max(...allPrice) * 1.1).toFixed(2)

        return {min, max,}
    }, [])

    const config: LineConfig = {
        data: chartData,
        padding: "auto",
        xField: 'date',
        yField: 'price',
        xAxis: {
            type: 'timeCat',
            tickCount: 30,
        },
        yAxis: {
            tickCount: 5,
            minLimit: minMax.min,
            maxLimit: minMax.max,
            tickMethod: "quantile",
            label: {
                formatter: (text) => {
                    const num = +text
                    return num > 1 ? Math.round(num * 100) / 100 : num.toFixed(5)
                },
            },
            grid: {line: {style: {lineWidth: 0,},},},
        },
        autoFit: true,
        smooth: true,
        color: 'rgba(172, 104, 243, 0.78)',
    };

    return <Line {...config} />;
};

export default MyLineChart;