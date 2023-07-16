import { Card, Text, Flex, BadgeDelta, Metric} from "@tremor/react";
import { GießenChart } from "./gießen-chart";

export const GießenCard = () => {
    return (
        
        <Card>
            <Flex alignItems="start">
                <Text>Bewässerung</Text>
            </Flex>
            <GießenChart />
        </Card>
    )
}