import { Card, Text, Title } from "@tremor/react";
import { WassergehaltChart } from "./wassergehalt-chart";

export const WassergehaltCard = (props) => {
    const { data } = props;
    return (

        <Card className="w-full">
            <Title>Wassergehalt</Title>
            <Text>Menge an Wasser in der Erde innerhalb der letzten 2 stunden.</Text>

            <WassergehaltChart data={data} />
        </Card>
    )
}



