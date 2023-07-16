"use client";

import { AreaChart } from "@tremor/react";



export const WassergehaltChart = (props) => {
	const {data} = props;
	return (
		<AreaChart
			className="mt-6 h-44"
			data={data}
			index="Uhrzeit"
			categories={["Wassergehalt"]}
			colors={["blue"]}
			yAxisWidth={40}
			showXAxis={true}
            showGridLines={false}
            startEndOnly={true}
            showYAxis={true}
            showLegend={false}
			valueFormatter={(value) => `${value}%`}
		/>
	)
};


