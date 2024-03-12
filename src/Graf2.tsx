import { useEffect } from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsProvider, HighchartsChart, Chart, Legend, XAxis, YAxis, BarSeries, Tooltip
} from 'react-jsx-highcharts';
import { usePostMessageWithHeight } from "./hooks/usePostHeightMessage";


export default function Graf2() {
    const { containerRef, postHeightMessage } = usePostMessageWithHeight(`desegregace-graf-2`);

    useEffect(() => {
        postHeightMessage();
    }, []);

    return (
        <div ref={containerRef} className="max-w-[620px] mx-auto">
            <h1 className="text-xl font-bold mb-1">Na 129 základních školách je Romů víc než třetina...</h1>
            <h2 className="mb-3">Údaje za školní rok 2021/22</h2>

            <HighchartsProvider Highcharts={Highcharts}>

                <HighchartsChart plotOptions={{}}>
                    <Chart type="bar" marginRight={20} marginLeft={2} height={200} />
                    <Legend verticalAlign='top' />
                    <XAxis categories={[""]} />
                    <YAxis reversedStacks={false} labels={{ formatter: function () { return this.isLast ? this.value + " %" : this.value.toString() } }}>
                        <BarSeries name="bez romských žáků" data={[2381]} stacking="percent" color="#f2d0a2" />
                        <BarSeries name="s romskými žáky" data={[1739]} stacking='percent' color="#85a1e0" />
                        <BarSeries name="s více než třetinou romských žáků" data={[129]} stacking='percent' color="#5651ce" />
                    </YAxis>
                    <Tooltip valueSuffix=' škol' />
                </HighchartsChart>
                <h1 className="text-xl font-bold mt-7 mb-1">... na stovce škol víc než polovina</h1>

                <HighchartsChart plotOptions={{}}>
                    <Chart type="bar" marginRight={20} marginLeft={2} height={200} />
                    <Legend verticalAlign='top' reversed={true} />
                    <XAxis categories={[""]} />
                    <YAxis reversedStacks={true} labels={{ formatter: function () { return this.isLast ? this.value + " škol" : this.value.toString() } }}>
                        <BarSeries name="33-50 % Romů" data={[29]} stacking="normal" color="#92b8dd" />
                        <BarSeries name="51-75 % Romů" data={[69]} stacking='normal' color="#6685d1" />
                        <BarSeries name="76 % a více Romů " data={[31]} stacking='normal' color="#4850bc" />
                    </YAxis>
                    <Tooltip valueSuffix=' škol' />
                </HighchartsChart>

            </HighchartsProvider>

        </div>
    )
}

