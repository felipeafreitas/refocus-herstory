/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import ChevronRight from '../ui/ChevronRight';
import React from 'react';
import Note from '../ui/Note';
import Logo from '../ui/Logo';

type HomeTemplateProps = {
  artists: Artist[];
};

interface Artist {
  "First Name": string;
  "Surname": string;
  "Instrument": string[];
  "Picture Link": string;
  "Date of Birth": string;
  "Date of Death": string;
  "Publications / Albums": string;
  "Bands / Formations": string;
  "Description": string;
  "Sources": string;
  "First Appearance": number;
  "Last Appearance": number;
}

const HomeTemplate = ({ artists }: HomeTemplateProps) => {
  const instruments = Array.from(new Set(artists.map(artist => artist['Instrument']).filter(Boolean).flat()));

  const [slider, setSlider] = React.useState([1900, new Date().getFullYear()]);
  const [selectedInstruments, setSelectedInstruments] = React.useState(instruments);

  const filteredArtists = artists.filter((artist: Artist) => {
    return (
      artist['First Appearance'] >= slider[0] &&
      artist['Last Appearance'] <= slider[1] &&
      artist['Instrument'].some((instrument: string) =>
        selectedInstruments.includes(instrument)
      )
    );
  });

  return (
    <>
      <div className='flex flex-col gap-10 mb-12 justify-center items-center w-10/12'>
        <div className='flex justify-center items-center w-full sm:w-[354px]'>
          <Logo />
        </div>
        <div>
          <h2 className='text-2xl font-semibold	'>About the project</h2>
          <p>
            Welcome to "Hidden Jazz Gems: Unveiling Underrated Divas!" Discover
            the mind-blowing talents of underappreciated female jazz artists
            through curated profiles, rare recordings, and mind-boggling live
            performances. Join our rad community and embark on a wicked musical
            journey that'll leave you craving more. Get ready to groove with the
            sickest hidden treasures!
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-6 w-10/12 items-center mt-6'>
        <Slider
          defaultValue={slider}
          onValueChange={(v) => setSlider(v)}
          min={1900}
          max={new Date().getFullYear()}
          thumbOne={slider[0]}
          thumbTwo={slider[1]}
        />
        <div className='flex gap-2 flex-wrap'>
          {instruments.length > 0 && instruments.map((instrument) => (
            <Toggle defaultPressed={true} key={instrument} onClick={
              () => setSelectedInstruments(
                (state) => state.includes(instrument)
                  ? state.filter(i => i !== instrument)
                  : [...state, instrument]
              )
            }>
              {instrument}
            </Toggle>
          ))}
        </div>
      </div>
      <Separator className='my-10' />
      <div className='flex flex-row gap-3 w-full flex-wrap items-center justify-center'>
        {filteredArtists.map((artist) => (
          <Card key={`${artist?.['First Name']} ${artist?.['Surname']}`} className='p-4 max-w-[430px]'>
            <CardHeader className='flex flex-row justify-between'>
            <img
              src={artist['Picture Link']}
              alt=''
              className='rounded-full object-cover w-[100px] h-[100px]'
              width={100}
              height={100}
            />
              <div className='text-right flex flex-col justify-between'>
                <CardTitle>{`${artist?.['First Name']} ${artist?.['Surname']}`}</CardTitle>
                <CardDescription>{`Aktive Zeit: ${artist?.['First Appearance']} -  ${artist?.['Last Appearance']}`}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className='flex items-center gap-5'>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-1'>
                  {artist?.['Instrument']?.map((instrument) => (
                    <Badge key={instrument} variant='outline'>{instrument}</Badge>
                  ))}
                </div>
                <iframe
                  className="border-radius:12px"
                  src="https://open.spotify.com/embed/track/2XNNxHozxIxvJ6gUnjWjt3?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen;picture-in-picture"
                  loading="lazy"
                />
                <p className='text-ellipsis max-h-max[40px] line-clamp-3'>{artist?.['Description']}</p>
              </div>
            </CardContent>
            <CardFooter className='flex flex-row-reverse'>
              <Sheet key={'right'}>
                <SheetTrigger asChild>
                  <Button variant='outline'>MEHR <ChevronRight /></Button>
                </SheetTrigger>
                <SheetContent side={'right'} className="overflow-y-auto sm:max-w-[50%]">
                  <SheetHeader className='mb-4'>
                    <img
                      src={artist?.['Picture Link']}
                      alt=''
                      className='object-cover max-h-[50vh]'
                      width={'100%'}
                    />
                    <div className='px-6'>
                      <SheetTitle className=''>{`${artist?.['First Name']} ${artist?.['Surname']}`}</SheetTitle>
                      <span className=''>
                        {`Aktive Zeit: ${artist?.['First Appearance']} -  ${artist?.['Last Appearance']}`}
                      </span>
                    </div>
                  </SheetHeader>
                  <SheetDescription className='px-6 flex flex-col gap-6 mb-6'>
                    <div className='flex flex-row gap-1'>
                      {artist['Instrument']?.map((instrument) => (
                        <Badge key={instrument} variant='outline'>{instrument}</Badge>
                      ))}
                    </div>
                    <div className=''>
                      <div>{`Geboren am: ${artist?.['Date of Birth']}`}</div>
                      <div>{`Gestorben am: ${artist?.['Date of Death']}`}</div>
                    </div>
                    <p className='text-black'>{artist['Description']}</p>
                    <div className='text-black'>
                      <h2 className='text-xl font-bold'>Publikationen / Alben</h2>
                      <div>{artist?.['Publications / Albums']}</div>
                    </div>
                    <div className='text-black'>
                      <h2 className='text-xl	font-bold'>Bands / Formationen</h2>
                      <div>{artist?.['Bands / Formations']}</div>
                    </div>
                  </SheetDescription>
                  <SheetFooter className='p-6'>
                    <SheetClose asChild>
                      <Button type='submit'>Close</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default HomeTemplate;
