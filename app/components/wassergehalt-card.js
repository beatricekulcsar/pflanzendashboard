import { Card, Text, Flex, BadgeDelta, Metric } from "@tremor/react";
import { WassergehaltChart } from "./wassergehalt-chart";

export const WassergehaltCard = (props) => {
    const { data } = props;
    console.log(data)
    const latest = data[data.length - 1];
    const oldest = data[0];
    const delta = latest.Wassergehalt - oldest.Wassergehalt;
    let deltaType = "unchanged";
    if ( delta > 0 ) {
        deltaType = "moderateIncrease"
    } else {
        deltaType = "moderateDecrease"
    };
    return (

        <Card>
            <Flex alignItems="start">
                <Text>Wassergehalt</Text>
                <BadgeDelta deltaType={deltaType}>{`${delta}%`}</BadgeDelta>
            </Flex>
            <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                <Metric>{`${latest.Wassergehalt}%`}</Metric>
                <Text>{`from ${oldest.Wassergehalt}%`} </Text>
            </Flex>
            <WassergehaltChart data={data} />
        </Card>
    )
}



