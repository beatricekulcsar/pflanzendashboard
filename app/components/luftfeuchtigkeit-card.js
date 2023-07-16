import { Card, Text, Flex, BadgeDelta, Metric } from "@tremor/react";
import { LuftfeuchtigkeitChart } from "./luftfeuchtigkeit-chart";

export const LuftfeuchtigkeitCard = (props) => {
    const { data } = props;
    return (

        <Card>
            <Flex alignItems="start">
                <Text>Luftfeuchtigkeit</Text>
                <BadgeDelta deltaType={"moderateIncrease"}>{"6%"}</BadgeDelta>
            </Flex>
            <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                <Metric>{"42%"}</Metric>
                <Text>from {"36%"}</Text>
            </Flex>
            <LuftfeuchtigkeitChart data={data} />
        </Card>
    )
}



