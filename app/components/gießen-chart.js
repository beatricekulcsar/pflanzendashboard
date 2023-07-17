"use client";

import { BarChart } from "@tremor/react";

const data = [
	{
		Tag: "Montag",
		Gießen: 2,
	},
	{
		Tag: "Dienstag",
		Gießen: 3,
	},
	{
		Tag: "Mittwoch",
		Gießen: 1,
	}
];

export const GießenChart = () => {

	return (
		<BarChart
			className="mt-6 h-44"
			data={data}
			index="Tag"
			categories={["Gießen"]}
			colors={["blue"]}
			yAxisWidth={40}
			showXAxis={true}
			showGridLines={false}
			showYAxis={true}
			showLegend={false}
            allowDecimals={false}
		/>
	)
};


