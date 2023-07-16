import { Button } from "@tremor/react"

export const GießenButton = props => {
    return (
        <Button size="lg" onClick={wasserpumpeAktivieren}>Wasserpumpe aktivieren</Button>
    );
};


async function wasserpumpeAktivieren() {
    const res = await fetch('http://10.4.94.149:8080/Pumpe?value=10', {method: "POST"});
    
}