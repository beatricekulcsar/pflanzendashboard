import { Card, Text, Flex, BadgeDelta, Metric } from "@tremor/react";
import { TemperaturChart } from "./temperatur-chart";

export const TemperaturCard = (props) => {
    const { data } = props;
    return (

        <Card>
            <Flex alignItems="start">
                <Text>Temperatur</Text>
                <BadgeDelta deltaType={"moderateIncrease"}>{"6°C"}</BadgeDelta>
            </Flex>
            <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                <Metric>{"31°C"}</Metric>
                <Text>from {"25°C"}</Text>
            </Flex>
            <TemperaturChart data={data} />
        </Card>
    )
}


