import { Card, Text, Title} from "@tremor/react";
import { HelligkeitChart } from "./helligkeit-chart";

export const HelligkeitCard = (props) => {
    const {data} = props;
    return (
        
        <Card className="w-full">
            <Title>Helligkeit</Title>
            <Text>Lichteinfall innerhalb der letzten 2 stunden.</Text>

            <HelligkeitChart data={data} />
        </Card>
    )
}