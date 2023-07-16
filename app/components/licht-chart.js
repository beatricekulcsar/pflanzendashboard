"use client";

import { AreaChart } from "@tremor/react";

const sampleData = JSON.parse(`[
    {
      "Uhrzeit": "08:00",
      "Lumen": 1000
    },
    {
      "Uhrzeit": "08:15",
      "Lumen": 1100
    },
    {
      "Uhrzeit": "08:30",
      "Lumen": 1300
    },
    {
      "Uhrzeit": "08:45",
      "Lumen": 1400
    },
    {
      "Uhrzeit": "09:00",
      "Lumen": 1500
    },
    {
      "Uhrzeit": "09:15",
      "Lumen": 1600
    },
    {
      "Uhrzeit": "09:30",
      "Lumen": 1400
    },
    {
      "Uhrzeit": "09:45",
      "Lumen": 1300
    }
  ]
  `);

export const LichtChart = () => {
	return (
		<AreaChart
			className="mt-6 h-80"
			data={sampleData}
			index="Uhrzeit"
			categories={["Lumen"]}
			colors={["yellow"]}
			yAxisWidth={40}
			valueFormatter={(value) => `${value}lux`}
		/>
	)
};
