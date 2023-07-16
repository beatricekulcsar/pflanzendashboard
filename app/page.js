import Sidebar from "./components/sidebar";
import { MainContent } from "./components/main";
import fakeJSON from "../public/sensordaten.json";

function transformWassergehaltData(input) {
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

function transformLuftfeuchtigkeitData(input) {
  const transformedData = input.map(item => {
    const { zeit, feuchtigkeitswert, helligkeitswert, temperaturwert, luftfeuchtigkeitswert } = item;
    const uhrzeit = new Date(zeit).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return {
      Uhrzeit: uhrzeit,
      luftfeuchtigkeit: luftfeuchtigkeitswert
    };
  });
  
  return transformedData;
}

function transformHelligkeitData(input) {
  const transformedData = input.map(item => {
    const { zeit, feuchtigkeitswert, helligkeitswert, temperaturwert, luftfeuchtigkeitswert } = item;
    const uhrzeit = new Date(zeit).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return {
      Uhrzeit: uhrzeit,
      helligkeit: helligkeitswert
    };
  });
  
  return transformedData;
}

function transformTemperaturData(input) {
  const transformedData = input.map(item => {
    const { zeit, feuchtigkeitswert, helligkeitswert, temperaturwert, luftfeuchtigkeitswert } = item;
    const uhrzeit = new Date(zeit).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return {
      Uhrzeit: uhrzeit,
      temperatur: temperaturwert
    };
  });
  
  return transformedData;
}

const isLocal = true;

async function getData() {
  const res = await fetch('http://10.4.94.149:8080/sensordaten')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (isLocal) {

    const fakeData = fakeJSON.slice(fakeJSON.length - 96, fakeJSON.length);
    return {
      wassergehalt: transformWassergehaltData(fakeData),
      luftfeuchtigkeit: transformLuftfeuchtigkeitData(fakeData),
      helligkeit: transformHelligkeitData(fakeData),
      temperatur: transformTemperaturData(fakeData)
    };
  }

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
    //return fake data if server is not reachable

  }

  const jsonData = await res.json();

  return {
    wassergehalt: transformWassergehaltData(jsonData),
    luftfeuchtigkeit: transformLuftfeuchtigkeitData(jsonData),
    helligkeit: transformHelligkeitData(jsonData),
    temperatur: transformTemperaturData(jsonData)
  };
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