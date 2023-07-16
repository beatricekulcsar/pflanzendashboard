import Sidebar from "./components/sidebar";
import { MainContent } from "./components/main";

function transformData(input) {
  const transformedData = input.map(item => {
    const { zeit, feuchtigkeitswert, helligkeitswert, temperaturwert, luftfeuchtigkeitswert } = item;
    const uhrzeit = new Date(zeit).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return {
      Uhrzeit: uhrzeit,
      Wassergehalt: feuchtigkeitswert
    };
  });
  
  return transformedData;
}

async function getData() {
  const res = await fetch('http://10.4.94.149:8080/sensordaten')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const jsonData = await res.json();

  return transformData(jsonData);
  }

export default async function Page() {
  const data = await getData()

  console.log(data);

  return (
      <div className="h-full flex flex-row">
        <Sidebar />
        <MainContent data={data} />
      </div>
  )
};