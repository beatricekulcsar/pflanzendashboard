import { Card, Text, Flex, BadgeDelta, Metric } from "@tremor/react";
import { TemperaturChart } from "./temperatur-chart";

export const TemperaturCard = (props) => {
    const { data } = props;
    const latest = data[data.length - 1];
    const oldest = data[0];
    const delta = latest.Temperatur - oldest.Temperatur;
    let deltaType = "unchanged";
    if ( delta > 0 ) {
        deltaType = "moderateIncrease"
    } else {
        deltaType = "moderateDecrease"
    };
    return (

        <Card>
            <Flex alignItems="start">
                <Text>Temperatur</Text>
                <BadgeDelta deltaType={deltaType}>{`${delta}°C`}</BadgeDelta>
            </Flex>
            <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                <Metric>{`${latest.Temperatur}°C`}</Metric>
                <Text> {`from ${oldest.Temperatur}°C`}</Text>
            </Flex>
            <TemperaturChart data={data} />
        </Card>
    )
}


