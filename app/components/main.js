'use client';

import { Grid } from "@tremor/react";
import { TemperaturCard } from './temperatur-card';
import { WassergehaltCard } from './wassergehalt-card';
import { HelligkeitCard } from './helligkeit-card';
import { LuftfeuchtigkeitCard } from './luftfeuchtigkeit-card';
import { GießenCard } from './gießen-card';
import {CalloutItems} from './callout';
import {GießenButton} from './gießen-button';



export const MainContent = (props) => {

    const { data } = props;


    return (

        <main className="p-4 w-full">

        
        <CalloutItems />
         
            

            <Grid numItemsMd={2} className="mt-6 gap-4">
                <WassergehaltCard data={data.Wassergehalt} />
                <HelligkeitCard data={data.Helligkeit} />
            </Grid>
            <Grid numItemsSm={2} numItemsLg={3} className="gap-4 mt-4">
                <TemperaturCard data={data.Temperatur} />
                <LuftfeuchtigkeitCard data={data.Luftfeuchtigkeit} />
                <GießenCard />
            </Grid>
        </main>
    )
};


