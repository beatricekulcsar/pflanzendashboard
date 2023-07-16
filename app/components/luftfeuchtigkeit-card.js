import { Card, Text, Flex, BadgeDelta, Metric } from "@tremor/react";
import { LuftfeuchtigkeitChart } from "./luftfeuchtigkeit-chart";

export const LuftfeuchtigkeitCard = (props) => {
    const { data } = props;
    const latest = data[data.length - 1];
    const oldest = data[0];
    const delta = latest.Luftfeuchtigkeit - oldest.Luftfeuchtigkeit;
    let deltaType = "unchanged";
    if ( delta > 0 ) {
        deltaType = "moderateIncrease"
    } else {
        deltaType = "moderateDecrease"
    };
    
    
    return (

        <Card>
            <Flex alignItems="start">
                <Text>Luftfeuchtigkeit</Text>
                <BadgeDelta deltaType={deltaType}>{`${delta}%`}</BadgeDelta>
            </Flex>
            <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                <Metric>{`${latest.Luftfeuchtigkeit}%`}</Metric>
                <Text>{`from ${oldest.Luftfeuchtigkeit}%`} </Text>
            </Flex>
            <LuftfeuchtigkeitChart data={data} />
        </Card>
    )
}



