import { AreaChart } from "@tremor/react";

export const LuftfeuchtigkeitChart = (props) => {
    const {data} = props;
    return (
        <AreaChart
            className="mt-6 h-36"
            data={data}
            index="Uhrzeit"
            categories={["luftfeuchtigkeit"]}
            colors={["gray"]}
            showXAxis={true}
            showGridLines={false}
            startEndOnly={true}
            showYAxis={false}
            showLegend={false}
        />
    );
}