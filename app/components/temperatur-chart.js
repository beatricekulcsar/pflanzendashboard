import { AreaChart } from "@tremor/react";

export const TemperaturChart = (props) => {
    const {data} = props;
    return (
        <AreaChart
            className="mt-6 h-36"
            data={data}
            index="Uhrzeit"
            categories={["Temperatur"]}
            colors={["gray"]}
            showXAxis={true}
            showGridLines={false}
            startEndOnly={true}
            showYAxis={false}
            showLegend={false}
        />
    );
}