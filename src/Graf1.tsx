import Highcharts from 'highcharts';
import SeriesLabel from 'highcharts/modules/series-label';
import {
  HighchartsProvider, HighchartsChart, XAxis, YAxis, LineSeries, Tooltip
} from 'react-jsx-highcharts';

const plotOptions = {
  series: {
    pointStart: 2017,
  }
};

SeriesLabel(Highcharts);

export default function Graf1() {

  return (
    <div className="max-w-[620px] mx-auto">
      <h1 className="text-xl font-bold mb-1">Když nemusíš, nechoď</h1>
      <h2 className="mb-3">Podíl romských žáků na základních školách, pro které platí povinná školní docházka,
        je téměř dvojnásobný ve srovnání s mateřskými a středními školami.</h2>

      <HighchartsProvider Highcharts={Highcharts}>

        <HighchartsChart plotOptions={plotOptions}>
          <XAxis />
          <YAxis labels={{ enabled: true, formatter: function () { return this.isLast ? this.value + " %" : this.isFirst ? "" : this.value + "" } }}>
            <YAxis.Title>Podíl romských žáků</YAxis.Title>
            <LineSeries name="Mateřské školy" data={[1.9, 2.1, 1.9, 1.9, 1.8, 1.9]} color="#fd8d3c" dataLabels={{ enabled: true, color: "#fd8d3c", style: { textOutline: "none", fontSize: "0.8rem" }, formatter: function () { return this.point.index + 1 === this.series.data.length ? this.y?.toLocaleString("cs-CZ") + " %" : null } }} />
            <LineSeries name="Základní školy" data={[3.6, 3.7, 3.5, 3.6, 3.6, 3.5]} color="#e6550d" dataLabels={{ enabled: true, color: "#e6550d", style: { textOutline: "none", fontSize: "0.8rem" }, formatter: function () { return this.point.index + 1 === this.series.data.length ? this.y?.toLocaleString("cs-CZ") + " %" : null } }} />
            <LineSeries name="Střední školy" data={[1.3, 1.2, 1.2, 1.1, 1.1, 1.2]} color="#a63603" dataLabels={{ enabled: true, color: "#a63603", style: { textOutline: "none", fontSize: "0.8rem" }, formatter: function () { return this.point.index + 1 === this.series.data.length ? this.y?.toLocaleString("cs-CZ") + " %" : null } }} />
          </YAxis>
          <Tooltip valueSuffix=' %' shared={true} />
        </HighchartsChart>
      </HighchartsProvider>
    </div>
  )
}

