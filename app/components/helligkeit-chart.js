"use client";

import { AreaChart } from "@tremor/react";



export const HelligkeitChart = (props) => {
  const {data} = props;
	return (
		<AreaChart
			className="mt-6 h-80"
			data={data}
			index="Uhrzeit"
			categories={["helligkeit"]}
			colors={["yellow"]}
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


