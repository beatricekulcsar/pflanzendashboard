'use client';

import { Tabs } from 'flowbite-react';
import { Card, Grid, Text, Title } from "@tremor/react";
import { LichtChart } from "./licht-chart";
import { WasserChart } from "./wasser-chart";
import { Metadata } from "./metadata";



export const MainContent = (props) => {

	const { data } = props;

	console.log(data);
    
	return (
		
			<main className="p-4 w-full">
				<Tabs.Group
					aria-label="Pills"
					style="pills"
				>
					<Tabs.Item
						active
						title="Salat"
					>
						<Grid numItemsMd={2} className="mt-6 gap-4">
							<Card className="w-full">
								<Title>Wassergehalt</Title>
								<Text>Menge an Wasser in der Erde innerhalb der letzten 2 stunden.</Text>

								<WasserChart />
							</Card>
							<Card className="w-full">
								<Title>Lichteinfall</Title>
								<Text>Lichteinfall innerhalb der letzten 2 stunden.</Text>

								<LichtChart />
							</Card>
						</Grid>
						<Metadata />


					</Tabs.Item>
					<Tabs.Item title="Gurke">
						<Grid numItemsMd={2} className="mt-6 gap-4">
							<Card className="w-full">
								<Title>Wassergehalt</Title>
								<Text>Menge an Wasser in der Erde innerhalb der letzten 2 stunden.</Text>

								<WasserChart />
							</Card>
							<Card className="w-full">
								<Title>Lichteinfall</Title>
								<Text>Lichteinfall innerhalb der letzten 2 stunden.</Text>

								<LichtChart />
							</Card>
						</Grid>
						<Metadata />
					</Tabs.Item>
					<Tabs.Item title="Tomate">
						<Grid numItemsMd={2} className="mt-6 gap-4">
							<Card className="w-full">
								<Title>Wassergehalt</Title>
								<Text>Menge an Wasser in der Erde innerhalb der letzten 2 stunden.</Text>

								<WasserChart />
							</Card>
							<Card className="w-full">
								<Title>Lichteinfall</Title>
								<Text>Lichteinfall innerhalb der letzten 2 stunden.</Text>

								<LichtChart />
							</Card>
						</Grid>
						<Metadata />
					</Tabs.Item>
					<Tabs.Item title="Ringelblume">
						<Grid numItemsMd={2} className="mt-6 gap-4">
							<Card className="w-full">
								<Title>Wassergehalt</Title>
								<Text>Menge an Wasser in der Erde innerhalb der letzten 2 stunden.</Text>

								<WasserChart />
							</Card>
							<Card className="w-full">
								<Title>Lichteinfall</Title>
								<Text>Lichteinfall innerhalb der letzten 2 stunden.</Text>

								<LichtChart />
							</Card>
						</Grid>
						<Metadata />
					</Tabs.Item>
				</Tabs.Group>
			</main>
	)
};


