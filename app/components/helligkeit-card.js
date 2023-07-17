import { Card, Text, Flex, BadgeDelta, Metric} from "@tremor/react";
import { HelligkeitChart } from "./helligkeit-chart";

export const HelligkeitCard = (props) => {
    const { data } = props;
    const latest = data[data.length - 1];
    const oldest = data[0];
    const delta = (latest.Helligkeit - oldest.Helligkeit).toFixed(2);
    let deltaType = "unchanged";
    if ( delta > 0 ) {
        deltaType = "moderateIncrease"
    } else {
        deltaType = "moderateDecrease"
    };
    return (
        
        <Card>
            <Flex alignItems="start">
                <Text>Helligkeit</Text>
                <BadgeDelta deltaType={deltaType}>{`${delta}%`}</BadgeDelta>
            </Flex>
            <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                <Metric>{`${latest.Helligkeit}%`}</Metric>
                <Text>{`from ${oldest.Helligkeit}%`} </Text>
            </Flex>
            <HelligkeitChart data={data} />
        </Card>
    )
}