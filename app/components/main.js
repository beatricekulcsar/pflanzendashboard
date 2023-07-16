'use client';

import { Tabs } from 'flowbite-react';
import { Card, Grid, Text, BadgeDelta, Flex, Metric } from "@tremor/react";
import { TemperaturCard } from './temperatur-card';
import { WassergehaltCard } from './wassergehalt-card';
import { HelligkeitCard } from './helligkeit-card';
import { LuftfeuchtigkeitCard } from './luftfeuchtigkeit-card';



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
                        <WassergehaltCard data={data.wassergehalt}/>
                        <HelligkeitCard data={data.helligkeit}/>
                    </Grid>
                    <Grid numItemsSm={2} numItemsLg={3} className="gap-4 mt-4">
                        <TemperaturCard data={data.temperatur}/>
                        <LuftfeuchtigkeitCard  data={data.luftfeuchtigkeit}/>
                        <Card>
                            <Flex alignItems="start">
                                <Text>Aktuelle Temperatur</Text>
                                <BadgeDelta deltaType={"moderateIncrease"}>{"6%"}</BadgeDelta>
                            </Flex>
                            <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                                <Metric>{"42%"}</Metric>
                                <Text>from {"36%"}</Text>
                            </Flex>
                            
                        </Card>
                    </Grid>
                    


                </Tabs.Item>
                {/* <Tabs.Item title="Gurke">
						<Grid numItemsMd={2} className="mt-6 gap-4">
							<Card className="w-full">
								<Title>Wassergehalt</Title>
								<Text>Menge an Wasser in der Erde innerhalb der letzten 2 stunden.</Text>

								<WasserGehaltChart data={data.wassergehalt} />
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

								<WasserGehaltChart data={data.wassergehalt} />
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

								<WasserGehaltChart data={data.wassergehalt} />
							</Card>
							<Card className="w-full">
								<Title>Lichteinfall</Title>
								<Text>Lichteinfall innerhalb der letzten 2 stunden.</Text>

								<LichtChart />
							</Card>
						</Grid>
						<Metadata />
					</Tabs.Item> */}
            </Tabs.Group>
        </main>
    )
};


