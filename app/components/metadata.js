import { Card, Metric, Text, AreaChart, BadgeDelta, Flex, Grid } from "@tremor/react";

const data = [
	{
		Uhrzeit: "08:00",
		Luftfeuchtigkeit: 36,
		Temperatur: 21,
		Pressure: 1013.25,
	},
	{
		Uhrzeit: "09:00",
		Luftfeuchtigkeit: 30,
		Temperatur: 27,
		Pressure: 1012.75,
	},
	{
		Uhrzeit: "10:00",
		Luftfeuchtigkeit: 42,
		Temperatur: 31,
		Pressure: 1012.5,
	},
];

const categories = [
	{
		title: "Luftfeuchtigkeit",
		metric: "42%",
		metricPrev: "36%",
		delta: "6%",
		deltaType: "moderateIncrease",
	},
	{
		title: "Temperatur",
		metric: "31°C",
		metricPrev: "25°C",
		delta: "6°C",
		deltaType: "moderateIncrease",
	},
	{
		title: "Pressure",
		metric: "1012.5 hPa",
		metricPrev: "1013.25 hPa",
		delta: "0.75 hPa",
		deltaType: "moderateDecrease",
	},
];

export const Metadata = () => {
	return (
		<Grid numItemsSm={2} numItemsLg={3} className="gap-4 mt-4">
			{categories.map((item) => (
				<Card key={item.title}>
					<Flex alignItems="start">
						<Text>{item.title}</Text>
						<BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
					</Flex>
					<Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
						<Metric>{item.metric}</Metric>
						<Text>from {item.metricPrev}</Text>
					</Flex>
					<AreaChart
						className="mt-6 h-36"
						data={data}
						index="Uhrzeit"
						categories={[item.title]}
						colors={["gray"]}
						showXAxis={true}
						showGridLines={false}
						startEndOnly={true}
						showYAxis={false}
						showLegend={false}
					/>
				</Card>
			))}
		</Grid>
	);
}