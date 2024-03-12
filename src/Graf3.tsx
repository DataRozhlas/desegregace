import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';
import {
    HighchartsProvider, HighchartsChart, Chart, Legend, XAxis, YAxis, BubbleSeries, Tooltip
} from 'react-jsx-highcharts';

addHighchartsMore(Highcharts);

const sklonujZ = (n: number | undefined) => {
    if (typeof n === "undefined") return null
    if (n === 1) return "zřizovatel zřizuje"
    if (n > 1 && n < 5) return "zřizovatelé zřizují"
    return "zřizovatelů zřizuje"
}

const sklonujX = (n: number | undefined) => {
    if (typeof n === "undefined") return null
    if (n === 1) return "školu"
    if (n > 1 && n < 5) return "školy"
    if (n === 6) return "a více škol"
    return "škol"
}

const sklonujY = (n: number | undefined) => {
    if (typeof n === "undefined") return null
    if (n === 1) return "segregovanou"
    if (n > 1 && n < 5) return "segregované"
    return "segregovaných"
}



export default function Graf3() {

    return (
        <div className="max-w-[620px] mx-auto">
            <h1 className="text-xl font-bold mb-1">Velcí i malí</h1>
            <h2 className="mb-3">V ČR je 27 zřizovatelů, kteří mají jen jednu školu – a ta je segregovaná. Ale také např. 16 velkých zřizovatelů se šesti či více školami, z nichž jen jedna je segregovaná.</h2>

            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={{}}>
                    <Chart type="bubble" height={"100%"} marginLeft={50} />
                    <Legend verticalAlign='top' />
                    <XAxis gridLineWidth={1}>
                        <XAxis.Title>Zřizovaných škol</XAxis.Title>
                    </ XAxis>
                    <YAxis startOnTick={false} lineWidth={1} tickWidth={1}>
                        <YAxis.Title>Segregovaných škol</YAxis.Title>
                        <BubbleSeries name="velikost kolečka = počet zřizovatelů" color="#ce3272" data={[{ x: 1, y: 1, z: 27 }, { x: 2, y: 1, z: 11 }, { x: 3, y: 1, z: 6 }, { x: 3, y: 2, z: 1 }, { x: 4, y: 1, z: 4 }, { x: 4, y: 2, z: 1 }, { x: 5, y: 1, z: 3 }, { x: 6, y: 1, z: 16 }, { x: 6, y: 2, z: 7 }, { x: 6, y: 3, z: 4 }, { x: 6, y: 4, z: 2 }, { x: 6, y: 5, z: 1 }, { x: 6, y: 6, z: 3 }, { x: 6, y: 7, z: 1 }]} />
                    </YAxis>
                    <Tooltip formatter={function (this: Highcharts.TooltipFormatterContextObject) {
                        return `${this.point.z} ${sklonujZ(this.point.z)} ${this.point.x}  ${sklonujX(this.point.x)}, z toho ${this.point.y}  ${sklonujY(this.point.y)}.`
                    }} />
                </HighchartsChart>
            </HighchartsProvider>

        </div>
    )
}

