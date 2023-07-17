import { Callout, Flex } from "@tremor/react";
import {GießenButton} from './gießen-button';

const data = [
    {
        Uhrzeit: "11:30",
        MessageWasser: "Die Pflanze wurde gegossen.",
        MessageTemperatur: "Die Temperatur ist ideal.",
        MessageHelligkeit: "Es ist etwas zu hell für die Pflanze.",

    },
    {
        Uhrzeit: "11:45",
        MessageWasser: "Die Pflanze wurde gegossen.",
        MessageTemperatur: "Die Temperatur ist ideal.",
        MessageHelligkeit: "Es ist etwas zu hell für die Pflanze.",
    },
    {
        Uhrzeit: "12:00",
        MessageWasser: "Die Pflanze wurde gegossen.",
        MessageTemperatur: "Die Temperatur ist ideal.",
        MessageHelligkeit: "Es ist etwas zu hell für die Pflanze.",
    },
];

console.log(data[0].MessageWasser);

export const CalloutItems = () => {

    const latest = data[data.length - 1];

    return (
        
        <Flex justifyContent="start" className="gap-12">
        <Callout
            className=" mt-4"
            title="Bewässerung"
            color="blue"
        >
            {latest.MessageWasser}
            
        </Callout>

     
        <Callout
            className="mt-4"
            title="Helligkeit"
            color="amber"
            >
            {latest.MessageHelligkeit}

        </Callout>
        
        <Callout
            className="mt-4"
            title="Temperatur"
            color="emerald"
            >
            {latest.MessageTemperatur}

        </Callout>

        </Flex>
    )
};