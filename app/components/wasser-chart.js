"use client";

import { AreaChart } from "@tremor/react";

const sampleData = JSON.parse(`[
	  {
		"Uhrzeit": "08:00",
		"Wassergehalt": 25.6
	  },
	  {
		"Uhrzeit": "08:15",
		"Wassergehalt": 24.8
	  },
	  {
		"Uhrzeit": "08:30",
		"Wassergehalt": 23.9
	  },
	  {
		"Uhrzeit": "08:45",
		"Wassergehalt": 22.7
	  },
	  {
		"Uhrzeit": "09:00",
		"Wassergehalt": 21.2
	  },
	  {
		"Uhrzeit": "09:15",
		"Wassergehalt": 20.5
	  },
	  {
		"Uhrzeit": "09:30",
		"Wassergehalt": 19.8
	  },
	  {
		"Uhrzeit": "09:45",
		"Wassergehalt": 18.9
	  }
	]
  `);

export const WasserChart = () => {
	return (
		<AreaChart
			className="mt-6 h-80"
			data={sampleData}
			index="Uhrzeit"
			categories={["Wassergehalt"]}
			colors={["blue"]}
			yAxisWidth={40}
			valueFormatter={(value) => `${value}%`}
		/>
	)
};
